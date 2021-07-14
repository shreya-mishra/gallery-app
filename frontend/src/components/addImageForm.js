import React from "react";
import "../App.css";

const AddImageForm = () => {
  return (
    <div className='formCenter' style={{ textAlign: "center" }}>
      <form
        // onSubmit={this.handleSubmit}
        className='formFields'>
        <div className='formField'>
          <label className='formFieldLabel' htmlFor='title'>
            Title
          </label>
          <input
            type='text'
            id='title'
            className='formFieldInput'
            placeholder='Enter your title'
            name='title'
            // value={this.state.name}
            // onChange={this.handleChange}
          />
        </div>
        <div className='formField'>
          <label className='formFieldLabel' htmlFor='description'>
            Description
          </label>
          <input
            type='description'
            id='description'
            className='formFieldInput'
            placeholder='Enter your description'
            name='description'
            // value={this.state.email}
            // onChange={this.handleChange}
          />
        </div>
        <div className='formField'>
          <label className='formFieldLabel' htmlFor='gallery'>
            Gallery Image
          </label>
          <input
            type='file'
            id='image'
            accept='image/*'
            className='formFieldInput'
            placeholder='Choose your image'
            name='image'
            // value={this.state.email}
            // onChange={this.handleChange}
          />
        </div>
        <div className='formField'>
          <label className='formFieldLabel' htmlFor='password'>
            Password
          </label>
          <input
            type='password'
            id='password'
            className='formFieldInput'
            placeholder='Enter your password'
            name='password'
            // value={this.state.password}
            // onChange={this.handleChange}
          />
        </div>

        <div style={{ height: 20 }} />

        <div className='formField'>
          <button className='formFieldButton'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddImageForm;
