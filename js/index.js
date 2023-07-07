                                                        // ex 1
const user = {
    hobby: "tenis",
    premium: true,
}
function showUserKeys(user) {
    user.mood = "happy";
    user.hobby = "skydiving";
    user.premium = false;
    const keys = Object.keys(user);
    for (const key of keys){
         console.log(`${key}: ${user[key]}`);
    }
    return user;
}
console.log(showUserKeys(user));
                                                        // ex 2
const obj = {
    name: "Artem",
    like: "programing",
    eat: "potato",
}

 function countProps(obj){
    let total = 0;  
    const keys = Object.keys(obj);
    for (const key of keys){
        total += 1;
    }
    return total;
}

console.log(countProps(obj));
                                                        // ex 3
const employees = {
    Oleg: 5,
    Timur: 6,
    Slava: 8,
    Andriy: 7,
    Max: 7,
}
function findBestEmployee(employees){
    let maxTasks = 0;
    let bestEmployee = "";
    let tasks = Object.values(employees);
    let Names = Object.keys(employees);
    for (const task of tasks){
        if(task > maxTasks){
            maxTasks = task;
        }
    } 
    for (const name of Names){
        if(employees[name] === maxTasks){
            bestEmployee = name;
        }
    }
    return bestEmployee;
}
console.log(findBestEmployee(employees));
                                                        // ex 4 
const employees2 = {
    Max: 20000,
    Diana: 22000,
    Stepan: 18000,
    Matviy: 17000,
}

 function countTotalSalarys (employees2) {
    let sum = 0;
    const salaries = Object.values(employees2);
    for (const salary of salaries){
        sum += salary;
    }
    return sum;
 }

 console.log(countTotalSalarys(employees2));
                                                        // ex 5
const arr = [
    {
        name: "Artem",
        age: 12,
        city: "Odesa",
    },
    {
        name: "Timur",
        age: 13,
        city: "Kyiv",
    },
    {
        name: "Dany",
        age: 14,
        city: "Lviv",
    },
];
function getAllPropValues(arr, prop) {
    const newArr = [];
    for (const elem of arr){
        newArr.push(elem[prop]);
    }
    return newArr;
}
console.log(getAllPropValues(arr, "name"));
                                                        // ex 6
const products = [
    {
        name: "potato",
        price: 5,
        sum: 10,
    },
    {
        name: "apple",
        price: 6,
        sum: 5,
    },
    {
        name: "banana",
        price: 10,
        sum: 4,
    },
];
function calculateTotalPrice(allProdcuts, productName) {
    let totalPrice = 0;
    for (const product of products){
        if (product.name === productName){
            totalPrice = product.price * product.sum;
        }
    }
    return totalPrice
}
console.log(calculateTotalPrice(products, "potato"));
                                                            // ex 7
const account = {
    name: "Timur",
    lastName: "Cherin",
    balans: 1000,
    status: "Adult",
}

function addToBalans (account, sumToAdd) {
    account.balans = account.balans + sumToAdd;
    return account.balans;
}

function earnFromBalans (account, sumToEarn) {
    if(account.balans >= sumToEarn && account.status === "Adult"){
        account.balans = account.balans - sumToEarn;
    }
    return account.balans;
}

console.log(addToBalans(account, 200));
console.log(earnFromBalans(account, 500));