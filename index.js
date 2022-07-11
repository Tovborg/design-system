function schemeToggle(el) {
    var value = el.options[el.selectedIndex].value;
    console.log(value)
    var colorful = document.getElementById('colorful-balanced')
    var bright_accent = document.getElementById('bright-accent');
    if (value === 'colorful-balanced') {
        colorful.style.display = 'inline-block';
        bright_accent.style.display = 'none';
    } else if (value === 'bright-accent') {
        bright_accent.style.display = 'inline-block';
        colorful.style.display = 'none';
    }
}

