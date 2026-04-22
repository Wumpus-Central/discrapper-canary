"use strict";
n.d(t, { A: () => a }), n(321073);
var r = n(626584),
    i = n(723176);
let s = new r.A("GuildEmojis"),
    a = new (class {
        async getAsync(e) {
            let t = performance.now(),
                n = await i.A.emojis(e).getMapEntries(),
                r = performance.now();
            return s.log(`asynchronously loaded in ${r - t}ms (guilds: ${n.length})`), n;
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
            let n = [...e.guilds.map((e) => e.id), ...e.unavailableGuilds];
            for (let r of (i.A.emojisTransaction(t).deleteAllExcept(n), e.guilds)) this.handleOneGuildCreate(r, t);
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
                            ? (s.verbose(`Replacing ${e.entities.length} emojis for ${e.guildId}`),
                              this.replace(e.guildId, e.entities, t))
                            : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) &&
                              (s.verbose(
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
            let s = i.A.emojisTransaction(r);
            for (let r of (s.putAll(e, t), n)) s.delete(e, r);
        }
    })();
