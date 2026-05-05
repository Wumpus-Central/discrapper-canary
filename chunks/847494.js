l.d(t, { A: () => o });
var n = l(627968),
    r = l(64700),
    s = l(503698),
    i = l.n(s),
    a = l(435328),
    c = l(215431),
    u = l(992595);
function o(e) {
    let { description: t, className: l, guildId: s, truncate: o = !0 } = e,
        d = r.useMemo(() => (0, a.l)(t, !0, { guildId: s, allowLinks: !0, allowHeading: !0, allowList: !0 }), [t, s]);
    return (0, n.jsx)("div", { className: i()(c.i, l, u.PT, { [c.x]: o }), children: d });
}
