const $aluraLogo = document.querySelector("img.alura-logo");
const theme=localStorage.getItem('theme')
const $toogleBtn=document.getElementById('toggle-btn')

if(theme){
    if(theme==='dark'){
        document.body.classList.add("dark-theme");
        $aluraLogo.src = "./assets/svg/logo-alura-light.svg";
        $toogleBtn.checked=true
    }
}

const switchTheme = () => {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
    $aluraLogo.src = "./assets/svg/logo-alura.svg";
    localStorage.setItem("theme", "light");
} else {
    document.body.classList.add("dark-theme");
    $aluraLogo.src = "./assets/svg/logo-alura-light.svg";
    localStorage.setItem("theme", "dark");
  }
};

export const handleTheme = () => {
  document.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.matches("#toggle-btn")) {
      switchTheme();
    }
  });
};

