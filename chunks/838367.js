s.d(l, { Z: () => m });
var a,
    n,
    i,
    t = s(442837),
    r = s(570140),
    c = s(314897),
    d = s(900849);
let o = {};
class u extends (i = t.ZP.Store) {
    initialize() {
        this.waitFor(c.default);
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
    (a = 'displayName') in u
        ? Object.defineProperty(u, a, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[a] = n);
let m = new u(r.Z, {
    GUILD_POPOUT_FETCH_START: function (e) {
        let { guildId: l } = e;
        o[l] = {
            ...o[l],
            fetchState: 'fetching'
        };
    },
    GUILD_POPOUT_FETCH_SUCCESS: function (e) {
        let { guildId: l, guild: s } = e,
            a = (0, d.PP)(s);
        o[l] = {
            ...o[l],
            guild: a,
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
