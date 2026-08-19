s.d(t, { A: () => x });
var i = s(17928),
    n = s(228366),
    a = s(297966),
    l = s(870975),
    r = s(202541);
let c = null,
    o = a.db.NOT_FETCHED,
    d = null;
function u() {
    o === a.db.NOT_FETCHED && (o = a.db.FETCHED);
}
function m(e) {
    if (e.entitlement.sku_id !== l.cc) return !1;
    let t = (0, l.MM)(e.entitlement);
    (c = null == t ? null : { perk: a.n9.XGPP, state: t, entitlement_id: e.entitlement.id, redirect: null }), u();
}
class g extends i.Ay.Store {
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
let x = new g(n.h, {
    PARTNER_ACTIVATION_FETCH_START: function () {
        o = a.db.FETCHING;
    },
    PARTNER_ACTIVATION_FETCH_SUCCESS: function (e) {
        let { activationStatus: t } = e;
        (c = t), (o = a.db.FETCHED), (d = Date.now());
    },
    PARTNER_ACTIVATION_FETCH_FAILURE: function () {
        o = a.db.FETCHED;
    },
    PARTNER_CANCELLATION_START: function () {
        o = a.db.CANCELLING;
    },
    PARTNER_CANCELLATION_SUCCESS: function () {
        (c = {
            perk: c?.perk ?? a.n9.XGPP,
            state: a.gR.CANCELLATION_PENDING,
            entitlement_id: c?.entitlement_id ?? null,
            redirect: null,
        }),
            (o = a.db.FETCHED),
            (d = null);
    },
    PARTNER_CANCELLATION_FAILURE: function () {
        o = a.db.FETCHED;
    },
    PARTNER_ACTIVATION_RESET: function () {
        (c = null), (o = a.db.FETCHED), (d = null);
    },
    ENTITLEMENT_CREATE: m,
    ENTITLEMENT_UPDATE: m,
    ENTITLEMENT_DELETE: function (e) {
        if (e.entitlement.sku_id !== l.cc) return !1;
        (c = null), (d = null), u();
    },
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: function (e) {
        if (e.applicationId !== r.tv || 0 === e.entitlements.length) return !1;
        let t = null;
        for (let s of e.entitlements) {
            if (s.sku_id !== l.cc) continue;
            let e = (0, l.MM)(s);
            if (e === a.gR.ACTIVATED) {
                (c = { perk: a.n9.XGPP, state: a.gR.ACTIVATED, entitlement_id: s.id, redirect: null }), u();
                return;
            }
            e === a.gR.CANCELLATION_PENDING && (t = s.id);
        }
        if (null == t) return !1;
        (c = { perk: a.n9.XGPP, state: a.gR.CANCELLATION_PENDING, entitlement_id: t, redirect: null }), u();
    },
    LOGOUT: function () {
        (c = null), (o = a.db.NOT_FETCHED), (d = null);
    },
});
