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

// show more / show less function
function show_moreless(dots_id, text_id, btn_id) {
    var dots = document.getElementById(dots_id);
    var text = document.getElementById(text_id);
    var btn = document.getElementById(btn_id);

    if (dots.style.display === "none") {
        dots.style = "inline";
        btn.innerHTML = "Read more";
        text.style.display = "none";
    }
    else {
        dots.style.display = "none";
        btn.innerHTML = "Read less";
        text.style.display = "inline";
      }
}