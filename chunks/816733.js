"use strict";
n.d(t, { A: () => O }), n(205816);
var r = n(311907),
    i = n(73153),
    a = n(851746),
    s = n(694080),
    o = n(31413),
    l = n(287809),
    u = n(469778),
    c = n(927578),
    d = n(166403),
    _ = n(788868);
let f = 6e5,
    h = {
        userOffersLastFetchedAtDate: void 0,
        userTrialOffers: {},
        userDiscountOffers: {},
        userDiscounts: void 0,
        isFetching: !1,
        lastFetchSuccessful: !1,
    },
    p = h;
function g() {
    p.isFetching = !0;
}
function E(e) {
    let { userTrialOffer: t } = e;
    null != t ? (p.userTrialOffers[t.trial_id] = t) : S(),
        (p.userOffersLastFetchedAtDate = Date.now()),
        (p.isFetching = !1);
}
function A(e) {
    let { userTrialOffer: t, userDiscount: n, userDiscountOffer: r } = e;
    null == t && null == n && null == r && S(),
        null != t
            ? ((p.userTrialOffers[t.trial_id] = t), (p.userDiscountOffers = {}))
            : null != n
              ? ((p.userDiscountOffers[n.discount_id] = n), (p.userTrialOffers = {}))
              : null != r && ((p.userDiscountOffers[r.discount_id] = r), (p.userTrialOffers = {})),
        (p.userOffersLastFetchedAtDate = Date.now()),
        (p.isFetching = !1),
        (p.lastFetchSuccessful = !0);
}
function I() {
    S(), (p.userOffersLastFetchedAtDate = Date.now()), (p.isFetching = !1), (p.lastFetchSuccessful = !1);
}
function T(e) {
    let { userTrialOffer: t } = e;
    null != t ? (p.userTrialOffers[t.trial_id] = t) : (p.userTrialOffers = {}),
        (p.userOffersLastFetchedAtDate = Date.now());
}
function y(e) {
    let { userTrialOffer: t, userDiscount: n, userDiscountOffer: r } = e;
    null != t ? (p.userTrialOffers[t.trial_id] = t) : (p.userTrialOffers = {}),
        null != n
            ? (p.userDiscountOffers[n.discount_id] = n)
            : null != r
              ? (p.userDiscountOffers[r.discount_id] = r)
              : (p.userDiscountOffers = {}),
        (p.userOffersLastFetchedAtDate = Date.now());
}
function S() {
    (p.userTrialOffers = {}),
        (p.userDiscountOffers = {}),
        (p.userOffersLastFetchedAtDate = void 0),
        (p.isFetching = !1);
}
let v = () => !0;
function C() {
    return (
        null != d.A.getPremiumTypeSubscription() &&
        (null != p.userDiscountOffers[_.q]
            ? (p.userDiscountOffers = { [_.q]: p.userDiscountOffers[_.q] })
            : null != p.userDiscountOffers[_.EG]
              ? (p.userDiscountOffers = { [_.EG]: p.userDiscountOffers[_.EG] })
              : (p.userDiscountOffers = {}),
        (p.userTrialOffers = {}),
        !0)
    );
}
function b() {
    let e = l.default.getCurrentUser();
    !(0, c.TW)(e) && Object.keys(p.userDiscountOffers).length > 0 && (0, s._D)("UserOfferStore", !0);
}
function N() {
    let e = l.default.getCurrentUser()?.id;
    if (null == e) return !1;
    let t = a.A.getAllRelevantReferralTrialOffers().filter((t) => t.user_id === e);
    if (t.length > 0) {
        let e = t[0];
        return (p.userTrialOffers[e.trial_id] = e), !0;
    }
    return !1;
}
class R extends r.Ay.PersistedStore {
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
        (p = e ?? h),
            this.waitFor(u.A, a.A, d.A, l.default),
            this.syncWith([l.default], v),
            this.syncWith([d.A], C),
            this.syncWith([a.A], N);
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
        let r = Date.now() - f > t,
            i = (e ?? 0) > t;
        return !n && (r || i);
    }
    shouldShowTrialOfferReminder(e) {
        return !_.Pn.includes(e.trial_id) || (0, o.G)({ location: "user_offer_store" });
    }
    getAlmostExpiringTrialOffersForReminder(e) {
        let t = Object.values(_.TP).map((e) => e.id),
            n = l.default.getCurrentUser();
        return (0, c.TW)(n) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(p.userTrialOffers).filter(
                  (n) =>
                      t.includes(n.trial_id) &&
                      null != n.expires_at &&
                      null != n.subscription_trial &&
                      e.includes(n.subscription_trial.sku_id) &&
                      Date.parse(n.expires_at) < Date.now() + (0, c.e1)(n) &&
                      this.shouldShowTrialOfferReminder(n),
              );
    }
    shouldShowDiscountOfferReminder(e) {
        return !_.ON.includes(e.discount_id) || (0, o.G)({ location: "user_offer_store" });
    }
    getAlmostExpiringDiscountOffersForReminder(e) {
        let t = l.default.getCurrentUser();
        return (0, c.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(p.userDiscountOffers).filter(
                  (t) =>
                      null != t.expires_at &&
                      null != t.discount &&
                      t.discount.plan_ids.some((t) => e.includes(_.hd[t].skuId)) &&
                      Date.parse(t.expires_at) < Date.now() + (0, c.e1)(t) &&
                      this.shouldShowDiscountOfferReminder(t),
              );
    }
    getAcknowledgedOffers(e) {
        let t = l.default.getCurrentUser();
        return (0, c.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(p.userTrialOffers).filter((t) => e.includes(t.trial_id) && null != t.expires_at);
    }
    getUnacknowledgedDiscountOffers() {
        let e = l.default.getCurrentUser();
        return (0, c.TW)(e) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(p.userDiscountOffers ?? {}).filter(
                  (e) => null == e.expires_at && !_.ly.includes(e.discount_id),
              );
    }
    getUnacknowledgedOffers(e) {
        let t = l.default.getCurrentUser();
        return (0, c.TW)(t) && !this.canFractionalPremiumUserUseOffer()
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
        return u.A.isFractionalPremiumActive({ excludeReverseTrial: !0 }) && null == d.A.getPremiumTypeSubscription();
    }
    getReferrer(e) {
        return null == e ? null : p.userTrialOffers[e]?.referrer;
    }
    getState() {
        return p;
    }
    forceReset() {
        S();
    }
    lastFetchSuccessful() {
        return p.lastFetchSuccessful;
    }
}
let O = new R(i.h, {
    BILLING_USER_OFFER_FETCH_START: g,
    BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: E,
    BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: T,
    BILLING_USER_OFFER_FETCH_SUCCESS: A,
    BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: y,
    BILLING_USER_OFFER_FETCH_FAIL: I,
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: b,
    BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: b,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: b,
    LOGOUT: S,
});
