n(411104);
var i,
    r,
    s,
    a,
    l = n(442837),
    o = n(570140);
let c = null;
class d extends (i = l.ZP.Store) {
    getCurrentPath() {
        return null != c ? c.pathname : null;
    }
    getCurrentRoute() {
        return (function (e) {
            let t = null != e && null != e.search ? e.search : '';
            return null != e ? ''.concat(e.pathname).concat(t) : null;
        })(c);
    }
    reset() {
        throw Error('Should not reset the store this way outside of a test environment');
    }
}
(a = 'ApplicationStoreLocationStore'),
    (s = 'displayName') in (r = d)
        ? Object.defineProperty(r, s, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[s] = a),
    (t.Z = new d(o.Z, {
        APPLICATION_STORE_LOCATION_CHANGE: function (e) {
            let { location: t } = e;
            c = { ...t };
        },
        APPLICATION_STORE_RESET_NAVIGATION: function () {
            c = null;
        }
    }));
