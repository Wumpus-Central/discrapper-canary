n.d(t, { Z: () => _ }), n(388685);
var r,
    i = n(442837),
    o = n(570140),
    a = n(664674);
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
let l = !1,
    c = new Map();
function u(e) {
    let { leaderboardResponse: t, intervalOffset: n } = e,
        { leaderboard: r } = t,
        { guild_id: i, leaderboard_id: o } = r,
        a = c.get(n);
    null == a && ((a = new Map()), c.set(n, a));
    let s = a.get(i);
    null == s && ((s = new Map()), a.set(i, s)), s.set(o, t);
}
function d() {
    c = new Map();
}
class f extends (r = i.ZP.Store) {
    getLeaderboards(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return null == (t = c.get(n)) ? void 0 : t.get(e);
    }
    get(e, t) {
        var n;
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return l ? a.Z : null == (n = this.getLeaderboardResponse(e, t, r)) ? void 0 : n.leaderboard;
    }
    getLeaderboardResponse(e, t) {
        var n, r;
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return null == (r = c.get(i)) || null == (n = r.get(e)) ? void 0 : n.get(t);
    }
}
s(f, 'displayName', 'GuildLeaderboardStore');
let _ = new f(o.Z, {
    CONNECTION_OPEN: d,
    SET_GUILD_LEADERBOARD: u
});
