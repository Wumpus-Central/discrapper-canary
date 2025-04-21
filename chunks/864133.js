n.d(t, { Z: () => d });
var i,
    r = n(442837),
    s = n(570140);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let a = { lastSeenInfos: {} },
    o = a;
class c extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        o = null != e ? e : a;
    }
    getState() {
        return o;
    }
    getGuildLastSeenInfo(e) {
        var t;
        return null != (t = o.lastSeenInfos[e]) ? t : null;
    }
}
l(c, 'displayName', 'GuildTagChangedCoachmarkStore'), l(c, 'persistKey', 'GuildTagChangedCoachmarkStore');
let d = new c(s.Z, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        o.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        o = a;
    }
});
