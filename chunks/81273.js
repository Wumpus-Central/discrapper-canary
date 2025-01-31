n.d(t, { Z: () => L });
var i = n(200651),
    l = n(192379),
    a = n(512722),
    r = n.n(a),
    s = n(913527),
    o = n.n(s),
    c = n(442837),
    d = n(570140),
    u = n(821849),
    m = n(131388),
    h = n(906732),
    _ = n(305325),
    p = n(246364),
    g = n(937111),
    f = n(281956),
    x = n(41776),
    E = n(738737),
    C = n(509545),
    v = n(63063),
    I = n(817460),
    N = n(584825),
    S = n(697227),
    T = n(934826),
    b = n(896083),
    A = n(939872),
    j = n(265985),
    y = n(293810),
    Z = n(981631),
    R = n(388032);
let L = (e, t, n, a) => {
    let s;
    let L = (0, c.e7)([x.Z], () => x.Z.isLurking(t)),
        P = (0, f.J)(t),
        k = (0, c.e7)([g.Z], () => (null != t ? g.Z.getRequest(t) : null)),
        M = (null == k ? void 0 : k.applicationStatus) === p.wB.SUBMITTED,
        O = null == e ? void 0 : e.subscription_plans[0],
        D = null == O ? void 0 : O.id,
        w = (null == e ? void 0 : e.published) === !0,
        F = null == O ? void 0 : O.sku_id,
        U = (0, c.e7)([C.Z], () => (null != D ? C.Z.get(D) : null)),
        { activeSubscription: B, activeSubscriptionPlanFromStore: G } = (0, T.Z)(n),
        H = null == B || null != G,
        V = (0, N._k)(n, { includeSoftDeleted: !0 }).map((e) => e.subscription_plans[0].id),
        z = (0, S.V)(B),
        W = null != z,
        K = (null == B ? void 0 : B.trialId) != null,
        { loading: Y, getTrialPurchaseEligibility: X } = (0, b.F)(),
        q = (0, N.oC)(null == e ? void 0 : e.id),
        { analyticsLocations: Q } = (0, h.ZP)(),
        J = (null == B ? void 0 : B.paymentGateway) === Z.gg$.APPLE_PARTNER;
    M ? (s = R.intl.string(R.t.pQK5ho)) : L && !P ? (s = R.intl.string(R.t.pQK5ho)) : z === D ? (s = R.intl.formatToPlainString(R.t.UlBRTk, { changeDate: null != B ? o()(B.currentPeriodEnd).format('MMM DD, YYYY') : '' })) : W ? (s = R.intl.string(R.t.ePFYOT)) : K ? (s = R.intl.string(R.t['0lPoT0'])) : J && (s = R.intl.string(R.t.cEMaCg));
    let $ = (0, m.Z)(y.iP);
    l.useEffect(() => {
        w &&
            null != F &&
            d.Z.wait(() => {
                (0, u.GZ)(F);
            });
    }, [w, F]);
    let ee = l.useCallback(async () => {
            let n, l;
            if ((r()(null != e, 'No subscription listing'), r()(null != O, 'No subscription plan'), r()(w, 'Cannot purchase this unpublished plan'), (null == q ? void 0 : q.active_trial) != null)) {
                let i = await X(t, e.id, q.active_trial.id);
                if ((null == i ? void 0 : i.is_eligible) === !0) {
                    var s;
                    n = null == q ? void 0 : null === (s = q.active_trial) || void 0 === s ? void 0 : s.id;
                } else l = R.intl.string(R.t.vuvsKy);
            }
            (0, E.Z)({
                activeSubscription: B,
                analyticsSubscriptionType: Z.NYc.GUILD,
                trialId: n,
                trialFooterMessageOverride:
                    (null == q ? void 0 : q.active_trial) != null
                        ? R.intl.format(R.t.zyGyNj, {
                              buttonText: R.intl.string(R.t.BEeXiY),
                              interval: (0, I.iG)(O),
                              days: 1,
                              contactLink: Z.EYA.CONTACT,
                              cancelSubscriptionArticle: v.Z.getArticleURL(Z.BhN.ROLE_SUBSCRIPTION_CANCEL),
                              helpdeskArticle: v.Z.getArticleURL(Z.BhN.ROLE_SUBSCRIPTION_TRIAL),
                              paidServiceTermsArticle: v.Z.getArticleURL(Z.BhN.PAID_TERMS),
                              tierName: O.name
                          })
                        : void 0,
                analyticsLocations: Q,
                analyticsLocation: a,
                renderHeader: (n, l, a) =>
                    (0, i.jsx)(j.h, {
                        onClose: l,
                        listing: e,
                        step: a,
                        guildId: t
                    }),
                initialPlanId: O.id,
                skuId: O.sku_id,
                planGroup: V,
                renderPurchaseConfirmation: (n, l) =>
                    $
                        ? (0, i.jsx)(A.m, {
                              listing: e,
                              onClose: l,
                              guildId: t
                          })
                        : (0, i.jsx)(j.x, {
                              listing: e,
                              onClose: l,
                              guildId: t
                          }),
                reviewWarningMessage: l
            });
        }, [w, e, O, B, V, t, Q, a, X, q, $]),
        et = l.useCallback(() => {
            (0, _.hk)(t);
        }, [t]);
    return {
        openModal: P ? et : ee,
        canOpenModal: !L && null != U && H && !M && !W && !K && !J,
        cannotOpenReason: s,
        isCheckingTrialEligibility: Y
    };
};
