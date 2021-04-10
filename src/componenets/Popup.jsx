import React, { useState, useRef, useEffect } from "react";

function Popup() {
  const [popup, setPopup] = useState(false);
  const popupRef = useRef();

  const handleClick = (event) => {
    if (popupRef.current) {
      console.log(event.target);
      if (!popupRef.current.contains(event.target)) {
        setPopup(!popup);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <div className="main-container">
      <div className={popup ? "popup-screen" : "home-screen"}>
        <h1>Open Position</h1>
        <button className="btn" onClick={() => setPopup(true)}>
          Create Position
        </button>
        
      </div>
      {popup && (
        <div ref={popupRef} className="popup">
          <button className="btn-close" onClick={() => setPopup(false)}>
            close
          </button>
          <input type="text" className="input" placeholder="Enter Position Name" />
          
        </div>
      )}
    </div>
  );
}

export default Popup;
