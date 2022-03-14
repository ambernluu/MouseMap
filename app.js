

document.addEventListener('mousemove', function(e){
    console.log(e.pageX, e.pageY);

   const r =  Math.round(e.pageX * 255 / window.innerWidth);
   const b = Math.round(e.pageY * 255 / window.innerHeight);
//    console.log(`New coords: ${r}, ${b}`);
   document.body.style.backgroundColor = `rgb(${r}, 0, ${b})`;
});

