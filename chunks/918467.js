i(321073);
var r = i(311907),
    s = i(73153);
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
new l(s.h, {
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
        let { applicationIds: e, promotions: i } = t,
            r = Date.now(),
            s = { ...n };
        for (let t of e) s[t] = { state: "success", promotions: [], fetchedAt: r };
        for (let t of i) {
            let e = t.applicationId;
            s[e]?.state === "success" && s[e].promotions.push(t);
        }
        n = s;
    },
    STOREFRONT_PROMOTIONS_FETCH_FAIL: function (t) {
        let { applicationIds: e } = t,
            i = Date.now();
        for (let t of e) n[t] = { state: "error", fetchedAt: i };
    },
});
