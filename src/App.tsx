import { ColorPicker, useColor } from 'react-color-palette'
import 'react-color-palette/css'
import ColorInfo from './ColorInfo'

function App() {
	const [color, setColor] = useColor('#74a1d4')

	return (
		<div className="max-w-6xl mx-auto p-5">
			<div className="grid grid-cols-2 gap-4">
				<ColorPicker color={color} onChange={setColor} hideInput />
				<ColorInfo color={color} />
			</div>
		</div>
	)
}

export default App
