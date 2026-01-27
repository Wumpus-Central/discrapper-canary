n.d(t, {
    A: () => c,
}),
    n(747238),
    n(65821);
var r,
    i = n(311907),
    l = n(73153);

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
let a = null;
class o extends (r = i.Ay.Store) {
    getCurrentPath() {
        return null != a ? a.pathname : null;
    }
    getCurrentRoute() {
        var e;
        let t;
        return (
            (t = null != (e = a) && null != e.search ? e.search : ""),
            null != e ? "".concat(e.pathname).concat(t) : null
        );
    }
    reset() {
        throw Error("Should not reset the store this way outside of a test environment");
    }
}
s(o, "displayName", "ApplicationStoreLocationStore");
let c = new o(l.h, {
    APPLICATION_STORE_LOCATION_CHANGE: function (e) {
        let { location: t } = e;
        a = (function (e) {
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
        })({}, t);
    },
    APPLICATION_STORE_RESET_NAVIGATION: function () {
        a = null;
    },
});
