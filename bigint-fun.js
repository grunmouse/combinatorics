/**
 * Подсчитывает нулевые биты в младших разрядах до первой единицы, возвращает их количество
 * @param {BigInt} value
 * @return {BigInt}
 */
function lowerZeroCount(value){
	let r = 0n;
	while(value){
		if(value&1n){
			return r;
		}
		else{
			++r;
			value = value>>>1n;
		}
	}
	return r;
}
/**
 * Подсчитывает единичные биты в младших разрядах до первого нуля, возвращает их количество
 * @param {BigInt} value
 * @return {BigInt}
 */
function lowerFlagCount(value){
	let r = 0n;
	while(value){
		if(value&1n){
			++r;
			value = value>>>1n;
		}
		else{
			return r;
		}
	}
	return r;
}

/**
 * Все единичные биты в числе, возвращает их количество
 * @param {BigInt} value 
 * @return {BigInt}
 */
function flagCount(value){
	let r =0n;
	while(value){
		if(value & 1n){
			++r;
		}
		value = value>>>1n;
	}
	return r;
}

/**
 * Для числа value возвращает ближайшее большее число с тем же количеством единичных битов
 * @param {BigInt} value
 * @return {BigInt}
 */
function nextEqFlag(value){
	let lz = lowerZeroCount(value);
	let f = lowerFlagCount(value>>>lz)-1n;
	return value + (1n<<lz) + ((1n<<f)-1n);
}


module.exports = {
	lowerZeroCount,
	lowerFlagCount,
	flagCount,
	nextEqFlag
	
};
