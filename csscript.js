document.addEventListener("DOMContentLoaded", () => {

    const redButton = document.getElementById("redButton");
    const blueButton = document.getElementById("blueButton");
    const greenButton = document.getElementById("greenButton");

    redButton.addEventListener("click", changeToRed);
    blueButton.addEventListener("click", changeToBlue);
    greenButton.addEventListener("click", changeToGreen);

    function changeToRed() {
        document.querySelectorAll('.grid-item1').forEach(element => {
            element.style.backgroundColor = "palevioletred";
        });
        document.querySelectorAll('.grid-item2').forEach(element => {
            element.style.backgroundColor = "lightpink";
        });
        document.querySelectorAll('.grid-item3').forEach(element => {
            element.style.backgroundColor = "lightcoral";
        });
    }

    function changeToBlue() {
        document.querySelectorAll('.grid-item1').forEach(element => {
            element.style.backgroundColor = "deepskyblue";
        });
        document.querySelectorAll('.grid-item2').forEach(element => {
            element.style.backgroundColor = "darkturquoise";
        });
        document.querySelectorAll('.grid-item3').forEach(element => {
            element.style.backgroundColor = "lightskyblue";
        });
    }

    function changeToGreen() {
        document.querySelectorAll('.grid-item1').forEach(element => {
            element.style.backgroundColor = "mediumspringgreen";
        });
        document.querySelectorAll('.grid-item2').forEach(element => {
            element.style.backgroundColor = "palegreen";
        });
        document.querySelectorAll('.grid-item3').forEach(element => {
            element.style.backgroundColor = "darkseagreen";
        });
    }
});