//slice: Slice হচ্ছে কোন এরের নিদির্স্ট অংশ আলাদা করে নেওয়া তবে আসল এরের কোন পরিবর্তন হবে না। 
const numbers = [1, 2, 3, 4, 5];
console.log("Before slice: ", numbers);
const part = numbers.slice(2, 5);

console.log('Slice:', part);
console.log('After Slice:', numbers);

//splice:  Splice  হচ্ছে কোন এরের নিদির্স্ট অংশ হতে এলিমেন্টকে রিমুভ করে দেওয়া 
// এবং চাইলে ঐ এরের মধ্যে নতুন এলিমেন্ট যুক্ত করে দেওয়া। এক্ষেত্রে আসল এরের পরিবর্তন হয়।  

const number = [1, 2, 3, 4, 5];
console.log("\nBefore Splice: ", number);
const remove = number.splice(2, 2, 66);

console.log("Splice: ", remove);
console.log("After Splice:", number);



