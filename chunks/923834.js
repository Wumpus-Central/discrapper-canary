n.d(t, { Z: () => d }), n(411104);
var i,
    s,
    r,
    l = n(442837),
    a = n(570140);
let o = null;
class c extends (i = l.ZP.Store) {
    getCurrentPath() {
        return null != o ? o.pathname : null;
    }
    getCurrentRoute() {
        return (function (e) {
            let t = null != e && null != e.search ? e.search : '';
            return null != e ? ''.concat(e.pathname).concat(t) : null;
        })(o);
    }
    reset() {
        throw Error('Should not reset the store this way outside of a test environment');
    }
}
(r = 'ApplicationStoreLocationStore'),
    (s = 'displayName') in c
        ? Object.defineProperty(c, s, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[s] = r);
let d = new c(a.Z, {
    APPLICATION_STORE_LOCATION_CHANGE: function (e) {
        let { location: t } = e;
        o = { ...t };
    },
    APPLICATION_STORE_RESET_NAVIGATION: function () {
        o = null;
    }
});
