n.d(t, { A: () => h, k: () => A });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(311907),
    s = n(397927),
    o = n(961350),
    d = n(953963),
    c = n(485745),
    u = n(367414);
function A(e) {
    let t = (0, r.bG)([o.default], () => o.default.getId() === e),
        n = (0, s.VUy)(),
        i = (0, c.A)();
    return t && (n || i);
}
function h(e) {
    let { userId: t, guildId: n, className: l } = e,
        c = (0, r.bG)([o.default], () => o.default.getId() === t),
        A = (0, s.VUy)();
    return c
        ? (0, i.jsx)("div", {
              className: a()(u.kL, l),
              children: A ? (0, i.jsx)(s.Smm, { className: u.Wg }) : (0, i.jsx)(d.A, { className: u.ZS, guildId: n }),
          })
        : null;
}
