// সাত আট রকম ভাবে undefine  পাওয়া যায় 
// type: 1
// let number;
// console.log(number);

//type 2: কোন ফাংশনকে রিটার্ন না করলে  undefine দেখায় / কোন প্যারামিটারকে পাছ না করলে undefine হয়ে যায়  

// function add(num1, num2){
//     console.log(num1 + num2);
// }

// const result = add(13, 14);
// console.log(result);

// function diff(num1, num2){
//     console.log(num1, num2);
// }

// const res = diff(13)

// Type 3:  অবজেক্টের ভিতর কোন প্রোপার্টি সেট না করে তাকে এক্সেস করতে চাই undefine  পাওয়া যায় 
const person = {name: "Tareque", roll: 1616};
console.log(person.gpa);

//type 4: 

let ages = [2, 5, 6]
console.log(ages[11]);