import { useThemeStore } from '@/store/themeStore';
import AsideColorItem from './AsideColorItem';

interface Props {
	theme: 'root' | 'dark';
   hexActive: boolean
}

const AsideColorList = ({theme, hexActive }: Props) => {
	const { themeSelected } = useThemeStore();
	return (
		<div className='flex flex-col flex-1 overflow-auto scroll'>
			{themeSelected &&
				themeSelected[theme as keyof typeof themeSelected].length > 0 &&
				themeSelected[theme as keyof typeof themeSelected].map((field) => <AsideColorItem key={field.name} field={field} hexActive={hexActive} theme={theme} />)}
		</div>
	);
};

export default AsideColorList;
