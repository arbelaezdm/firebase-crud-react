import React, { useState }  from "react";

const LinkForm = (props) => {

  const initialStateValues = {
    url: '',
    name: '',
    description: ''
  }

  const [values, setValues] = useState(initialStateValues)

  const handleInputChange = e => {1
    const {name, value} = e.target
    setValues({...values, [name]: value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(values);
    props.addOrEditLink(values)
  }


  return (
    <form action="" onSubmit={handleSubmit}>
      
      <div className="form-group input-group">
        <div className="input-group-text bg-ligth">
          <i className="material-icons">insert_link</i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="https://someurl.com"
          name="url"
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">create</i>
        </div>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Website name"
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <textarea
          name="description"
          id=""
          rows="2"
          className="form-control"
          onChange={handleInputChange}
        ></textarea>
      </div>

      <button className="btn btn-primary btn-block">Save</button>

    </form>
  );
};

export default LinkForm;
