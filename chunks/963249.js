n.d(t, { Z: () => R });
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
    b = n(845220),
    y = n(518727),
    O = n(981631),
    v = n(474936);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
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
function A(e, t) {
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
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = N(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function R(e) {
    var t;
    let {
            initialPlanId: i,
            followupSKUInfo: I,
            onClose: S,
            onComplete: N,
            onSubscriptionConfirmation: R,
            analyticsLocations: P,
            analyticsObject: w,
            analyticsLocation: D,
            analyticsSourceLocation: x,
            confirmationFooter: L,
            paymentModalBanner: M,
            isGift: j = !1,
            giftMessage: k,
            giftStyle: U,
            giftingOrigin: G,
            subscriptionTier: B,
            trialId: Z,
            postSuccessGuild: F,
            openInvoiceId: V,
            applicationId: H,
            referralTrialOfferId: Y,
            giftRecipient: W,
            returnRef: K,
            subscription: z,
            skipConfirm: q,
        } = null != e ? e : {},
        X = !1,
        Q = null != (t = (0, b.b)()) ? t : (0, o.Z)(),
        J = h.default.getCurrentUser(),
        $ = (0, E.M5)(J, v.PremiumTypes.TIER_2),
        ee = a()("payment-modal"),
        et = (0, E.Wz)(B),
        en = !1;
    return (0, s.ZDy)(
        async () => {
            let { default: e } = await Promise.all([n.e("94758"), n.e("84992"), n.e("3270")]).then(n.bind(n, 7305));
            return (t) => {
                var { onClose: n } = t,
                    a = C(t, ["onClose"]);
                return (0, r.jsx)(
                    e,
                    A(T({}, a), {
                        loadId: Q,
                        subscriptionTier: B,
                        skuId: et,
                        isGift: j,
                        giftMessage: k,
                        giftStyle: U,
                        giftingOrigin: G,
                        giftRecipient: W,
                        initialPlanId: i,
                        followupSKUInfo: I,
                        onClose: (e, t) => {
                            if (en) return;
                            (en = !0), g.S.dispatch(O.CkL.PREMIUM_PAYMENT_MODAL_CLOSED);
                            let r = () => {
                                n(),
                                    null == S || S(e),
                                    e &&
                                        (null == R || R(),
                                        (0, p.M)(j, $, t) && g.S.dispatch(O.CkL.PREMIUM_SUBSCRIPTION_CREATED)),
                                    l.Z.dispatch({
                                        type: "PREMIUM_PAYMENT_MODAL_CLOSE",
                                        didSucceed: e,
                                    });
                            };
                            _.Z.isDisplayingWowMomentConfirmation && _.Z.isAnimated
                                ? setTimeout(() => {
                                      r();
                                  }, y.P)
                                : r();
                        },
                        onComplete: (e) => {
                            (X = !0),
                                null == N || N(),
                                (0, p.M)(j, $, (0, E.k5)(null == e ? void 0 : e.subscription)) && (0, f.H)(!0);
                        },
                        onSubscriptionConfirmation: R,
                        analyticsLocations: P,
                        analyticsObject: w,
                        analyticsLocation: D,
                        analyticsSourceLocation: x,
                        confirmationFooter: L,
                        paymentModalBanner: M,
                        trialId: Z,
                        postSuccessGuild: F,
                        planGroup: v.Y1,
                        openInvoiceId: V,
                        applicationId: H,
                        referralTrialOfferId: Y,
                        returnRef: K,
                        subscription: z,
                        skipConfirm: !!q,
                        wasTier2PremiumBeforePurchase: $,
                    }),
                );
            };
        },
        {
            onCloseRequest: () => {
                en ||
                    ((en = !0),
                    g.S.dispatch(O.CkL.PREMIUM_PAYMENT_MODAL_CLOSED),
                    _.Z.isDisplayingWowMomentConfirmation && _.Z.isAnimated
                        ? setTimeout(() => {
                              (0, s.Mr3)(ee);
                          }, y.P)
                        : (0, s.Mr3)(ee));
            },
            modalKey: ee,
            onCloseCallback: () => {
                X ||
                    m.default.track(O.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: Q,
                        payment_type: O.Zuq[O.GZQ.SUBSCRIPTION],
                        location: null != D ? D : w,
                        source: x,
                        subscription_type: O.NYc.PREMIUM,
                        is_gift: j,
                        sku_id: et,
                        eligible_for_trial: null != Z,
                        application_id: H,
                        location_stack: P,
                    }),
                    (0, u.fw)(),
                    (0, c.fw)(),
                    (0, d.p)(),
                    null == S || S(X),
                    X && (null == R || R());
            },
        },
    );
}
