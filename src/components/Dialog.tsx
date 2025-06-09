import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

import { CheckCheck, Code, Copy } from 'lucide-react';
import { useState } from 'react';

interface Props {
	dynamicCSS?: string;
}

export function DialogDemo({ dynamicCSS }: Props) {
	const [copyStatus, setCopyStatus] = useState<boolean>(false);

	const copy = () => {
		if (!dynamicCSS || copyStatus) return;
		navigator.clipboard.writeText(dynamicCSS);
		setCopyStatus(true);
		setTimeout(() => {
			setCopyStatus(false);
		}, 3000);
	};

	return (
		<Dialog>
			<DialogTrigger asChild className=''>
				<Button variant='outline' size='sm' className='ml-auto'>
					<Code className='mr-1' />
					Exportar
				</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[725px] max-h-200 flex flex-col bg-card '>
				<DialogHeader>
					<DialogTitle>CSS Gerado</DialogTitle>
					<DialogDescription>Copie e cole o CSS gerado no seu projeto.</DialogDescription>
				</DialogHeader>
				<div className=' relative'>
					<textarea className='w-full h-150 outline-none p-4 border rounded py-2 resize-none scroll bg-background font-mono ' spellCheck={false}>
						{dynamicCSS}
					</textarea>
					<Button variant='ghost' onClick={copy} className='absolute top-1 right-6'>
						{copyStatus ? <CheckCheck className='text-green-500' /> : <Copy />}
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
