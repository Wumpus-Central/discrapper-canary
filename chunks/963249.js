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
    let { initialPlanId: t, followupSKUInfo: i, onClose: b, onComplete: O, onSubscriptionConfirmation: T, analyticsLocations: N, analyticsObject: A, analyticsLocation: C, analyticsSourceLocation: R, isGift: P = !1, giftMessage: w, giftStyle: D, giftingOrigin: x, subscriptionTier: L, trialId: M, postSuccessGuild: k, openInvoiceId: j, applicationId: U, referralTrialOfferId: G, giftRecipient: B, returnRef: Z, subscription: F, skipConfirm: V, repeatPurchase: H } = null != e ? e : {},
        W = !1,
        Y = (0, a.Z)(),
        K = _.default.getCurrentUser(),
        z = (0, g.M5)(K, v.p9.TIER_2),
        q = o()('payment-modal'),
        Q = (0, g.Wz)(L);
    return (0, s.ZDy)(
        async () => {
            let { default: e } = await Promise.all([n.e('8016'), n.e('17938'), n.e('54433'), n.e('8301')]).then(n.bind(n, 7305));
            return (n) => {
                var { onClose: o } = n,
                    a = I(n, ['onClose']);
                return (0, r.jsx)(
                    e,
                    S(y({}, a), {
                        loadId: Y,
                        subscriptionTier: L,
                        skuId: Q,
                        isGift: P,
                        giftMessage: w,
                        giftStyle: D,
                        giftingOrigin: x,
                        giftRecipient: B,
                        initialPlanId: t,
                        followupSKUInfo: i,
                        onClose: (e, t) => {
                            o(),
                                null == b || b(e),
                                e && (null == T || T(), (0, p.I)(P, z, t) && m.S.dispatch(E.CkL.PREMIUM_SUBSCRIPTION_CREATED)),
                                l.Z.dispatch({
                                    type: 'PREMIUM_PAYMENT_MODAL_CLOSE',
                                    didSucceed: e
                                });
                        },
                        onComplete: (e) => {
                            (W = !0), null == O || O(), (0, p.I)(P, z, (0, g.k5)(null == e ? void 0 : e.subscription)) && (0, f.H)(!0);
                        },
                        onSubscriptionConfirmation: T,
                        analyticsLocations: N,
                        analyticsObject: A,
                        analyticsLocation: C,
                        analyticsSourceLocation: R,
                        trialId: M,
                        postSuccessGuild: k,
                        planGroup: v.Y1,
                        openInvoiceId: j,
                        applicationId: U,
                        referralTrialOfferId: G,
                        returnRef: Z,
                        subscription: F,
                        skipConfirm: !!V,
                        repeatPurchase: H
                    })
                );
            };
        },
        {
            modalKey: q,
            onCloseCallback: () => {
                W ||
                    h.default.track(E.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: Y,
                        payment_type: E.Zuq[E.GZQ.SUBSCRIPTION],
                        location: null != C ? C : A,
                        source: R,
                        subscription_type: E.NYc.PREMIUM,
                        is_gift: P,
                        sku_id: Q,
                        eligible_for_trial: null != M,
                        application_id: U,
                        location_stack: N
                    }),
                    (0, u.fw)(),
                    (0, c.fw)(),
                    (0, d.p)(),
                    null == b || b(W),
                    W && (null == T || T());
            }
        }
    );
}
