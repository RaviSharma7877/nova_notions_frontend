import React from 'react'

function Alert(props) {
  return (
    <div className="text-center">
  <div className="alert alert-warning alert-dismissible fade show mx-auto mb-0 bg-black text-white" role="alert">
    {props.alert}
    {/* <button type="button" className="btn-close text-white bg-light" data-bs-dismiss="alert" aria-label="Close"></button> */}
  </div>
</div>

  )
}

export default Alert
