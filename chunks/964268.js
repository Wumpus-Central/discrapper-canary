n.d(t, {
    Pv: () => _,
    XF: () => E,
});
var r = n(54381),
    i = n(473749),
    a = n(467368),
    o = n(409813),
    s = n(126982),
    l = n(336079),
    c = n(922987),
    u = n(748714),
    d = n(388032);
let f = (e) => {
        let {
                skuId: t,
                analyticsSourceLocation: n,
                analyticsLocations: i,
                orbProductContext: a,
                isRedeeming: o,
                orbRedemptionError: s,
                onRedeemVirtualCurrency: l,
                isRental: f,
            } = e,
            {
                isStepLoading: p,
                orbPriceAmount: _,
                orbBalanceToDisplay: m,
                onClickCheckout: h,
                showCollectiblesDiscountWarning: g,
                errorMessage: E,
            } = (0, c.sF)({
                skuId: t,
                analyticsSourceLocation: n,
                analyticsLocations: i,
                orbProductContext: a,
                orbRedemptionError: s,
                onRedeemVirtualCurrency: l,
            }),
            {
                disabled: b,
                tooltipText: y,
                text: O,
            } = (0, u.Do)({
                orbBalance: m,
                orbPriceAmount: _,
                isRental: f,
            });
        return {
            isStepLoading: p,
            skuId: t,
            reviewBodyContent: (0, r.jsx)(u.A3, {
                skuId: t,
                orbPriceAmount: _,
                orbBalance: m,
                renderWithoutContainer: !0,
            }),
            reviewBodyLegalContent: null,
            primaryCTAButtonProps: {
                onClick: h,
                loading: o,
                text: O,
                disabled: b,
                tooltipText: y,
            },
            warningMessage: g ? d.intl.format(d.t.fsOXXO, {}) : null,
            errorMessage: E,
        };
    },
    p = (e) => {
        var t;
        let {
                renderStep: n,
                paymentModalStepProps: r,
                checkoutContext: {
                    skuId: i,
                    analyticsLocations: a,
                    analyticsSourceLocation: o,
                    flowSpecificOptions: s,
                },
            } = e,
            l = null != (t = s.isRental) && t,
            { handleClose: u } = r;
        (0, c.PR)({ handleClose: u });
        let { orbProductContext: d, isRedeeming: p, orbRedemptionError: _, onRedeemVirtualCurrency: m } = g(),
            h = f({
                skuId: i,
                analyticsLocations: a,
                analyticsSourceLocation: o,
                orbProductContext: d,
                isRedeeming: p,
                orbRedemptionError: _,
                onRedeemVirtualCurrency: m,
                isRental: l,
            });
        return n({
            unifiedStepProps: h,
            paymentModalStepProps: r,
        });
    },
    _ = (e) => {
        let { onClose: t, step: n } = e;
        return (0, r.jsx)(s.Z, {
            isOrbCheckout: !0,
            step: n,
            onClose: () => t(!1),
        });
    },
    m = (0, a.Dz)(),
    h = (0, i.createContext)({
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
    }),
    g = () => (0, i.useContext)(h),
    E = (e) => {
        var t;
        let {
                skuId: n,
                loadId: i,
                onCheckoutSuccess: a,
                analyticsLocations: s,
                analyticsSourceLocation: u,
                renderModalProps: d,
                flowSpecificOptions: f,
                children: _,
            } = e,
            g = null != (t = f.isRental) && t,
            {
                orbProductContext: E,
                isRedeeming: b,
                orbRedemptionError: y,
                onRedeemVirtualCurrency: O,
            } = (0, l.Gw)({
                skuId: n,
                loadId: i,
                onCheckoutSuccess: a,
                analyticsLocations: s,
                isRental: g,
            }),
            v = (0, c.HR)({
                onClose: d.onClose,
                skuId: n,
                analyticsLocations: s,
                analyticsSourceLocation: u,
                orbProductContext: E,
            });
        return (0, r.jsx)(m.Provider, {
            value: {
                enableStepControllers: !0,
                unifiedCheckoutStepMappings: { [o.h8.REVIEW]: { StepController: p } },
                checkoutContext: {
                    loadId: i,
                    skuId: n,
                    onCheckoutSuccess: a,
                    analyticsLocations: s,
                    analyticsSourceLocation: u,
                    flowSpecificOptions: f,
                },
                paymentModalProps: v,
                renderModalProps: d,
            },
            children: (0, r.jsx)(h.Provider, {
                value: {
                    orbProductContext: E,
                    isRedeeming: b,
                    orbRedemptionError: y,
                    onRedeemVirtualCurrency: O,
                },
                children: _,
            }),
        });
    };
