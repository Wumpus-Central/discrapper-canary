function r(e, t) {
    var n, r, a, o;
    let _ = t && t.getDsn(),
        s = t && t.getOptions().tunnel;
    return (n = e), (!!(r = _) && n.includes(r.host)) || ((a = e), !!(o = s) && i(a) === i(o));
}
function i(e) {
    return "/" === e[e.length - 1] ? e.slice(0, -1) : e;
}
n.d(t, { W: () => r });
