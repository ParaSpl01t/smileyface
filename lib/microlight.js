// Code stolen from https://asvd.github.io/microlight/
// heavily modified for js
var t,
	n,
	i,
	o = window,
	r = document,
	a = 'appendChild',
	l = 'test',
	c = ';text-shadow:',
	s = 'opacity:.',
	d = ' 0px 0px ',
	u = '1px 0px 2',
	f = ')'

for (n = r.querySelectorAll('code'), t = 0; (i = n[t++]); )
	for (
		var p,
			h,
			g,
			m,
			y,
			x = i.textContent,
			b = 0,
			w = x[0],
			v = 1,
			k = (i.innerHTML = ''),
			C = 0,
			N = /(\d*\, \d*\, \d*)(, ([.\d]*))?/g.exec(
				o.getComputedStyle(i).color
			),
			E = 'px rgba(' + N[1] + ',',
			S = N[3] || 1;
		(h = p), (p = 7 > C && '\\' == p ? 1 : v);

	) {
		if (
			((v = w),
			(w = x[++b]),
			(m = k.length > 1),
			!v ||
				(C > 8 && '\n' == v) ||
				[
					/\S/[l](v),
					1,
					1,
					!/[$\w]/[l](v),
					('/' == p || '\n' == p) && m,
					'"' == p && m,
					"'" == p && m,
					x[b - 4] + h + p == '-->',
					h + p == '*/',
				][C])
		)
			for (
				k &&
					(i[a]((y = r.createElement('span'))).setAttribute(
						'style',
						[
							'',
							c +
								d +
								2 +
								E +
								0.7 * S +
								'),' +
								d +
								2 +
								E +
								0.4 * S +
								f,
							s +
								6 +
								c +
								d +
								7 +
								E +
								S / 4 +
								'),' +
								d +
								3 +
								E +
								S / 4 +
								f,
							s +
								7 +
								c +
								u +
								E +
								S / 5 +
								'),-' +
								u +
								E +
								S / 5 +
								f,
							s +
								5 +
								c +
								u +
								E +
								S / 4 +
								'),-' +
								u +
								E +
								S / 4 +
								f,
						][
							C
								? 3 > C
									? 2
									: C > 6
									? 4
									: C > 3
									? 3
									: +/^(await|boolean|break|case|catch|class|const|continue|do|else|eval|false|float|for|function|goto|if|in|instanceof|int|let|new|null|return|switch|this|throw|true|try|typeof|var|while)$/[
											l
									  ](k)
								: 0
						]
					),
					y[a](r.createTextNode(k))),
					g = C && 7 > C ? C : g,
					k = '',
					C = 11;
				![
					1,
					/[\/{}[(\-+*=<>:;|\\.,?!&@~]/[l](v),
					/[\])]/[l](v),
					/[$\w]/[l](v),
					'/' == v && 2 > g && '<' != p,
					'"' == v,
					"'" == v,
					v + w + x[b + 1] + x[b + 2] == '<!--',
					v + w == '/*',
					v + w == '//',
					'#' == v,
				][--C];

			);
		k += v
	}
