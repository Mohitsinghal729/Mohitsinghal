document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("password").value.trim();
    let msg = document.getElementById("msg");

    if(name === "" || email === "" || pass === ""){
        msg.style.color = "red";
        msg.innerText = "All fields are required!";
        return;
    }

    if(pass.length < 6){
        msg.style.color = "red";
        msg.innerText = "Password must be at least 6 characters!";
        return;
    }

    msg.style.color = "green";
    msg.innerText = "Login Successful!";
});
