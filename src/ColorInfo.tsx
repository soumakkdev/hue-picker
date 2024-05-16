import { IColor } from 'react-color-palette'
import { rgbToCmyk, rgbToGlsl, rgbToHsl } from './utils'

export default function ColorInfo({ color }: { color: IColor }) {
	const glsl = rgbToGlsl(color)
	const cmyk = rgbToCmyk(color)
	const hsl = rgbToHsl(color)

	return (
		<div className="px-4">
			<div className="flex items-center gap-4">
				<p className="text-slate-500 font-semibold uppercase text-sm">Hex</p>
				<p className="text-slate-800 font-semibold">{color.hex}</p>
			</div>
			<div className="flex items-center gap-4">
				<p className="text-slate-500 font-semibold uppercase text-sm">RGB</p>
				<p className="text-slate-800 font-semibold">{color.rgb.r.toFixed(0)}</p>
				<p className="text-slate-800 font-semibold">{color.rgb.g.toFixed(0)}</p>
				<p className="text-slate-800 font-semibold">{color.rgb.b.toFixed(0)}</p>
				<p className="text-slate-800 font-semibold">{color.rgb.a.toFixed(2)}</p>
			</div>
			<div className="flex items-center gap-4">
				<p className="text-slate-500 font-semibold uppercase text-sm">HSV</p>
				<p className="text-slate-800 font-semibold">{color.hsv.h.toFixed(0)}°</p>
				<p className="text-slate-800 font-semibold">{color.hsv.s.toFixed(0)}%</p>
				<p className="text-slate-800 font-semibold">{color.hsv.v.toFixed(0)}%</p>
				<p className="text-slate-800 font-semibold">{color.hsv.a.toFixed(2)}</p>
			</div>
			<div className="flex items-center gap-4">
				<p className="text-slate-500 font-semibold uppercase text-sm">glsl</p>
				<p className="text-slate-800 font-semibold">{glsl.x}</p>
				<p className="text-slate-800 font-semibold">{glsl.y}</p>
				<p className="text-slate-800 font-semibold">{glsl.z}</p>
				<p className="text-slate-800 font-semibold">{glsl.a.toFixed(2)}</p>
			</div>
			<div className="flex items-center gap-4">
				<p className="text-slate-500 font-semibold uppercase text-sm">cmyk</p>
				<p className="text-slate-800 font-semibold">{cmyk.c}</p>
				<p className="text-slate-800 font-semibold">{cmyk.m}</p>
				<p className="text-slate-800 font-semibold">{cmyk.y}</p>
				<p className="text-slate-800 font-semibold">{cmyk.k}</p>
			</div>
			<div className="flex items-center gap-4">
				<p className="text-slate-500 font-semibold uppercase text-sm">hsl</p>
				<p className="text-slate-800 font-semibold">{hsl.h}</p>
				<p className="text-slate-800 font-semibold">{hsl.s}</p>
				<p className="text-slate-800 font-semibold">{hsl.l}</p>
			</div>
		</div>
	)
}
