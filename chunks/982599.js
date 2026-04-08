n.d(t, { A: () => m, k: () => g });
var i = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    s = n(311907),
    r = n(397927),
    o = n(961350),
    d = n(953963),
    c = n(485745),
    u = n(44550);
function g(e) {
    let t = (0, s.bG)([o.default], () => o.default.getId() === e),
        n = (0, r.VUy)(),
        i = (0, c.A)();
    return t && (n || i);
}
function m(e) {
    let { userId: t, guildId: n, className: a } = e,
        c = (0, s.bG)([o.default], () => o.default.getId() === t),
        g = (0, r.VUy)();
    return c
        ? (0, i.jsx)("div", {
              className: l()(u.kL, a),
              children: g ? (0, i.jsx)(r.Smm, { className: u.Wg }) : (0, i.jsx)(d.A, { className: u.ZS, guildId: n }),
          })
        : null;
}
