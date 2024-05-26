import { Check, Copy } from 'lucide-react'
import useCopyToClipboard from '../utils/useCopyToClipboard'

export default function ColorCodeDisplay({ text }: { text: string }) {
	const { copyToClipboard, isCopied } = useCopyToClipboard()
	return (
		<div className="flex items-center gap-2">
			<div className="inline-block px-4 py-2 bg-zinc-100 rounded-lg font-semibold text-zinc-800">{text}</div>

			{isCopied ? (
				<div className="h-8 w-8 grid place-content-center">
					<Check className="h-5 w-5 text-green-500" />
				</div>
			) : (
				<button
					className="hover:bg-zinc-100 h-10 w-10 rounded-full grid place-content-center"
					onClick={() => {
						copyToClipboard(text)
					}}
				>
					<Copy className="h-5 w-5 text-slate-800" />
				</button>
			)}
		</div>
	)
}
