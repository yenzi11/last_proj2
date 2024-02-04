import React, { useState } from 'react';
import './member.css'; 

function Form() {
  const [formData, setFormData] = useState({
    nama: '',
    tanggalLahir: '',
    nomorKontak: '',
    alamat: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      born_date: '',
      contact: '',
      address: ''
    });
    alert('Thank you for joined, you are our new member.');
  };

  return (
    <div>
      <h1 className='text'>Please Sign in first.</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nama">Name:</label>
          <input
            type="text"
            id="nama"
            name="name"
            value={formData.nama}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tanggalLahir">Born Date:</label>
          <input
            type="date"
            id="tanggalLahir"
            name="tanggalLahir"
            value={formData.born_date}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nomorKontak">Contact:</label>
          <input
            type="text"
            id="nomorKontak"
            name="nomorKontak"
            value={formData.contact}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="alamat">Address:</label>
          <textarea
            id="alamat"
            name="alamat"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
