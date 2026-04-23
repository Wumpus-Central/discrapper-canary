"use strict";
let i;
n.d(t, { A: () => f });
var r = n(17928),
    s = n(228366),
    a = n(194862),
    o = n(395671),
    l = n(927813),
    d = n(723702);
let _ = l.A.Millis.DAY,
    u = new a.A(),
    c = "",
    E = null,
    h = !1;
class m extends r.Ay.PersistedStore {
    static displayName = "NonGameStore";
    static persistKey = "NonGameStore";
    initialize(e) {
        null != e && (null != e.etag && (c = e.etag), e.nonGames?.forEach((e) => u.set(e.id, e)));
    }
    getState() {
        return (0, d.isDesktop)() ? { etag: c, nonGames: u.values() } : { etag: "", nonGames: [] };
    }
    get nonGames() {
        return u.values();
    }
    get fetching() {
        return !0 === i;
    }
    get etag() {
        return c;
    }
    get lastFetched() {
        return E;
    }
    get hasAttemptedFetch() {
        return h;
    }
    get ttl() {
        return _;
    }
    getById(e) {
        return u.get(e);
    }
    canFetch() {
        return !i && (null == E || Date.now() >= E + _);
    }
}
let f = new m(s.h, {
    NON_GAMES_DATABASE_FETCH: function () {
        i = !0;
    },
    NON_GAMES_DATABASE_FETCH_FAIL: function () {
        (i = !1), (h = !0);
    },
    NON_GAMES_DATABASE_UPDATE: function (e) {
        let { nonGames: t, etag: n } = e;
        for (let e of (null != n && c !== n && (u.clear(), (c = n)), t))
            u.set(e.id, {
                id: e.id,
                name: e.name,
                executables: (e.executables ?? []).map(o.lg),
                aliases: e.aliases ?? [],
                icon: e.icon_hash ?? void 0,
                thirdPartySkus: e.third_party_skus ?? [],
            });
        (i = void 0), (E = Date.now()), (h = !0);
    },
});
