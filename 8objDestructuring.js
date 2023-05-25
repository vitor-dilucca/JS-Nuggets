const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane'
  },
}

// const firstName = bob.first
// const lastName = bob.last
// const sister= bob.siblings.sister 

// console.log(firstName,lastName,sister);

const { first, last: apelido, city, siblings: { sister } } = bob
console.log(city, first, apelido, sister);

function printPerson(person){
  const {first,last}=person
  console.log(first,last);
}

printPerson(bob)