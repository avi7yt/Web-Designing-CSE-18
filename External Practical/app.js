const checkBtn = document.getElementById("checkBtn");
checkBtn.addEventListener('click', (e) => {
    const userInput = document.getElementById("myuserInput").value;
    if (userInput % 2 === 0) {
        document.getElementById("result").innerText = `Number is Even`;
    } else {
         document.getElementById("result").innerText = `Number is Odd`;
    }
    
});

