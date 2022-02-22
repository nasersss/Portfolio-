const form = document.getElementById('form');
var body = document.getElementById('body');
var link =document.querySelectorAll('.Social a');
let errorMessage = document.getElementById("error");
let successMessage = document.getElementById("success");


/**Dark and light Mode */

function changBgDark(){
    body.style.background ="#000";
    body.style.color="#FFF";
    for (i = 0; i < link.length; i++) {
        link[i].style.color = "#fd545f";
        }


}
function changBgWhite(){
    body.style.background ="#FFF";
    body.style.color ="#000";
    
} 


/*Validation contact form */

form.addEventListener('submit', e => {
	e.preventDefault();
	
	validate();
});
function validate()

{
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message= document.getElementById('message').value;


// name validation

if(name == "")
            {
            error("Enter your name");
            return false;
            }
            
if(!isNaN(name))
            {
            error("Your name should be in character");
            return false;
            }


// email validation

var at = email.indexOf("@");
var dot = email.lastIndexOf(".");

if(at<1||dot<at+2||dot+2 >= email.lenght)
            {
            error("Not a valid email");
            return false;
            }
//message validation
if(subject=="")
    {
        error("please Enter Subject if your message.");
        return false;
    }

if(subject.length >10)
    {
    error(" The Subject must be less 10 charecter.");
    return false;
    }


//message validation
if(message=="")
    {
        error("Please Enter  your message.");
        return false;
    }

if(message.length <20)
    {
    error("Sorry your  message must be greater than 20 charecter.");
    return false;
    }

  //Error Function
    

    function error(error){
        errorMessage.innerHTML = error;   
    }

    //Success Function

    function success(success){
        successMessage.innerHTML = success;   
    }  
    success ("Thanks for you we will replay soon");
    error("");
    alert("success");

}
var img = document.querySelector("#img");
function showimg(){
    
     img.style="opacity: 0.5;";
     form.onreset;
}



//Modal to show image

const Modal = document.getElementById("modal-container");
const calling = image =>{

    document.getElementById("show-img").setAttribute("src",image.getAttribute("src"));
    Modal.style.display="flex";
    

}

Modal.addEventListener('click',()=>{
    Modal.style.display="none";
});




//upload avatar 

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader()

        reader.onload = function(e) {
            let image = document.getElementById("imagePlaceholder")
            image.style.display = "block"
            image.src = e.target.result

        }

        reader.readAsDataURL(input.files[0])
    }
}