"use strict";
n.d(t, { A: () => f });
var i = n(17928),
    r = n(228366),
    s = n(983060),
    a = n(297966),
    o = n(202541);
let l = null,
    u = a.db.NOT_FETCHED,
    c = null;
function d() {
    u === a.db.NOT_FETCHED && (u = a.db.FETCHED);
}
function _(e) {
    if (e.entitlement.sku_id !== s.cc) return !1;
    let t = (0, s.MM)(e.entitlement);
    (l = null == t ? null : { perk: a.n9.XGPP, state: t, entitlement_id: e.entitlement.id, redirect: null }), d();
}
class h extends i.Ay.Store {
    static displayName = "PartnerActivationStore";
    getActivationStatus() {
        return l;
    }
    getRequestState() {
        return u;
    }
    getLastFetchTime() {
        return c;
    }
}
let f = new h(r.h, {
    PARTNER_ACTIVATION_FETCH_START: function () {
        u = a.db.FETCHING;
    },
    PARTNER_ACTIVATION_FETCH_SUCCESS: function (e) {
        let { activationStatus: t } = e;
        (l = t), (u = a.db.FETCHED), (c = Date.now());
    },
    PARTNER_ACTIVATION_FETCH_FAILURE: function () {
        u = a.db.FETCHED;
    },
    PARTNER_CANCELLATION_START: function () {
        u = a.db.CANCELLING;
    },
    PARTNER_CANCELLATION_SUCCESS: function () {
        (l = {
            perk: l?.perk ?? a.n9.XGPP,
            state: a.gR.CANCELLATION_PENDING,
            entitlement_id: l?.entitlement_id ?? null,
            redirect: null,
        }),
            (u = a.db.FETCHED),
            (c = null);
    },
    PARTNER_CANCELLATION_FAILURE: function () {
        u = a.db.FETCHED;
    },
    PARTNER_ACTIVATION_RESET: function () {
        (l = null), (u = a.db.FETCHED), (c = null);
    },
    ENTITLEMENT_CREATE: _,
    ENTITLEMENT_UPDATE: _,
    ENTITLEMENT_DELETE: function (e) {
        if (e.entitlement.sku_id !== s.cc) return !1;
        (l = null), (c = null), d();
    },
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: function (e) {
        if (e.applicationId !== o.tv || 0 === e.entitlements.length) return !1;
        let t = null;
        for (let n of e.entitlements) {
            if (n.sku_id !== s.cc) continue;
            let e = (0, s.MM)(n);
            if (e === a.gR.ACTIVATED) {
                (l = { perk: a.n9.XGPP, state: a.gR.ACTIVATED, entitlement_id: n.id, redirect: null }), d();
                return;
            }
            e === a.gR.CANCELLATION_PENDING && (t = n.id);
        }
        if (null == t) return !1;
        (l = { perk: a.n9.XGPP, state: a.gR.CANCELLATION_PENDING, entitlement_id: t, redirect: null }), d();
    },
    LOGOUT: function () {
        (l = null), (u = a.db.NOT_FETCHED), (c = null);
    },
});
