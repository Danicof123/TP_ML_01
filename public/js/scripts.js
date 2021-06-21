const d = document,
    $navMobile = d.getElementById('nav-mobile');

d.addEventListener('DOMContentLoaded', e => {
    d.addEventListener('click', e => {
        if(e.target.matches('.hamburguesa, .hamburguesa>*'))
            $navMobile.classList.toggle('nav-mobile--active')
        if(e.target.matches('.nav-mobile, .nav-mobile *')) 
            $navMobile.classList.remove('nav-mobile--active')
    })
})