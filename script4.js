function breakText(){
    
var h1 = document.querySelector("h1")
var h1Text = h1.textContent

var splittedtext = h1Text.split("")

 var halfValue = splittedtext.length/2;
var clutter = ""
 
splittedtext.forEach(function(elem,idx){
   if(idx<halfValue){
    clutter +=  `<span  class="a">${elem}</span>`
    
   } else {
    clutter +=  `<span  class="b">${elem}</span>`
    
   }
    

       
    
})

h1.innerHTML = clutter


}

breakText()

gsap.from ("h1 .a",{
    y:80,
    duration :0.6,
    delay:0.5,
    opacity:0,
    stagger:0.15,
    
})


gsap.from ("h1 .b",{
    y:80,
    duration :0.6,
    delay:0.5,
    opacity:0,
    stagger:-0.15,
    
})


