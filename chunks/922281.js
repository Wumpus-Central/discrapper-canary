t.r(n), t.d(n, { default: () => d });
var a = t(627968);
t(64700);
var l = t(606096),
    i = t(189252),
    r = t(851580),
    s = t(251333),
    o = t(985018);
function d(e) {
    let { onOpen: n, onClose: t } = e;
    return (0, a.jsx)(s.$, {
        onOpen: n,
        onClose: t,
        popoutPosition: "bottom",
        popoutAlign: "right",
        children: (e, n, t, s, d) =>
            (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(i.A, {
                        ...t,
                        ref: d,
                        onClick: e,
                        icon: l.c,
                        tooltip: o.intl.string(o.t["2pAkDA"]),
                        selected: n,
                        showBadge: s,
                    }),
                    (0, a.jsx)(r.v, { location: "bookmarks-button", targetElementRef: d }),
                ],
            }),
    });
}
