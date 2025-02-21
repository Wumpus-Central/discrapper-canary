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
    p = n(619067),
    _ = n(594174),
    h = n(626135),
    m = n(585483),
    g = n(74538),
    E = n(981631),
    v = n(474936);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
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
function S(e, t) {
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
function I(e, t) {
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
    let { initialPlanId: t, followupSKUInfo: i, onClose: b, onComplete: O, onSubscriptionConfirmation: T, analyticsLocations: N, analyticsObject: A, analyticsLocation: C, analyticsSourceLocation: R, confirmationFooter: P, isGift: w = !1, giftMessage: D, giftStyle: x, giftingOrigin: L, subscriptionTier: M, trialId: k, postSuccessGuild: j, openInvoiceId: U, applicationId: G, referralTrialOfferId: B, giftRecipient: Z, returnRef: F, subscription: V, skipConfirm: H, repeatPurchase: W } = null != e ? e : {},
        Y = !1,
        K = (0, a.Z)(),
        z = _.default.getCurrentUser(),
        q = (0, g.M5)(z, v.p9.TIER_2),
        Q = o()('payment-modal'),
        X = (0, g.Wz)(M);
    return (0, s.ZDy)(
        async () => {
            let { default: e } = await Promise.all([n.e('8016'), n.e('17938'), n.e('54433'), n.e('8301')]).then(n.bind(n, 7305));
            return (n) => {
                var { onClose: o } = n,
                    a = I(n, ['onClose']);
                return (0, r.jsx)(
                    e,
                    S(y({}, a), {
                        loadId: K,
                        subscriptionTier: M,
                        skuId: X,
                        isGift: w,
                        giftMessage: D,
                        giftStyle: x,
                        giftingOrigin: L,
                        giftRecipient: Z,
                        initialPlanId: t,
                        followupSKUInfo: i,
                        onClose: (e, t) => {
                            o(),
                                null == b || b(e),
                                e && (null == T || T(), (0, p.I)(w, q, t) && m.S.dispatch(E.CkL.PREMIUM_SUBSCRIPTION_CREATED)),
                                l.Z.dispatch({
                                    type: 'PREMIUM_PAYMENT_MODAL_CLOSE',
                                    didSucceed: e
                                });
                        },
                        onComplete: (e) => {
                            (Y = !0), null == O || O(), (0, p.I)(w, q, (0, g.k5)(null == e ? void 0 : e.subscription)) && (0, f.H)(!0);
                        },
                        onSubscriptionConfirmation: T,
                        analyticsLocations: N,
                        analyticsObject: A,
                        analyticsLocation: C,
                        analyticsSourceLocation: R,
                        confirmationFooter: P,
                        trialId: k,
                        postSuccessGuild: j,
                        planGroup: v.Y1,
                        openInvoiceId: U,
                        applicationId: G,
                        referralTrialOfferId: B,
                        returnRef: F,
                        subscription: V,
                        skipConfirm: !!H,
                        repeatPurchase: W
                    })
                );
            };
        },
        {
            modalKey: Q,
            onCloseCallback: () => {
                Y ||
                    h.default.track(E.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: K,
                        payment_type: E.Zuq[E.GZQ.SUBSCRIPTION],
                        location: null != C ? C : A,
                        source: R,
                        subscription_type: E.NYc.PREMIUM,
                        is_gift: w,
                        sku_id: X,
                        eligible_for_trial: null != k,
                        application_id: G,
                        location_stack: N
                    }),
                    (0, u.fw)(),
                    (0, c.fw)(),
                    (0, d.p)(),
                    null == b || b(Y),
                    Y && (null == T || T());
            }
        }
    );
}
