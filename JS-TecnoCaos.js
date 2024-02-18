var getData = function()
{
    var nombre =document.getElementById("nombre").value;
    var email =document.getElementById("email").value;
    var telefono =document.getElementById("telefono").value;
    var mensaje =document.getElementById("mensaje").value;
    if (nombre == ""){
        document.getElementById("nombre").focus();
    }else{
        if(email == ""){
            document.getElementById("email").focus();
        }else{
            if(telefono == ""){
                document.getElementById("telefono").focus()
            }else{
                if(mensaje == ""){
                    document.getElementById("mensaje").focus()
                }else{
                console.log(nombre+" "+email+" "+telefono+" "+mensaje);
                document.getElementById("nombre").value="";
                document.getElementById("email").value="";
                document.getElementById("telefono").value="";
                document.getElementById("mensaje").value="";

                document.getElementById("nombre").focus();
                }
            }
        }
    }
}