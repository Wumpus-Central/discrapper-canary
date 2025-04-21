n.d(t, { Z: () => p });
var r = n(442837),
    i = n(975298),
    a = n(301766),
    o = n(594174),
    s = n(78839),
    l = n(74538),
    c = n(502087),
    u = n(404380),
    d = n(474936),
    f = n(981631),
    _ = n(388032);
function p(e) {
    let { subscriptionTier: t, isTrialCTA: n, isGift: p, buttonTextOverride: m, defaultTextOverride: g } = e,
        E = (0, r.e7)([o.default], () => o.default.getCurrentUser()),
        b = (0, r.e7)([s.ZP], () => s.ZP.getPremiumTypeSubscription()),
        { fractionalState: y } = (0, i.Z)({ forceFetch: !1 }),
        v = (0, r.e7)([c.Z], () => c.Z.getPremiumTypeOverride());
    if (n) return { buttonText: null != m ? m : _.intl.string(_.t['Gd/XHB']) };
    if (p) return { buttonText: null != m ? m : _.intl.string(_.t.PEjaCw) };
    let O = null != g ? g : _.intl.string(_.t['2pG5GR']),
        I = null != b ? (0, l.Af)(b) : null,
        S = void 0 !== v ? v : null != I ? (0, l.Rd)(I.planId) : null == E ? void 0 : E.premiumType,
        T = t === d.Si.TIER_2 && null != S && [d.p9.TIER_0, d.p9.TIER_1].includes(S);
    T && (O = _.intl.string(_.t.IJI7ys));
    let A = (null != b && (0, l.m3)(b)) || (null != b && (0, u.o)('PremiumSubscribeButton', E, y));
    if (!((null != b && b.status !== f.O0b.ACCOUNT_HOLD && !(0, a.Q0)(b.planId) && !T && void 0 === v) || A)) return { buttonText: null != m ? m : O };
    {
        var N, C;
        let e = h({
            ctaSubscriptionSkuId: t,
            currentPremiumType: S,
            isSwitchingDisabled: A,
            subscription: b
        });
        return {
            buttonText: null != (C = null != (N = e.disabledButtonText) ? N : m) ? C : O,
            buttonTooltipText: e.disabledButtonTooltipText,
            disabled: !0
        };
    }
}
function h(e) {
    let t,
        n,
        { ctaSubscriptionSkuId: r, currentPremiumType: i, isSwitchingDisabled: a, subscription: o } = e;
    if (null != r && r !== d.Si.LEGACY && r !== d.Si.TIER_0 && r !== d.Si.TIER_1 && r !== d.Si.TIER_2)
        return {
            disabledButtonText: t,
            disabledButtonTooltipText: n
        };
    let s = null != r ? d.y7[(0, l.Wz)(r)] : null,
        c = null != s ? d.$e[s] : null,
        u = null != i ? d.$e[i] : null;
    if (a) {
        var f;
        n = null != (f = (0, l.nd)(o)) ? f : void 0;
    } else null != u && null != c && c < u ? ((t = _.intl.string(_.t['2pG5GR'])), (n = _.intl.string(_.t.jXaaRk))) : null != s && null != i && s === i ? ((t = _.intl.string(_.t.ymSxh4)), (n = _.intl.string(_.t.jXaaRk))) : null == s && null != i && i === d.p9.TIER_2 && (n = _.intl.string(_.t.jXaaRk));
    return {
        disabledButtonText: t,
        disabledButtonTooltipText: n
    };
}
