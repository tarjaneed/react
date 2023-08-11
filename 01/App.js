/**
 * <h1> Hello World from React!
 *

const heading = React.createElement(
    'h1', 
    {
        id: 'heading',
        xyz: 'abc'
    }, 
    'Hello World from React!'
);
*/

/**
 * <div id="parent">
 *  <div id="child">
 *      <h1>I'm an h1 tag</h1>
 *      <h2>I'm an h2 tag</h2>
 *  </div>
 * <div id="child2">
 *      <h1>I'm an h1 tag</h1>
 *      <h2>I'm an h2 tag</h2>
 *  </div>
 * </div>
 * 
 */

/**
 * 1st param - tag name
 * 2nd param - Object: attributes or props
 * 3rd param - Children: Single: simple createElement and multiple: [createElement, createElement]
 */
const parent = React.createElement(
    "div", 
    { id: "parent" }, 
    [
        React.createElement(
            "div", 
            { id: "child" }, 
            [
                React.createElement("h1", {}, "I'm an h1 tag"),
                React.createElement("h2", {}, "I'm an h2 tag")
            ]
        ),
        React.createElement(
            "div", 
            { id: "child2" }, 
            [
                React.createElement("h1", {}, "I'm an h1 tag"),
                React.createElement("h2", {id: "heading"}, "I'm an h2 tag")
            ]
        )
    ]
    
)

console.log(parent); // JS Object

/**
 * Assigns a root for react
 */
const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * ReactElement(Object)  =>  HTML(Browser Understands)
 * Creates HTML tags from JS Object and renders/keeps it in the root dom 
 * i.e. in <div id="root"></div> if there are already some tags in the root dom it REPLACES them.
 * React only works inside the root div or whatever you make as a root that's why it is a library.
 *  */ 
root.render(parent);