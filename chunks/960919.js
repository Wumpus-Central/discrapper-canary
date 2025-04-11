n.d(t, { Z: () => d });
var r = n(200651),
    i = n(120356),
    o = n.n(i),
    l = n(780384),
    s = n(410030),
    a = n(865184);
let c = n(17702),
    u = n(647894),
    d = (e) => {
        let { customSize: t, shouldUseThemeColor: n = !1, loading: i, className: d } = e,
            p = (0, s.ZP)(),
            _ = n && (0, l.ap)(p) ? u : c;
        return (0, r.jsx)('img', {
            className: o()(a.orbIconSVG, d, { [a.loading]: i }),
            src: _,
            alt: 'Orb Icon',
            style: void 0 !== t ? { height: t } : void 0
        });
    };
