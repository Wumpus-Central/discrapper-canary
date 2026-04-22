e.d(n, { A: () => A });
var i = e(627968),
    l = e(64700),
    r = e(990078),
    a = e(939249),
    s = e(365199),
    o = e(827734),
    c = e(827437),
    u = e(985018),
    d = e(514566);
function A(t) {
    let n = l.useRef(null);
    return (0, i.jsx)(c.A, {
        ...t,
        targetElementRef: n,
        children: (t) =>
            (0, i.jsx)(r.m, {
                targetElementRef: n,
                text: u.intl.string(u.t["UKOtz+"]),
                "aria-label": !1,
                children: (0, i.jsx)(a.D, {
                    ...t,
                    innerRef: n,
                    "aria-label": u.intl.string(u.t["UKOtz+"]),
                    onClick: (n) => {
                        n.stopPropagation(), t.onClick(n);
                    },
                    onContextMenu: (n) => {
                        n.preventDefault(), t.onClick(n);
                    },
                    className: d.He,
                    children: (0, i.jsx)(s.j, { color: o.A.colors.INTERACTIVE_TEXT_DEFAULT, size: "xs" }),
                }),
            }),
    });
}
