// Colser:  কোন একটা ফাংশন থেকে  যদি  অন্য কোন ফাংশনকে কল করি কিংবা রিটার্ন করি তাহলে সে একটা ক্লোজ ইনভারমেন্ট তৈরি করে ফেলে । 

function stopWatch(){
    let count = 0;
    return function (){
        count++;
        return count;
    }
}

const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock2());