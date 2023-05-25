const people = [
  {
    name: 'bob',
    age: 20,
    position: 'developer',
  },
  {
    name: 'anna',
    age: 25,
    position: 'designer',
  },
  {
    name: 'susy',
    age: 30,
    position: 'boss',
  },
  {
    name: 'pablito',
    age: 30,
    position: 'developer',
  },
  {
    name: 'pepe',
    age: 30,
    position: 'designer', 
  },
]

const empregos = ['cozinheiro',...new Set( people.map((obj)=> obj.position))]
console.log(empregos)

const result = document.querySelector('#result')
result.innerHTML=empregos.map((categoria)=>{
  return `<button>${categoria}</button>`
}).join('')