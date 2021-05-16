import store from "./Redux/Store"
import { wrongCred } from "./Redux/Actions"
var accounts = localStorage.getItem("accounts")
  ? JSON.parse(localStorage.getItem("accounts"))
  : [{ username: "sara", password: "1234" }]
  
const Auth = {
  _isAuthenticated: false,
  authenticate(name, pass, cb) {
    for (const acc of accounts) {
      if (acc.username === name && acc.password === pass) {
        this._isAuthenticated = true
        setTimeout(
          () =>
            cb({
              name: name,
            }),
          100
        )
      }
    }
    if (!this._isAuthenticated) {
      setTimeout(() => store.dispatch(wrongCred(true, "نام کاربری یا رمز ورود اشتباه میباشد")), 200)
      setTimeout(() => store.dispatch(wrongCred(false)), 20000)
    }
    localStorage.setItem('accounts',JSON.stringify(accounts))
  },

  signUp(name, pass, cb) {
    for (const acc of accounts) {
      if (acc.username === name) {
          setTimeout(() => store.dispatch(wrongCred(true, "نام کاربری تکراری می باشد")), 200)
          setTimeout(() => store.dispatch(wrongCred(false)), 20000)
          return
      }
    }
    console.log(accounts)
    accounts.push({username: name, password: pass})
    this._isAuthenticated = true
    setTimeout(
      () =>
        cb({
          name: name,
        }),
      100
    )
    localStorage.setItem("accounts", JSON.stringify(accounts))
  },

  signout(cb) {
    this._isAuthenticated = false
    setTimeout(cb, 100)
  },
}

export default Auth
