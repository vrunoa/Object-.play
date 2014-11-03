/*************************************************/
/* Ejercicio para entender objetos en JavaScript */
/*************************************************/

/* Aqui hay muchas maldades */

var window = window || global,
	global = global || window;

var T = {
	x: 8,
	l: {
		x: 2,
		l: {
			x: 8,
			l: null,
			r: null
		},
		r: {
			x: 7,
			l: null,
			r: null
		}
	},
	r: {
		global: {
			crazy: 22
		},
		x: 6,
		l: null,
		r: null,
		d: [3, 4, 5],
		o: {},
		g: global,
		w: window,
		u: undefined,
		t: true,
		n: Object({
			xn: 6
		}),
		s: String({
			xn: 6
		}),
		f: Object([2, 3, 4]),
		z: {
			zn: [2]
		}
	}
};

/* Solucion */

function solution(T) {

	/* Aqui hay que programar la solucion */

	return count(T); // Recuerden retornar el valor

};

function count(s) {
  if (typeof s == 'number') return 1;
  if (s instanceof Object && !(s instanceof Array)) {
    var l = 0;
    for(var i in s) l += count(s[i]);
    return l;
  }
  return 0;
}

/* La parte mas obvia */

console.log(solution(T)); // La respuesta correcta es 7

/********************************************/
/* EL PRIMERO QUE LO SOLUCIONE TIENE PREMIO */
/********************************************/
