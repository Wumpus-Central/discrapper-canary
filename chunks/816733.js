"use strict";
n.d(t, { A: () => N }), n(205816);
var r = n(311907),
    i = n(73153),
    a = n(851746),
    s = n(694080),
    o = n(287809),
    l = n(469778),
    u = n(927578),
    c = n(166403),
    d = n(788868);
let _ = 6e5,
    f = {
        userOffersLastFetchedAtDate: void 0,
        userTrialOffers: {},
        userDiscountOffers: {},
        userDiscounts: void 0,
        isFetching: !1,
        lastFetchSuccessful: !1,
    },
    p = f;
function h() {
    p.isFetching = !0;
}
function m(e) {
    let { userTrialOffer: t } = e;
    null != t ? (p.userTrialOffers[t.trial_id] = t) : T(),
        (p.userOffersLastFetchedAtDate = Date.now()),
        (p.isFetching = !1);
}
function g(e) {
    let { userTrialOffer: t, userDiscount: n, userDiscountOffer: r } = e;
    null == t && null == n && null == r && T(),
        null != t
            ? ((p.userTrialOffers[t.trial_id] = t), (p.userDiscountOffers = {}))
            : null != n
              ? ((p.userDiscountOffers[n.discount_id] = n), (p.userTrialOffers = {}))
              : null != r && ((p.userDiscountOffers[r.discount_id] = r), (p.userTrialOffers = {})),
        (p.userOffersLastFetchedAtDate = Date.now()),
        (p.isFetching = !1),
        (p.lastFetchSuccessful = !0);
}
function E() {
    T(), (p.userOffersLastFetchedAtDate = Date.now()), (p.isFetching = !1), (p.lastFetchSuccessful = !1);
}
function A(e) {
    let { userTrialOffer: t } = e;
    null != t ? (p.userTrialOffers[t.trial_id] = t) : (p.userTrialOffers = {}),
        (p.userOffersLastFetchedAtDate = Date.now());
}
function I(e) {
    let { userTrialOffer: t, userDiscount: n, userDiscountOffer: r } = e;
    null != t ? (p.userTrialOffers[t.trial_id] = t) : (p.userTrialOffers = {}),
        null != n
            ? (p.userDiscountOffers[n.discount_id] = n)
            : null != r
              ? (p.userDiscountOffers[r.discount_id] = r)
              : (p.userDiscountOffers = {}),
        (p.userOffersLastFetchedAtDate = Date.now());
}
function T() {
    (p.userTrialOffers = {}),
        (p.userDiscountOffers = {}),
        (p.userOffersLastFetchedAtDate = void 0),
        (p.isFetching = !1);
}
let y = () => !0;
function S() {
    return (
        null != c.A.getPremiumTypeSubscription() &&
        (null != p.userDiscountOffers[d.q]
            ? (p.userDiscountOffers = { [d.q]: p.userDiscountOffers[d.q] })
            : null != p.userDiscountOffers[d.EG]
              ? (p.userDiscountOffers = { [d.EG]: p.userDiscountOffers[d.EG] })
              : (p.userDiscountOffers = {}),
        (p.userTrialOffers = {}),
        !0)
    );
}
function v() {
    let e = o.default.getCurrentUser();
    !(0, u.TW)(e) && Object.keys(p.userDiscountOffers).length > 0 && (0, s._D)("UserOfferStore", !0);
}
function C() {
    let e = o.default.getCurrentUser()?.id;
    if (null == e) return !1;
    let t = a.A.getAllRelevantReferralTrialOffers().filter((t) => t.user_id === e);
    if (t.length > 0) {
        let e = t[0];
        return (p.userTrialOffers[e.trial_id] = e), !0;
    }
    return !1;
}
class b extends r.Ay.PersistedStore {
    static displayName = "UserOfferStore";
    static persistKey = "UserOfferStore";
    static migrations = [
        (e) => {
            let t = e?.userDiscounts;
            if (null != t) return { ...e, userDiscountOffers: t };
        },
        (e) => {
            if (null != e)
                return (
                    Object.hasOwn(e, "userAnnualOfferLastFetchedAtDate") && delete e.userAnnualOfferLastFetchedAtDate, e
                );
        },
        (e) => {
            if (null != e) return e?.isFetching == null ? { ...e, isFetching: !1 } : e;
        },
    ];
    initialize(e) {
        (p = e ?? f),
            this.waitFor(l.A, a.A, c.A, o.default),
            this.syncWith([o.default], y),
            this.syncWith([c.A], S),
            this.syncWith([a.A], C);
    }
    getUserTrialOffer(e) {
        if (null !== e) return p.userTrialOffers[e];
    }
    getUserDiscountOffer(e) {
        if (null !== e) return p.userDiscountOffers[e];
    }
    getAnyOfUserTrialOfferId(e) {
        for (let t of e) if (null != p.userTrialOffers[t]) return t;
        return null;
    }
    isFetchingOffer() {
        return p.isFetching ?? !1;
    }
    hasFetchedOffer() {
        return null != p.userOffersLastFetchedAtDate;
    }
    shouldFetchReferralOffer(e) {
        let t = p.userOffersLastFetchedAtDate,
            n = p.isFetching ?? !1;
        if (null == t) return !n;
        let r = Date.now() - _ > t,
            i = (e ?? 0) > t;
        return !n && (r || i);
    }
    getAlmostExpiringTrialOffers(e) {
        let t = Object.values(d.TP).map((e) => e.id),
            n = o.default.getCurrentUser();
        return (0, u.TW)(n) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(p.userTrialOffers).filter(
                  (n) =>
                      t.includes(n.trial_id) &&
                      null != n.expires_at &&
                      null != n.subscription_trial &&
                      e.includes(n.subscription_trial.sku_id) &&
                      Date.parse(n.expires_at) < Date.now() + (0, u.e1)(n),
              );
    }
    getAlmostExpiringDiscountOffers(e) {
        let t = o.default.getCurrentUser();
        return (0, u.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(p.userDiscountOffers).filter(
                  (t) =>
                      null != t.expires_at &&
                      null != t.discount &&
                      t.discount.plan_ids.some((t) => e.includes(d.hd[t].skuId)) &&
                      Date.parse(t.expires_at) < Date.now() + (0, u.e1)(t),
              );
    }
    getAcknowledgedOffers(e) {
        let t = o.default.getCurrentUser();
        return (0, u.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(p.userTrialOffers).filter((t) => e.includes(t.trial_id) && null != t.expires_at);
    }
    getUnacknowledgedDiscountOffers() {
        let e = o.default.getCurrentUser();
        return (0, u.TW)(e) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(p.userDiscountOffers ?? {}).filter(
                  (e) => null == e.expires_at && !d.ly.includes(e.discount_id),
              );
    }
    getUnacknowledgedOffers(e) {
        let t = o.default.getCurrentUser();
        return (0, u.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(p.userTrialOffers).filter((t) => e.includes(t.trial_id) && null == t.expires_at);
    }
    hasAnyUnexpiredOffer() {
        return Object.values(p.userTrialOffers).some(
            (e) => null == e.expires_at || Date.parse(e.expires_at) > Date.now(),
        );
    }
    hasAnyUnexpiredDiscountOffer() {
        return Object.values(p.userDiscountOffers).some(
            (e) => null == e.expires_at || Date.parse(e.expires_at) > Date.now(),
        );
    }
    canFractionalPremiumUserUseOffer() {
        return l.A.isFractionalPremiumActive({ excludeReverseTrial: !0 }) && null == c.A.getPremiumTypeSubscription();
    }
    getReferrer(e) {
        return null == e ? null : p.userTrialOffers[e]?.referrer;
    }
    getState() {
        return p;
    }
    forceReset() {
        T();
    }
    lastFetchSuccessful() {
        return p.lastFetchSuccessful;
    }
}
let N = new b(i.h, {
    BILLING_USER_OFFER_FETCH_START: h,
    BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: m,
    BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: A,
    BILLING_USER_OFFER_FETCH_SUCCESS: g,
    BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: I,
    BILLING_USER_OFFER_FETCH_FAIL: E,
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: v,
    BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: v,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: v,
    LOGOUT: T,
});
