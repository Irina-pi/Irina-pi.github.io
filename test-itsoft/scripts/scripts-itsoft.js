document.getElementById('closeSvg').onclick = function() {
    let el = document.getElementById('disclaimer');
    el.style.display === 'none' ? el.style.display = 'initial' : el.style.display = 'none';
}