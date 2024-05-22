window.addEventListener('load', InitJS);

function CheckPasswords() {
    const password = document.getElementById("password-conf");
    const password_confirm = document.getElementById("password");

    const comp_pass = password.value == password_confirm.value;

    if (!(comp_pass)){
        password_confirm.style.border = "2px solid red";
        password.style.border = "2px solid red";
        password.style["background-color"] = "rgba(255,0,0,0.5)";
        password_confirm.style["background-color"] = "rgba(255,0,0,0.5)";
    }

    return comp_pass
}

function ShowPassword(id) {
    const password = document.getElementById(id);
    if (password.type === "password") {
        password.type = "text";
      } 
    else {
        password.type = "password";
      }
}



function InitJS() {
    const password = document.getElementById("show-pass");
    const password_confirm = document.getElementById("show-pass-conf");

    password.addEventListener("click", () => {
        ShowPassword("password");
        if (password.textContent == "Show") {
            password.textContent = "Hide"
        }
        else {
            password.textContent = "Show"
        }
    })
    password_confirm.addEventListener("click", () => { 
        ShowPassword("password-conf");
        if (password_confirm.textContent == "Show") {
            password_confirm.textContent = "Hide"
        }
        else {
            password_confirm.textContent = "Show"
        }
        
    })
    
    const form = document.getElementById("book-info");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (CheckPasswords()) {
            form.submit();
        }
        else {
            const errorElement = document.getElementById("error-pwd");
            errorElement.innerHTML = "&#9888 Password doesn't match";
            errorElement.style.color = "red"
        }
    })

}

