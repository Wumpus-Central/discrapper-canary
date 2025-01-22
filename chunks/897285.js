var i = r(47120);
var a = r(147913),
    o = r(914010),
    s = r(924301),
    l = r(482241);
function u(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let c = {},
    d = new Set(),
    f = new Set(),
    p = 1800000,
    h = async (e) => {
        if (!(0 === s.ZP.getGuildScheduledEventsForGuild(e).length || d.has(e) || f.has(e)))
            try {
                d.add(e), await l.Z.getGuildEventsForCurrentUser(e), f.add(e);
            } catch (n) {
                d.delete(e);
            }
    };
class _ extends a.Z {
    async getGuildEventUserCounts(e, n, r) {
        let i = r.filter((r) => null == c[''.concat(e, '-').concat(n, '-').concat(r)] || Date.now() - c[''.concat(e, '-').concat(n, '-').concat(r)] > p);
        if (!(Date.now() - c[''.concat(e, '-').concat(n)] < p) || 0 !== i.length) {
            (c[''.concat(e, '-').concat(n)] = Date.now()), i.forEach((r) => (c[''.concat(e, '-').concat(n, '-').concat(r)] = Date.now()));
            try {
                await l.Z.fetchGuildEventUserCounts(e, n, i);
            } catch (e) {}
        }
    }
    getGuildEventUsers(e, n, r) {
        return l.Z.fetchUsersForGuildEvent(e, n, r);
    }
    getGuildEventsForCurrentUser(e) {
        return h(e);
    }
    async handleConnectionOpen() {
        d.clear(), f.clear(), (c = {}), o.Z.getLastSelectedGuildId();
    }
    handleGuildUnavailable(e) {
        let { guildId: n } = e;
        d.delete(n), f.delete(n), delete c[n];
    }
    handleGuildDelete(e) {
        let { guild: n } = e,
            r = n.id;
        d.delete(r), f.delete(r), delete c[r];
    }
    handleInviteResolveSuccess(e) {
        var n;
        let { invite: r } = e,
            i = r.guild_scheduled_event,
            a = null === (n = r.guild) || void 0 === n ? void 0 : n.id;
        if (null != i && null != a) h(a);
    }
    async handleChannelSelect(e) {
        let { guildId: n } = e;
        if (null != n)
            for (let e of s.ZP.getGuildScheduledEventsForGuild(n))
                try {
                    await this.getGuildEventUserCounts(n, e.id, []);
                } finally {
                    await new Promise((e) => setTimeout(e, 200 * Math.random() + 50));
                }
    }
    constructor(...e) {
        super(...e),
            u(this, 'actions', {
                POST_CONNECTION_OPEN: () => this.handleConnectionOpen(),
                GUILD_DELETE: (e) => this.handleGuildDelete(e),
                GUILD_UNAVAILABLE: (e) => this.handleGuildUnavailable(e),
                INVITE_RESOLVE_SUCCESS: (e) => this.handleInviteResolveSuccess(e),
                CHANNEL_SELECT: (e) => this.handleChannelSelect(e)
            });
    }
}
n.Z = new _();
