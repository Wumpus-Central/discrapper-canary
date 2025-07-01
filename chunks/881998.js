n.d(t, {
    M: () => u,
    Z: () => g
});
var r,
    i = n(442837),
    a = n(570140),
    o = n(592125),
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
    return ((e.NOT_FETCHED = 'NOT_FETCHED'), (e.FETCHING = 'FETCHING'), (e.FETCHED = 'FETCHED'), e);
})({});
let d = null,
    f = null,
    _ = 'NOT_FETCHED';
function p() {
    _ = 'FETCHING';
}
function h(e) {
    var t;
    ((_ = 'FETCHED'), (f = null != (t = null == (d = e.apps) ? void 0 : d.filter((e) => null == e.application.parent_id)) ? t : null));
}
class m extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(o.Z, s.Z, l.Z);
    }
    getApps() {
        return d;
    }
    getNonChildrenApps() {
        return f;
    }
    getFetchState() {
        return _;
    }
}
c(m, 'displayName', 'AuthorizedAppsStore');
let g = new m(a.Z, {
    USER_AUTHORIZED_APPS_REQUEST: p,
    USER_AUTHORIZED_APPS_UPDATE: h
});
