document.querySelector('.bi1').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.bi').style.display = 'inline';
        document.querySelector('.bi1').style.display = 'none';
    }
    else{
        document.querySelector('.bi').style.display = 'none';
        setTimeout(()=>{
            document.querySelector('.bi1').style.display = 'inline';
        }, 300);
    }
});
function submitForm() {
    alert("Your response has been submitted! ");
//     window.open("https://rishi731.github.io/myPortfolio/");
}
