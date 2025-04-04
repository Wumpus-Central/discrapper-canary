n.d(t, { Z: () => d });
var r,
    i = n(442837),
    s = n(570140);
function a(e, t, n) {
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
let l = { lastSeenInfos: {} },
    o = l;
class c extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        o = null != e ? e : l;
    }
    getState() {
        return o;
    }
    getGuildLastSeenInfo(e) {
        var t;
        return null != (t = o.lastSeenInfos[e]) ? t : null;
    }
}
a(c, 'displayName', 'GuildTagChangedCoachmarkStore'), a(c, 'persistKey', 'GuildTagChangedCoachmarkStore');
let d = new c(s.Z, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        o.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        o = l;
    }
});
