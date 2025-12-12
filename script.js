//Menu de Hamburguer
let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")
let body = document.getElementsByTagName("body")
let sombra = document.getElementById("sombra")


function abreFechaMenu() {
    //Se o menu está fechado
    if (window.getComputedStyle(menu).right == "-210px") {
        //Abrir menu
        menu.style.right = "0"
        
        //Mostrar icone x
        iconeX.style.display = "inline"
        
        //Esconder icone barras 
        iconeBarras.style.display = "none"
        
        sombra.style.right = "0"
    } else {
        //Fechar o menu
        menu.style.right = "-210px"
        
        // Esconder icone X
        iconeX.style.display = "none"
        
        // Mostrar icone barras
        iconeBarras.style.display = "inline"
        
        sombra.style.right = "-101vw"
    }
}

onresize = () => {
    if (window.getComputedStyle(menu).right == "-210px") {
        // Mostrar icone X
        iconeX.style.display = "inline"
    }
    else{
        // Esconder icone barras
        iconeBarras.style.display = "none"
    }
}




<script>

    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // impedi o refresh da página

        const nome = form.querySelector("input[type='text']").value.trim();
        const email = form.querySelector("input[type='email']").value.trim();
        const mensagem = form.querySelector("textarea").value.trim();

        if (!nome || !email || !mensagem) {
            alert("Por favor, preencha todos os campos.");
            return;
        }


        if (!email.includes("@") || !email.includes(".")) {
            alert("Digite um e-mail válido.");
            return;
        }

        alert("Mensagem enviada com sucesso!");
        form.reset(); 
    });
</script>

