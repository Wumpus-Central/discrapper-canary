"use strict";
n.d(t, { A: () => b });
var r = n(448761),
    i = n(311907),
    s = n(73153),
    a = n(287809),
    o = n(326084),
    l = n(652215);
let u = null,
    d = new Set(),
    c = new Map(),
    _ = !1,
    f = new Set(),
    E = new Set(),
    h = new Map(),
    p = 0,
    m = null,
    g = [],
    A = !1,
    I = 0,
    T = !1,
    S = !1,
    y = null,
    N = null,
    O = () => !0;
function R(e) {
    let { messages: t } = e;
    t.forEach((e) => v(e));
}
function v(e) {
    let t = e.type === r.l.PREMIUM_REFERRAL ? e.content : null;
    if (null == t) return !1;
    !E.has(t) && !f.has(t) && (f.add(t), s.h.wait(() => (0, o.kZ)(t).catch(l.FXj)));
}
class C extends i.Ay.Store {
    static displayName = "ReferralTrialStore";
    initialize() {
        this.waitFor(a.default), this.syncWith([a.default], O);
    }
    checkAndFetchReferralsRemaining() {
        null == u && !_ && p < 5 && (null == m || m < Date.now()) && (0, o.xM)();
    }
    getReferralsRemaining() {
        let { bypassFetch: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e || this.checkAndFetchReferralsRemaining(), u;
    }
    getSentUserIds() {
        return this.checkAndFetchReferralsRemaining(), Array.from(d.values());
    }
    isFetchingReferralsRemaining() {
        return _;
    }
    getRelevantUserTrialOffer(e) {
        return h.get(e);
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
        return y;
    }
    getAllRelevantReferralTrialOffers() {
        return Array.from(h.values());
    }
    getRecipientStatus() {
        return c;
    }
    getReminderStateId() {
        return N;
    }
}
let b = new C(s.h, {
    BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function (e) {
        let { userTrialOfferId: t } = e;
        (_ || (0, o.xM)(), !f.has(t)) && (f.add(t), s.h.wait(() => (0, o.kZ)(t).catch(l.FXj)));
    },
    BILLING_REFERRALS_REMAINING_FETCH_START: function (e) {
        let {} = e;
        (y = null), (_ = !0);
    },
    BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function (e) {
        let {
            referrals_remaining: t,
            sent_user_ids: n,
            refresh_at: r,
            recipient_status: i,
            has_eligible_friends: s,
            reminder_state_id: a,
        } = e;
        (T = !0), (S = s), (_ = !1), (u = t), (d = new Set(n)), (y = r), (c = i), (N = a);
    },
    BILLING_REFERRALS_REMAINING_FETCH_FAIL: function (e) {
        let {} = e;
        (T = !1), (S = !1), (y = null), (_ = !1), (p += 1), (m = Date.now() + 1e3 * Math.pow(2, p));
    },
    BILLING_CREATE_REFERRAL_SUCCESS: function (e) {
        let { userTrialOffer: t } = e;
        (0, o.xM)(), h.set(t.id, t), d.add(t.user_id);
    },
    CREATE_REFERRALS_SUCCESS: function (e) {
        let { userTrialOffers: t } = e;
        for (let e of ((0, o.xM)(), t)) h.set(e.id, e), d.add(e.user_id);
    },
    BILLING_REFERRAL_RESOLVE_SUCCESS: function (e) {
        let { userTrialOffer: t } = e;
        null != t && (f.delete(t.id), E.add(t.id), h.set(t.id, t));
    },
    BILLING_REFERRAL_RESOLVE_FAIL: function (e) {
        let { userTrialOfferId: t } = e;
        f.delete(t), E.add(t);
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
    LOAD_MESSAGES_SUCCESS: R,
    MESSAGE_CREATE: function (e) {
        let { message: t } = e;
        v(t);
    },
    LOAD_MESSAGES_AROUND_SUCCESS: R,
    LOGOUT: function () {
        (u = null),
            (d = new Set()),
            (_ = !1),
            (f = new Set()),
            (E = new Set()),
            (h = new Map()),
            (p = 0),
            (m = null),
            (g = []),
            (A = !1),
            (I = 0),
            (T = !1),
            (S = !1),
            (y = null),
            (c = new Map()),
            (N = null);
    },
});
