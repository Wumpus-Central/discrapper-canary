n.d(t, { Z: () => d });
var r = n(200651),
    i = n(120356),
    o = n.n(i),
    l = n(780384),
    a = n(410030),
    s = n(345119);
let c = n(17702),
    u = n(647894),
    d = (e) => {
        let { customSize: t, shouldUseThemeColor: n = !1, loading: i, className: d } = e,
            h = (0, a.ZP)(),
            b = n && (0, l.ap)(h) ? u : c;
        return (0, r.jsx)('img', {
            className: o()(s.orbIconSVG, d, { [s.loading]: i }),
            src: b,
            alt: 'Orb Icon',
            style: void 0 !== t ? { height: t } : void 0
        });
    };
