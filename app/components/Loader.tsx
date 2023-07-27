type LoaderType = {
	containerHeightStyle?: string,
	width?: string,
	height?: string
};

export default function Loader({ containerHeightStyle = 'vh-100', width = '6rem', height = '6rem' }: LoaderType) {
	return (
		<div className={`d-flex justify-content-center align-items-center ${containerHeightStyle}`}>
			<div className="spinner-border text-primary center" style={{ width, height }} />
		</div>
	)
}