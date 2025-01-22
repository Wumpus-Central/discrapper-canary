r.d(n, {
    M: function () {
        return i;
    }
});
var i,
    a,
    o = r(442837),
    s = r(570140),
    l = r(592125),
    u = r(757266),
    c = r(375954);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e.NOT_FETCHED = 'NOT_FETCHED'), (e.FETCHING = 'FETCHING'), (e.FETCHED = 'FETCHED');
})(i || (i = {}));
let f = null,
    p = 'NOT_FETCHED';
function h() {
    p = 'FETCHING';
}
function _(e) {
    (p = 'FETCHED'), (f = e.apps);
}
class m extends (a = o.ZP.Store) {
    initialize() {
        this.waitFor(l.Z, u.Z, c.Z);
    }
    getApps() {
        return f;
    }
    getFetchState() {
        return p;
    }
}
d(m, 'displayName', 'AuthorizedAppsStore'),
    (n.Z = new m(s.Z, {
        USER_AUTHORIZED_APPS_REQUEST: h,
        USER_AUTHORIZED_APPS_UPDATE: _
    }));
