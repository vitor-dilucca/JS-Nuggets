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

//jeito1
const ages = people.map((person)=>{
  return person.age
})
console.log(ages)

//jeito2
const getAges= (person) => person.age
const ages2 = people.map(getAges)
console.log(ages2)

//feature3
const newPeople = people.map((item)=>{
  return {
    firstName:item.name.toUpperCase(),
    oldAge:item.age+20
  }
})
console.log(newPeople)