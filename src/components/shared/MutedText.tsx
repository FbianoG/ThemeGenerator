interface Props extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
}

const MutedText = ({ children, className, ...rest }: Props) => {
	return (
		<p className={`text-muted-foreground text-sm ${className || ''}`} {...rest}>
			{children}
		</p>
	);
};

export default MutedText;
