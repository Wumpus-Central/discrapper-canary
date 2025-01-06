n.d(t, {
    $6: function () {
        return C;
    },
    YK: function () {
        return d;
    },
    _o: function () {
        return f;
    },
    ac: function () {
        return p;
    },
    bL: function () {
        return v;
    },
    g0: function () {
        return i;
    },
    gl: function () {
        return c;
    },
    rr: function () {
        return g;
    },
    xH: function () {
        return m;
    }
}),
    n(47120);
var i,
    r,
    l = n(695346),
    u = n(486472),
    a = n(430824);
n(626135);
var s = n(981631),
    o = n(388032);
let h = 86400000 * s.eBq;
function d() {
    let e = l.h2.getSetting();
    return 0 === u.Z.totalUnavailableGuilds && (e = e.filter((e) => null != a.Z.getGuild(e))), new Set(e);
}
function c() {
    let e = l.zA.getSetting();
    return 0 === u.Z.totalUnavailableGuilds && (e = e.filter((e) => null != a.Z.getGuild(e))), new Set(e);
}
function f() {
    let e = l.SE.getSetting();
    return 0 === u.Z.totalUnavailableGuilds && (e = e.filter((e) => null != a.Z.getGuild(e))), new Set(e);
}
function g() {
    let e = l.iH.getSetting();
    return 0 === u.Z.totalUnavailableGuilds && (e = e.filter((e) => null != a.Z.getGuild(e))), new Set(e);
}
function v(e) {
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
function C(e, t) {
    return !!(!t.verified || t.isStaff()) || (null != e && h > Date.now() - new Date(e.created_at).getTime());
}
((r = i || (i = {}))[(r.UNDECIDED = 0)] = 'UNDECIDED'), (r[(r.OPTIN = 1)] = 'OPTIN'), (r[(r.OPTOUT = 2)] = 'OPTOUT');
let p = {
    0: void 0,
    1: !0,
    2: !1
};
function m() {
    return [
        {
            name: o.intl.string(o.t['/yLMRU']),
            desc: o.intl.string(o.t['3fzkPj']),
            value: 1
        },
        {
            name: o.intl.string(o.t['21fP2d']),
            desc: o.intl.string(o.t.ggJ9jY),
            value: 2
        },
        {
            name: o.intl.string(o.t['OWIo8/']),
            desc: o.intl.string(o.t.HqYXp6),
            value: 0
        }
    ];
}
