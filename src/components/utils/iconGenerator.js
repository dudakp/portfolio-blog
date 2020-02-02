import React from 'react'
import '../../styles/iconGenerator.scss'

export default props => (
  <div className="article-icon">
    {props.hashMatrix.map(row => (
      <div className="columns icon-row">
        {row.map(() => (
          <div className="column icon-col">
            <div className="column icon-pixel"></div>
          </div>
        ))}
      </div>
    ))}
  </div>
)
