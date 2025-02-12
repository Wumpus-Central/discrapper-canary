function r(t, e) {
    var a, r, _, o;
    let i = e && e.getDsn(),
        c = e && e.getOptions().tunnel;
    return (a = t), (!!(r = i) && a.includes(r.host)) || ((_ = t), !!(o = c) && n(_) === n(o));
}
function n(t) {
    return '/' === t[t.length - 1] ? t.slice(0, -1) : t;
}
a.d(e, { W: () => r });
