
	/**
	 * Восстанавливает композицию числа N по номеру n
	 * @param n {int}
	 * @param N {int}
	 * n <= 1<<N;
	 * N<=32
	 */
	function decodeComposition(n, N){
		let r=[];
		while(n){
			let k=1;
			while((n&1) === 0){
				++k;
				n = n >>> 1;
				--N
			}
			r.push(k);
			n = n >>> 1;
			--N;
		}
		if(N){
			r.push(N);
		}
		return r;
	}
	
	/**
	 * Находит все композиции для числа N
	 */
	function compositionAll(N){
		var len = 1<<(N-1), index=0;
		var result = [];
		while(index<len){
			result.push(decodeComposition(index, N));
			++index;
		}
		return result;
	}

module.exports = {
	decodeComposition,
	compositionAll
};