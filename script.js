const fonts = [
    'Arial',
    'Helvetica',
    'Times New Roman',
    'Courier New',
    'Verdana',
    'Georgia',
    'Palatino'];
const fontSizes = [
    'x-small',
    'small',
    'medium',
    'large',
    'x-large'];
const fontWeights = [
    'normal',
    'bold',
    'bolder',
    'lighter'];
const fontStyles = [
    'normal',
    'italic',
    'oblique',
    'underline'];


function randColor() {
    return Math.floor(Math.random()*16777215).toString(16);
}
function randPalette(n) {
    let colors = [];
    for (let i = 0; i < n; i++) {
        colors.push(randColor());
    }
    return colors;
};

function colorDestruction(palette, degreOfDestruction, node = document.body){
    if(degreOfDestruction === 0 || node === null){
        return;
    }
    else{
        let elements = node.children;
        for(let i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = '#' + palette[Math.floor(Math.random()*palette.length)];
            colorDestruction(palette, degreOfDestruction-1, elements[i]);
        }
    }
}
function linkDestruction(node = document.body){
    let links = node.getElementsByTagName('a');
    for(let i = 0; i < links.length; i++){
        links[i].style.fontFamily = fonts[Math.floor(Math.random()*fonts.length)];
        links[i].style.fontSize = fontSizes[Math.floor(Math.random()*fontSizes.length)];
        links[i].style.fontWeight = fontWeights[Math.floor(Math.random()*fontWeights.length)];
        links[i].style.fontStyle = fontStyles[Math.floor(Math.random()*fontStyles.length)];
    }
}
function videoDestruction(node = document.body){
    let videos = node.querySelectorAll('video');
    for(let i = 0; i < videos.length; i++){
        videos[i].src = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        videos[i].load();
    }
}

function imageDestruction(node = document.body){
    let images = node.querySelectorAll('img');
    for(let i = 0; i < images.length; i++){
        images[i].src = 'https://static7.depositphotos.com/1000991/694/i/450/depositphotos_6943939-stock-photo-fire-letter.jpg';
    }
}

function flexDestruction(node = document.body){
    let flexElements = document.querySelectorAll('[display="flex"]');
    console.log(flexElements);
    for(let i = 0; i < flexElements.length; i++){
        flexElements[i].style.flexDirection = 'column';
    }
}
// Main
function lovely(){
    let colors = randPalette(5);
    colorDestruction(colors, 5);
    linkDestruction();
    imageDestruction();
    flexDestruction();
}


lovely();
document.addEventListener('scroll', function(){
    imageDestruction();
});