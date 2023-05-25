const udemy = 'udemy'
const letters = [...udemy]
console.log(letters);

const boys = ['john','peter','bob']
const girls = ['susan','ana']

const bestFriend = 'arnold'

//feature1
const friends = [...boys,bestFriend,...girls]
console.log(friends);

//feature2
const newFriends = [...friends]
newFriends[0]='nancy'
console.log(friends);
console.log(newFriends);

//feature3
const person = {
  name:'john',
  job:'dev'
}

newPerson = {...person,
  city:'chicago',name:'peter'
}
console.log(person);
console.log(newPerson);