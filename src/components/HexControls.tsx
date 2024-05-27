import { useContext } from 'react'
import { ColorContext } from '../lib/ColorContext'

export default function HexControls() {
	const { color } = useContext(ColorContext)

	return (
		<div className="">
			<p className="text-slate-500 font-semibold uppercase text-sm mb-2">Hex</p>

			<div className="text-slate-800 font-semibold">
				<input value={color.hex} className="ring-1 ring-zinc-300 px-3 py-1.5 rounded-lg" />
			</div>
		</div>
	)
}
