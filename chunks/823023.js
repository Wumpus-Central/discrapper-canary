r.d(n, {
    N: function () {
        return g;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(666912),
    l = r(481060),
    u = r(450096),
    c = r(981631),
    d = r(319378);
let f = 200,
    _ = {
        from: { opacity: 1 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 200 }
    },
    h = {
        ..._,
        config: { duration: 50 }
    },
    p = {
        ..._,
        config: (e, n) => (n ? { duration: 800 } : { duration: 200 })
    };
function m(e) {
    let { readyState: n, placeholderImg: r, placeholderStyle: i } = e,
        u = n === c.zo9.LOADING,
        [p] = s.useState(() => Date.now()),
        m = n === c.zo9.READY && Date.now() - p < f,
        g = (0, l.useTransition)(u && null != r, m ? h : _);
    return (0, a.jsx)(a.Fragment, {
        children: g(
            (e, n) =>
                n &&
                (0, a.jsx)(o.animated.img, {
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
    let { readyState: n, aspectRatio: r, placeholder: i, placeholderVersion: f, placeholderStyle: _, children: h } = e,
        g = n === c.zo9.LOADING,
        [E] = s.useState(g),
        [v, I] = s.useState(!1),
        T = (0, u.L)(i, f, E);
    s.useEffect(() => {
        let e = setTimeout(() => {
            I(!0);
        }, 2000);
        return () => {
            clearTimeout(e);
        };
    }, [E]);
    let b = (0, l.useTransition)(g && v, p);
    return (0, a.jsxs)('div', {
        className: d.loadingOverlay,
        style: { aspectRatio: r },
        children: [
            h,
            null != T &&
                (0, a.jsx)(m, {
                    readyState: n,
                    placeholderImg: T,
                    placeholderStyle: _
                }),
            b(
                (e, n) =>
                    n &&
                    (0, a.jsx)(o.animated.div, {
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
