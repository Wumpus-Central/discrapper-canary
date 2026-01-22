n.d(t, {
    WT: () => S,
});
var r = n(627968),
    i = n(64700),
    a = n(688810),
    s = n(736843),
    o = n(937008),
    l = n(156312),
    c = n(166532),
    u = n(317042),
    d = n(11054),
    f = n(639149),
    p = n(941673),
    _ = n(818348);

function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}

function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = y(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let O = (0, s.Mz)(),
    A = {
        renderStep: (e) => (0, r.jsx)(d.M, m({}, e)),
    },
    v = (e) => {
        let { renderStep: t, paymentModalStepProps: n } = e,
            { handleStepChange: r, handleClose: a } = n,
            { renderStepBody: s, disabled: o } = (0, p.ZR)({
                handleStepChange: r,
                handleClose: a,
            });
        return t({
            paymentModalStepProps: n,
            unifiedStepProps: i.useMemo(
                () => ({
                    layout: "custom-step-body",
                    renderStepBody: s,
                    primaryCTAButtonProps: {
                        disabled: o,
                    },
                }),
                [s, o],
            ),
        });
    },
    S = {
        CustomPaymentContextProvider: (e) => {
            let { children: t, loadId: n, applicationId: i, isGift: s, skuId: o, analyticsLocations: c = [] } = e,
                d = b(e, ["children", "loadId", "applicationId", "isGift", "skuId", "analyticsLocations"]),
                { analyticsLocations: f } = (0, u.P)(
                    m(
                        {
                            applicationId: i,
                            skuId: o,
                            analyticsLocations: c,
                        },
                        d,
                    ),
                );
            return (0, r.jsx)(a.f5, {
                value: f,
                children: (0, r.jsx)(
                    l.PaymentContextProvider,
                    E(
                        m(
                            {
                                loadId: n,
                                applicationId: i,
                                skuIDs: null != o ? [o] : [],
                                purchaseType: _.VV.ONE_TIME,
                                isGift: s,
                            },
                            d,
                        ),
                        {
                            activeSubscription: null,
                            children: t,
                        },
                    ),
                ),
            });
        },
        UnifiedCheckoutContextProvider: (e) => {
            let {
                    skuId: t,
                    loadId: n,
                    applicationId: s,
                    analyticsSourceLocation: o,
                    analyticsLocations: l,
                    renderModalProps: c,
                    onClose: u,
                    onComplete: d,
                    flowSpecificOptions: f,
                    children: p,
                } = e,
                { analyticsLocations: _ } = (0, a.Ay)(l),
                h = c.onClose,
                m = i.useCallback(
                    (e) => {
                        h(), null != u && u(e);
                    },
                    [h, u],
                ),
                g = i.useMemo(
                    () => ({
                        onClose: m,
                        onComplete: d,
                        applicationId: s,
                        skuId: t,
                        initialPlanId: null,
                        analyticsObject: o,
                        analyticsLocations: _,
                    }),
                    [m, d, s, t, o, _],
                ),
                E = i.useMemo(
                    () => ({
                        skuId: t,
                        loadId: n,
                        flowSpecificOptions: f,
                        analyticsLocations: _,
                    }),
                    [t, n, f, _],
                ),
                b = i.useMemo(
                    () => ({
                        sharedCheckoutContext: E,
                        paymentModalProps: g,
                        renderModalProps: c,
                    }),
                    [E, g, c],
                );
            return (0, r.jsx)(O.Provider, {
                value: b,
                children: p,
            });
        },
        UnifiedCheckoutCustomHeader: (e) => {
            let { onClose: t, step: n } = e,
                { isGift: i } = (0, o.Pv)();
            return (0, r.jsx)(f.A, {
                step: n,
                onClose: () => t(!1),
                isGift: i,
            });
        },
        UnifiedCheckoutStepDefinitions: {
            [c.pn.GIFT_CUSTOMIZATION]: {
                StepController: v,
            },
            [c.pn.REVIEW]: {
                legacyStepConfig: !0,
            },
        },
        CUSTOM_CONFIRM_STEP_CONFIG: A,
    };
