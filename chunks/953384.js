"use strict";
let i;
n.d(t, { A: () => I });
var r = n(17928),
    a = n(228366),
    s = n(194862),
    l = n(395671),
    o = n(927813),
    d = n(723702);
let c = o.A.Millis.DAY,
    u = new s.A(),
    _ = "",
    E = null,
    A = !1;
class h extends r.Ay.PersistedStore {
    static displayName = "NonGameStore";
    static persistKey = "NonGameStore";
    initialize(e) {
        null != e && (null != e.etag && (_ = e.etag), e.nonGames?.forEach((e) => u.set(e.id, e)));
    }
    getState() {
        return (0, d.isDesktop)() ? { etag: _, nonGames: u.values() } : { etag: "", nonGames: [] };
    }
    get nonGames() {
        return u.values();
    }
    get fetching() {
        return !0 === i;
    }
    get etag() {
        return _;
    }
    get lastFetched() {
        return E;
    }
    get hasAttemptedFetch() {
        return A;
    }
    get ttl() {
        return c;
    }
    getById(e) {
        return u.get(e);
    }
    canFetch() {
        return !i && (null == E || Date.now() >= E + c);
    }
}
let I = new h(a.h, {
    NON_GAMES_DATABASE_FETCH: function () {
        i = !0;
    },
    NON_GAMES_DATABASE_FETCH_FAIL: function () {
        (i = !1), (A = !0);
    },
    NON_GAMES_DATABASE_UPDATE: function (e) {
        let { nonGames: t, etag: n } = e;
        for (let e of (null != n && _ !== n && (u.clear(), (_ = n)), t))
            u.set(e.id, {
                id: e.id,
                name: e.name,
                executables: (e.executables ?? []).map(l.lg),
                aliases: e.aliases ?? [],
                thirdPartySkus: e.third_party_skus ?? [],
            });
        (i = void 0), (E = Date.now()), (A = !0);
    },
});
