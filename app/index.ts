import './vendor'

declare var process: any
declare var document: any

if (process.env.HMR) {
  document.getElementById('app').innerHTML = ''
}

async function boot () {
  try {
    await import('./app')
  } catch (e) {
    errorlog(`Error: ${e.toString()}`, e)
  }
}

boot()
