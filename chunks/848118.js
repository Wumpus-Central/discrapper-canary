n.d(t, {
    A: () => p,
    p: () => _,
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
let f = "#000000";
function _(e) {
    let {
            cardImage: t,
            cardBackgroundImage: n,
            altText: a,
            containerClassName: s,
            backgroundImageClassName: u,
            foregroundImageClassName: _,
            shape: p,
        } = e,
        [h, m] = (0, c.Cf)(t.toString(), f),
        g = i.useMemo(() => {
            let e = o()(h).brighten(1.5).saturate(0.3).alpha(0.8).hex(),
                t = null != m ? m : o()(h).saturate(1.2).alpha(0.9).hex();
            return "linear-gradient(135deg, ".concat(e, ", ").concat(t, ")");
        }, [h, m]);
    return (0, r.jsxs)("div", {
        className: l()(d.cardContainer, { [d.square]: "square" === p }, s),
        children: [
            (0, r.jsx)("div", {
                className: l()(d.cardBackgroundImage, u),
                style: null != n ? { backgroundImage: "url(".concat(n.toString(), ")") } : { backgroundImage: g },
            }),
            (0, r.jsx)("img", {
                src: t.toString(),
                alt: a,
                className: l()(d.skuImage, { [d.square]: "square" === p }, _),
            }),
        ],
    });
}
function p(e) {
    let { sku: t, containerClassName: n, backgroundImageClassName: i, foregroundImageClassName: a, shape: o } = e,
        s = (0, u.Do)(t),
        l = (0, u.a7)(t);
    return null == s
        ? null
        : (0, r.jsx)(_, {
              cardImage: s,
              cardBackgroundImage: l,
              altText: t.name,
              containerClassName: n,
              backgroundImageClassName: i,
              foregroundImageClassName: a,
              shape: o,
          });
}
