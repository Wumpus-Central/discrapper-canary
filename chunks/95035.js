a.d(t, { A: () => u });
var n = a(477900),
    r = a(582128),
    s = a(559106),
    l = a(976860),
    p = a(650583);
function u(e) {
    let { href: t, children: a, onClick: u, onKeyPress: c, focusProps: h, transitionExtras: i, ref: d, ...k } = e,
        o = r.useCallback(
            (e) => {
                e.repeat ||
                    ((e.key === p.dh.SPACE || e.key === p.dh.ENTER) &&
                        (e.preventDefault(), null != t && (0, l.pX)(t, i), u?.()),
                    c?.(e));
            },
            [t, c, u, i],
        ),
        f = r.useCallback(
            (e) => {
                e.metaKey ||
                    e.shiftKey ||
                    0 !== e.button ||
                    (e.preventDefault(), e.stopPropagation(), null != t && (0, l.pX)(t, i), u?.());
            },
            [t, u, i],
        ),
        C = (0, n.jsx)("a", { ref: d, href: t, onClick: f, onKeyPress: o, ...k, children: a });
    return (0, n.jsx)(s.vN, { ...h, children: C });
}
