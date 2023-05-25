// Reduce - Objects
// cart example
const cart = [
  {
    title: 'Samsung Galaxy S7',
    price: 599.99,
    amount: 1,
  },
  {
    title: 'google pixel ',
    price: 499.99,
    amount: 2,
  },
  {
    title: 'Xiaomi Redmi Note 2',
    price: 699.99,
    amount: 4,
  },
  {
    title: 'Xiaomi Redmi Note 5',
    price: 399.99,
    amount: 3,
  },
]

let total = cart.reduce((total, cartItem) => {
// let { totalItems, totalPrice } = cart.reduce((total, cartItem) => {
    const { amount, price } = cartItem
    total.totalItems += amount
    total.totalPrice += amount * price
    return total
  },
  {
    totalItems: 0,
    totalPrice: 0,
  }
)

// totalPrice = parseFloat(totalPrice.toFixed(2))
total.totalPrice = parseFloat(total.totalPrice.toFixed(2))
// console.log(totalItems, totalPrice)
console.log(total)

// GITHUB REPOS EXAMPLE:
const url = 'https://api.github.com/users/vitor-dilucca/repos?per_page=100'

const fetchRepos = async () => {
  const response = await fetch(url)
  const data = await response.json()
  const newData = data.reduce((total, repo) => {
    const { language } = repo
    // if (language) {
    //   if (total[language]) {
    //     total[language] = total[language] + 1
    //   } else {
    //     total[language] = 1
    //   }
    // }
    if (language) {
      total[language] = total[language] + 1 || 1
    }
    return total
  }, {})
  console.log(newData)
}

fetchRepos()