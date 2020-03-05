var request = new XMLHttpRequest()
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)

request.onload = function() {
  
var data = JSON.parse(this.response)
for ( i in data){
console.log(data[i].name,"is",data[i].capital)
}
}

request.send()