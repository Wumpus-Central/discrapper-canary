"use strict";
n(321073);
var r = n(311907),
    i = n(73153);
let s = {};
class a extends r.Ay.Store {
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
new a(i.h, {
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
            r = Date.now(),
            i = { ...s };
        for (let e of t) i[e] = { state: "success", promotions: [], fetchedAt: r };
        for (let e of n) {
            let t = e.applicationId;
            i[t]?.state === "success" && i[t].promotions.push(e);
        }
        s = i;
    },
    STOREFRONT_PROMOTIONS_FETCH_FAIL: function (e) {
        let { applicationIds: t } = e,
            n = Date.now();
        for (let e of t) s[e] = { state: "error", fetchedAt: n };
    },
});
