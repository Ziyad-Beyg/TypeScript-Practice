type HeadingProps = {
    children : string // is component me data app.js se araha he, jahan par humne is component ko invoke kiya he.
}

function Heading(props : HeadingProps) {
  return (
    <div>
        <h1>
            {props.children}
        </h1>
    </div>
  )
}

export default Heading