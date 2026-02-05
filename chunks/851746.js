"use strict";
n.d(t, { A: () => H });
var r = n(448761),
    i = n(311907),
    a = n(73153),
    s = n(287809),
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
    g = 0,
    E = null,
    A = [],
    I = !1,
    T = 0,
    y = !1,
    S = !1,
    v = null;
function C() {
    (c = null),
        (d = new Set()),
        (f = !1),
        (p = new Set()),
        (h = new Set()),
        (m = new Map()),
        (g = 0),
        (E = null),
        (A = []),
        (I = !1),
        (T = 0),
        (y = !1),
        (S = !1),
        (v = null),
        (_ = new Map());
}
let b = () => !0;
function N(e) {
    let {} = e;
    (v = null), (f = !0);
}
function R(e) {
    let { referrals_remaining: t, sent_user_ids: n, refresh_at: r, recipient_status: i, has_eligible_friends: a } = e;
    (y = !0), (S = a), (f = !1), (c = t), (d = new Set(n)), (v = r), (_ = i);
}
function O(e) {
    let {} = e;
    (y = !1), (S = !1), (v = null), (f = !1), (g += 1), (E = Date.now() + 1e3 * Math.pow(2, g));
}
function D(e) {
    let { userTrialOffer: t } = e;
    (0, o.xM)(), m.set(t.id, t), d.add(t.user_id);
}
function L(e) {
    let { userTrialOffers: t } = e;
    for (let e of ((0, o.xM)(), t)) m.set(e.id, e), d.add(e.user_id);
}
function w(e) {
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
function M(e) {
    let { message: t } = e;
    G(t);
}
function k(e) {
    let { messages: t } = e;
    t.forEach((e) => G(e));
}
function U(e) {
    let { userTrialOfferId: t } = e;
    f || (0, o.xM)(), p.has(t) || (w(t), a.h.wait(() => (0, o.kZ)(t).catch(l.FXj)));
}
function G(e) {
    let t = e.type === r.l.PREMIUM_REFERRAL ? e.content : null;
    if (null == t) return !1;
    h.has(t) || p.has(t) || (w(t), a.h.wait(() => (0, o.kZ)(t).catch(l.FXj)));
}
function V() {
    I = !0;
}
function F(e) {
    let { users: t, nextIndex: n } = e;
    (I = !1), (A = t), (T = n);
}
function B() {
    I = !1;
}
class j extends i.Ay.Store {
    static displayName = "ReferralTrialStore";
    initialize() {
        this.waitFor(s.default), this.syncWith([s.default], b);
    }
    checkAndFetchReferralsRemaining() {
        null == c && !f && g < u && (null == E || E < Date.now()) && (0, o.xM)();
    }
    getReferralsRemaining() {
        return this.checkAndFetchReferralsRemaining(), c;
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
        return y;
    }
    getHasEligibleFriends() {
        return S;
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
}
let H = new j(a.h, {
    BILLING_REFERRAL_TRIAL_OFFER_UPDATE: U,
    BILLING_REFERRALS_REMAINING_FETCH_START: N,
    BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: R,
    BILLING_REFERRALS_REMAINING_FETCH_FAIL: O,
    BILLING_CREATE_REFERRAL_SUCCESS: D,
    CREATE_REFERRALS_SUCCESS: L,
    BILLING_REFERRAL_RESOLVE_SUCCESS: x,
    BILLING_REFERRAL_RESOLVE_FAIL: P,
    REFERRALS_FETCH_ELIGIBLE_USER_START: V,
    REFERRALS_FETCH_ELIGIBLE_USER_SUCCESS: F,
    REFERRALS_FETCH_ELIGIBLE_USER_FAIL: B,
    LOAD_MESSAGES_SUCCESS: k,
    MESSAGE_CREATE: M,
    LOAD_MESSAGES_AROUND_SUCCESS: k,
    LOGOUT: C,
});
