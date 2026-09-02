n.d(e, { PA: () => p, O9: () => A, o1: () => E, bV: () => x, FY: () => h, bf: () => T });
var l = n(17928),
    r = n(780964),
    a = n(766075),
    i = n(287809),
    u = n(166403),
    s = n(158045),
    o = n(427262),
    f = n(593032),
    c = n(202541),
    d = n(88001),
    m = n(148155),
    P = n(375708),
    g = n(97352),
    I = n(580630);
function x(t, e) {
    let { withIntervals: n } = e ?? {};
    if (null == t || !t.hasAnyPremiumGroup) return null;
    let l = t.planIdFromItems;
    if (null == l) return null;
    let r = g.A.get(l);
    if (null == r) return null;
    let a = (0, s.y8)(l),
        i = (0, I.$g)(a.amount, a.currency);
    if (!n) return i;
    {
        let { interval: t, intervalCount: e } = r;
        return (0, I.CE)(i, t, e);
    }
}
function E(t) {
    let e,
        n,
        { sender: l, channel: u, isSender: s, inviteState: f } = t,
        c = (0, d.DP)();
    if (s) {
        let t = (function (t, e) {
            if (null == e) return null;
            let n = e.recipients?.find((e) => e !== t.id),
                l = i.default.getUser(n);
            return null == l ? null : (0, o.$3)(l);
        })(l, u);
        if (null == t) return null;
        let s = P.intl.format(m.default.MkcFjx, { receiverName: t, premiumGroupProductName: c });
        switch (f) {
            case d.xI.ACCEPTED:
                (e = P.intl.formatToPlainString(m.default.K37xCB, { premiumGroupProductName: c })),
                    (n = P.intl.formatToPlainString(m.default["W7e/z1"], { receiverName: t }));
                break;
            case d.xI.REMOVED:
            case d.xI.NOT_FOUND:
            case d.xI.ERROR:
                (e = P.intl.formatToPlainString(m.default.YLvraS, { premiumGroupProductName: c })),
                    (n = P.intl.format(m.default.BHxlIR, {
                        premiumGroupProductName: c,
                        onClick: () => {
                            (0, a.openUserSettings)(r.X.SUBSCRIPTIONS_PANEL);
                        },
                    }));
                break;
            case d.xI.PENDING:
            default:
                (e = P.intl.formatToPlainString(m.default["5uwv8J"], { premiumGroupProductName: c })),
                    (n = P.intl.formatToPlainString(m.default["AmE0B/"], { receiverName: t }));
        }
        return { message: s, header: e, body: n };
    }
    {
        let t = (0, o.$3)(l),
            r = P.intl.format(m.default["51Kv/4"], { senderName: t, premiumGroupProductName: c, helpCenterLink: d.TE });
        switch (f) {
            case d.xI.ACCEPTED:
                (e = P.intl.string(m.default.ssge1y)),
                    (n = P.intl.formatToPlainString(m.default.fTAcw3, { senderName: t }));
                break;
            case d.xI.REMOVED:
            case d.xI.NOT_FOUND:
            case d.xI.ERROR:
                (e = P.intl.formatToPlainString(m.default["AmLUw+"], { premiumGroupProductName: c })),
                    (n = P.intl.formatToPlainString(m.default["7XAuyg"], { premiumGroupProductName: c }));
                break;
            case d.xI.PENDING:
            default:
                (e = P.intl.string(m.default.ssge1y)),
                    (n = P.intl.formatToPlainString(m.default.MkcdX8, { senderName: t, premiumGroupProductName: c }));
        }
        return { message: r, header: e, body: n };
    }
}
function h(t) {
    let { isGift: e } = t;
    return p() && !e;
}
function p() {
    let t = (0, f.A)({ location: "PremiumGroupPurchase" }),
        e = (0, l.bG)([u.A], () => u.A.getPremiumSubscription()),
        n = (0, l.bG)([i.default], () => i.default.getCurrentUser());
    return (
        !n?.isPremiumWithFractionalPremiumOnly() &&
        !!t &&
        (null == e || (c.BL.has(e.premiumPlanIdFromItems ?? "") && !e.isPurchasedExternally))
    );
}
function A() {
    let t = (0, f.A)({ location: "PremiumGroupPurchase" }),
        e = p(),
        n = (0, l.bG)([i.default], () => i.default.getCurrentUser());
    return !!t && !!e && (null == n || !n.isPremiumWithPremiumGroup());
}
function T() {
    let t = A(),
        e = (0, l.bG)([i.default], () => i.default.getCurrentUser());
    return t && ((0, s.TW)(e) || !(0, s.mv)(e));
}
