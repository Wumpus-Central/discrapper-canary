"use strict";
n.d(t, { Vn: () => h, u1: () => f, qz: () => I, _D: () => A });
var i = n(636537),
    r = n(554146),
    a = n(228366),
    s = n(826673),
    l = n(669316),
    o = n(959165),
    d = n(594061),
    c = n(174459),
    u = n(723702),
    _ = n(38405);
(0, n(945810).mj)({
    name: "2026-06-android-two-week-trials",
    kind: "user",
    defaultConfig: { enabled: !1, trialCTAEnabled: !1 },
    variations: { 1: { enabled: !0, trialCTAEnabled: !0 }, 2: { enabled: !0, trialCTAEnabled: !1 } },
}),
    n(202541);
var E = n(652215);
async function A(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n =
            arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : { offerId: void 0, paymentGatewayOverride: void 0 },
        A = arguments.length > 3 ? arguments[3] : void 0,
        h = arguments.length > 4 ? arguments[4] : void 0;
    if (t) {
        a.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_START" });
        try {
            let t;
            null != e && c.default.track(E.HAw.FETCH_USER_OFFER_STARTED, { call_location: e });
            let { offerId: I, paymentGatewayOverride: f } = n,
                p =
                    void 0 !== f
                        ? f
                        : ((t = null),
                          (0, u.isAndroid)() ? (t = E.kM_.GOOGLE) : (0, u.isIOS)() && (t = E.kM_.APPLE),
                          t),
                T = await i.Bo.post({
                    url: E.Rsh.USER_OFFER,
                    body: null != p || null != I ? { payment_gateway: p, offer_id: I } : {},
                    rejectWithError: !0,
                    retries: null != A ? A.retries : void 0,
                }),
                m = T.body.user_trial_offer ?? null,
                g = T.body.user_discount_offer ?? null;
            if (null != I && null != g && g.discount_id !== I) {
                let e = Error("Returned user discount offer does not match offer ID request parameter");
                throw (_.A.captureException(e, { extra: { offer_id: I, user_discount_offer: g }, ...h }), e);
            }
            return (
                null == m &&
                    (0, s.k8)(r.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) &&
                    (0, d.xB)(r.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING),
                a.h.dispatch({
                    type: "BILLING_USER_OFFER_FETCH_SUCCESS",
                    userTrialOffer: null == m ? null : o.A.createFromServer(m),
                    userDiscountOffer: null != g ? l.A.createFromServer(g) : null,
                }),
                !0
            );
        } catch (e) {
            a.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_FAIL" });
        }
    }
    return !1;
}
async function h() {
    a.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_START" });
    try {
        let e = (await i.Bo.get({ url: E.Rsh.CHURN_USER_OFFER, rejectWithError: !0 })).body.offer ?? null,
            t = null != e ? l.A.createFromServer(e) : null;
        return (
            a.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_SUCCESS", userDiscountOffer: t }), { userDiscountOffer: t }
        );
    } catch (e) {
        a.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_FAIL" });
    }
}
async function I() {
    let e = null;
    try {
        let t = (await i.Bo.post({ url: E.Rsh.CHURN_USER_OFFER, rejectWithError: !0 })).body.offer ?? null;
        null != t &&
            ((e = l.A.createFromServer(t)),
            a.h.dispatch({ type: "BILLING_USER_OFFER_FETCH_SUCCESS", userDiscountOffer: e }));
    } catch (e) {}
    return e;
}
function f(e, t) {
    let n = null != e && null == e.expiresAt ? e.id : void 0,
        r = null == t || t.hasAcknowledged() ? void 0 : t.id;
    if (void 0 !== n || void 0 !== r)
        return i.Bo.post({
            url: E.Rsh.USER_OFFER_ACKNOWLEDGED,
            body: { user_trial_offer_id: n, user_discount_offer_id: r },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
            .then((e) => {
                let t = e.body.user_discount ?? null,
                    n = e.body.user_discount_offer ?? null,
                    i = e.body.user_trial_offer ?? null;
                a.h.dispatch({
                    type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
                    userTrialOffer: null != i ? o.A.createFromServer(i) : null,
                    userDiscount: null != t ? l.A.createFromServer(t) : null,
                    userDiscountOffer: null != n ? l.A.createFromServer(n) : null,
                });
            })
            .catch((e) => {
                404 === e.status &&
                    a.h.dispatch({
                        type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
                        userTrialOffer: null,
                        userDiscount: null,
                        userDiscountOffer: null,
                    });
            });
}
