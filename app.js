let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let num3 = document.getElementById('num3')
let num4 = document.getElementById('num4')
let num5 = document.getElementById('num5')
let num6 = document.getElementById('num6')
let num7 = document.getElementById('num7')
let num8 = document.getElementById('num8')
let num9 = document.getElementById('num9')
let zero = document.getElementById('num0')
let plus = document.getElementById('add')
let minus = document.getElementById('minus')
let multiply = document.getElementById('times')
let divide = document.getElementById('divide')
let equals = document.getElementById('equals')
let dot = document.getElementById('dot')
let clear = document.getElementById('clear')
let del = document.getElementById('delete')
let brOpen = document.getElementById('brOpen')
let brClose = document.getElementById('brClose')
let input = document.getElementById('input')

num1.addEventListener('click', () =>{
    let x = input.value 
    input.value = x + 1 
})
num2.addEventListener('click', () =>{
    let x = input.value 
    input.value = x + 2 
})
num3.addEventListener('click', () =>{
    let x = input.value 
    input.value = x + 3 
})
num4.addEventListener('click', () =>{
    let x = input.value 
    input.value = x + 4 
})
num5.addEventListener('click', () =>{
    let x = input.value 
    input.value = x + 5 
})
num6.addEventListener('click', () =>{
    let x = input.value 
    input.value = x + 6 
})
num7.addEventListener('click', () =>{
    let x = input.value 
    input.value = x + 7 
})
num8.addEventListener('click', () =>{
    let x = input.value 
    input.value = x + 8 
})
num9.addEventListener('click', () =>{
    let x = input.value 
    input.value = x + 9 
})
zero.addEventListener('click', () =>{
    let x = input.value 
    input.value = x + 0 
})
plus.addEventListener('click', () =>{
    let x = input.value 
    input.value = x + "+" 
})
minus.addEventListener('click', () =>{
    let x = input.value 
    input.value = x + "-" 
})
multiply.addEventListener('click', () =>{
    let x = input.value 
    input.value = x + "*" 
})
divide.addEventListener('click', () =>{
    let x = input.value 
    input.value = x + "/" 
})
dot.addEventListener('click', () =>{
    let x = input.value 
    input.value = x + "." 
})
brOpen.addEventListener('click', () =>{
    let x = input.value 
    input.value = x + "(" 
})
brClose.addEventListener('click', () =>{
    let x = input.value 
    input.value = x + ")" 
})
equals.addEventListener('click', () =>{
    input.value = eval(input.value)
})
del.addEventListener('click', () =>{
    let x = input.value 
    input.value = x.substring(0, x.length-1) 
})
clear.addEventListener('click', () =>{ 
    input.value = '' 
})