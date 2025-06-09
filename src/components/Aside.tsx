
import AsideHeader from './AsideHeader';
import AsideColorList from './AsideColorList';
import { useEffect, useState } from 'react';
import { useThemeStore } from '@/store/themeStore';

interface Props {
	setDynamicCSS: (value: string) => void;
}

const Aside = ({ setDynamicCSS }: Props) => {
	const [theme, setTheme] = useState<'root' | 'dark'>('root');
	const [hexActive, setHexActive] = useState<boolean>(false);

	const { themeSelected } = useThemeStore();

	const generateCSS = () => {
		const cssRoot = `:root{\n${themeSelected?.root.map((field) => `  --${field.name}: ${field.value};`).join('\n')}\n}\n`;
		const cssDark = `.dark{\n${themeSelected?.dark.map((field) => `  --${field.name}: ${field.value};`).join('\n')}\n}`;
		setDynamicCSS(cssRoot + cssDark);
	};

	useEffect(() => {
		if (!theme) return;
		generateCSS();
	}, [theme, themeSelected]);

	const changeDarkMode = () => {
		if (theme === 'dark') document.documentElement.classList.remove('dark');
		else document.documentElement.classList.add('dark');
		setTheme(theme === 'root' ? 'dark' : 'root');
	};

	

	return (
		<div className='border-r w-max bg-card flex flex-col text-card-foreground'>
			<AsideHeader changeDarkMode={changeDarkMode} hexActive={hexActive} setHexActive={setHexActive} theme={theme} />

			<AsideColorList theme={theme} hexActive={hexActive} />
		</div>
	);
};

export default Aside;
