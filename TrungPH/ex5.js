"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterUsers = exports.logPerson = exports.isUser = exports.isAdmin = exports.persons = void 0;
exports.persons = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    { type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },
    { type: 'admin', name: 'Agent Smith', age: 23, role: 'Administrator' }
];
var isAdmin = function (person) { return person.type === 'admin'; };
exports.isAdmin = isAdmin;
var isUser = function (person) { return person.type === 'user'; };
exports.isUser = isUser;
function logPerson(person) {
    var additionalInformation = '';
    if ((0, exports.isAdmin)(person)) {
        additionalInformation = person.role;
    }
    if ((0, exports.isUser)(person)) {
        additionalInformation = person.occupation;
    }
    console.log(" - ".concat(person.name, ", ").concat(person.age, ", ").concat(additionalInformation));
}
exports.logPerson = logPerson;
function filterUsers(persons, criteria) {
    if (!criteria)
        return persons.filter(exports.isUser); // return all users if no criteria is specified
    return persons.filter(exports.isUser).filter(function (user) {
        var criteriaKeys = Object.keys(criteria);
        return criteriaKeys.every(function (fieldName) {
            return user[fieldName] === criteria[fieldName];
        });
    });
}
exports.filterUsers = filterUsers;
console.log('Users of age 23:');
filterUsers(exports.persons, {
    age: 23
}).forEach(logPerson);
