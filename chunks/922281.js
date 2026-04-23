n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var r = n(606096),
    a = n(189252),
    l = n(851580),
    s = n(44022),
    o = n(985018);
function d(e) {
    let { onOpen: t, onClose: n } = e;
    return (0, i.jsx)(s.$, {
        onOpen: t,
        onClose: n,
        popoutPosition: "bottom",
        popoutAlign: "right",
        children: (e, t, n, s, d) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(a.A, {
                        ...n,
                        ref: d,
                        onClick: e,
                        icon: r.c,
                        tooltip: o.intl.string(o.t["2pAkDA"]),
                        selected: t,
                        showBadge: s,
                    }),
                    (0, i.jsx)(l.v, { location: "bookmarks-button", targetElementRef: d }),
                ],
            }),
    });
}
