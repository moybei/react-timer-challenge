import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal =  forwardRef(function ResultModal({ targetTime, remainingTime, onReset }, ref) {
  const dialog = useRef();

  const userLost = remainingTime < 0;
  const timeLeft = Math.max((remainingTime/1000).toFixed(2), 0)
  const score = Math.round((1 - remainingTime / 1000 / targetTime) * 100)

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      }
    };
  })


  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <h2>You Lost!</h2>}
      {!userLost && <h2>Your score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{timeLeft} seconds left.</strong>
      </p>
      <div id="close-button">
        <button onClick={onReset}>Close</button>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
})

export default ResultModal;