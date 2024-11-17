function starter( ) {

    three.addEventListener('click' , ()=>{ 
    let one = document.getElementById("one");
    let two = document.getElementById("two") ;
    let wel = document.getElementById("wel");
    let ede = document.getElementById("ede")
    let three = document.getElementById("three"); 
        let Username = "frank" 
        let password = "frank"   
        if  ( one.value == Username && two.value == password) {  
            wel.style.display="block"
            ede.style.display="none"
        }else{
            console.log('wrong'); 
            alert('wrong password')
        } 
    })
}
starter()