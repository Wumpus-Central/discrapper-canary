n.d(t, {
    f: () => y,
    r7: () => L,
    wo: () => w,
    ks: () => N,
    $5: () => m,
    sn: () => M,
    mH: () => k,
    cg: () => F,
    Y7: () => b,
    kr: () => V,
    HG: () => R,
    KK: () => C,
    JX: () => v,
    tU: () => O,
    k5: () => g,
    nj: () => T,
    $s: () => B,
    _Z: () => D,
    l0: () => U,
    mq: () => x,
    b: () => P,
    K9: () => S,
});
var i,
    r,
    a = n(194537),
    s = (((i = {})[(i.ALL = 1)] = "ALL"), (i[(i.TIERED = 2)] = "TIERED"), i),
    l =
        (((r = {})[(r.NORMAL = 1)] = "NORMAL"),
        (r[(r.PREMIUM_EXTENSION = 2)] = "PREMIUM_EXTENSION"),
        (r[(r.PREMIUM_PERMANENT = 3)] = "PREMIUM_PERMANENT"),
        r),
    o = n(440703);
n(590180);
var d = n(738822),
    c = n(646917),
    u = n(58703),
    _ = n(927813),
    E = n(158045),
    A = n(375708),
    h = n(651892),
    I = n(710969),
    f = n(576761);
let p = new Set([l.PREMIUM_EXTENSION, l.PREMIUM_PERMANENT]);
function T(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === o.l.COLLECTIBLE);
    return t?.type === o.l.COLLECTIBLE ? t : null;
}
function m(e) {
    let t = T(e);
    return null != t && "expiresAtPremium" in t && null != t.expiresAtPremium ? (0, I.ZG)(t.expiresAtPremium) : null;
}
function g(e) {
    let t = T(e);
    if (null == t || !("expiresAt" in t) || null == t.expiresAt) return null;
    let n = new Date(e.expiresAt),
        i = new Date(t.expiresAt),
        r = (0, a.A)(i, n),
        s = Math.floor(r / 30) + +(r % 30 >= 25);
    if (s >= 12) {
        let e = Math.floor(s / 12);
        return A.intl.formatToPlainString(A.t.PClsrw, { years: e });
    }
    {
        if (s > 0) return A.intl.formatToPlainString(A.t.kridzK, { months: s });
        let e = (0, a.A)(i, n);
        if (!(e >= 7)) return A.intl.formatToPlainString(A.t["k2UNz+"], { days: e });
        {
            let t = Math.ceil(e / 7);
            return A.intl.formatToPlainString(A.t.EmoBD2, { weeks: t });
        }
    }
}
function S(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === o.l.FRACTIONAL_PREMIUM);
}
function N(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === o.l.VIRTUAL_CURRENCY);
}
function C(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === o.l.VIRTUAL_CURRENCY),
        n = t?.premiumOrbQuantity;
    return null != n && n > 0;
}
function O(e) {
    return null != T(e);
}
function R(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === o.l.IN_GAME);
}
function L(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === o.l.REWARD_CODE);
}
function y(e) {
    return e.rewardsConfig.rewards.find((e) => e.type === o.l.IN_GAME) ?? null;
}
function D(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === o.l.VIRTUAL_CURRENCY);
    return t?.orbQuantity;
}
function v(e) {
    let t = T(e)?.expirationMode;
    return null != t && p.has(t);
}
function b(e) {
    return v(e) && T(e)?.expirationMode === l.PREMIUM_PERMANENT;
}
function M(e) {
    let t = e.userStatus?.claimedTier ?? 0;
    return "rewardsConfig" in e.config ? e.config.rewardsConfig.rewards[t] : e.config.rewards[t];
}
function P(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === o.l.VIRTUAL_CURRENCY);
    if (t?.type !== o.l.VIRTUAL_CURRENCY) return null;
    let { premiumOrbQuantity: n, orbQuantity: i } = t;
    return null == n || 0 === i ? null : Math.round((n / i) * 100) / 100;
}
function U(e, t) {
    if (null == t) return 1;
    let n = P(e) ?? 1,
        i = (0, c.m)(t);
    return C(e) && (0, f.B9)(i) ? n : 1;
}
function w(e, t) {
    let n = e.rewardsConfig.rewards.find((e) => e.type === o.l.VIRTUAL_CURRENCY);
    if (null == n) return null;
    if (null == t) return n.orbQuantity;
    let i = (0, c.m)(t);
    return C(e) && (0, f.B9)(i) ? (n.premiumOrbQuantity ?? n.orbQuantity) : n.orbQuantity;
}
function G(e, t, n) {
    if (S(e)) {
        let t = e.rewardsConfig.rewards
                .filter((e) => e.type === o.l.FRACTIONAL_PREMIUM)
                .flatMap((e) => Array(e.quantity).fill(e.skuId)),
            n = (0, E.iv)(t),
            i = { days: A.t.fYmirx, hours: A.t["C3RO+g"], minutes: A.t.r77oHc },
            r = (0, u.Tf)(0, n * _.A.Millis.HOUR);
        return A.intl.formatToPlainString(A.t["4SqnVD"], { time: (0, u.uN)(r, i) });
    }
    if (N(e)) {
        let n;
        return (n = w(e, t) ?? D(e) ?? 0), A.intl.formatToPlainString(A.t["nLXlh+"], { orbAmount: n });
    }
    let i = (0, h.xv)(e);
    return n ? i.messages.nameWithArticle : i.messages.name;
}
function x(e, t) {
    return G(e, t, !1);
}
function k(e, t) {
    return G(e, t, !0);
}
function F(e) {
    let { quest: t, idx: n } = e;
    if (null == n) return null;
    let i = t.config.rewardsConfig.rewards[n];
    return i.type === o.l.REWARD_CODE ? i : null;
}
function V(e) {
    let {
            quest: { config: t },
        } = e,
        n = t.rewardsConfig;
    return (
        n.assignmentMethod === s.TIERED && n.rewards.length > 0 && n.rewards.every((e) => e.type === o.l.REWARD_CODE)
    );
}
function B(e) {
    let t = e.rewardsConfig.platforms;
    return t.length > 0 ? t[0] : d.pY.CROSS_PLATFORM;
}
