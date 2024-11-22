// today study about memories two type 
//  stack and heap memory
// stack is use in primitive type (when ever stack memory is use then we get a copy of a variable and origianl value remains same)
// heap is use in non promitive type (in heap we got a reference of a  original value if we do change inn it then the 
// original value will also change)

let myyoutube = "mayank";

let anothername = myyoutube
anothername = "mayank rana"
// anothername  ="rana"
console.log(anothername);
console.log(myyoutube);

let user = {
    email: "user.@gamil.com", // use , in object
    upi: "user@ybl"
}
let user2 = user
user2.email = "ranamahfsk@gamil.com" // in object if we want to excess a value use . 
console.log(user.email);
console.log(user2.email);


