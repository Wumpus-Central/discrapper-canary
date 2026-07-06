n.d(t, { A: () => a });
var i = n(17928),
    l = n(228366);
let r = null;
class s extends i.Ay.Store {
    static displayName = "ApplicationStoreLocationStore";
    getCurrentPath() {
        return null != r ? r.pathname : null;
    }
    getCurrentRoute() {
        var e;
        let t;
        return (t = null != (e = r) && null != e.search ? e.search : ""), null != e ? `${e.pathname}${t}` : null;
    }
    reset() {
        throw Error("Should not reset the store this way outside of a test environment");
    }
}
let a = new s(l.h, {
    APPLICATION_STORE_LOCATION_CHANGE: function (e) {
        let { location: t } = e;
        r = { ...t };
    },
    APPLICATION_STORE_RESET_NAVIGATION: function () {
        r = null;
    },
});
