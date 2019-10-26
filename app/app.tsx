import React, { useState, useCallback } from 'react'
import * as ReactDOM from 'react-dom'
import { useObservable } from 'rxjs-hooks'
import { interval } from 'rxjs'
import { audit, map } from 'rxjs/operators'

function Application () {
  const [cnt, setCnt] = useState(0)
  const handleClick = useCallback(event => setCnt(cnt + 1))

  const cnt10 = useObservable(
    cnt$ => cnt$.pipe(map(v => v * 10)),
    [0],
    [cnt]
  )

  const cntAudit = useObservable(
    cnt$ => cnt$.pipe(audit(v => interval(2000))),
    [0],
    [cnt]
  )

  return (
    <div>
      <div>
        <button onClick={handleClick}>click</button>
      </div>
      <p>count: {cnt}</p>
      <p>count * 10: {cnt10}</p>
      <p>count audit (interval 2 seconds): {cntAudit}</p>
    </div>
  )
}

ReactDOM.render(<Application />, document.getElementById('app'))
