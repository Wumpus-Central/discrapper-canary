n.d(t, { A: () => o });
var i = n(627968),
    r = n(64700),
    a = n(397927),
    s = n(976860),
    l = n(650583);
let o = r.forwardRef(function (e, t) {
    let { href: n, children: o, onClick: c, onKeyPress: d, focusProps: u, transitionExtras: _, ...m } = e,
        p = r.useCallback(
            (e) => {
                e.repeat ||
                    ((e.key === l.dh.SPACE || e.key === l.dh.ENTER) &&
                        (e.preventDefault(), null != n && (0, s.pX)(n, _), c?.()),
                    d?.(e));
            },
            [n, d, c, _],
        ),
        A = r.useCallback(
            (e) => {
                e.metaKey ||
                    e.shiftKey ||
                    0 !== e.button ||
                    (e.preventDefault(), e.stopPropagation(), null != n && (0, s.pX)(n, _), c?.());
            },
            [n, c, _],
        ),
        g = (0, i.jsx)("a", { ref: t, href: n, onClick: A, onKeyPress: p, ...m, children: o });
    return (0, i.jsx)(a.vN3, { ...u, children: g });
});
