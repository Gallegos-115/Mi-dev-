const texto = [
    "Python Developer",
    "Java Developer",
    "Web Developer",
    "Problem Solver"
];

let contador = 0;
let letra = 0;

function escribir(){

    let actual = texto[contador];

    document.getElementById("typing").innerHTML =
        actual.slice(0, letra);

    letra++;

    if(letra > actual.length){

        contador++;

        letra = 0;

        if(contador >= texto.length){
            contador = 0;
        }
    }

    setTimeout(escribir,150);
}

escribir();