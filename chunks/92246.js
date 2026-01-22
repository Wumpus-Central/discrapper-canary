n.d(t, {
    $5: () => _,
    $s: () => P,
    HG: () => b,
    JX: () => v,
    K9: () => m,
    Y7: () => S,
    _Z: () => A,
    cg: () => R,
    f: () => O,
    k5: () => h,
    kr: () => w,
    ks: () => g,
    mH: () => N,
    mq: () => C,
    nj: () => p,
    r7: () => y,
    sn: () => I,
    tU: () => E,
}),
    n(896048);
var r = n(194537),
    i = n(430019),
    a = n(444212),
    s = n(440703);
n(590180);
var o = n(341915),
    l = n(884877),
    c = n(651892),
    u = n(710969),
    d = n(985018);
let f = new Set([a.E.PREMIUM_EXTENSION, a.E.PREMIUM_PERMANENT]);
function p(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === s.l.COLLECTIBLE);
    return (null == t ? void 0 : t.type) === s.l.COLLECTIBLE ? t : null;
}
function _(e) {
    let t = p(e);
    return null != t && "expiresAtPremium" in t && null != t.expiresAtPremium ? (0, u.ZG)(t.expiresAtPremium) : null;
}
function h(e) {
    let t = p(e);
    if (null == t || !("expiresAt" in t) || null == t.expiresAt) return null;
    let n = new Date(e.expiresAt),
        i = new Date(t.expiresAt),
        a = (0, r.A)(i, n),
        s = Math.floor(a / 30) + +(a % 30 >= 25);
    if (s >= 12) {
        let e = Math.floor(s / 12);
        return d.intl.formatToPlainString(d.t.PClsrw, { years: e });
    }
    {
        if (s > 0) return d.intl.formatToPlainString(d.t.kridzK, { months: s });
        let e = (0, r.A)(i, n);
        if (!(e >= 7)) return d.intl.formatToPlainString(d.t["k2UNz+"], { days: e });
        {
            let t = Math.ceil(e / 7);
            return d.intl.formatToPlainString(d.t.EmoBD2, { weeks: t });
        }
    }
}
function m(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === s.l.FRACTIONAL_PREMIUM);
}
function g(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === s.l.VIRTUAL_CURRENCY);
}
function E(e) {
    return null != p(e);
}
function b(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === s.l.IN_GAME);
}
function y(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === s.l.REWARD_CODE);
}
function O(e) {
    var t;
    return null != (t = e.rewardsConfig.rewards.find((e) => e.type === s.l.IN_GAME)) ? t : null;
}
function A(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === s.l.VIRTUAL_CURRENCY);
    return null == t ? void 0 : t.orbQuantity;
}
function v(e) {
    var t;
    let n = null == (t = p(e)) ? void 0 : t.expirationMode;
    return null != n && f.has(n);
}
function S(e) {
    var t;
    return v(e) && (null == (t = p(e)) ? void 0 : t.expirationMode) === a.E.PREMIUM_PERMANENT;
}
function I(e) {
    var t, n;
    let r = null != (t = null == (n = e.userStatus) ? void 0 : n.claimedTier) ? t : 0;
    return "rewardsConfig" in e.config ? e.config.rewardsConfig.rewards[r] : e.config.rewards[r];
}
function T(e, t) {
    if (m(e)) return (0, l.xM)(e);
    let n = (0, c.xv)(e);
    return t ? n.messages.nameWithArticle : n.messages.name;
}
function C(e) {
    return T(e, !1);
}
function N(e) {
    return T(e, !0);
}
function R(e) {
    let { quest: t, idx: n } = e;
    if (null == n) return null;
    let r = t.config.rewardsConfig.rewards[n];
    return r.type === s.l.REWARD_CODE ? r : null;
}
function w(e) {
    let {
            quest: { config: t },
        } = e,
        n = t.rewardsConfig;
    return (
        n.assignmentMethod === i.T.TIERED && n.rewards.length > 0 && n.rewards.every((e) => e.type === s.l.REWARD_CODE)
    );
}
function P(e) {
    let t = e.rewardsConfig.platforms;
    return t.length > 0 ? t[0] : o.pY.CROSS_PLATFORM;
}
