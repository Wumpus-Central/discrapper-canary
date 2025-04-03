n.d(t, {
    $6: () => _,
    YK: () => a,
    _o: () => u,
    bL: () => p,
    gl: () => c,
    rr: () => d
}),
    n(47120);
var r = n(695346),
    i = n(486472),
    o = n(430824);
n(626135);
var l = n(981631);
n(388032);
let s = 86400000 * l.eBq;
function a() {
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
function _(e, t) {
    return !!(!t.verified || t.isStaff()) || (null != e && s > Date.now() - new Date(e.created_at).getTime());
}
