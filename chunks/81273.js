n.d(t, { Z: () => L });
var r = n(255367),
    i = n(73800),
    l = n(512722),
    a = n.n(l),
    s = n(913527),
    o = n.n(s),
    c = n(442837),
    d = n(570140),
    u = n(821849),
    m = n(131388),
    p = n(906732),
    f = n(305325),
    h = n(246364),
    g = n(937111),
    C = n(281956),
    _ = n(41776),
    b = n(738737),
    v = n(509545),
    j = n(63063),
    y = n(817460),
    E = n(584825),
    x = n(697227),
    O = n(934826),
    N = n(896083),
    P = n(939872),
    I = n(265985),
    T = n(293810),
    S = n(981631),
    Z = n(388032);
let L = (e, t, n, l) => {
    let s,
        L = (0, c.e7)([_.Z], () => _.Z.isLurking(t)),
        A = (0, C.J)(t),
        w = (0, c.e7)([g.Z], () => (null != t ? g.Z.getRequest(t) : null)),
        M = (null == w ? void 0 : w.applicationStatus) === h.wB.SUBMITTED,
        R = null == e ? void 0 : e.subscription_plans[0],
        D = null == R ? void 0 : R.id,
        k = (null == e ? void 0 : e.published) === !0,
        F = null == R ? void 0 : R.sku_id,
        U = (0, c.e7)([v.Z], () => (null != D ? v.Z.get(D) : null)),
        { activeSubscription: z, activeSubscriptionPlanFromStore: B } = (0, O.Z)(n),
        H = null == z || null != B,
        G = (0, E._k)(n, { includeSoftDeleted: !0 }).map((e) => e.subscription_plans[0].id),
        W = (0, x.V)(z),
        Y = null != W,
        V = !!(null == z ? void 0 : z.hasActiveTrial),
        { loading: X, getTrialPurchaseEligibility: K } = (0, N.F)(),
        q = (0, E.oC)(null == e ? void 0 : e.id),
        { analyticsLocations: Q } = (0, p.ZP)(),
        J = (null == z ? void 0 : z.paymentGateway) === S.gg$.APPLE_PARTNER,
        $ = !L && null != U && H && !M && !Y && !V && !J;
    M || (L && !A) ? (s = Z.intl.string(Z.t.pQK5ho)) : W === D ? (s = Z.intl.formatToPlainString(Z.t.UlBRTk, { changeDate: null != z ? o()(z.currentPeriodEnd).format('MMM DD, YYYY') : '' })) : Y ? (s = Z.intl.string(Z.t.ePFYOT)) : V ? (s = Z.intl.string(Z.t['0lPoT0'])) : J && (s = Z.intl.string(Z.t.cEMaCg));
    let ee = (0, m.Z)(T.iP);
    i.useEffect(() => {
        k &&
            null != F &&
            d.Z.wait(() => {
                (0, u.GZ)(F);
            });
    }, [k, F]);
    let et = i.useCallback(async () => {
            let n, i;
            if ((a()(null != e, 'No subscription listing'), a()(null != R, 'No subscription plan'), a()(k, 'Cannot purchase this unpublished plan'), (null == q ? void 0 : q.active_trial) != null)) {
                let r = await K(t, e.id, q.active_trial.id);
                if ((null == r ? void 0 : r.is_eligible) === !0) {
                    var s;
                    n = null == q || null == (s = q.active_trial) ? void 0 : s.id;
                } else i = Z.intl.string(Z.t.vuvsKy);
            }
            (0, b.Z)({
                activeSubscription: z,
                analyticsSubscriptionType: S.NYc.GUILD,
                trialId: n,
                trialFooterMessageOverride:
                    (null == q ? void 0 : q.active_trial) != null
                        ? Z.intl.format(Z.t.zyGyNj, {
                              buttonText: Z.intl.string(Z.t.BEeXiY),
                              interval: (0, y.iG)(R),
                              days: 1,
                              contactLink: S.EYA.CONTACT,
                              cancelSubscriptionArticle: j.Z.getArticleURL(S.BhN.ROLE_SUBSCRIPTION_CANCEL),
                              helpdeskArticle: j.Z.getArticleURL(S.BhN.ROLE_SUBSCRIPTION_TRIAL),
                              paidServiceTermsArticle: j.Z.getArticleURL(S.BhN.PAID_TERMS),
                              tierName: R.name
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
                initialPlanId: R.id,
                skuId: R.sku_id,
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
        }, [k, e, R, z, G, t, Q, l, K, q, ee]),
        en = i.useCallback(() => {
            (0, f.hk)(t);
        }, [t]);
    return {
        openModal: A ? en : et,
        canOpenModal: $,
        cannotOpenReason: s,
        isCheckingTrialEligibility: X
    };
};
