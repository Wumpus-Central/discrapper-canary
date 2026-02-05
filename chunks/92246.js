"use strict";
n.d(t, {
    $5: () => p,
    $s: () => L,
    HG: () => A,
    JX: () => S,
    K9: () => m,
    Y7: () => v,
    _Z: () => y,
    cg: () => O,
    f: () => T,
    k5: () => h,
    kr: () => D,
    ks: () => g,
    mH: () => R,
    mq: () => N,
    nj: () => f,
    r7: () => I,
    sn: () => C,
    tU: () => E,
});
var r = n(194537),
    i = n(430019),
    a = n(444212),
    s = n(440703);
n(590180);
var o = n(341915),
    l = n(884877),
    u = n(651892),
    c = n(710969),
    d = n(985018);
let _ = new Set([a.E.PREMIUM_EXTENSION, a.E.PREMIUM_PERMANENT]);
function f(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === s.l.COLLECTIBLE);
    return t?.type === s.l.COLLECTIBLE ? t : null;
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
    return null != f(e);
}
function A(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === s.l.IN_GAME);
}
function I(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === s.l.REWARD_CODE);
}
function T(e) {
    return e.rewardsConfig.rewards.find((e) => e.type === s.l.IN_GAME) ?? null;
}
function y(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === s.l.VIRTUAL_CURRENCY);
    return t?.orbQuantity;
}
function S(e) {
    let t = f(e)?.expirationMode;
    return null != t && _.has(t);
}
function v(e) {
    return S(e) && f(e)?.expirationMode === a.E.PREMIUM_PERMANENT;
}
function C(e) {
    let t = e.userStatus?.claimedTier ?? 0;
    return "rewardsConfig" in e.config ? e.config.rewardsConfig.rewards[t] : e.config.rewards[t];
}
function b(e, t) {
    if (m(e)) return (0, l.xM)(e);
    let n = (0, u.xv)(e);
    return t ? n.messages.nameWithArticle : n.messages.name;
}
function N(e) {
    return b(e, !1);
}
function R(e) {
    return b(e, !0);
}
function O(e) {
    let { quest: t, idx: n } = e;
    if (null == n) return null;
    let r = t.config.rewardsConfig.rewards[n];
    return r.type === s.l.REWARD_CODE ? r : null;
}
function D(e) {
    let {
            quest: { config: t },
        } = e,
        n = t.rewardsConfig;
    return (
        n.assignmentMethod === i.T.TIERED && n.rewards.length > 0 && n.rewards.every((e) => e.type === s.l.REWARD_CODE)
    );
}
function L(e) {
    let t = e.rewardsConfig.platforms;
    return t.length > 0 ? t[0] : o.pY.CROSS_PLATFORM;
}
