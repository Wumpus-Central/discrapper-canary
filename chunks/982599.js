n.d(t, { A: () => _, k: () => A });
var i = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    l = n(311907),
    s = n(397927),
    o = n(961350),
    d = n(953963),
    c = n(485745),
    u = n(44550);
function A(e) {
    let t = (0, l.bG)([o.default], () => o.default.getId() === e),
        n = (0, s.VUy)(),
        i = (0, c.A)();
    return t && (n || i);
}
function _(e) {
    let { userId: t, guildId: n, className: a } = e,
        c = (0, l.bG)([o.default], () => o.default.getId() === t),
        A = (0, s.VUy)();
    return c
        ? (0, i.jsx)("div", {
              className: r()(u.kL, a),
              children: A ? (0, i.jsx)(s.Smm, { className: u.Wg }) : (0, i.jsx)(d.A, { className: u.ZS, guildId: n }),
          })
        : null;
}
