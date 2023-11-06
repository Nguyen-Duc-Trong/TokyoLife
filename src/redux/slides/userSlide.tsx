"use client"
import { createSlice } from "@reduxjs/toolkit";
export const userSlide = createSlice({
  name: "user",
  initialState: {
    listProductCart:[]
  },
  reducers: {
      addToCart: (state, action) => {
        const product = action.payload;
        const check = state?.listProductCart.find((it:any) => it?.id  === product?.id );
        // console.log("check",check)
        let newList:any = [...state.listProductCart];
          if (check) {
            const a = newList.map((it:any) => {
              if (it?.id === product?.id) {
                return {...it,  quantity :  it?.quantity + 1,
                 }
              }
              return it;
            });
            newList=[...a]
          }
           else {
          let newProduct = {...product,quantity:1 }
           newList.push(newProduct)
          }
        return {...state, listProductCart : newList }
      },
      deleteProduct: (state, action) => {
        const newList2 = state.listProductCart.filter((it:any)=>{
          if(it?.id !== action?.payload){
            return it
          }
        })
        return {...state, listProductCart:newList2}

      },
      increment: (state, action) => {
        let newList:any = [...state.listProductCart];
          const a = newList.map((it:any) => {
            if (it?.id === action.payload) {
              return {...it,  quantity :  it?.quantity + 1,
               }
            }
            return it;
          });
          newList=[...a]
      return {...state, listProductCart : newList }
        
      },
      decrement: (state, action) => {
        let newList:any = [...state.listProductCart];
          const a = newList.map((it:any) => {
            if (it?.id === action.payload) {
                return {...it,  quantity :  it?.quantity - 1}
            }
            return it;
          });
          const b = a.filter((it:any)=>{
            if(it.quantity > 1 ){
              return it
            }
          })
          newList=[...b]
      return {...state, listProductCart : newList }
      }

  }
});
export const { addToCart, deleteProduct, increment, decrement } = userSlide.actions;
export default userSlide.reducer;
