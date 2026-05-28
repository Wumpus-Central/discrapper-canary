i.d(t, { A: () => x, k: () => f });
var n = i(627968);
i(64700);
var l = i(503698),
    s = i.n(l),
    a = i(17928),
    r = i(425763),
    c = i(447453),
    o = i(495544),
    u = i(591179),
    d = i(953963),
    m = i(485745),
    g = i(367414);
function f(e) {
    let t = (0, a.bG)([o.default], () => o.default.getId() === e),
        i = !(0, u.X)("useIsModalV2EditingToolbarVisible"),
        n = (0, r.VU)(),
        l = (0, m.A)(i);
    return t && (n || l);
}
function x(e) {
    let { userId: t, guildId: i, className: l } = e,
        u = (0, a.bG)([o.default], () => o.default.getId() === t),
        m = (0, r.VU)();
    return u
        ? (0, n.jsx)("div", {
              className: s()(g.kL, l),
              children: m ? (0, n.jsx)(c.S, { className: g.Wg }) : (0, n.jsx)(d.A, { className: g.ZS, guildId: i }),
          })
        : null;
}
