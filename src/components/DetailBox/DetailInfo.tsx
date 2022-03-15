import React from 'react'

function DetailInfo({ label, info }:{label: string; info: string }) {
  return (
    <p>
      <strong>
        {label}
        :
        {' '}
      </strong>
      {info}
    </p>

  )
}

export default DetailInfo
