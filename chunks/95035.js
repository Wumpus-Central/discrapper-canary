"use strict";
n.d(t, { A: () => o });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(976860),
    a = n(652215);
let o = s.forwardRef(function (e, t) {
    let { href: n, children: o, onClick: c, onKeyPress: d, focusProps: u, ...h } = e,
        A = s.useCallback(
            (e) => {
                e.repeat ||
                    ((e.charCode === a.Ks6.SPACE || e.charCode === a.Ks6.ENTER) &&
                        (e.preventDefault(), null != n && (0, r.pX)(n), c?.()),
                    d?.(e));
            },
            [n, d, c],
        ),
        p = s.useCallback(
            (e) => {
                e.metaKey ||
                    e.shiftKey ||
                    0 !== e.button ||
                    (e.preventDefault(), e.stopPropagation(), null != n && (0, r.pX)(n), c?.());
            },
            [n, c],
        ),
        g = (0, i.jsx)("a", { ref: t, href: n, onClick: p, onKeyPress: A, ...h, children: o });
    return (0, i.jsx)(l.vN3, { ...u, children: g });
});
