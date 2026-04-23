n.d(t, { A: () => _, k: () => m });
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
    g = n(367414);
function m(e) {
    let t = (0, s.bG)([c.default], () => c.default.getId() === e),
        n = (0, r.VU)(),
        i = (0, u.A)();
    return t && (n || i);
}
function _(e) {
    let { userId: t, guildId: n, className: a } = e,
        u = (0, s.bG)([c.default], () => c.default.getId() === t),
        m = (0, r.VU)();
    return u
        ? (0, i.jsx)("div", {
              className: l()(g.kL, a),
              children: m ? (0, i.jsx)(o.S, { className: g.Wg }) : (0, i.jsx)(d.A, { className: g.ZS, guildId: n }),
          })
        : null;
}
