type RequestStatusProps = {
    message : 'loading' | 'success' | 'error' // ye union types likhi he, matlab k message k prop me in 3 k illawa koi aur value nae aasakti he.
}

function RequestStatus(props : RequestStatusProps) {
    let message
    if(props.message === 'loading'){
        message = "Your request is being processed!"
    }
    else if(props.message === 'success'){
        message = "Your request is successfully processed!"
    }
    else if(props.message === 'error'){
        message = "An Error occured!"
    }
  return (
    <div>
        <h2>
            {message}
        </h2>
    </div>
  )
}

export default RequestStatus