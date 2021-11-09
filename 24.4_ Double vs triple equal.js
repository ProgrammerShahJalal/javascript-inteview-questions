// double equal   দিলে ভ্যারিয়েবল কোন টাইপের তা চেক করে না ।  triple equal  দিলে ভ্যারিয়েবলের টাইপ চেক করে । 

const first = 3;
const second = "3";

if (first == second){
    console.log("condition is true");
}
else{
    console.log("Condition is false");
}

if (first === second){
    console.log("condition is true");
}
else{
    console.log("Condition is false");
}