n.d(t, {
    $6: () => f,
    YK: () => c,
    _o: () => _,
    bL: () => u,
    gl: () => s,
    rr: () => d
}),
    n(47120);
var i = n(695346),
    a = n(486472),
    o = n(430824);
n(626135);
var r = n(981631);
n(388032);
let l = 86400000 * r.eBq;
function c() {
    let e = i.h2.getSetting();
    return 0 === a.Z.totalUnavailableGuilds && (e = e.filter((e) => null != o.Z.getGuild(e))), new Set(e);
}
function s() {
    let e = i.zA.getSetting();
    return 0 === a.Z.totalUnavailableGuilds && (e = e.filter((e) => null != o.Z.getGuild(e))), new Set(e);
}
function _() {
    let e = i.SE.getSetting();
    return 0 === a.Z.totalUnavailableGuilds && (e = e.filter((e) => null != o.Z.getGuild(e))), new Set(e);
}
function d() {
    let e = i.iH.getSetting();
    return 0 === a.Z.totalUnavailableGuilds && (e = e.filter((e) => null != o.Z.getGuild(e))), new Set(e);
}
function u(e) {
    return (e & r.HGf) === r.HGf
        ? {
              all: !0,
              mutualFriends: !0,
              mutualGuilds: !0
          }
        : {
              all: !1,
              mutualFriends: (e & r.SOq.MUTUAL_FRIENDS) === r.SOq.MUTUAL_FRIENDS,
              mutualGuilds: (e & r.SOq.MUTUAL_GUILDS) === r.SOq.MUTUAL_GUILDS
          };
}
function f(e, t) {
    return !!(!t.verified || t.isStaff()) || (null != e && l > Date.now() - new Date(e.created_at).getTime());
}
