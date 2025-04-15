n.d(t, {
    $6: () => p,
    YK: () => a,
    _o: () => u,
    bL: () => h,
    gl: () => c,
    rr: () => d
}),
    n(388685);
var r = n(695346),
    i = n(486472),
    l = n(430824);
n(626135);
var o = n(981631);
n(388032);
let s = 86400000 * o.eBq;
function a() {
    let e = r.h2.getSetting();
    return 0 === i.Z.totalUnavailableGuilds && (e = e.filter((e) => null != l.Z.getGuild(e))), new Set(e);
}
function c() {
    let e = r.zA.getSetting();
    return 0 === i.Z.totalUnavailableGuilds && (e = e.filter((e) => null != l.Z.getGuild(e))), new Set(e);
}
function u() {
    let e = r.SE.getSetting();
    return 0 === i.Z.totalUnavailableGuilds && (e = e.filter((e) => null != l.Z.getGuild(e))), new Set(e);
}
function d() {
    let e = r.iH.getSetting();
    return 0 === i.Z.totalUnavailableGuilds && (e = e.filter((e) => null != l.Z.getGuild(e))), new Set(e);
}
function h(e) {
    return (e & o.HGf) === o.HGf
        ? {
              all: !0,
              mutualFriends: !0,
              mutualGuilds: !0
          }
        : {
              all: !1,
              mutualFriends: (e & o.SOq.MUTUAL_FRIENDS) === o.SOq.MUTUAL_FRIENDS,
              mutualGuilds: (e & o.SOq.MUTUAL_GUILDS) === o.SOq.MUTUAL_GUILDS
          };
}
function p(e, t) {
    return !!(!t.verified || t.isStaff()) || (null != e && s > Date.now() - new Date(e.created_at).getTime());
}
