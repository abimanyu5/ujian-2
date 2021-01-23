import React, { Component } from "react";

import data from "./data.json";

class Essay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }
  render() {
    return (
      <div>
        <div className="form-group">
          {data
            .filter((data) => data.type === "essay")
            .map((data, index) => (
              <div class="w-50 pt-3">
                <label for="exampletextarea">
                  {index + 3}.{data.soal}
                </label>
                <textarea
                  className="form-control"
                  id="exampleTextarea"
                  rows="6"
                ></textarea>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
export default Essay;
