"use strict";
n(321073);
var r = n(311907),
    i = n(73153);
let s = {};
function a(e) {
    let { applicationIds: t } = e;
    for (let e of t) {
        let t = s[e];
        s[e] = { state: "loading", promotions: t?.state === "success" ? [...t.promotions] : void 0 };
    }
}
function o(e) {
    let { applicationIds: t, promotions: n } = e,
        r = Date.now(),
        i = { ...s };
    for (let e of t) i[e] = { state: "success", promotions: [], fetchedAt: r };
    for (let e of n) {
        let t = e.applicationId;
        i[t]?.state === "success" && i[t].promotions.push(e);
    }
    s = i;
}
function l(e) {
    let { applicationIds: t } = e,
        n = Date.now();
    for (let e of t) s[e] = { state: "error", fetchedAt: n };
}
function u() {
    s = {};
}
class c extends r.Ay.Store {
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
new c(i.h, {
    LOGOUT: u,
    STOREFRONT_PROMOTIONS_FETCH_START: a,
    STOREFRONT_PROMOTIONS_FETCH_SUCCESS: o,
    STOREFRONT_PROMOTIONS_FETCH_FAIL: l,
});
