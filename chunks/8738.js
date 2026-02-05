"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    a = n(990078),
    s = n(397927),
    o = n(827437),
    l = n(985018),
    u = n(380297);
function c(e) {
    let t = i.useRef(null);
    return (0, r.jsx)(o.A, {
        ...e,
        targetElementRef: t,
        children: (e) =>
            (0, r.jsx)(a.m, {
                targetElementRef: t,
                text: l.intl.string(l.t["UKOtz+"]),
                "aria-label": !1,
                children: (0, r.jsx)(s.DUT, {
                    ...e,
                    innerRef: t,
                    "aria-label": l.intl.string(l.t["UKOtz+"]),
                    onClick: (t) => {
                        t.stopPropagation(), e.onClick(t);
                    },
                    onContextMenu: (t) => {
                        t.preventDefault(), e.onClick(t);
                    },
                    className: u.He,
                    children: (0, r.jsx)(s.jNK, { color: s.LU0.colors.INTERACTIVE_TEXT_DEFAULT, size: "xs" }),
                }),
            }),
    });
}
