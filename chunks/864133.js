n.d(t, { Z: () => d });
var a,
    r = n(442837),
    i = n(570140);
function l(e, t, n) {
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
class c extends (a = r.ZP.PersistedStore) {
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
l(c, "displayName", "GuildTagChangedCoachmarkStore"), l(c, "persistKey", "GuildTagChangedCoachmarkStore");
let d = new c(i.Z, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        o.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        o = s;
    },
});
