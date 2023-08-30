// Завдання 1. Створіть базовий клас «Домашня тварина» та похідні класи «Собака», «Кішка», «Папуга». За допомогою конструктора встановити ім'я кожної тварини та її характеристики

class HomeAnimal {
   constructor (name, color, age){
      this.name = name
      this.color = color
      this.age = age
   }
   info(){
      console.log(`Ваша тваринка з іменем ${this.name} має ${this.color} колір. ЇЇ вік ${this.age}`);
   }
}

class Dog extends HomeAnimal{
   constructor(name, color, age){
      super(name, color, age)
   }
   voice(){
      return 'gaw'
   }
}

class Cat extends HomeAnimal{
   constructor(name, color, age){
      super(name, color, age)
   }
   voice(){
      return 'miay'
   }
   mur(){
      return 'mur-mur'
   }
}

class Parrot extends HomeAnimal{
   constructor(name, color, age){
      super(name, color, age)
   }
   voice(){
      return 'chirick'
   }
}
const newDog = new Dog('Rex', 'black', 2)
const newCat = new Cat ('Neo', 'grey', 1)
const newParrot = new Parrot ('Gosha', 'green', 1)
// console.log(newDog);
// console.log(newCat.info());//Ваша тваринка з іменем Neo має grey колір. ЇЇ вік 1
// console.log(newCat.voice()); //miay
// console.log(newParrot);


// Завдання 2. Створіть клас Passport (паспорт), який міститиме паспортну інформацію про громадянина України. За допомогою механізму успадкування реалізуйте клас ForeignPassport (закордонний паспорт) похідний від Passport. Нагадаємо, що закордонний паспорт містить крім паспортних даних, також дані про візи, номер закордонного паспорта.

class Passport {
   constructor(number, firstName, lastName, country, dateOfBirth, placeOfBirth, dateOfIssue){

   this.number = number
   this.firstName = firstName
   this.lastName = lastName
   this.country = country
   this.dateOfBirth = dateOfBirth
   this.placeOfBirth = placeOfBirth
   this.dateOfIssue = dateOfIssue
   }
   showInfo(){
      return document.write(`${this.number} | ${this.firstName} | ${this.lastName} | ${this.country} | ${this.dateOfBirth} | ${this.placeOfBirth} | ${this.dateOfIssue}`)
   }
   
}

class ForeignPassport extends Passport {
   constructor (number, firstName, lastName, country, dateOfBirth, placeOfBirth, dateOfIssue, nationality, visas, dateOfExpiry){

      super(number, firstName, lastName, country, dateOfBirth, placeOfBirth, dateOfIssue)

      this.nationality = nationality
      this.visas = visas
      this.dateOfExpiry = dateOfExpiry
   }
   showInfo(){
      super.showInfo()
      document.write(` | ${this.nationality} | ${this.visas} | ${this.dateOfExpiry} `)
   }
}

const newForeignPassport = new ForeignPassport('RV20344', 'Alina', 'Makova', 'Ukraine','22.12.1990', 'Ukraine', '12.10.2020', 'Ukrainian', ['Poland', 'Germany'], '12.10.2024')
// newForeignPassport.showInfo()

// Завдання 3. Реалізуйте клас Button, який містить ширину, висоту, текст кнопки, і метод showBtn(), який виводить кнопку на екран за допомогою тегу button і функції document.write(). 
//Реалізуйте клас BootstrapButton, успадкувавши його від класу Button. 
// Додайте поле color і перевизначте метод showBtn() так, щоб кнопка виводилася зі стилями і вказаним кольором.

class Button {
   constructor (width, height, text){
      this.width = width
      this.height = height
      this.text = text
   }
   showBtn(){
      document.write(`<button style="width: ${this.width}px; height: ${this.height}px">${this.text}</button>`)
   }
}

class BootstrapButton extends Button{
   constructor(width, height, text, color){
      super(width, height, text)
      this.color = color
   }
   showBtn(){
      document.write(`<button style="width: ${this.width}px; height: ${this.height}px; color: ${this.color}">${this.text}</button>`)
   }
}

const newBtn = new Button(250, 50, 'Next')
// newBtn.showBtn()
const newBootBtn = new BootstrapButton(200, 50, 'Open', 'red')
// newBootBtn.showBtn()


// Завдання 4. Реалізуйте клас, який описує простий маркер. Клас має містити наступні компоненти: 
// • поле, яке зберігає колір маркера; 
// • поле, яке зберігає кількість чорнил в маркері (в процентах); 
// • метод для друку (метод приймає рядок і виводить текст відповідним кольором; текст виводиться, доки в маркері є чорнила; один не пробільний символ – це 0,5% чорнил в маркері). 
// Реалізуйте клас, який описує маркер, що заправляється, успадкувавши його від простого  маркера і додавши метод для заправки маркера. Продемонструйте роботу написаних методів

class Marker {
   constructor(color){
      this.color = color
      this.quantity = 1 //%
   }
   point(text){
      if(this.quantity == 0) return 'Треба заправити маркер'
      this.quantity = this.quantity - 0.5
      document.write(`<p style="color: ${this.color}">${text}</p>`)
   }
}

class addColorInMarker extends Marker{
   constructor(color){
      super(color)
   }
   addColor(quantity){
      this.quantity += quantity
      return this.quantity
   }
}

const greenMarker = new addColorInMarker('green')
// greenMarker.point('Якийсь зелений текст')
// console.log(greenMarker.quantity);  //0.5
const redMarker = new addColorInMarker('red')
// redMarker.point('Якийсь червоний текст')
// console.log(redMarker.quantity) //1
// console.log(greenMarker.addColor(50)); //50.5


// Завдання 1
// Реалізуйте клас, що описує коло. Клас має складатися з наступних компонентів:
// ■ поле з радіусом кола;
// ■ get-властивість, що повертає радіус кола;
// ■ set-властивість, що встановлює радіус кола;
// ■ get-властивість, що повертає діаметр кола;
// ■ метод, що обчислює площу кола;
// ■ метод, що обчислює довжину кола.
// Продемонструйте роботу властивостей і методів

class Circle {
   #radius
   constructor(radius){
      this.#radius = radius
   }
   setRadius (newRadius){
      this.#radius = newRadius
   }
   getRadius(){
      return this.#radius
   }
   getDiametr(){
      return this.#radius * 2
   }
   squareCircle(){
      return (Math.PI * this.#radius * this.#radius).toFixed(1)
   }
   lengthCircle(){
      return (Math.PI * this.#radius * 2).toFixed(1)
   }
}

const newCircle = new Circle(350)
// console.log(newCircle.setRadius(200))
// console.log(newCircle.getRadius(200)) //200
// console.log(newCircle.getDiametr(200)) //400
// console.log(newCircle.squareCircle()) //125663.7
// console.log(newCircle.lengthCircle()) //1256.6


// Завдання 3
// Реалізувати клас, який описує CSS- клас. 
// Клас CssClass має містити в собі:
// ■ назву CSS-класу;
// ■ масив стилів;
// ■ метод встановлення стилю;
// ■ метод видалення стилю;
// ■ метод getCss(), який повертає CSS-код у вигляді рядка.

class CssClass {
   constructor(name, styles, text){
      this.name = name
      this.styles = styles
      this.text = text
   }
   // ■ метод встановлення стилю;
   addStyles(){
      let styles = this.styles.reduce((accum, elem) => {
         accum += `; ${elem}`
         return accum
      })
      return styles
   }
   // ■ метод видалення стилю;
   remStyles(style){
      let styles = this.styles.filter(item => item != style)
      this.styles = styles
   }
   // ■ метод getCss(), який повертає CSS-код у вигляді рядка.
   getCss(){
      document.write(`<p class="${this.name}" style="${this.addStyles()}">${this.text}</p>`)
   }
}

const newClass = new CssClass('inner', ['margin-bottom: 30px', 'display: inline-block','padding-left: 20px', 'color: red', 'width: 400px'], 'Будь-який текст')
// newClass.getCss()
// newClass.remStyles('color: red')
// newClass.getCss()