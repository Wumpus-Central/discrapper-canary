n.d(l, { default: () => j });
var s = n(54381),
    t = n(473749),
    r = n(481060),
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
        b = t.useMemo(() => h.Hl.map((e) => a.Z.getProduct(e)).filter((e) => null != e), []),
        k = (0, d.l)(b);
    return (0, s.jsx)(i.Gt, {
        value: l,
        children: (0, s.jsxs)(r.Y0X, {
            parentComponent: "CollectiblesRentalsModal",
            transitionState: n,
            size: r.CgR.LARGE,
            children: [
                (0, s.jsxs)(r.xBx, {
                    separator: !1,
                    children: [
                        (0, s.jsx)(r.Heading, {
                            variant: "heading-xl/bold",
                            children: p.intl.string(p.t.bfXHLB),
                        }),
                        (0, s.jsx)(r.olH, { onClick: j }),
                    ],
                }),
                (0, s.jsx)(r.hzk, {
                    className: x.content,
                    children: (0, s.jsx)(r.Den, {
                        className: x.scroller,
                        children: (0, s.jsx)("div", {
                            className: x.grid,
                            children: (0, s.jsx)(u.zp.Provider, {
                                value: {
                                    isRental: !0,
                                    rentalDuration: _,
                                },
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
