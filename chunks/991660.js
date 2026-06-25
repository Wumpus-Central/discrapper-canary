n.d(e, { A: () => i });
var s = n(627968),
    r = n(64700),
    a = n(503698),
    t = n.n(a),
    u = n(689175),
    d = n(585003);
function i(l) {
    let { children: e, gradientClassName: n, onScroll: a, ...i } = l,
        c = r.useRef(null),
        [o, h] = r.useState(!0),
        _ = r.useCallback(() => {
            c.current?.isScrolledToBottom() === !0 ? h(!1) : h(!0);
        }, [c]),
        p = r.useCallback(
            (l) => {
                _(), null != a && a(l);
            },
            [_, a],
        );
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(u.Ch, {
                fade: !0,
                ...i,
                ref: (l) => {
                    null != l && ((c.current = l), _());
                },
                onScroll: p,
                children: e,
            }),
            (0, s.jsx)("div", { className: t()(d.D, n), "data-shown": o }),
        ],
    });
}
