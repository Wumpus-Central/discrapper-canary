s.d(l, { default: () => m });
var r = s(54381),
    t = s(473749),
    a = s(197723),
    n = s(159691),
    i = s(481060),
    d = s(906732),
    c = s(597688),
    o = s(763941),
    u = s(298505),
    h = s(653126),
    p = s(786040),
    x = s(215023),
    _ = s(388032),
    b = s(369645);
let m = (e) => {
    let { analyticsLocations: l, transitionState: s, onClose: m } = e,
        j = (0, o.IT)("CollectiblesRentalsModal"),
        v = t.useMemo(() => x.Hl.map((e) => c.Z.getProduct(e)).filter((e) => null != e), []),
        g = (0, u.R)(v);
    return (0, r.jsx)(d.Gt, {
        value: l,
        children: (0, r.jsx)(n.IX, {
            size: "xl",
            onClose: m,
            transitionState: s,
            children: (0, r.jsxs)("div", {
                className: b.modal,
                children: [
                    (0, r.jsxs)("div", {
                        className: b.header,
                        children: [
                            (0, r.jsx)(i.Heading, {
                                variant: "heading-xl/bold",
                                children: _.intl.string(_.t.bfXHLB),
                            }),
                            (0, r.jsx)("button", {
                                className: b.closeButton,
                                onClick: m,
                                "aria-label": _.intl.string(_.t.cpT0Cq),
                                children: (0, r.jsx)(a.D, {}),
                            }),
                        ],
                    }),
                    (0, r.jsx)(i.Den, {
                        className: b.scroller,
                        children: (0, r.jsx)("div", {
                            className: b.grid,
                            children: (0, r.jsx)(p.zp.Provider, {
                                value: {
                                    rentalDuration: j,
                                    flattenProductVariants: !0,
                                },
                                children: g.map((e) =>
                                    (0, r.jsx)(
                                        h.Z,
                                        {
                                            skuId: null == e ? void 0 : e.skuId,
                                            prioritizedCurrency: p.tA.ORBS,
                                        },
                                        "rental_inner_".concat(e.skuId),
                                    ),
                                ),
                            }),
                        }),
                    }),
                ],
            }),
        }),
    });
};
