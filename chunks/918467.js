s(321073);
var r = s(17928),
    i = s(228366);
let n = {};
class l extends r.Ay.Store {
    static displayName = "StorefrontPromotionStore";
    getFetchState(t) {
        return n[t]?.state;
    }
    getFetchedAt(t) {
        let e = n[t];
        if (e?.state === "success" || e?.state === "error") return e.fetchedAt;
    }
    getPromotionsForApplication(t) {
        let e = n[t];
        return e?.state === "success" || e?.state === "loading" ? (e.promotions ?? null) : null;
    }
}
new l(i.h, {
    LOGOUT: function () {
        n = {};
    },
    STOREFRONT_PROMOTIONS_FETCH_START: function (t) {
        let { applicationIds: e } = t;
        for (let t of e) {
            let e = n[t];
            n[t] = { state: "loading", promotions: e?.state === "success" ? [...e.promotions] : void 0 };
        }
    },
    STOREFRONT_PROMOTIONS_FETCH_SUCCESS: function (t) {
        let { applicationIds: e, promotions: s } = t,
            r = Date.now(),
            i = { ...n };
        for (let t of e) i[t] = { state: "success", promotions: [], fetchedAt: r };
        for (let t of s) {
            let e = t.applicationId;
            i[e]?.state === "success" && i[e].promotions.push(t);
        }
        n = i;
    },
    STOREFRONT_PROMOTIONS_FETCH_FAIL: function (t) {
        let { applicationIds: e } = t,
            s = Date.now();
        for (let t of e) n[t] = { state: "error", fetchedAt: s };
    },
});
