"use strict";
n.d(t, { A: () => c });
var i = n(17928),
    r = n(228366),
    s = n(626584),
    a = n(71393);
let o = new s.A("GuildAvailabilityStore"),
    l = new Set();
function d(e) {
    (l = new Set(e.unavailableGuilds)),
        e.unavailableGuilds.length > 0 &&
            o.warn(`${e.unavailableGuilds.length} guilds are unavailable on connection open: ${e.unavailableGuilds}`);
}
function _(e) {
    if (!l.has(e.guild.id)) return !1;
    l.delete(e.guild.id), o.info(`Guild has become available: ${e.guild.id}`);
}
class u extends i.Ay.Store {
    static displayName = "GuildAvailabilityStore";
    initialize() {
        this.waitFor(a.A);
    }
    isUnavailable(e) {
        return null != e && l.has(e);
    }
    get totalGuilds() {
        return a.A.getGuildCount() + l.size;
    }
    get totalUnavailableGuilds() {
        return l.size;
    }
    get unavailableGuilds() {
        return Array.from(l);
    }
}
let c = new u(r.h, {
    CONNECTION_OPEN: d,
    OVERLAY_INITIALIZE: d,
    GUILD_UNAVAILABLE: function (e) {
        if (l.has(e.guildId)) return !1;
        let t = a.A.getGuild(e.guildId),
            n = "???";
        null != t && null != t.name && (n = t.name),
            o.warn(`Guild has gone unavailable: ${e.guildId} (${n})`),
            l.add(e.guildId);
    },
    GUILD_DELETE: function (e) {
        !0 !== e.guild.unavailable && l.delete(e.guild.id);
    },
    GUILD_CREATE: _,
    GUILD_UPDATE: _,
    GUILD_GEO_RESTRICTED: function (e) {
        if (!l.has(e.guildId)) return !1;
        l.delete(e.guildId);
    },
});
