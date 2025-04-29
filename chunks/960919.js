n.d(t, { Z: () => d });
var r = n(255367),
    i = n(120356),
    l = n.n(i),
    o = n(780384),
    s = n(410030),
    a = n(865184);
let c = n(17702),
    u = n(647894),
    d = (e) => {
        let { customSize: t, shouldUseThemeColor: n = !1, loading: i, className: d } = e,
            h = (0, s.ZP)(),
            p = n && (0, o.ap)(h) ? u : c;
        return (0, r.jsx)('img', {
            className: l()(a.orbIconSVG, d, { [a.loading]: i }),
            src: p,
            alt: 'Orb Icon',
            style: void 0 !== t ? { height: t } : void 0
        });
    };
