"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(689175),
    c = n(15339);
function u(e) {
    let { children: t, gradientClassName: n, onScroll: r, ...u } = e,
        o = s.useRef(null),
        [d, p] = s.useState(!0),
        f = s.useCallback(() => {
            o.current?.isScrolledToBottom() === !0 ? p(!1) : p(!0);
        }, [o]),
        _ = s.useCallback(
            (e) => {
                f(), null != r && r(e);
            },
            [f, r],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.Ch, {
                fade: !0,
                ...u,
                ref: (e) => {
                    null != e && ((o.current = e), f());
                },
                onScroll: _,
                children: t,
            }),
            (0, i.jsx)("div", { className: a()(c.D, n), "data-shown": d }),
        ],
    });
}
