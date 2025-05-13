
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],

    
      addToCart: (product) => {
        const existProduct = get().cart.find((p) => p.id === product.id);
        if (existProduct) {
          set({
            cart: get().cart.map((p) =>
              p.id === product.id
                ? { ...p, quantity: p.quantity + 1 }
                : p
            ),
          });
        } else {
          set({
            cart: [...get().cart, { ...product, quantity: 1 }],
          });
        }
      },

      
      removeFromCart: (productId) => {
        set({
          cart: get().cart.filter((p) => p.id !== productId),
        });
      },

      
      clearCart: () => set({ cart: [] }),

      
      getTotalPrice: () => {
        return get().cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },

      
      increaseQuantity: (productId) => {
        set({
          cart: get().cart.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        });
      },

    
      decreaseQuantity: (productId) => {
        set({
          cart: get().cart.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
              : item
          ),
        });
      },
    }),
    {
      name: 'cart-storage', 
    }
  )
);

export default useCartStore;
