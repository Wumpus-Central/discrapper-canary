n.d(t, { Z: () => p }), n(47120);
var i = n(147913),
    r = n(914010),
    a = n(924301),
    s = n(482241);
function o(e, t, n) {
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
let l = {},
    u = new Set(),
    c = new Set(),
    d = 1800000,
    f = async (e) => {
        if (!(0 === a.ZP.getGuildScheduledEventsForGuild(e).length || u.has(e) || c.has(e)))
            try {
                u.add(e), await s.Z.getGuildEventsForCurrentUser(e), c.add(e);
            } catch (t) {
                u.delete(e);
            }
    };
class _ extends i.Z {
    async getGuildEventUserCounts(e, t, n) {
        let i = n.filter((n) => null == l[''.concat(e, '-').concat(t, '-').concat(n)] || Date.now() - l[''.concat(e, '-').concat(t, '-').concat(n)] > d);
        if (!(Date.now() - l[''.concat(e, '-').concat(t)] < d) || 0 !== i.length) {
            (l[''.concat(e, '-').concat(t)] = Date.now()), i.forEach((n) => (l[''.concat(e, '-').concat(t, '-').concat(n)] = Date.now()));
            try {
                await s.Z.fetchGuildEventUserCounts(e, t, i);
            } catch (e) {}
        }
    }
    getGuildEventUsers(e, t, n) {
        return s.Z.fetchUsersForGuildEvent(e, t, n);
    }
    getGuildEventsForCurrentUser(e) {
        return f(e);
    }
    async handleConnectionOpen() {
        u.clear(), c.clear(), (l = {}), r.Z.getLastSelectedGuildId();
    }
    handleGuildUnavailable(e) {
        let { guildId: t } = e;
        u.delete(t), c.delete(t), delete l[t];
    }
    handleGuildDelete(e) {
        let { guild: t } = e,
            n = t.id;
        u.delete(n), c.delete(n), delete l[n];
    }
    handleInviteResolveSuccess(e) {
        var t;
        let { invite: n } = e,
            i = n.guild_scheduled_event,
            r = null === (t = n.guild) || void 0 === t ? void 0 : t.id;
        null != i && null != r && f(r);
    }
    async handleChannelSelect(e) {
        let { guildId: t } = e;
        if (null != t)
            for (let e of a.ZP.getGuildScheduledEventsForGuild(t))
                try {
                    await this.getGuildEventUserCounts(t, e.id, []);
                } finally {
                    await new Promise((e) => setTimeout(e, 200 * Math.random() + 50));
                }
    }
    constructor(...e) {
        super(...e),
            o(this, 'actions', {
                POST_CONNECTION_OPEN: () => this.handleConnectionOpen(),
                GUILD_DELETE: (e) => this.handleGuildDelete(e),
                GUILD_UNAVAILABLE: (e) => this.handleGuildUnavailable(e),
                INVITE_RESOLVE_SUCCESS: (e) => this.handleInviteResolveSuccess(e),
                CHANNEL_SELECT: (e) => this.handleChannelSelect(e)
            });
    }
}
let p = new _();
