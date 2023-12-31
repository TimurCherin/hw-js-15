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
    let names = Object.keys(employees);
    for (const name of names){
        if(employees[name] >= maxTasks){
            maxTasks = employees[name];
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
                                                            // Варіант 1
const account = {
    name: "Timur",
    lastName: "Cherin",
    balance: 1000,
    status: "Adult",
    number: 2232,
    showBalance(){
        console.log(`Доброго дня ${this.name} ${this.lastName}, у вас на рахунку ${this.balance} грн`);
       return this.balance
    },
    addBalance(sum){
        this.balance += sum;
        console.log(`У вас на рахунку ${this.balance} грн`);
        return this.balance;
    },
    earnBalance(sum){
        if (this.balance >= sum){
        return this.balance -= sum;
    } else {
        console.log("Не достатньо коштів на рахунку");
        return this.balance;
    }
}
}
console.log(account.showBalance());
console.log(account.addBalance(200));
console.log(account.earnBalance(1200));
                                                            // Варіант 2
const account2 = {
    name: "Timur",
    lastName: "Cherin",
    balans: 1000,
    status: "Adult",
    number: 2232,
}

const Recipient = {
    name: "Artem",
    lastName: "alah",
    balans: 200,
    status: "kid",
    number: 1121,
}

function addToBalans (account2, sumToAdd) {
    account2.balans = account2.balans + sumToAdd;
    return account2.balans;
}

function earnFromBalans (account2, sumToEarn) {
    if(account2.balans >= sumToEarn && account2.status === "Adult"){
        account2.balans = account2.balans - sumToEarn;
    }
    return account2.balans;
}

function transferMondey (account2, howMuchMoneyToTransfer, accountOfRecipient){
    if (account2.balans >= howMuchMoneyToTransfer){
        account2.balans = account2.balans - howMuchMoneyToTransfer;
        accountOfRecipient.balans = accountOfRecipient.balans + howMuchMoneyToTransfer;
    }
    return account2.balans;
}


console.log(transferMondey(account2, 150, Recipient));
console.log(addToBalans(account2, 200));
console.log(earnFromBalans(account2, 500));
console.log(Recipient.balans);
console.log(account2.balans);