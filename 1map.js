//MAP METHOD
const people = [
  {
    name:'bob',
    age:20,
    position:'developer',
  },
  {
    name:'anna',
    age:25,
    position:'designer',
  },
  {
    name:'susy',
    age:30,
    position:'boss',
  },
]
console.log(people)
// const ages = people.map(function(){})

//jeito 0
const getAges = (person) => person.age*2
console.log(getAges)

//jeito 1
/* const ages1 = people.map((person)=>{
  return person.age * 2
  console.log(ages1)
}) */

//jeito 2
const ages2 = people.map((person) => person.age *2)
console.log(ages2)

const newPeople = people.map((item)=>{
  return{
    firstName:item.name.toUpperCase(),
    oldAge:item.age+20
  }
})
console.log(newPeople)

//inserir uma propriedade do objeto no DOM
const names = people.map((person)=> `<h2>${person.name}, tem ${person.age} anos</h2>`)
const resultDiv = document.querySelector('#result')
resultDiv.innerHTML = names.join('')