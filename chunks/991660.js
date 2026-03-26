i.d(e, { A: () => o });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(158954),
    u = i(829403);
function o(t) {
    let { children: e, gradientClassName: i, onScroll: s, ...o } = t,
        c = l.useRef(null),
        [d, S] = l.useState(!0),
        p = l.useCallback(() => {
            c.current?.isScrolledToBottom() === !0 ? S(!1) : S(!0);
        }, [c]),
        I = l.useCallback(
            (t) => {
                p(), null != s && s(t);
            },
            [p, s],
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(r.ChK, {
                fade: !0,
                ...o,
                ref: (t) => {
                    null != t && ((c.current = t), p());
                },
                onScroll: I,
                children: e,
            }),
            (0, n.jsx)("div", { className: a()(u.D, i), "data-shown": d }),
        ],
    });
}
