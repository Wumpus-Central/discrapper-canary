n.d(t, { A: () => I });
var i = n(311907),
    r = n(73153),
    s = n(640631),
    l = n(626584),
    a = n(734057),
    u = n(320501),
    o = n(595766);
let d = -1 / 0,
    c = new l.A("MessagePreviewStore");
class h extends i.Ay.Store {
    initialize() {
        this.waitFor(a.A, u.A);
    }
    guilds = new Map();
    generation = 0;
    constructor() {
        super(r.h, {
            CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
            GUILD_CREATE: (e) => this.handleGuildCreate(e),
            GUILD_DELETE: (e) => this.handleGuildDelete(e),
            LOAD_MESSAGES_SUCCESS: (e) => this.handleLoadMessagesSuccess(e),
            LOCAL_MESSAGES_LOADED: (e) => this.handleLocalMessagesLoaded(e),
            LOGOUT: (e) => this.handleLogout(e),
            MESSAGE_CREATE: (e) => this.handleMessageCreate(e),
            MESSAGE_DELETE: (e) => this.handleMessageDelete(e),
            MESSAGE_PREVIEWS_LOADED: (e) => this.handleMessagePreviewsLoaded(e),
            MESSAGE_PREVIEWS_LOCALLY_LOADED: (e) => this.handleMessagePreviewsLocallyLoaded(e),
            MESSAGE_UPDATE: (e) => this.handleMessageUpdate(e),
            THREAD_LIST_SYNC: (e) => this.handleThreadListSync(e),
        });
    }
    isLatest(e, t) {
        let n = this.guilds.get(e ?? null);
        return n?.isLatest(t, this.generation) ?? !1;
    }
    isLocalFetchNeeded(e) {
        return this.guilds.get(e)?.localNeeded ?? !0;
    }
    message(e, t) {
        return this.guilds.get(e)?.messageRecord(t) ?? null;
    }
    data(e) {
        return this.guilds.has(e) || this.guilds.set(e, new o.x()), this.guilds.get(e);
    }
    handleOneGuildCreate(e) {
        let t = this.data(e.id);
        t.putMany(e.lastMessages ?? [], this.generation),
            t.putMany(e.threadMessages ?? [], this.generation),
            null != e.lastMessages && (t.localNeeded = !1);
    }
    handleConnectionOpen(e) {
        for (let t of ((this.generation += 1), e.guilds)) this.handleOneGuildCreate(t);
    }
    handleGuildCreate(e) {
        this.handleOneGuildCreate(e.guild);
    }
    handleGuildDelete(e) {
        this.guilds.delete(e.guild.id);
    }
    handleMessageCreate(e) {
        if (e.optimistic || e.isPushNotification) return !1;
        this.data(e.guildId ?? null).put(e.message.channel_id, e.message, this.generation);
    }
    handleMessageDelete(e) {
        let t = e.guildId ?? null;
        if (this.data(t)?.messageId(e.channelId) === e.id) {
            let n = u.A.getMessages(e.channelId),
                i = n.hasMoreAfter ? null : n.last();
            null != i ? this.data(t).put(e.channelId, i, this.generation) : this.data(t).delete(e.channelId);
        }
    }
    handleMessageUpdate(e) {
        let t = e.guildId ?? null,
            n = e.message.channel_id,
            i = e.message.id;
        if (null == n || null == i) return !1;
        let r = this.data(t);
        if (r?.messageId(n) !== i) return !1;
        r?.update(e.message);
    }
    handleThreadListSync(e) {
        this.data(e.guildId).putMany(e.mostRecentMessages ?? [], this.generation);
    }
    handleLoadMessagesSuccess(e) {
        let t = a.A.getBasicChannel(e.channelId);
        if (null == t) return !1;
        (0, s.D)(e.messages),
            e.isAfter || e.isBefore || e.hasMoreAfter
                ? this.data(t.guild_id).putNew(e.channelId, e.messages[0] ?? null, this.generation)
                : this.data(t.guild_id).put(e.channelId, e.messages[0] ?? null, this.generation);
    }
    handleLocalMessagesLoaded(e) {
        let t = a.A.getBasicChannel(e.channelId);
        null != t && ((0, s.D)(e.messages), this.data(t.guild_id).putNew(e.channelId, e.messages[0] ?? null, d));
    }
    handleMessagePreviewsLoaded(e) {
        c.verbose(`adding remote previews (guildId: ${e.guildId}, messages: ${e.messages.length})`);
        let t = this.data(e.guildId);
        for (let n of e.messages) t.isLatest(n.channel_id, this.generation) || t.put(n.channel_id, n, this.generation);
    }
    handleMessagePreviewsLocallyLoaded(e) {
        c.verbose(`adding local previews (guildId: ${e.guildId}, messages: ${e.messages.length})`);
        let t = this.data(e.guildId);
        for (let [n, i] of e.messages) t.has(n) || t.put(n, i, d);
        t.localNeeded = !1;
    }
    handleLogout(e) {
        this.guilds.clear();
    }
}
let I = new h();
