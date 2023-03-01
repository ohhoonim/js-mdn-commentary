// import hello, {hi, bye} from './say.js'

// console.log(hello())
// console.log(hi())
// console.log(bye())

const {default: hello, hi, bye} = await import('./say-ko.js')

console.log(hello())
console.log(hi())
console.log(bye())
