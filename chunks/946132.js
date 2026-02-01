n.d(t, {
    A: () => g,
}),
    n(896048);
var r = n(311907),
    i = n(73153),
    l = n(640631),
    s = n(626584),
    a = n(734057),
    u = n(320501),
    o = n(595766);

function d(e, t, n) {
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
let c = -1 / 0,
    h = new s.A("MessagePreviewStore");
class f extends r.Ay.Store {
    initialize() {
        this.waitFor(a.A, u.A);
    }
    isLatest(e, t) {
        var n;
        let r = this.guilds.get(null != e ? e : null);
        return null != (n = null == r ? void 0 : r.isLatest(t, this.generation)) && n;
    }
    isLocalFetchNeeded(e) {
        var t, n;
        return null == (t = null == (n = this.guilds.get(e)) ? void 0 : n.localNeeded) || t;
    }
    message(e, t) {
        var n, r;
        return null != (n = null == (r = this.guilds.get(e)) ? void 0 : r.messageRecord(t)) ? n : null;
    }
    data(e) {
        return this.guilds.has(e) || this.guilds.set(e, new o.x()), this.guilds.get(e);
    }
    handleOneGuildCreate(e) {
        var t, n;
        let r = this.data(e.id);
        r.putMany(null != (t = e.lastMessages) ? t : [], this.generation),
            r.putMany(null != (n = e.threadMessages) ? n : [], this.generation),
            null != e.lastMessages && (r.localNeeded = !1);
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
        var t;
        if (e.optimistic || e.isPushNotification) return !1;
        this.data(null != (t = e.guildId) ? t : null).put(e.message.channel_id, e.message, this.generation);
    }
    handleMessageDelete(e) {
        var t, n;
        let r = null != (t = e.guildId) ? t : null;
        if ((null == (n = this.data(r)) ? void 0 : n.messageId(e.channelId)) === e.id) {
            let t = u.A.getMessages(e.channelId),
                n = t.hasMoreAfter ? null : t.last();
            null != n ? this.data(r).put(e.channelId, n, this.generation) : this.data(r).delete(e.channelId);
        }
    }
    handleMessageUpdate(e) {
        var t;
        let n = null != (t = e.guildId) ? t : null,
            r = e.message.channel_id,
            i = e.message.id;
        if (null == r || null == i) return !1;
        let l = this.data(n);
        if ((null == l ? void 0 : l.messageId(r)) !== i) return !1;
        null == l || l.update(e.message);
    }
    handleThreadListSync(e) {
        var t;
        this.data(e.guildId).putMany(null != (t = e.mostRecentMessages) ? t : [], this.generation);
    }
    handleLoadMessagesSuccess(e) {
        var t, n;
        let r = a.A.getBasicChannel(e.channelId);
        if (null == r) return !1;
        (0, l.D)(e.messages),
            e.isAfter || e.isBefore || e.hasMoreAfter
                ? this.data(r.guild_id).putNew(e.channelId, null != (n = e.messages[0]) ? n : null, this.generation)
                : this.data(r.guild_id).put(e.channelId, null != (t = e.messages[0]) ? t : null, this.generation);
    }
    handleLocalMessagesLoaded(e) {
        let t = a.A.getBasicChannel(e.channelId);
        if (null != t) {
            var n;
            (0, l.D)(e.messages), this.data(t.guild_id).putNew(e.channelId, null != (n = e.messages[0]) ? n : null, c);
        }
    }
    handleMessagePreviewsLoaded(e) {
        h.verbose("adding remote previews (guildId: ".concat(e.guildId, ", messages: ").concat(e.messages.length, ")"));
        let t = this.data(e.guildId);
        for (let n of e.messages) t.isLatest(n.channel_id, this.generation) || t.put(n.channel_id, n, this.generation);
    }
    handleMessagePreviewsLocallyLoaded(e) {
        h.verbose("adding local previews (guildId: ".concat(e.guildId, ", messages: ").concat(e.messages.length, ")"));
        let t = this.data(e.guildId);
        for (let [n, r] of e.messages) t.has(n) || t.put(n, r, c);
        t.localNeeded = !1;
    }
    handleLogout(e) {
        this.guilds.clear();
    }
    constructor() {
        super(i.h, {
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
        }),
            d(this, "guilds", new Map()),
            d(this, "generation", 0);
    }
}
let g = new f();
