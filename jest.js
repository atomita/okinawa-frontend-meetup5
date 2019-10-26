Object.fromEntries = l => l.reduce((a, [k,v]) => ({...a, [k]: v}), {})
