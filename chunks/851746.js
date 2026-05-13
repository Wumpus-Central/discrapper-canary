"use strict";
n.d(t, { A: () => b });
var i = n(448761),
    r = n(17928),
    s = n(228366),
    a = n(287809),
    o = n(326084),
    l = n(652215);
let u = null,
    c = new Set(),
    d = new Map(),
    _ = !1,
    f = new Set(),
    h = new Set(),
    p = new Map(),
    E = 0,
    m = null,
    g = [],
    A = !1,
    I = 0,
    T = !1,
    S = !1,
    N = null,
    y = null,
    C = () => !0;
function v(e) {
    let { messages: t } = e;
    t.forEach((e) => O(e));
}
function O(e) {
    let t = e.type === i.l.PREMIUM_REFERRAL ? e.content : null;
    if (null == t) return !1;
    !h.has(t) && !f.has(t) && (f.add(t), s.h.wait(() => (0, o.kZ)(t).catch(l.FXj)));
}
class R extends r.Ay.Store {
    static displayName = "ReferralTrialStore";
    initialize() {
        this.waitFor(a.default), this.syncWith([a.default], C);
    }
    checkAndFetchReferralsRemaining() {
        null == u && !_ && E < 6 && (null == m || m < Date.now()) && (0, o.xM)();
    }
    getReferralsRemaining() {
        let { bypassFetch: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e || this.checkAndFetchReferralsRemaining(), u;
    }
    getSentUserIds() {
        return this.checkAndFetchReferralsRemaining(), Array.from(c.values());
    }
    isFetchingReferralsRemaining() {
        return _;
    }
    getRelevantUserTrialOffer(e) {
        return p.get(e);
    }
    isResolving(e) {
        return f.has(e);
    }
    getEligibleUsers() {
        return g;
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
        return Array.from(p.values());
    }
    getRecipientStatus() {
        return d;
    }
    getReminderStateId() {
        return y;
    }
}
let b = new R(s.h, {
    BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function (e) {
        let { userTrialOfferId: t } = e;
        (_ || (0, o.xM)(), !f.has(t)) && (f.add(t), s.h.wait(() => (0, o.kZ)(t).catch(l.FXj)));
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
            has_eligible_friends: s,
            reminder_state_id: a,
        } = e;
        (T = !0), (S = s), (_ = !1), (u = t), (c = new Set(n)), (N = i), (d = r), (y = a), (E = 0), (m = null);
    },
    BILLING_REFERRALS_REMAINING_FETCH_FAIL: function (e) {
        let {} = e;
        (T = !1), (S = !1), (N = null), (_ = !1);
        let t = (E += 1) <= 3 ? 1e3 * Math.pow(2, E) : 8e3 * Math.pow(4, E - 3);
        m = Date.now() + Math.min(3e5, t);
    },
    BILLING_CREATE_REFERRAL_SUCCESS: function (e) {
        let { userTrialOffer: t } = e;
        (0, o.xM)(), p.set(t.id, t), c.add(t.user_id);
    },
    CREATE_REFERRALS_SUCCESS: function (e) {
        let { userTrialOffers: t } = e;
        for (let e of ((0, o.xM)(), t)) p.set(e.id, e), c.add(e.user_id);
    },
    BILLING_REFERRAL_RESOLVE_SUCCESS: function (e) {
        let { userTrialOffer: t } = e;
        null != t && (f.delete(t.id), h.add(t.id), p.set(t.id, t));
    },
    BILLING_REFERRAL_RESOLVE_FAIL: function (e) {
        let { userTrialOfferId: t } = e;
        f.delete(t), h.add(t);
    },
    REFERRALS_FETCH_ELIGIBLE_USER_START: function () {
        A = !0;
    },
    REFERRALS_FETCH_ELIGIBLE_USER_SUCCESS: function (e) {
        let { users: t, nextIndex: n } = e;
        (A = !1), (g = t), (I = n);
    },
    REFERRALS_FETCH_ELIGIBLE_USER_FAIL: function () {
        A = !1;
    },
    LOAD_MESSAGES_SUCCESS: v,
    MESSAGE_CREATE: function (e) {
        let { message: t } = e;
        O(t);
    },
    LOAD_MESSAGES_AROUND_SUCCESS: v,
    LOGOUT: function () {
        (u = null),
            (c = new Set()),
            (_ = !1),
            (f = new Set()),
            (h = new Set()),
            (p = new Map()),
            (E = 0),
            (m = null),
            (g = []),
            (A = !1),
            (I = 0),
            (T = !1),
            (S = !1),
            (N = null),
            (d = new Map()),
            (y = null);
    },
});
