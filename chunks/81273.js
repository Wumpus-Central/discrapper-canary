var i = n(200651),
    r = n(192379),
    l = n(512722),
    a = n.n(l),
    o = n(913527),
    s = n.n(o),
    c = n(442837),
    d = n(570140),
    u = n(821849),
    m = n(131388),
    h = n(906732),
    f = n(305325),
    p = n(246364),
    _ = n(937111),
    g = n(281956),
    E = n(41776),
    C = n(738737),
    I = n(509545),
    x = n(63063),
    N = n(817460),
    v = n(584825),
    T = n(697227),
    S = n(934826),
    A = n(896083),
    b = n(939872),
    j = n(265985),
    R = n(293810),
    Z = n(981631),
    P = n(388032);
t.Z = (e, t, n, l) => {
    let o;
    let L = (0, c.e7)([E.Z], () => E.Z.isLurking(t)),
        y = (0, g.J)(t),
        O = (0, c.e7)([_.Z], () => (null != t ? _.Z.getRequest(t) : null)),
        M = (null == O ? void 0 : O.applicationStatus) === p.wB.SUBMITTED,
        k = null == e ? void 0 : e.subscription_plans[0],
        D = null == k ? void 0 : k.id,
        B = (null == e ? void 0 : e.published) === !0,
        U = null == k ? void 0 : k.sku_id,
        w = (0, c.e7)([I.Z], () => (null != D ? I.Z.get(D) : null)),
        { activeSubscription: F, activeSubscriptionPlanFromStore: G } = (0, S.Z)(n),
        V = null == F || null != G,
        H = (0, v._k)(n, { includeSoftDeleted: !0 }).map((e) => e.subscription_plans[0].id),
        z = (0, T.V)(F),
        W = null != z,
        K = (null == F ? void 0 : F.trialId) != null,
        { loading: Y, getTrialPurchaseEligibility: X } = (0, A.F)(),
        Q = (0, v.oC)(null == e ? void 0 : e.id),
        { analyticsLocations: q } = (0, h.ZP)(),
        J = (null == F ? void 0 : F.paymentGateway) === Z.gg$.APPLE_PARTNER;
    M ? (o = P.intl.string(P.t.pQK5ho)) : L && !y ? (o = P.intl.string(P.t.pQK5ho)) : z === D ? (o = P.intl.formatToPlainString(P.t.UlBRTk, { changeDate: null != F ? s()(F.currentPeriodEnd).format('MMM DD, YYYY') : '' })) : W ? (o = P.intl.string(P.t.ePFYOT)) : K ? (o = P.intl.string(P.t['0lPoT0'])) : J && (o = P.intl.string(P.t.cEMaCg));
    let $ = (0, m.Z)(R.iP);
    r.useEffect(() => {
        B &&
            null != U &&
            d.Z.wait(() => {
                (0, u.GZ)(U);
            });
    }, [B, U]);
    let ee = r.useCallback(async () => {
            let n, r;
            if ((a()(null != e, 'No subscription listing'), a()(null != k, 'No subscription plan'), a()(B, 'Cannot purchase this unpublished plan'), (null == Q ? void 0 : Q.active_trial) != null)) {
                let i = await X(t, e.id, Q.active_trial.id);
                if ((null == i ? void 0 : i.is_eligible) === !0) {
                    var o;
                    n = null == Q ? void 0 : null === (o = Q.active_trial) || void 0 === o ? void 0 : o.id;
                } else r = P.intl.string(P.t.vuvsKy);
            }
            (0, C.Z)({
                activeSubscription: F,
                analyticsSubscriptionType: Z.NYc.GUILD,
                trialId: n,
                trialFooterMessageOverride:
                    (null == Q ? void 0 : Q.active_trial) != null
                        ? P.intl.format(P.t.zyGyNj, {
                              buttonText: P.intl.string(P.t.BEeXiY),
                              interval: (0, N.iG)(k),
                              days: 1,
                              contactLink: Z.EYA.CONTACT,
                              cancelSubscriptionArticle: x.Z.getArticleURL(Z.BhN.ROLE_SUBSCRIPTION_CANCEL),
                              helpdeskArticle: x.Z.getArticleURL(Z.BhN.ROLE_SUBSCRIPTION_TRIAL),
                              paidServiceTermsArticle: x.Z.getArticleURL(Z.BhN.PAID_TERMS),
                              tierName: k.name
                          })
                        : void 0,
                analyticsLocations: q,
                analyticsLocation: l,
                renderHeader: (n, r, l) =>
                    (0, i.jsx)(j.h, {
                        onClose: r,
                        listing: e,
                        step: l,
                        guildId: t
                    }),
                initialPlanId: k.id,
                skuId: k.sku_id,
                planGroup: H,
                renderPurchaseConfirmation: (n, r) =>
                    $
                        ? (0, i.jsx)(b.m, {
                              listing: e,
                              onClose: r,
                              guildId: t
                          })
                        : (0, i.jsx)(j.x, {
                              listing: e,
                              onClose: r,
                              guildId: t
                          }),
                reviewWarningMessage: r
            });
        }, [B, e, k, F, H, t, q, l, X, Q, $]),
        et = r.useCallback(() => {
            (0, f.hk)(t);
        }, [t]);
    return {
        openModal: y ? et : ee,
        canOpenModal: !L && null != w && V && !M && !W && !K && !J,
        cannotOpenReason: o,
        isCheckingTrialEligibility: Y
    };
};
