export const reducer=(state,action)=>{
    if(action.type=== "REMOVE_ITEM"){
        return{
            ...state,
            item:state.item.filter((currElem)=>{
                return currElem.id!== action.payload;
            }),
        }
    }
    if(action.type==="CLEAR_CART"){
        return{
            ...state, item:[]
        }
    }

    if(action.type==="INCREMENT"){
        let updateCart=state.item.map((currElem)=>{
            if(currElem.id===action.payload){
                return {
                    ...currElem, quantity: currElem.quantity+1
                };
            }
            return currElem;
        })
        return { ...state, item: updateCart };
    }

    if(action.type==="DECREMENT"){
        let realCart=state.item.map((currElem)=>{
            if(currElem.id===action.payload){
                return{
                    ...currElem,quantity:currElem.quantity-1
                };
            }
            return currElem;
        })
        .filter((currElem)=>{
            return currElem.quantity!==0;
        })
        return {...state,item:realCart};
    }
    // if(quantity===0){
    //     removeItem(id);
    // }

    if(action.type==="GET_TOTAL"){
        let {totalItem,totalAmount} =state.item.reduce(
            (accum,curVal)=>{
                let {quantity,price} =curVal;

                accum.totalItem += quantity;

                let updatedtotalAmount=price*quantity;
                accum.totalAmount+=updatedtotalAmount;
                
                return accum;
            },
            {
                totalItem:0,
                totalAmount:0,
                
            }
        );
        return {...state,totalItem,totalAmount};
    }
    return state;
}