n.d(t, {
    $6: function () {
        return b;
    },
    YK: function () {
        return d;
    },
    _o: function () {
        return g;
    },
    bL: function () {
        return m;
    },
    gl: function () {
        return u;
    },
    rr: function () {
        return h;
    }
}),
    n(47120);
var i,
    o,
    a = n(695346),
    r = n(486472),
    c = n(430824);
n(626135);
var l = n(981631);
n(388032);
let s = 86400000 * l.eBq;
function d() {
    let e = a.h2.getSetting();
    return 0 === r.Z.totalUnavailableGuilds && (e = e.filter((e) => null != c.Z.getGuild(e))), new Set(e);
}
function u() {
    let e = a.zA.getSetting();
    return 0 === r.Z.totalUnavailableGuilds && (e = e.filter((e) => null != c.Z.getGuild(e))), new Set(e);
}
function g() {
    let e = a.SE.getSetting();
    return 0 === r.Z.totalUnavailableGuilds && (e = e.filter((e) => null != c.Z.getGuild(e))), new Set(e);
}
function h() {
    let e = a.iH.getSetting();
    return 0 === r.Z.totalUnavailableGuilds && (e = e.filter((e) => null != c.Z.getGuild(e))), new Set(e);
}
function m(e) {
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
function b(e, t) {
    return !!(!t.verified || t.isStaff()) || (null != e && s > Date.now() - new Date(e.created_at).getTime());
}
((o = i || (i = {}))[(o.UNDECIDED = 0)] = 'UNDECIDED'), (o[(o.OPTIN = 1)] = 'OPTIN'), (o[(o.OPTOUT = 2)] = 'OPTOUT');
