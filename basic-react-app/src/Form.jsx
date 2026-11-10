function handleSubmit(e) {
  e.preventDefault();
  console.log("form was submitted");
}

export default function Form() {
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="write something" />
      <button>Submit</button>
    </form>
  );
}
