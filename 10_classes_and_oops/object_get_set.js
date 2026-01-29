const User ={
    _email: 's@sc.com',
    _password: "sk@",

    get _email(){
    return this._email.toUpperCase()

    },

    set _email (value){
        this._email = value
    }
}


const tea =  Object.create(User)
console.log(tea.email);

