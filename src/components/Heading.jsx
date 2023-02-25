function Heading({ title, subTitle }) {
	return (
		<div className="text-center my-12 space-y-1">
			<h1 className="text-5xl">{title}</h1>
			<p>{subTitle}</p>
		</div>
	);
}

export default Heading;
