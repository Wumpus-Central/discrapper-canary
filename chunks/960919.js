r.d(t, { Z: () => d });
var n = r(200651),
    l = r(120356),
    s = r.n(l),
    o = r(780384),
    i = r(410030),
    u = r(865184);
let c = r(17702),
    a = r(647894),
    d = (e) => {
        let { customSize: t, shouldUseThemeColor: r = !1, loading: l, className: d } = e,
            p = (0, i.ZP)(),
            m = r && (0, o.ap)(p) ? a : c;
        return (0, n.jsx)('img', {
            className: s()(u.orbIconSVG, d, { [u.loading]: l }),
            src: m,
            alt: 'Orb Icon',
            style: void 0 !== t ? { height: t } : void 0
        });
    };
