function handleClick(e) {
  console.log(e);
  console.log("Sri Rama Jayam");
}

function handleMouseOver() {
  console.log("Hara Hara Mahadeva");
}

export default function Button() {
  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p onMouseOver={handleMouseOver}>Sitayascharitham mahat</p>
    </div>
  );
}
