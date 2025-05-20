n.d(t, { Z: () => L });
var r = n(255367),
    i = n(73800),
    a = n(512722),
    o = n.n(a),
    l = n(913527),
    s = n.n(l),
    c = n(442837),
    d = n(570140),
    u = n(821849),
    _ = n(131388),
    m = n(906732),
    f = n(305325),
    p = n(246364),
    g = n(937111),
    v = n(281956),
    h = n(41776),
    b = n(738737),
    y = n(509545),
    x = n(63063),
    j = n(817460),
    C = n(584825),
    I = n(697227),
    O = n(934826),
    E = n(896083),
    P = n(939872),
    N = n(265985),
    S = n(293810),
    w = n(981631),
    T = n(388032);
let L = (e, t, n, a) => {
    let l,
        L = (0, c.e7)([h.Z], () => h.Z.isLurking(t)),
        k = (0, v.J)(t),
        Z = (0, c.e7)([g.Z], () => (null != t ? g.Z.getRequest(t) : null)),
        D = (null == Z ? void 0 : Z.applicationStatus) === p.wB.SUBMITTED,
        A = null == e ? void 0 : e.subscription_plans[0],
        R = null == A ? void 0 : A.id,
        F = (null == e ? void 0 : e.published) === !0,
        M = null == A ? void 0 : A.sku_id,
        B = (0, c.e7)([y.Z], () => (null != R ? y.Z.get(R) : null)),
        { activeSubscription: z, activeSubscriptionPlanFromStore: U } = (0, O.Z)(n),
        W = null == z || null != U,
        H = (0, C._k)(n, { includeSoftDeleted: !0 }).map((e) => e.subscription_plans[0].id),
        V = (0, I.V)(z),
        G = null != V,
        Y = !!(null == z ? void 0 : z.hasActiveTrial),
        { loading: q, getTrialPurchaseEligibility: X } = (0, E.F)(),
        K = (0, C.oC)(null == e ? void 0 : e.id),
        { analyticsLocations: Q } = (0, m.ZP)(),
        J = (null == z ? void 0 : z.paymentGateway) === w.gg$.APPLE_PARTNER,
        $ = !L && null != B && W && !D && !G && !Y && !J;
    D || (L && !k) ? (l = T.intl.string(T.t.pQK5ho)) : V === R ? (l = T.intl.formatToPlainString(T.t.UlBRTk, { changeDate: null != z ? s()(z.currentPeriodEnd).format('MMM DD, YYYY') : '' })) : G ? (l = T.intl.string(T.t.ePFYOT)) : Y ? (l = T.intl.string(T.t['0lPoT0'])) : J && (l = T.intl.string(T.t.cEMaCg));
    let ee = (0, _.Z)(S.iP);
    i.useEffect(() => {
        F &&
            null != M &&
            d.Z.wait(() => {
                (0, u.GZ)(M);
            });
    }, [F, M]);
    let et = i.useCallback(async () => {
            let n, i;
            if ((o()(null != e, 'No subscription listing'), o()(null != A, 'No subscription plan'), o()(F, 'Cannot purchase this unpublished plan'), (null == K ? void 0 : K.active_trial) != null)) {
                let r = await X(t, e.id, K.active_trial.id);
                if ((null == r ? void 0 : r.is_eligible) === !0) {
                    var l;
                    n = null == K || null == (l = K.active_trial) ? void 0 : l.id;
                } else i = T.intl.string(T.t.vuvsKy);
            }
            (0, b.Z)({
                activeSubscription: z,
                analyticsSubscriptionType: w.NYc.GUILD,
                trialId: n,
                trialFooterMessageOverride:
                    (null == K ? void 0 : K.active_trial) != null
                        ? T.intl.format(T.t.zyGyNj, {
                              buttonText: T.intl.string(T.t.BEeXiY),
                              interval: (0, j.iG)(A),
                              days: 1,
                              contactLink: w.EYA.CONTACT,
                              cancelSubscriptionArticle: x.Z.getArticleURL(w.BhN.ROLE_SUBSCRIPTION_CANCEL),
                              helpdeskArticle: x.Z.getArticleURL(w.BhN.ROLE_SUBSCRIPTION_TRIAL),
                              paidServiceTermsArticle: x.Z.getArticleURL(w.BhN.PAID_TERMS),
                              tierName: A.name
                          })
                        : void 0,
                analyticsLocations: Q,
                analyticsLocation: a,
                renderHeader: (n, i, a) =>
                    (0, r.jsx)(N.h, {
                        onClose: i,
                        listing: e,
                        step: a,
                        guildId: t
                    }),
                initialPlanId: A.id,
                skuId: A.sku_id,
                planGroup: H,
                renderPurchaseConfirmation: (n, i) =>
                    ee
                        ? (0, r.jsx)(P.m, {
                              listing: e,
                              onClose: i,
                              guildId: t
                          })
                        : (0, r.jsx)(N.x, {
                              listing: e,
                              onClose: i,
                              guildId: t
                          }),
                reviewWarningMessage: i
            });
        }, [F, e, A, z, H, t, Q, a, X, K, ee]),
        en = i.useCallback(() => {
            (0, f.hk)(t);
        }, [t]);
    return {
        openModal: k ? en : et,
        canOpenModal: $,
        cannotOpenReason: l,
        isCheckingTrialEligibility: q
    };
};
