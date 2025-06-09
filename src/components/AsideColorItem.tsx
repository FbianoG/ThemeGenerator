import { Copy } from 'lucide-react';
import { Label } from './ui/label';
import { useThemeStore } from '@/store/themeStore';
import { useEffect } from 'react';

interface Props {
	field: { name: string; value: string };
	hexActive: boolean;
	theme: 'root' | 'dark';
}

const AsideColorItem = ({ field, hexActive, theme }: Props) => {
	const { themeSelected, setThemeSelected } = useThemeStore();

	useEffect(()=> { 
		console.log( themeSelected )
	 }, [themeSelected])

	function hexToHSL(hex: string) {
		if (hexActive) return hex;
		if (hex.length !== 7) return hex;
		let r = 0,
			g = 0,
			b = 0;

		if (hex.length === 7) {
			r = parseInt(hex.slice(1, 3), 16);
			g = parseInt(hex.slice(3, 5), 16);
			b = parseInt(hex.slice(5, 7), 16);
		}

		r /= 255;
		g /= 255;
		b /= 255;

		const max = Math.max(r, g, b),
			min = Math.min(r, g, b);
		let h = 0,
			s = 0;
		const l = (max + min) / 2;

		if (max !== min) {
			const d = max - min;
			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
			switch (max) {
				case r:
					h = (g - b) / d + (g < b ? 6 : 0);
					break;
				case g:
					h = (b - r) / d + 2;
					break;
				case b:
					h = (r - g) / d + 4;
					break;
			}
			h *= 60;
		}
		console.log(`hsl(${Math.round(h)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`);
		return `hsl(${Math.round(h)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
	}

	return (
		<div key={field.name} className='flex flex-col  p-2 px-4 hover:bg-muted duration-200 last:border-b-0'>
			<div className='flex justify-between items-center'>
				<Label htmlFor={field.name} className='text-xs text-muted-foreground'>
					{field.name}:
				</Label>

				<Copy
					onClick={() => navigator.clipboard.writeText(field.value)}
					className='cursor-pointer text-muted-foreground border border-transparent p-1 rounded hover:bg-accent hover:border-border duration-200'
				/>
			</div>

			<div className='flex items-center gap-2'>
				<label htmlFor={field.name} className='h-5 w-5 rounded-full border relative cursor-pointer' style={{ backgroundColor: `var(--${field.name})` }}>
					<input
						id={field.name}
						type='color'
						onChange={(e) =>
							setThemeSelected({
								...themeSelected,
								[theme]: themeSelected[theme].map((c) => (c.name === field.name ? { ...c, value: hexToHSL(e.target.value) } : c)),
							})
						}
						className='opacity-0 absolute inset-0 -z-50'
					/>
				</label>
				<input
					type='text'
					value={field.value}
					spellCheck={false}
					onChange={(e) =>
						setThemeSelected({ ...themeSelected, [theme]: themeSelected[theme].map((c) => (c.name === field.name ? { ...c, value: e.target.value } : c)) })
					}
					className='flex-1 outline-none text-sm'
				/>
			</div>
		</div>
	);
};

export default AsideColorItem;
