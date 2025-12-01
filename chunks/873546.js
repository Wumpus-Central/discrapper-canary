n.d(t, {
    Em: () => b,
    bO: () => O,
    eL: () => v,
    tq: () => y,
}),
    n(388685);
var r,
    i,
    a,
    o,
    s,
    l,
    c,
    u,
    d,
    f,
    p,
    _ = n(264344),
    m = n.n(_);
let h = new Set(["iPad", "Kindle", "Kindle Fire", "Nook", "PlayBook"]),
    g = new Set(["Android", "iOS", "Windows Phone"]),
    E =
        (null == (i = window) || null == (r = i.navigator) ? void 0 : r.platform) === "MacIntel" &&
        void 0 !== (null == (o = window) || null == (a = o.navigator) ? void 0 : a.standalone) &&
        (null == (l = window) || null == (s = l.navigator) ? void 0 : s.maxTouchPoints) > 1,
    b = h.has(null != (f = m().product) ? f : "") || E,
    y = !b && g.has(null != (p = null === m() || void 0 === m() || null == (c = m().os) ? void 0 : c.family) ? p : ""),
    O = (null === m() || void 0 === m() || null == (u = m().os) ? void 0 : u.family) === "iOS",
    v = (null === m() || void 0 === m() || null == (d = m().os) ? void 0 : d.family) === "Android";
