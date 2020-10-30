// // define an object called hen, has 3 properties: name: 'Helen', 
// eggCount = 0, layAnEgg shold be amethod that increments the value
//  of eggCount by 1 and returns the string "EGG"; use this

llet hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount = this.eggCount + 1;
       return "EGG" 
    }
}
console.log(hen.name)
console.log(hen.eggCount)
console.log(hen.layAnEgg())
console.log(hen.layAnEgg())
console.log(hen.eggCount)