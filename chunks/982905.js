a.d(t, { l: () => r });
var n = a(468194);
function r(e, t) {
    for (var a = arguments.length, r = Array(a > 2 ? a - 2 : 0), s = 2; s < a; s++) r[s - 2] = arguments[s];
    let l = r.reduce((e, t) => e + (0, n.De)(t), ''),
        i = e[''.concat(t).concat(l)];
    return null == i ? '' : i;
}
