const p_btns =document.querySelector(".p-btns");
const p_btn=document.querySelectorAll(".p-btn");
const p_img_element=document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click",(e)=>{
    const p_btn_clicked=e.target;
    console.log(p_btn_clicked)
//     p_btn.forEach((curElement)=>{
// curElement.classList.remove("p-btn-active");
//     })
//     p_btn_clicked.classList.add("p-btn-active")
    const btn_num=p_btn_clicked.dataset.btnNum;
    console.log(btn_num);
    const img_active= document.querySelectorAll(`.p-btn-${btn_num}`)
    p_img_element.forEach((curElement)=>{
        curElement.classList.add('p-image-not-active')
    })
   img_active.forEach((curElement)=>{
    curElement.classList.remove('p-image-not-active')
   }) 
});

const heroSection=document.querySelector(".section-hero");
const footerElement=document.querySelector(".section-footer");
const scrollElement=document.createElement("div");
scrollElement.classList.add("scroll");
scrollElement.innerHTML="🚀";
footerElement.after(scrollElement);
const scrolltop=()=>{
    heroSection.scrollIntoView({behavior:"smooth"});
}
scrollElement.addEventListener("click",scrolltop);

// animate number
const counterNum= document.querySelectorAll(".counter-number");
const speed=200;
counterNum.forEach((curElement)=>{
    const updateNumber=()=>{
           const targetNumber= parseInt(curElement.dataset.number);
        //    console.log(targetNumber)
        const initialNum = parseInt(curElement.innerText);
        // console.log(initialNum)
        const incrementNumber=Math.trunc(targetNumber/speed)
        // console.log(incrementNumber)
        if(initialNum<targetNumber){
            curElement.innerText=`${initialNum+incrementNumber}+`;
            setTimeout(updateNumber,10)
        }
    };
    updateNumber();
})

// crative responsive navbar btn

const mobile_nav=document.querySelector(".mobile-navbar-btn");
const header_element = document.querySelector(".header");
mobile_nav.addEventListener('click',()=>{
        header_element.classList.toggle('active')
})