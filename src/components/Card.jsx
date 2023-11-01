/* eslint-disable react/prop-types */
import useHook from "../hooks/useHook";
import Modal from "./Modal";
import Rating from "./Rating";

const Card = ({ data }) => {
	const { name, pictureId, rating, city } = data || {};
	const { handleModalTrigger, modalTrigger } = useHook();

	return (
		<div>
			<div className="w-full max-w-sm">
				<a href="#">
					<img
						className="p-8 rounded-t-lg"
						src={`https://restaurant-api.dicoding.dev/images/small/${pictureId}`}
						alt="product image"
					/>
				</a>
				<div className="px-5 pb-5">
					<a href="#">
						<h5 className="text-xl font-semibold tracking-tight text-gray-900">
							{name}
						</h5>
					</a>
					<div className="flex items-center mt-2.5 mb-1">
						<Rating value={rating} />
						<span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
							{rating}
						</span>
					</div>
					<div className="my-1">{city}</div>
					<button
						href="#"
						className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						onClick={handleModalTrigger}
					>
						LEARN MORE
					</button>
				</div>
			</div>
			{modalTrigger && <Modal data={data} handleModalTrigger={handleModalTrigger} />}
		</div>
	);
};
export default Card;
