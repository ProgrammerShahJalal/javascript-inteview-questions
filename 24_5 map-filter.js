const numbers = [2, 3, 4, 5, 6];
const output = [];

for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result)
}

console.log(output);

// map : map হচ্ছে কোন একটা এরের মধ্যে লুপিং করে  প্রত্যেকটা এলিমেন্ট নিয়ে কিছু একটা করে রেজাল্ট হিসেবে  array  দিয়ে দেয়। 

//const result = numbers.map( element => element * element);

const result = numbers.map(function(element){
    return element * element
})
console.log(result);

//Filter : কোন  array  এর মধ্যে নির্দিস্ট কিছু element খুঁজে বের করার জন্য filter ব্যবহার করা হয়।

const bigger = numbers.filter( x => x < 5);
console.log(bigger);

//Find: find  কোন  array  এর মধ্যে নির্দিস্ট কিছু element খুঁজে বের করে প্রথম element  কে আউটপুট হিসেবে দেয় । 

const isThere = numbers.find( x => x < 5);
console.log(isThere);