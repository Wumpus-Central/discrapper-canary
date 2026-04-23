n.d(t, { A: () => E, s: () => x });
var l = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    r = n(808380),
    s = n(31300),
    o = n(802516),
    c = n(22363),
    d = n(418524),
    u = n(990078),
    m = n(504186),
    h = n(985018),
    f = n(141535);
function _(e) {
    switch (e) {
        case r.Y.DESKTOP:
            return h.intl.string(h.t.KT6uCJ);
        case r.Y.XBOX:
            return h.intl.string(h.t.DDWUJp);
        case r.Y.PLAYSTATION:
            return h.intl.string(h.t.fzMz2s);
        case r.Y.NINTENDO:
            return h.intl.string(h.t.AMW8je);
        default:
            return null;
    }
}
function g(e) {
    let { platform: t, ...n } = e;
    switch (t) {
        case r.Y.DESKTOP:
            return (0, l.jsx)(s.k, { size: "xs", ...n });
        case r.Y.XBOX:
            return (0, l.jsx)(o.Y, { size: "xs", ...n });
        case r.Y.PLAYSTATION:
            return (0, l.jsx)(c.X, { size: "xs", ...n });
        case r.Y.NINTENDO:
            return (0, l.jsx)(d.M, { size: "xs", ...n });
        default:
            return null;
    }
}
function p(e) {
    let { platforms: t } = e;
    return (0, l.jsx)("div", {
        className: i()(f.nM, f.Lc),
        style: { alignItems: "center" },
        children: t.map((e) => (0, l.jsx)(u.m, { text: _(e), children: (0, l.jsx)(g, { platform: e }) }, e)),
    });
}
function x(e) {
    let { platform: t } = e;
    return (0, l.jsx)(u.m, { text: _(t), children: (0, l.jsx)(g, { platform: t }) }, t);
}
function E(e) {
    let { game: t, className: n } = e,
        a = (0, m.A)(t);
    return 0 === a.length
        ? null
        : (0, l.jsx)("div", {
              className: i()(f.fi, f.iH, n),
              children: a.length > 0 && (0, l.jsx)(p, { platforms: a }),
          });
}
