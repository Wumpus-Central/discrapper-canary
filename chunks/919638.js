n.d(t, { A: () => g }), n(896048);
var r,
    i = n(311907),
    a = n(73153),
    s = n(626584),
    o = n(71393);
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
let c = new s.A("GuildAvailabilityStore"),
    u = new Set();
function d(e) {
    (u = new Set(e.unavailableGuilds)),
        e.unavailableGuilds.length > 0 &&
            c.warn(
                ""
                    .concat(e.unavailableGuilds.length, " guilds are unavailable on connection open: ")
                    .concat(e.unavailableGuilds),
            );
}
function f(e) {
    if (!u.has(e.guildId)) return !1;
    u.delete(e.guildId);
}
function p(e) {
    if (u.has(e.guildId)) return !1;
    let t = o.A.getGuild(e.guildId),
        n = "???";
    null != t && null != t.name && (n = t.name),
        c.warn("Guild has gone unavailable: ".concat(e.guildId, " (").concat(n, ")")),
        u.add(e.guildId);
}
function _(e) {
    if (!u.has(e.guild.id)) return !1;
    u.delete(e.guild.id), c.info("Guild has become available: ".concat(e.guild.id));
}
function h(e) {
    !0 !== e.guild.unavailable && u.delete(e.guild.id);
}
class m extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(o.A);
    }
    isUnavailable(e) {
        return null != e && u.has(e);
    }
    get totalGuilds() {
        return o.A.getGuildCount() + u.size;
    }
    get totalUnavailableGuilds() {
        return u.size;
    }
    get unavailableGuilds() {
        return Array.from(u);
    }
}
l(m, "displayName", "GuildAvailabilityStore");
let g = new m(a.h, {
    CONNECTION_OPEN: d,
    OVERLAY_INITIALIZE: d,
    GUILD_UNAVAILABLE: p,
    GUILD_DELETE: h,
    GUILD_CREATE: _,
    GUILD_UPDATE: _,
    GUILD_GEO_RESTRICTED: f,
});
