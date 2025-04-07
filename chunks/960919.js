n.d(t, { Z: () => d });
var r = n(200651),
    l = n(120356),
    a = n.n(l),
    o = n(780384),
    i = n(410030),
    s = n(865184);
let c = n(17702),
    u = n(647894),
    d = (e) => {
        let { customSize: t, shouldUseThemeColor: n = !1, loading: l, className: d } = e,
            b = (0, i.ZP)(),
            p = n && (0, o.ap)(b) ? u : c;
        return (0, r.jsx)('img', {
            className: a()(s.orbIconSVG, d, { [s.loading]: l }),
            src: p,
            alt: 'Orb Icon',
            style: void 0 !== t ? { height: t } : void 0
        });
    };
