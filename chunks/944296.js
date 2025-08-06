n.d(t, { d: () => a });
var r = n(406954),
    i = n(619169),
    o = n(90620);
function a(...e) {
    let t = { ...e[0] };
    for (let n = 1; n < e.length; n++) {
        let a = e[n];
        for (let e in a) {
            let n = t[e],
                s = a[e];
            'function' == typeof n && 'function' == typeof s && 'o' === e[0] && 'n' === e[1] && e.charCodeAt(2) >= 65 && 90 >= e.charCodeAt(2) ? (t[e] = (0, r.t)(n, s)) : ('className' === e || 'UNSAFE_className' === e) && 'string' == typeof n && 'string' == typeof s ? (t[e] = (0, o.Z)(n, s)) : 'id' === e && n && s ? (t.id = (0, i.ur)(n, s)) : (t[e] = void 0 !== s ? s : n);
        }
    }
    return t;
}
