

export type ICartItem = {
    id: number | string;
    productId: number | string;
    quantity: number;
}


export type ICart = ICartItem[];