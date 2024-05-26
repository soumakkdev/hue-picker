import { useCallback, useEffect, useState } from 'react'

const useCopyToClipboard = () => {
	const [isCopied, setIsCopied] = useState(false)

	useEffect(() => {
		let timeout: number

		if (isCopied) {
			timeout = setTimeout(() => {
				setIsCopied(false)
			}, 2000)
		}

		return () => {
			if (timeout) {
				clearTimeout(timeout)
			}
		}
	})

	const copyToClipboard = useCallback((text: string) => {
		if (navigator.clipboard) {
			navigator.clipboard
				.writeText(text)
				.then(() => {
					setIsCopied(true)
				})
				.catch((err) => {
					setIsCopied(false)
				})
		} else {
			// Fallback for older browsers
			try {
				const textArea = document.createElement('textarea')
				textArea.value = text
				document.body.appendChild(textArea)
				textArea.select()
				document.execCommand('copy')
				document.body.removeChild(textArea)
				setIsCopied(true)
			} catch (err) {
				setIsCopied(false)
			}
		}
	}, [])

	return { copyToClipboard, isCopied }
}

export default useCopyToClipboard
