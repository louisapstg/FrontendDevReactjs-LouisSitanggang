import Header from "./../components/Header";
import Filter from "./../components/Filter";
import Card from "./../components/Card";
import { useState, useEffect } from "react";
import RestaurantAPI from "../apis/restaurat.api";
import useHook from "../hooks/useHook";

const Initial_Restaurants = {
	data: [],
};

const Main = () => {
	const [restaurants, setRestaurants] = useState(Initial_Restaurants);
	const [filteredCity, setFilteredCity] = useState("");
	const [city, setCity] = useState([]);
	const { keyword, setKeyword, debounceKeyword } = useHook();

	useEffect(() => {
		if (debounceKeyword) {
			RestaurantAPI.searchRestaurant(debounceKeyword.toLowerCase()).then((result) =>
				setRestaurants({ data: result.data })
			);
		} else {
			RestaurantAPI.getRestaurant().then((result) =>
				setRestaurants({
					data: result.data,
				})
			);
		}
	}, [debounceKeyword]);

	useEffect(() => {
		const unique = [...new Set(restaurants.data.restaurants?.map((item) => item.city))];
		setCity(unique);
	}, [restaurants]);

	let filteredData =
		restaurants.data.restaurants?.filter((item) => item.city === filteredCity) || [];

	const handleCityChange = (e) => {
		setFilteredCity(e.target.value);
	};

	const clearSearch = () => {
		setKeyword("");
	};

	return (
		<div className="p-8">
			<Header />
			<Filter
				onChange={handleCityChange}
				filter={filteredCity}
				data={city}
				keyword={keyword}
				setKeyword={setKeyword}
				onClick={clearSearch}
			/>
			<div className="mt-4">
				<div>All Restaurants</div>
				{filteredData.length > 0 ? (
					<div className="grid grid-cols-4 gap-2">
						{filteredData.map((restaurant, id) => {
							return <Card key={id} data={restaurant} />;
						})}
					</div>
				) : (
					<div className="grid grid-cols-4 gap-2">
						{restaurants.data.restaurants?.map((restaurant) => {
							return <Card key={restaurant.id} data={restaurant} />;
						})}
					</div>
				)}
			</div>
		</div>
	);
};

export default Main;
