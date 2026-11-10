/* eslint-disable @typescript-eslint/no-explicit-any */


export const loggerMiddleware = (store: any) => (next: any) => (action: any) => {

    // 1. Do something before the action reaches the reducer
    // console.log("Dispatching:", action);

    // // 2. Pass the action to the next middleware (or the reducer)
    const result = next(action);

    // // 3. Do something after the reducer has processed it
    // console.log("Next state:", store.getState());

    return result;


}