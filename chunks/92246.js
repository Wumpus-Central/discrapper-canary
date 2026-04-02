"use strict";
n.d(t, {
    $5: () => p,
    $s: () => M,
    HG: () => I,
    JX: () => N,
    K9: () => m,
    KK: () => g,
    Y7: () => C,
    _Z: () => y,
    cg: () => L,
    f: () => S,
    k5: () => h,
    kr: () => w,
    ks: () => E,
    mH: () => D,
    mq: () => b,
    nj: () => f,
    r7: () => T,
    sn: () => R,
    tU: () => A,
    zB: () => v,
});
var r = n(194537),
    i = n(430019),
    s = n(444212),
    a = n(440703);
n(590180);
var o = n(341915),
    l = n(884877),
    u = n(651892),
    c = n(710969),
    d = n(985018);
let _ = new Set([s.E.PREMIUM_EXTENSION, s.E.PREMIUM_PERMANENT]);
function f(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === a.l.COLLECTIBLE);
    return t?.type === a.l.COLLECTIBLE ? t : null;
}
function p(e) {
    let t = f(e);
    return null != t && "expiresAtPremium" in t && null != t.expiresAtPremium ? (0, c.ZG)(t.expiresAtPremium) : null;
}
function h(e) {
    let t = f(e);
    if (null == t || !("expiresAt" in t) || null == t.expiresAt) return null;
    let n = new Date(e.expiresAt),
        i = new Date(t.expiresAt),
        s = (0, r.A)(i, n),
        a = Math.floor(s / 30) + +(s % 30 >= 25);
    if (a >= 12) {
        let e = Math.floor(a / 12);
        return d.intl.formatToPlainString(d.t.PClsrw, { years: e });
    }
    {
        if (a > 0) return d.intl.formatToPlainString(d.t.kridzK, { months: a });
        let e = (0, r.A)(i, n);
        if (!(e >= 7)) return d.intl.formatToPlainString(d.t["k2UNz+"], { days: e });
        {
            let t = Math.ceil(e / 7);
            return d.intl.formatToPlainString(d.t.EmoBD2, { weeks: t });
        }
    }
}
function m(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === a.l.FRACTIONAL_PREMIUM);
}
function E(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === a.l.VIRTUAL_CURRENCY);
}
function g(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === a.l.VIRTUAL_CURRENCY),
        n = t?.premiumOrbQuantity;
    return null != n && n > 0;
}
function A(e) {
    return null != f(e);
}
function I(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === a.l.IN_GAME);
}
function T(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === a.l.REWARD_CODE);
}
function S(e) {
    return e.rewardsConfig.rewards.find((e) => e.type === a.l.IN_GAME) ?? null;
}
function y(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === a.l.VIRTUAL_CURRENCY);
    return t?.orbQuantity;
}
function v(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === a.l.VIRTUAL_CURRENCY);
    if (t?.type === a.l.VIRTUAL_CURRENCY) return t.premiumOrbQuantity;
}
function N(e) {
    let t = f(e)?.expirationMode;
    return null != t && _.has(t);
}
function C(e) {
    return N(e) && f(e)?.expirationMode === s.E.PREMIUM_PERMANENT;
}
function R(e) {
    let t = e.userStatus?.claimedTier ?? 0;
    return "rewardsConfig" in e.config ? e.config.rewardsConfig.rewards[t] : e.config.rewards[t];
}
function O(e, t) {
    if (m(e)) return (0, l.xM)(e);
    let n = (0, u.xv)(e);
    return t ? n.messages.nameWithArticle : n.messages.name;
}
function b(e) {
    return O(e, !1);
}
function D(e) {
    return O(e, !0);
}
function L(e) {
    let { quest: t, idx: n } = e;
    if (null == n) return null;
    let r = t.config.rewardsConfig.rewards[n];
    return r.type === a.l.REWARD_CODE ? r : null;
}
function w(e) {
    let {
            quest: { config: t },
        } = e,
        n = t.rewardsConfig;
    return (
        n.assignmentMethod === i.T.TIERED && n.rewards.length > 0 && n.rewards.every((e) => e.type === a.l.REWARD_CODE)
    );
}
function M(e) {
    let t = e.rewardsConfig.platforms;
    return t.length > 0 ? t[0] : o.pY.CROSS_PLATFORM;
}
