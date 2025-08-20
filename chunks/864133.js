n.d(t, { Z: () => f });
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
let s = { lastSeenInfos: {} },
    l = s;
function c(e) {
    let { guildId: t, lastSeenInfo: n } = e;
    l.lastSeenInfos[t] = n;
}
function u() {
    l = s;
}
class d extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        l = null != e ? e : s;
    }
    getState() {
        return l;
    }
    getGuildLastSeenInfo(e) {
        var t;
        return null != (t = l.lastSeenInfos[e]) ? t : null;
    }
}
o(d, "displayName", "GuildTagChangedCoachmarkStore"), o(d, "persistKey", "GuildTagChangedCoachmarkStore");
let f = new d(a.Z, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: c,
    LOGOUT: u,
});
