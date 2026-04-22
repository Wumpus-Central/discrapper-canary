n.d(t, { A: () => c });
var r = n(627968),
    a = n(64700),
    i = n(187322),
    s = n(976860),
    l = n(650583);
let c = a.forwardRef(function (e, t) {
    let { href: n, children: c, onClick: o, onKeyPress: d, focusProps: u, transitionExtras: _, ...m } = e,
        p = a.useCallback(
            (e) => {
                e.repeat ||
                    ((e.key === l.dh.SPACE || e.key === l.dh.ENTER) &&
                        (e.preventDefault(), null != n && (0, s.pX)(n, _), o?.()),
                    d?.(e));
            },
            [n, d, o, _],
        ),
        f = a.useCallback(
            (e) => {
                e.metaKey ||
                    e.shiftKey ||
                    0 !== e.button ||
                    (e.preventDefault(), e.stopPropagation(), null != n && (0, s.pX)(n, _), o?.());
            },
            [n, o, _],
        ),
        A = (0, r.jsx)("a", { ref: t, href: n, onClick: f, onKeyPress: p, ...m, children: c });
    return (0, r.jsx)(i.vN, { ...u, children: A });
});
