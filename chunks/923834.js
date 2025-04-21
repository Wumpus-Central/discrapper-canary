n.d(t, { Z: () => c }), n(35282), n(415506);
var i,
    r = n(442837),
    s = n(570140);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let a = null;
class o extends (i = r.ZP.Store) {
    getCurrentPath() {
        return null != a ? a.pathname : null;
    }
    getCurrentRoute() {
        var e = a;
        let t = null != e && null != e.search ? e.search : '';
        return null != e ? ''.concat(e.pathname).concat(t) : null;
    }
    reset() {
        throw Error('Should not reset the store this way outside of a test environment');
    }
}
l(o, 'displayName', 'ApplicationStoreLocationStore');
let c = new o(s.Z, {
    APPLICATION_STORE_LOCATION_CHANGE: function (e) {
        let { location: t } = e;
        a = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    i.forEach(function (t) {
                        l(e, t, n[t]);
                    });
            }
            return e;
        })({}, t);
    },
    APPLICATION_STORE_RESET_NAVIGATION: function () {
        a = null;
    }
});
