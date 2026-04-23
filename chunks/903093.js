n.d(t, {
    $5: () => A,
    P$: () => _,
    Qm: () => c,
    _J: () => T,
    di: () => d,
    fi: () => u,
    k$: () => o,
    mR: () => I,
    ql: () => R,
    r2: () => N,
    yc: () => E,
}),
    n(321073);
var i = n(989349),
    l = n.n(i),
    r = n(834409),
    s = n(218113),
    a = n(985018);
let E = { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" };
function o(e) {
    return (
        (null != e.dmSpamDetectedAt && l()(e.dmSpamDetectedAt).add(s.Qs, "hours") > l()()) ||
        (null != e.raidDetectedAt && l()(e.raidDetectedAt).add(s.Qs, "hours") > l()())
    );
}
function _(e) {
    return null != e.raidDetectedAt && l()(e.raidDetectedAt).add(s.Qs, "hours") > l()();
}
function c(e) {
    return null != e.dmSpamDetectedAt && l()(e.dmSpamDetectedAt).add(s.Qs, "hours") > l()();
}
function A(e) {
    return null == e ? void 0 : _(e) ? r.V.JOIN_RAID : r.V.DM_RAID;
}
function I(e, t) {
    let n = [];
    return e && n.push(r.ZE.INVITES_DISABLED), t && n.push(r.ZE.DMS_DISABLED), n;
}
function u(e, t) {
    let n = [];
    return e || n.push(r.ZE.INVITES_DISABLED), t || n.push(r.ZE.DMS_DISABLED), n;
}
function T(e) {
    return (
        (null != e.dmsDisabledUntil && new Date(e.dmsDisabledUntil) > new Date()) ||
        (null != e.invitesDisabledUntil && new Date(e.invitesDisabledUntil) > new Date())
    );
}
function d(e) {
    return e?.dmsDisabledUntil != null && new Date(e.dmsDisabledUntil) > new Date();
}
function N(e) {
    return e?.invitesDisabledUntil != null && new Date(e.invitesDisabledUntil) > new Date();
}
function R(e, t) {
    let n = e.dmsDisabledUntil ?? e.invitesDisabledUntil;
    if (null == n) return "";
    let i = null != e.dmsDisabledUntil,
        l = null != e.invitesDisabledUntil;
    switch (!0) {
        case i && l:
            return a.intl.formatToPlainString(a.t.hCZitf, {
                guildName: t,
                time: new Date(n).toLocaleString(a.intl.currentLocale, E),
            });
        case i:
            return a.intl.formatToPlainString(a.t["HNKxf+"], {
                guildName: t,
                time: new Date(n).toLocaleString(a.intl.currentLocale, E),
            });
        case l:
            return a.intl.formatToPlainString(a.t.M3iSyL, {
                guildName: t,
                time: new Date(n).toLocaleString(a.intl.currentLocale, E),
            });
        default:
            return "";
    }
}
