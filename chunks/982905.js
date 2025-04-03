a.d(t, { l: () => s });
var n = a(468194);
function s(e, t) {
    for (var a = arguments.length, s = Array(a > 2 ? a - 2 : 0), r = 2; r < a; r++) s[r - 2] = arguments[r];
    let l = s.reduce((e, t) => e + (0, n.De)(t), ''),
        i = e[''.concat(t).concat(l)];
    return null == i ? '' : i;
}
