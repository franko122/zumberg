function StartWork() {
    let bag = document.getElementById('bag')
    let neto = document.getElementById("neto");
    let loki  = document.getElementById('loki')
    let lokij = document.getElementById('lokij');
    let menu = document.getElementById('menu');
    let secmenu = document.getElementById('secmenu');
    let lou = document.getElementById('lou');
    
   let track1 = 74774756457 ;

   bag.addEventListener('click' ,()=>{
          bag.style.border='solid  rgb(2, 62, 127) 4px';
   })


  setInterval(() => {
    lokij.style.display="none"
  }, 3000);

   neto.addEventListener('click',()=>{ 
        if (bag.value == track1) { 
            loki.style.display="flex"
            setTimeout(() => {
              window.location="mainresult.html"
            }, 3000);
          }
          
        else{
          bag.style.border='solid red 3px' 
          alert('Goods not Found')
        } 
  })
  
  menu.addEventListener('click',()=>{ 
    secmenu.style.width="100%"
  })

  lou.addEventListener('click',()=>{ 
    secmenu.style.width="0%"
  })


}
StartWork()