"use strict";
n.d(t, { A: () => h });
var r = n(311907),
    i = n(73153),
    a = n(626584),
    s = n(71393);
let o = new a.A("GuildAvailabilityStore"),
    l = new Set();
function u(e) {
    (l = new Set(e.unavailableGuilds)),
        e.unavailableGuilds.length > 0 &&
            o.warn(`${e.unavailableGuilds.length} guilds are unavailable on connection open: ${e.unavailableGuilds}`);
}
function c(e) {
    if (!l.has(e.guildId)) return !1;
    l.delete(e.guildId);
}
function d(e) {
    if (l.has(e.guildId)) return !1;
    let t = s.A.getGuild(e.guildId),
        n = "???";
    null != t && null != t.name && (n = t.name),
        o.warn(`Guild has gone unavailable: ${e.guildId} (${n})`),
        l.add(e.guildId);
}
function _(e) {
    if (!l.has(e.guild.id)) return !1;
    l.delete(e.guild.id), o.info(`Guild has become available: ${e.guild.id}`);
}
function f(e) {
    !0 !== e.guild.unavailable && l.delete(e.guild.id);
}
class p extends r.Ay.Store {
    static displayName = "GuildAvailabilityStore";
    initialize() {
        this.waitFor(s.A);
    }
    isUnavailable(e) {
        return null != e && l.has(e);
    }
    get totalGuilds() {
        return s.A.getGuildCount() + l.size;
    }
    get totalUnavailableGuilds() {
        return l.size;
    }
    get unavailableGuilds() {
        return Array.from(l);
    }
}
let h = new p(i.h, {
    CONNECTION_OPEN: u,
    OVERLAY_INITIALIZE: u,
    GUILD_UNAVAILABLE: d,
    GUILD_DELETE: f,
    GUILD_CREATE: _,
    GUILD_UPDATE: _,
    GUILD_GEO_RESTRICTED: c,
});
