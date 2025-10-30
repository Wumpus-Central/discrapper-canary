n.d(t, {
    A: () => _,
    p: () => f,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(688619),
    o = n.n(a),
    s = n(120356),
    l = n.n(s),
    c = n(220082),
    u = n(164670),
    d = n(239100);
function f(e) {
    let { cardImage: t, cardBackgroundImage: n, altText: a, className: s, shape: u } = e,
        [f, _] = (0, c.Cf)(t.toString(), "#000000"),
        p = i.useMemo(() => {
            let e = o()(f).brighten(1.5).saturate(0.3).alpha(0.8).hex(),
                t = null != _ ? _ : o()(f).saturate(1.2).alpha(0.9).hex();
            return "linear-gradient(135deg, ".concat(e, ", ").concat(t, ")");
        }, [f, _]);
    return (0, r.jsx)("div", {
        className: l()(d.cardContainer, { [d.square]: "square" === u }, s),
        style: null != n ? { backgroundImage: "url(".concat(n.toString(), ")") } : { backgroundImage: p },
        children: (0, r.jsx)("img", {
            src: t.toString(),
            alt: a,
            className: l()(d.skuImage, { [d.square]: "square" === u }),
        }),
    });
}
function _(e) {
    let { sku: t, className: n, shape: i } = e,
        a = (0, u.Do)(t),
        o = (0, u.a7)(t);
    return null == a
        ? null
        : (0, r.jsx)(f, {
              cardImage: a,
              cardBackgroundImage: o,
              altText: t.name,
              className: n,
              shape: i,
          });
}
