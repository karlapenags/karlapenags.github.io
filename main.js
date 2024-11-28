var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});
// Comentario
typewriter.typeString('Diseñadora gráfica')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Si lo puedes imaginar, lo puedes crear!')
    .pauseFor(2500)
    //número de caracteres que se borrarán
    .deleteChars(6)
    .typeString('<strong>diseñar!</strong>')
    .pauseFor(2500)
    .start();