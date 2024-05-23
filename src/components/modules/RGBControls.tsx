import { SlidersHorizontal } from 'lucide-react'
import { useContext } from 'react'
import { ColorService } from 'react-color-palette'
import { ColorContext } from '../../lib/ColorContext'
import { Slider } from '../../slider'
import { formatRGB } from '../../utils'

const MAX = 255
const MIN = 0

export default function RGBControls() {
	const { color } = useContext(ColorContext)

	return (
		<div className="">
			<p className="text-slate-500 font-semibold uppercase text-sm">RGB</p>

			<div className="flex items-center gap-2 my-2">
				<div className="flex-1">
					<div className="inline-block px-4 py-2 bg-zinc-100 rounded-lg font-semibold text-zinc-800">{formatRGB(color.rgb)}</div>
				</div>
				<button className="hover:bg-zinc-100 h-10 w-10 rounded-full grid place-content-center">
					<SlidersHorizontal className="h-5 w-5" />
				</button>
			</div>

			<div className="space-y-4">
				<SliderControls type="r" title="Red" />
				<SliderControls type="g" title="Green" />
				<SliderControls type="b" title="Blue" />
			</div>
		</div>
	)
}

function SliderControls({ type, title }: { title: string; type: 'r' | 'g' | 'b' }) {
	const { color, setColor } = useContext(ColorContext)

	function handleSliderChange(key: string, value: number) {
		setColor(ColorService.convert('rgb', Object.assign(color.rgb, { [key]: value })))
	}

	function handleInputChange(key: string, value: string) {
		let parsedValue = value ? parseInt(value) : 0
		if (parsedValue > MAX) {
			parsedValue = 255
		}
		setColor(ColorService.convert('rgb', Object.assign(color.rgb, { [key]: parsedValue })))
	}

	const colorValue = color.rgb?.[type]

	return (
		<div className="space-y-3">
			<div className="flex justify-between items-center">
				<p className="font-medium">{title}</p>
				<input
					type="number"
					min={MIN}
					max={MAX}
					value={parseInt(`${colorValue}`).toFixed(0)}
					onChange={(e) => handleInputChange(type, e.target.value)}
					className="w-12 ring-1 ring-zinc-300 rounded-md px-2 py-1"
				/>
			</div>

			<Slider value={[colorValue]} min={MIN} max={MAX} step={1} onValueChange={(values: number[]) => handleSliderChange(type, values[0])} />
		</div>
	)
}
