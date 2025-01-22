r.d(n, {
    N: function () {
        return g;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(642128),
    l = r(481060),
    u = r(450096),
    c = r(981631),
    d = r(319378);
let f = 200,
    p = {
        from: { opacity: 1 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 200 }
    },
    h = {
        ...p,
        config: { duration: 50 }
    },
    _ = {
        ...p,
        config: (e, n) => (n ? { duration: 800 } : { duration: 200 })
    };
function m(e) {
    let { readyState: n, placeholderImg: r, placeholderStyle: i } = e,
        u = n === c.zo9.LOADING,
        [_] = o.useState(() => Date.now()),
        m = n === c.zo9.READY && Date.now() - _ < f,
        g = (0, l.useTransition)(u && null != r, m ? h : p);
    return (0, a.jsx)(a.Fragment, {
        children: g(
            (e, n) =>
                n &&
                (0, a.jsx)(s.animated.img, {
                    style: {
                        ...i,
                        ...e
                    },
                    className: d.imagePlaceholder,
                    src: r,
                    alt: ''
                })
        )
    });
}
function g(e) {
    let { readyState: n, aspectRatio: r, placeholder: i, placeholderVersion: f, placeholderStyle: p, children: h } = e,
        g = n === c.zo9.LOADING,
        [E] = o.useState(g),
        [v, y] = o.useState(!1),
        b = (0, u.L)(i, f, E);
    o.useEffect(() => {
        let e = setTimeout(() => {
            y(!0);
        }, 2000);
        return () => {
            clearTimeout(e);
        };
    }, [E]);
    let I = (0, l.useTransition)(g && v, _);
    return (0, a.jsxs)('div', {
        className: d.loadingOverlay,
        style: { aspectRatio: r },
        children: [
            h,
            null != b &&
                (0, a.jsx)(m, {
                    readyState: n,
                    placeholderImg: b,
                    placeholderStyle: p
                }),
            I(
                (e, n) =>
                    n &&
                    (0, a.jsx)(s.animated.div, {
                        style: e,
                        className: d.imageLoadingOverlay,
                        children: (0, a.jsx)(l.Spinner, {
                            type: l.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
                            className: d.cornerLoadingSpinner
                        })
                    })
            )
        ]
    });
}
