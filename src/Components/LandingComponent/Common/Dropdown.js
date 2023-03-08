import React from 'react'

const Dropdown = ({ name = "dropdown", value = "" }) => {
  return (
    <select name={name} value={value}>
      <option value="">--Select--</option>
      <option value="one">one</option>
      <option value="two">two</option>
      <option value="three">three</option>
    </select>
  )
}

export default Dropdown