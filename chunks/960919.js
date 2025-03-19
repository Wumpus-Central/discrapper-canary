n.d(t, { Z: () => d });
var r = n(200651),
    i = n(120356),
    o = n.n(i),
    a = n(780384),
    s = n(410030),
    l = n(345119);
let c = n(17702),
    u = n(647894),
    d = (e) => {
        let { customSize: t, shouldUseThemeColor: n = !1, loading: i, className: d } = e,
            f = (0, s.ZP)(),
            _ = n && (0, a.ap)(f) ? u : c,
            p = void 0 !== t ? { height: t } : void 0;
        return (0, r.jsx)('img', {
            className: o()(l.orbIconSVG, d, { [l.loading]: i }),
            src: _,
            alt: 'Orb Icon',
            style: p
        });
    };
