let i = r(839525),
    a = r(15496);
e.exports = (e, n, r) => {
    let o = [],
        s = null,
        l = null,
        u = e.sort((e, n) => a(e, n, r));
    for (let e of u) i(e, n, r) ? ((l = e), !s && (s = e)) : (l && o.push([s, l]), (l = null), (s = null));
    s && o.push([s, null]);
    let c = [];
    for (let [e, n] of o) e === n ? c.push(e) : n || e !== u[0] ? (n ? (e === u[0] ? c.push(`<=${n}`) : c.push(`${e} - ${n}`)) : c.push(`>=${e}`)) : c.push('*');
    let d = c.join(' || '),
        f = 'string' == typeof n.raw ? n.raw : String(n);
    return d.length < f.length ? d : n;
};
