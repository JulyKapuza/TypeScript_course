// enum - дозволяють визначати набір іменованих констант

enum Role { ADMIN, READ_ONLY, AUTOR }
// enum Role { ADMIN ='ADMIN', READ_ONLY =100, AUTOR='AUTOR'} - такий варіант теж може бути, але найчастіше перший використовується

const person1 = {
  name: 'Juliia',
  age: 29,
  hobbies: ['Books', "Cooking"],
  role: Role.ADMIN
}
console.log(person1)


if (person1.role === Role.ADMIN) {
  console.log('is admin')
}