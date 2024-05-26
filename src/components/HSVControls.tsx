import { SlidersHorizontal } from 'lucide-react'
import { useContext } from 'react'
import ColorCodeDisplay from '../lib/ColorCodeDisplay'
import { ColorContext } from '../lib/ColorContext'
import { ColorUtils } from '../lib/ColorUtils'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { HUE_MAX, PCT_MAX } from '../utils/const'
import { formatHSV } from '../utils/helpers'
import Controls from './Controls'

export default function HSVControls() {
	const { color, setColor } = useContext(ColorContext)

	function handleInputChange(key: string, value: string) {
		let parsedValue
		if (key === 'a') {
			parsedValue = value ? parseFloat(value) : 0
		} else if (key === 'h') {
			parsedValue = value ? parseInt(value) : 0
			if (parsedValue > HUE_MAX) {
				parsedValue = HUE_MAX
			}
		} else {
			parsedValue = value ? parseInt(value) : 0
			if (parsedValue > PCT_MAX) {
				parsedValue = PCT_MAX
			}
		}

		setColor(ColorUtils.convert('hsv', Object.assign(color.hsv, { [key]: parsedValue })))
	}

	function handleSliderChange(key: string, value: number) {
		setColor(ColorUtils.convert('hsv', Object.assign(color.hsv, { [key]: value })))
	}

	return (
		<div className="">
			<Accordion type="single" collapsible>
				<AccordionItem value="hsv">
					<AccordionTrigger className="py-1">
						<p className="text-slate-500 font-semibold uppercase text-sm">HSV</p>

						<button className="hover:bg-zinc-100 h-8 w-8 rounded-full grid place-content-center">
							<SlidersHorizontal className="h-4 w-4" />
						</button>
					</AccordionTrigger>

					<AccordionContent className="space-y-4 p-2">
						<Controls
							max={HUE_MAX}
							step={1}
							value={Math.round(color.hsv.h).toFixed(0)}
							title="Hue"
							handleInputChange={(value) => handleInputChange('h', value)}
							handleSliderChange={(value) => handleSliderChange('h', value)}
						/>
						<Controls
							max={PCT_MAX}
							step={1}
							value={Math.round(color.hsv.s).toFixed(0)}
							title="Saturation"
							handleInputChange={(value) => handleInputChange('s', value)}
							handleSliderChange={(value) => handleSliderChange('s', value)}
						/>
						<Controls
							max={PCT_MAX}
							step={1}
							value={Math.round(color.hsv.v).toFixed(0)}
							title="Value"
							handleInputChange={(value) => handleInputChange('v', value)}
							handleSliderChange={(value) => handleSliderChange('v', value)}
						/>
						<Controls
							max={1}
							step={0.001}
							value={`${color.hsv.a === 0 || color.hsv.a === 1 ? color.hsv.a : color.hsv.a.toFixed(2)}`}
							title="Alpha"
							handleInputChange={(value) => handleInputChange('a', value)}
							handleSliderChange={(value) => handleSliderChange('a', value)}
						/>
					</AccordionContent>
				</AccordionItem>
			</Accordion>

			<ColorCodeDisplay text={formatHSV(color.hsv)} />
		</div>
	)
}
