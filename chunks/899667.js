n.d(t, { Z: () => I }), n(388685);
var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let s = {},
    l = null,
    c = [],
    u = !1,
    d = !1,
    f = null,
    p = null;
function _(e) {
    let { guildId: t, appliedBoosts: n } = e;
    s[t] = {
        subscriptions: n,
        lastFetchedAt: Date.now(),
    };
}
function m(e) {
    let { appliedGuildBoosts: t } = e;
    (u = !1), (c = t);
}
function h(e) {
    let { endsAt: t } = e;
    l = t;
}
function g() {
    d = !0;
}
function E(e) {
    let { appliedGuildBoost: t } = e,
        n = new Set(t.map((e) => e.id));
    (c = [...t, ...c.filter((e) => !n.has(e.id))]), (f = null), (d = !1);
}
function b(e) {
    let { error: t } = e;
    (d = !1), (f = t);
}
function y(e) {
    let { boostId: t } = e;
    (c = c.filter((e) => e.id !== t)), (d = !1);
}
function O(e) {
    let { error: t } = e;
    (d = !1), (p = t);
}
function v() {
    u = !0;
}
class S extends (r = i.ZP.Store) {
    getAppliedGuildBoostsForGuild(e) {
        return null != s[e] ? s[e].subscriptions : null;
    }
    getLastFetchedAtForGuild(e) {
        return null != s[e] ? s[e].lastFetchedAt : null;
    }
    getCurrentUserAppliedBoosts() {
        return c;
    }
    getAppliedGuildBoost(e) {
        return c.find((t) => t.id === e);
    }
    get isModifyingAppliedBoost() {
        return d;
    }
    get applyBoostError() {
        return f;
    }
    get unapplyBoostError() {
        return p;
    }
    get cooldownEndsAt() {
        return l;
    }
    get isFetchingCurrentUserAppliedBoosts() {
        return u;
    }
}
o(S, "displayName", "AppliedGuildBoostStore");
let I = new S(a.Z, {
    GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: _,
    USER_APPLIED_BOOSTS_FETCH_SUCCESS: m,
    APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: h,
    GUILD_UNAPPLY_BOOST_START: g,
    GUILD_APPLY_BOOST_START: g,
    GUILD_APPLY_BOOST_SUCCESS: E,
    GUILD_APPLY_BOOST_FAIL: b,
    GUILD_UNAPPLY_BOOST_SUCCESS: y,
    GUILD_UNAPPLY_BOOST_FAIL: O,
    USER_APPLIED_BOOSTS_FETCH_START: v,
});
