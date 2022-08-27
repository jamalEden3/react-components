import * as React from 'react';

const FormPage = () => {
  const INITIAL_STATE = {
    email: '',
    password: '',
  };
  const [form, setForm] = React.useState(INITIAL_STATE);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setForm(INITIAL_STATE);
    alert(form.email + ' ' + form.password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormPage;