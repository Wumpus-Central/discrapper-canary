function r(t, e) {
    var a, r, o, _;
    let i = e && e.getDsn(),
        c = e && e.getOptions().tunnel;
    return (a = t), (!!(r = i) && a.includes(r.host)) || ((o = t), !!(_ = c) && n(o) === n(_));
}
function n(t) {
    return '/' === t[t.length - 1] ? t.slice(0, -1) : t;
}
a.d(e, { W: () => r });
