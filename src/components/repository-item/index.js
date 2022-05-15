import React from 'react'

function RepositoryItem({name, linkToRepo, fullName}) {
  return (
    <div>
        <h2>{name}</h2>
        <h2>full name</h2>
        <a href={linkToRepo} target = "_blank" rel = "noreferrer">{fullName}</a>
    </div>
  )
}

export default RepositoryItem