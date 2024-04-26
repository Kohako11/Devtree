function toggleMode(){
    const html = document.documentElement
    //if (html.classList.contains('light')){ Outro coisa que se pode fazer é utilizar toggle para trocar de fundo!
    //    html.classList.remove('light')
    //}else{
    //    html.classList.add('light')
    //}
    html.classList.toggle('light')

    cons = img = document.querySelector("#profile img")

    if(html.classList.contains('light')){
        img.setAttribute('src', './assets/assets/avatar-light.jpeg')
    } else{
        img.setAttribute('src', './assets/assets/avatar.png')
    }
}
