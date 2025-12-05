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
                rentalDuration: f,
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
                rentalDuration: f,
            });
        return {
            isStepLoading: p,
            skuId: t,
            reviewBodyContent: (0, r.jsx)(u.A3, {
                skuId: t,
                orbPriceAmount: _,
                orbBalance: m,
                renderWithoutContainer: !0,
                rentalDuration: f,
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
            l = null != (t = s.rentalDuration) ? t : void 0,
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
                rentalDuration: l,
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
        let {
                skuId: t,
                loadId: n,
                onCheckoutSuccess: i,
                analyticsLocations: a,
                analyticsSourceLocation: s,
                renderModalProps: u,
                flowSpecificOptions: d,
                children: f,
            } = e,
            _ = d.rentalDuration,
            {
                orbProductContext: g,
                isRedeeming: E,
                orbRedemptionError: b,
                onRedeemVirtualCurrency: y,
            } = (0, l.Gw)({
                skuId: t,
                loadId: n,
                onCheckoutSuccess: i,
                analyticsLocations: a,
                rentalDuration: _,
            }),
            O = (0, c.HR)({
                onClose: u.onClose,
                skuId: t,
                analyticsLocations: a,
                analyticsSourceLocation: s,
                orbProductContext: g,
            });
        return (0, r.jsx)(m.Provider, {
            value: {
                enableStepControllers: !0,
                unifiedCheckoutStepMappings: { [o.h8.REVIEW]: { StepController: p } },
                checkoutContext: {
                    loadId: n,
                    skuId: t,
                    onCheckoutSuccess: i,
                    analyticsLocations: a,
                    analyticsSourceLocation: s,
                    flowSpecificOptions: d,
                },
                paymentModalProps: O,
                renderModalProps: u,
            },
            children: (0, r.jsx)(h.Provider, {
                value: {
                    orbProductContext: g,
                    isRedeeming: E,
                    orbRedemptionError: b,
                    onRedeemVirtualCurrency: y,
                },
                children: f,
            }),
        });
    };
