"use strict";
n.d(t, { A: () => l });
var i = n(627968),
    r = n(64700),
    s = n(187322),
    a = n(976860),
    o = n(650583);
let l = r.forwardRef(function (e, t) {
    let { href: n, children: l, onClick: u, onKeyPress: c, focusProps: d, transitionExtras: _, ...f } = e,
        h = r.useCallback(
            (e) => {
                e.repeat ||
                    ((e.key === o.dh.SPACE || e.key === o.dh.ENTER) &&
                        (e.preventDefault(), null != n && (0, a.pX)(n, _), u?.()),
                    c?.(e));
            },
            [n, c, u, _],
        ),
        p = r.useCallback(
            (e) => {
                e.metaKey ||
                    e.shiftKey ||
                    0 !== e.button ||
                    (e.preventDefault(), e.stopPropagation(), null != n && (0, a.pX)(n, _), u?.());
            },
            [n, u, _],
        ),
        E = (0, i.jsx)("a", { ref: t, href: n, onClick: p, onKeyPress: h, ...f, children: l });
    return (0, i.jsx)(s.vN, { ...d, children: E });
});
