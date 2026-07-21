async function getdata(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(455)
        }, 2000);
    })
}

async function main(){
    console.log('loading the modules...')
    console.log('do somthing other work')
    console.log('the data is comming')

    let x = await getdata()
    console.log(x)

    console.log('process the data')
    console.log('start other task 2')
}

main()

// #this is the second method for wait for the data without await function--->
//     console.log('loading the modules...')
//     console.log('do somthing other work')
//     console.log('the data is comming')

//     let data =  getdata()

// data.then((v)=>{
//     console.log(data)

//     console.log('process the data')
//     console.log('start other task 2')
// })