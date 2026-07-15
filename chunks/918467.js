"use strict";
n.d(t, { A: () => o }), n(321073);
var i = n(17928),
    r = n(228366);
let a = {};
function s() {
    a = {};
}
class l extends i.Ay.Store {
    static displayName = "StorefrontPromotionStore";
    getFetchState(e) {
        return a[e]?.state;
    }
    getFetchedAt(e) {
        let t = a[e];
        if (t?.state === "success" || t?.state === "error") return t.fetchedAt;
    }
    getPromotionsForApplication(e) {
        let t = a[e];
        return t?.state === "success" || t?.state === "loading" ? (t.promotions ?? null) : null;
    }
}
let o = new l(r.h, {
    LOGOUT: s,
    STOREFRONT_PROMOTIONS_FETCH_START: function (e) {
        let { applicationIds: t } = e;
        for (let e of t) {
            let t = a[e];
            a[e] = { state: "loading", promotions: t?.state === "success" ? [...t.promotions] : void 0 };
        }
    },
    STOREFRONT_PROMOTIONS_FETCH_SUCCESS: function (e) {
        let { applicationIds: t, promotions: n } = e,
            i = Date.now(),
            r = { ...a };
        for (let e of t) r[e] = { state: "success", promotions: [], fetchedAt: i };
        for (let e of n) {
            let t = e.applicationId;
            r[t]?.state === "success" && r[t].promotions.push(e);
        }
        a = r;
    },
    STOREFRONT_PROMOTIONS_FETCH_FAIL: function (e) {
        let { applicationIds: t } = e,
            n = Date.now();
        for (let e of t) a[e] = { state: "error", fetchedAt: n };
    },
    STOREFRONT_PROMOTION_ID_OVERRIDE_SET: s,
});
