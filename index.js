console.log("hello word")
let bill  =document.querySelector(".bill")
let pepole  = document.querySelector(".people")
let butt = document.querySelectorAll(".but-secOne")
let rtip = document.querySelector(".rtip")
let rtot = document.querySelector(".rtot")
let rest =document.querySelector(".reset")
let custom = document.querySelector(".custom")
let x = 0

butt.forEach(function(ele,ind){
    ele.addEventListener("click",function(){
        console.log(ind)
        if(ind<= 2){
            x =(ind+1) *5 
            console.log(x)
        }
        if(ind ==3 ){x=25
            console.log(x)}
        if(ind ==4){x=50
            console.log(x)}
            for (let index = 0; index < butt.length; index++) {
                butt[index].style.backgroundColor = "hsl(183deg 100% 15%)";
                
            }
            ele.style.backgroundColor = "hsl(172deg 67% 45%)";
            clac ()
    })

})
function clac (){
    console.log("clac is work")
    let a =parseInt( bill.value)
    let b =parseInt(pepole.value)
    
    if(a>0 & b >0){
        console.log("clac")
        rtip.innerHTML = `${(a*x/100)/b}`
        rtot.innerHTML = `${(a/b)+((a*x/100)/b)}`
        console.log(rtip.innerHTML)
    }
    
}
custom.addEventListener("blur",()=>x=parseInt(custom.value))
custom.addEventListener("blur",()=>clac())
pepole.addEventListener("blur",function clac (){
    console.log("clac is work")
    let a =parseInt( bill.value)
    let b =parseInt(pepole.value)
    
    if(a>0 & b >0){
        console.log("clac")
        rtip.innerHTML = `${(a*x/100)/b}`
        rtot.innerHTML = `${(a/b)+((a*x/100)/b)}`
        console.log(rtip.innerHTML)
    }
    
});
bill.addEventListener("blur",function clac (){
    console.log("clac is work")
    let a =parseInt( bill.value)
    let b =parseInt(pepole.value)
    
    if(a>0 & b >0){
        console.log("clac")
        rtip.innerHTML = `${(a*x/100)/b}`
        rtot.innerHTML = `${(a/b)+((a*x/100)/b)}`
        console.log(rtip.innerHTML)
    }
    
});
rest.addEventListener("click",function(){
    bill.value = 0
    pepole.value =0
    rtip.innerHTML = 0
    rtot.innerHTML = 0
})

