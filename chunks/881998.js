n.d(t, {
    M: () => c,
    Z: () => m
});
var i,
    r = n(442837),
    a = n(570140),
    s = n(592125),
    o = n(757266),
    l = n(375954);
function u(e, t, n) {
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
var c = (function (e) {
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
class h extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(s.Z, o.Z, l.Z);
    }
    getApps() {
        return d;
    }
    getFetchState() {
        return f;
    }
}
u(h, 'displayName', 'AuthorizedAppsStore');
let m = new h(a.Z, {
    USER_AUTHORIZED_APPS_REQUEST: _,
    USER_AUTHORIZED_APPS_UPDATE: p
});
