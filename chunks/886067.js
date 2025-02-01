let i = n(839525),
    r = n(15496);
e.exports = (e, t, n) => {
    let a = [],
        s = null,
        o = null,
        l = e.sort((e, t) => r(e, t, n));
    for (let e of l) i(e, t, n) ? ((o = e), s || (s = e)) : (o && a.push([s, o]), (o = null), (s = null));
    s && a.push([s, null]);
    let u = [];
    for (let [e, t] of a) e === t ? u.push(e) : t || e !== l[0] ? (t ? (e === l[0] ? u.push(`<=${t}`) : u.push(`${e} - ${t}`)) : u.push(`>=${e}`)) : u.push('*');
    let c = u.join(' || '),
        d = 'string' == typeof t.raw ? t.raw : String(t);
    return c.length < d.length ? c : t;
};
