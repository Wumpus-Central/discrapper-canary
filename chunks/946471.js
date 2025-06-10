function r(t, e) {
    var a, r, n, o;
    let i = e && e.getDsn(),
        c = e && e.getOptions().tunnel;
    return (a = t), (!!(r = i) && a.includes(r.host)) || ((n = t), !!(o = c) && _(n) === _(o));
}
function _(t) {
    return '/' === t[t.length - 1] ? t.slice(0, -1) : t;
}
a.d(e, { W: () => r });
