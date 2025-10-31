n.d(t, { Z: () => d });
var a,
    i = n(442837),
    l = n(570140);
function r(e, t, n) {
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
    o = s;
class c extends (a = i.ZP.PersistedStore) {
    initialize(e) {
        o = null != e ? e : s;
    }
    getState() {
        return o;
    }
    getGuildLastSeenInfo(e) {
        var t;
        return null != (t = o.lastSeenInfos[e]) ? t : null;
    }
}
r(c, "displayName", "GuildTagChangedCoachmarkStore"), r(c, "persistKey", "GuildTagChangedCoachmarkStore");
let d = new c(l.Z, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        o.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        o = s;
    },
});
