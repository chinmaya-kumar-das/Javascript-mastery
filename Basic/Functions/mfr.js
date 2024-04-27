// node basic/functions/mfr.js

//map
let a=[1,2,3,4,5,6,7,8,9,10]
let map=a.map((val)=>{
    return val*2;
});
console.log(map)
function add(val){
    return val+"hii"
}
let map2=a.map(add)
console.log(map2)

//filter

let filter=a.filter(data=> data>2)
console.log(filter)
let filter2=a.filter((data)=>{
     if(data%2==0){
        return data
    }
})
console.log(filter2)

//reduce
let red=a.reduce((data,res)=>res+data,100)
    console.log(red)