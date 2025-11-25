n.d(t, {
    M: () => u,
    Z: () => p,
});
var r = n(54381),
    s = n(120356),
    o = n.n(s),
    a = n(780384),
    i = n(410030),
    l = n(633459);
let c = n(17702),
    d = n(647894),
    u = (e) => {
        let { customSize: t, shouldUseThemeColor: n = !1, loading: s, className: u } = e,
            p = (0, i.ZP)(),
            m = n && (0, a.ap)(p) ? d : c;
        return (0, r.jsx)("img", {
            className: o()(l.orbIconSVG, u, { [l.loading]: s }),
            src: m,
            alt: "",
            style: void 0 !== t ? { height: t } : void 0,
        });
    },
    p = u;
