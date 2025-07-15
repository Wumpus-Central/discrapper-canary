n.d(t, { d: () => s });
var i = n(406954),
    r = n(9250),
    o = n(90620);
function s(...e) {
    let t = { ...e[0] };
    for (let n = 1; n < e.length; n++) {
        let s = e[n];
        for (let e in s) {
            let n = t[e],
                a = s[e];
            'function' == typeof n && 'function' == typeof a && 'o' === e[0] && 'n' === e[1] && e.charCodeAt(2) >= 65 && 90 >= e.charCodeAt(2) ? (t[e] = (0, i.t)(n, a)) : ('className' === e || 'UNSAFE_className' === e) && 'string' == typeof n && 'string' == typeof a ? (t[e] = (0, o.Z)(n, a)) : 'id' === e && n && a ? (t.id = (0, r.ur)(n, a)) : (t[e] = void 0 !== a ? a : n);
        }
    }
    return t;
}
