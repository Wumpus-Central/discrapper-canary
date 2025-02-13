n.d(t, { N: () => h }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(642128),
    s = n(481060),
    o = n(450096),
    l = n(981631),
    u = n(928415);
let c = 200,
    d = {
        from: { opacity: 1 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 200 }
    },
    f = {
        ...d,
        config: { duration: 50 }
    },
    _ = {
        ...d,
        config: (e, t) => (t ? { duration: 800 } : { duration: 200 })
    };
function p(e) {
    let { readyState: t, placeholderImg: n, placeholderStyle: o } = e,
        _ = t === l.zo9.LOADING,
        [p] = r.useState(() => Date.now()),
        h = t === l.zo9.READY && Date.now() - p < c,
        m = (0, s.Yzy)(_ && null != n, h ? f : d);
    return (0, i.jsx)(i.Fragment, {
        children: m(
            (e, t) =>
                t &&
                (0, i.jsx)(a.animated.img, {
                    style: {
                        ...o,
                        ...e
                    },
                    className: u.imagePlaceholder,
                    src: n,
                    alt: ''
                })
        )
    });
}
function h(e) {
    let { readyState: t, aspectRatio: n, placeholder: c, placeholderVersion: d, placeholderStyle: f, children: h } = e,
        m = t === l.zo9.LOADING,
        [g] = r.useState(m),
        [E, v] = r.useState(!1),
        y = (0, o.L)(c, d, g);
    r.useEffect(() => {
        let e = setTimeout(() => {
            v(!0);
        }, 2000);
        return () => {
            clearTimeout(e);
        };
    }, [g]);
    let I = (0, s.Yzy)(m && E, _);
    return (0, i.jsxs)('div', {
        className: u.loadingOverlay,
        style: { aspectRatio: n },
        children: [
            h,
            null != y &&
                (0, i.jsx)(p, {
                    readyState: t,
                    placeholderImg: y,
                    placeholderStyle: f
                }),
            I(
                (e, t) =>
                    t &&
                    (0, i.jsx)(a.animated.div, {
                        style: e,
                        className: u.imageLoadingOverlay,
                        children: (0, i.jsx)(s.$jN, {
                            type: s.RAz.SPINNING_CIRCLE_SIMPLE,
                            className: u.cornerLoadingSpinner
                        })
                    })
            )
        ]
    });
}
