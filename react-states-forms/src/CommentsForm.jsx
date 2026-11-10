import { useState } from "react";

export default function CommentsForm() {
  let [formData, setFormData] = useState({
    username: "",
    rating: 3,
    remarks: "",
  });

  let handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ username: "", rating: 3, remarks: 3 });
  };

  return (
    <div>
      <h4>Give your Comment!</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          placeholder="enter username"
          type="text"
          value={formData.username}
          id="username"
          name="username"
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label htmlFor="remarks">Remarks</label>
        <textarea
          placeholder="add few remarks"
          value={formData.remarks}
          id="remarks"
          name="remarks"
          onChange={handleInputChange}
        ></textarea>
        <br />
        <label htmlFor="rating">Rating</label>
        <input
          placeholder="enter ur rating"
          type="number"
          min={1}
          max={5}
          value={formData.rating}
          id="rating"
          name="rating"
          onChange={handleInputChange}
        />
        <br />
        <br />
        <button>Add Comment</button>
      </form>
      <br/>
      <hr/>
      <div>
        
      </div>
    </div>
  );
}
