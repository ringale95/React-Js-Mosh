//PascalCasing
function Message(){
    //JSX: shortform of javascript XML- this is compiled to javascript

    //JSX allows to create dynamic content
    const name = ' '
     if (name)
    return <h1> Hello {name}</h1>;
    return   <h1>Hello World</h1>;

      

}

//The export default statement is used to make the Message function available for use in other parts of your application.
//It allows you to import this function in other JavaScript files and components to use it.
export default Message;