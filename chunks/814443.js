n.d(t, { Z: () => O }), n(388685);
var r,
    i = n(442837),
    a = n(570140),
    o = n(699516);
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
    _ = l({}, d),
    p = l({}, f);
function h() {
    (_ = l({}, d)), (p = l({}, f));
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
    (_.userAffinities = null != (t = n.user_affinities) ? t : []), (_.lastFetched = Date.now()), b(), (u = !1);
}
function b() {
    let e = new Map(
            _.userAffinities
                .filter((e) => {
                    let { user_id: t } = e;
                    return !o.Z.isBlockedOrIgnored(t);
                })
                .map((e) => [e.user_id, e])
        ),
        t = new Set(e.keys());
    p = {
        userAffinitiesMap: e,
        affinityUserIds: t
    };
}
class y extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(o.Z), null != e && ((_.userAffinities = e.userAffinities), (_.lastFetched = e.lastFetched), b()), this.syncWith([o.Z], b);
    }
    needsRefresh() {
        return !u && Date.now() - _.lastFetched > c;
    }
    getFetching() {
        return u;
    }
    getState() {
        return _;
    }
    getUserAffinities() {
        return _.userAffinities;
    }
    getUserAffinitiesMap() {
        return p.userAffinitiesMap;
    }
    getUserAffinity(e) {
        return p.userAffinitiesMap.get(e);
    }
    getUserAffinitiesUserIds() {
        return p.affinityUserIds;
    }
}
s(y, 'displayName', 'UserAffinitiesStore'), s(y, 'persistKey', 'UserAffinitiesStore'), s(y, 'migrations', [(e) => null]);
let O = new y(a.Z, {
    LOAD_USER_AFFINITIES_SUCCESS: E,
    LOAD_USER_AFFINITIES: g,
    LOAD_USER_AFFINITIES_FAILURE: m,
    LOGOUT: h
});
