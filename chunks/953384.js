"use strict";
let r;
n.d(t, { A: () => p });
var i = n(311907),
    s = n(73153),
    a = n(194862),
    o = n(611010),
    l = n(927813),
    u = n(723702);
let d = l.A.Millis.DAY,
    c = new a.A(),
    _ = "",
    f = null,
    E = !1;
class h extends i.Ay.PersistedStore {
    static displayName = "NonGameStore";
    static persistKey = "NonGameStore";
    initialize(e) {
        null != e && (null != e.etag && (_ = e.etag), e.nonGames?.forEach((e) => c.set(e.id, e)));
    }
    getState() {
        return (0, u.isDesktop)() ? { etag: _, nonGames: c.values() } : { etag: "", nonGames: [] };
    }
    get nonGames() {
        return c.values();
    }
    get fetching() {
        return !0 === r;
    }
    get etag() {
        return _;
    }
    get lastFetched() {
        return f;
    }
    get hasAttemptedFetch() {
        return E;
    }
    get ttl() {
        return d;
    }
    getById(e) {
        return c.get(e);
    }
    canFetch() {
        return !r && (null == f || Date.now() >= f + d);
    }
}
let p = new h(s.h, {
    NON_GAMES_DATABASE_FETCH: function () {
        r = !0;
    },
    NON_GAMES_DATABASE_FETCH_FAIL: function () {
        (r = !1), (E = !0);
    },
    NON_GAMES_DATABASE_UPDATE: function (e) {
        let { nonGames: t, etag: n } = e;
        for (let e of (null != n && _ !== n && (c.clear(), (_ = n)), t))
            c.set(e.id, {
                id: e.id,
                name: e.name,
                executables: (e.executables ?? []).map(o.lg),
                aliases: e.aliases ?? [],
                icon: e.icon_hash ?? void 0,
                thirdPartySkus: e.third_party_skus ?? [],
            });
        (r = void 0), (f = Date.now()), (E = !0);
    },
});
