var i,
    a = r(47120);
var o = r(442837),
    s = r(570140),
    l = r(699516);
function u(e, n, r) {
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
let c = 86400000,
    d = !1,
    f = Object.freeze({
        userAffinities: [],
        affinityUserIds: new Set(),
        lastFetched: 0
    }),
    p = Object.freeze({
        userAffinitiesMap: new Map(),
        affinityUserIds: new Set()
    }),
    h = { ...f },
    _ = { ...p };
function m() {
    (h = { ...f }), (_ = { ...p });
}
function g() {
    d = !1;
}
function E() {
    d = !0;
}
function v(e) {
    var n;
    let { affinities: r } = e;
    (h.userAffinities = null !== (n = r.user_affinities) && void 0 !== n ? n : []), (h.lastFetched = Date.now()), y(), (d = !1);
}
function y() {
    let e = new Map(
            h.userAffinities
                .filter((e) => {
                    let { user_id: n } = e;
                    return !l.Z.isBlockedOrIgnored(n);
                })
                .map((e) => [e.user_id, e])
        ),
        n = new Set(e.keys());
    _ = {
        userAffinitiesMap: e,
        affinityUserIds: n
    };
}
class b extends (i = o.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(l.Z), null != e && ((h.userAffinities = e.userAffinities), (h.lastFetched = e.lastFetched), y()), this.syncWith([l.Z], y);
    }
    needsRefresh() {
        return !d && Date.now() - h.lastFetched > c;
    }
    getFetching() {
        return d;
    }
    getState() {
        return h;
    }
    getUserAffinities() {
        return h.userAffinities;
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
u(b, 'displayName', 'UserAffinitiesStore'),
    u(b, 'persistKey', 'UserAffinitiesStore'),
    u(b, 'migrations', [(e) => null]),
    (n.Z = new b(s.Z, {
        LOAD_USER_AFFINITIES_SUCCESS: v,
        LOAD_USER_AFFINITIES: E,
        LOAD_USER_AFFINITIES_FAILURE: g,
        LOGOUT: m
    }));
