type GreetProps = {
    name : string,     // name ki type string he.
    messages : number, // messages ki type number he.
    online : boolean   // online ki type boolean he.
}

function Greet(props: GreetProps) {  // Yahan pe humne props ki type 'GreetProps' ka object rakhi he. 
  return (
    <div>
        {
            props.online ? 
            <h1>
                Assalam O Alaikum {props.name}, you have {props.messages} unread messages.
            </h1> :
            <h1>
                Welcome Guest
            </h1> 
        }
    </div>
  )
}

export default Greet