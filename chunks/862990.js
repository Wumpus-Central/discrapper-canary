"use strict";
n.d(t, { bf: () => R, O9: () => O, PA: () => C, o1: () => g, bV: () => m, ux: () => S, FY: () => N });
var i = n(17928),
    r = n(554146),
    a = n(826673),
    s = n(780964),
    l = n(766075),
    o = n(287809),
    d = n(166403),
    c = n(158045),
    u = n(427262),
    _ = n(593032);
let E = (0, n(945810).mj)({
    name: "2026-04-premium-group-primary-reminder-nagbar",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var A = n(202541),
    h = n(88001),
    I = n(466919),
    f = n(375708),
    p = n(97352),
    T = n(580630);
function m(e, t) {
    let { withIntervals: n } = t ?? {};
    if (null == e || !e.hasAnyPremiumGroup) return null;
    let i = e.planIdFromItems;
    if (null == i) return null;
    let r = p.A.get(i);
    if (null == r) return null;
    let a = (0, c.y8)(i),
        s = (0, T.$g)(a.amount, a.currency);
    if (!n) return s;
    {
        let { interval: e, intervalCount: t } = r;
        return (0, T.CE)(s, e, t);
    }
}
function g(e) {
    let t,
        n,
        { sender: i, channel: r, isSender: a, inviteState: d } = e,
        c = (0, h.DP)();
    if (a) {
        let e = (function (e, t) {
            if (null == t) return null;
            let n = t.recipients?.find((t) => t !== e.id),
                i = o.default.getUser(n);
            return null == i ? null : (0, u.$3)(i);
        })(i, r);
        if (null == e) return null;
        let a = f.intl.format(I.default.MkcFjx, { receiverName: e, premiumGroupProductName: c });
        switch (d) {
            case h.xI.ACCEPTED:
                (t = f.intl.formatToPlainString(I.default.K37xCB, { premiumGroupProductName: c })),
                    (n = f.intl.formatToPlainString(I.default["W7e/z1"], { receiverName: e }));
                break;
            case h.xI.REMOVED:
            case h.xI.NOT_FOUND:
            case h.xI.ERROR:
                (t = f.intl.formatToPlainString(I.default.YLvraS, { premiumGroupProductName: c })),
                    (n = f.intl.format(I.default.BHxlIR, {
                        premiumGroupProductName: c,
                        onClick: () => {
                            (0, l.openUserSettings)(s.X.SUBSCRIPTIONS_PANEL);
                        },
                    }));
                break;
            case h.xI.PENDING:
            default:
                (t = f.intl.formatToPlainString(I.default["5uwv8J"], { premiumGroupProductName: c })),
                    (n = f.intl.formatToPlainString(I.default["AmE0B/"], { receiverName: e }));
        }
        return { message: a, header: t, body: n };
    }
    {
        let e = (0, u.$3)(i),
            r = f.intl.format(I.default["51Kv/4"], { senderName: e, premiumGroupProductName: c, helpCenterLink: h.TE });
        switch (d) {
            case h.xI.ACCEPTED:
                (t = f.intl.string(I.default.ssge1y)),
                    (n = f.intl.formatToPlainString(I.default.fTAcw3, { senderName: e }));
                break;
            case h.xI.REMOVED:
            case h.xI.NOT_FOUND:
            case h.xI.ERROR:
                (t = f.intl.formatToPlainString(I.default["AmLUw+"], { premiumGroupProductName: c })),
                    (n = f.intl.formatToPlainString(I.default["7XAuyg"], { premiumGroupProductName: c }));
                break;
            case h.xI.PENDING:
            default:
                (t = f.intl.string(I.default.ssge1y)),
                    (n = f.intl.formatToPlainString(I.default.MkcdX8, { senderName: e, premiumGroupProductName: c }));
        }
        return { message: r, header: t, body: n };
    }
}
function S(e, t) {
    return !(
        !e.isPremiumGroupPrimary() ||
        !E.getConfig({ location: "PremiumGroupUtils" }) ||
        (0, a.u$)(r.M.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR, t.id).isDismissed ||
        null == t.createdAt ||
        Date.now() - t.createdAt.getTime() < h.qk
    );
}
function N(e) {
    let { isGift: t } = e;
    return C() && !t;
}
function C() {
    let e = (0, _.A)({ location: "PremiumGroupPurchase" }),
        t = (0, i.bG)([d.A], () => d.A.getPremiumSubscription()),
        n = (0, i.bG)([o.default], () => o.default.getCurrentUser());
    return (
        !n?.isPremiumWithFractionalPremiumOnly() &&
        !!e &&
        (null == t || (A.BL.has(t.premiumPlanIdFromItems ?? "") && !t.isPurchasedExternally))
    );
}
function O() {
    let e = (0, _.A)({ location: "PremiumGroupPurchase" }),
        t = C(),
        n = (0, i.bG)([o.default], () => o.default.getCurrentUser());
    return !!e && !!t && (null == n || !n.isPremiumWithPremiumGroup());
}
function R() {
    let e = O(),
        t = (0, i.bG)([o.default], () => o.default.getCurrentUser());
    return e && ((0, c.TW)(t) || !(0, c.mv)(t));
}
