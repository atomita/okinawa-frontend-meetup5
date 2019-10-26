import React, { useState } from 'react';
import * as ReactDOM from 'react-dom';


function Application () {
  const [cnt, setCnt] = useState(0)

  return (
    <div>
      <div>
        <button onClick={event => setCnt(cnt + 1)}>click</button>
      </div>
      count: {cnt}
    </div>
  )
}

ReactDOM.render(<Application />, document.getElementById('app'))
