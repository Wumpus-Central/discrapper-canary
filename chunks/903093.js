"use strict";
n.d(t, {
    $5: () => _,
    P$: () => u,
    Qm: () => d,
    _J: () => m,
    di: () => I,
    fi: () => A,
    k$: () => o,
    mR: () => E,
    ql: () => g,
    r2: () => T,
    yc: () => c,
}),
    n(321073);
var i = n(989349),
    r = n.n(i),
    s = n(834409),
    l = n(218113),
    a = n(985018);
let c = { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" };
function o(e) {
    return (
        (null != e.dmSpamDetectedAt && r()(e.dmSpamDetectedAt).add(l.Qs, "hours") > r()()) ||
        (null != e.raidDetectedAt && r()(e.raidDetectedAt).add(l.Qs, "hours") > r()())
    );
}
function u(e) {
    return null != e.raidDetectedAt && r()(e.raidDetectedAt).add(l.Qs, "hours") > r()();
}
function d(e) {
    return null != e.dmSpamDetectedAt && r()(e.dmSpamDetectedAt).add(l.Qs, "hours") > r()();
}
function _(e) {
    return null == e ? void 0 : u(e) ? s.V.JOIN_RAID : s.V.DM_RAID;
}
function E(e, t) {
    let n = [];
    return e && n.push(s.ZE.INVITES_DISABLED), t && n.push(s.ZE.DMS_DISABLED), n;
}
function A(e, t) {
    let n = [];
    return e || n.push(s.ZE.INVITES_DISABLED), t || n.push(s.ZE.DMS_DISABLED), n;
}
function m(e) {
    return (
        (null != e.dmsDisabledUntil && new Date(e.dmsDisabledUntil) > new Date()) ||
        (null != e.invitesDisabledUntil && new Date(e.invitesDisabledUntil) > new Date())
    );
}
function I(e) {
    return e?.dmsDisabledUntil != null && new Date(e.dmsDisabledUntil) > new Date();
}
function T(e) {
    return e?.invitesDisabledUntil != null && new Date(e.invitesDisabledUntil) > new Date();
}
function g(e, t) {
    let n = e.dmsDisabledUntil ?? e.invitesDisabledUntil;
    if (null == n) return "";
    let i = null != e.dmsDisabledUntil,
        r = null != e.invitesDisabledUntil;
    switch (!0) {
        case i && r:
            return a.intl.formatToPlainString(a.t.hCZitf, {
                guildName: t,
                time: new Date(n).toLocaleString(a.intl.currentLocale, c),
            });
        case i:
            return a.intl.formatToPlainString(a.t["HNKxf+"], {
                guildName: t,
                time: new Date(n).toLocaleString(a.intl.currentLocale, c),
            });
        case r:
            return a.intl.formatToPlainString(a.t.M3iSyL, {
                guildName: t,
                time: new Date(n).toLocaleString(a.intl.currentLocale, c),
            });
        default:
            return "";
    }
}
