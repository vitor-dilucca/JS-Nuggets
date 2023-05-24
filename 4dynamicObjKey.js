const state = {
  loading:true,
  name:'',
  job:''
}

function updateState(key,value){
  state[key] = value
}

updateState('name','john')
console.log(state)