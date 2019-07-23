function check() {
    if(document.getElementById("Male").checked = true)
        return "Male"
    if(document.getElementById("Female").checked = true)
        return "Female"
    if(document.getElementById("Other").checked = true)
        return "Other"
    else return null
  }  

function clicked()
{
    //alert(document.getElementById("nameTxt").value)
    //call new Person with values from input boxes
    //-- create Person
    const P1 = new Person (document.getElementById("nameTxt").value,
                document.getElementById("age").value,
                document.getElementById("pass").value,
                check(),
                document.getElementById("car").value,
                document.getElementById("vehicle1").value)
  
    console.log(P1)
    // -- use class
    const P2 = new Pclass (document.getElementById("nameTxt").value,
                            document.getElementById("age").value,
                            document.getElementById("pass").value,
                            check(),
                            document.getElementById("car").value,
                            document.getElementById("vehicle1").value)

   console.log(P2)
}