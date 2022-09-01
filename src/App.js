import { Suspense } from "react";
import { createResource } from "./PostApi";
import Post from "./Post";
import Num from "./Num";
import Spinner from "./Spinner";

const resource = createResource();
function App() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-xl px-10">
      <Suspense fallback={<Spinner />}>
        <Post resource={resource} />
        <Num resource={resource} />
      </Suspense>
    </div>
  );
}

export default App;
