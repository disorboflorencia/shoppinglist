window.addEventListener('load', function (){

        
        let defaul = document.getElementById('default')
        let padre = document.getElementById("listado")
        let items = document.getElementById('item')

        

        let addButton = document.getElementById("agregado").addEventListener("click",function(){  

            let categoria = document.getElementById('categoria').value
            let nombre = document.getElementById('nombre').value
            let descripcion = document.getElementById('descripcion').value

            document.getElementById('categoria').value = '-'
            document.getElementById('nombre').value = ''
            document.getElementById('descripcion').value = ''

            let modelo = `<li id="item"><button type="button" class="btn btn-primary" id = 'btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal" data-nombre='${nombre}' data-categoria='${categoria}' data-descripcion='${descripcion}'> <img src="${categoria}" alt="${nombre}" class='iconos'> ${nombre} </button></li>`
            
            padre.innerHTML += modelo

            defaul.style.display = 'none'
            listado.style.display = 'block'

            
        } )

            let verDetalle = document.getElementById ('listado').addEventListener('click', function(e){

                document.getElementById('exampleModalLabel').innerHTML = e.target.getAttribute('data-nombre')
                document.getElementById('modal-body').innerHTML = e.target.getAttribute('data-descripcion')
                document.getElementById('modal-header').src = e.target.getAttribute('data-categoria')


            })

        

})    




