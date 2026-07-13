"use strict";
n.d(t, {
    $5: () => _,
    P$: () => c,
    Qm: () => u,
    Z7: () => p,
    _J: () => h,
    di: () => I,
    fi: () => A,
    k$: () => d,
    mR: () => E,
    ql: () => T,
    r2: () => f,
    yc: () => o,
}),
    n(321073);
var i = n(989349),
    r = n.n(i),
    a = n(834409),
    s = n(218113),
    l = n(375708);
let o = { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" };
function d(e) {
    return (
        (null != e.dmSpamDetectedAt && r()(e.dmSpamDetectedAt).add(s.Qs, "hours") > r()()) ||
        (null != e.raidDetectedAt && r()(e.raidDetectedAt).add(s.Qs, "hours") > r()())
    );
}
function c(e) {
    return null != e.raidDetectedAt && r()(e.raidDetectedAt).add(s.Qs, "hours") > r()();
}
function u(e) {
    return null != e.dmSpamDetectedAt && r()(e.dmSpamDetectedAt).add(s.Qs, "hours") > r()();
}
function _(e) {
    return null == e ? void 0 : c(e) ? a.V.JOIN_RAID : a.V.DM_RAID;
}
function E(e, t) {
    let n = [];
    return e && n.push(a.ZE.INVITES_DISABLED), t && n.push(a.ZE.DMS_DISABLED), n;
}
function A(e, t) {
    let n = [];
    return e || n.push(a.ZE.INVITES_DISABLED), t || n.push(a.ZE.DMS_DISABLED), n;
}
function h(e) {
    return (
        (null != e.dmsDisabledUntil && new Date(e.dmsDisabledUntil) > new Date()) ||
        (null != e.invitesDisabledUntil && new Date(e.invitesDisabledUntil) > new Date())
    );
}
function I(e) {
    return e?.dmsDisabledUntil != null && new Date(e.dmsDisabledUntil) > new Date();
}
function f(e) {
    return e?.invitesDisabledUntil != null && new Date(e.invitesDisabledUntil) > new Date();
}
function p(e) {
    let t = e?.lockdownDurationHours;
    return null != t && (0, s.aE)().some((e) => e.value === t) ? t : s.f7;
}
function T(e, t) {
    let n = e.dmsDisabledUntil ?? e.invitesDisabledUntil;
    if (null == n) return "";
    let i = null != e.dmsDisabledUntil,
        r = null != e.invitesDisabledUntil;
    switch (!0) {
        case i && r:
            return l.intl.formatToPlainString(l.t.hCZitf, {
                guildName: t,
                time: new Date(n).toLocaleString(l.intl.currentLocale, o),
            });
        case i:
            return l.intl.formatToPlainString(l.t["HNKxf+"], {
                guildName: t,
                time: new Date(n).toLocaleString(l.intl.currentLocale, o),
            });
        case r:
            return l.intl.formatToPlainString(l.t.M3iSyL, {
                guildName: t,
                time: new Date(n).toLocaleString(l.intl.currentLocale, o),
            });
        default:
            return "";
    }
}
