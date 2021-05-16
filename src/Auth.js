import store from './Redux/Store'
import { wrongCred } from './Redux/Actions';
var accounts = [{ username: "sara", password: "1234" }];
const Auth = {
    _isAuthenticated: false,
    authenticate(name, pass, cb) {
        for (const acc of accounts) {
            if (acc.username === name && acc.password === pass) {
                this._isAuthenticated = true;
                setTimeout(
                    () =>
                    cb({
                        name: name,
                    }),
                    100
                );
            }
        }
        if (!this._isAuthenticated) {
            store.dispatch(wrongCred(true))
            setTimeout(() => store.dispatch(wrongCred(false)), 20000)
        }
    },

    signout(cb) {
        this._isAuthenticated = false;
        setTimeout(cb, 100);
    },
};

export default Auth;