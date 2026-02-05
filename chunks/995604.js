"use strict";
n.d(t, { A: () => o }), n(321073);
var r = n(626584),
    i = n(723176);
let a = new r.A("GuildEmojis");
class s {
    async getAsync(e) {
        let t = performance.now(),
            n = await i.A.emojis(e).getMapEntries(),
            r = performance.now();
        return a.log(`asynchronously loaded in ${r - t}ms (guilds: ${n.length})`), n;
    }
    actions = {
        BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
        CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
        GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
        GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
        GUILD_EMOJIS_UPDATE: (e, t) => this.handleGuildEmojisUpdate(e, t),
        GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t),
    };
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
                        ? (a.verbose(`Replacing ${e.entities.length} emojis for ${e.guildId}`),
                          this.replace(e.guildId, e.entities, t))
                        : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) &&
                          (a.verbose(
                              `Updating ${e.updatedEntities.length} and deleting ${e.deletedEntityIds.length} emojis for ${e.guildId}`,
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
}
let o = new s();
