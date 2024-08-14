import { Fragment, useRef } from 'react'
import './App.css'

const inputs = [
  {id: "datetime-local", name: "datetime-local", type: 'datetime-local' },
  {id: "checkbox", name: "checkbox", type:'checkbox' },
  {id: "color", name: "color", type:'color' },
  {id: "date", name: "date", type:'date' },
  {id: "email", name: "email", type:'email' },
  {id: "file", name: "file", type:'file' },
  {id: "image", name: "image", type:'image' },
  {id: "month", name: "month", type:'month' },
  {id: "number", name: "number", type:'number' },
  {id: "password", name: "password", type:'password' },
  // Radio inputs have to share the same "name" property to unselect others when one is selected, and have a "value" to get in the form data
  {id: "radio1", name: "radio", type:'radio', value: 'radio1' },
  {id: "radio2", name: "radio", type:'radio', value: 'radio2' },
  {id: "radio3", name: "radio", type:'radio', value: 'radio3' },
  {id: "range", name: "range", type:'range' },
  {id: "search", name: "search", type:'search' },
  {id: "telephone", name: "telephone", type:'tel' },
  {id: "text1", name: "text1", type:'text' },
  {id: "time", name: "time", type:'time' },
  {id: "url", name: "url", type:'url' },
  {id: "week", name: "week", type:'week' },
]

function App() {
  const formRef = useRef(null);

  function handleChange(e) {
    if (e.target.name.includes('radio')) {
      
    }

    const formData = new FormData(formRef.current);
    const form = {};
    for (const [key, value] of formData) {
      form[key] = value;
    }

    console.log(form)
  }

  return (
    // To use formData, name property of input is needed. Otherwise won't detect the input
    <form id="my-form" ref={formRef} onChange={handleChange}>
      <label>type button</label><input name='button' type='button' value="My button"/><br />
      <label>type hidden</label><input type='hidden' /><br />
      <label>type reset</label><input type='reset' /><br />
      <label>type submit</label><input type='submit' /><br />
      {inputs.map(input => (
        <Fragment key={input.id}>
        <label htmlFor={input.name}>type {input.type}</label>
        <input id={input.id} name={input.name} type={input.type} value={input.value} />
        <br />
        </Fragment>))}
    </form>
  )
}

export default App
