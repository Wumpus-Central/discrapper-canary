l.d(a, { default: () => m });
var t = l(54381),
    s = l(473749),
    r = l(197723),
    d = l(159691),
    n = l(481060),
    i = l(906732),
    c = l(597688),
    o = l(763941),
    u = l(298505),
    b = l(653126),
    h = l(786040),
    x = l(215023),
    p = l(388032),
    j = l(797991);
let m = (e) => {
    let { analyticsLocations: a, transitionState: l, onClose: m } = e,
        v = (0, o.IT)("CollectiblesRentalsModal"),
        C = s.useMemo(() => x.Hl.map((e) => c.Z.getProduct(e)).filter((e) => null != e), []),
        g = (0, u.R)(C);
    return (0, t.jsx)(i.Gt, {
        value: a,
        children: (0, t.jsx)(d.IX, {
            size: "xl",
            onClose: m,
            transitionState: l,
            children: (0, t.jsxs)("div", {
                className: j.modal,
                children: [
                    (0, t.jsxs)("div", {
                        className: j.header,
                        children: [
                            (0, t.jsxs)("div", {
                                className: j.titleContainer,
                                children: [
                                    (0, t.jsx)(n.Heading, {
                                        variant: "heading-xl/bold",
                                        children: p.intl.string(p.t.bfXHLB),
                                    }),
                                    (0, t.jsx)(n.IGR, {
                                        text: p.intl.string(p.t.oW0eUd),
                                        disableColor: !0,
                                    }),
                                ],
                            }),
                            (0, t.jsx)("button", {
                                className: j.closeButton,
                                onClick: m,
                                "aria-label": p.intl.string(p.t.cpT0Cq),
                                children: (0, t.jsx)(r.D, {}),
                            }),
                        ],
                    }),
                    (0, t.jsx)(n.Den, {
                        className: j.scroller,
                        children: (0, t.jsx)("div", {
                            className: j.grid,
                            children: (0, t.jsx)(h.zp.Provider, {
                                value: {
                                    rentalDuration: v,
                                    flattenProductVariants: !0,
                                },
                                children: g.map((e) =>
                                    (0, t.jsx)(
                                        b.Z,
                                        {
                                            skuId: null == e ? void 0 : e.skuId,
                                            prioritizedCurrency: h.tA.ORBS,
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
