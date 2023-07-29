
// we need to add backslash(\) in java to escape "" string notation but we don't need in js because we can write single quotes(') as well as back ticks (``)
let data = `{"name":"","address":{"street":"","city":{"name":""},"state":"","zip":""}}`;


data = JSON.parse(data);
console.log(Object.keys(data));
console.log(data);

let flatObj = {};
function flat(obj, person = 'person') {
    if (obj == null || typeof obj !== 'object') {
        return obj;
    }
    const newObj = obj;
    for (const key in newObj) {
        if (typeof newObj[key] === 'object') {
            flat(newObj[key], person + '_' + key);
        } else {
            flatObj[person + '_' + key] = obj[key];
        }
    }
    return flatObj;
}

let dataKeyValue = flat(data);
let dataKeys = Object.keys(dataKeyValue);
console.log(dataKeys);


let userData = `{"name":"John Doe","age":"30.0","email":"johndoe@example.com","address":{"street":"123 Main St","city":{"name":"New York"},"state":"NY","zip":"10001"}}`;
userData = JSON.parse(userData);

flatObj = {};

let userKeyValue = flat(userData);
console.log('user=>', userKeyValue);
let userKeys = Object.keys(userKeyValue);
console.log(userKeys);

let result = {};
for (const key in userKeyValue) {
    if (dataKeys.includes(key)) {
        result[key] = userKeyValue[key];
    }
}

console.log(result);

