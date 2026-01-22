n.d(t, { A: () => l }), n(896048), n(747238), n(812715), n(321073), n(866193);
var r = n(626584),
    i = n(723176);
function a(e, t, n) {
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
let s = new r.A("GuildEmojis");
class o {
    async getAsync(e) {
        let t = performance.now(),
            n = await i.A.emojis(e).getMapEntries(),
            r = performance.now();
        return s.log("asynchronously loaded in ".concat(r - t, "ms (guilds: ").concat(n.length, ")")), n;
    }
    handleConnectionOpen(e, t) {
        for (let n of e.guilds) this.handleOneGuildCreate(n, t);
    }
    handleGuildCreate(e, t) {
        this.handleOneGuildCreate(e.guild, t);
    }
    handleGuildUpdate(e, t) {
        this.replace(e.guild.id, e.guild.emojis, t);
    }
    handleGuildDelete(e, t) {
        this.delete(e.guild.id, t);
    }
    handleGuildEmojisUpdate(e, t) {
        this.replace(e.guildId, e.emojis, t);
    }
    handleBackgroundSync(e, t) {
        e.promisesForBackgroundSyncToWaitOn.push(
            Promise.all(
                e.emojis.map((e) => {
                    if ("unavailable" === e.dataMode) return Promise.resolve();
                    "full" === e.dataMode
                        ? (s.verbose("Replacing ".concat(e.entities.length, " emojis for ").concat(e.guildId)),
                          this.replace(e.guildId, e.entities, t))
                        : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) &&
                          (s.verbose(
                              "Updating "
                                  .concat(e.updatedEntities.length, " and deleting ")
                                  .concat(e.deletedEntityIds.length, " emojis for ")
                                  .concat(e.guildId),
                          ),
                          this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t));
                }),
            ),
        );
    }
    handleOneGuildCreate(e, t) {
        switch (e.emojis.op) {
            case "full_sync":
                this.replace(e.id, e.emojis.items, t);
                break;
            case "update":
                this.update(e.id, e.emojis.writes, e.emojis.deletes, t);
                break;
            default:
                e.emojis;
                return;
        }
    }
    resetInMemoryState() {}
    replace(e, t, n) {
        i.A.emojisTransaction(n).replaceAll(e, t);
    }
    delete(e, t) {
        i.A.emojisTransaction(t).delete(e);
    }
    update(e, t, n, r) {
        let a = i.A.emojisTransaction(r);
        for (let r of (a.putAll(e, t), n)) a.delete(e, r);
    }
    constructor() {
        a(this, "actions", {
            BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
            CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
            GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
            GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
            GUILD_EMOJIS_UPDATE: (e, t) => this.handleGuildEmojisUpdate(e, t),
            GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t),
        });
    }
}
let l = new o();
