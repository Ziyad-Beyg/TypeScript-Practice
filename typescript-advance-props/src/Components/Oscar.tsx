type OscarProps = {
    children : React.ReactNode // iska matlab he k props k andar jo children milega wo react ka component hoga
}

function Oscar(props : OscarProps) {
  return (
    <div>
        {props.children}
    </div>
  )
}

export default Oscar