import faker from 'faker'

const mount=(el)=>{
    el.innerHTML=`You have ${faker.random.number()} new item(s) in the cart`;
}

if(process.env.NODE_ENV==='development'){
    const el=document.querySelector('#dev-cart');
    if(el){
        mount(el);
    }
}

export { mount };