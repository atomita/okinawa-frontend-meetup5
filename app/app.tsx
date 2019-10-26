import React, { useState, useCallback } from 'react';
import * as ReactDOM from 'react-dom';


function Application () {
  const [cnt, setCnt] = useState(0)
  const handleClick = useCallback(event => setCnt(cnt + 1))

  return (
    <div>
      <div>
        <button onClick={handleClick}>click</button>
      </div>
      count: {cnt}
    </div>
  )
}

ReactDOM.render(<Application />, document.getElementById('app'))
