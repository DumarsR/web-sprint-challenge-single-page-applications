import React, {useState, useEffect} from "react";
import {Switch, Route, useHistory} from "react-router-dom";
import Form from "./components/Form";
import HomePage from "./components/HomePage";
import Confirmation from "./components/Confirmation";
import Navigation from "./components/Navigation";
import formSchema from "./FormSchema/FormSchema";
import axios from "axios";
import "./App.css";
import * as yup from "yup";

const initalForm = {
  name: '',
  size: '',
  red: false,
  ranch: false,
  bbq: false,
  spinach: false,
  pepperoni: false,
  sausage: false,
  onions: false,
  pineapple: false,
  info: '',
}

const initalFormErrors = {
  name:'',
}

const initalButtonDisabled = true;

const App = () => {
  const [form, setForm] = useState(initalForm);
  const [order, setOrder] = useState([]);
  const [formErrors, setFormErrors] = useState(initalFormErrors);
  const [disabled, setDisabled] = useState(initalButtonDisabled);

  const history = useHistory();

  const handleChange = (e) => {
    e.persist()
    e.target.type === 'checkbox' ? 
    setForm({...form, [e.target.name]: e.target.checked}):
    setForm({...form, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://reqres.in/api/users', form)
      .then(res => {
        console.log(res)
        setOrder(res.data, ...order)
        setForm(initalForm);
        history.push('/confirmed');
      })
      .catch(err => {console.log(err)})
  }

  useEffect(() => {
    formSchema.isValid(form).then(valid => {
      setDisabled(!valid);
    })
  }, [form])
  
  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
      .catch(err => {setFormErrors({...formErrors, [name]: err.errors[0],})})
  
    setForm({
      ...form,
      [name]: value,
    });
  }

  return (
    <div className="App">
      <h1>Lambda Eats</h1>
      <Navigation />
      <Switch>
        <Route path="/confirmed">
          <Confirmation order={order}  />
        </Route>
        <Route path="/pizza">
          <Form form={form} handleChange={handleChange} handleSubmit={handleSubmit} inputChange={inputChange} disabled={disabled} error={formErrors}/>
          {/* {formErrors.name.length > 0 ? (<p className="error">{errors.name}</p>): null} */}
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
