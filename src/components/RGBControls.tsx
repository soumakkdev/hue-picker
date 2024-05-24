import { SlidersHorizontal } from 'lucide-react'
import { useContext } from 'react'
import { ColorContext } from '../lib/ColorContext'
import { ColorUtils } from '../lib/ColorUtils'
import { formatRGB } from '../utils/helpers'
import Controls from './Controls'
import { RGB_MAX } from '../utils/const'

export default function RGBControls() {
	const { color, setColor } = useContext(ColorContext)

	function handleInputChange(key: string, value: string) {
		let parsedValue = value ? parseInt(value) : 0
		if (parsedValue > RGB_MAX) {
			parsedValue = 255
		}
		setColor(ColorUtils.convert('rgb', Object.assign(color.rgb, { [key]: parsedValue })))
	}

	function handleSliderChange(key: string, value: number) {
		setColor(ColorUtils.convert('rgb', Object.assign(color.rgb, { [key]: value })))
	}

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
				<Controls
					max={RGB_MAX}
					step={1}
					value={parseInt(`${color.rgb.r}`).toFixed(0)}
					title="Red"
					handleInputChange={(value) => handleInputChange('r', value)}
					handleSliderChange={(value) => handleSliderChange('r', value)}
				/>
				<Controls
					max={RGB_MAX}
					step={1}
					value={parseInt(`${color.rgb.g}`).toFixed(0)}
					title="Green"
					handleInputChange={(value) => handleInputChange('g', value)}
					handleSliderChange={(value) => handleSliderChange('g', value)}
				/>
				<Controls
					max={RGB_MAX}
					step={1}
					value={parseInt(`${color.rgb.b}`).toFixed(0)}
					title="Blue"
					handleInputChange={(value) => handleInputChange('b', value)}
					handleSliderChange={(value) => handleSliderChange('b', value)}
				/>
			</div>
		</div>
	)
}
