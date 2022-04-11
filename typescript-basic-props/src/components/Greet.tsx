type GreetProps = {
    name : string,     // name ki type string he.
    messages? : number, // messages ki type number he, ? ka matlabb he k ye props optional he agar user ne koi value dedi tu wo assign ho jayegi warna 0 assign hojayega
    online : boolean   // online ki type boolean he.
}

function Greet(props: GreetProps) {  // Yahan pe humne props ki type 'GreetProps' ka object rakhi he. 

    let { messages = 0 } = props

  return (
    <div>
        {
            props.online ? 
            <h1>
                Assalam O Alaikum {props.name}, you have {messages} unread messages.
            </h1> :
            <h1>
                Welcome Guest
            </h1> 
        }
    </div>
  )
}

export default Greet