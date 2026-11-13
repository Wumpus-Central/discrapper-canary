n(321073);
var i = n(448761),
    r = n(855986),
    a = n(73153),
    s = n(287809),
    l = n(326084),
    o = n(652215);
let d = null,
    c = new Set(),
    u = new Map(),
    _ = !1,
    E = new Set(),
    A = new Set(),
    f = new Map(),
    h = 0,
    I = null,
    p = new Set(),
    m = [],
    T = [],
    g = !1,
    S = !1,
    N = null,
    C = null,
    O = null;
function R() {
    return !0;
}
function L() {
    ((p = new Set()), (m = []), (T = []));
}
function y(e) {
    (p.delete(e), (m = m.filter((t) => t !== e)), (T = T.filter((t) => t !== e)));
}
function D(e) {
    let { messages: t } = e;
    t.forEach((e) => b(e));
}
function b(e) {
    let t = e.type === i.l.PREMIUM_REFERRAL ? e.content : null;
    if (null == t) return !1;
    !A.has(t) && !E.has(t) && (E.add(t), (0, l.kZ)(t).catch(o.FXj));
}
class v extends r.Ay.Store {
    static displayName = "ReferralTrialStore";
    initialize() {
        (this.waitFor(s.default), this.syncWith([s.default], R));
    }
    checkAndFetchReferralsRemaining() {
        null == d && !_ && h < 6 && (null == I || I < Date.now()) && (0, l.xM)();
    }
    getReferralsRemaining() {
        let { bypassFetch: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (e || this.checkAndFetchReferralsRemaining(), d);
    }
    getSentUserIds() {
        return (this.checkAndFetchReferralsRemaining(), Array.from(c.values()));
    }
    isFetchingReferralsRemaining() {
        return _;
    }
    getRelevantUserTrialOffer(e) {
        return f.get(e);
    }
    isResolving(e) {
        return E.has(e);
    }
    getEligibleUsers() {
        return p;
    }
    isFetchingUserEligibility(e) {
        return m.includes(e);
    }
    hasFetchedUserEligibility(e) {
        return T.includes(e);
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
        return Array.from(f.values());
    }
    getRecipientStatus() {
        return u;
    }
    getReminderStateId() {
        return O ?? C;
    }
    getRecurringReminderStateId() {
        return O;
    }
}
let P = new v(a.h, {
    BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function (e) {
        let { userTrialOfferId: t } = e;
        (_ || (0, l.xM)(), !E.has(t)) && (E.add(t), (0, l.kZ)(t).catch(o.FXj));
    },
    BILLING_REFERRALS_REMAINING_FETCH_START: function (e) {
        let {} = e;
        ((N = null), (_ = !0));
    },
    BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function (e) {
        let {
            referrals_remaining: t,
            sent_user_ids: n,
            refresh_at: i,
            recipient_status: r,
            has_eligible_friends: a,
            reminder_state_id: s,
            recurring_reminder_state_id: l,
        } = e;
        ((g = !0),
            (S = a),
            (_ = !1),
            (d = t),
            (c = new Set(n)),
            (N = i),
            (u = r),
            (C = s),
            (O = l),
            0 === d && L(),
            (h = 0),
            (I = null));
    },
    BILLING_REFERRALS_REMAINING_FETCH_FAIL: function (e) {
        let {} = e;
        ((g = !1), (S = !1), (N = null), (_ = !1));
        let t = (h += 1) <= 3 ? 1e3 * Math.pow(2, h) : 8e3 * Math.pow(4, h - 3);
        I = Date.now() + Math.min(3e5, t);
    },
    BILLING_CREATE_REFERRAL_SUCCESS: function (e) {
        let { userTrialOffer: t } = e,
            n = c.has(t.userId);
        ((0, l.xM)(),
            f.set(t.id, t),
            c.add(t.userId),
            y(t.userId),
            n || null == d || (0 === (d = Math.max(0, d - 1)) && L()));
    },
    CREATE_REFERRALS_SUCCESS: function (e) {
        let { userTrialOffers: t } = e,
            n = new Set(t.filter((e) => !c.has(e.userId)).map((e) => e.userId));
        for (let e of ((0, l.xM)(), t)) (f.set(e.id, e), c.add(e.userId), y(e.userId));
        null != d && 0 === (d = Math.max(0, d - n.size)) && L();
    },
    BILLING_REFERRAL_RESOLVE_SUCCESS: function (e) {
        let { userTrialOffer: t } = e;
        null != t && (E.delete(t.id), A.add(t.id), f.set(t.id, t));
    },
    BILLING_REFERRAL_RESOLVE_FAIL: function (e) {
        let { userTrialOfferId: t } = e;
        (E.delete(t), A.add(t));
    },
    REFERRAL_RECIPIENT_ELIGIBILITY_FETCH_START: function (e) {
        let { recipientIds: t } = e;
        for (let e of t) m.includes(e) || m.push(e);
    },
    REFERRAL_RECIPIENT_ELIGIBILITY_FETCH_SUCCESS: function (e) {
        let { recipientIds: t, eligibleRecipientIds: n } = e,
            i = new Set(n);
        for (let e of t) (T.includes(e) || T.push(e), i.has(e) && !c.has(e) && 0 !== d && p.add(e));
        m = m.filter((e) => !t.includes(e));
    },
    REFERRAL_RECIPIENT_ELIGIBILITY_FETCH_FAILURE: function (e) {
        let { recipientIds: t } = e;
        m = m.filter((e) => !t.includes(e));
    },
    RELATIONSHIP_REMOVE: function (e) {
        let { relationship: t } = e,
            n = t.id;
        return (!!p.has(n) || !!m.includes(n) || !!T.includes(n)) && (y(n), !0);
    },
    LOAD_MESSAGES_SUCCESS: D,
    MESSAGE_CREATE: function (e) {
        let { message: t } = e;
        b(t);
    },
    LOAD_MESSAGES_AROUND_SUCCESS: D,
    LOGOUT: function () {
        ((d = null),
            (c = new Set()),
            (_ = !1),
            (E = new Set()),
            (A = new Set()),
            (f = new Map()),
            (h = 0),
            (I = null),
            L(),
            (g = !1),
            (S = !1),
            (N = null),
            (u = new Map()),
            (C = null),
            (O = null));
    },
});
n.d(t, {}, { A: P });
