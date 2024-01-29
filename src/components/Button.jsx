/* eslint-disable react/prop-types */
function Button({ label, onClick }) {
  if (onClick)
    return (
      <button
        onClick={() => onClick()}
        className="bg-stone-950 text-white text-lg px-2 py-1"
      >
        {label || "Buy Now"}
      </button>
    );
  return (
    <button className="bg-stone-950 text-white text-lg px-2 py-1">
      {label || "Buy Now"}
    </button>
  );
}

export default Button;
