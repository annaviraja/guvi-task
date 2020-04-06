class cars{
    name
    constructor(carname){
        this.name=carname;
let carimage= document.createElement('img');
carimage.src = "https://media.wired.com/photos/5d09594a62bcb0c9752779d9/master/w_2560%2Cc_limit/Transpo_G70_TA-518126.jpg"
carimage.onclick=this.caronclick()
document.body.appendChild(carimage)   
}
caronclick(){
    return function(){
alert("this "+this.name+" clicked");
    }
}

}
class van{
    name
    constructor(vanname){
        this.name=vanname; 
        let vanimage=document.createElement('img');
        vanimage. src =  "https://images-na.ssl-images-amazon.com/images/I/716xyswaUfL._SL1500_.jpg ";
        vanimage.onclick=this.vanonclick()
    document.body.appendChild(vanimage) ;
    }
    vanonclick(){
        return function(){
    alert("this "+this.name+" clicked");
        }
    }
}
let createcar= () =>{
    let name = prompt('car name?');
    new cars(name);
}
let createvan = () =>{ 
    let name = prompt('van name?');
    new van(name);
}