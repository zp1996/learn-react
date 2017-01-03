/**
 * 根据rgb值算出位置
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {object} { left: , top: }
 */
function get_pos(r, g, b) {
	const color = [
		{ key: 'r', val: r }, 
		{ key: 'g', val: g },
		{ key: 'b', val: b }
	];
	color.sort((a, b) => a.val - b.val);
	console.log(color);
};
get_pos(244, 233, 222);