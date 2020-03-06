
function getNthElement(arr,n){
l=arr.length;
if(l==0)
{
console.log('array not found');
}
else if(n>=l){
console.log("array out of index");
}

else
{
return arr[n];
}
}
console.log(getNthElement([1, 3, 5], 6));



