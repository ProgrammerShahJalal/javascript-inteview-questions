// হোয়েস্টিং 
// কোন একটা  স্কোপের ভিতরে var  লিখে কোন একটা ভ্যারিয়েবলকে ডিক্লেয়ার করা হওয় তাহলে ঐ ভ্যারিয়েবকে টেনে প্যারেন্ট স্কোপে নিয়ে নেয় ।
//  এতে করে একে ঐ ফাংশনের সব জায়গা হতে  এক্সেস করা যায় । 


//  let and const  হচ্ছে স্কোপ ভ্যারিয়েবল। যেখানে ডিক্লেয়ার করা হয়েছে তার উপরে যায় না। 

function sum(first, second){
    let result = first + second;
    if(result > 9){
        let mood = 'happy';

    }
    console.log(mood);
    return result;
}

const output = sum(3, 7);
// console.log(mood);
      
console.log(output);


// var কোন একটা ভ্যারিয়েবেলকে হোয়েস্ট করে। অর্থাৎ একে ফাংশনের যে কোন জায়গা হতে এক্সেস করা যায়। যা let / const  এর  ক্ষেত্রে করা যায় না। 
//  তবে হোয়েস্টিং করার সময় শুধু মাত্র ভ্যারিয়েব্লের নামকে করে ভ্যালুকে হোয়েস্টিং করে না। 

function sum(first, second){
    let result = first + second;
    if(result > 9){
        var  mood = 'happy';

    }
    console.log(mood);
    return result;
}

const res = sum(3, 7);
// console.log(mood);
      
console.log(res);