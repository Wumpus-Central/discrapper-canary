"use strict";
n.d(t, { A: () => o });
var i = n(627968),
    r = n(64700),
    a = n(187322),
    s = n(976860),
    l = n(650583);
let o = r.forwardRef(function (e, t) {
    let { href: n, children: o, onClick: d, onKeyPress: c, focusProps: u, transitionExtras: _, ...E } = e,
        A = r.useCallback(
            (e) => {
                e.repeat ||
                    ((e.key === l.dh.SPACE || e.key === l.dh.ENTER) &&
                        (e.preventDefault(), null != n && (0, s.pX)(n, _), d?.()),
                    c?.(e));
            },
            [n, c, d, _],
        ),
        h = r.useCallback(
            (e) => {
                e.metaKey ||
                    e.shiftKey ||
                    0 !== e.button ||
                    (e.preventDefault(), e.stopPropagation(), null != n && (0, s.pX)(n, _), d?.());
            },
            [n, d, _],
        ),
        I = (0, i.jsx)("a", { ref: t, href: n, onClick: h, onKeyPress: A, ...E, children: o });
    return (0, i.jsx)(a.vN, { ...u, children: I });
});
