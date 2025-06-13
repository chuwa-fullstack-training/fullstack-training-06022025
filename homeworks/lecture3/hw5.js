/** Implement a User class with a private variable #password (Use closure, not # syntax).
 * The class should have methods to setPassword and checkPassword.
 * 
 * Example:
 * const user = new User();
 * user.setPassword('123456');
 * user.checkPassword('123456'); // true
 * user.checkPassword('123'); // false
 * user.password; // undefined
 * user.setPassword('123'); // Error
 * user.checkPassword('123'); // false
 * user.password; // undefined
 */
function User() {
    // implement here
    let password;
    this.setPassword = function(newPass) {
        if(typeof newPass !== 'string' || newPass.length < 6){
            throw new Error('invalid password');
        } else (password = newPass);
    }
    this.checkPassword = function(input) {
        return password === input;
    }

}

 const user = new User();
 user.setPassword('123456');
 user.checkPassword('123456'); // true
 user.checkPassword('123'); // false
 user.password; // undefined
 user.setPassword('123'); // Error
 user.checkPassword('123'); // false
 user.password; // undefined