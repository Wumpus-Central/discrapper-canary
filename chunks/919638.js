"use strict";
n.d(t, { A: () => _ });
var r = n(311907),
    i = n(73153),
    s = n(626584),
    a = n(71393);
let o = new s.A("GuildAvailabilityStore"),
    l = new Set();
function u(e) {
    (l = new Set(e.unavailableGuilds)),
        e.unavailableGuilds.length > 0 &&
            o.warn(`${e.unavailableGuilds.length} guilds are unavailable on connection open: ${e.unavailableGuilds}`);
}
function d(e) {
    if (!l.has(e.guild.id)) return !1;
    l.delete(e.guild.id), o.info(`Guild has become available: ${e.guild.id}`);
}
class c extends r.Ay.Store {
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
let _ = new c(i.h, {
    CONNECTION_OPEN: u,
    OVERLAY_INITIALIZE: u,
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
    GUILD_CREATE: d,
    GUILD_UPDATE: d,
    GUILD_GEO_RESTRICTED: function (e) {
        if (!l.has(e.guildId)) return !1;
        l.delete(e.guildId);
    },
});
