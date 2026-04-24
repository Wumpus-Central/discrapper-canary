n.d(t, { A: () => c });
var l = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    i = n(689175),
    o = n(15339);
function c(e) {
    let { children: t, gradientClassName: n, onScroll: r, ...c } = e,
        d = a.useRef(null),
        [u, m] = a.useState(!0),
        p = a.useCallback(() => {
            d.current?.isScrolledToBottom() === !0 ? m(!1) : m(!0);
        }, [d]),
        h = a.useCallback(
            (e) => {
                p(), null != r && r(e);
            },
            [p, r],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(i.Ch, {
                fade: !0,
                ...c,
                ref: (e) => {
                    null != e && ((d.current = e), p());
                },
                onScroll: h,
                children: t,
            }),
            (0, l.jsx)("div", { className: s()(o.D, n), "data-shown": u }),
        ],
    });
}
