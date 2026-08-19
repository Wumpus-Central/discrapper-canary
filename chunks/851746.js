"use strict";
n.d(t, { A: () => D });
var i = n(448761),
    r = n(17928),
    a = n(228366),
    s = n(287809),
    l = n(326084),
    o = n(652215);
let d = null,
    c = new Set(),
    u = new Map(),
    _ = !1,
    E = new Set(),
    A = new Set(),
    h = new Map(),
    I = 0,
    f = null,
    p = [],
    T = !1,
    m = 0,
    g = !1,
    S = !1,
    N = null,
    C = null;
function O() {
    return !0;
}
function R(e) {
    let { messages: t } = e;
    t.forEach((e) => L(e));
}
function L(e) {
    let t = e.type === i.l.PREMIUM_REFERRAL ? e.content : null;
    if (null == t) return !1;
    !A.has(t) && !E.has(t) && (E.add(t), a.h.wait(() => (0, l.kZ)(t).catch(o.FXj)));
}
class y extends r.Ay.Store {
    static displayName = "ReferralTrialStore";
    initialize() {
        this.waitFor(s.default), this.syncWith([s.default], O);
    }
    checkAndFetchReferralsRemaining() {
        null == d && !_ && I < 6 && (null == f || f < Date.now()) && (0, l.xM)();
    }
    getReferralsRemaining() {
        let { bypassFetch: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e || this.checkAndFetchReferralsRemaining(), d;
    }
    getSentUserIds() {
        return this.checkAndFetchReferralsRemaining(), Array.from(c.values());
    }
    isFetchingReferralsRemaining() {
        return _;
    }
    getRelevantUserTrialOffer(e) {
        return h.get(e);
    }
    isResolving(e) {
        return E.has(e);
    }
    getEligibleUsers() {
        return p;
    }
    getFetchingEligibleUsers() {
        return T;
    }
    getNextIndexOfEligibleUsers() {
        return m;
    }
    getIsEligibleToSendReferrals() {
        return g;
    }
    getHasEligibleFriends() {
        return S;
    }
    getRefreshAt() {
        return N;
    }
    getAllRelevantReferralTrialOffers() {
        return Array.from(h.values());
    }
    getRecipientStatus() {
        return u;
    }
    getReminderStateId() {
        return C;
    }
}
let D = new y(a.h, {
    BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function (e) {
        let { userTrialOfferId: t } = e;
        (_ || (0, l.xM)(), !E.has(t)) && (E.add(t), a.h.wait(() => (0, l.kZ)(t).catch(o.FXj)));
    },
    BILLING_REFERRALS_REMAINING_FETCH_START: function (e) {
        let {} = e;
        (N = null), (_ = !0);
    },
    BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function (e) {
        let {
            referrals_remaining: t,
            sent_user_ids: n,
            refresh_at: i,
            recipient_status: r,
            has_eligible_friends: a,
            reminder_state_id: s,
        } = e;
        (g = !0), (S = a), (_ = !1), (d = t), (c = new Set(n)), (N = i), (u = r), (C = s), (I = 0), (f = null);
    },
    BILLING_REFERRALS_REMAINING_FETCH_FAIL: function (e) {
        let {} = e;
        (g = !1), (S = !1), (N = null), (_ = !1);
        let t = (I += 1) <= 3 ? 1e3 * Math.pow(2, I) : 8e3 * Math.pow(4, I - 3);
        f = Date.now() + Math.min(3e5, t);
    },
    BILLING_CREATE_REFERRAL_SUCCESS: function (e) {
        let { userTrialOffer: t } = e;
        (0, l.xM)(), h.set(t.id, t), c.add(t.userId);
    },
    CREATE_REFERRALS_SUCCESS: function (e) {
        let { userTrialOffers: t } = e;
        for (let e of ((0, l.xM)(), t)) h.set(e.id, e), c.add(e.userId);
    },
    BILLING_REFERRAL_RESOLVE_SUCCESS: function (e) {
        let { userTrialOffer: t } = e;
        null != t && (E.delete(t.id), A.add(t.id), h.set(t.id, t));
    },
    BILLING_REFERRAL_RESOLVE_FAIL: function (e) {
        let { userTrialOfferId: t } = e;
        E.delete(t), A.add(t);
    },
    REFERRALS_FETCH_ELIGIBLE_USER_START: function () {
        T = !0;
    },
    REFERRALS_FETCH_ELIGIBLE_USER_SUCCESS: function (e) {
        let { users: t, nextIndex: n } = e;
        (T = !1), (p = t), (m = n);
    },
    REFERRALS_FETCH_ELIGIBLE_USER_FAIL: function () {
        T = !1;
    },
    LOAD_MESSAGES_SUCCESS: R,
    MESSAGE_CREATE: function (e) {
        let { message: t } = e;
        L(t);
    },
    LOAD_MESSAGES_AROUND_SUCCESS: R,
    LOGOUT: function () {
        (d = null),
            (c = new Set()),
            (_ = !1),
            (E = new Set()),
            (A = new Set()),
            (h = new Map()),
            (I = 0),
            (f = null),
            (p = []),
            (T = !1),
            (m = 0),
            (g = !1),
            (S = !1),
            (N = null),
            (u = new Map()),
            (C = null);
    },
});
