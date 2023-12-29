const text = document.querySelector('h1');
const boutton = document.querySelector('button');

function getValue(e){
    e.preventDefault();
    const inp = document.querySelector('input').value;
    text.innerText = `Hello ${inp} !`;
}
boutton.addEventListener('click', getValue);