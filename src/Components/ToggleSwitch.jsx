import React, { Component, useState } from "react";
import Switch from "react-switch";

export default function ToggleSwitch(props) {
  const [flag, setflag] = useState(false);

  class SwitchExample extends Component {
    constructor() {
      super();
      this.state = { checked: false };
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(checked) {
      this.setState({ checked });   
      setflag(checked);
    }
  
    render() {
      return (
        <label>
          <Switch onChange={this.handleChange} checked={this.state.checked} />
        </label>
      );
    }
  }

  function darkMod() {
    props.DarkModFunc(flag);
    setflag(!flag)
  }

  return (
    <div>
      <label>
        <button style={{backgroundColor: "transparent",border: "none",filter: "invert()"}} onClick={darkMod}><img src = {require('../Img/changeMode.png')} /></button>
      </label>
    </div>
  );
}
