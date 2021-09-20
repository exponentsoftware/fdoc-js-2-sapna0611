const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA']

const createArrayOfArrays = (array) => {
    let result = [];
    for (let name of array){
        result.push([ 
        name.charAt(0) + name.slice(1).toLowerCase(),
        name.slice(0,3),
        name.length
        ])
    }
    return result
}

console.log(createArrayOfArrays(countries))