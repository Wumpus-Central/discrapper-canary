"use strict";
n(321073);
var i = n(17928),
    r = n(228366);
let s = {};
class a extends i.Ay.Store {
    static displayName = "StorefrontPromotionStore";
    getFetchState(e) {
        return s[e]?.state;
    }
    getFetchedAt(e) {
        let t = s[e];
        if (t?.state === "success" || t?.state === "error") return t.fetchedAt;
    }
    getPromotionsForApplication(e) {
        let t = s[e];
        return t?.state === "success" || t?.state === "loading" ? (t.promotions ?? null) : null;
    }
}
new a(r.h, {
    LOGOUT: function () {
        s = {};
    },
    STOREFRONT_PROMOTIONS_FETCH_START: function (e) {
        let { applicationIds: t } = e;
        for (let e of t) {
            let t = s[e];
            s[e] = { state: "loading", promotions: t?.state === "success" ? [...t.promotions] : void 0 };
        }
    },
    STOREFRONT_PROMOTIONS_FETCH_SUCCESS: function (e) {
        let { applicationIds: t, promotions: n } = e,
            i = Date.now(),
            r = { ...s };
        for (let e of t) r[e] = { state: "success", promotions: [], fetchedAt: i };
        for (let e of n) {
            let t = e.applicationId;
            r[t]?.state === "success" && r[t].promotions.push(e);
        }
        s = r;
    },
    STOREFRONT_PROMOTIONS_FETCH_FAIL: function (e) {
        let { applicationIds: t } = e,
            n = Date.now();
        for (let e of t) s[e] = { state: "error", fetchedAt: n };
    },
});
