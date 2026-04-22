n.d(t, { A: () => d });
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(599319),
    o = n(585003);
function d(e) {
    let { children: t, gradientClassName: n, onScroll: r, ...d } = e,
        c = l.useRef(null),
        [u, m] = l.useState(!0),
        _ = l.useCallback(() => {
            c.current?.isScrolledToBottom() === !0 ? m(!1) : m(!0);
        }, [c]),
        p = l.useCallback(
            (e) => {
                _(), null != r && r(e);
            },
            [_, r],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(s.Ch, {
                fade: !0,
                ...d,
                ref: (e) => {
                    null != e && ((c.current = e), _());
                },
                onScroll: p,
                children: t,
            }),
            (0, a.jsx)("div", { className: i()(o.D, n), "data-shown": u }),
        ],
    });
}
