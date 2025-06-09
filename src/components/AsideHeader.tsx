import Themes from '../lib/themes';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { useThemeStore } from '../store/themeStore';
import { Moon, Sun } from 'lucide-react';
import { ITheme } from '@/interfaces/theme';

interface Props {
	changeDarkMode: () => void;
	hexActive: boolean;
	setHexActive: (value: boolean) => void;
	theme: 'root' | 'dark';
}

const AsideHeader = ({ changeDarkMode, hexActive, setHexActive, theme }: Props) => {
	const { setThemeSelected } = useThemeStore();

	return (
		<div className=' p-3 flex items-center gap-2 '>
			{Themes && (
				<Select onValueChange={(e: keyof typeof Themes) => setThemeSelected(Themes[e] as ITheme)} defaultValue='vercel'>
					<SelectTrigger className='w-[180px] capitalize'>
						<SelectValue placeholder='Selecionar Tema' />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Themes</SelectLabel>
							{(Object.keys(Themes) as (keyof typeof Themes)[]).map((t) => (
								<SelectItem key={t as string} value={t as string} className='capitalize flex justify-between'>
									{t as string}
									<div className='flex gap-1 w-max '>
										{Themes[t][theme].map((field) => {
											switch (field.name) {
												case 'primary':
													return <div key={field.name} style={{ backgroundColor: field.value }} className='w-4 h-4 border rounded-full'></div>;
												case 'secondary':
													return <div key={field.name} style={{ backgroundColor: field.value }} className='w-4 h-4 border rounded-full'></div>;
												default:
													return null;
											}
										})}
									</div>
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			)}

			<Button size='icon' variant='secondary' className='font-bold text-xs' onClick={() => setHexActive(!hexActive)}>
				{hexActive ? 'hex' : 'hsl'}
			</Button>
			<Button size='icon' variant='secondary' onClick={changeDarkMode}>
				{theme === 'root' ? <Sun /> : <Moon />}
			</Button>
		</div>
	);
};

export default AsideHeader;
