"use strict";(self.webpackChunkarray_form_demo=self.webpackChunkarray_form_demo||[]).push([[769],{9769:(U,f,s)=>{s.r(f),s.d(f,{ArrayFormModule:()=>F});var p=s(6895),n=s(433),t=s(1571),a=s(7340);let l=(()=>{class e{constructor(){this.userList=[{name:"Tejas",tasks:[{name:"task1",priority:2,time:"02:00"},{name:"task2",priority:4,time:"02:00"},{name:"task3",priority:1,time:"14:00"},{name:"task4",priority:6,time:"02:00"}]},{name:"Raju",tasks:[{name:"Raju-1",priority:2,time:"18:00"},{name:"Raju-2",priority:4,time:"02:00"},{name:"Raju-3",priority:1,time:"02:00"},{name:"Raju-4",priority:6,time:"02:00"}]}]}get users(){return this.userList}addUser(o){this.userList.push(o),console.log("this.userList ==>",this.userList)}updateUserById(o,r){this.userList[o]=r}removeRemove(o){this.userList.splice(o,1)}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})();var u=s(1587);function T(e,i){if(1&e&&(t.TgZ(0,"tr")(1,"th",9),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA()()),2&e){const o=i.$implicit,r=i.index;t.xp6(2),t.Oqu(r+1),t.xp6(2),t.Oqu(o.name),t.xp6(2),t.Oqu(o.priority),t.xp6(2),t.Oqu(o.time)}}const v=function(e){return["/edit",e]};function Z(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"div")(1,"h5",2),t._uU(2),t.TgZ(3,"span",3)(4,"a",4),t._uU(5,"Edit"),t.qZA(),t.TgZ(6,"a",5),t.NdJ("click",function(){const c=t.CHM(o).index,m=t.oxw();return t.KtG(m.deleteUser(c))}),t._uU(7,"Delete"),t.qZA()()(),t.TgZ(8,"table",6)(9,"thead")(10,"tr")(11,"th",7),t._uU(12,"#"),t.qZA(),t.TgZ(13,"th",7),t._uU(14,"Task name"),t.qZA(),t.TgZ(15,"th",7),t._uU(16,"Priority"),t.qZA(),t.TgZ(17,"th",7),t._uU(18,"Time"),t.qZA()()(),t.TgZ(19,"tbody"),t.YNc(20,T,9,4,"tr",8),t.qZA()()()}if(2&e){const o=i.$implicit,r=i.index;t.Q6J("@fadeIn",void 0),t.xp6(2),t.hij("User name: ",o.name," "),t.xp6(2),t.Q6J("routerLink",t.VKq(4,v,r)),t.xp6(16),t.Q6J("ngForOf",o.tasks)}}let _=(()=>{class e{constructor(o){this.todoService=o}ngOnInit(){}deleteUser(o){this.todoService.users.splice(o,1)}trackByItems(o,r){return o}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(l))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-todo-list"]],decls:2,vars:2,consts:[[1,"px-5"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"mt-5"],[1,"float-end"],["href","javascript:void(0)",1,"mx-3",3,"routerLink"],["href","javascript:void(0)",3,"click"],[1,"table","table-striped","mb-3"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0),t.YNc(1,Z,21,6,"div",1),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngForOf",r.todoService.users)("ngForTrackBy",r.trackByItems))},dependencies:[p.sg,u.yS],data:{animation:[(0,a.X$)("fadeIn",[(0,a.SB)("void",(0,a.oB)({opacity:0})),(0,a.eR)(":enter",[(0,a.jt)(700)]),(0,a.eR)(":leave",[(0,a.jt)(700)])])]}}),e})();function g(e,i){if(1&e){const o=t.EpF();t.ynx(0,15),t.TgZ(1,"div",9),t._UZ(2,"input",16),t.qZA(),t.TgZ(3,"div",10),t._UZ(4,"input",17),t.qZA(),t.TgZ(5,"div",11),t._UZ(6,"input",18),t.qZA(),t.TgZ(7,"div",19)(8,"button",20),t.NdJ("click",function(){const c=t.CHM(o).index,m=t.oxw();return t.KtG(m.removeControl(c))}),t._uU(9," X "),t.qZA()(),t.BQk()}if(2&e){const o=i.index,r=t.oxw();t.Q6J("formGroupName",o),t.xp6(8),t.Q6J("disabled",r.formArray.controls.length<2)}}let y=(()=>{class e{constructor(o,r,d,c){this.fb=o,this.todoService=r,this.route=d,this.router=c,this.editMode=!1,this.todoListForm=this.fb.group({name:["",n.kI.required],tasks:this.fb.array([])}),this.route.params.subscribe(({id:m})=>{+m>-1&&this.todoService.users[+m]&&(this.editMode=!0,this.selectedUser=this.todoService.users[+m],this.formArray.controls=[],this.selectedUser.tasks.forEach(()=>this.addNewControl()),this.todoListForm.patchValue(this.selectedUser))})}get formArray(){return this.todoListForm.get("tasks")}ngOnInit(){this.editMode||this.addNewControl()}addNewControl(o,r,d){this.formArray.push(this.fb.group({name:[o||"",n.kI.required],priority:[r||"",n.kI.required],time:[d||"",n.kI.required]}))}removeControl(o){this.formArray.removeAt(o)}saveTodoList(){this.editMode?this.todoService.updateUserById(this.route.snapshot.params.id,this.todoListForm.value):this.todoService.addUser(this.todoListForm.value),this.router.navigate(["../../"]),this.todoListForm.reset()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(n.QS),t.Y36(l),t.Y36(u.gz),t.Y36(u.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-todo-form"]],decls:25,vars:6,consts:[[1,"form-group"],[1,"text-center"],[3,"formGroup"],[1,"row","mb-2"],[1,"col-md-12"],["for","userName"],["type","text","id","userName","formControlName","name",1,"form-control"],[1,"btn","btn-primary",3,"disabled","click"],[1,"row"],[1,"col-md-6"],[1,"col-md-2"],[1,"col-md-3"],["formArrayName","tasks",1,"row"],[3,"formGroupName",4,"ngFor","ngForOf"],[1,"btn","btn-success","my-3",3,"disabled","click"],[3,"formGroupName"],["type","text","formControlName","name",1,"form-control"],["type","number","min","0","formControlName","priority",1,"form-control"],["type","time","formControlName","time",1,"form-control"],[1,"col-md-1","mb-2"],[1,"btn","btn-danger",3,"disabled","click"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2),t.qZA(),t.TgZ(3,"form",2)(4,"div",3)(5,"div",4)(6,"div",0)(7,"label",5),t._uU(8,"Enter Name"),t.qZA(),t._UZ(9,"input",6),t.qZA()()(),t._UZ(10,"hr"),t.TgZ(11,"button",7),t.NdJ("click",function(){return r.addNewControl()}),t._uU(12,"+ Add Task"),t.qZA(),t.TgZ(13,"div",8)(14,"div",9),t._uU(15,"Task Name"),t.qZA(),t.TgZ(16,"div",10),t._uU(17,"Priority"),t.qZA(),t.TgZ(18,"div",11),t._uU(19,"Time"),t.qZA()(),t.TgZ(20,"div",12),t.YNc(21,g,10,2,"ng-container",13),t._UZ(22,"hr"),t.TgZ(23,"button",14),t.NdJ("click",function(){return r.saveTodoList()}),t._uU(24),t.qZA()()()()),2&o&&(t.xp6(2),t.Oqu(r.editMode?"Update user":"Add new user"),t.xp6(1),t.Q6J("formGroup",r.todoListForm),t.xp6(8),t.Q6J("disabled",r.todoListForm.invalid),t.xp6(10),t.Q6J("ngForOf",r.formArray.controls),t.xp6(2),t.Q6J("disabled",r.todoListForm.invalid),t.xp6(1),t.hij("",r.editMode?"Update ":"Save ","Info"))},dependencies:[p.sg,n._Y,n.Fj,n.wV,n.JJ,n.JL,n.qQ,n.sg,n.u,n.x0,n.CE]}),e})(),h=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-array-form"]],decls:6,vars:0,consts:[[1,"container","pt-5"],[1,"row"],[1,"col-md-6"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"app-todo-form"),t.qZA(),t.TgZ(4,"div",2),t._UZ(5,"app-todo-list"),t.qZA()()())},dependencies:[_,y],encapsulation:2}),e})();const A=[{path:"",component:h,pathMatch:"full"},{path:"edit/:id",component:h,pathMatch:"full"}];let F=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[l],imports:[p.ez,n.UX,u.Bz.forChild(A)]}),e})()}}]);