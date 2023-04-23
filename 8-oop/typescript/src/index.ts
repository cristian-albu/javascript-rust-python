// https://www.youtube.com/watch?v=GEuS0tfLfEY&t=1727s

class Person {
  _name: string;
  _age: number;
  job: string;
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
    this.job = "";
  }

  getName = () => {
    return this._name;
  };

  getAge = () => {
    return this._age;
  };

  setJob = (job: string) => {
    this.job = job;
  };

  getJob = () => {
    return this.job;
  };
}

let Person1 = new Person("Cristian", 28);
let Person2 = new Person("Keanu", 55);

console.log(Person1.getName(), Person2.getAge());

class House {
  _address: string;
  _price: number;
  _residents: Person[];
  constructor(address: string, price: number, residents: Person[]) {
    this._address = address;
    this._price = price;
    this._residents = residents;
  }

  getAddress = () => {
    return this._address;
  };

  getPrice = () => {
    return this._price;
  };

  getResidents = () => {
    return this._residents;
  };

  getResident = (name: string) => {
    let searchedResident = this._residents.filter(
      (res: Person) => res.getName() === name
    );
    return searchedResident[0];
  };

  addResident = (resident: Person) => {
    this._residents.push(resident);
  };
}

let cristian = new Person("Cristian", 28);
let keanu = new Person("Keanu", 55);

let house = new House("Viticultori", 200000, [cristian, keanu]);

console.log(house.getResidents());

house.addResident(new Person("Andreea", 23));

console.log(house.getResidents());

console.log(house.getResident("Andreea").getAge());

house.getResident("Andreea").setJob("Programmer");

console.log(house.getResident("Andreea").getJob());

class Programmer extends Person {
  _company: string;
  _salary: number;
  _language: string;
  constructor(
    name: string,
    age: number,
    company: string,
    salary: number,
    language: string
  ) {
    super(name, age);
    this._company = company;
    this._salary = salary;
    this._language = language;
  }

  sayHi = () => {
    console.log(
      `Hello I'm ${this._name} and I'm a programmer! I work for ${this._company} and I make ${this._salary} / month. I work in ${this._language}`
    );
  };
}

let praji = new Programmer("Praji", 33, "Heits", 6000, "JavaScript");

console.log(praji.sayHi());
