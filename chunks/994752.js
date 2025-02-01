n.d(t, { Z: () => _ }), n(47120);
var i,
    r = n(442837),
    a = n(570140),
    s = n(664674);
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
let l = !1,
    u = new Map();
function c(e) {
    let { leaderboardResponse: t, intervalOffset: n } = e,
        { leaderboard: i } = t,
        { guild_id: r, leaderboard_id: a } = i,
        s = u.get(n);
    null == s && ((s = new Map()), u.set(n, s));
    let o = s.get(r);
    null == o && ((o = new Map()), s.set(r, o)), o.set(a, t);
}
function d() {
    u = new Map();
}
class f extends (i = r.ZP.Store) {
    getLeaderboards(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return null === (t = u.get(n)) || void 0 === t ? void 0 : t.get(e);
    }
    get(e, t) {
        var n;
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return l ? s.Z : null === (n = this.getLeaderboardResponse(e, t, i)) || void 0 === n ? void 0 : n.leaderboard;
    }
    getLeaderboardResponse(e, t) {
        var n, i;
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return null === (i = u.get(r)) || void 0 === i ? void 0 : null === (n = i.get(e)) || void 0 === n ? void 0 : n.get(t);
    }
}
o(f, 'displayName', 'GuildLeaderboardStore');
let _ = new f(a.Z, {
    CONNECTION_OPEN: d,
    SET_GUILD_LEADERBOARD: c
});
