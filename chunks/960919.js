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
        let { shouldUseThemeColor: t = !1, loading: n, className: i, imgClassName: d } = e,
            f = (0, s.ZP)(),
            _ = t && (0, a.ap)(f) ? u : c;
        return (0, r.jsx)('div', {
            role: 'img',
            className: o()(l.orbIconContainer, i, { [l.loading]: n }),
            children: (0, r.jsx)('img', {
                className: o()(l.orbIconSVG, d),
                src: _,
                alt: 'Orb Icon'
            })
        });
    };
