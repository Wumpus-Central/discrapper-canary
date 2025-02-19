n.d(t, { Z: () => y }), n(47120);
var r,
    i = n(442837),
    o = n(570140),
    a = n(699516);
function s(e, t, n) {
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
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
let c = 86400000,
    u = !1,
    d = Object.freeze({
        userAffinities: [],
        affinityUserIds: new Set(),
        lastFetched: 0
    }),
    f = Object.freeze({
        userAffinitiesMap: new Map(),
        affinityUserIds: new Set()
    }),
    p = l({}, d),
    _ = l({}, f);
function h() {
    (p = l({}, d)), (_ = l({}, f));
}
function m() {
    u = !1;
}
function g() {
    u = !0;
}
function E(e) {
    var t;
    let { affinities: n } = e;
    (p.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : []), (p.lastFetched = Date.now()), v(), (u = !1);
}
function v() {
    let e = new Map(
            p.userAffinities
                .filter((e) => {
                    let { user_id: t } = e;
                    return !a.Z.isBlockedOrIgnored(t);
                })
                .map((e) => [e.user_id, e])
        ),
        t = new Set(e.keys());
    _ = {
        userAffinitiesMap: e,
        affinityUserIds: t
    };
}
class b extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(a.Z), null != e && ((p.userAffinities = e.userAffinities), (p.lastFetched = e.lastFetched), v()), this.syncWith([a.Z], v);
    }
    needsRefresh() {
        return !u && Date.now() - p.lastFetched > c;
    }
    getFetching() {
        return u;
    }
    getState() {
        return p;
    }
    getUserAffinities() {
        return p.userAffinities;
    }
    getUserAffinitiesMap() {
        return _.userAffinitiesMap;
    }
    getUserAffinity(e) {
        return _.userAffinitiesMap.get(e);
    }
    getUserAffinitiesUserIds() {
        return _.affinityUserIds;
    }
}
s(b, 'displayName', 'UserAffinitiesStore'), s(b, 'persistKey', 'UserAffinitiesStore'), s(b, 'migrations', [(e) => null]);
let y = new b(o.Z, {
    LOAD_USER_AFFINITIES_SUCCESS: E,
    LOAD_USER_AFFINITIES: g,
    LOAD_USER_AFFINITIES_FAILURE: m,
    LOGOUT: h
});
