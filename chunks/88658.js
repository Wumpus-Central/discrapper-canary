n.d(t, {
    $6: function () {
        return f;
    },
    YK: function () {
        return d;
    },
    _o: function () {
        return m;
    },
    bL: function () {
        return x;
    },
    gl: function () {
        return u;
    },
    rr: function () {
        return h;
    }
}),
    n(47120);
var r,
    a,
    l = n(695346),
    i = n(486472),
    o = n(430824);
n(626135);
var s = n(981631);
n(388032);
let c = 86400000 * s.eBq;
function d() {
    let e = l.h2.getSetting();
    return 0 === i.Z.totalUnavailableGuilds && (e = e.filter((e) => null != o.Z.getGuild(e))), new Set(e);
}
function u() {
    let e = l.zA.getSetting();
    return 0 === i.Z.totalUnavailableGuilds && (e = e.filter((e) => null != o.Z.getGuild(e))), new Set(e);
}
function m() {
    let e = l.SE.getSetting();
    return 0 === i.Z.totalUnavailableGuilds && (e = e.filter((e) => null != o.Z.getGuild(e))), new Set(e);
}
function h() {
    let e = l.iH.getSetting();
    return 0 === i.Z.totalUnavailableGuilds && (e = e.filter((e) => null != o.Z.getGuild(e))), new Set(e);
}
function x(e) {
    return (e & s.HGf) === s.HGf
        ? {
              all: !0,
              mutualFriends: !0,
              mutualGuilds: !0
          }
        : {
              all: !1,
              mutualFriends: (e & s.SOq.MUTUAL_FRIENDS) === s.SOq.MUTUAL_FRIENDS,
              mutualGuilds: (e & s.SOq.MUTUAL_GUILDS) === s.SOq.MUTUAL_GUILDS
          };
}
function f(e, t) {
    return !!(!t.verified || t.isStaff()) || (null != e && c > Date.now() - new Date(e.created_at).getTime());
}
((a = r || (r = {}))[(a.UNDECIDED = 0)] = 'UNDECIDED'), (a[(a.OPTIN = 1)] = 'OPTIN'), (a[(a.OPTOUT = 2)] = 'OPTOUT');
