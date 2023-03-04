export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: 'p001',
          name: 'Product 1',
          price: 1000,
          address: "54 Võ Văn Kiệt, Thanh Hà",
          discountMessage: "Giảm 10%",
        },
        {
          id: 'p002',
          name: 'Product 2',
          price: 2000,
          address: "90 Sơn Trà, Đà Nẵng",
          discountMessage: "Giảm 50%", 
        },
        {
          id: 'p003',
          name: 'Product 3',
          price: 3000,
          address: "123A, Đà Nẵng",
          discountMessage: "Giảm 30%", 
        },
      ],
    };
  },
  getters: {
    products(state) {
      return state.products;
    },
    productById: (state) => (id) => {
      return state.products.findIndex(product => product.id === id)
    },
  } 
};
