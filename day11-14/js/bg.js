let color = '#';
let colors = ['222831', '393E46', 'bbded6', 'f38181', 'c3bef0', '99ddcc',
    '194350', '5f939a', '07689f', '6c5b7b', '4d4545', '455d7a', '363062'];

color += colors[Math.floor(Math.random() * colors.length)];
document.querySelector("body").style.background = color;

//new cake color: 'f9f3b4', 'aee4ab', '1ebaf3', 'ad97da', 'f768b3'