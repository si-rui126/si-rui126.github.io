/**************** Theme script ****************/
const buttons = document.querySelectorAll('.mode-toggle')

buttons.forEach(button =>{
    button.addEventListener('click', function (){
        document.body.classList.toggle('light-mode')
        document.querySelectorAll('.fa-sun').forEach(icon => icon.classList.toggle('fa-moon'))

        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('lightMode', 'enabled')
          } else {
            localStorage.setItem('lightMode', 'disabled')
          }
    })
})

if (localStorage.getItem('lightMode') === 'enabled') {
    document.body.classList.add('light-mode')
    document.querySelectorAll('.fa-sun').forEach(icon => icon.classList.add('fa-moon'))
  }

/*************** filters projects *****************/
filter_proj("all")
function filter_proj(c) {
  var x, i;
  x = document.getElementsByClassName("project-cont");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("btnContainer");
var btns = btnContainer.getElementsByClassName("filter-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    // var current = document.getElementsByClassName("active");
    // current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}



// Displays project decription when image is clicked (for mobile users)
function show_descr(img_id, word_id) {
    img = document.getElementById(img_id);
    word = document.getElementById(word_id);
    if (word.style.visibility === "hidden") {
        img.style.filter = "brightness(0.3)";
        word.style.visibility = "visible";
        word.style.opacity = 1;
    }
    else {
        img.style.filter = `brightness(1)`;
        word.style.visibility= "hidden";
        word.style.opacity = 0;
    }
}

/*************** show more / show less function***************/
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

