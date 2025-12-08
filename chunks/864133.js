n.d(t, { Z: () => d });
var a,
    l = n(442837),
    r = n(570140);
function i(e, t, n) {
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
class c extends (a = l.ZP.PersistedStore) {
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
i(c, "displayName", "GuildTagChangedCoachmarkStore"), i(c, "persistKey", "GuildTagChangedCoachmarkStore");
let d = new c(r.Z, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        o.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        o = s;
    },
});
