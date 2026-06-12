e.r(o), e.d(o, { default: () => a });
var n = e(627968);
e(64700);
var i = e(606096),
    s = e(189252),
    r = e(851580),
    p = e(251333),
    c = e(375708);
function a(t) {
    let { onOpen: o, onClose: e } = t;
    return (0, n.jsx)(p.$, {
        onOpen: o,
        onClose: e,
        popoutPosition: "bottom",
        popoutAlign: "right",
        children: (t, o, e, p, a) =>
            (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(s.A, {
                        ...e,
                        ref: a,
                        onClick: t,
                        icon: i.c,
                        tooltip: c.intl.string(c.t["2pAkDA"]),
                        selected: o,
                        showBadge: p,
                    }),
                    (0, n.jsx)(r.v, { location: "bookmarks-button", targetElementRef: a }),
                ],
            }),
    });
}
