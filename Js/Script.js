const target=document.querySelectorAll('[data-target]')
const content= document.querySelectorAll('[data-content]')

targets.forEach(target=>{
    target.addEventListener('click',()=>{
        content.forEach(c=>{
            c.classList.remove('active')/* remover al dar click la clase que tengo activa en el menu */
    })

    const t= document.querySelector(target.dataset.target) /* slecciono un unico elemento del target*/
    t.classList.add('active')
    })
})