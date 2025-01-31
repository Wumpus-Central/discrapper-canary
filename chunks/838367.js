n.d(l, { Z: () => m });
var i,
    t,
    a,
    s = n(442837),
    r = n(570140),
    c = n(314897),
    d = n(900849);
let o = {};
class u extends (a = s.ZP.Store) {
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
(t = 'GuildPopoutStore'),
    (i = 'displayName') in u
        ? Object.defineProperty(u, i, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[i] = t);
let m = new u(r.Z, {
    GUILD_POPOUT_FETCH_START: function (e) {
        let { guildId: l } = e;
        o[l] = {
            ...o[l],
            fetchState: 'fetching'
        };
    },
    GUILD_POPOUT_FETCH_SUCCESS: function (e) {
        let { guildId: l, guild: n } = e,
            i = (0, d.PP)(n);
        o[l] = {
            ...o[l],
            guild: i,
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
