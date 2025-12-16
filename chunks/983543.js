n.d(t, { Z: () => S }), n(388685);
var r = n(392711),
    i = n.n(r),
    a = n(544891),
    o = n(570140),
    s = n(147913),
    l = n(287328),
    c = n(710845),
    u = n(38618),
    d = n(131704),
    f = n(314897),
    p = n(592125),
    _ = n(584731),
    m = n(620778),
    h = n(981631);
function g(e, t, n) {
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
let E = new c.Z("MessagePreviewManager"),
    b = 30,
    y = 1000,
    O = 5;
class v extends s.Z {
    addWant(e) {
        var t;
        let n = p.Z.getBasicChannel(e);
        if (null == n) return;
        let r = null != (t = n.guild_id) ? t : null;
        (0, d.Q5)(n.type) ||
            _.Z.isLatest(r, e) ||
            (this.getOrCreate(r).addWant(e), this.fetchLocal(r), this.remoteTick());
    }
    async fetchLocal(e) {
        if (!(!_.Z.isLocalFetchNeeded(e) || this.localFetching.has(e)))
            try {
                var t;
                E.verbose("fetching local previews (via: database, guild_id: ".concat(e, ")")),
                    this.localFetching.add(e);
                let n = f.default.getId(),
                    r = await (null == (t = l.Z.messages()) ? void 0 : t.getMostRecents(e));
                null != r &&
                    n === f.default.getId() &&
                    o.Z.dispatch({
                        type: "MESSAGE_PREVIEWS_LOCALLY_LOADED",
                        guildId: e,
                        messages: r.map((e) => {
                            let [t, n] = e;
                            return [t, n.message];
                        }),
                    });
            } catch (e) {
                E.log("couldn't fetch local previews (error: ".concat(e, ")"));
            } finally {
                this.localFetching.delete(e);
            }
    }
    fetchGuilds(e, t) {
        let n = t.nextWants(y);
        return 0 === n.length
            ? Promise.resolve()
            : t.try(
                  n,
                  () => (
                      E.verbose(
                          "fetching guild previews (via: gateway, guild_id: "
                              .concat(e, ", channel_ids: ")
                              .concat(n.join(", "), ")"),
                      ),
                      u.Z.getSocket().requestLastMessages(e, n),
                      Promise.resolve()
                  ),
              );
    }
    fetchDms(e) {
        let t = e.nextWants(b);
        return 0 === t.length
            ? Promise.resolve()
            : e.try(t, async () => {
                  E.verbose("fetching dm previews (via: http, channel_ids: ".concat(t.join(", "), ")"));
                  let e = (
                      await a.tn.post({
                          url: h.ANM.MESSAGE_PREVIEWS,
                          body: { channel_ids: t },
                          rejectWithError: !1,
                      })
                  ).body;
                  o.Z.dispatch({
                      type: "MESSAGE_PREVIEWS_LOADED",
                      guildId: null,
                      messages: e,
                  });
              });
    }
    syncChannel(e, t) {
        let n = this.remote.get(e);
        null != n && _.Z.isLatest(e, t) && n.removeWant(t);
    }
    getOrCreate(e) {
        return this.remote.has(e) || this.remote.set(e, new m.p()), this.remote.get(e);
    }
    cleanup() {
        for (let [e, t] of this.remote) t.empty() && this.remote.delete(e);
    }
    handleConnectionOpenSupplemental() {
        this.handleConnectionResumed(!1);
    }
    handleConnectionResumed() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        this.tickQueued && !this.remoteTicking
            ? (this.remoteTick(), this.remoteTick.flush())
            : e && (this.localFetching.clear(), this.remote.clear(), (this.remoteTicking = !1));
    }
    handleGuildCreate(e) {
        this.remote.delete(e.guild.id);
    }
    handleGuildDelete(e) {
        this.remote.delete(e.guild.id);
    }
    handleLogout() {
        this.localFetching.clear(), this.remote.clear(), (this.remoteTicking = !1);
    }
    handleMessageCreate(e) {
        var t;
        this.syncChannel(null != (t = e.guildId) ? t : null, e.channelId);
    }
    handleMessageDelete(e) {
        var t;
        this.syncChannel(null != (t = e.guildId) ? t : null, e.channelId);
    }
    handleMessageUpdate(e) {
        if (null != e.message.channel_id) {
            var t;
            this.syncChannel(null != (t = e.guildId) ? t : null, e.message.channel_id);
        }
    }
    handleMessagesLoaded(e) {
        var t, n;
        let r = p.Z.getBasicChannel(e.channelId),
            i = null != (t = null == r ? void 0 : r.guild_id) ? t : null;
        if (null != r) for (let t of null != (n = e.messages) ? n : []) this.syncChannel(i, t.channel_id);
    }
    handleThreadListSync(e) {
        let t = this.remote.get(e.guildId);
        if (null != t) {
            var n;
            for (let r of null != (n = e.mostRecentMessages) ? n : []) t.removeWant(r.channel_id);
        }
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            g(this, "remote", new Map()),
            g(this, "remoteTicking", !1),
            g(this, "tickQueued", !1),
            g(this, "localFetching", new Set()),
            g(this, "actions", {
                CONNECTION_OPEN_SUPPLEMENTAL: () => this.handleConnectionOpenSupplemental(),
                CONNECTION_RESUMED: () => this.handleConnectionResumed(),
                GUILD_CREATE: (e) => this.handleGuildCreate(e),
                GUILD_DELETE: (e) => this.handleGuildDelete(e),
                LOAD_MESSAGES_SUCCESS: (e) => this.handleMessagesLoaded(e),
                LOCAL_MESSAGES_LOADED: (e) => this.handleMessagesLoaded(e),
                LOGOUT: () => this.handleLogout(),
                MESSAGE_CREATE: (e) => this.handleMessageCreate(e),
                MESSAGE_DELETE: (e) => this.handleMessageDelete(e),
                MESSAGE_UPDATE: (e) => this.handleMessageUpdate(e),
                THREAD_LIST_SYNC: (e) => this.handleThreadListSync(e),
            }),
            g(
                this,
                "remoteTick",
                i().debounce(async function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    if (!u.Z.isConnected()) {
                        t.tickQueued = !0;
                        return;
                    }
                    if (!t.remoteTicking && !(e > O)) {
                        t.tickQueued = !1;
                        try {
                            for (let [e, n] of ((t.remoteTicking = !0), t.remote))
                                await (null == e ? t.fetchDms(n) : t.fetchGuilds(e, n));
                            t.cleanup(), (t.remoteTicking = !1);
                        } catch (n) {
                            E.log("couldn't fetch message previews (attempt: ".concat(e, ", error: ").concat(n, ")")),
                                (t.remoteTicking = !1),
                                t.remoteTick(e + 1);
                        }
                    }
                }, 100),
            );
    }
}
let S = new v();
