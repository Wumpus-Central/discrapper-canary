"use strict";
let r;
n.d(t, { A: () => E });
var i = n(311907),
    s = n(73153),
    a = n(194862),
    o = n(611010),
    l = n(927813),
    u = n(723702);
let c = l.A.Millis.DAY,
    d = new a.A(),
    _ = "",
    f = null,
    p = !1;
class h extends i.Ay.PersistedStore {
    static displayName = "NonGameStore";
    static persistKey = "NonGameStore";
    initialize(e) {
        null != e && (null != e.etag && (_ = e.etag), e.nonGames?.forEach((e) => d.set(e.id, e)));
    }
    getState() {
        return (0, u.isDesktop)() ? { etag: _, nonGames: d.values() } : { etag: "", nonGames: [] };
    }
    get nonGames() {
        return d.values();
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
        return p;
    }
    get ttl() {
        return c;
    }
    getById(e) {
        return d.get(e);
    }
    canFetch() {
        return !r && (null == f || Date.now() >= f + c);
    }
}
let E = new h(s.h, {
    NON_GAMES_DATABASE_FETCH: function () {
        r = !0;
    },
    NON_GAMES_DATABASE_FETCH_FAIL: function () {
        (r = !1), (p = !0);
    },
    NON_GAMES_DATABASE_UPDATE: function (e) {
        let { nonGames: t, etag: n } = e;
        for (let e of (null != n && _ !== n && (d.clear(), (_ = n)), t))
            d.set(e.id, {
                id: e.id,
                name: e.name,
                executables: (e.executables ?? []).map(o.lg),
                aliases: e.aliases ?? [],
                icon: e.icon_hash ?? void 0,
                thirdPartySkus: e.third_party_skus ?? [],
            });
        (r = void 0), (f = Date.now()), (p = !0);
    },
});
