import React from "react";

function Button(props) {
  const { type, submit, id } = props;

  return (
    <button
      className="button"
      style={{
        backgroundColor: type === "Yes" ? "#1EADA0" : "#D3445A",
        color: "white",
        borderRadius: 4,
        height: 40,
        width: 122,
        border: "none",
        cursor: "pointer"
      }}
      //call sumbit function from App.js
      onClick={() => submit(id, type)}
    >
      <div style={{ fontWeight: 900 }}>{type}</div>
    </button>
  );
}

export default Button;
