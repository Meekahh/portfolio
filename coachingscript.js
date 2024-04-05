document.addEventListener("DOMContentLoaded", () => {

    const redButton = document.getElementById("redButton");
    const blueButton = document.getElementById("blueButton");
    const greenButton = document.getElementById("greenButton");

    redButton.addEventListener("click", changeToRed);
    blueButton.addEventListener("click", changeToBlue);
    greenButton.addEventListener("click", changeToGreen);

    function changeToRed() {
        document.querySelectorAll('.flex-item1').forEach(element => {
            element.style.backgroundColor = "palevioletred";
        });
        document.querySelectorAll('.flex-item2').forEach(element => {
            element.style.backgroundColor = "lightpink";
        });
        document.querySelectorAll('.flex-item3').forEach(element => {
            element.style.backgroundColor = "lightcoral";
        });
        document.querySelectorAll('.flex-item4').forEach(element => {
            element.style.backgroundColor = "indianred";
        });
        document.querySelectorAll('.flex-item5').forEach(element => {
            element.style.backgroundColor = "darksalmon";
        });
    }

    function changeToBlue() {
        document.querySelectorAll('.flex-item1').forEach(element => {
            element.style.backgroundColor = "deepskyblue";
        });
        document.querySelectorAll('.flex-item2').forEach(element => {
            element.style.backgroundColor = "darkturquoise";
        });
        document.querySelectorAll('.flex-item3').forEach(element => {
            element.style.backgroundColor = "lightskyblue";
        });
        document.querySelectorAll('.flex-item4').forEach(element => {
            element.style.backgroundColor = "cornflowerblue";
        });
        document.querySelectorAll('.flex-item5').forEach(element => {
            element.style.backgroundColor = "lightcyan";
        });
    }

    function changeToGreen() {
        document.querySelectorAll('.flex-item1').forEach(element => {
            element.style.backgroundColor = "mediumspringgreen";
        });
        document.querySelectorAll('.flex-item2').forEach(element => {
            element.style.backgroundColor = "palegreen";
        });
        document.querySelectorAll('.flex-item3').forEach(element => {
            element.style.backgroundColor = "darkseagreen";
        });
        document.querySelectorAll('.flex-item4').forEach(element => {
            element.style.backgroundColor = "cornflowerblue";
        });
        document.querySelectorAll('.flex-item5').forEach(element => {
            element.style.backgroundColor = "lightcyan";
        });
    }
});