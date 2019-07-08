  function login(){
            var username = document.getElementById('username').value;
            var password =document.getElementById('password').value;
            console.log(username);
            console.log(password);
            if(username == "user" && password == "1234"){
                location.replace("tinderjoy.html");
            }else{
                    alert("Username &/ Password Incorrect")
                }
        }