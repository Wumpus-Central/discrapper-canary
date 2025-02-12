a.d(l, { Z: () => m });
var s,
    n,
    i,
    t = a(442837),
    r = a(570140),
    d = a(314897),
    c = a(900849);
let o = {};
class u extends (i = t.ZP.Store) {
    initialize() {
        this.waitFor(d.default);
    }
    isFetchingGuild(e) {
        let l = o[e];
        return null != l && 'fetching' === l.fetchState;
    }
    getGuild(e) {
        let l = o[e];
        return null != l ? l.guild : null;
    }
    hasFetchFailed(e) {
        let l = o[e];
        return null != l && 'failed' === l.fetchState;
    }
}
(n = 'GuildPopoutStore'),
    (s = 'displayName') in u
        ? Object.defineProperty(u, s, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[s] = n);
let m = new u(r.Z, {
    GUILD_POPOUT_FETCH_START: function (e) {
        let { guildId: l } = e;
        o[l] = {
            ...o[l],
            fetchState: 'fetching'
        };
    },
    GUILD_POPOUT_FETCH_SUCCESS: function (e) {
        let { guildId: l, guild: a } = e,
            s = (0, c.PP)(a);
        o[l] = {
            ...o[l],
            guild: s,
            fetchState: 'succeeded'
        };
    },
    GUILD_POPOUT_FETCH_FAILURE: function (e) {
        let { guildId: l } = e;
        o[l] = {
            ...o[l],
            fetchState: 'failed'
        };
    }
});
