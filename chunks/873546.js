n.d(t, {
    Em: () => b,
    eL: () => v,
    tq: () => y
}),
    n(47120);
var r,
    i,
    o,
    a,
    s,
    l,
    c,
    u,
    d,
    f,
    _,
    p = n(264344),
    h = n.n(p);
let m = new Set(['iPad', 'Kindle', 'Kindle Fire', 'Nook', 'PlayBook']),
    g = new Set(['Android', 'iOS', 'Windows Phone']),
    E = (null == (i = window) || null == (r = i.navigator) ? void 0 : r.platform) === 'MacIntel' && void 0 !== (null == (a = window) || null == (o = a.navigator) ? void 0 : o.standalone) && (null == (l = window) || null == (s = l.navigator) ? void 0 : s.maxTouchPoints) > 1,
    b = m.has(null != (f = h().product) ? f : '') || E,
    y = !b && g.has(null != (_ = null === h() || void 0 === h() || null == (c = h().os) ? void 0 : c.family) ? _ : '');
null === h() || void 0 === h() || null == (u = h().os) || u.family;
let v = (null === h() || void 0 === h() || null == (d = h().os) ? void 0 : d.family) === 'Android';
