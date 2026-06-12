"use strict";
n.d(t, { Vn: () => f, u1: () => E, qz: () => p, _D: () => h });
var i = n(636537),
    r = n(554146),
    s = n(228366),
    a = n(826673),
    o = n(669316),
    l = n(594061),
    u = n(174459),
    c = n(723702),
    d = n(38405);
(0, n(945810).mj)({
    name: "2026-06-android-two-week-trials",
    kind: "user",
    defaultConfig: { enabled: !1, discountCTAEnabled: !1 },
    variations: { 1: { enabled: !1, discountCTAEnabled: !0 }, 2: { enabled: !0, discountCTAEnabled: !0 } },
}),
    n(788868);
var _ = n(652215);
async function h(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n =
            arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : { offerId: void 0, paymentGatewayOverride: void 0 },
        h = arguments.length > 3 ? arguments[3] : void 0,
        f = arguments.length > 4 ? arguments[4] : void 0;
    if (t) {
        s.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_START" });
        try {
            let t;
            null != e && u.default.track(_.HAw.FETCH_USER_OFFER_STARTED, { call_location: e });
            let { offerId: p, paymentGatewayOverride: E } = n,
                m =
                    void 0 !== E
                        ? E
                        : ((t = null),
                          (0, c.isAndroid)() ? (t = _.kM_.GOOGLE) : (0, c.isIOS)() && (t = _.kM_.APPLE),
                          t),
                g = await i.Bo.post({
                    url: _.Rsh.USER_OFFER,
                    body: null != m || null != p ? { payment_gateway: m, offer_id: p } : {},
                    rejectWithError: !0,
                    retries: null != h ? h.retries : void 0,
                }),
                A = g.body.user_trial_offer ?? null,
                I = g.body.user_discount_offer ?? null;
            if (null != p && null != I && I.discount_id !== p) {
                let e = Error("Returned user discount offer does not match offer ID request parameter");
                throw (d.A.captureException(e, { extra: { offer_id: p, user_discount_offer: I }, ...f }), e);
            }
            return (
                null == A &&
                    (0, a.k8)(r.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) &&
                    (0, l.xB)(r.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING),
                s.h.dispatch({
                    type: "BILLING_USER_OFFER_FETCH_SUCCESS",
                    userTrialOffer: A,
                    userDiscountOffer: null != I ? o.A.createFromServer(I) : null,
                }),
                !0
            );
        } catch (e) {
            s.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_FAIL" });
        }
    }
    return !1;
}
async function f() {
    s.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_START" });
    try {
        let e = (await i.Bo.get({ url: _.Rsh.CHURN_USER_OFFER, rejectWithError: !0 })).body.offer ?? null,
            t = null != e ? o.A.createFromServer(e) : null;
        return (
            s.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_SUCCESS", userDiscountOffer: t }), { userDiscountOffer: t }
        );
    } catch (e) {
        s.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_FAIL" });
    }
}
async function p() {
    let e = null;
    try {
        let t = (await i.Bo.post({ url: _.Rsh.CHURN_USER_OFFER, rejectWithError: !0 })).body.offer ?? null;
        null != t &&
            ((e = o.A.createFromServer(t)),
            s.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_SUCCESS", userDiscountOffer: e }));
    } catch (e) {}
    return e;
}
function E(e, t) {
    let n = null != e && null == e.expires_at ? e.id : void 0,
        r = null == t || t.hasAcknowledged() ? void 0 : t.id;
    if (void 0 !== n || void 0 !== r)
        return i.Bo.post({
            url: _.Rsh.USER_OFFER_ACKNOWLEDGED,
            body: { user_trial_offer_id: n, user_discount_offer_id: r },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
            .then((e) => {
                let t = e.body.user_discount ?? null,
                    n = e.body.user_discount_offer ?? null;
                s.h.dispatch({
                    type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
                    userTrialOffer: e.body.user_trial_offer ?? null,
                    userDiscount: null != t ? o.A.createFromServer(t) : null,
                    userDiscountOffer: null != n ? o.A.createFromServer(n) : null,
                });
            })
            .catch((e) => {
                404 === e.status &&
                    s.h.dispatch({
                        type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
                        userTrialOffer: null,
                        userDiscount: null,
                        userDiscountOffer: null,
                    });
            });
}
