n.d(t, { A: () => E });
var i = n(17928),
    s = n(228366),
    r = n(640631),
    l = n(626584),
    a = n(734057),
    u = n(232835),
    o = n(320095),
    d = n(383233),
    c = n(222823),
    h = n(935208);
class I {
    localNeeded = !0;
    messages = new Map();
    isLatest(e, t) {
        return this.messageGeneration(e, t) === t;
    }
    messageGeneration(e, t) {
        let n = this.messages.get(e);
        return null == n
            ? -1 / 0
            : n.generation !== t && null != n.message && n.message.id === c.Ay.lastMessageId(e)
              ? (this.messages.set(e, { ...n, generation: t }), t)
              : n.generation;
    }
    messageId(e) {
        let t = this.messages.get(e);
        return t?.message?.id ?? null;
    }
    messageRecord(e) {
        let t = this.messages.get(e);
        return (
            null == t || null == t.message || t.message instanceof d.Ay || (t.message = (0, o.rh)(t.message)),
            t?.message ?? null
        );
    }
    has(e) {
        return this.messages.has(e);
    }
    put(e, t, n) {
        this.messages.set(e, { message: t, generation: n });
    }
    putNew(e, t, n) {
        var i, s;
        let r = this.messages.get(e);
        null != t && ((i = t.id), null == (s = r?.message?.id) || h.default.compare(i, s) > 0) && this.put(e, t, n);
    }
    putMany(e, t) {
        for (let n of e) this.put(n.channel_id, n, t);
    }
    update(e) {
        if (null == e.id || null == e.channel_id) return;
        let t = e.channel_id,
            n = this.messages.get(t);
        if (n?.message?.id !== e.id) return;
        let i = n.message instanceof d.Ay ? (0, o.IU)(n.message, e) : (0, o.SP)(n.message, e);
        this.messages.set(t, { ...n, message: i });
    }
    delete(e) {
        this.messages.delete(e);
    }
}
let g = -1 / 0,
    f = new l.A("MessagePreviewStore");
class A extends i.Ay.Store {
    initialize() {
        this.waitFor(a.A, u.A);
    }
    guilds = new Map();
    generation = 0;
    constructor() {
        super(s.h, {
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
        return this.guilds.has(e) || this.guilds.set(e, new I()), this.guilds.get(e);
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
        let s = this.data(t);
        if (s?.messageId(n) !== i) return !1;
        s?.update(e.message);
    }
    handleThreadListSync(e) {
        this.data(e.guildId).putMany(e.mostRecentMessages ?? [], this.generation);
    }
    handleLoadMessagesSuccess(e) {
        let t = a.A.getBasicChannel(e.channelId);
        if (null == t) return !1;
        (0, r.D)(e.messages),
            e.isAfter || e.isBefore || e.hasMoreAfter
                ? this.data(t.guild_id).putNew(e.channelId, e.messages[0] ?? null, this.generation)
                : this.data(t.guild_id).put(e.channelId, e.messages[0] ?? null, this.generation);
    }
    handleLocalMessagesLoaded(e) {
        let t = a.A.getBasicChannel(e.channelId);
        null != t && ((0, r.D)(e.messages), this.data(t.guild_id).putNew(e.channelId, e.messages[0] ?? null, g));
    }
    handleMessagePreviewsLoaded(e) {
        f.verbose(`adding remote previews (guildId: ${e.guildId}, messages: ${e.messages.length})`);
        let t = this.data(e.guildId);
        for (let n of e.messages) t.isLatest(n.channel_id, this.generation) || t.put(n.channel_id, n, this.generation);
    }
    handleMessagePreviewsLocallyLoaded(e) {
        f.verbose(`adding local previews (guildId: ${e.guildId}, messages: ${e.messages.length})`);
        let t = this.data(e.guildId);
        for (let [n, i] of e.messages) t.has(n) || t.put(n, i, g);
        t.localNeeded = !1;
    }
    handleLogout(e) {
        this.guilds.clear();
    }
}
let E = new A();
