n.d(t, {
    A: () => _,
    p: () => f,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(688619),
    o = n.n(a),
    s = n(120356),
    l = n.n(s),
    c = n(220082),
    u = n(164670),
    d = n(239100);
function f(e) {
    let {
            cardImage: t,
            cardBackgroundImage: n,
            altText: a,
            containerClassName: s,
            backgroundImageClassName: u,
            foregroundImageClassName: f,
            shape: _,
        } = e,
        [p, h] = (0, c.Cf)(t.toString(), "#000000"),
        m = i.useMemo(() => {
            let e = o()(p).brighten(1.5).saturate(0.3).alpha(0.8).hex(),
                t = null != h ? h : o()(p).saturate(1.2).alpha(0.9).hex();
            return "linear-gradient(135deg, ".concat(e, ", ").concat(t, ")");
        }, [p, h]);
    return (0, r.jsxs)("div", {
        className: l()(d.cardContainer, { [d.square]: "square" === _ }, s),
        children: [
            (0, r.jsx)("div", {
                className: l()(d.cardBackgroundImage, u),
                style: null != n ? { backgroundImage: "url(".concat(n.toString(), ")") } : { backgroundImage: m },
            }),
            (0, r.jsx)("img", {
                src: t.toString(),
                alt: a,
                className: l()(d.skuImage, { [d.square]: "square" === _ }, f),
            }),
        ],
    });
}
function _(e) {
    let { sku: t, containerClassName: n, backgroundImageClassName: i, foregroundImageClassName: a, shape: o } = e,
        s = (0, u.Do)(t),
        l = (0, u.a7)(t);
    return null == s
        ? null
        : (0, r.jsx)(f, {
              cardImage: s,
              cardBackgroundImage: l,
              altText: t.name,
              containerClassName: n,
              backgroundImageClassName: i,
              foregroundImageClassName: a,
              shape: o,
          });
}
