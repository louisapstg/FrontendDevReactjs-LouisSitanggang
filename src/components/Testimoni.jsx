/* eslint-disable react/prop-types */
const Testimoni = ({ data }) => {
	return (
		<figure className="flex flex-col items-center justify-center p-1 text-center shadow-inner border rounded-lg">
			<blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
				<h3 className="text-base font-semibold text-gray-900">{data.review}</h3>
				<p className="text-xs my-4">{data.date}</p>
			</blockquote>
			<figcaption className="flex items-center justify-center space-x-3">
				<div className="space-y-0.5 text-sm font-bold text-left">
					<div>{data.name}</div>
				</div>
			</figcaption>
		</figure>
	);
};

export default Testimoni;
