n.d(t, { Z: () => A });
var r = n(54381);
n(473749);
var i = n(97613),
    a = n.n(i),
    o = n(772848),
    s = n(481060),
    l = n(570140),
    c = n(159351),
    u = n(366939),
    d = n(667),
    f = n(453227),
    p = n(594174),
    _ = n(626135),
    m = n(585483),
    h = n(74538),
    g = n(845220),
    E = n(518727),
    b = n(981631),
    y = n(474936);
function O(e, t, n) {
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
function v(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e, t) {
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
function A(e) {
    var t;
    let {
            initialPlanId: i,
            followupSKUInfo: O,
            onClose: S,
            onComplete: C,
            onSubscriptionConfirmation: A,
            analyticsLocations: N,
            analyticsObject: P,
            analyticsLocation: R,
            analyticsSourceLocation: w,
            confirmationFooter: D,
            isGift: x = !1,
            giftMessage: L,
            giftStyle: j,
            giftingOrigin: M,
            subscriptionTier: k,
            trialId: U,
            postSuccessGuild: G,
            openInvoiceId: Z,
            applicationId: F,
            referralTrialOfferId: B,
            giftRecipient: V,
            returnRef: H,
            subscription: Y,
            skipConfirm: W,
        } = null != e ? e : {},
        K = !1,
        z = null != (t = (0, g.b)()) ? t : (0, o.Z)(),
        q = p.default.getCurrentUser(),
        Q = (0, h.M5)(q, y.PremiumTypes.TIER_2),
        X = a()("payment-modal"),
        J = (0, h.Wz)(k),
        $ = !1;
    return (0, s.ZDy)(
        async () => {
            let { default: e } = await Promise.all([n.e("84992"), n.e("16"), n.e("23242"), n.e("98587")]).then(
                n.bind(n, 7305),
            );
            return (t) => {
                var { onClose: n } = t,
                    a = T(t, ["onClose"]);
                return (0, r.jsx)(
                    e,
                    I(v({}, a), {
                        loadId: z,
                        subscriptionTier: k,
                        skuId: J,
                        isGift: x,
                        giftMessage: L,
                        giftStyle: j,
                        giftingOrigin: M,
                        giftRecipient: V,
                        initialPlanId: i,
                        followupSKUInfo: O,
                        onClose: (e) => {
                            if ($) return;
                            ($ = !0), m.S.dispatch(b.CkL.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED);
                            let t = () => {
                                n(),
                                    null == S || S(e),
                                    e && (null == A || A()),
                                    l.Z.dispatch({
                                        type: "PREMIUM_PAYMENT_MODAL_CLOSE",
                                        didSucceed: e,
                                    });
                            };
                            f.Z.isDisplayingWowMomentConfirmation && f.Z.isAnimated
                                ? setTimeout(() => {
                                      t();
                                  }, E.P)
                                : t();
                        },
                        onComplete: () => {
                            (K = !0), null == C || C();
                        },
                        onSubscriptionConfirmation: A,
                        analyticsLocations: N,
                        analyticsObject: P,
                        analyticsLocation: R,
                        analyticsSourceLocation: w,
                        confirmationFooter: D,
                        trialId: U,
                        postSuccessGuild: G,
                        planGroup: y.Y1,
                        openInvoiceId: Z,
                        applicationId: F,
                        referralTrialOfferId: B,
                        returnRef: H,
                        subscription: Y,
                        skipConfirm: !!W,
                        wasTier2PremiumBeforePurchase: Q,
                    }),
                );
            };
        },
        {
            onCloseRequest: () => {
                $ ||
                    (($ = !0),
                    m.S.dispatch(b.CkL.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                    f.Z.isDisplayingWowMomentConfirmation && f.Z.isAnimated
                        ? setTimeout(() => {
                              (0, s.Mr3)(X);
                          }, E.P)
                        : (0, s.Mr3)(X));
            },
            modalKey: X,
            onCloseCallback: () => {
                K ||
                    _.default.track(b.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: z,
                        payment_type: b.Zuq[b.GZQ.SUBSCRIPTION],
                        location: null != R ? R : P,
                        source: w,
                        subscription_type: b.NYc.PREMIUM,
                        is_gift: x,
                        sku_id: J,
                        eligible_for_trial: null != U,
                        application_id: F,
                        location_stack: N,
                    }),
                    (0, u.fw)(),
                    (0, c.fw)(),
                    (0, d.p)(),
                    null == S || S(K),
                    K && (null == A || A());
            },
        },
    );
}
