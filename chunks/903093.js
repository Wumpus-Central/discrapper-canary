i.d(e, {
    $5: () => o,
    P$: () => D,
    Qm: () => c,
    _J: () => m,
    di: () => E,
    fi: () => A,
    k$: () => s,
    mR: () => _,
    ql: () => I,
    r2: () => S,
    yc: () => u,
}),
    i(321073);
var n = i(989349),
    l = i.n(n),
    d = i(834409),
    a = i(218113),
    r = i(375708);
let u = { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" };
function s(t) {
    return (
        (null != t.dmSpamDetectedAt && l()(t.dmSpamDetectedAt).add(a.Qs, "hours") > l()()) ||
        (null != t.raidDetectedAt && l()(t.raidDetectedAt).add(a.Qs, "hours") > l()())
    );
}
function D(t) {
    return null != t.raidDetectedAt && l()(t.raidDetectedAt).add(a.Qs, "hours") > l()();
}
function c(t) {
    return null != t.dmSpamDetectedAt && l()(t.dmSpamDetectedAt).add(a.Qs, "hours") > l()();
}
function o(t) {
    return null == t ? void 0 : D(t) ? d.V.JOIN_RAID : d.V.DM_RAID;
}
function _(t, e) {
    let i = [];
    return t && i.push(d.ZE.INVITES_DISABLED), e && i.push(d.ZE.DMS_DISABLED), i;
}
function A(t, e) {
    let i = [];
    return t || i.push(d.ZE.INVITES_DISABLED), e || i.push(d.ZE.DMS_DISABLED), i;
}
function m(t) {
    return (
        (null != t.dmsDisabledUntil && new Date(t.dmsDisabledUntil) > new Date()) ||
        (null != t.invitesDisabledUntil && new Date(t.invitesDisabledUntil) > new Date())
    );
}
function E(t) {
    return t?.dmsDisabledUntil != null && new Date(t.dmsDisabledUntil) > new Date();
}
function S(t) {
    return t?.invitesDisabledUntil != null && new Date(t.invitesDisabledUntil) > new Date();
}
function I(t, e) {
    let i = t.dmsDisabledUntil ?? t.invitesDisabledUntil;
    if (null == i) return "";
    let n = null != t.dmsDisabledUntil,
        l = null != t.invitesDisabledUntil;
    switch (!0) {
        case n && l:
            return r.intl.formatToPlainString(r.t.hCZitf, {
                guildName: e,
                time: new Date(i).toLocaleString(r.intl.currentLocale, u),
            });
        case n:
            return r.intl.formatToPlainString(r.t["HNKxf+"], {
                guildName: e,
                time: new Date(i).toLocaleString(r.intl.currentLocale, u),
            });
        case l:
            return r.intl.formatToPlainString(r.t.M3iSyL, {
                guildName: e,
                time: new Date(i).toLocaleString(r.intl.currentLocale, u),
            });
        default:
            return "";
    }
}
