n.d(t, { Z: () => N });
var r = n(951288);
n(647438);
var i = n(97613),
    a = n.n(i),
    o = n(772848),
    s = n(481060),
    l = n(570140),
    c = n(159351),
    u = n(366939),
    d = n(667),
    f = n(138464),
    _ = n(453227),
    p = n(164275),
    h = n(594174),
    m = n(626135),
    g = n(585483),
    E = n(74538),
    b = n(518727),
    y = n(981631),
    O = n(474936);
function v(e, t, n) {
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
function I(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = C(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function N(e) {
    let {
            initialPlanId: t,
            followupSKUInfo: i,
            onClose: v,
            onComplete: T,
            onSubscriptionConfirmation: C,
            analyticsLocations: N,
            analyticsObject: R,
            analyticsLocation: P,
            analyticsSourceLocation: w,
            confirmationFooter: D,
            paymentModalBanner: x,
            isGift: L = !1,
            giftMessage: j,
            giftStyle: M,
            giftingOrigin: k,
            subscriptionTier: U,
            trialId: G,
            postSuccessGuild: B,
            openInvoiceId: Z,
            applicationId: V,
            referralTrialOfferId: F,
            giftRecipient: H,
            returnRef: Y,
            subscription: W,
            skipConfirm: K,
        } = null != e ? e : {},
        z = !1,
        q = (0, o.Z)(),
        X = h.default.getCurrentUser(),
        Q = (0, E.M5)(X, O.p9.TIER_2),
        J = a()("payment-modal"),
        $ = (0, E.Wz)(U),
        ee = !1;
    return (0, s.ZDy)(
        async () => {
            let { default: e } = await Promise.all([n.e("84992"), n.e("54400")]).then(n.bind(n, 7305));
            return (n) => {
                var { onClose: a } = n,
                    o = A(n, ["onClose"]);
                return (0, r.jsx)(
                    e,
                    S(I({}, o), {
                        loadId: q,
                        subscriptionTier: U,
                        skuId: $,
                        isGift: L,
                        giftMessage: j,
                        giftStyle: M,
                        giftingOrigin: k,
                        giftRecipient: H,
                        initialPlanId: t,
                        followupSKUInfo: i,
                        onClose: (e, t) => {
                            if (ee) return;
                            (ee = !0), g.S.dispatch(y.CkL.PREMIUM_PAYMENT_MODAL_CLOSED);
                            let n = () => {
                                a(),
                                    null == v || v(e),
                                    e &&
                                        (null == C || C(),
                                        (0, p.M)(L, Q, t) && g.S.dispatch(y.CkL.PREMIUM_SUBSCRIPTION_CREATED)),
                                    l.Z.dispatch({
                                        type: "PREMIUM_PAYMENT_MODAL_CLOSE",
                                        didSucceed: e,
                                    });
                            };
                            _.Z.isDisplayingWowMomentConfirmation && _.Z.isAnimated
                                ? setTimeout(() => {
                                      n();
                                  }, b.P)
                                : n();
                        },
                        onComplete: (e) => {
                            (z = !0),
                                null == T || T(),
                                (0, p.M)(L, Q, (0, E.k5)(null == e ? void 0 : e.subscription)) && (0, f.H)(!0);
                        },
                        onSubscriptionConfirmation: C,
                        analyticsLocations: N,
                        analyticsObject: R,
                        analyticsLocation: P,
                        analyticsSourceLocation: w,
                        confirmationFooter: D,
                        paymentModalBanner: x,
                        trialId: G,
                        postSuccessGuild: B,
                        planGroup: O.Y1,
                        openInvoiceId: Z,
                        applicationId: V,
                        referralTrialOfferId: F,
                        returnRef: Y,
                        subscription: W,
                        skipConfirm: !!K,
                        wasTier2PremiumBeforePurchase: Q,
                    }),
                );
            };
        },
        {
            onCloseRequest: () => {
                ee ||
                    ((ee = !0),
                    g.S.dispatch(y.CkL.PREMIUM_PAYMENT_MODAL_CLOSED),
                    _.Z.isDisplayingWowMomentConfirmation && _.Z.isAnimated
                        ? setTimeout(() => {
                              (0, s.Mr3)(J);
                          }, b.P)
                        : (0, s.Mr3)(J));
            },
            modalKey: J,
            onCloseCallback: () => {
                z ||
                    m.default.track(y.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: q,
                        payment_type: y.Zuq[y.GZQ.SUBSCRIPTION],
                        location: null != P ? P : R,
                        source: w,
                        subscription_type: y.NYc.PREMIUM,
                        is_gift: L,
                        sku_id: $,
                        eligible_for_trial: null != G,
                        application_id: V,
                        location_stack: N,
                    }),
                    (0, u.fw)(),
                    (0, c.fw)(),
                    (0, d.p)(),
                    null == v || v(z),
                    z && (null == C || C());
            },
        },
    );
}
