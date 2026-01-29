function User(email,password){
    this._email = email,
    this._password = password

    Object.defineProperty(this,'email',{
        gte: function(){
            return this._email.toUpperCase()
        },
        set:  function(value){
            this._email = value
        }
    })
    Object.defineProperty(this,'password',{
        gte: function(){
            return this._password.toUpperCase()
        },
        set:  function(value){
            this._password = value
        }
    })
}

const chai = new User ("chai@gmail.com", "chai")
console.log(chai)