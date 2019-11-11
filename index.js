const chalk = require('chalk')

const name = 'Yoga Pratama'
console.log(chalk.blue(name))

const info = chalk.keyword('red')

const names = ['Dio Hermawan', 'Riski Maulana', 'Zahra']
names.forEach(name => {
  console.log(info(name))
})





//console.log("hello")