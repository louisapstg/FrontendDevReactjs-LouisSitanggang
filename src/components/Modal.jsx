/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import RestaurantAPI from "../apis/restaurat.api";
import Rating from "./Rating";
import Testimoni from "./Testimoni";

const Modal = ({ data, handleModalTrigger }) => {
	const [detailedData, setDetailedData] = useState([]);
	const { id } = data || [];
	const {
		restaurant: { address, city, customerReviews, name, pictureId, rating },
	} = detailedData.data || { restaurant: {} };

	useEffect(() => {
		RestaurantAPI.detailedRestaurant(id).then((result) =>
			setDetailedData({ data: result.data })
		);
	}, []);

	return (
		<div className="relative z-50">
			<div className="fixed inset-0 z-50 bg-gray-600 bg-opacity-80 transition-opacity"></div>
			<div className="fixed inset-0 z-50 items-center justify-center">
				<div className="flex w-full items-end justify-center px-4 py-16 h-full">
					<div className="relative h-full w-full max-w-sm sm:max-w-sm md:h-auto md:max-w-md lg:max-w-lg xl:max-w-xl">
						<div className="relative bg-white shadow px-4 py-6 text-center max-h-[650px] overflow-y-auto">
							<div className="flex justify-center">
								<div className="text-3xl font-bold">{name}</div>
								<div className="ml-2 flex items-center">
									<Rating value={rating} />
									<span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
										{rating}
									</span>
								</div>
							</div>

							<img
								className="rounded-xl my-3"
								src={`https://restaurant-api.dicoding.dev/images/large/${pictureId}`}
								alt=""
							/>
							<div className="text-right">
								Alamat: {address} {city}
							</div>
							<div className="grid my-8 border border-gray-200 p-1 rounded-lg gap-2 shadow-sm md:mb-12 md:grid-cols-2">
								{customerReviews?.map((item, id) => {
									return <Testimoni key={id} data={item} />;
								})}
							</div>
							<button
								onClick={handleModalTrigger}
								type="button"
								className="absolute focus:outline-none text-white bg-slate-700 hover:bg-slate-400 focus:ring-4 focus:ring-slate-400 font-medium rounded-lg text-sm px-5 py-2.5 top-20 right-2"
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
