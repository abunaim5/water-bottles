const getDataLS = () => {
    const getCartStr = localStorage.getItem('cart');
    const cart = JSON.parse(getCartStr);
    if (cart) {
        console.log(cart);
        return cart;
    }
    return [];
}

const saveDataLS = id => {
    const cart = getDataLS();
    cart.push(id);
    addDataLS(cart);
}

const addDataLS = cart => {
    const addCart = JSON.stringify(cart);
    localStorage.setItem('cart', addCart);
}

export { saveDataLS, getDataLS }