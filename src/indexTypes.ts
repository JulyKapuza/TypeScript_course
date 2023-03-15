// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!; // перший варіант
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement; // використовуємо ! коли впевнені, що не вернемо 0

// userInputElement.value = 'Hi there!'

// альтернатива використання ! з перевіркою

const userInputElement = document.getElementById('user-input')

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'Hi there!'
}

// Index Types
// гнучкий контейнер, має бути розуміння типу властивості, але не кількості і імені
interface ErrorContainer{ //{email: "Not a valid email, userName: "Must start with a character"}
  id: string; // можемо встановити
  //  id: number;// не можемо, оскільки нище ми зазначмом, що  [prop: string]: string; значить моють бути всі властивості типу string
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  id: '125',
  1: "Must start with a character", // допустимо
  email: "Not a valid email", 
  userName: "Must start with a character"

}

