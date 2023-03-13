// Unknown
// За змістом це те саме, що й any, тільки коли ми будемо намагатися його зберегти в іншу змінну, ми отримаємо помилку.
let userInput: unknown; // unknown краще any
let userName: string;

userInput = 5;
userInput = "Ben";

// userName = userInput; //Type 'unknown' is not assignable to type 'string'

if (typeof userInput === "string") {
  userName = userInput;
}

// never Це коли функція ніколи не закінчується та нічого не повертає. 
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occurred", 500);
