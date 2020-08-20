import React, { useState, useRef } from "react";

export default function Location({ error, place, setLocation }) {
  let input = useRef(" ");
  const [displayChangeLoc, setDisplayChangeLoc] = useState(false);

  const handleChangeLoc = () => {
    if (input.current) {
      setLocation(input.current);
    }
    setDisplayChangeLoc(false);
  };

  return (
    <div>
      <div className="location">
        <p onClick={() => setDisplayChangeLoc(!displayChangeLoc)}>{place}</p>
        {error && <div className="notification">{error}</div>}
      </div>
      {displayChangeLoc && (
        <div className="change-location">
          <input
            type="text"
            placeholder="New Location"
            ref={input}
            onChange={(e) => (input.current = e.target.value)}
          />
          <button onClick={handleChangeLoc} type="submit">
            save
          </button>
        </div>
      )}
    </div>
  );
}
