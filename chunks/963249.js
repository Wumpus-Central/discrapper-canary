n.d(t, { Z: () => N });
var r = n(200651);
n(192379);
var i = n(97613),
    o = n.n(i),
    a = n(772848),
    s = n(481060),
    l = n(570140),
    c = n(159351),
    u = n(366939),
    d = n(667),
    f = n(138464),
    _ = n(619067),
    p = n(594174),
    h = n(626135),
    m = n(585483),
    g = n(74538),
    E = n(981631),
    b = n(474936);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = T(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function N(e) {
    let { initialPlanId: t, followupSKUInfo: i, onClose: y, onComplete: O, onSubscriptionConfirmation: T, analyticsLocations: N, analyticsObject: A, analyticsLocation: C, analyticsSourceLocation: R, confirmationFooter: P, paymentModalBanner: w, isGift: D = !1, giftMessage: L, giftStyle: x, giftingOrigin: M, subscriptionTier: k, trialId: j, postSuccessGuild: U, openInvoiceId: G, applicationId: B, referralTrialOfferId: F, giftRecipient: V, returnRef: Z, subscription: H, skipConfirm: W, repeatPurchase: Y } = null != e ? e : {},
        K = !1,
        z = (0, a.Z)(),
        q = p.default.getCurrentUser(),
        Q = (0, g.M5)(q, b.p9.TIER_2),
        X = o()('payment-modal'),
        J = (0, g.Wz)(k);
    return (0, s.ZDy)(
        async () => {
            let { default: e } = await Promise.all([n.e('17938'), n.e('8854')]).then(n.bind(n, 7305));
            return (n) => {
                var { onClose: o } = n,
                    a = S(n, ['onClose']);
                return (0, r.jsx)(
                    e,
                    I(v({}, a), {
                        loadId: z,
                        subscriptionTier: k,
                        skuId: J,
                        isGift: D,
                        giftMessage: L,
                        giftStyle: x,
                        giftingOrigin: M,
                        giftRecipient: V,
                        initialPlanId: t,
                        followupSKUInfo: i,
                        onClose: (e, t) => {
                            o(),
                                null == y || y(e),
                                e && (null == T || T(), (0, _.I)(D, Q, t) && m.S.dispatch(E.CkL.PREMIUM_SUBSCRIPTION_CREATED)),
                                l.Z.dispatch({
                                    type: 'PREMIUM_PAYMENT_MODAL_CLOSE',
                                    didSucceed: e
                                });
                        },
                        onComplete: (e) => {
                            (K = !0), null == O || O(), (0, _.I)(D, Q, (0, g.k5)(null == e ? void 0 : e.subscription)) && (0, f.H)(!0);
                        },
                        onSubscriptionConfirmation: T,
                        analyticsLocations: N,
                        analyticsObject: A,
                        analyticsLocation: C,
                        analyticsSourceLocation: R,
                        confirmationFooter: P,
                        paymentModalBanner: w,
                        trialId: j,
                        postSuccessGuild: U,
                        planGroup: b.Y1,
                        openInvoiceId: G,
                        applicationId: B,
                        referralTrialOfferId: F,
                        returnRef: Z,
                        subscription: H,
                        skipConfirm: !!W,
                        repeatPurchase: Y
                    })
                );
            };
        },
        {
            modalKey: X,
            onCloseCallback: () => {
                K ||
                    h.default.track(E.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: z,
                        payment_type: E.Zuq[E.GZQ.SUBSCRIPTION],
                        location: null != C ? C : A,
                        source: R,
                        subscription_type: E.NYc.PREMIUM,
                        is_gift: D,
                        sku_id: J,
                        eligible_for_trial: null != j,
                        application_id: B,
                        location_stack: N
                    }),
                    (0, u.fw)(),
                    (0, c.fw)(),
                    (0, d.p)(),
                    null == y || y(K),
                    K && (null == T || T());
            }
        }
    );
}
