"use strict";
n.d(t, {
    f: () => O,
    r7: () => R,
    ks: () => T,
    $5: () => p,
    sn: () => b,
    mH: () => k,
    cg: () => M,
    Y7: () => L,
    kr: () => U,
    HG: () => C,
    KK: () => S,
    JX: () => D,
    tU: () => N,
    k5: () => A,
    nj: () => g,
    $s: () => x,
    _Z: () => y,
    mq: () => P,
    K9: () => I,
    zB: () => v,
});
var i,
    r,
    s = n(194537),
    a = (((i = {})[(i.ALL = 1)] = "ALL"), (i[(i.TIERED = 2)] = "TIERED"), i),
    o =
        (((r = {})[(r.NORMAL = 1)] = "NORMAL"),
        (r[(r.PREMIUM_EXTENSION = 2)] = "PREMIUM_EXTENSION"),
        (r[(r.PREMIUM_PERMANENT = 3)] = "PREMIUM_PERMANENT"),
        r),
    l = n(440703);
n(590180);
var d = n(507107),
    _ = n(58703),
    u = n(927813),
    c = n(927578),
    E = n(985018),
    h = n(651892),
    m = n(710969);
let f = new Set([o.PREMIUM_EXTENSION, o.PREMIUM_PERMANENT]);
function g(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === l.l.COLLECTIBLE);
    return t?.type === l.l.COLLECTIBLE ? t : null;
}
function p(e) {
    let t = g(e);
    return null != t && "expiresAtPremium" in t && null != t.expiresAtPremium ? (0, m.ZG)(t.expiresAtPremium) : null;
}
function A(e) {
    let t = g(e);
    if (null == t || !("expiresAt" in t) || null == t.expiresAt) return null;
    let n = new Date(e.expiresAt),
        i = new Date(t.expiresAt),
        r = (0, s.A)(i, n),
        a = Math.floor(r / 30) + +(r % 30 >= 25);
    if (a >= 12) {
        let e = Math.floor(a / 12);
        return E.intl.formatToPlainString(E.t.PClsrw, { years: e });
    }
    {
        if (a > 0) return E.intl.formatToPlainString(E.t.kridzK, { months: a });
        let e = (0, s.A)(i, n);
        if (!(e >= 7)) return E.intl.formatToPlainString(E.t["k2UNz+"], { days: e });
        {
            let t = Math.ceil(e / 7);
            return E.intl.formatToPlainString(E.t.EmoBD2, { weeks: t });
        }
    }
}
function I(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === l.l.FRACTIONAL_PREMIUM);
}
function T(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === l.l.VIRTUAL_CURRENCY);
}
function S(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === l.l.VIRTUAL_CURRENCY),
        n = t?.premiumOrbQuantity;
    return null != n && n > 0;
}
function N(e) {
    return null != g(e);
}
function C(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === l.l.IN_GAME);
}
function R(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === l.l.REWARD_CODE);
}
function O(e) {
    return e.rewardsConfig.rewards.find((e) => e.type === l.l.IN_GAME) ?? null;
}
function y(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === l.l.VIRTUAL_CURRENCY);
    return t?.orbQuantity;
}
function v(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === l.l.VIRTUAL_CURRENCY);
    if (t?.type === l.l.VIRTUAL_CURRENCY) return t.premiumOrbQuantity;
}
function D(e) {
    let t = g(e)?.expirationMode;
    return null != t && f.has(t);
}
function L(e) {
    return D(e) && g(e)?.expirationMode === o.PREMIUM_PERMANENT;
}
function b(e) {
    let t = e.userStatus?.claimedTier ?? 0;
    return "rewardsConfig" in e.config ? e.config.rewardsConfig.rewards[t] : e.config.rewards[t];
}
function w(e, t) {
    if (I(e)) {
        let t = e.rewardsConfig.rewards
                .filter((e) => e.type === l.l.FRACTIONAL_PREMIUM)
                .flatMap((e) => Array(e.quantity).fill(e.skuId)),
            n = (0, c.iv)(t),
            i = { days: E.t.fYmirx, hours: E.t["C3RO+g"], minutes: E.t.r77oHc },
            r = (0, _.Tf)(0, n * u.A.Millis.HOUR);
        return E.intl.formatToPlainString(E.t["4SqnVD"], { time: (0, _.uN)(r, i) });
    }
    let n = (0, h.xv)(e);
    return t ? n.messages.nameWithArticle : n.messages.name;
}
function P(e) {
    return w(e, !1);
}
function k(e) {
    return w(e, !0);
}
function M(e) {
    let { quest: t, idx: n } = e;
    if (null == n) return null;
    let i = t.config.rewardsConfig.rewards[n];
    return i.type === l.l.REWARD_CODE ? i : null;
}
function U(e) {
    let {
            quest: { config: t },
        } = e,
        n = t.rewardsConfig;
    return (
        n.assignmentMethod === a.TIERED && n.rewards.length > 0 && n.rewards.every((e) => e.type === l.l.REWARD_CODE)
    );
}
function x(e) {
    let t = e.rewardsConfig.platforms;
    return t.length > 0 ? t[0] : d.pY.CROSS_PLATFORM;
}
