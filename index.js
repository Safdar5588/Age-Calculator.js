let birthdate = document.querySelector(".input")
let calculate = document.querySelector(".calculate")
let output = document.querySelector(".output")




calculate.addEventListener("click", function () {
    let dateofbirth = birthdate.value;
    if (dateofbirth == "") {
        alert("Please enter date of birth")
        return
    }

    let currentDate = new Date();

    let input = new Date(dateofbirth)

    let month1 = currentDate.getMonth()
    let month2 = input.getMonth()
    let year1 = currentDate.getFullYear()
    let year2 = input.getFullYear()


    let givenYear = year1 - year2
    let givenmonth = month1 - month2

    if (month1 < month2) {
        givenYear--
    }
    output.innerHTML = "Your age is " + givenYear + " Year Old. "

})



















