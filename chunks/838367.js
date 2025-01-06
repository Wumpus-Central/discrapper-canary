var i,
    l,
    r,
    a,
    s,
    c,
    o = t(442837),
    u = t(570140),
    d = t(314897),
    h = t(900849);
((i = s || (s = {})).UNSET = 'unset'), (i.FETCHING = 'fetching'), (i.FAILED = 'failed'), (i.SUCCEEDED = 'succeeded');
let m = {};
class f extends (c = o.ZP.Store) {
    initialize() {
        this.waitFor(d.default);
    }
    isFetchingGuild(e) {
        let n = m[e];
        return null != n && 'fetching' === n.fetchState;
    }
    getGuild(e) {
        let n = m[e];
        return null != n ? n.guild : null;
    }
    hasFetchFailed(e) {
        let n = m[e];
        return null != n && 'failed' === n.fetchState;
    }
}
(a = 'GuildPopoutStore'),
    (r = 'displayName') in (l = f)
        ? Object.defineProperty(l, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[r] = a),
    (n.Z = new f(u.Z, {
        GUILD_POPOUT_FETCH_START: function (e) {
            let { guildId: n } = e;
            m[n] = {
                ...m[n],
                fetchState: 'fetching'
            };
        },
        GUILD_POPOUT_FETCH_SUCCESS: function (e) {
            let { guildId: n, guild: t } = e,
                i = (0, h.PP)(t);
            m[n] = {
                ...m[n],
                guild: i,
                fetchState: 'succeeded'
            };
        },
        GUILD_POPOUT_FETCH_FAILURE: function (e) {
            let { guildId: n } = e;
            m[n] = {
                ...m[n],
                fetchState: 'failed'
            };
        }
    }));
