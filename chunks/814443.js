n.d(t, { Z: () => y }), n(47120);
var i,
    r = n(442837),
    a = n(570140),
    s = n(699516);
function o(e, t, n) {
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
let l = 86400000,
    u = !1,
    c = Object.freeze({
        userAffinities: [],
        affinityUserIds: new Set(),
        lastFetched: 0
    }),
    d = Object.freeze({
        userAffinitiesMap: new Map(),
        affinityUserIds: new Set()
    }),
    f = { ...c },
    _ = { ...d };
function p() {
    (f = { ...c }), (_ = { ...d });
}
function h() {
    u = !1;
}
function m() {
    u = !0;
}
function g(e) {
    var t;
    let { affinities: n } = e;
    (f.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : []), (f.lastFetched = Date.now()), E(), (u = !1);
}
function E() {
    let e = new Map(
            f.userAffinities
                .filter((e) => {
                    let { user_id: t } = e;
                    return !s.Z.isBlockedOrIgnored(t);
                })
                .map((e) => [e.user_id, e])
        ),
        t = new Set(e.keys());
    _ = {
        userAffinitiesMap: e,
        affinityUserIds: t
    };
}
class v extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(s.Z), null != e && ((f.userAffinities = e.userAffinities), (f.lastFetched = e.lastFetched), E()), this.syncWith([s.Z], E);
    }
    needsRefresh() {
        return !u && Date.now() - f.lastFetched > l;
    }
    getFetching() {
        return u;
    }
    getState() {
        return f;
    }
    getUserAffinities() {
        return f.userAffinities;
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
o(v, 'displayName', 'UserAffinitiesStore'), o(v, 'persistKey', 'UserAffinitiesStore'), o(v, 'migrations', [(e) => null]);
let y = new v(a.Z, {
    LOAD_USER_AFFINITIES_SUCCESS: g,
    LOAD_USER_AFFINITIES: m,
    LOAD_USER_AFFINITIES_FAILURE: h,
    LOGOUT: p
});
