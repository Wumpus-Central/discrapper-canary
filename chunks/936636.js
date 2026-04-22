n.d(t, { A: () => b, s: () => x });
var a = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    r = n(808380),
    s = n(31300),
    o = n(802516),
    d = n(22363),
    c = n(418524),
    u = n(990078),
    m = n(504186),
    _ = n(985018),
    h = n(141535);
function f(e) {
    switch (e) {
        case r.Y.DESKTOP:
            return _.intl.string(_.t.KT6uCJ);
        case r.Y.XBOX:
            return _.intl.string(_.t.DDWUJp);
        case r.Y.PLAYSTATION:
            return _.intl.string(_.t.fzMz2s);
        case r.Y.NINTENDO:
            return _.intl.string(_.t.AMW8je);
        default:
            return null;
    }
}
function g(e) {
    let { platform: t, ...n } = e;
    switch (t) {
        case r.Y.DESKTOP:
            return (0, a.jsx)(s.k, { size: "xs", ...n });
        case r.Y.XBOX:
            return (0, a.jsx)(o.Y, { size: "xs", ...n });
        case r.Y.PLAYSTATION:
            return (0, a.jsx)(d.X, { size: "xs", ...n });
        case r.Y.NINTENDO:
            return (0, a.jsx)(c.M, { size: "xs", ...n });
        default:
            return null;
    }
}
function p(e) {
    let { platforms: t } = e;
    return (0, a.jsx)("div", {
        className: i()(h.nM, h.Lc),
        style: { alignItems: "center" },
        children: t.map((e) => (0, a.jsx)(u.m, { text: f(e), children: (0, a.jsx)(g, { platform: e }) }, e)),
    });
}
function x(e) {
    let { platform: t } = e;
    return (0, a.jsx)(u.m, { text: f(t), children: (0, a.jsx)(g, { platform: t }) }, t);
}
function b(e) {
    let { game: t, className: n } = e,
        l = (0, m.A)(t);
    return 0 === l.length
        ? null
        : (0, a.jsx)("div", {
              className: i()(h.fi, h.iH, n),
              children: l.length > 0 && (0, a.jsx)(p, { platforms: l }),
          });
}
