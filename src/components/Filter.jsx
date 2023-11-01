/* eslint-disable react/prop-types */
const Filter = ({ onChange, filter, data, keyword, setKeyword, onClick }) => {
	return (
		<div className="p-3 mt-10 border-y-2">
			<div className="flex justify-around">
				<div className="flex">
					<div className="mr-4 flex items-center">Filter By:</div>
					<div className="flex flex-col items-center ml-4">
						<label className="self-start pl-1 pb-2" htmlFor="city">
							City:
						</label>
						<select value={filter} id="city" onChange={onChange}>
							{data.map((item, id) => (
								<option key={id} value={item}>
									{item}
								</option>
							))}
						</select>
					</div>
				</div>
				<div className="items-center">
					<label htmlFor="search">Search</label>
					<input
						id="search"
						type="text"
						className="ml-2 border py-2 px-4 rounded-3xl placeholder:text-xs"
						placeholder="By Name, Category and Menu"
						value={keyword}
						onChange={(e) => setKeyword(e.target.value)}
					/>
				</div>
				<button
					onClick={onClick}
					type="button"
					className="text-white bg-slate-700 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-2"
				>
					Clear Search
				</button>
			</div>
		</div>
	);
};

export default Filter;
