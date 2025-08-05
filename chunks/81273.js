n.d(t, { Z: () => w });
var i = n(255367),
    r = n(73800),
    l = n(512722),
    a = n.n(l),
    s = n(913527),
    o = n.n(s),
    c = n(442837),
    d = n(570140),
    u = n(821849),
    m = n(131388),
    f = n(906732),
    h = n(305325),
    g = n(246364),
    v = n(937111),
    p = n(281956),
    j = n(41776),
    b = n(738737),
    x = n(509545),
    _ = n(63063),
    y = n(817460),
    N = n(584825),
    Z = n(697227),
    O = n(934826),
    I = n(896083),
    C = n(939872),
    T = n(265985),
    P = n(293810),
    S = n(981631),
    E = n(388032);
let w = (e, t, n, l) => {
    let s,
        w = (0, c.e7)([j.Z], () => j.Z.isLurking(t)),
        L = (0, p.J)(t),
        k = (0, c.e7)([v.Z], () => (null != t ? v.Z.getRequest(t) : null)),
        z = (null == k ? void 0 : k.applicationStatus) === g.wB.SUBMITTED,
        A = null == e ? void 0 : e.subscription_plans[0],
        M = null == A ? void 0 : A.id,
        R = (null == e ? void 0 : e.published) === !0,
        D = null == A ? void 0 : A.sku_id,
        B = (0, c.e7)([x.Z], () => (null != M ? x.Z.get(M) : null)),
        { activeSubscription: F, activeSubscriptionPlanFromStore: G } = (0, O.Z)(n),
        U = null == F || null != G,
        H = (0, N._k)(n, { includeSoftDeleted: !0 }).map((e) => e.subscription_plans[0].id),
        W = (0, Z.V)(F),
        Y = null != W,
        K = !!(null == F ? void 0 : F.hasActiveTrial),
        { loading: V, getTrialPurchaseEligibility: X } = (0, I.F)(),
        q = (0, N.oC)(null == e ? void 0 : e.id),
        { analyticsLocations: J } = (0, f.ZP)(),
        Q = (null == F ? void 0 : F.paymentGateway) === S.gg$.APPLE_PARTNER,
        $ = !w && null != B && U && !z && !Y && !K && !Q;
    z || (w && !L) ? (s = E.intl.string(E.t.pQK5ho)) : W === M ? (s = E.intl.formatToPlainString(E.t.UlBRTk, { changeDate: null != F ? o()(F.currentPeriodEnd).format('MMM DD, YYYY') : '' })) : Y ? (s = E.intl.string(E.t.ePFYOT)) : K ? (s = E.intl.string(E.t['0lPoT0'])) : Q && (s = E.intl.string(E.t.cEMaCg));
    let ee = (0, m.Z)(P.iP);
    r.useEffect(() => {
        R &&
            null != D &&
            d.Z.wait(() => {
                (0, u.GZ)(D);
            });
    }, [R, D]);
    let et = r.useCallback(async () => {
            let n, r;
            if ((a()(null != e, 'No subscription listing'), a()(null != A, 'No subscription plan'), a()(R, 'Cannot purchase this unpublished plan'), (null == q ? void 0 : q.active_trial) != null)) {
                let i = await X(t, e.id, q.active_trial.id);
                if ((null == i ? void 0 : i.is_eligible) === !0) {
                    var s;
                    n = null == q || null == (s = q.active_trial) ? void 0 : s.id;
                } else r = E.intl.string(E.t.vuvsKy);
            }
            (0, b.Z)({
                activeSubscription: F,
                analyticsSubscriptionType: S.NYc.GUILD,
                trialId: n,
                trialFooterMessageOverride:
                    (null == q ? void 0 : q.active_trial) != null
                        ? E.intl.format(E.t.zyGyNj, {
                              buttonText: E.intl.string(E.t.BEeXiY),
                              interval: (0, y.iG)(A),
                              days: 1,
                              contactLink: S.EYA.CONTACT,
                              cancelSubscriptionArticle: _.Z.getArticleURL(S.BhN.ROLE_SUBSCRIPTION_CANCEL),
                              helpdeskArticle: _.Z.getArticleURL(S.BhN.ROLE_SUBSCRIPTION_TRIAL),
                              paidServiceTermsArticle: _.Z.getArticleURL(S.BhN.PAID_TERMS),
                              tierName: A.name
                          })
                        : void 0,
                analyticsLocations: J,
                analyticsLocation: l,
                renderHeader: (n, r, l) =>
                    (0, i.jsx)(T.h, {
                        onClose: r,
                        listing: e,
                        step: l,
                        guildId: t
                    }),
                initialPlanId: A.id,
                skuId: A.sku_id,
                planGroup: H,
                renderPurchaseConfirmation: (n, r) =>
                    ee
                        ? (0, i.jsx)(C.m, {
                              listing: e,
                              onClose: r,
                              guildId: t
                          })
                        : (0, i.jsx)(T.x, {
                              listing: e,
                              onClose: r,
                              guildId: t
                          }),
                reviewWarningMessage: r
            });
        }, [R, e, A, F, H, t, J, l, X, q, ee]),
        en = r.useCallback(() => {
            (0, h.hk)(t);
        }, [t]);
    return {
        openModal: L ? en : et,
        canOpenModal: $,
        cannotOpenReason: s,
        isCheckingTrialEligibility: V
    };
};
