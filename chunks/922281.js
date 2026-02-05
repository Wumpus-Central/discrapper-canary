r.d(t, { A: () => u });
var s = r(627968);
r(64700);
var n = r(397927),
    l = r(58736),
    a = r(851580),
    i = r(44022),
    o = r(985018);
function u(e) {
    let { onOpen: t, onClose: r, className: u } = e;
    return (0, s.jsx)(i.$, {
        onOpen: t,
        onClose: r,
        popoutPosition: "bottom",
        popoutAlign: "right",
        children: (e, t, r, i, c) =>
            (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)(l.In, {
                        ...r,
                        ref: c,
                        className: u,
                        onClick: e,
                        icon: n.cFy,
                        "aria-label": o.intl.string(o.t["2pAkDA"]),
                        tooltip: t ? null : o.intl.string(o.t["2pAkDA"]),
                        selected: t,
                        showBadge: i,
                    }),
                    (0, s.jsx)(a.v, { location: "bookmarks-button", targetElementRef: c }),
                ],
            }),
    });
}
