document.addEventListener("DOMContentLoaded", () => {
    alert("Welcome to my website!");

    const redButton = document.getElementById("redButton");
    const blueButton = document.getElementById("blueButton");
    const greenButton = document.getElementById("greenButton");

    redButton.addEventListener("click", changeToRed);
    blueButton.addEventListener("click", changeToBlue);
    greenButton.addEventListener("click", changeToGreen);

    let isRed = false;
    let isBlue = false;
    let isGreen = true;
    const currentTheme = document.getElementById("currentTheme");

    function changeToRed() {
            isRed = true;
            isBlue = false;
            isGreen = false;

            updateMessage();
            
        document.querySelectorAll('.nav-bar ul li:nth-child(1) a').forEach(element => {
            element.style.backgroundColor = "palevioletred";
        });
        document.querySelectorAll('.nav-bar ul li:nth-child(2) a').forEach(element => {
            element.style.backgroundColor = "lightpink";
        });
        document.querySelectorAll('.nav-bar ul li:nth-child(3) a').forEach(element => {
            element.style.backgroundColor = "lightcoral";
        });
        document.querySelectorAll('[bgcolor="darkseagreen"]').forEach(element => {
            element.style.backgroundColor = "palevioletred";
        });
        document.querySelectorAll('[bgcolor="mediumspringgreen"]').forEach(element => {
            element.style.backgroundColor = "lightpink";
        });
        document.querySelectorAll('[bgcolor="seagreen"]').forEach(element => {
            element.style.backgroundColor = "lightcoral";
        });
        document.querySelectorAll('[bgcolor="palegreen"]').forEach(element => {
            element.style.backgroundColor = "indianred";
        });
        document.querySelectorAll('[bgcolor="lightgoldenrodyellow"]').forEach(element => {
            element.style.backgroundColor = "darksalmon";
        });
        document.querySelectorAll('[bgcolor="papayawhip"]').forEach(element => {
            element.style.backgroundColor = "salmon";
        });
    }

    function changeToBlue() {
            isRed = false;
            isBlue = true;
            isGreen = false;

            updateMessage();

        document.querySelectorAll('.nav-bar ul li:nth-child(1) a').forEach(element => {
            element.style.backgroundColor = "deepskyblue";
        });
        document.querySelectorAll('.nav-bar ul li:nth-child(2) a').forEach(element => {
            element.style.backgroundColor = "darkturquoise";
        });
        document.querySelectorAll('.nav-bar ul li:nth-child(3) a').forEach(element => {
            element.style.backgroundColor = "lightskyblue";
        });
        document.querySelectorAll('[bgcolor="darkseagreen"]').forEach(element => {
            element.style.backgroundColor = "deepskyblue";
        });
        document.querySelectorAll('[bgcolor="mediumspringgreen"]').forEach(element => {
            element.style.backgroundColor = "darkturquoise";
        });
        document.querySelectorAll('[bgcolor="seagreen"]').forEach(element => {
            element.style.backgroundColor = "lightskyblue";
        });
        document.querySelectorAll('[bgcolor="palegreen"]').forEach(element => {
            element.style.backgroundColor = "cornflowerblue";
        });
        document.querySelectorAll('[bgcolor="lightgoldenrodyellow"]').forEach(element => {
            element.style.backgroundColor = "lightcyan";
        });
        document.querySelectorAll('[bgcolor="papayawhip"]').forEach(element => {
            element.style.backgroundColor = "mediumaquamarine";
        });
    }

    function changeToGreen() {
            isRed = false;
            isBlue = false;
            isGreen = true;

            updateMessage();

        document.querySelectorAll('.nav-bar ul li:nth-child(1) a').forEach(element => {
            element.style.backgroundColor = "darkseagreen";
        });
        document.querySelectorAll('.nav-bar ul li:nth-child(2) a').forEach(element => {
            element.style.backgroundColor = "mediumspringgreen";
        });
        document.querySelectorAll('.nav-bar ul li:nth-child(3) a').forEach(element => {
            element.style.backgroundColor = "palegreen";
        });
        document.querySelectorAll('[bgcolor="darkseagreen"]').forEach(element => {
            element.style.backgroundColor = "darkseagreen";
        });
        document.querySelectorAll('[bgcolor="mediumspringgreen"]').forEach(element => {
            element.style.backgroundColor = "mediumspringgreen";
        });
        document.querySelectorAll('[bgcolor="seagreen"]').forEach(element => {
            element.style.backgroundColor = "seagreen";
        });
        document.querySelectorAll('[bgcolor="palegreen"]').forEach(element => {
            element.style.backgroundColor = "palegreen";
        });
        document.querySelectorAll('[bgcolor="lightgoldenrodyellow"]').forEach(element => {
            element.style.backgroundColor = "lightgoldenrodyellow";
        });
        document.querySelectorAll('[bgcolor="papayawhip"]').forEach(element => {
            element.style.backgroundColor = "papayawhip";
        });
    }

    const tableCells = document.querySelectorAll('.master-table td');

    tableCells.forEach(cell => {
        cell.addEventListener('mouseover', () => {cell.classList.add('hover-effect')});

        cell.addEventListener('mouseout', () => {
            cell.classList.remove('hover-effect');});
    });

    function updateMessage() {
        if (isRed) {
            currentTheme.textContent = "Current Theme: Red";
        } else if (isBlue) {
            currentTheme.textContent = "Current Theme: Blue";
        } else if (isGreen) {
            currentTheme.textContent = "Current Theme: Green";
        }
    }

    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const date = document.getElementById("date").value;
        const message = document.getElementById("message").value;

        if (fullName === "" || email === "" || subject === ""|| date === "yyyy-mm-dd" || message === "") {
            alert('Please fill in all required fields.');
            return;
        }

        if (!fullName.includes(" ")) {
            alert('Please enter your first and last name with a space between them.');
            return;
        }

        if (!email.includes("@")) {
            alert('Please enter a valid email address.');
            return;
        }

        if (subject.length > 29) {
            alert('Please keep the subject length less than 30 characters long.');
            return;
        }

        alert('Form submitted successfully!');
        contactForm.reset();
    });
});
