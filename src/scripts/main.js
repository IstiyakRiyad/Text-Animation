import "../styles/main.css";

const input = document.getElementById('typeText');
const data = document.getElementById('data');


let preValue = '';


const addAnimation = (tag)=> {
    if(tag.classList.contains('animation')) return;

    tag.classList.add('animation');
    setTimeout(()=>{
        tag.classList.remove('animation');
    }, 1000);
}

const addJumpAnimation = (tag) => {
    setTimeout(()=> {
        tag.style.top = 0;
    }, 50);

    setTimeout(()=> {
        addAnimation(tag);
    }, 2300);
}

const createSpanElement = (value, position)=> {
    const span = document.createElement('span');
    span.innerText = value;
    
    addJumpAnimation(span);

    // Inserting
    data.insertBefore(span, data.children[position]);

    // Adding EventListener
    span.addEventListener('mousemove', ()=> {
        addAnimation(span);
    });

    span.addEventListener('touchmove', ()=> {
        addAnimation(span);
    });   
}

const removeSpanElement = (position)=> {
    const tag = data.children[position];
    tag.style.top = `${data.offsetHeight}px`;

    setTimeout(()=> {
        data.removeChild(tag);
    }, 2500);
}

input.addEventListener('input', event => {
    const {value} = event.target;
    document.documentElement.style.setProperty(
        '--startHeight', 
        `${data.offsetHeight}px`);

    for(let i = 0, j = 0; i < value.length || j < preValue.length; i++, j++){
        if(preValue.length < value.length) {
            if(preValue[j] !== value[i]) {
                createSpanElement(value[i], i);
                j--;
            }
        }
        else if(preValue.length > value.length) {
            if(preValue[j] !== value[i]) {
                removeSpanElement(j);
                i--;
            }
        }
    }

    preValue = value;
});

