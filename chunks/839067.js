"use strict";
n.d(t, { A: () => l });
var i = n(17928),
    r = n(228366);
let a = null;
class s extends i.Ay.Store {
    static displayName = "ApplicationStoreLocationStore";
    getCurrentPath() {
        return null != a ? a.pathname : null;
    }
    getCurrentRoute() {
        var e;
        let t;
        return (t = null != (e = a) && null != e.search ? e.search : ""), null != e ? `${e.pathname}${t}` : null;
    }
    reset() {
        throw Error("Should not reset the store this way outside of a test environment");
    }
}
let l = new s(r.h, {
    APPLICATION_STORE_LOCATION_CHANGE: function (e) {
        let { location: t } = e;
        a = { ...t };
    },
    APPLICATION_STORE_RESET_NAVIGATION: function () {
        a = null;
    },
});
