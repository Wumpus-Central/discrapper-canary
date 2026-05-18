"use strict";
n.d(t, {
    f: () => R,
    r7: () => O,
    wo: () => M,
    $5: () => I,
    sn: () => w,
    mH: () => U,
    cg: () => k,
    Y7: () => L,
    kr: () => G,
    HG: () => v,
    KK: () => y,
    JX: () => D,
    tU: () => C,
    k5: () => T,
    nj: () => A,
    $s: () => F,
    _Z: () => b,
    mq: () => x,
    K9: () => S,
    ks: () => N,
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
var u = n(507107),
    c = n(646917),
    d = n(58703),
    _ = n(927813),
    f = n(428262),
    h = n(375708),
    p = n(651892),
    E = n(710969),
    m = n(576761);
let g = new Set([o.PREMIUM_EXTENSION, o.PREMIUM_PERMANENT]);
function A(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === l.l.COLLECTIBLE);
    return t?.type === l.l.COLLECTIBLE ? t : null;
}
function I(e) {
    let t = A(e);
    return null != t && "expiresAtPremium" in t && null != t.expiresAtPremium ? (0, E.ZG)(t.expiresAtPremium) : null;
}
function T(e) {
    let t = A(e);
    if (null == t || !("expiresAt" in t) || null == t.expiresAt) return null;
    let n = new Date(e.expiresAt),
        i = new Date(t.expiresAt),
        r = (0, s.A)(i, n),
        a = Math.floor(r / 30) + +(r % 30 >= 25);
    if (a >= 12) {
        let e = Math.floor(a / 12);
        return h.intl.formatToPlainString(h.t.PClsrw, { years: e });
    }
    {
        if (a > 0) return h.intl.formatToPlainString(h.t.kridzK, { months: a });
        let e = (0, s.A)(i, n);
        if (!(e >= 7)) return h.intl.formatToPlainString(h.t["k2UNz+"], { days: e });
        {
            let t = Math.ceil(e / 7);
            return h.intl.formatToPlainString(h.t.EmoBD2, { weeks: t });
        }
    }
}
function S(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === l.l.FRACTIONAL_PREMIUM);
}
function N(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === l.l.VIRTUAL_CURRENCY);
}
function y(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === l.l.VIRTUAL_CURRENCY),
        n = t?.premiumOrbQuantity;
    return null != n && n > 0;
}
function C(e) {
    return null != A(e);
}
function v(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === l.l.IN_GAME);
}
function O(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === l.l.REWARD_CODE);
}
function R(e) {
    return e.rewardsConfig.rewards.find((e) => e.type === l.l.IN_GAME) ?? null;
}
function b(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === l.l.VIRTUAL_CURRENCY);
    return t?.orbQuantity;
}
function D(e) {
    let t = A(e)?.expirationMode;
    return null != t && g.has(t);
}
function L(e) {
    return D(e) && A(e)?.expirationMode === o.PREMIUM_PERMANENT;
}
function w(e) {
    let t = e.userStatus?.claimedTier ?? 0;
    return "rewardsConfig" in e.config ? e.config.rewardsConfig.rewards[t] : e.config.rewards[t];
}
function M(e, t) {
    let n = e.rewardsConfig.rewards.find((e) => e.type === l.l.VIRTUAL_CURRENCY);
    if (null == n) return null;
    if (null == t) return n.orbQuantity;
    let i = (0, c.m)(t);
    return y(e) && (0, m.B9)(i) ? (n.premiumOrbQuantity ?? n.orbQuantity) : n.orbQuantity;
}
function P(e, t, n) {
    if (S(e)) {
        let t = e.rewardsConfig.rewards
                .filter((e) => e.type === l.l.FRACTIONAL_PREMIUM)
                .flatMap((e) => Array(e.quantity).fill(e.skuId)),
            n = (0, f.iv)(t),
            i = { days: h.t.fYmirx, hours: h.t["C3RO+g"], minutes: h.t.r77oHc },
            r = (0, d.Tf)(0, n * _.A.Millis.HOUR);
        return h.intl.formatToPlainString(h.t["4SqnVD"], { time: (0, d.uN)(r, i) });
    }
    if (N(e)) {
        let n;
        return (n = M(e, t) ?? b(e) ?? 0), h.intl.formatToPlainString(h.t["nLXlh+"], { orbAmount: n });
    }
    let i = (0, p.xv)(e);
    return n ? i.messages.nameWithArticle : i.messages.name;
}
function x(e, t) {
    return P(e, t, !1);
}
function U(e, t) {
    return P(e, t, !0);
}
function k(e) {
    let { quest: t, idx: n } = e;
    if (null == n) return null;
    let i = t.config.rewardsConfig.rewards[n];
    return i.type === l.l.REWARD_CODE ? i : null;
}
function G(e) {
    let {
            quest: { config: t },
        } = e,
        n = t.rewardsConfig;
    return (
        n.assignmentMethod === a.TIERED && n.rewards.length > 0 && n.rewards.every((e) => e.type === l.l.REWARD_CODE)
    );
}
function F(e) {
    let t = e.rewardsConfig.platforms;
    return t.length > 0 ? t[0] : u.pY.CROSS_PLATFORM;
}
