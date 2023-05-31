const array=['mela','BANANA','peSCA'];
console.log(array[1]);
arrayTwo=[]
array.forEach((string)=>{
const NewString=string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
arrayTwo.push(NewString)
})
console.log(arrayTwo);
