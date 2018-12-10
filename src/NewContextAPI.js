import React from "react";

/*
The new context API consists of three main parts:
*/

/*
React.createContext which is passed the initial value.
This returns an object with a Provider and a Consumer.
*/
export const ThemeContext = React.createContext();
// the parameter will represent the default value passed to the consumer if no
// value prop is provided

const MyComponent = props => <div>{props.children}</div>;

/*
The Provider component is used higher in the tree
and accepts a prop called value (which can be anything).
*/
export class ThemeProvider extends React.Component {
  state = { theme: "dark" };
  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

/*
The Consumer component is used anywhere below the provider in the
tree and accepts a prop called “children” which must be a
function that accepts the value and must
return a react element (JSX).
*/
export default class NewContextAPI extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <MyComponent>
          <ThemeContext.Consumer>
            {val => <div>{val.theme}</div>}
          </ThemeContext.Consumer>
        </MyComponent>
      </ThemeProvider>
    );
  }
}
