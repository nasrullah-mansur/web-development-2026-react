import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./Error";
import Loading from "./Loading";
import Users from "./Users";

export default function App() {
  return (
    <div>

      <ErrorBoundary fallbackRender={(fallbackData) => <Error fallbackData={fallbackData} />}>
        <Suspense fallback={<Loading />}>
          <Users />
        </Suspense>
      </ErrorBoundary>


    </div>
  )
}
