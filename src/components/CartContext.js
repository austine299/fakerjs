import {useContext, createContext,useState} from "react"

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    const [shop, setShop] = useState(false);
    const [cartModal, setCartModal] = useState(false);
    const [sidebar, setSidebar] = useState(false)
    const [mobileNav, setMobileNav ] = useState(true);

    const AddToCart = (product) => {
        setCart((prevCart) => {
          const existing = prevCart.find((item) => item.id === product.id);
          if (existing) {
            return prevCart.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
          }
          return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const incrementItem = (id) => {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    };

    const decrementItem = (id) => {
      setCart((prevCart) =>
        prevCart
          .map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0)
      );
    };

    const deleteitem = (id) =>{
      setCart(prevCart => prevCart.filter(item=>item.id !== id))
    }

    const value = {
        cart,
        AddToCart,
        incrementItem,
        decrementItem,
        deleteitem,
        shop,
        setShop,
        cartModal,
        setCartModal,
        sidebar,
        setSidebar,
        mobileNav, 
        setMobileNav

      };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
