const initialState = {
    items: JSON.parse(localStorage.getItem('cartItems')) || [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const { id, quantity } = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                // If item already exists in cart, update its quantity
                const updatedItems = state.items.map(item =>
                    item.id === id ? { ...item, quantity: item.quantity + quantity } : item
                );
                localStorage.setItem('cartItems', JSON.stringify(updatedItems));
                return {
                    ...state,
                    items: updatedItems,
                };
            } else {
                // If item doesn't exist in cart, add it with quantity
                const newItems = [...state.items, { ...action.payload, quantity }];
                localStorage.setItem('cartItems', JSON.stringify(newItems));
                return {
                    ...state,
                    items: newItems,
                };
            }

        case 'REMOVE_FROM_CART':
            const filteredItems = state.items.filter(item => item.id !== action.payload);
            localStorage.setItem('cartItems', JSON.stringify(filteredItems));
            return {
                ...state,
                items: filteredItems,
            };

        case 'REMOVE_CATEGORY_FROM_CART':
            const remainingItems = state.items.filter(item => item.category !== action.payload);
            localStorage.setItem('cartItems', JSON.stringify(remainingItems));
            return {
                ...state,
                items: remainingItems,
            };

        case 'REMOVE_SELECTED_ITEMS_FROM_CART':
            const { category, selectedIds } = action.payload;
            const itemsAfterRemoval = state.items.filter(
                item => !(item.category === category && selectedIds.includes(item.id.toString()))
            );
            localStorage.setItem('cartItems', JSON.stringify(itemsAfterRemoval));
            return {
                ...state,
                items: itemsAfterRemoval,
            };

        case 'INCREMENT_QUANTITY':
            const incrementedItems = state.items.map(item =>
                item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
            );
            localStorage.setItem('cartItems', JSON.stringify(incrementedItems));
            return {
                ...state,
                items: incrementedItems,
            };

        case 'DECREMENT_QUANTITY':
            const decrementedItems = state.items.map(item =>
                item.id === action.payload && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            );
            localStorage.setItem('cartItems', JSON.stringify(decrementedItems));
            return {
                ...state,
                items: decrementedItems,
            };

        default:
            return state;
    }
};

export default cartReducer;
