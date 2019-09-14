
function pass_val(pass1)
{
    var regPass= /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,9}$/;
    if(regPass.test(pass1) == false)
    {
        document.getElementById("status1").innerHTML    = "<span class='warning'>Please enter you password between 7-9 character atleast one number, alphabet, special character</span>";

    }
    else
    {
        document.getElementById("status1").innerHTML	= "<span class='valid'>Thanks for entering password</span>";	  
    }


}
function checkPass()
{
    //Store the password field objects into variables ...
    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');
    //Store the Confimation Message Object ...
    var message = document.getElementById('confirmMessage');
    //Set the colors we will be using ...
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    //Compare the values in the password field 
    //and the confirmation field
    if(pass1.value == pass2.value){
        //The passwords match. 
        //Set the color to the good color and inform
        //the user that they have entered the correct password 
        pass2.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Passwords Match"
        
    }else{
        //The passwords do not match.
        //Set the color to the bad color and
        //notify the user.
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Passwords Do Not Match!"
    }
} 




// validate email
function email_validate(email)
{
var regMail = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;

    if(regMail.test(email) == false)
    {
    document.getElementById("status").innerHTML    = "<span class='warning'>Email address is not valid yet.</span>";
    }
    else
    {
    document.getElementById("status").innerHTML	= "<span class='valid'>Thanks, you have entered a valid Email address!</span>";	
    }
}

// validates text only
function Validate(txt) {
    txt.value = txt.value.replace(/[^a-zA-Z-'\n\r.]+/g, '');
}






(function () {
    'use strict';
    window.addEventListener('load', function () {

        var forms = document.getElementsByClassName('needs-validation');

        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    debugger;
                    switch (form.id) {
                        case "addNewPlan":
                            addPlan();
                            break;
                        case "addPlanMeadDesc":
                            addMeal();
                            break;
                        


                    }
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();




$('#sliderinput').on('change', function () {
    //get the file name


    var fileName = $(this).val();
    //replace the "Choose a file" label
    $(this).next('.custom-file-label').html(fileName);
})
$('#custprofileinput').on('change', function () {
    //get the file name
    var fileName = $(this).val();
    //replace the "Choose a file" label
    $(this).next('.custom-file-label').html(fileName);
})


    // THE JSON ARRAY.
    
        // THE JSON ARRAY.
        var data = [
{
    "plan": "Wholesome Membership",
    "meals": [{
        "name": "Biryani",
        "description": "Royal Biryani"
    },
    {
        "name": "Pan Pizza",
        "description": "Pizza with beans"
    },
    {
        "name": "Mendu Vada",
        "description": "Mendu vada with sambahar"
    }


    ]
},
{
    "plan": "Essential Membership",
    "meals": [{
        "name": "Burger",
        "description": "sada burger"
    },
    {
        "name": "Chole Bhature",
        "description": "Bhature with onion"
    },
    {
        "name": "Samosa",
        "description": "Samosa with sweet chutney"
    }
    ]
},
{
    "plan": "Vegetarian Membership",
    "meals": [{
        "name": "green salad",
        "description": "Carrot, Radish"
    },
    {
        "name": "Idli",
        "description": "Chutney , Sambhar"
    },
    {
        "name": "Paneer",
        "description": "Palak, Paneer"
    }
    ]
}

];
function populateSelect()
    {
        var ele = document.getElementById('ddSelectPlan');
        for (var i = 0; i < data.length; i++) 
        {
            // POPULATE SELECT ELEMENT WITH JSON.
            ele.innerHTML = ele.innerHTML +
                '<option value>'+ data[i]['plan']+'</option>';
               
        }
    }


    $(document).ready(function()
    {
        populateSelect();
    });

var plantemplate = {
    "plan": "",
    "meals": []
};
var mealtemplate = {
    "name": "",
    "description": ""
}
function addPlan() {
    var plan = $("#plan").val();
    
    if (plan !== "") {
        plantemplate.plan = plan;
        data.push(plantemplate);

        console.log(data);
    }
}

function addMeal() {
    var meal = $("#meal").val();
    var mealdesc = $("#mealdesc").val();
    
    if (meal !== "") {
        mealtemplate.mealdesc = mealdesc;
        mealtemplate.meal = meal;
        var addSelectPlan = $("#ddSelectPlan option:selected").text();
        $.each(data, function (i, v) {            
            if(v.plan === addSelectPlan){
                
                v.meals.push(mealtemplate)
                return;
            }
        });
    }

}








