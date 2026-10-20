
//   type Action = "Increment" | "Decrement" | "Reset";

// dispacth({
//     type: "Increment",
// });

type CounterAction = {
    type: "Increment" | "Decrement" | "Reset";
};

export default function counterReducer(count: number, action: CounterAction) {

    if (action.type == "Increment") {
        return count + 1;
    }

    else if (action.type == "Decrement") {
        return count - 1;
    }

    else if (action.type == "Reset") {
        return 0;
    }

    else {
        return count;
    }

}
