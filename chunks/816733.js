"use strict";
n.d(t, { A: () => T }), n(205816);
var r = n(311907),
    i = n(73153),
    s = n(851746),
    a = n(694080),
    o = n(31413),
    l = n(287809),
    u = n(469778),
    d = n(927578),
    c = n(166403),
    _ = n(788868);
let f = {
        userOffersLastFetchedAtDate: void 0,
        userTrialOffers: {},
        userDiscountOffers: {},
        userDiscounts: void 0,
        isFetching: !1,
        lastFetchSuccessful: !1,
    },
    E = f;
function h() {
    (E.userTrialOffers = {}),
        (E.userDiscountOffers = {}),
        (E.userOffersLastFetchedAtDate = void 0),
        (E.isFetching = !1);
}
let p = () => !0;
function m() {
    return (
        null != c.A.getPremiumTypeSubscription() &&
        (null != E.userDiscountOffers[_.q]
            ? (E.userDiscountOffers = { [_.q]: E.userDiscountOffers[_.q] })
            : null != E.userDiscountOffers[_.EG]
              ? (E.userDiscountOffers = { [_.EG]: E.userDiscountOffers[_.EG] })
              : (E.userDiscountOffers = {}),
        (E.userTrialOffers = {}),
        !0)
    );
}
function g() {
    let e = l.default.getCurrentUser();
    !(0, d.TW)(e) && Object.keys(E.userDiscountOffers).length > 0 && (0, a._D)("UserOfferStore", !0);
}
function A() {
    let e = l.default.getCurrentUser()?.id;
    if (null == e) return !1;
    let t = s.A.getAllRelevantReferralTrialOffers().filter((t) => t.user_id === e);
    if (t.length > 0) {
        let e = t[0];
        return (E.userTrialOffers[e.trial_id] = e), !0;
    }
    return !1;
}
class I extends r.Ay.PersistedStore {
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
        (E = e ?? f),
            this.waitFor(u.A, s.A, c.A, l.default),
            this.syncWith([l.default], p),
            this.syncWith([c.A], m),
            this.syncWith([s.A], A);
    }
    getUserTrialOffer(e) {
        if (null !== e) return E.userTrialOffers[e];
    }
    getUserDiscountOffer(e) {
        if (null !== e) return E.userDiscountOffers[e];
    }
    getAnyOfUserTrialOfferId(e) {
        for (let t of e) if (null != E.userTrialOffers[t]) return t;
        return null;
    }
    isFetchingOffer() {
        return E.isFetching ?? !1;
    }
    hasFetchedOffer() {
        return null != E.userOffersLastFetchedAtDate;
    }
    shouldFetchReferralOffer(e) {
        let t = E.userOffersLastFetchedAtDate,
            n = E.isFetching ?? !1;
        if (null == t) return !n;
        let r = Date.now() - 6e5 > t;
        return !n && (r || (e ?? 0) > t);
    }
    shouldShowTrialOfferReminder(e) {
        return !_.Pn.includes(e.trial_id) || (0, o.G)({ location: "user_offer_store" });
    }
    getAlmostExpiringTrialOffersForReminder(e) {
        let t = Object.values(_.TP).map((e) => e.id),
            n = l.default.getCurrentUser();
        return (0, d.TW)(n) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(E.userTrialOffers).filter(
                  (n) =>
                      t.includes(n.trial_id) &&
                      null != n.expires_at &&
                      null != n.subscription_trial &&
                      e.includes(n.subscription_trial.sku_id) &&
                      Date.parse(n.expires_at) < Date.now() + (0, d.e1)(n) &&
                      this.shouldShowTrialOfferReminder(n),
              );
    }
    shouldShowDiscountOfferReminder(e) {
        return !_.ON.includes(e.discount_id) || (0, o.G)({ location: "user_offer_store" });
    }
    getAlmostExpiringDiscountOffersForReminder(e) {
        let t = l.default.getCurrentUser();
        return (0, d.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(E.userDiscountOffers).filter(
                  (t) =>
                      null != t.expires_at &&
                      null != t.discount &&
                      t.discount.plan_ids.some((t) => e.includes(_.hd[t].skuId)) &&
                      Date.parse(t.expires_at) < Date.now() + (0, d.e1)(t) &&
                      this.shouldShowDiscountOfferReminder(t),
              );
    }
    getAcknowledgedOffers(e) {
        let t = l.default.getCurrentUser();
        return (0, d.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(E.userTrialOffers).filter((t) => e.includes(t.trial_id) && null != t.expires_at);
    }
    getUnacknowledgedDiscountOffers() {
        let e = l.default.getCurrentUser();
        return (0, d.TW)(e) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(E.userDiscountOffers ?? {}).filter(
                  (e) => null == e.expires_at && !_.ly.includes(e.discount_id),
              );
    }
    getUnacknowledgedOffers(e) {
        let t = l.default.getCurrentUser();
        return (0, d.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(E.userTrialOffers).filter((t) => e.includes(t.trial_id) && null == t.expires_at);
    }
    hasAnyUnexpiredOffer() {
        return Object.values(E.userTrialOffers).some(
            (e) => null == e.expires_at || Date.parse(e.expires_at) > Date.now(),
        );
    }
    hasAnyUnexpiredDiscountOffer() {
        return Object.values(E.userDiscountOffers).some(
            (e) => null == e.expires_at || Date.parse(e.expires_at) > Date.now(),
        );
    }
    canFractionalPremiumUserUseOffer() {
        return u.A.isFractionalPremiumActive({ excludeReverseTrial: !0 }) && null == c.A.getPremiumTypeSubscription();
    }
    getReferrer(e) {
        return null == e ? null : E.userTrialOffers[e]?.referrer;
    }
    getState() {
        return E;
    }
    forceReset() {
        h();
    }
    lastFetchSuccessful() {
        return E.lastFetchSuccessful;
    }
}
let T = new I(i.h, {
    BILLING_USER_OFFER_FETCH_START: function () {
        E.isFetching = !0;
    },
    BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: function (e) {
        let { userTrialOffer: t } = e;
        null != t ? (E.userTrialOffers[t.trial_id] = t) : h(),
            (E.userOffersLastFetchedAtDate = Date.now()),
            (E.isFetching = !1);
    },
    BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function (e) {
        let { userTrialOffer: t } = e;
        null != t ? (E.userTrialOffers[t.trial_id] = t) : (E.userTrialOffers = {}),
            (E.userOffersLastFetchedAtDate = Date.now());
    },
    BILLING_USER_OFFER_FETCH_SUCCESS: function (e) {
        let { userTrialOffer: t, userDiscount: n, userDiscountOffer: r } = e;
        null == t && null == n && null == r && h(),
            null != t
                ? ((E.userTrialOffers[t.trial_id] = t), (E.userDiscountOffers = {}))
                : null != n
                  ? ((E.userDiscountOffers[n.discount_id] = n), (E.userTrialOffers = {}))
                  : null != r && ((E.userDiscountOffers[r.discount_id] = r), (E.userTrialOffers = {})),
            (E.userOffersLastFetchedAtDate = Date.now()),
            (E.isFetching = !1),
            (E.lastFetchSuccessful = !0);
    },
    BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function (e) {
        let { userTrialOffer: t, userDiscount: n, userDiscountOffer: r } = e;
        null != t ? (E.userTrialOffers[t.trial_id] = t) : (E.userTrialOffers = {}),
            null != n
                ? (E.userDiscountOffers[n.discount_id] = n)
                : null != r
                  ? (E.userDiscountOffers[r.discount_id] = r)
                  : (E.userDiscountOffers = {}),
            (E.userOffersLastFetchedAtDate = Date.now());
    },
    BILLING_USER_OFFER_FETCH_FAIL: function () {
        h(), (E.userOffersLastFetchedAtDate = Date.now()), (E.isFetching = !1), (E.lastFetchSuccessful = !1);
    },
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: g,
    BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: g,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: g,
    LOGOUT: h,
});
