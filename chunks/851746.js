"use strict";
n.d(t, { A: () => Y });
var r = n(448761),
    i = n(311907),
    s = n(73153),
    a = n(287809),
    o = n(326084),
    l = n(652215);
let u = 5,
    c = null,
    d = new Set(),
    _ = new Map(),
    f = !1,
    p = new Set(),
    h = new Set(),
    m = new Map(),
    E = 0,
    g = null,
    A = [],
    I = !1,
    T = 0,
    S = !1,
    y = !1,
    v = null,
    N = null;
function C() {
    (c = null),
        (d = new Set()),
        (f = !1),
        (p = new Set()),
        (h = new Set()),
        (m = new Map()),
        (E = 0),
        (g = null),
        (A = []),
        (I = !1),
        (T = 0),
        (S = !1),
        (y = !1),
        (v = null),
        (_ = new Map()),
        (N = null);
}
let R = () => !0;
function O(e) {
    let {} = e;
    (v = null), (f = !0);
}
function b(e) {
    let {
        referrals_remaining: t,
        sent_user_ids: n,
        refresh_at: r,
        recipient_status: i,
        has_eligible_friends: s,
        reminder_state_id: a,
    } = e;
    (S = !0), (y = s), (f = !1), (c = t), (d = new Set(n)), (v = r), (_ = i), (N = a);
}
function D(e) {
    let {} = e;
    (S = !1), (y = !1), (v = null), (f = !1), (E += 1), (g = Date.now() + 1e3 * Math.pow(2, E));
}
function L(e) {
    let { userTrialOffer: t } = e;
    (0, o.xM)(), m.set(t.id, t), d.add(t.user_id);
}
function w(e) {
    let { userTrialOffers: t } = e;
    for (let e of ((0, o.xM)(), t)) m.set(e.id, e), d.add(e.user_id);
}
function M(e) {
    p.add(e);
}
function x(e) {
    let { userTrialOffer: t } = e;
    null != t && (p.delete(t.id), h.add(t.id), m.set(t.id, t));
}
function P(e) {
    let { userTrialOfferId: t } = e;
    p.delete(t), h.add(t);
}
function k(e) {
    let { message: t } = e;
    F(t);
}
function U(e) {
    let { messages: t } = e;
    t.forEach((e) => F(e));
}
function G(e) {
    let { userTrialOfferId: t } = e;
    f || (0, o.xM)(), p.has(t) || (M(t), s.h.wait(() => (0, o.kZ)(t).catch(l.FXj)));
}
function F(e) {
    let t = e.type === r.l.PREMIUM_REFERRAL ? e.content : null;
    if (null == t) return !1;
    h.has(t) || p.has(t) || (M(t), s.h.wait(() => (0, o.kZ)(t).catch(l.FXj)));
}
function V() {
    I = !0;
}
function B(e) {
    let { users: t, nextIndex: n } = e;
    (I = !1), (A = t), (T = n);
}
function H() {
    I = !1;
}
class j extends i.Ay.Store {
    static displayName = "ReferralTrialStore";
    initialize() {
        this.waitFor(a.default), this.syncWith([a.default], R);
    }
    checkAndFetchReferralsRemaining() {
        null == c && !f && E < u && (null == g || g < Date.now()) && (0, o.xM)();
    }
    getReferralsRemaining() {
        let { bypassFetch: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e || this.checkAndFetchReferralsRemaining(), c;
    }
    getSentUserIds() {
        return this.checkAndFetchReferralsRemaining(), Array.from(d.values());
    }
    isFetchingReferralsRemaining() {
        return f;
    }
    getRelevantUserTrialOffer(e) {
        return m.get(e);
    }
    isResolving(e) {
        return p.has(e);
    }
    getEligibleUsers() {
        return A;
    }
    getFetchingEligibleUsers() {
        return I;
    }
    getNextIndexOfEligibleUsers() {
        return T;
    }
    getIsEligibleToSendReferrals() {
        return S;
    }
    getHasEligibleFriends() {
        return y;
    }
    getRefreshAt() {
        return v;
    }
    getAllRelevantReferralTrialOffers() {
        return Array.from(m.values());
    }
    getRecipientStatus() {
        return _;
    }
    getReminderStateId() {
        return N;
    }
}
let Y = new j(s.h, {
    BILLING_REFERRAL_TRIAL_OFFER_UPDATE: G,
    BILLING_REFERRALS_REMAINING_FETCH_START: O,
    BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: b,
    BILLING_REFERRALS_REMAINING_FETCH_FAIL: D,
    BILLING_CREATE_REFERRAL_SUCCESS: L,
    CREATE_REFERRALS_SUCCESS: w,
    BILLING_REFERRAL_RESOLVE_SUCCESS: x,
    BILLING_REFERRAL_RESOLVE_FAIL: P,
    REFERRALS_FETCH_ELIGIBLE_USER_START: V,
    REFERRALS_FETCH_ELIGIBLE_USER_SUCCESS: B,
    REFERRALS_FETCH_ELIGIBLE_USER_FAIL: H,
    LOAD_MESSAGES_SUCCESS: U,
    MESSAGE_CREATE: k,
    LOAD_MESSAGES_AROUND_SUCCESS: U,
    LOGOUT: C,
});
