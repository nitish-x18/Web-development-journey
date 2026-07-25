let a = prompt("Enter your first Number:")
let b = prompt("Enter your second Number:")

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("this is syntax error!!!")
}

let sum = parseInt(a) + parseInt(b)

let x = 2;
function main() {
    try {
        console.log('The Sum is: ', sum * x);
        return true;
    } catch (error) {
        console.log("error aa gya hai")
        return false
    } finally {
        console.log('file was closed and DB is disconnecte!!!');
    }
}

let c = main()