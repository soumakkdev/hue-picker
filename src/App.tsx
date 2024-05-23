import { useContext } from 'react'
import { CirclePicker } from 'react-color'
import { ColorPicker, ColorService } from 'react-color-palette'
import 'react-color-palette/css'
import ColorInfo from './ColorInfo'
import { ColorContext } from './lib/ColorContext'

function App() {
	const { color, setColor } = useContext(ColorContext)
	return (
		<div className="max-w-5xl mx-auto p-5">
			<h1 className="text-center text-4xl mb-8 font-medium">Hue Picker</h1>
			<div className="grid grid-cols-2 gap-4">
				<div className="">
					<ColorPicker height={400} color={color} onChange={setColor} hideInput />
					<CirclePicker width="100%" color={color.hex} onChangeComplete={(color) => setColor(ColorService.convert('hex', color.hex))} />
				</div>
				<ColorInfo />
			</div>
		</div>
	)
}

export default App
