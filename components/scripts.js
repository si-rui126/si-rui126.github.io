// Displays project decription when image is clicked (for mobile users)
function show_descr(img_id, word_id) {
    img = document.getElementById(img_id);
    word = document.getElementById(word_id);
    if (word.style.visibility === "hidden") {
        img.style.filter = "brightness(0.4)";
        word.style.visibility = "visible";
        word.style.opacity = 1;
    }
    else {
        img.style.filter = `brightness(1)`;
        word.style.visibility= "hidden";
        word.style.opacity = 0;
    }
}