// Optional chaining 
//наприклад коли отримуємо дані з бекенду і не знаємо чи є там визначена властивость

const fetchedUserData = {
  id: 'u1',
  name: 'Julia',
  job: {title:'CEO', description: 'My own company'}
}

// console.log(fetchedUserData.job && fetchedUserData.job.title)
console.log(fetchedUserData?.job?.title); // перевіряє існує інформація перед тим як отримати до неї доступ

// Нульові значення

// const userInputValue = undefined; // console.log(storedData) ==> DEFAULT
const userInputValue = " "; // console.log(storedData) ==> "  "

const storedData = userInputValue ?? "DEFAULT" // ?? оператор нульового злиття

console.log(storedData) 