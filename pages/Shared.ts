import { User } from "../test-data/LoginData";

export class Shared {

    static readonly URL = process.env.URL ?? 'not found';
    static readonly PASSWORD_1 = process.env.PASSWORD_1 ?? 'not found';
    static readonly EMAIL_PREFIX = process.env.ALIAS_EMAIL_PREFIX ?? 'not found';
    static readonly EMAIL_SUFFIX = process.env.ALIAS_EMAIL_SUFFIX ?? 'not found';

    /**
     * Saves the newly registered user data to a file to be kept for reference
     * this is needed since there is no current way to delete a user.
     */
    // static saveNewUserToFile(user: User) {
    //     const fs = require('fs');
    //     fs.appendFileSync('usersLog.json', ',\n' + JSON.stringify(user, null, 4));
    // }

    getUniqueEmail(): string {
        return Shared.EMAIL_PREFIX + new Date().valueOf() + Shared.EMAIL_SUFFIX;
    }

}
