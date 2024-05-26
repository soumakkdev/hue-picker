import { useContext } from 'react'
import { ColorContext } from '../lib/ColorContext'
import { rgbToCmyk, rgbToHsl } from '../utils/helpers'
import GLSLControls from './GLSLControls'
import RGBControls from './RGBControls'
import HSVControls from './HSVControls'
import ColorCodeDisplay from '../lib/ColorCodeDisplay'

export default function ColorInfo() {
	const { color } = useContext(ColorContext)

	const cmyk = rgbToCmyk(color)
	const hsl = rgbToHsl(color)

	return (
		<div className="px-4 space-y-5">
			<div className="">
				<p className="text-slate-500 font-semibold uppercase text-sm mb-2">Hex</p>

				<div className="text-slate-800 font-semibold">
					<input value={color.hex} className="ring-1 ring-zinc-300 px-3 py-1.5 rounded-lg" />
				</div>
			</div>

			<RGBControls />
			<GLSLControls />
			<HSVControls />

			{/* <div className="flex items-center gap-4">
				<p className="text-slate-500 font-semibold uppercase text-sm">cmyk</p>
				<p className="text-slate-800 font-semibold">{cmyk.c}</p>
				<p className="text-slate-800 font-semibold">{cmyk.m}</p>
				<p className="text-slate-800 font-semibold">{cmyk.y}</p>
				<p className="text-slate-800 font-semibold">{cmyk.k}</p>
			</div> */}

			<div className="">
				<p className="text-slate-500 font-semibold uppercase text-sm mb-2">hsl</p>
				<ColorCodeDisplay text={`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%);`} />
			</div>
		</div>
	)
}
