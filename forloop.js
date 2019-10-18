let i;

for (i=1; i <= 5; i++) {
    console.log('The value is:'+i);
}

let fruits =['apple', 'banana', 'orange', 'grapes', 'strawberry']
let x;
for (x in fruits){
    console.log (fruits[x])
}

for (x of fruits){
    console.log (x)
}