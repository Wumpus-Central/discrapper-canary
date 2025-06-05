n.d(t, { Z: () => L });
var r = n(255367),
    i = n(73800),
    l = n(512722),
    a = n.n(l),
    o = n(913527),
    s = n.n(o),
    c = n(442837),
    u = n(570140),
    d = n(821849),
    m = n(131388),
    p = n(906732),
    f = n(305325),
    h = n(246364),
    g = n(937111),
    b = n(281956),
    v = n(41776),
    _ = n(738737),
    C = n(509545),
    j = n(63063),
    y = n(817460),
    E = n(584825),
    O = n(697227),
    x = n(934826),
    N = n(896083),
    P = n(939872),
    I = n(265985),
    S = n(293810),
    T = n(981631),
    Z = n(388032);
let L = (e, t, n, l) => {
    let o,
        L = (0, c.e7)([v.Z], () => v.Z.isLurking(t)),
        A = (0, b.J)(t),
        w = (0, c.e7)([g.Z], () => (null != t ? g.Z.getRequest(t) : null)),
        M = (null == w ? void 0 : w.applicationStatus) === h.wB.SUBMITTED,
        k = null == e ? void 0 : e.subscription_plans[0],
        R = null == k ? void 0 : k.id,
        D = (null == e ? void 0 : e.published) === !0,
        F = null == k ? void 0 : k.sku_id,
        U = (0, c.e7)([C.Z], () => (null != R ? C.Z.get(R) : null)),
        { activeSubscription: z, activeSubscriptionPlanFromStore: B } = (0, x.Z)(n),
        H = null == z || null != B,
        G = (0, E._k)(n, { includeSoftDeleted: !0 }).map((e) => e.subscription_plans[0].id),
        W = (0, O.V)(z),
        Y = null != W,
        V = !!(null == z ? void 0 : z.hasActiveTrial),
        { loading: X, getTrialPurchaseEligibility: K } = (0, N.F)(),
        q = (0, E.oC)(null == e ? void 0 : e.id),
        { analyticsLocations: Q } = (0, p.ZP)(),
        J = (null == z ? void 0 : z.paymentGateway) === T.gg$.APPLE_PARTNER,
        $ = !L && null != U && H && !M && !Y && !V && !J;
    M || (L && !A) ? (o = Z.intl.string(Z.t.pQK5ho)) : W === R ? (o = Z.intl.formatToPlainString(Z.t.UlBRTk, { changeDate: null != z ? s()(z.currentPeriodEnd).format('MMM DD, YYYY') : '' })) : Y ? (o = Z.intl.string(Z.t.ePFYOT)) : V ? (o = Z.intl.string(Z.t['0lPoT0'])) : J && (o = Z.intl.string(Z.t.cEMaCg));
    let ee = (0, m.Z)(S.iP);
    i.useEffect(() => {
        D &&
            null != F &&
            u.Z.wait(() => {
                (0, d.GZ)(F);
            });
    }, [D, F]);
    let et = i.useCallback(async () => {
            let n, i;
            if ((a()(null != e, 'No subscription listing'), a()(null != k, 'No subscription plan'), a()(D, 'Cannot purchase this unpublished plan'), (null == q ? void 0 : q.active_trial) != null)) {
                let r = await K(t, e.id, q.active_trial.id);
                if ((null == r ? void 0 : r.is_eligible) === !0) {
                    var o;
                    n = null == q || null == (o = q.active_trial) ? void 0 : o.id;
                } else i = Z.intl.string(Z.t.vuvsKy);
            }
            (0, _.Z)({
                activeSubscription: z,
                analyticsSubscriptionType: T.NYc.GUILD,
                trialId: n,
                trialFooterMessageOverride:
                    (null == q ? void 0 : q.active_trial) != null
                        ? Z.intl.format(Z.t.zyGyNj, {
                              buttonText: Z.intl.string(Z.t.BEeXiY),
                              interval: (0, y.iG)(k),
                              days: 1,
                              contactLink: T.EYA.CONTACT,
                              cancelSubscriptionArticle: j.Z.getArticleURL(T.BhN.ROLE_SUBSCRIPTION_CANCEL),
                              helpdeskArticle: j.Z.getArticleURL(T.BhN.ROLE_SUBSCRIPTION_TRIAL),
                              paidServiceTermsArticle: j.Z.getArticleURL(T.BhN.PAID_TERMS),
                              tierName: k.name
                          })
                        : void 0,
                analyticsLocations: Q,
                analyticsLocation: l,
                renderHeader: (n, i, l) =>
                    (0, r.jsx)(I.h, {
                        onClose: i,
                        listing: e,
                        step: l,
                        guildId: t
                    }),
                initialPlanId: k.id,
                skuId: k.sku_id,
                planGroup: G,
                renderPurchaseConfirmation: (n, i) =>
                    ee
                        ? (0, r.jsx)(P.m, {
                              listing: e,
                              onClose: i,
                              guildId: t
                          })
                        : (0, r.jsx)(I.x, {
                              listing: e,
                              onClose: i,
                              guildId: t
                          }),
                reviewWarningMessage: i
            });
        }, [D, e, k, z, G, t, Q, l, K, q, ee]),
        en = i.useCallback(() => {
            (0, f.hk)(t);
        }, [t]);
    return {
        openModal: A ? en : et,
        canOpenModal: $,
        cannotOpenReason: o,
        isCheckingTrialEligibility: X
    };
};
