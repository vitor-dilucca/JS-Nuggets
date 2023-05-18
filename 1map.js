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
// const ages = people.map(function(){})

const getAges = (person) => person.age*2

//jeito 1
const ages = people.map((person)=>{
  return person.age * 2
})

//jeito 2
const ages = people.map((person) => person.age *2)
console.log(ages)