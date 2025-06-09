'use client';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { DialogDemo } from '@/components/Dialog';
import Aside from '@/components/Aside';
import Components from '@/components/comps/Componets';

const Home = () => {
	const [dynamicCSS, setDynamicCSS] = useState<string>();

	const [styl, setStyl] = useState<'dashboard' | 'comps'>('comps');
	return (
		<div className='bg-card flex h-full overflow-hidden'>
			<style>{dynamicCSS}</style>

			<Aside setDynamicCSS={setDynamicCSS} />

			<div className='flex flex-1 flex-col'>
				<div className='border-b p-3'>
					<div className='flex items-center gap-2'>
						<Button variant='ghost' size='sm' onClick={() => setStyl('dashboard')}>
							Dashboard
						</Button>
						<Button variant='ghost' size='sm' onClick={() => setStyl('comps')}>
							Cards
						</Button>
						<DialogDemo dynamicCSS={dynamicCSS} />
					</div>
				</div>

				<div className='overflow-auto bg-background'>
					{styl === 'dashboard' && <div />}
					{styl === 'comps' && <Components />}
				</div>
			</div>
		</div>
	);
};

export default Home;
