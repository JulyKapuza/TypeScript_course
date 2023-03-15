//pattern descriminated Union
// маємо одну спільну властивість type яку можемо використовувати для перевірки

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Hourse {
  type: "hourse";
  runningSpeed: number;
}

type Animal = Bird | Hourse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "hourse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 25 });
