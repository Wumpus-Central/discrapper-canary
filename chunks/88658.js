n.d(t, {
    $6: () => m,
    YK: () => s,
    _o: () => d,
    bL: () => h,
    gl: () => c,
    rr: () => u
}),
    n(47120);
var r = n(695346),
    a = n(486472),
    i = n(430824);
n(626135);
var l = n(981631);
n(388032);
let o = 86400000 * l.eBq;
function s() {
    let e = r.h2.getSetting();
    return 0 === a.Z.totalUnavailableGuilds && (e = e.filter((e) => null != i.Z.getGuild(e))), new Set(e);
}
function c() {
    let e = r.zA.getSetting();
    return 0 === a.Z.totalUnavailableGuilds && (e = e.filter((e) => null != i.Z.getGuild(e))), new Set(e);
}
function d() {
    let e = r.SE.getSetting();
    return 0 === a.Z.totalUnavailableGuilds && (e = e.filter((e) => null != i.Z.getGuild(e))), new Set(e);
}
function u() {
    let e = r.iH.getSetting();
    return 0 === a.Z.totalUnavailableGuilds && (e = e.filter((e) => null != i.Z.getGuild(e))), new Set(e);
}
function h(e) {
    return (e & l.HGf) === l.HGf
        ? {
              all: !0,
              mutualFriends: !0,
              mutualGuilds: !0
          }
        : {
              all: !1,
              mutualFriends: (e & l.SOq.MUTUAL_FRIENDS) === l.SOq.MUTUAL_FRIENDS,
              mutualGuilds: (e & l.SOq.MUTUAL_GUILDS) === l.SOq.MUTUAL_GUILDS
          };
}
function m(e, t) {
    return !!(!t.verified || t.isStaff()) || (null != e && o > Date.now() - new Date(e.created_at).getTime());
}
