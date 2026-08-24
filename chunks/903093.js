n.d(e, {
    $5: () => c,
    P$: () => o,
    Qm: () => D,
    Z7: () => S,
    _J: () => E,
    di: () => f,
    fi: () => A,
    k$: () => s,
    mR: () => m,
    ql: () => I,
    r2: () => _,
    yc: () => a,
}),
    n(321073);
var i = n(536637),
    l = n.n(i),
    d = n(834409),
    u = n(218113),
    r = n(375708);
let a = { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" };
function s(t) {
    return (
        (null != t.dmSpamDetectedAt && l()(t.dmSpamDetectedAt).add(u.Qs, "hours") > l()()) ||
        (null != t.raidDetectedAt && l()(t.raidDetectedAt).add(u.Qs, "hours") > l()())
    );
}
function o(t) {
    return null != t.raidDetectedAt && l()(t.raidDetectedAt).add(u.Qs, "hours") > l()();
}
function D(t) {
    return null != t.dmSpamDetectedAt && l()(t.dmSpamDetectedAt).add(u.Qs, "hours") > l()();
}
function c(t) {
    return null == t ? void 0 : o(t) ? d.V.JOIN_RAID : d.V.DM_RAID;
}
function m(t, e) {
    let n = [];
    return t && n.push(d.ZE.INVITES_DISABLED), e && n.push(d.ZE.DMS_DISABLED), n;
}
function A(t, e) {
    let n = [];
    return t || n.push(d.ZE.INVITES_DISABLED), e || n.push(d.ZE.DMS_DISABLED), n;
}
function E(t) {
    return (
        (null != t.dmsDisabledUntil && new Date(t.dmsDisabledUntil) > new Date()) ||
        (null != t.invitesDisabledUntil && new Date(t.invitesDisabledUntil) > new Date())
    );
}
function f(t) {
    return t?.dmsDisabledUntil != null && new Date(t.dmsDisabledUntil) > new Date();
}
function _(t) {
    return t?.invitesDisabledUntil != null && new Date(t.invitesDisabledUntil) > new Date();
}
function S(t) {
    let e = t?.lockdownDurationHours;
    return null != e && (0, u.aE)().some((t) => t.value === e) ? e : u.f7;
}
function I(t, e) {
    let n = t.dmsDisabledUntil ?? t.invitesDisabledUntil;
    if (null == n) return "";
    let i = null != t.dmsDisabledUntil,
        l = null != t.invitesDisabledUntil;
    switch (!0) {
        case i && l:
            return r.intl.formatToPlainString(r.t.hCZitf, {
                guildName: e,
                time: new Date(n).toLocaleString(r.intl.currentLocale, a),
            });
        case i:
            return r.intl.formatToPlainString(r.t["HNKxf+"], {
                guildName: e,
                time: new Date(n).toLocaleString(r.intl.currentLocale, a),
            });
        case l:
            return r.intl.formatToPlainString(r.t.M3iSyL, {
                guildName: e,
                time: new Date(n).toLocaleString(r.intl.currentLocale, a),
            });
        default:
            return "";
    }
}
