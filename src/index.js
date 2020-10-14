import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20

  return (
    <div>
      <p>Hello world, it is {now.toString}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// After compiling with Babel
// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20
//   return React.createElement(
//     'div',
//     null,
//     React.createElement(
//       'p', null, 'Hello world, it is ', now.toString()
//     ),
//     React.createElement(
//       'p', null, a, ' plus ', b, ' is ', a + b
//     )
//   )
// }

// ReactDOM.render(
//   React.createElement(App, null),
//   document.getElementById('root')
// )