let r = n(839525),
    i = n(15496);
e.exports = (e, t, n) => {
    let a = [],
        o = null,
        s = null,
        l = e.sort((e, t) => i(e, t, n));
    for (let e of l) r(e, t, n) ? ((s = e), o || (o = e)) : (s && a.push([o, s]), (s = null), (o = null));
    o && a.push([o, null]);
    let c = [];
    for (let [e, t] of a) e === t ? c.push(e) : t || e !== l[0] ? (t ? (e === l[0] ? c.push(`<=${t}`) : c.push(`${e} - ${t}`)) : c.push(`>=${e}`)) : c.push('*');
    let u = c.join(' || '),
        d = 'string' == typeof t.raw ? t.raw : String(t);
    return u.length < d.length ? u : t;
};
