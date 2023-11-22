import React from "react";

class Rectangle extends React.Component {

  constructor(props) {
    super(props)
    this.rectangles = [{ width: 3, length: 4 }, { width: 6, length: 8 }, { width: 5, length: 7 }]
  }
  render = () => {
    return (
      <>
        <table border="1">
          <tr><th>{"width"}</th><th>{"length"}</th><th>{"area"}</th></tr>
          {
            this.rectangles.map((rectangle) => (
              <tr><td>{rectangle.width}</td><td>{rectangle.length}</td><td>{rectangle.width * rectangle.length}</td></tr>
            ))
          }
        </table>
        
      </>
    )
  }
}
export default Rectangle
