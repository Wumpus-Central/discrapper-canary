n.d(t, {
    A: () => p,
}),
    n(747238),
    n(65821);
var r,
    i = n(311907),
    a = n(73153);

function s(e, t, n) {
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

function o(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
let l = null;

function c(e) {
    let { location: t } = e;
    l = o({}, t);
}

function u() {
    l = null;
}

function d(e) {
    let t = null != e && null != e.search ? e.search : "";
    return null != e ? "".concat(e.pathname).concat(t) : null;
}
class f extends (r = i.Ay.Store) {
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
s(f, "displayName", "ApplicationStoreLocationStore");
let p = new f(a.h, {
    APPLICATION_STORE_LOCATION_CHANGE: c,
    APPLICATION_STORE_RESET_NAVIGATION: u,
});
