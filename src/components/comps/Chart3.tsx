'use client';

import { TrendingUp } from 'lucide-react';
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
const chartData = [
	{ month: 'January', desktop: 186, mobile: 80, other: 100, more: 50 },
	{ month: 'February', desktop: 305, mobile: 200, other: 150, more: 70 },
	{ month: 'March', desktop: 237, mobile: 120, other: 90, more: 40 },
	{ month: 'April', desktop: 73, mobile: 190, other: 80, more: 30 },
	{ month: 'May', desktop: 209, mobile: 130, other: 110, more: 60 },
	{ month: 'June', desktop: 214, mobile: 140, other: 120, more: 80 },
];

const chartConfig = {
	desktop: {
		label: 'Desktop',
		color: 'var(--chart-1)',
	},
	mobile: {
		label: 'Mobile',
		color: 'var(--chart-2)',
	},
	other: {
		label: 'Other',
		color: 'var(--chart-3)',
	},
	more: {
		label: 'More Other',
		color: 'var(--chart-4)',
	},
} satisfies ChartConfig;

const Chart3 = () => {
	return (
		<Card className='w-80'>
			<CardHeader>
				<CardTitle>Line Chart - Multiple</CardTitle>
				<CardDescription>January - June 2024</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<LineChart
						accessibilityLayer
						data={chartData}
						margin={{
							left: 12,
							right: 12,
						}}>
						<CartesianGrid vertical={false} />
						<XAxis dataKey='month' tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 3)} />
						<ChartTooltip cursor={false} content={<ChartTooltipContent />} />
						<Line dataKey='desktop' type='monotone' stroke='var(--color-desktop)' strokeWidth={2} dot={false} />
						<Line dataKey='mobile' type='monotone' stroke='var(--color-mobile)' strokeWidth={2} dot={false} />
						<Line dataKey='other' type='monotone' stroke='var(--color-other)' strokeWidth={2} dot={false} />
						<Line dataKey='more' type='monotone' stroke='var(--color-more)' strokeWidth={2} dot={false} />
					</LineChart>
				</ChartContainer>
			</CardContent>
			<CardFooter>
				<div className='flex w-full items-start gap-2 text-sm'>
					<div className='grid gap-2'>
						<div className='flex items-center gap-2 leading-none font-medium'>
							Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
						</div>
						<div className='text-muted-foreground flex items-center gap-2 leading-none'>Showing total visitors for the last 6 months</div>
					</div>
				</div>
			</CardFooter>
		</Card>
	);
};

export default Chart3;
