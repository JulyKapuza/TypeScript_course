// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!; // перший варіант
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement; // використовуємо ! коли впевнені, що не вернемо 0

// userInputElement.value = 'Hi there!'

// альтернатива використання ! з перевіркою

const userInputElement = document.getElementById('user-input')

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'Hi there!'
}

