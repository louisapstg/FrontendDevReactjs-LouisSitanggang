import { useState } from "react";
import { useDebounce } from "use-debounce";

const useHook = () => {
	const [keyword, setKeyword] = useState("");
	const [modalTrigger, setModalTrigger] = useState(false);
	const [debounceKeyword] = useDebounce(keyword, 100);

	const handleModalTrigger = () => {
		setModalTrigger(!modalTrigger);
	};

	return {
		handleModalTrigger,
		modalTrigger,
		keyword,
		setKeyword,
		debounceKeyword,
	};
};

export default useHook;
