"use strict";
n.d(t, {
    $5: () => _,
    P$: () => u,
    Qm: () => d,
    _J: () => m,
    di: () => I,
    fi: () => A,
    k$: () => c,
    mR: () => E,
    ql: () => N,
    r2: () => T,
    yc: () => o,
}),
    n(321073);
var i = n(989349),
    r = n.n(i),
    l = n(834409),
    s = n(218113),
    a = n(985018);
let o = { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" };
function c(e) {
    return (
        (null != e.dmSpamDetectedAt && r()(e.dmSpamDetectedAt).add(s.Qs, "hours") > r()()) ||
        (null != e.raidDetectedAt && r()(e.raidDetectedAt).add(s.Qs, "hours") > r()())
    );
}
function u(e) {
    return null != e.raidDetectedAt && r()(e.raidDetectedAt).add(s.Qs, "hours") > r()();
}
function d(e) {
    return null != e.dmSpamDetectedAt && r()(e.dmSpamDetectedAt).add(s.Qs, "hours") > r()();
}
function _(e) {
    return null == e ? void 0 : u(e) ? l.V.JOIN_RAID : l.V.DM_RAID;
}
function E(e, t) {
    let n = [];
    return e && n.push(l.ZE.INVITES_DISABLED), t && n.push(l.ZE.DMS_DISABLED), n;
}
function A(e, t) {
    let n = [];
    return e || n.push(l.ZE.INVITES_DISABLED), t || n.push(l.ZE.DMS_DISABLED), n;
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
function N(e, t) {
    let n = e.dmsDisabledUntil ?? e.invitesDisabledUntil;
    if (null == n) return "";
    let i = null != e.dmsDisabledUntil,
        r = null != e.invitesDisabledUntil;
    switch (!0) {
        case i && r:
            return a.intl.formatToPlainString(a.t.hCZitf, {
                guildName: t,
                time: new Date(n).toLocaleString(a.intl.currentLocale, o),
            });
        case i:
            return a.intl.formatToPlainString(a.t["HNKxf+"], {
                guildName: t,
                time: new Date(n).toLocaleString(a.intl.currentLocale, o),
            });
        case r:
            return a.intl.formatToPlainString(a.t.M3iSyL, {
                guildName: t,
                time: new Date(n).toLocaleString(a.intl.currentLocale, o),
            });
        default:
            return "";
    }
}
