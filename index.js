function schemeToggle(el) {
    var value = el.options[el.selectedIndex].value;
    console.log(value)
    var colorful = document.getElementById('colorful-balanced');
    var bright_accent = document.getElementById('bright-accent');
    var cool_and_fresh = document.getElementById('cool-and-fresh');
    var audacious_and_vibrant = document.getElementById('audacious-and-vibrant');
    if (value === 'colorful-balanced') {
        colorful.style.display = 'inline-block';
        bright_accent.style.display = 'none';
        cool_and_fresh.style.display = 'none';
        audacious_and_vibrant.style.display = 'none';

    } else if (value === 'bright-accent') {
        bright_accent.style.display = 'inline-block';
        colorful.style.display = 'none';
        cool_and_fresh.style.display = 'none';
        audacious_and_vibrant.style.display = 'none';

    } else if (value === 'cool-and-fresh') {
        cool_and_fresh.style.display = 'inline-block';
        colorful.style.display = 'none';
        bright_accent.style.display = 'none';
        audacious_and_vibrant.style.display = 'none';
    } else if (value === 'clear') {
        colorful.style.display = 'none';
        bright_accent.style.display = 'none';
        cool_and_fresh.style.display = 'none';
        audacious_and_vibrant.style.display = 'none';
    } else if (value === 'audacious-and-vibrant') {
        colorful.style.display = 'none';
        bright_accent.style.display = 'none';
        cool_and_fresh.style.display = 'none';
        audacious_and_vibrant.style.display = 'inline-block';

    }
}

function showExampleImage(scheme) {
    console.log(scheme)
    var colorful_balanced_img = document.getElementById('colorful-balanced-img');
    var bright_accent_img = document.getElementById('bright-accent-img');
    var cool_and_fresh_img = document.getElementById('cool-and-fresh-img');
    var audacious_and_vibrant_img = document.getElementById('audacious-and-vibrant-img');
    if (scheme === 'colorful-balanced') {
        if (colorful_balanced_img.style.display === 'none') {
            colorful_balanced_img.style.display = 'inline-block';
            // select the button with an id of 'colorful-balanced-btn' and change the text to 'Hide Example'
            document.getElementById('colorful-balanced-btn').innerHTML = 'Hide Example';
            bright_accent_img.style.display = 'none';
            cool_and_fresh_img.style.display = 'none';
        } else {
            // select the button with an id of 'colorful-balanced-btn' and change the text to 'Show Example'
            document.getElementById('colorful-balanced-btn').innerHTML = 'Show Example';
            colorful_balanced_img.style.display = 'none';
            bright_accent_img.style.display = 'none';
            cool_and_fresh_img.style.display = 'none';
            audacious_and_vibrant_img.style.display = 'none';
        }
    } else if (scheme === 'bright-accent') {
        if (bright_accent_img.style.display === 'none') {
            document.getElementById('bright-accent-btn').innerHTML = 'Hide Example';
            bright_accent_img.style.display = 'inline-block';
            colorful_balanced_img.style.display = 'none';
            cool_and_fresh_img.style.display = 'none';
        } else {
            document.getElementById('bright-accent-btn').innerHTML = 'Show Example';
            bright_accent_img.style.display = 'none';
            colorful_balanced_img.style.display = 'none';
            cool_and_fresh_img.style.display = 'none';
            audacious_and_vibrant_img.style.display = 'none';
        }
    }
    else if (scheme === 'cool-and-fresh') {
        if (cool_and_fresh_img.style.display === 'none') {
            document.getElementById('cool-and-fresh-btn').innerHTML = 'Hide Example';
            cool_and_fresh_img.style.display = 'inline-block';
            colorful_balanced_img.style.display = 'none';
            bright_accent_img.style.display = 'none';
        } else {
            document.getElementById('cool-and-fresh-btn').innerHTML = 'Show Example';
            cool_and_fresh_img.style.display = 'none';
            colorful_balanced_img.style.display = 'none';
            bright_accent_img.style.display = 'none';
            audacious_and_vibrant_img.style.display = 'none';
        }
    }
    else if (scheme === 'audacious-and-vibrant') {
        if (audacious_and_vibrant_img.style.display === 'none') {
            document.getElementById('audacious-and-vibrant-btn').innerHTML = 'Hide Example';
            audacious_and_vibrant_img.style.display = 'inline-block';
            colorful_balanced_img.style.display = 'none';
            bright_accent_img.style.display = 'none';
            cool_and_fresh_img.style.display = 'none';
        } else {
            document.getElementById('audacious-and-vibrant-btn').innerHTML = 'Show Example';
            audacious_and_vibrant_img.style.display = 'none';
            colorful_balanced_img.style.display = 'none';
            bright_accent_img.style.display = 'none';
            cool_and_fresh_img.style.display = 'none';
        }
    }
    else if (scheme === 'clear') {
        colorful_balanced_img.style.display = 'none';
        bright_accent_img.style.display = 'none';
        cool_and_fresh_img.style.display = 'none';
        audacious_and_vibrant_img.style.display = 'none';
    }
}


// modal JS
function openModal(el) {
    if (el === 'solid') {
        var headline = document.getElementById('modal-headline')
        headline.innerHTML = 'Solid Border';
        var paragraph = document.getElementById('modal-paragraph')
        paragraph.innerHTML = 'A solid border is a border that is solid, not dashed or dotted. Solid borders are used for borders around elements, like the border around a box, or the border around a table cell. The solid border is made using either the shorthand border property or the border-style property. <br><br><code>border: solid 1px black;</code>';
    }
    // add a class 'open' to the .modal-wrapper
    $('.modal-wrapper').toggleClass('open');
    // add a class 'blur-it' to the .page-wrapper
    $('.page-wrapper').toggleClass('blur-it');
}
function closeModal() {
    // remove the class 'open' from the .modal-wrapper
    $('.modal-wrapper').toggleClass('open');
    // remove the class 'blur-it' from the .page-wrapper
    $('.page-wrapper').toggleClass('blur-it');
}