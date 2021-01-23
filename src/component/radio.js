import React, { Component } from "react";

import data from "./data.json";

class Radio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }

  render() {
    const { data } = this.state;

    return (
      <div class="w-50">
        {data
          .filter((data) => data.type === "radio")
          .map((data, index) => (
            <div>
              <label for="example111111">
                {index + 1}.{data.soal}
              </label>
            </div>
          ))}

        {data
          .filter((data) => data.type === "radio")
          .map((dat) => (
            <div class="w-50 pt-3">
              <table>
                <tr>
                  <td>
                    <input
                      type="radio"
                      id="other"
                      name="pilihan"
                      value="other"
                    />
                    <label for="other">{dat.a}</label>
                  </td>
                  <td>
                    <input
                      type="radio"
                      id="other"
                      name="pilihan"
                      value="other"
                    />
                    <label for="other">{dat.b}</label>
                    <br></br>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="radio"
                      id="other"
                      name="pilihan"
                      value="other"
                    />
                    <label for="other">{dat.c}</label>
                  </td>
                  <td>
                    <input
                      type="radio"
                      id="other"
                      name="pilihan"
                      value="other"
                    />
                    <label for="other">{dat.d}</label>
                  </td>
                </tr>
              </table>
            </div>
          ))}
      </div>
    );
  }
}
export default Radio;
