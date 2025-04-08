n.d(t, {
    $6: () => h,
    YK: () => s,
    _o: () => u,
    bL: () => p,
    gl: () => c,
    rr: () => d
}),
    n(388685);
var r = n(695346),
    i = n(486472),
    o = n(430824);
n(626135);
var a = n(981631);
n(388032);
let l = 86400000 * a.eBq;
function s() {
    let e = r.h2.getSetting();
    return 0 === i.Z.totalUnavailableGuilds && (e = e.filter((e) => null != o.Z.getGuild(e))), new Set(e);
}
function c() {
    let e = r.zA.getSetting();
    return 0 === i.Z.totalUnavailableGuilds && (e = e.filter((e) => null != o.Z.getGuild(e))), new Set(e);
}
function u() {
    let e = r.SE.getSetting();
    return 0 === i.Z.totalUnavailableGuilds && (e = e.filter((e) => null != o.Z.getGuild(e))), new Set(e);
}
function d() {
    let e = r.iH.getSetting();
    return 0 === i.Z.totalUnavailableGuilds && (e = e.filter((e) => null != o.Z.getGuild(e))), new Set(e);
}
function p(e) {
    return (e & a.HGf) === a.HGf
        ? {
              all: !0,
              mutualFriends: !0,
              mutualGuilds: !0
          }
        : {
              all: !1,
              mutualFriends: (e & a.SOq.MUTUAL_FRIENDS) === a.SOq.MUTUAL_FRIENDS,
              mutualGuilds: (e & a.SOq.MUTUAL_GUILDS) === a.SOq.MUTUAL_GUILDS
          };
}
function h(e, t) {
    return !!(!t.verified || t.isStaff()) || (null != e && l > Date.now() - new Date(e.created_at).getTime());
}
