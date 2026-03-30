"use strict";
n.d(t, { A: () => o });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(976860),
    r = n(652215);
let o = s.forwardRef(function (e, t) {
    let { href: n, children: o, onClick: c, onKeyPress: d, focusProps: u, transitionExtras: h, ...A } = e,
        m = s.useCallback(
            (e) => {
                e.repeat ||
                    ((e.charCode === r.Ks6.SPACE || e.charCode === r.Ks6.ENTER) &&
                        (e.preventDefault(), null != n && (0, a.pX)(n, h), c?.()),
                    d?.(e));
            },
            [n, d, c, h],
        ),
        _ = s.useCallback(
            (e) => {
                e.metaKey ||
                    e.shiftKey ||
                    0 !== e.button ||
                    (e.preventDefault(), e.stopPropagation(), null != n && (0, a.pX)(n, h), c?.());
            },
            [n, c, h],
        ),
        g = (0, i.jsx)("a", { ref: t, href: n, onClick: _, onKeyPress: m, ...A, children: o });
    return (0, i.jsx)(l.vN3, { ...u, children: g });
});
