export default {
  namespaced: true,
  state() {
    return {
      items: [],
      total: 0,
      qty: 0,
    };
  },
  mutations: {
    addProductToCart(state, payload) {
      const productData = payload;
      const productInCartIndex = state.items.findIndex(
        cartItem => cartItem.productId = productData.id
      );

      if (productInCartIndex > 0) {
        state.items[productInCartIndex].qty++;
      } else {
        const newProduct = {
          productId: productData.id,
          name: productData.name,
          price: productData.price,
          address: productData.address,
          discountMessage: productData.discountMessage,
          qty: 1,
        };
        state.items.push(newProduct);
      }
      state.total = productData.price;
      state.qty++;
      console.log(state.qty);
      if (state.qty >= 1) {
        alert("Add successfully!")
      }
    },
    removeProductFromCart(state, payload) {
      const productId = payload.productId;
      const productInCartIndex = state.items.findIndex(
        cartItem => cartItem.productId = productId
      );
      const productData = state.items[productInCartIndex];
      state.items.slice(productInCartIndex, 1);
      state.total -= productData.price * productData.qty;
      state.qty -= productData.qty;
    },
  },
  actions: {
    addToCart(context, payload) {
      console.log("call action addToCart");
      context.commit('addProductToCart', payload);
    },
    removeFromCart(context, payload) {
      context.commit('removeProductFromCart', payload);
    },
  },
  getters: {
    product(state) {
      return state.items;
    },
    totalSum(state) {
      return state.total;
    },
    quantity(state) {
      console.log(state.qty);
      return state.qty;
    },
  }
};
