function respond(answer) {
    var responseDiv = document.getElementById("response");
    var message;

    var siButton = document.getElementById("siButton");
    var noButton = document.getElementById("noButton");
    var talvezButton = document.getElementById("talvezButton");

    // Desactivar los botones después de hacer clic en uno
    siButton.disabled = true;
    noButton.disabled = true;
    talvezButton.disabled = true;

    switch (answer) {
        case "si":
            message = "Yo también espero tener muchos más momentos contigo, porque te amo y eres lo mejor que me pudo pasar. Te necesito tanto, no sabes cuanto. Todo el día eres tú, siempre tú.";
            break;
        case "no":
            message = "Bueno, no esperaba que escogieras esto. Sinceramente yo sí quisiera más tiempo contigo, pero supongo escogiste esta opción por algún motivo y es entendible. No te juzgo. Que sepas que siempre estaré para ti, sea la relación que tengamos para ese momento. Te amo.";
            break;
        case "talvez":
            message = "Oye decide ps, siempre indecisas tú, qué mal ah. Uno quisiera una respuesta de sí y no, y me respondes tal vez, pipipipi.";
            break;
        default:
            message = "No entiendo esa respuesta.";
            break;
    }

    // Mostrar mensaje en el div de respuesta
    responseDiv.textContent = message;
}
