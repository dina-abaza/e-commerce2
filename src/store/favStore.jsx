import {create} from 'zustand';
import { persist } from 'zustand/middleware';

const useFavoritesStore = create(
  persist(
    (set, get) => ({
      favorites: [],

    
      addToFavorites: (product) => {
        const existFav = get().favorites.some((fav) => fav.id === product.id);
        if (!existFav) {
          set({
            favorites: [...get().favorites, product],
          });
        }
      },

    
      removeFromFavorites: (productId) => {
        set({
          favorites: get().favorites.filter((fav) => fav.id !== productId),
        });
      },
    }),
    {
      name: 'favorites-storage',
    }
  )
);

export default useFavoritesStore;
