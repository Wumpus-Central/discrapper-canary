l.d(t, { A: () => m });
var n = l(627968),
    r = l(64700),
    s = l(503698),
    i = l.n(s),
    a = l(435328),
    c = l(17928),
    u = l(808728),
    o = l(215431),
    d = l(992595);
function m(e) {
    let { description: t, className: l, guildId: s, truncate: m = !0 } = e,
        x = (0, c.bG)([u.Ay], () => (null != s ? u.Ay.getDefaultChannel(s)?.id : void 0), [s]),
        h = r.useMemo(
            () => (0, a.l)(t, !0, { guildId: s, channelId: x, allowLinks: !0, allowHeading: !0, allowList: !0 }),
            [t, s, x],
        );
    return (0, n.jsx)("div", { className: i()(o.i, l, d.PT, { [o.x]: m }), children: h });
}
