import { ReactNode, createContext } from 'react'
import { IColor, useColor } from 'react-color-palette'

interface IColorContext {
	color: IColor
	setColor: (color: IColor) => void
}

export const ColorContext = createContext<IColorContext>({} as IColorContext)

export const ColorProvider = ({ children }: { children: ReactNode }) => {
	const [color, setColor] = useColor('#2196f3')
	return <ColorContext.Provider value={{ color, setColor }}>{children}</ColorContext.Provider>
}
