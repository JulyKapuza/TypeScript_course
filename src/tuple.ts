
const person: {
  name: string;
    age: number;
  hobbies: string[];
  role: [number, string] // tuple точно знає, скільки елементів він містить і які саме типи він містить у певних позиціях
    
} = {
  name: 'Juliia',
  age: 29,
  hobbies: ['Books', "Cooking"],
  role: [2, 'manager']
}
console.log(person)


for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}

// person.role.push('admin') // виключення = [2, 'manager', 'admin' ]
// person.role = [1, 'admin', 'user'] // буде помилка Type '[number, string, string]' is not assignable to type '[number, string]'.Source has 3 element(s) but target allows only 2.
console.log(person.role)