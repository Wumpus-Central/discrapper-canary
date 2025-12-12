n.d(t, {
    A: () => _,
    p: () => p,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    o = n(688619),
    a = n.n(o),
    s = n(120356),
    l = n.n(s),
    c = n(220082),
    u = n(164670),
    d = n(239100);
let f = "#000000";
function p(e) {
    let {
            cardImage: t,
            cardBackgroundImage: n,
            altText: o,
            containerClassName: s,
            backgroundImageClassName: u,
            foregroundImageClassName: p,
            shape: _,
        } = e,
        [m, h] = (0, c.Cf)(t.toString(), f),
        g = i.useMemo(() => {
            let e = a()(m).brighten(1.5).saturate(0.3).alpha(0.8).hex(),
                t = null != h ? h : a()(m).saturate(1.2).alpha(0.9).hex();
            return "linear-gradient(135deg, ".concat(e, ", ").concat(t, ")");
        }, [m, h]);
    return (0, r.jsxs)("div", {
        className: l()(d.cardContainer, { [d.square]: "square" === _ }, s),
        children: [
            (0, r.jsx)("div", {
                className: l()(d.cardBackgroundImage, u),
                style: null != n ? { backgroundImage: "url(".concat(n.toString(), ")") } : { backgroundImage: g },
            }),
            (0, r.jsx)("img", {
                src: t.toString(),
                alt: o,
                draggable: !1,
                className: l()(d.skuImage, { [d.square]: "square" === _ }, p),
            }),
        ],
    });
}
function _(e) {
    let { sku: t, containerClassName: n, backgroundImageClassName: i, foregroundImageClassName: o, shape: a } = e,
        s = (0, u.Do)(t),
        l = (0, u.a7)(t);
    return null == s
        ? null
        : (0, r.jsx)(p, {
              cardImage: s,
              cardBackgroundImage: l,
              altText: t.name,
              containerClassName: n,
              backgroundImageClassName: i,
              foregroundImageClassName: o,
              shape: a,
          });
}
