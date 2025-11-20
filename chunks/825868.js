n.d(l, { default: () => j });
var s = n(54381),
    r = n(473749),
    t = n(481060),
    i = n(906732),
    a = n(597688),
    c = n(763941),
    d = n(937510),
    o = n(653126),
    u = n(786040),
    h = n(215023),
    p = n(388032),
    x = n(369645);
let j = (e) => {
    let { analyticsLocations: l, transitionState: n, onClose: j } = e,
        _ = (0, c.IT)("CollectiblesRentalsModal"),
        b = r.useMemo(() => h.Hl.map((e) => a.Z.getProduct(e)).filter((e) => null != e), []),
        k = (0, d.l)(b);
    return (0, s.jsx)(i.Gt, {
        value: l,
        children: (0, s.jsxs)(t.Y0X, {
            parentComponent: "CollectiblesRentalsModal",
            transitionState: n,
            size: t.CgR.LARGE,
            children: [
                (0, s.jsxs)(t.xBx, {
                    separator: !1,
                    children: [
                        (0, s.jsx)(t.Heading, {
                            variant: "heading-xl/bold",
                            children: p.intl.string(p.t.bfXHLB),
                        }),
                        (0, s.jsx)(t.olH, { onClick: j }),
                    ],
                }),
                (0, s.jsx)(t.hzk, {
                    className: x.content,
                    children: (0, s.jsx)(t.Den, {
                        className: x.scroller,
                        children: (0, s.jsx)("div", {
                            className: x.grid,
                            children: (0, s.jsx)(u.zp.Provider, {
                                value: { rentalDuration: _ },
                                children: k.map((e) =>
                                    (0, s.jsx)(
                                        o.Z,
                                        {
                                            skuId: null == e ? void 0 : e.skuId,
                                            prioritizedCurrency: u.tA.ORBS,
                                        },
                                        "rental_inner_".concat(e.skuId),
                                    ),
                                ),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
