n.d(t, {
    $6: () => h,
    YK: () => s,
    _o: () => d,
    bL: () => m,
    gl: () => c,
    rr: () => u
}),
    n(47120);
var a = n(695346),
    l = n(486472),
    r = n(430824);
n(626135);
var i = n(981631);
n(388032);
let o = 86400000 * i.eBq;
function s() {
    let e = a.h2.getSetting();
    return 0 === l.Z.totalUnavailableGuilds && (e = e.filter((e) => null != r.Z.getGuild(e))), new Set(e);
}
function c() {
    let e = a.zA.getSetting();
    return 0 === l.Z.totalUnavailableGuilds && (e = e.filter((e) => null != r.Z.getGuild(e))), new Set(e);
}
function d() {
    let e = a.SE.getSetting();
    return 0 === l.Z.totalUnavailableGuilds && (e = e.filter((e) => null != r.Z.getGuild(e))), new Set(e);
}
function u() {
    let e = a.iH.getSetting();
    return 0 === l.Z.totalUnavailableGuilds && (e = e.filter((e) => null != r.Z.getGuild(e))), new Set(e);
}
function m(e) {
    return (e & i.HGf) === i.HGf
        ? {
              all: !0,
              mutualFriends: !0,
              mutualGuilds: !0
          }
        : {
              all: !1,
              mutualFriends: (e & i.SOq.MUTUAL_FRIENDS) === i.SOq.MUTUAL_FRIENDS,
              mutualGuilds: (e & i.SOq.MUTUAL_GUILDS) === i.SOq.MUTUAL_GUILDS
          };
}
function h(e, t) {
    return !!(!t.verified || t.isStaff()) || (null != e && o > Date.now() - new Date(e.created_at).getTime());
}
