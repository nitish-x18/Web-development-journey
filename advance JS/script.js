async function sleep(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(18)
        }, 1000)
    })
}

(async function main(){
    // let a = await sleep()
    // console.log(a)
    // let b = await sleep()
    // console.log(b)

    //distructuring
    let [x,y, ...rest] = [1,2,3,45,87]
    console.log(x,y, rest) //...rest(its a variable name is can be changable) store remains all elements in another array

    let obj = {
        a: 1,
        b: 2,
        c: 3
    }

    let {a,b} = obj
    console.log(a,b)

})()

//spead syntax-->
function sum(a,b,c){
    return a+b+c;
}

let arr = [1,2,3]
// console.log(sum(arr[0], arr[1], arr[2])) this ia manual way
console.log(sum(...arr))