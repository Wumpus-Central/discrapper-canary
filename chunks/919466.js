s.d(t, { A: () => x });
var i = s(17928),
    n = s(228366),
    a = s(983060),
    l = s(297966),
    r = s(202541);
let c = null,
    o = l.db.NOT_FETCHED,
    d = null;
function u() {
    o === l.db.NOT_FETCHED && (o = l.db.FETCHED);
}
function m(e) {
    if (e.entitlement.sku_id !== a.cc) return !1;
    let t = (0, a.MM)(e.entitlement);
    (c = null == t ? null : { perk: l.n9.XGPP, state: t, entitlement_id: e.entitlement.id, redirect: null }), u();
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
        o = l.db.FETCHING;
    },
    PARTNER_ACTIVATION_FETCH_SUCCESS: function (e) {
        let { activationStatus: t } = e;
        (c = t), (o = l.db.FETCHED), (d = Date.now());
    },
    PARTNER_ACTIVATION_FETCH_FAILURE: function () {
        o = l.db.FETCHED;
    },
    PARTNER_CANCELLATION_START: function () {
        o = l.db.CANCELLING;
    },
    PARTNER_CANCELLATION_SUCCESS: function () {
        (c = {
            perk: c?.perk ?? l.n9.XGPP,
            state: l.gR.CANCELLATION_PENDING,
            entitlement_id: c?.entitlement_id ?? null,
            redirect: null,
        }),
            (o = l.db.FETCHED),
            (d = null);
    },
    PARTNER_CANCELLATION_FAILURE: function () {
        o = l.db.FETCHED;
    },
    PARTNER_ACTIVATION_RESET: function () {
        (c = null), (o = l.db.FETCHED), (d = null);
    },
    ENTITLEMENT_CREATE: m,
    ENTITLEMENT_UPDATE: m,
    ENTITLEMENT_DELETE: function (e) {
        if (e.entitlement.sku_id !== a.cc) return !1;
        (c = null), (d = null), u();
    },
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: function (e) {
        if (e.applicationId !== r.tv || 0 === e.entitlements.length) return !1;
        let t = null;
        for (let s of e.entitlements) {
            if (s.sku_id !== a.cc) continue;
            let e = (0, a.MM)(s);
            if (e === l.gR.ACTIVATED) {
                (c = { perk: l.n9.XGPP, state: l.gR.ACTIVATED, entitlement_id: s.id, redirect: null }), u();
                return;
            }
            e === l.gR.CANCELLATION_PENDING && (t = s.id);
        }
        if (null == t) return !1;
        (c = { perk: l.n9.XGPP, state: l.gR.CANCELLATION_PENDING, entitlement_id: t, redirect: null }), u();
    },
    LOGOUT: function () {
        (c = null), (o = l.db.NOT_FETCHED), (d = null);
    },
});
