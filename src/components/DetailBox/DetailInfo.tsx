import React from 'react'

function DetailInfo({ label, info }:{label: string; info: string | string[] }) {
  return (
    <p>
      <strong>
        {label}
        :
        {' '}
      </strong>
      {typeof info === 'string' ? <span>{info}</span> : null}
      {typeof info !== 'string' && info.map((data) => (
        <span key={data}>
          {data}
          {'  '}
        </span>
      ))}
    </p>

  )
}

export default DetailInfo
