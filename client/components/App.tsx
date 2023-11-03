import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="nokia-body">
      <h1>Nokia App</h1>

      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App
