import { useState } from 'react'
import './App.css'


function Clicker() {
	const [count, setCount] = useState(0)
	
	return (
		<>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					Button has been clicked {count} times
				</button>
			</div>
		</>
	)
}

export default Clicker
