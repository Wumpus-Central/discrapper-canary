"use strict";
n.d(t, { A: () => _ });
var i = n(17928),
    r = n(228366),
    a = n(626584),
    s = n(71393);
let l = new a.A("GuildAvailabilityStore"),
    o = new Set();
function d(e) {
    (o = new Set(e.unavailableGuilds)),
        e.unavailableGuilds.length > 0 &&
            l.warn(`${e.unavailableGuilds.length} guilds are unavailable on connection open: ${e.unavailableGuilds}`);
}
function c(e) {
    if (!o.has(e.guild.id)) return !1;
    o.delete(e.guild.id), l.info(`Guild has become available: ${e.guild.id}`);
}
class u extends i.Ay.Store {
    static displayName = "GuildAvailabilityStore";
    initialize() {
        this.waitFor(s.A);
    }
    isUnavailable(e) {
        return null != e && o.has(e);
    }
    get totalGuilds() {
        return s.A.getGuildCount() + o.size;
    }
    get totalUnavailableGuilds() {
        return o.size;
    }
    get unavailableGuilds() {
        return Array.from(o);
    }
}
let _ = new u(r.h, {
    CONNECTION_OPEN: d,
    OVERLAY_INITIALIZE: d,
    GUILD_UNAVAILABLE: function (e) {
        if (o.has(e.guildId)) return !1;
        let t = s.A.getGuild(e.guildId),
            n = "???";
        null != t && null != t.name && (n = t.name),
            l.warn(`Guild has gone unavailable: ${e.guildId} (${n})`),
            o.add(e.guildId);
    },
    GUILD_DELETE: function (e) {
        !0 !== e.guild.unavailable && o.delete(e.guild.id);
    },
    GUILD_CREATE: c,
    GUILD_UPDATE: c,
    GUILD_GEO_RESTRICTED: function (e) {
        if (!o.has(e.guildId)) return !1;
        o.delete(e.guildId);
    },
});
