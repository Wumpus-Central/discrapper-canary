"use strict";
n.d(t, {
    $5: () => _,
    P$: () => c,
    Qm: () => d,
    Z7: () => g,
    _J: () => p,
    di: () => E,
    fi: () => h,
    k$: () => u,
    mR: () => f,
    ql: () => A,
    r2: () => m,
    yc: () => l,
}),
    n(321073);
var i = n(989349),
    r = n.n(i),
    s = n(834409),
    a = n(218113),
    o = n(375708);
let l = { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" };
function u(e) {
    return (
        (null != e.dmSpamDetectedAt && r()(e.dmSpamDetectedAt).add(a.Qs, "hours") > r()()) ||
        (null != e.raidDetectedAt && r()(e.raidDetectedAt).add(a.Qs, "hours") > r()())
    );
}
function c(e) {
    return null != e.raidDetectedAt && r()(e.raidDetectedAt).add(a.Qs, "hours") > r()();
}
function d(e) {
    return null != e.dmSpamDetectedAt && r()(e.dmSpamDetectedAt).add(a.Qs, "hours") > r()();
}
function _(e) {
    return null == e ? void 0 : c(e) ? s.V.JOIN_RAID : s.V.DM_RAID;
}
function f(e, t) {
    let n = [];
    return e && n.push(s.ZE.INVITES_DISABLED), t && n.push(s.ZE.DMS_DISABLED), n;
}
function h(e, t) {
    let n = [];
    return e || n.push(s.ZE.INVITES_DISABLED), t || n.push(s.ZE.DMS_DISABLED), n;
}
function p(e) {
    return (
        (null != e.dmsDisabledUntil && new Date(e.dmsDisabledUntil) > new Date()) ||
        (null != e.invitesDisabledUntil && new Date(e.invitesDisabledUntil) > new Date())
    );
}
function E(e) {
    return e?.dmsDisabledUntil != null && new Date(e.dmsDisabledUntil) > new Date();
}
function m(e) {
    return e?.invitesDisabledUntil != null && new Date(e.invitesDisabledUntil) > new Date();
}
function g(e) {
    let t = e?.lockdownDurationHours;
    return null != t && (0, a.aE)().some((e) => e.value === t) ? t : a.f7;
}
function A(e, t) {
    let n = e.dmsDisabledUntil ?? e.invitesDisabledUntil;
    if (null == n) return "";
    let i = null != e.dmsDisabledUntil,
        r = null != e.invitesDisabledUntil;
    switch (!0) {
        case i && r:
            return o.intl.formatToPlainString(o.t.hCZitf, {
                guildName: t,
                time: new Date(n).toLocaleString(o.intl.currentLocale, l),
            });
        case i:
            return o.intl.formatToPlainString(o.t["HNKxf+"], {
                guildName: t,
                time: new Date(n).toLocaleString(o.intl.currentLocale, l),
            });
        case r:
            return o.intl.formatToPlainString(o.t.M3iSyL, {
                guildName: t,
                time: new Date(n).toLocaleString(o.intl.currentLocale, l),
            });
        default:
            return "";
    }
}
