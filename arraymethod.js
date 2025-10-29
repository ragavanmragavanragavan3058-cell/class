console.log("push mehthod")
a=[1,2,3,4]
a.push(5)   //or console.log(a.push(5))
console.log(a)//push element
b=[1,2,3,4,5]
b.pop(5)//for delete a last element
console.log(b)
c=[1,2,3,4,5]
console.log(c.shift())// for delete for a frist element
console.log(c)
d=[1,2,3,4,5]
console.log(d.unshift('d'))//
console.log(d)
e=[1,2,3,4]
delete e[2]//delete elements 
console.log(e)

let number=[1,2,3,4,5];
let sum=number.reduce[(total,num)=>total+num,0];
console.log(sum);