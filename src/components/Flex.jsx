export function Row({ children }) {
	return <div className="flex flex-row gap-2">{children}</div>;
}

export function Col({ children }) {
	return <div className="flex flex-col gap-2">{children}</div>;
}
