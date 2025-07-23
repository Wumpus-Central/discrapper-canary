n.d(t, { Z: () => w });
var r = n(255367),
    i = n(73800),
    l = n(512722),
    a = n.n(l),
    o = n(913527),
    s = n.n(o),
    c = n(442837),
    u = n(570140),
    d = n(821849),
    p = n(131388),
    m = n(906732),
    f = n(305325),
    h = n(246364),
    g = n(937111),
    b = n(281956),
    v = n(41776),
    y = n(738737),
    j = n(509545),
    C = n(63063),
    _ = n(817460),
    O = n(584825),
    x = n(697227),
    E = n(934826),
    N = n(896083),
    P = n(939872),
    I = n(265985),
    S = n(293810),
    T = n(981631),
    Z = n(388032);
let w = (e, t, n, l) => {
    let o,
        w = (0, c.e7)([v.Z], () => v.Z.isLurking(t)),
        A = (0, b.J)(t),
        L = (0, c.e7)([g.Z], () => (null != t ? g.Z.getRequest(t) : null)),
        M = (null == L ? void 0 : L.applicationStatus) === h.wB.SUBMITTED,
        R = null == e ? void 0 : e.subscription_plans[0],
        D = null == R ? void 0 : R.id,
        k = (null == e ? void 0 : e.published) === !0,
        F = null == R ? void 0 : R.sku_id,
        U = (0, c.e7)([j.Z], () => (null != D ? j.Z.get(D) : null)),
        { activeSubscription: z, activeSubscriptionPlanFromStore: B } = (0, E.Z)(n),
        H = null == z || null != B,
        G = (0, O._k)(n, { includeSoftDeleted: !0 }).map((e) => e.subscription_plans[0].id),
        W = (0, x.V)(z),
        Y = null != W,
        V = !!(null == z ? void 0 : z.hasActiveTrial),
        { loading: X, getTrialPurchaseEligibility: K } = (0, N.F)(),
        q = (0, O.oC)(null == e ? void 0 : e.id),
        { analyticsLocations: Q } = (0, m.ZP)(),
        J = (null == z ? void 0 : z.paymentGateway) === T.gg$.APPLE_PARTNER,
        $ = !w && null != U && H && !M && !Y && !V && !J;
    M || (w && !A) ? (o = Z.intl.string(Z.t.pQK5ho)) : W === D ? (o = Z.intl.formatToPlainString(Z.t.UlBRTk, { changeDate: null != z ? s()(z.currentPeriodEnd).format('MMM DD, YYYY') : '' })) : Y ? (o = Z.intl.string(Z.t.ePFYOT)) : V ? (o = Z.intl.string(Z.t['0lPoT0'])) : J && (o = Z.intl.string(Z.t.cEMaCg));
    let ee = (0, p.Z)(S.iP);
    i.useEffect(() => {
        k &&
            null != F &&
            u.Z.wait(() => {
                (0, d.GZ)(F);
            });
    }, [k, F]);
    let et = i.useCallback(async () => {
            let n, i;
            if ((a()(null != e, 'No subscription listing'), a()(null != R, 'No subscription plan'), a()(k, 'Cannot purchase this unpublished plan'), (null == q ? void 0 : q.active_trial) != null)) {
                let r = await K(t, e.id, q.active_trial.id);
                if ((null == r ? void 0 : r.is_eligible) === !0) {
                    var o;
                    n = null == q || null == (o = q.active_trial) ? void 0 : o.id;
                } else i = Z.intl.string(Z.t.vuvsKy);
            }
            (0, y.Z)({
                activeSubscription: z,
                analyticsSubscriptionType: T.NYc.GUILD,
                trialId: n,
                trialFooterMessageOverride:
                    (null == q ? void 0 : q.active_trial) != null
                        ? Z.intl.format(Z.t.zyGyNj, {
                              buttonText: Z.intl.string(Z.t.BEeXiY),
                              interval: (0, _.iG)(R),
                              days: 1,
                              contactLink: T.EYA.CONTACT,
                              cancelSubscriptionArticle: C.Z.getArticleURL(T.BhN.ROLE_SUBSCRIPTION_CANCEL),
                              helpdeskArticle: C.Z.getArticleURL(T.BhN.ROLE_SUBSCRIPTION_TRIAL),
                              paidServiceTermsArticle: C.Z.getArticleURL(T.BhN.PAID_TERMS),
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
        cannotOpenReason: o,
        isCheckingTrialEligibility: X
    };
};
