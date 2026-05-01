n.d(e, {
    $5: () => o,
    P$: () => D,
    Qm: () => c,
    _J: () => A,
    di: () => E,
    fi: () => S,
    k$: () => s,
    mR: () => m,
    ql: () => f,
    r2: () => b,
    yc: () => d,
}),
    n(321073);
var i = n(989349),
    l = n.n(i),
    a = n(834409),
    r = n(218113),
    u = n(985018);
let d = { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" };
function s(t) {
    return (
        (null != t.dmSpamDetectedAt && l()(t.dmSpamDetectedAt).add(r.Qs, "hours") > l()()) ||
        (null != t.raidDetectedAt && l()(t.raidDetectedAt).add(r.Qs, "hours") > l()())
    );
}
function D(t) {
    return null != t.raidDetectedAt && l()(t.raidDetectedAt).add(r.Qs, "hours") > l()();
}
function c(t) {
    return null != t.dmSpamDetectedAt && l()(t.dmSpamDetectedAt).add(r.Qs, "hours") > l()();
}
function o(t) {
    return null == t ? void 0 : D(t) ? a.V.JOIN_RAID : a.V.DM_RAID;
}
function m(t, e) {
    let n = [];
    return t && n.push(a.ZE.INVITES_DISABLED), e && n.push(a.ZE.DMS_DISABLED), n;
}
function S(t, e) {
    let n = [];
    return t || n.push(a.ZE.INVITES_DISABLED), e || n.push(a.ZE.DMS_DISABLED), n;
}
function A(t) {
    return (
        (null != t.dmsDisabledUntil && new Date(t.dmsDisabledUntil) > new Date()) ||
        (null != t.invitesDisabledUntil && new Date(t.invitesDisabledUntil) > new Date())
    );
}
function E(t) {
    return t?.dmsDisabledUntil != null && new Date(t.dmsDisabledUntil) > new Date();
}
function b(t) {
    return t?.invitesDisabledUntil != null && new Date(t.invitesDisabledUntil) > new Date();
}
function f(t, e) {
    let n = t.dmsDisabledUntil ?? t.invitesDisabledUntil;
    if (null == n) return "";
    let i = null != t.dmsDisabledUntil,
        l = null != t.invitesDisabledUntil;
    switch (!0) {
        case i && l:
            return u.intl.formatToPlainString(u.t.hCZitf, {
                guildName: e,
                time: new Date(n).toLocaleString(u.intl.currentLocale, d),
            });
        case i:
            return u.intl.formatToPlainString(u.t["HNKxf+"], {
                guildName: e,
                time: new Date(n).toLocaleString(u.intl.currentLocale, d),
            });
        case l:
            return u.intl.formatToPlainString(u.t.M3iSyL, {
                guildName: e,
                time: new Date(n).toLocaleString(u.intl.currentLocale, d),
            });
        default:
            return "";
    }
}
