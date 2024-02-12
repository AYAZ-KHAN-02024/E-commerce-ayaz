

function CartReducer(state, action) {

    if (action.type === 'ADD_TO_CART') {
        let { tickColor, amount, id, name, price, Product } = action.payload


        let cartProduct;
        let uniqueId = id + tickColor;


        let existingProduct = state.cart.find((elm) => {
            return elm.id === uniqueId
        })



        if (existingProduct) {

            let updatedCart = state.cart.map((CurElm) => {
                if (CurElm.id === uniqueId) {

                    let newAmount = CurElm.amount + amount;
                    if (newAmount >= CurElm.max_stock) {

                        newAmount = CurElm.max_stock
                    }
                    return {
                        ...CurElm,
                        amount: newAmount
                    }

                }
                else {
                    return CurElm
                }
            });
            return {
                ...state,
                cart: updatedCart,
            };
        }
        else {
            cartProduct = {
                id: uniqueId,
                pageId: id,
                amount: amount,
                name: name,
                price: price,
                color: tickColor,
                image: Product.image[0].url,
                max_stock: Product.stock,

            }

            return {
                ...state,
                cart: [...state.cart, cartProduct],
            }
        }



    }

    if (action.type === "DELETE_ITEM") {
        let id = action.payload;
        let Item = state.cart;
        let remainItem = Item.filter((elm) => {
            return elm.id !== id

        })


        return {
            ...state,
            cart: remainItem,
        }


    }

    if (action.type === "CLEAR_ALL_CART") {

        return {
            ...state,
            cart: []

        }
    }


    if(action.type==='CART_AMOUNT'){
     let CartAmount=state.cart.reduce((initialValue,curElm)=>{
      let { amount }=curElm
      initialValue = initialValue + amount

      return initialValue
     },0)

     return{
        ...state,
        total_item:CartAmount,
     }

    }

    if(action.type ==='SUBTOTAL_CART_PRICE'){
    let CartTotalPrice=state.cart.reduce((intVal,curEl)=>{
        let {price,amount}=curEl

        intVal = intVal + (price * amount) - (price * amount) / 10
        return intVal
    },0)

    return{
        ...state,
        subtotal:CartTotalPrice,
    }

    }



    else {
        return state
    }

}

export default CartReducer
