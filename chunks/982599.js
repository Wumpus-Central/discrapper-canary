n.d(t, { A: () => m, k: () => g });
var i = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    s = n(17928),
    r = n(425763),
    o = n(447453),
    c = n(495544),
    d = n(953963),
    u = n(485745),
    _ = n(367414);
function g(e) {
    let t = (0, s.bG)([c.default], () => c.default.getId() === e),
        n = (0, r.VU)(),
        i = (0, u.A)();
    return t && (n || i);
}
function m(e) {
    let { userId: t, guildId: n, className: a } = e,
        u = (0, s.bG)([c.default], () => c.default.getId() === t),
        g = (0, r.VU)();
    return u
        ? (0, i.jsx)("div", {
              className: l()(_.kL, a),
              children: g ? (0, i.jsx)(o.S, { className: _.Wg }) : (0, i.jsx)(d.A, { className: _.ZS, guildId: n }),
          })
        : null;
}
