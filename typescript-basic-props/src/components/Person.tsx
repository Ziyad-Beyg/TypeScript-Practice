type PersonProps = {
    name : { // yahan pe name ki type 'Object' he aur object me 2 string he.
        first : string,
        last : string
    } 
}

function Person(props: PersonProps) {
  return (
    <div>
        Hello {props.name.first} {props.name.last}
    </div>
  )
}

export default Person