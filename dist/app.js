"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTOR"] = 2] = "AUTOR";
})(Role || (Role = {}));
const person1 = {
    name: 'Juliia',
    age: 29,
    hobbies: ['Books', "Cooking"],
    role: Role.ADMIN
};
console.log(person1);
if (person1.role === Role.ADMIN) {
    console.log('is admin');
}
//# sourceMappingURL=app.js.map