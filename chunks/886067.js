let i = r(839525),
    a = r(15496);
e.exports = (e, n, r) => {
    let s = [],
        o = null,
        l = null,
        u = e.sort((e, n) => a(e, n, r));
    for (let e of u) i(e, n, r) ? ((l = e), !o && (o = e)) : (l && s.push([o, l]), (l = null), (o = null));
    o && s.push([o, null]);
    let c = [];
    for (let [e, n] of s) e === n ? c.push(e) : n || e !== u[0] ? (n ? (e === u[0] ? c.push(`<=${n}`) : c.push(`${e} - ${n}`)) : c.push(`>=${e}`)) : c.push('*');
    let d = c.join(' || '),
        f = 'string' == typeof n.raw ? n.raw : String(n);
    return d.length < f.length ? d : n;
};
