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
        document.querySelectorAll('.grid-item4').forEach(element => {
            element.style.backgroundColor = "indianred";
        });
        document.querySelectorAll('.grid-item5').forEach(element => {
            element.style.backgroundColor = "darksalmon";
        });
        document.querySelectorAll('.grid-item6').forEach(element => {
            element.style.backgroundColor = "salmon";
        });
        document.querySelectorAll('.grid-item7').forEach(element => {
            element.style.backgroundColor = "palevioletred";
        });
        document.querySelectorAll('.grid-item8').forEach(element => {
            element.style.backgroundColor = "lightpink";
        });
        document.querySelectorAll('.grid-item9').forEach(element => {
            element.style.backgroundColor = "lightcoral";
        });
        document.querySelectorAll('.grid-item10').forEach(element => {
            element.style.backgroundColor = "indianred";
        });
        document.querySelectorAll('.grid-item11').forEach(element => {
            element.style.backgroundColor = "darksalmon";
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
        document.querySelectorAll('.grid-item4').forEach(element => {
            element.style.backgroundColor = "cornflowerblue";
        });
        document.querySelectorAll('.grid-item5').forEach(element => {
            element.style.backgroundColor = "lightcyan";
        });
        document.querySelectorAll('.grid-item6').forEach(element => {
            element.style.backgroundColor = "mediumaquamarine";
        });
        document.querySelectorAll('.grid-item7').forEach(element => {
            element.style.backgroundColor = "deepskyblue";
        });
        document.querySelectorAll('.grid-item8').forEach(element => {
            element.style.backgroundColor = "darkturquoise";
        });
        document.querySelectorAll('.grid-item9').forEach(element => {
            element.style.backgroundColor = "lightskyblue";
        });
        document.querySelectorAll('.grid-item10').forEach(element => {
            element.style.backgroundColor = "cornflowerblue";
        });
        document.querySelectorAll('.grid-item11').forEach(element => {
            element.style.backgroundColor = "lightcyan";
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
        document.querySelectorAll('.grid-item4').forEach(element => {
            element.style.backgroundColor = "seagreen";
        });
        document.querySelectorAll('.grid-item5').forEach(element => {
            element.style.backgroundColor = "papayawhip";
        });
        document.querySelectorAll('.grid-item6').forEach(element => {
            element.style.backgroundColor = "ightgoldenrodyellow";
        });
        document.querySelectorAll('.grid-item7').forEach(element => {
            element.style.backgroundColor = "mediumspringgreen";
        });
        document.querySelectorAll('.grid-item8').forEach(element => {
            element.style.backgroundColor = "palegreen";
        });
        document.querySelectorAll('.grid-item9').forEach(element => {
            element.style.backgroundColor = "palegreen";
        });
        document.querySelectorAll('.grid-item10').forEach(element => {
            element.style.backgroundColor = "seagreen";
        });
        document.querySelectorAll('.grid-item11').forEach(element => {
            element.style.backgroundColor = "papayawhip";
        });
    }
});