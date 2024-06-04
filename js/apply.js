$(document).ready(function() {
    document.getElementById('next').addEventListener('click', () => {
        const title = document.getElementById('title').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const country = document.getElementById('country').value;
        const state = document.getElementById('state').value;
        const address = document.getElementById('address').value;
        const town = document.getElementById('town').value;

        if (title === "Please Choose" || firstName === "" || lastName === "" || phoneNumber === "" || country === "" || state === "" || address === "" || town === "") {
            document.querySelector('.validator').style.display = "inline";
        } else {
            document.getElementById('step1').style.display = "none";
            document.getElementById('step2').style.display = "block";
            document.querySelector('.validator').style.display = "none";
        }

    })

    document.getElementById('back').addEventListener('click', () => {
        document.getElementById('step2').style.display = "none";
        document.getElementById('step1').style.display = "block"
    })
})