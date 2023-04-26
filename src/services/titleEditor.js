export const titleEditor = (title) => {
	return title.replace(/(^\w|-\w)/g, toClear);
};

const toClear = (title) => {
	return title.replace(/-/, " ").toUpperCase();
};
