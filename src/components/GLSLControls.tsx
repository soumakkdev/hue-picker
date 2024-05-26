import { SlidersHorizontal } from 'lucide-react'
import { useContext } from 'react'
import { ColorContext } from '../lib/ColorContext'
import { ColorUtils } from '../lib/ColorUtils'
import { GLSL_MAX } from '../utils/const'
import { formatGLSL } from '../utils/helpers'
import Controls from './Controls'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import ColorCodeDisplay from '../lib/ColorCodeDisplay'

export default function GLSLControls() {
	const { color, setColor } = useContext(ColorContext)

	function handleInputChange(key: string, value: string) {
		let parsedValue = value ? parseFloat(value) : 0
		if (parsedValue > GLSL_MAX) {
			parsedValue = 1
		}
		setColor(ColorUtils.convert('glsl', Object.assign(color.glsl, { [key]: parsedValue })))
	}

	function handleSliderChange(key: string, value: number) {
		setColor(ColorUtils.convert('glsl', Object.assign(color.glsl, { [key]: value })))
	}

	return (
		<div className="">
			<Accordion type="single" collapsible>
				<AccordionItem value="glsl">
					<AccordionTrigger className="py-1">
						<p className="text-slate-500 font-semibold uppercase text-sm">GLSL</p>

						<button className="hover:bg-zinc-100 h-8 w-8 rounded-full grid place-content-center">
							<SlidersHorizontal className="h-4 w-4" />
						</button>
					</AccordionTrigger>

					<AccordionContent className="space-y-4 p-2">
						<Controls
							max={GLSL_MAX}
							step={0.001}
							value={`${color.glsl.x}`}
							title="x"
							handleInputChange={(value) => handleInputChange('x', value)}
							handleSliderChange={(value) => handleSliderChange('x', value)}
						/>
						<Controls
							max={GLSL_MAX}
							step={0.001}
							value={`${color.glsl.y}`}
							title="y"
							handleInputChange={(value) => handleInputChange('y', value)}
							handleSliderChange={(value) => handleSliderChange('y', value)}
						/>
						<Controls
							max={GLSL_MAX}
							step={0.001}
							value={`${color.glsl.z}`}
							title="z"
							handleInputChange={(value) => handleInputChange('z', value)}
							handleSliderChange={(value) => handleSliderChange('z', value)}
						/>
						<Controls
							max={1}
							step={0.001}
							value={`${color.glsl.w === 0 || color.glsl.w === 1 ? color.glsl.w : color.glsl.w.toFixed(2)}`}
							title="w"
							handleInputChange={(value) => handleInputChange('w', value)}
							handleSliderChange={(value) => handleSliderChange('w', value)}
						/>
					</AccordionContent>
				</AccordionItem>
			</Accordion>

			<ColorCodeDisplay text={formatGLSL(color.glsl)} />
		</div>
	)
}
