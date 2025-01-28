n.d(t, {
    $6: function () {
        return f;
    },
    YK: function () {
        return u;
    },
    _o: function () {
        return m;
    },
    bL: function () {
        return g;
    },
    gl: function () {
        return s;
    },
    rr: function () {
        return _;
    }
}),
    n(47120);
var i,
    a,
    l = n(695346),
    r = n(486472),
    o = n(430824);
n(626135);
var c = n(981631);
n(388032);
let d = 86400000 * c.eBq;
function u() {
    let e = l.h2.getSetting();
    return 0 === r.Z.totalUnavailableGuilds && (e = e.filter((e) => null != o.Z.getGuild(e))), new Set(e);
}
function s() {
    let e = l.zA.getSetting();
    return 0 === r.Z.totalUnavailableGuilds && (e = e.filter((e) => null != o.Z.getGuild(e))), new Set(e);
}
function m() {
    let e = l.SE.getSetting();
    return 0 === r.Z.totalUnavailableGuilds && (e = e.filter((e) => null != o.Z.getGuild(e))), new Set(e);
}
function _() {
    let e = l.iH.getSetting();
    return 0 === r.Z.totalUnavailableGuilds && (e = e.filter((e) => null != o.Z.getGuild(e))), new Set(e);
}
function g(e) {
    return (e & c.HGf) === c.HGf
        ? {
              all: !0,
              mutualFriends: !0,
              mutualGuilds: !0
          }
        : {
              all: !1,
              mutualFriends: (e & c.SOq.MUTUAL_FRIENDS) === c.SOq.MUTUAL_FRIENDS,
              mutualGuilds: (e & c.SOq.MUTUAL_GUILDS) === c.SOq.MUTUAL_GUILDS
          };
}
function f(e, t) {
    return !!(!t.verified || t.isStaff()) || (null != e && d > Date.now() - new Date(e.created_at).getTime());
}
((a = i || (i = {}))[(a.UNDECIDED = 0)] = 'UNDECIDED'), (a[(a.OPTIN = 1)] = 'OPTIN'), (a[(a.OPTOUT = 2)] = 'OPTOUT');
