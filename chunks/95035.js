n.d(t, { A: () => c });
var a = n(627968),
    l = n(64700),
    i = n(397927),
    r = n(976860),
    s = n(652215);
let c = l.forwardRef(function (e, t) {
    let { href: n, children: c, onClick: o, onKeyPress: d, focusProps: u, transitionExtras: m, ...x } = e,
        h = l.useCallback(
            (e) => {
                e.repeat ||
                    ((e.charCode === s.Ks6.SPACE || e.charCode === s.Ks6.ENTER) &&
                        (e.preventDefault(), null != n && (0, r.pX)(n, m), o?.()),
                    d?.(e));
            },
            [n, d, o, m],
        ),
        f = l.useCallback(
            (e) => {
                e.metaKey ||
                    e.shiftKey ||
                    0 !== e.button ||
                    (e.preventDefault(), e.stopPropagation(), null != n && (0, r.pX)(n, m), o?.());
            },
            [n, o, m],
        ),
        g = (0, a.jsx)("a", { ref: t, href: n, onClick: f, onKeyPress: h, ...x, children: c });
    return (0, a.jsx)(i.vN3, { ...u, children: g });
});
