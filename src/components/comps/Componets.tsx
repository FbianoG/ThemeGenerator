'use client';

import MutedText from '@/components/shared/MutedText';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Chart } from './Chart';
import Chart2 from './Chart2';
import Chart3 from './Chart3';
import { Drawer } from './Drawer';
import { Dropdown } from './Dropdown';

const Components = () => {
	return (
		// <div className='flex w-full flex-wrap flex-col h-400 gap-2 justify-items-normal px-4 py-10 md:px-8 lg:px-12 xl:px-18 bg-background'>
		<div className='bg-background flex h-300 w-max mx-auto flex-col flex-wrap items-center gap-2 p-8 md:h-auto lg:h-600 xl:h-500 2xl:h-300'>
			{/* Text + Background */}
			<Card className='w-80'>
				<CardHeader>
					<CardTitle>Text + Background</CardTitle>
					<CardDescription>Lorem ipsum dolor sit amet.</CardDescription>
				</CardHeader>
				<CardContent className='space-y-1'>
					<p className='text-primary w-max rounded px-2 font-semibold'>Primary</p>
					<p className='text-foreground w-max rounded px-2'>Foreground</p>
					<p className='bg-card text-card-foreground w-max rounded px-2'>Card-Foreground</p>
					<p className='bg-muted text-muted-foreground w-max rounded px-2'>Muted-Foreground</p>
					<p className='bg-accent text-accent-foreground w-max rounded px-2'>Accent-Foreground</p>
					<p className='bg-popover text-popover-foreground w-max rounded px-2'>Popover-Foreground</p>
				</CardContent>
			</Card>

			{/* Buttons + Badge */}
			<Card className='relative w-80'>
				<Button variant='ghost' className='absolute top-2 right-2 p-0'>
					<X size={10} />
				</Button>
				<CardHeader>
					<CardTitle>Badge + Buttons</CardTitle>
					<CardDescription>Lorem ipsum dolor sit amet.</CardDescription>
				</CardHeader>
				<CardContent className='flex gap-2'>
					<Badge variant='default'>Default</Badge>
					<Badge variant='secondary'>Badge</Badge>
					<Badge variant='outline'>Badge</Badge>
					<Badge variant='destructive'>Badge</Badge>
				</CardContent>
				<CardContent className='grid grid-cols-2 gap-1'>
					<Button>Default</Button>
					<Button disabled>Default</Button>
					<Button variant='secondary'>Secondary</Button>
					<Button disabled variant='secondary'>
						Secondary
					</Button>
					<Button variant='outline'>Outline</Button>
					<Button disabled variant='outline'>
						Outline
					</Button>
					<Button variant='ghost'>Ghost</Button>
					<Button disabled variant='ghost'>
						Ghost
					</Button>
					<Button variant='destructive'>Destructive</Button>
					<Button disabled variant='destructive'>
						Destructive
					</Button>
				</CardContent>
			</Card>

			{/* Card with Image */}
			<Card className='group w-80'>
				<CardHeader>
					<div className='relative h-35 w-full overflow-hidden rounded duration-300 group-hover:brightness-75'>
						<img src='https://lojastartover.com.br/wp-content/uploads/2021/03/DD95A467-ED22-43E2-BA02-8221D1374A5D.jpeg' alt='' className='h-full w-full object-cover' />
					</div>
					<div className='flex justify-between'>
						<span className='text-sm'>Nike</span>
						<Badge variant='secondary'>SALE</Badge>
					</div>
				</CardHeader>
				<CardFooter className='flex items-center gap-2'>
					<h5 className='text-primary text-lg font-semibold'>
						R$389,<small className='text-xs'>90</small>
					</h5>
					<span className='text-muted-foreground text-xs line-through'>R$499,90</span>
				</CardFooter>
			</Card>

			{/* Login */}
			<Card className='w-80'>
				<CardHeader>
					<CardTitle>Login</CardTitle>
					<CardDescription>Lorem ipsum dolor sit amet.</CardDescription>
				</CardHeader>
				<CardContent className='space-y-2'>
					<div className='space-y-2'>
						<Label htmlFor='email'>Your email address</Label>
						<Input type='email' placeholder='Email' />
					</div>
					<div className='space-y-2'>
						<Label htmlFor='password'>Senha</Label>
						<Input type='password' placeholder='Password' />
					</div>
				</CardContent>
				<CardFooter className='flex gap-2'>
					<Button variant='ghost' className='w-1/2'>
						Cancel
					</Button>
					<Button className='w-1/2'>Access</Button>
				</CardFooter>
			</Card>

			{/* Switch + Hover */}
			<Card className='w-80'>
				<CardHeader>
					<CardTitle>Switch + Hover</CardTitle>
					<CardDescription>Lorem ipsum dolor sit amet.</CardDescription>
				</CardHeader>
				<CardContent className='space-y-1'>
					<div className='hover:bg-muted flex items-center justify-between gap-1 rounded p-2 duration-300'>
						<div className='flex flex-col'>
							<h5 className=''>Works</h5>
							<p className='text-muted-foreground text-xs leading-3.5'>Lorem ipsum dolor sit amet consectetur.</p>
						</div>
						<Switch />
					</div>
					<div className='bg-muted flex items-center justify-between gap-1 rounded p-2 duration-300 hover:bg-transparent'>
						<div className='flex flex-col'>
							<h5 className=''>Sports</h5>
							<p className='text-muted-foreground text-xs leading-3.5'>Lorem ipsum dolor sit amet consectetur.</p>
						</div>
						<Switch checked />
					</div>
					<div className='hover:bg-muted flex items-center justify-between gap-1 rounded p-2 duration-300'>
						<div className='flex flex-col'>
							<h5 className=''>Flamengo</h5>
							<p className='text-muted-foreground text-xs leading-3.5'>Lorem ipsum dolor sit amet consectetur.</p>
						</div>
						<Switch checked disabled />
					</div>
				</CardContent>
			</Card>

			{/* Checkbox + Ring + Slider */}
			<Card className='w-80'>
				<CardHeader>
					<CardTitle>Checkbox + Ring + Slider</CardTitle>
					<CardDescription>Lorem ipsum dolor sit amet.</CardDescription>
				</CardHeader>
				<CardContent className='space-y-1'>
					<div className='flex items-center space-x-2'>
						<Checkbox id='1' defaultChecked={true} />
						<label htmlFor='1' className='text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
							Natação
						</label>
					</div>
					<div className='flex items-center space-x-2'>
						<Checkbox id='2' />
						<label htmlFor='2' className='text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
							Futebol
						</label>
					</div>
					<div className='mb-4 flex items-center space-x-2'>
						<Checkbox id='3' disabled />
						<label htmlFor='3' className='text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
							Basquete
						</label>
					</div>
				</CardContent>
				<CardContent className='space-y-6'>
					<Textarea placeholder='Escreva aqui' className='ring-ring/50 border-ring ring-[3px]' />
					<Slider defaultValue={[33]} max={100} step={1} className='mb-3 w-full' />
				</CardContent>
			</Card>

			{/* DropDown + Drawer */}
			<Card className='w-80'>
				<CardHeader>
					<CardTitle>Fabiano Gonçalves</CardTitle>
					<CardDescription>Software Developer</CardDescription>
				</CardHeader>
				<CardContent className='space-y-2'>
					<h5>Friends</h5>
					<div className='flex w-full items-center gap-2'>
						<div className='h-12 w-12 overflow-hidden rounded-full shadow'>
							<img src='https://placehold.co/50' alt='' className='h-full w-full' />
						</div>

						<div>
							<h6 className='text-sm'>Giovanna Salles</h6>
							<MutedText className='text-xs'>Namorada</MutedText>
						</div>

						<Dropdown />
					</div>
					<div className='flex w-full items-center gap-2'>
						<div className='h-12 w-12 overflow-hidden rounded-full shadow'>
							<img src='https://placehold.co/50' alt='' className='h-full w-full' />
						</div>

						<div>
							<h6 className='text-sm'>Giovanna Salles</h6>
							<MutedText className='text-xs'>Namorada</MutedText>
						</div>

						<Dropdown />
					</div>
				</CardContent>
				<CardFooter>
					<Drawer />
				</CardFooter>
			</Card>

			<Calendar mode='single' className='bg-popover w-80 rounded-md border' />

			<Chart />
			<Chart2 />
			<Chart3 />
		</div>
	);
};

export default Components;
