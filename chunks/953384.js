"use strict";
let r;
n.d(t, { A: () => I });
var i = n(311907),
    a = n(73153),
    s = n(194862),
    o = n(611010),
    l = n(927813),
    u = n(723702);
let c = l.A.Millis.DAY,
    d = new s.A(),
    _ = "",
    f = null,
    p = !1;
function h(e) {
    return {
        id: e.id,
        name: e.name,
        executables: (e.executables ?? []).map(o.lg),
        aliases: e.aliases ?? [],
        icon: e.icon_hash ?? void 0,
        thirdPartySkus: e.third_party_skus ?? [],
    };
}
function m() {
    r = !0;
}
function g() {
    (r = !1), (p = !0);
}
function E(e) {
    let { nonGames: t, etag: n } = e;
    for (let e of (null != n && _ !== n && (d.clear(), (_ = n)), t)) d.set(e.id, h(e));
    (r = void 0), (f = Date.now()), (p = !0);
}
class A extends i.Ay.PersistedStore {
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
let I = new A(a.h, { NON_GAMES_DATABASE_FETCH: m, NON_GAMES_DATABASE_FETCH_FAIL: g, NON_GAMES_DATABASE_UPDATE: E });
