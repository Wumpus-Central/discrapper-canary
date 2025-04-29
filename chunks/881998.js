n.d(t, {
    M: () => u,
    Z: () => m
});
var r,
    i = n(442837),
    o = n(570140),
    a = n(592125),
    s = n(757266),
    l = n(375954);
function c(e, t, n) {
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
var u = (function (e) {
    return (e.NOT_FETCHED = 'NOT_FETCHED'), (e.FETCHING = 'FETCHING'), (e.FETCHED = 'FETCHED'), e;
})({});
let d = null,
    f = 'NOT_FETCHED';
function _() {
    f = 'FETCHING';
}
function p(e) {
    (f = 'FETCHED'), (d = e.apps);
}
class h extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(a.Z, s.Z, l.Z);
    }
    getApps() {
        return d;
    }
    getFetchState() {
        return f;
    }
}
c(h, 'displayName', 'AuthorizedAppsStore');
let m = new h(o.Z, {
    USER_AUTHORIZED_APPS_REQUEST: _,
    USER_AUTHORIZED_APPS_UPDATE: p
});
