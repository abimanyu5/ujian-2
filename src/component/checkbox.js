import React, { Component } from "react";
import data from "./data.json";

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        {data
          .filter((data) => data.type === "checkbox")
          .map((data, index) => (
            <div class="w-50 pt-3">
              <label for="example11">
                {index + 2}.{data.soal}
              </label>
            </div>
          ))}

        {data
          .filter((data) => data.type === "checkbox")
          .map((data) =>
            data.option.map((da) => (
              <div class="w-50 pt-3">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="vehicle1"> {da}</label>
                
              </div>
            ))
          )}
      </div>
    );
  }
}
export default Checkbox;
