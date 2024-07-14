const icons = document.querySelectorAll(".icon");
const answers = document.querySelectorAll(".answer");
// icons.forEach(icon =>{
//     icon.addEventListener('click',()=>{
//         answers.forEach(answer=>{
//             answer.style.display = 'inline-block';
//         })
//     })
// })
let open = true;

for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener('click', ()=>{
        

            answers[i].classList.toggle("open");
           icons[i].style.transform = "rotate(180deg)";
           if(!answers[i].classList.contains("open")){
               icons[i].style.transform = "rotate(0deg)";

           }
            
            
    })
    
}


/// form validation
let submit = document.getElementById('submit');
let name = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');

submit.addEventListener('click', ()=>{
    event.preventDefault();
    if(name.value==="" || email.value===""){
        alert("Please enter valid name and email")
    }
    else if (!email.value.includes('@') || !email.value.includes('.') ){
        alert("enter valid email")
    }
    else {
        alert(`Name: ${name.value}\n Email: ${email.value}\n message: ${message.value}`);
        window.location.href = "../Html/thankyou.html";

        

    }
    
    
})
// automatically background change
let allimages = [
    ' linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(../images/printer4.jpg)',
    'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(../images/shopping.jpg)',
    'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(../images/printer3.jpg)'

];
let main = document.querySelector('.main');


setInterval(()=>{
    let currentImages = allimages[Math.floor(Math.random()*allimages.length)];
    main.style.backgroundImage = currentImages;
    currentImages.background
},3000)


