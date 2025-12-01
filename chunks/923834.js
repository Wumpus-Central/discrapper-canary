n.d(t, { Z: () => p }), n(35282), n(415506);
var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
let l = null;
function c(e) {
    let { location: t } = e;
    l = s({}, t);
}
function u() {
    l = null;
}
function d(e) {
    let t = null != e && null != e.search ? e.search : "";
    return null != e ? "".concat(e.pathname).concat(t) : null;
}
class f extends (r = i.ZP.Store) {
    getCurrentPath() {
        return null != l ? l.pathname : null;
    }
    getCurrentRoute() {
        return d(l);
    }
    reset() {
        throw Error("Should not reset the store this way outside of a test environment");
    }
}
o(f, "displayName", "ApplicationStoreLocationStore");
let p = new f(a.Z, {
    APPLICATION_STORE_LOCATION_CHANGE: c,
    APPLICATION_STORE_RESET_NAVIGATION: u,
});
