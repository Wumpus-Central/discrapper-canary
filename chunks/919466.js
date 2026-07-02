n.d(t, { A: () => g });
var i = n(17928),
    a = n(228366),
    s = n(983060),
    r = n(297966),
    l = n(202541);
let c = null,
    o = r.db.NOT_FETCHED,
    d = null;
function u() {
    o === r.db.NOT_FETCHED && (o = r.db.FETCHED);
}
function m(e) {
    if (e.entitlement.sku_id !== s.cc) return !1;
    let t = (0, s.MM)(e.entitlement);
    (c = null == t ? null : { perk: r.n9.XGPP, state: t, entitlement_id: e.entitlement.id, redirect: null }), u();
}
class A extends i.Ay.Store {
    static displayName = "PartnerActivationStore";
    getActivationStatus() {
        return c;
    }
    getRequestState() {
        return o;
    }
    getLastFetchTime() {
        return d;
    }
}
let g = new A(a.h, {
    PARTNER_ACTIVATION_FETCH_START: function () {
        o = r.db.FETCHING;
    },
    PARTNER_ACTIVATION_FETCH_SUCCESS: function (e) {
        let { activationStatus: t } = e;
        (c = t), (o = r.db.FETCHED), (d = Date.now());
    },
    PARTNER_ACTIVATION_FETCH_FAILURE: function () {
        o = r.db.FETCHED;
    },
    PARTNER_CANCELLATION_START: function () {
        o = r.db.CANCELLING;
    },
    PARTNER_CANCELLATION_SUCCESS: function () {
        (c = {
            perk: c?.perk ?? r.n9.XGPP,
            state: r.gR.CANCELLATION_PENDING,
            entitlement_id: c?.entitlement_id ?? null,
            redirect: null,
        }),
            (o = r.db.FETCHED),
            (d = null);
    },
    PARTNER_CANCELLATION_FAILURE: function () {
        o = r.db.FETCHED;
    },
    PARTNER_ACTIVATION_RESET: function () {
        (c = null), (o = r.db.FETCHED), (d = null);
    },
    ENTITLEMENT_CREATE: m,
    ENTITLEMENT_UPDATE: m,
    ENTITLEMENT_DELETE: function (e) {
        if (e.entitlement.sku_id !== s.cc) return !1;
        (c = null), (d = null), u();
    },
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: function (e) {
        if (e.applicationId !== l.tv || 0 === e.entitlements.length) return !1;
        let t = null;
        for (let n of e.entitlements) {
            if (n.sku_id !== s.cc) continue;
            let e = (0, s.MM)(n);
            if (e === r.gR.ACTIVATED) {
                (c = { perk: r.n9.XGPP, state: r.gR.ACTIVATED, entitlement_id: n.id, redirect: null }), u();
                return;
            }
            e === r.gR.CANCELLATION_PENDING && (t = n.id);
        }
        if (null == t) return !1;
        (c = { perk: r.n9.XGPP, state: r.gR.CANCELLATION_PENDING, entitlement_id: t, redirect: null }), u();
    },
    LOGOUT: function () {
        (c = null), (o = r.db.NOT_FETCHED), (d = null);
    },
});
