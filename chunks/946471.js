function n(e, t) {
    var r, n, i, o;
    let _ = t && t.getDsn(),
        s = t && t.getOptions().tunnel;
    return (r = e), (!!(n = _) && r.includes(n.host)) || ((i = e), !!(o = s) && a(i) === a(o));
}
function a(e) {
    return "/" === e[e.length - 1] ? e.slice(0, -1) : e;
}
r.d(t, { W: () => n });
