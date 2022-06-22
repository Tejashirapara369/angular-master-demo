import { Component, OnInit } from '@angular/core';
import { FormArray, UntypedFormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { createPasswordStrengthValidator } from 'src/app/shared/validators/mcq-valid-options.validator';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {
  showAddQuestionForm: boolean = false;
  verifyAnswerIndex: number | undefined;
  result: string | undefined;
  subscription: Subscription | undefined;

  questionList = [
    {
      question: "National animal of india?",
      questionType: "MCQ",
      options: [
        {
          value: 'A',
          text: 'Tiger'
        },
        {
          value: 'B',
          text: 'Lion'
        },
        {
          value: 'C',
          text: 'Cow'
        },
        {
          value: 'D',
          text: 'Deer'
        },
      ],
      rightAnswer: 'A'
    },
    {
      question: "National sport of india?",
      questionType: "MCQ",
      options: [
        {
          value: 'A',
          text: 'Kabbadi'
        },
        {
          value: 'B',
          text: 'Cricket'
        },
        {
          value: 'C',
          text: 'Hockey'
        },
        {
          value: 'D',
          text: 'Football'
        },
      ],
      rightAnswer: 'C'
    },
    {
      question: "Something write about your self",
      questionType: "BRIEF",
      rightAnswer: ['name', 'my', 'study', 'is']
    }
  ]

  optionsFormArray: FormArray = this.fb.array([
    this.fb.group({ value: [{value:'A', disabled: true}], text: ['', Validators.required] }),
    this.fb.group({ value: [{value:'B', disabled: true}], text: ['', Validators.required] }),
    this.fb.group({ value: [{value:'C', disabled: true}], text: ['', Validators.required] }),
    this.fb.group({ value: [{value:'D', disabled: true}], text: ['', Validators.required] }),
  ])

  newQuestionForm = this.fb.group({
    question: ['', Validators.required],
    questionType: ['MCQ'],
    options: this.optionsFormArray,
    rightAnswer: ['', [Validators.required, createPasswordStrengthValidator()]]
  })

  questionForm = this.fb.group({
    questions: this.fb.array([])
  });

  constructor(private readonly fb: UntypedFormBuilder) { }

  get questionArray() {
    return this.questionForm.get('questions') as FormArray;
  }

  get optionsArray() {
    return this.newQuestionForm.get('options') as FormArray;
  }

  ngOnInit(): void {
    this.questionList.forEach(quest => this.addQuestionControl());

    this.newQuestionForm.get('questionType')?.valueChanges.subscribe((value: any) => {
      this.newQuestionForm.get('rightAnswer')?.clearValidators();
      if (value === 'MCQ') {
        this.newQuestionForm.addControl('options', this.optionsFormArray);
        this.newQuestionForm.get('rightAnswer')?.addValidators(createPasswordStrengthValidator());
      } else {
        this.newQuestionForm.removeControl('options');
      }
      this.newQuestionForm.get('rightAnswer')?.addValidators([Validators.required]);
      this.newQuestionForm.get('rightAnswer')?.updateValueAndValidity();
    })
  }

  addQuestionControl() {
    const formGroup = this.fb.group({
      answer: ['', Validators.required],
    })
    this.questionArray.push(formGroup);
  }

  // onSubmit() {
  //   console.log('this.questionForm.value ==>', this.questionForm.value)
  //   console.log('this.newQuestionForm.value ==>', this.newQuestionForm.value)
  // }

  addQuestion() {
    const question = this.newQuestionForm.getRawValue();
    this.addQuestionControl();
    if (question.questionType === 'BRIEF') {
      question.rightAnswer = question.rightAnswer.split(',');
    }
    console.log('question ==>', question)
    this.questionList.push(question);
    this.newQuestionForm.reset({ questionType: 'MCQ' });
    this.optionsFormArray.reset([{ value: 'A', text:'' }, { value: 'B', text:'' }, { value: 'C', text:'' }, { value: 'D', text:'' }]);
  }

  checkAnswer(index: number) {
    if (this.verifyAnswerIndex === index) {
      return;
    }
    this.verifyAnswer(index);
    this.subscription && this.subscription.unsubscribe();
    this.subscription = this.questionArray.at(index).valueChanges.subscribe(value => {
      if (value) this.verifyAnswer(index);
    })
  }

  verifyAnswer(index: number) {
    this.verifyAnswerIndex = index;
    const correctValue = this.questionList[index];
    const userValue = this.questionArray.at(index).value;

    if (correctValue.questionType === 'MCQ') {
      this.result = userValue.answer === correctValue.rightAnswer ? 'Correct Answer' : 'Wrong Answer';
    } else {
      const answer = correctValue.rightAnswer as string[];
      let counter = 0;
      answer.forEach(el => {
        if (userValue.answer.includes(el)) {
          counter++;
        }
      });
      const percent = (100 * counter) / answer.length;
      if (percent < 33) {
        this.result = 'Wrong Answer'
      } else {
        this.result = percent.toFixed(2) + "% correct"
      }
    }
  }
}
