function a(t, e) {
    var _, a, n, o;
    let E = e && e.getDsn(),
        i = e && e.getOptions().tunnel;
    return (_ = t), (!!(a = E) && _.includes(a.host)) || ((n = t), !!(o = i) && r(n) === r(o));
}
function r(t) {
    return "/" === t[t.length - 1] ? t.slice(0, -1) : t;
}
_.d(e, { W: () => a });
