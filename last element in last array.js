function getNthElement(arr,n){
l=arr.length;
if(n==-1)
{
return arr.slice(-1)[0];

}
else if(n>=l){
console.log("array out of index");
}

else
{
console.log(arr.length-1)
}
}
console.log(getNthElement([1, 3, 5], -1));



