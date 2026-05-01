"use strict";
n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366);
let s = null;
class a extends i.Ay.Store {
    static displayName = "ApplicationStoreLocationStore";
    getCurrentPath() {
        return null != s ? s.pathname : null;
    }
    getCurrentRoute() {
        var e;
        let t;
        return (t = null != (e = s) && null != e.search ? e.search : ""), null != e ? `${e.pathname}${t}` : null;
    }
    reset() {
        throw Error("Should not reset the store this way outside of a test environment");
    }
}
let o = new a(r.h, {
    APPLICATION_STORE_LOCATION_CHANGE: function (e) {
        let { location: t } = e;
        s = { ...t };
    },
    APPLICATION_STORE_RESET_NAVIGATION: function () {
        s = null;
    },
});
