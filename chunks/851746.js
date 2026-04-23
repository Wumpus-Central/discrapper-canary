"use strict";
n.d(t, { A: () => D });
var i = n(448761),
    r = n(17928),
    s = n(228366),
    a = n(287809),
    o = n(326084),
    l = n(652215);
let d = null,
    _ = new Set(),
    u = new Map(),
    c = !1,
    E = new Set(),
    h = new Set(),
    m = new Map(),
    f = 0,
    g = null,
    p = [],
    A = !1,
    I = 0,
    T = !1,
    S = !1,
    N = null,
    C = null,
    R = () => !0;
function O(e) {
    let { messages: t } = e;
    t.forEach((e) => y(e));
}
function y(e) {
    let t = e.type === i.l.PREMIUM_REFERRAL ? e.content : null;
    if (null == t) return !1;
    !h.has(t) && !E.has(t) && (E.add(t), s.h.wait(() => (0, o.kZ)(t).catch(l.FXj)));
}
class v extends r.Ay.Store {
    static displayName = "ReferralTrialStore";
    initialize() {
        this.waitFor(a.default), this.syncWith([a.default], R);
    }
    checkAndFetchReferralsRemaining() {
        null == d && !c && f < 5 && (null == g || g < Date.now()) && (0, o.xM)();
    }
    getReferralsRemaining() {
        let { bypassFetch: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e || this.checkAndFetchReferralsRemaining(), d;
    }
    getSentUserIds() {
        return this.checkAndFetchReferralsRemaining(), Array.from(_.values());
    }
    isFetchingReferralsRemaining() {
        return c;
    }
    getRelevantUserTrialOffer(e) {
        return m.get(e);
    }
    isResolving(e) {
        return E.has(e);
    }
    getEligibleUsers() {
        return p;
    }
    getFetchingEligibleUsers() {
        return A;
    }
    getNextIndexOfEligibleUsers() {
        return I;
    }
    getIsEligibleToSendReferrals() {
        return T;
    }
    getHasEligibleFriends() {
        return S;
    }
    getRefreshAt() {
        return N;
    }
    getAllRelevantReferralTrialOffers() {
        return Array.from(m.values());
    }
    getRecipientStatus() {
        return u;
    }
    getReminderStateId() {
        return C;
    }
}
let D = new v(s.h, {
    BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function (e) {
        let { userTrialOfferId: t } = e;
        (c || (0, o.xM)(), !E.has(t)) && (E.add(t), s.h.wait(() => (0, o.kZ)(t).catch(l.FXj)));
    },
    BILLING_REFERRALS_REMAINING_FETCH_START: function (e) {
        let {} = e;
        (N = null), (c = !0);
    },
    BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function (e) {
        let {
            referrals_remaining: t,
            sent_user_ids: n,
            refresh_at: i,
            recipient_status: r,
            has_eligible_friends: s,
            reminder_state_id: a,
        } = e;
        (T = !0), (S = s), (c = !1), (d = t), (_ = new Set(n)), (N = i), (u = r), (C = a);
    },
    BILLING_REFERRALS_REMAINING_FETCH_FAIL: function (e) {
        let {} = e;
        (T = !1), (S = !1), (N = null), (c = !1), (f += 1), (g = Date.now() + 1e3 * Math.pow(2, f));
    },
    BILLING_CREATE_REFERRAL_SUCCESS: function (e) {
        let { userTrialOffer: t } = e;
        (0, o.xM)(), m.set(t.id, t), _.add(t.user_id);
    },
    CREATE_REFERRALS_SUCCESS: function (e) {
        let { userTrialOffers: t } = e;
        for (let e of ((0, o.xM)(), t)) m.set(e.id, e), _.add(e.user_id);
    },
    BILLING_REFERRAL_RESOLVE_SUCCESS: function (e) {
        let { userTrialOffer: t } = e;
        null != t && (E.delete(t.id), h.add(t.id), m.set(t.id, t));
    },
    BILLING_REFERRAL_RESOLVE_FAIL: function (e) {
        let { userTrialOfferId: t } = e;
        E.delete(t), h.add(t);
    },
    REFERRALS_FETCH_ELIGIBLE_USER_START: function () {
        A = !0;
    },
    REFERRALS_FETCH_ELIGIBLE_USER_SUCCESS: function (e) {
        let { users: t, nextIndex: n } = e;
        (A = !1), (p = t), (I = n);
    },
    REFERRALS_FETCH_ELIGIBLE_USER_FAIL: function () {
        A = !1;
    },
    LOAD_MESSAGES_SUCCESS: O,
    MESSAGE_CREATE: function (e) {
        let { message: t } = e;
        y(t);
    },
    LOAD_MESSAGES_AROUND_SUCCESS: O,
    LOGOUT: function () {
        (d = null),
            (_ = new Set()),
            (c = !1),
            (E = new Set()),
            (h = new Set()),
            (m = new Map()),
            (f = 0),
            (g = null),
            (p = []),
            (A = !1),
            (I = 0),
            (T = !1),
            (S = !1),
            (N = null),
            (u = new Map()),
            (C = null);
    },
});
