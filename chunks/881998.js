(n.d(t, {
    M: () => u,
    Z: () => y
}),
    n(388685));
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
    return ((e.NOT_FETCHED = 'NOT_FETCHED'), (e.FETCHING = 'FETCHING'), (e.FETCHED = 'FETCHED'), e);
})({});
let d = new Map(),
    f = [],
    _ = [],
    p = 'NOT_FETCHED';
function h() {
    p = 'FETCHING';
}
function m(e) {
    ((p = 'FETCHED'),
        (d = new Map(e.tokens.map((e) => [e.application.id, e]))),
        (_ = (f = e.tokens).filter((e) => {
            let { application: t } = e;
            return null == t.parent_id;
        })));
}
function g(e) {
    let { id: t, application: n, scopes: r } = e,
        i = d.get(n.id);
    null != i &&
        ((f = f.filter((e) => {
            let { application: t } = e;
            return t.id !== i.application.id;
        })),
        (_ = _.filter((e) => {
            let { application: t } = e;
            return t.id !== i.application.id;
        })));
    let o = {
        id: t,
        application: n,
        scopes: r
    };
    (d.set(o.application.id, o), (f = [...f, o]), null == o.application.parent_id && (_ = [..._, o]));
}
function E(e) {
    let { id: t, applicationId: n } = e,
        r = d.get(n);
    if (null == r || r.id !== t) return !1;
    (d.delete(r.application.id),
        (f = f.filter((e) => {
            let { id: t } = e;
            return t !== r.id;
        })),
        (_ = _.filter((e) => {
            let { id: t } = e;
            return t !== r.id;
        })));
}
class b extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(a.Z, s.Z, l.Z);
    }
    getNewestTokenForApplication(e) {
        var t;
        return null == e ? null : null != (t = d.get(e)) ? t : null;
    }
    getNewestTokens() {
        return f;
    }
    getNewestTokensForNonChildrenApplications() {
        return _;
    }
    getFetchState() {
        return p;
    }
}
c(b, 'displayName', 'AuthorizedAppsStore');
let y = new b(o.Z, {
    USER_AUTHORIZED_APPS_REQUEST: h,
    USER_AUTHORIZED_APPS_UPDATE: m,
    OAUTH2_TOKEN_CREATE: g,
    OAUTH2_TOKEN_DELETE: E
});
