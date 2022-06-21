export type formType = {
    label?: string,
    controlType: string,
    placeholder?: string,
    required: boolean,
    autofillOff: boolean,
    emailRequired?: boolean,
    pattern: string,
    defaultValue: any,
    options: { name: string, url: string }[]
}


const template_ref: any = {
    name: {
        label: 'Name',
        controlType: 'text',
        placeholder: 'Enter your name',
        autofillOff: true,
        required: true
    },
    mobile: {
        label: 'Mobile',
        controlType: 'text',
        placeholder: '+91 XXXXXXXXXX',
        required: true,
        autofillOff: true,
        pattern: /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/g
    },
    email: {
        label: 'Email Id',
        controlType: 'email',
        emailRequired: true,
        placeholder: 'Enter your email ID',
        required: true
    },
    gender: {
        label: 'Gender',
        controlType: 'radio',
        defaultValue: 'Male',
        options: ['Male', 'Female']
    },
    dateTimePicker: {
        label: 'Select Date & Time',
        controlType: 'dateTimePicker',
        defaultValue: new Date(),
        placeholder: 'DD/MM/YYYY',
        required: true
    },
    password: {
        label: 'Password',
        controlType: 'password',
        required: true
    },
    address: {
        controlType: 'textarea',
        required: true,
        label: 'Current Address',
    },
    city: {
        controlType: 'dropdown',
        required: true,
        options: [
            { name: 'Surat', url: 'first' },
            { name: 'Ahmedabad', url: 'second' },
            { name: 'Baroda', url: 'third' },
            { name: 'Rajkot', url: 'second' }
        ]
    },
    profileImg: {
        controlType: 'fileUploader',
        required: true,
    }
}

const segment = {
    userForm: {
        fields: [
            'name',
            'mobile',
            'gender',
            'email',
            'dateTimePicker',
            'address',
            'city',
            'profileImg'
        ]
    },
    signInForm: {
        fields: ['email', 'password']
    }
}

export { segment, template_ref }

