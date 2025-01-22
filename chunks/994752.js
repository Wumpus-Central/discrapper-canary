var i,
    a = r(47120);
var o = r(442837),
    s = r(570140),
    l = r(664674);
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
let c = !1,
    d = new Map();
function f(e) {
    let { leaderboardResponse: n, intervalOffset: r } = e,
        { leaderboard: i } = n,
        { guild_id: a, leaderboard_id: o } = i,
        s = d.get(r);
    null == s && ((s = new Map()), d.set(r, s));
    let l = s.get(a);
    null == l && ((l = new Map()), s.set(a, l)), l.set(o, n);
}
function p() {
    d = new Map();
}
class h extends (i = o.ZP.Store) {
    getLeaderboards(e) {
        var n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return null === (n = d.get(r)) || void 0 === n ? void 0 : n.get(e);
    }
    get(e, n) {
        var r;
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return c ? l.Z : null === (r = this.getLeaderboardResponse(e, n, i)) || void 0 === r ? void 0 : r.leaderboard;
    }
    getLeaderboardResponse(e, n) {
        var r, i;
        let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return null === (i = d.get(a)) || void 0 === i ? void 0 : null === (r = i.get(e)) || void 0 === r ? void 0 : r.get(n);
    }
}
u(h, 'displayName', 'GuildLeaderboardStore'),
    (n.Z = new h(s.Z, {
        CONNECTION_OPEN: p,
        SET_GUILD_LEADERBOARD: f
    }));
