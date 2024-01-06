export default function Hill(props) {
  const { height, isFacingLeft = false, color } = props;

  const hillWidth = 42;
  const containerHeight = height + hillWidth;
  const bodyHeight = height + hillWidth / 2;

  const colorClass = color === "blue" ? "hill--blue" : "hill--orange";

  return (
    <div
      className={`hill ${colorClass}`}
      aria-hidden="true"
      style={{ height: containerHeight }}
      data-direction={isFacingLeft ? "left" : "right"}
    >
      <span className="hill__head">
        <span className="hill__eyes">
          <EyesOpen />
          <EyesClosed />
        </span>
      </span>
      <span className="hill__body" style={{ height: bodyHeight }}>
        <span className="hill__base" />
      </span>
    </div>
  );
}

/**
 * Helpers
 */

function EyesClosed() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8.29">
      <path
        d="M4.77,4.46a1.79,1.79,0,0,0,0-.23,1.8,1.8,0,0,0,0-.22,2,2,0,0,0-.07-.23.72.72,0,0,0-.11-.19.37.37,0,0,0-.07-.14L2.14.61A1.21,1.21,0,1,0,.28,2.17L2,4.23.28,6.3A1.21,1.21,0,0,0,2.14,7.86L4.52,5a.33.33,0,0,0,.07-.13.72.72,0,0,0,.11-.19A2,2,0,0,0,4.77,4.46Z"
        fill="#101010"
      />
      <path
        d="M14,4.05,15.72,2A1.21,1.21,0,1,0,13.86.43L11.48,3.27a.37.37,0,0,0-.07.14.72.72,0,0,0-.11.19,2,2,0,0,0-.07.23,1.8,1.8,0,0,0,0,.22,1.79,1.79,0,0,0,0,.23,2,2,0,0,0,.07.23.72.72,0,0,0,.11.19.33.33,0,0,0,.07.13l2.38,2.85a1.21,1.21,0,0,0,1.86-1.56Z"
        fill="#101010"
      />
    </svg>
  );
}

function EyesOpen() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.86 9.46">
      <path
        d="M10.58,0h0a1.28,1.28,0,0,1,1.28,1.28V8.19a1.28,1.28,0,0,1-1.28,1.27h0A1.27,1.27,0,0,1,9.3,8.19V1.28A1.28,1.28,0,0,1,10.58,0Z"
        fill="#101010"
      />
      <path
        d="M1.28,0h0A1.27,1.27,0,0,1,2.55,1.28V8.19A1.27,1.27,0,0,1,1.28,9.46h0A1.27,1.27,0,0,1,0,8.19V1.28A1.28,1.28,0,0,1,1.28,0Z"
        fill="#101010"
      />
    </svg>
  );
}
