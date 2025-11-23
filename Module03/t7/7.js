
const trigger = document.getElementById('trigger');
const target = document.getElementById('target');


const originalSrc = target.src;


trigger.addEventListener('mouseover', function() {
    target.src = 'img/picB.jpg';
});


trigger.addEventListener('mouseout', function() {
    target.src = originalSrc;
});
