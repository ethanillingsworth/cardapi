export function Row({ children, className = "", gap = 2 }) {
	return <div className={`flex flex-row gap-${gap} ${className}`}>{children}</div>;
}

export function Col({ children, className = "", gap = 2 }) {
	return <div className={`flex flex-col gap-${gap} ${className}`}>{children}</div>;
}
