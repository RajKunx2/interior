// const budget=document.getElementById("budget");
// console.log(budget);
// budget.style.display="none";
// const getBudget=()=>{
//     console.log("hi");
//     const option = document.getElementById("service");
    
//     if(option==="Turn Key"|| option==="Modular Furniture"){
//         console.log("here")
//         budget.style.display="inline-block";
//     }
   
// }

function SendMail(){
    var params={

        name:document.getElementById("name").value,
        phone:document.getElementById("phone").value,
        email:document.getElementById("email").value,
        city:document.getElementById("city").value,
        service:document.getElementById("service").value,
        budget:document.getElementById("budget1").value,
        address:document.getElementById("address").value
    }

const serviceID="service_0blqgpe";
const templateID="template_jdc0ms9";
emailjs.send(serviceID,templateID,params)
.then(
    res=>{
        document.getElementById("name").value="";
        document.getElementById("phone").value="";
        document.getElementById("email").value="";
        document.getElementById("city").value="";
        document.getElementById("service").value="";
        document.getElementById("budget1").value="";
        document.getElementById("address").value="";
        console.log(res)
        alert("Thank you for submitting your form! We appreciate your interest and will be in touch with you shortly.");
    })
    .catch((err)=>console.log(err));
    console.log("hi")
}


function toggleDropdown() {
    var dropdownList = document.getElementById("dropdownList");
    if (dropdownList.style.display === "block") {
        dropdownList.style.display = "none";
    } else {
        dropdownList.style.display = "block";
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropdown button')) {
        var dropdownList = document.getElementById("dropdownList");
        if (dropdownList.style.display === "block") {
            dropdownList.style.display = "none";
        }
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const changeColor = () => {
        const color = window.scrollY >= window.innerHeight;
        document.querySelector("nav").classList.toggle("fixed", color);
        document.querySelector("nav").classList.toggle("top-[70px] lg:h-[30px] h-[50px] bg-white right-0 left-0", color);
    };

    window.addEventListener('scroll', changeColor);
});
