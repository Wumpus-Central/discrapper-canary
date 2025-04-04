n.d(t, { Z: () => p }), n(47120);
var r = n(147913),
    i = n(914010),
    o = n(924301),
    a = n(482241);
function s(e, t, n) {
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
    c = new Set(),
    u = new Set(),
    d = 1800000,
    f = async (e) => {
        if (!(0 === o.ZP.getGuildScheduledEventsForGuild(e).length || c.has(e)) && !u.has(e))
            try {
                c.add(e), await a.Z.getGuildEventsForCurrentUser(e), u.add(e);
            } catch (t) {
                c.delete(e);
            }
    };
class _ extends r.Z {
    async getGuildEventUserCounts(e, t, n) {
        let r = n.filter((n) => null == l[''.concat(e, '-').concat(t, '-').concat(n)] || Date.now() - l[''.concat(e, '-').concat(t, '-').concat(n)] > d);
        if (!(Date.now() - l[''.concat(e, '-').concat(t)] < d) || 0 !== r.length) {
            (l[''.concat(e, '-').concat(t)] = Date.now()), r.forEach((n) => (l[''.concat(e, '-').concat(t, '-').concat(n)] = Date.now()));
            try {
                await a.Z.fetchGuildEventUserCounts(e, t, r);
            } catch (e) {}
        }
    }
    getGuildEventUsers(e, t, n) {
        return a.Z.fetchUsersForGuildEvent(e, t, n);
    }
    getGuildEventsForCurrentUser(e) {
        return f(e);
    }
    async handleConnectionOpen() {
        c.clear(), u.clear(), (l = {}), i.Z.getLastSelectedGuildId();
    }
    handleGuildUnavailable(e) {
        let { guildId: t } = e;
        c.delete(t), u.delete(t), delete l[t];
    }
    handleGuildDelete(e) {
        let { guild: t } = e,
            n = t.id;
        c.delete(n), u.delete(n), delete l[n];
    }
    handleInviteResolveSuccess(e) {
        var t;
        let { invite: n } = e,
            r = n.guild_scheduled_event,
            i = null == (t = n.guild) ? void 0 : t.id;
        null != r && null != i && f(i);
    }
    async handleChannelSelect(e) {
        let { guildId: t } = e;
        if (null != t)
            for (let e of o.ZP.getGuildScheduledEventsForGuild(t))
                try {
                    await this.getGuildEventUserCounts(t, e.id, []);
                } finally {
                    await new Promise((e) => setTimeout(e, 200 * Math.random() + 50));
                }
    }
    constructor(...e) {
        super(...e),
            s(this, 'actions', {
                POST_CONNECTION_OPEN: () => this.handleConnectionOpen(),
                GUILD_DELETE: (e) => this.handleGuildDelete(e),
                GUILD_UNAVAILABLE: (e) => this.handleGuildUnavailable(e),
                INVITE_RESOLVE_SUCCESS: (e) => this.handleInviteResolveSuccess(e),
                CHANNEL_SELECT: (e) => this.handleChannelSelect(e)
            });
    }
}
let p = new _();
