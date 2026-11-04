import { getErrorMessage } from "react-error-boundary";

export default function Error({ fallbackData }) {

    const { error, resetErrorBoundary } = fallbackData;

    const errorMessage = getErrorMessage(error);


    return (
        <div>Error is: {errorMessage}

            <div>
                <button onClick={resetErrorBoundary}>Try again</button>
            </div>
        </div>
    )
}
