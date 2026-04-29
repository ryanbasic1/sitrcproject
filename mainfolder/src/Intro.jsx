import { Suspense, useEffect, useState, cloneElement } from "react";

// Icons
import { BsPlayCircleFill } from "react-icons/bs";

// Store
import { useStore } from "./store/store";

function Ready({ setReady }) {
  useEffect(() => {
    setReady(true);
  }, [setReady]);
  return null;
}

export default function Intro({ children }) {
  const updateCursorType = useStore((store) => store.updateCursorType);

  const [clicked, setClicked] = useState(false);
  const [ready, setReady] = useState(false);

  const handleStart = () => {
    if (!ready) return;
    setClicked(true);
  };

  return (
    <>
      <Suspense fallback={<Ready setReady={setReady} />}>
        {cloneElement(children, { ready: clicked && ready })}
      </Suspense>
      <div
        className={`fullscreen bg ${ready ? "ready" : "notready"} ${
          clicked && ready && "clicked"
        }`}
      >
        <div className="loader-container" onClick={handleStart}>
          {!ready ? (
            <img className="fox-loader" src="./image/loading.gif" alt="Loading" />
          ) : (
            <button
              aria-label="continue"
              type="button"
              className="play-btn"
              onMouseEnter={() => updateCursorType("hover")}
              onMouseLeave={() => updateCursorType("pointer")}
            >
              <BsPlayCircleFill />
            </button>
          )}
        </div>
      </div>
    </>
  );
}
