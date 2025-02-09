t.d(n, { Z: () => c }), t(411104);
var i,
    r,
    s,
    l = t(442837),
    o = t(570140);
let a = null;
class d extends (i = l.ZP.Store) {
    getCurrentPath() {
        return null != a ? a.pathname : null;
    }
    getCurrentRoute() {
        return (function (e) {
            let n = null != e && null != e.search ? e.search : '';
            return null != e ? ''.concat(e.pathname).concat(n) : null;
        })(a);
    }
    reset() {
        throw Error('Should not reset the store this way outside of a test environment');
    }
}
(s = 'ApplicationStoreLocationStore'),
    (r = 'displayName') in d
        ? Object.defineProperty(d, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[r] = s);
let c = new d(o.Z, {
    APPLICATION_STORE_LOCATION_CHANGE: function (e) {
        let { location: n } = e;
        a = { ...n };
    },
    APPLICATION_STORE_RESET_NAVIGATION: function () {
        a = null;
    }
});
