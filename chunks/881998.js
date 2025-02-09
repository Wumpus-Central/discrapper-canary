n.d(t, {
    M: () => m,
    Z: () => v
});
var l,
    i,
    r,
    a,
    s = n(442837),
    o = n(570140),
    d = n(592125),
    c = n(757266),
    u = n(375954),
    m = (((l = {}).NOT_FETCHED = 'NOT_FETCHED'), (l.FETCHING = 'FETCHING'), (l.FETCHED = 'FETCHED'), l);
let x = null,
    _ = 'NOT_FETCHED';
class h extends (a = s.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, c.Z, u.Z);
    }
    getApps() {
        return x;
    }
    getFetchState() {
        return _;
    }
}
(r = 'AuthorizedAppsStore'),
    (i = 'displayName') in h
        ? Object.defineProperty(h, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (h[i] = r);
let v = new h(o.Z, {
    USER_AUTHORIZED_APPS_REQUEST: function () {
        _ = 'FETCHING';
    },
    USER_AUTHORIZED_APPS_UPDATE: function (e) {
        (_ = 'FETCHED'), (x = e.apps);
    }
});
