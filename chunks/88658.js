n.d(t, {
    $6: function () {
        return _;
    },
    YK: function () {
        return d;
    },
    _o: function () {
        return h;
    },
    ac: function () {
        return f;
    },
    bL: function () {
        return b;
    },
    g0: function () {
        return i;
    },
    gl: function () {
        return g;
    },
    rr: function () {
        return m;
    },
    xH: function () {
        return C;
    }
}),
    n(47120);
var i,
    o,
    a = n(695346),
    r = n(486472),
    c = n(430824);
n(626135);
var l = n(981631),
    s = n(388032);
let u = 86400000 * l.eBq;
function d() {
    let e = a.h2.getSetting();
    return 0 === r.Z.totalUnavailableGuilds && (e = e.filter((e) => null != c.Z.getGuild(e))), new Set(e);
}
function g() {
    let e = a.zA.getSetting();
    return 0 === r.Z.totalUnavailableGuilds && (e = e.filter((e) => null != c.Z.getGuild(e))), new Set(e);
}
function h() {
    let e = a.SE.getSetting();
    return 0 === r.Z.totalUnavailableGuilds && (e = e.filter((e) => null != c.Z.getGuild(e))), new Set(e);
}
function m() {
    let e = a.iH.getSetting();
    return 0 === r.Z.totalUnavailableGuilds && (e = e.filter((e) => null != c.Z.getGuild(e))), new Set(e);
}
function b(e) {
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
    return !!(!t.verified || t.isStaff()) || (null != e && u > Date.now() - new Date(e.created_at).getTime());
}
((o = i || (i = {}))[(o.UNDECIDED = 0)] = 'UNDECIDED'), (o[(o.OPTIN = 1)] = 'OPTIN'), (o[(o.OPTOUT = 2)] = 'OPTOUT');
let f = {
    0: void 0,
    1: !0,
    2: !1
};
function C() {
    return [
        {
            name: s.intl.string(s.t['/yLMRU']),
            desc: s.intl.string(s.t['3fzkPj']),
            value: 1
        },
        {
            name: s.intl.string(s.t['21fP2d']),
            desc: s.intl.string(s.t.ggJ9jY),
            value: 2
        },
        {
            name: s.intl.string(s.t['OWIo8/']),
            desc: s.intl.string(s.t.HqYXp6),
            value: 0
        }
    ];
}
