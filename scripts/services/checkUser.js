const validarUsuario = (event) => {
    event.preventDefault();

    const userPhone = document.getElementById("LoginUserPhone").value;
    const userPassword = document.getElementById("LoginPassword").value;

    let activeUser = null;

    users.forEach((user) => {
        if (user.celular === userPhone && user.password === userPassword) {
        activeUser = user;
        }
        else if (userPhone === "" || userPassword === "") {
            
        }
    });

    if (activeUser) {
        location.href = "html\index.html";
    } else {
        
    }
  }

