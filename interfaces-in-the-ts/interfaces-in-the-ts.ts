// интерфейсы - это возможность typescript, интерфейсов в js нет
// при компиляции интерфейсы не попадают в итоговый js-код
// интерфейсы определяются с помощью ключевого слова interface
// с помощью интерфейса можно указать параметры и их тип для передачи в функцию как требуемые аргументы или для проверки характеристик объекта, также на основе интерфейса могут создаваться классы
// с помощью интерфейсов можно убедиться, что необходимые функции аргументы существуют и передаются в нее
// в интерфейсах могут декларироваться как свойства, так и методы
// метод в интерфейсе обозначается круглыми скобками после его имени, в скобках могут быть указаны принимаемые аргументы и их тип
// по сути интерфейс - это расширенный тип, который содержит совокупность значений

interface NamedPerson {
  firstName: string;
  
  // если ключ не обязательный, это обозначается знаком вопроса после него
  age?: number;
  
  // с помощью квадратных скобок можно определить, что возможен аргумент, но его имя не известно на момент созадния интерфейса, при этом может быть известен тип имени и тип значения
  [propName: string]: any;
  
  greet(lastNmame: string): void;
}

function greetPerson(person: NamedPerson) {
  console.log(`Hello, ${person.firstName}`);
}

function changeName(person: NamedPerson) {
  person.firstName = 'Ann';
}

// объект может быть сразу создан с отсылкой на интерфейс, которому он должен соответствовать
// в таком случае имя интерфейса указывается через двоеточие после имени объекта
const personInfo: NamedPerson = {
  firstName: 'Max',
  age: 27,
  greet(lastNmame: string) {
    console.log(`Hello, I am ${this.firstName} ${lastNmame}`)
  }
};

personInfo.greet('Any');
changeName(personInfo);
greetPerson(personInfo);

// при передаче в функцию объекта посредством переменной проверяется, что объект содержит ключи, указанные в интерфейсе. Если ключей больше, они игнорируются, это не приводит к ошибке
// но если передавать в функцию непосредственно сам объект, то проверка на соответствие интерфейсу будет более строгой. Будет првоеряться, что объект содержит только те ключи, которые указаны в интерфейсе
// следующий код вызовет ошибку при компиляции
// greetPerson({firstName: 'Max', age: 27});

// чтобы создать класс на основе интерфейса после имени нового класса нужно указать ключевое слово implements и имя соответствующего интерфейса

class SuperPerson implements NamedPerson {
  firstName: string;
  greet(lastNmame: string) {
    console.log(`Hello, I am ${this.firstName} ${lastNmame}`)
  }
}

const myPerson = new SuperPerson();
myPerson.firstName = 'Ksenya';
greetPerson(myPerson);
myPerson.greet('Lastname');

// также возможно создавать интерфейсы для типов функций
// в таком случае необходимо использовать круглые скобки как обозначение функции в интерфейсе
// в круглых скобках могут быть перечислены аргументы и их тип, а после скобок - тип самой функции
interface DoubleValueFunc {
  (number1: number, number2: number): number;
}

// с помощью двоеточия указывается, что создаваемая функция будет использовать определенный интерфейс
let myDoubleFunction: DoubleValueFunc;

myDoubleFunction = function(num1: number, num2: number) {
  return (num1 + num2) * 2;
};

console.log(myDoubleFunction(10, 20));

// интерфейсы могут наследоваться другими интерфейсами
// для этого при создании нового интерфейса после его имени нужно указать ключевое слово extends и имя наследуемого интерфейса
// интерфейс-наследник может расширять и дополнять наследумый интерфейс
// например, AgedPerson делает свойство age вместо возможного обязательным
interface AgedPerson extends NamedPerson {
  age: number;
}

const oldPerson: AgedPerson = {
  age: 35,
  firstName: 'Max',
  greet(lastNmame: string) {
    console.log('Hello');
  }
};

console.log(oldPerson);

