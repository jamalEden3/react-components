import {react, useState} from 'react';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const VALIDATION = {
  email: [
    {
      isValid: (value) => !!value,
      message: 'Is required.',
    },
    {
      isValid: (value) => /\S+@\S+\.\S+/.test(value),
      message: 'Needs to be an email.',
    },
  ],
  password: [
    {
      isValid: (value) => !!value,
      message: 'Is required.',
    },
  ]
}

const getErrorFields = (form) =>
  // get keys of form => [email, password]
  Object.keys(form).reduce((acc, key) => {
    // if VALIDATION has not the key provided return acc
    if(!VALIDATION[key]) return acc;

    // get errors for every key [email and password]
    const errorsPerField = VALIDATION[key]
      .map((validation) => ({
        isValid: validation.isValid(form[key]),
        message: validation.message
      })).filter((errorPerField) => !errorPerField.isValid);
      return { ...acc, [key]: errorsPerField }
  }, {})


const getDirtyFields = (form) => {
  const ff = Object.keys(form).reduce((acc, key) => {
    const isDirty = form[key] !== INITIAL_STATE[key];

    return { ...acc, [key]: isDirty };
  }, {});
  return ff;
}

const FormPage = () => {
  const [form, setForm] = useState(INITIAL_STATE);
  
  const dirtyFields = getDirtyFields(form);
  const errorsFields = getErrorFields(form);
  
console.log(errorsFields)
  const hasChanges = Object.values(dirtyFields).every(
    // [true, false]
    (value) => value
  );

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const hasError = Object.values(errorsFields).flat().length;
    if(hasError) return;
    setForm(INITIAL_STATE);
    alert(form.email + form.password)
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
        {
          errorsFields.email?.length? (
            <span style={{color: 'red'}}>
              {errorsFields.email[0].message}
            </span>
          ) : null
        }
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
        {
          errorsFields.password?.length? (
            <span style={{color: 'red'}}>
              {errorsFields.password[0].message}
            </span>
          ) : null
        }
      </div>
      <button disabled={!hasChanges} type="submit">Submit</button>
    </form>
  );
};

export default FormPage;