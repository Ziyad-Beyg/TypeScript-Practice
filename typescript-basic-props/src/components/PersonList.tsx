type PersonListProps={
 names : {
    first: string,
    last: string,
 }[] // '{}[]' is type ko 'Array Of Objects' kehtay hen
}

function PersonList(props: PersonListProps) {
  return (
    <div>
        {
            props.names.map(name => (
                <h1>
                    {name.first} {name.last}
                </h1>
            ))
        }
    </div>
  )
}

export default PersonList