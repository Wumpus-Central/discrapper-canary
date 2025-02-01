n.d(t, { Z: () => o }), n(47120);
var i = n(442837),
    r = n(570140);
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
class s extends i.ZP.Store {
    allGuildIds() {
        return this.guildIds;
    }
    isMember(e) {
        return this.guildIds.has(e);
    }
    handleConnectionOpen(e) {
        this.guildIds = new Set([...e.guilds.map((e) => e.id), ...e.unavailableGuilds]);
    }
    handleCacheLoaded(e) {
        this.guildIds = new Set(e.guilds.map((e) => e.id));
    }
    handleCacheLoadedLazy(e) {
        for (let t of e.guilds) this.guildIds.add(t.id);
    }
    handleGuildCreate(e) {
        this.guildIds.add(e.guild.id);
    }
    handleGuildDelete(e) {
        !0 !== e.guild.unavailable && this.guildIds.delete(e.guild.id);
    }
    constructor() {
        super(
            r.Z,
            {
                CACHE_LOADED: (e) => this.handleCacheLoaded(e),
                CACHE_LOADED_LAZY: (e) => this.handleCacheLoadedLazy(e),
                CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
                GUILD_CREATE: (e) => this.handleGuildCreate(e),
                GUILD_DELETE: (e) => this.handleGuildDelete(e)
            },
            r.c.Early
        ),
            a(this, 'guildIds', new Set());
    }
}
let o = new s();
