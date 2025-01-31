n.d(t, {
    $6: () => E,
    YK: () => c,
    _o: () => d,
    bL: () => s,
    gl: () => _,
    rr: () => u
}),
    n(47120);
var i = n(695346),
    o = n(486472),
    a = n(430824);
n(626135);
var l = n(981631);
n(388032);
let r = 86400000 * l.eBq;
function c() {
    let e = i.h2.getSetting();
    return 0 === o.Z.totalUnavailableGuilds && (e = e.filter((e) => null != a.Z.getGuild(e))), new Set(e);
}
function _() {
    let e = i.zA.getSetting();
    return 0 === o.Z.totalUnavailableGuilds && (e = e.filter((e) => null != a.Z.getGuild(e))), new Set(e);
}
function d() {
    let e = i.SE.getSetting();
    return 0 === o.Z.totalUnavailableGuilds && (e = e.filter((e) => null != a.Z.getGuild(e))), new Set(e);
}
function u() {
    let e = i.iH.getSetting();
    return 0 === o.Z.totalUnavailableGuilds && (e = e.filter((e) => null != a.Z.getGuild(e))), new Set(e);
}
function s(e) {
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
function E(e, t) {
    return !!(!t.verified || t.isStaff()) || (null != e && r > Date.now() - new Date(e.created_at).getTime());
}
