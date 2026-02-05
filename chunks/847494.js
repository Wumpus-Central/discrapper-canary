l.d(t, { A: () => d });
var n = l(627968),
    s = l(64700),
    i = l(503698),
    a = l.n(i),
    r = l(435328),
    c = l(342088),
    u = l(206314);
function d(e) {
    let { description: t, className: l, guildId: i, truncate: d = !0 } = e,
        o = s.useMemo(() => (0, r.l)(t, !0, { guildId: i, allowLinks: !0, allowHeading: !0, allowList: !0 }), [t, i]);
    return (0, n.jsx)("div", { className: a()(c.i, l, u.PT, { [c.x]: d }), children: o });
}
