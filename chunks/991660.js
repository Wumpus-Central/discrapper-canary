n.d(e, { A: () => o });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    u = n(158954),
    a = n(48302);
function o(t) {
    let { children: e, gradientClassName: n, ...r } = t,
        o = l.useRef(null),
        [c, d] = l.useState(!0),
        A = () => {
            o.current?.isScrolledToBottom() === !0 ? d(!1) : d(!0);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(u.ChK, {
                fade: !0,
                ...r,
                ref: (t) => {
                    null != t && ((o.current = t), A());
                },
                onScroll: A,
                children: e,
            }),
            (0, i.jsx)("div", { className: s()(a.D, n), "data-shown": c }),
        ],
    });
}
