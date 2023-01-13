
// const buton = document.querySelector("button");
// const body = document.querySelector("body");
// const h1=document.querySelector("h1");
 
// buton.addEventListener("click", () => {
//   const a = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);
//   const c = Math.floor(Math.random() * 255);
//   const renk = `rgb(${a},${b},${c})`;

//   const a1 = Math.floor(Math.random() * 255);
//   const b2 = Math.floor(Math.random() * 255);
//   const c3 = Math.floor(Math.random() * 255);
//   const renk1 = `rgb(${a},${b},${c})`;

//   body.style.backgroundColor = `${renk}`
//   buton.style.backgroundColor = `${renk1}`
//   });
// buton.addEventListener("mouseover", () => {
//     const x = Math.floor(Math.random() * 255);
//     const y = Math.floor(Math.random() * 255);
//     const z = Math.floor(Math.random() * 255);
//     const renk2 = `rgb(${a},${b},${c})`;
//     const renk3 = `rgb(${a},${b},${c})`;
  
  
//     body.style.backgroundColor = `${renk2}`
//     buton.style.backgroundColor = `${renk3}`
//   });

const renBtn = document.querySelector("button");
renBtn.onclick=()=>{
    const a =Math.floor(Math.random()*255)
    const b =Math.floor(Math.random()*255);
    const c = Math.floor(Math.random()*255);


   document.body.style.background ="rgb("+a +","+b+","+c+")";
    
   const x =Math.floor(Math.random()*255)
   const z =Math.floor(Math.random()*255);
   const y = Math.floor(Math.random()*255);

   btn1.style.background = "rgb("+x +","+z+","+y+")";
   btn1.style.color = "rgb("+a +","+z+","+c+")";
   h1.innerHTML ="RGB("+a +","+b+","+c+")";
   h1.style.color="rgb("+x +","+b+","+y+")";
   h1.style.background="rgb("+a +","+b+","+z+")";

}