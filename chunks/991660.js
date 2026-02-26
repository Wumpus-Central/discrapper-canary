i.d(e, { A: () => o });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(158954),
    u = i(88744);
function o(t) {
    let { children: e, gradientClassName: i, onScroll: s, ...o } = t,
        c = l.useRef(null),
        [d, p] = l.useState(!0),
        S = l.useCallback(() => {
            c.current?.isScrolledToBottom() === !0 ? p(!1) : p(!0);
        }, [c]),
        I = l.useCallback(
            (t) => {
                S(), null != s && s(t);
            },
            [S, s],
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(r.ChK, {
                fade: !0,
                ...o,
                ref: (t) => {
                    null != t && ((c.current = t), S());
                },
                onScroll: I,
                children: e,
            }),
            (0, n.jsx)("div", { className: a()(u.D, i), "data-shown": d }),
        ],
    });
}
