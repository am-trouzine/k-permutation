/**
 * Simple k-Permutation Algorithm (JavaScript)
 *
 * This is a JavaScript implementation of the k-permutation algorithm, which generates
 * all possible arrangements of a set without repetition, where each arrangement consists
 * of `k` elements.
 *
 * Copyright (c) 2025 Abderrezzaq TROUZINE and Omar AZZOUG
 * Licensed under the MIT License (see LICENSE file for details).
 * https://github.com/am-trouzine/k-permutation/tree/main
 */

function k_permutate(e, s = '') { // e : string ; s:splitChar
	e = e.toString();
	e = e.split(s);
	if (e.length < 2) {
		return [e.join('')]
	}

	var E = e;
	var my = function(e, f) {
		var h = []
		for (var i = 0; i <= e.length; i++) {
			var a = e.slice();
			a.splice(i, 0, f);
			a = a.join(s);
			if (h.indexOf(a) == -1) h.push(a);
			while (e[i + 1] && (e[i + 1] == f)) i++
		}
		return h
	}

	var r = my([E[0]], E[1]);
	for (var i = 2; i < E.length; i++) {
		var a = []
		for (var j = 0; j < r.length; j++) {
			var b = my(r[j].split(s), E[i]);
			b.forEach(function(e) {
				if (a.indexOf(e) == -1) a.push(e)
			})
		}
		r = a //.slice()
	}

	return r.sort()
}
