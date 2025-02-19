n.d(t, { Z: () => w });
var r = n(200651),
    i = n(192379),
    a = n(512722),
    o = n.n(a),
    l = n(913527),
    s = n.n(l),
    c = n(442837),
    d = n(570140),
    u = n(821849),
    p = n(131388),
    m = n(906732),
    f = n(305325),
    h = n(246364),
    g = n(937111),
    _ = n(281956),
    b = n(41776),
    v = n(738737),
    y = n(509545),
    x = n(63063),
    O = n(817460),
    E = n(584825),
    j = n(697227),
    N = n(934826),
    C = n(896083),
    I = n(939872),
    S = n(265985),
    P = n(293810),
    T = n(981631),
    A = n(388032);
let w = (e, t, n, a) => {
    let l;
    let w = (0, c.e7)([b.Z], () => b.Z.isLurking(t)),
        Z = (0, _.J)(t),
        k = (0, c.e7)([g.Z], () => (null != t ? g.Z.getRequest(t) : null)),
        R = (null == k ? void 0 : k.applicationStatus) === h.wB.SUBMITTED,
        L = null == e ? void 0 : e.subscription_plans[0],
        D = null == L ? void 0 : L.id,
        M = (null == e ? void 0 : e.published) === !0,
        W = null == L ? void 0 : L.sku_id,
        F = (0, c.e7)([y.Z], () => (null != D ? y.Z.get(D) : null)),
        { activeSubscription: U, activeSubscriptionPlanFromStore: B } = (0, N.Z)(n),
        G = null == U || null != B,
        H = (0, E._k)(n, { includeSoftDeleted: !0 }).map((e) => e.subscription_plans[0].id),
        V = (0, j.V)(U),
        z = null != V,
        K = (null == U ? void 0 : U.trialId) != null,
        { loading: Y, getTrialPurchaseEligibility: X } = (0, C.F)(),
        q = (0, E.oC)(null == e ? void 0 : e.id),
        { analyticsLocations: Q } = (0, m.ZP)(),
        J = (null == U ? void 0 : U.paymentGateway) === T.gg$.APPLE_PARTNER,
        $ = !w && null != F && G && !R && !z && !K && !J;
    R ? (l = A.NW.string(A.t.pQK5ho)) : w && !Z ? (l = A.NW.string(A.t.pQK5ho)) : V === D ? (l = A.NW.formatToPlainString(A.t.UlBRTk, { changeDate: null != U ? s()(U.currentPeriodEnd).format('MMM DD, YYYY') : '' })) : z ? (l = A.NW.string(A.t.ePFYOT)) : K ? (l = A.NW.string(A.t['0lPoT0'])) : J && (l = A.NW.string(A.t.cEMaCg));
    let ee = (0, p.Z)(P.iP);
    i.useEffect(() => {
        M &&
            null != W &&
            d.Z.wait(() => {
                (0, u.GZ)(W);
            });
    }, [M, W]);
    let et = i.useCallback(async () => {
            let n, i;
            if ((o()(null != e, 'No subscription listing'), o()(null != L, 'No subscription plan'), o()(M, 'Cannot purchase this unpublished plan'), (null == q ? void 0 : q.active_trial) != null)) {
                let r = await X(t, e.id, q.active_trial.id);
                if ((null == r ? void 0 : r.is_eligible) === !0) {
                    var l;
                    n = null == q ? void 0 : null === (l = q.active_trial) || void 0 === l ? void 0 : l.id;
                } else i = A.NW.string(A.t.vuvsKy);
            }
            (0, v.Z)({
                activeSubscription: U,
                analyticsSubscriptionType: T.NYc.GUILD,
                trialId: n,
                trialFooterMessageOverride:
                    (null == q ? void 0 : q.active_trial) != null
                        ? A.NW.format(A.t.zyGyNj, {
                              buttonText: A.NW.string(A.t.BEeXiY),
                              interval: (0, O.iG)(L),
                              days: 1,
                              contactLink: T.EYA.CONTACT,
                              cancelSubscriptionArticle: x.Z.getArticleURL(T.BhN.ROLE_SUBSCRIPTION_CANCEL),
                              helpdeskArticle: x.Z.getArticleURL(T.BhN.ROLE_SUBSCRIPTION_TRIAL),
                              paidServiceTermsArticle: x.Z.getArticleURL(T.BhN.PAID_TERMS),
                              tierName: L.name
                          })
                        : void 0,
                analyticsLocations: Q,
                analyticsLocation: a,
                renderHeader: (n, i, a) =>
                    (0, r.jsx)(S.h, {
                        onClose: i,
                        listing: e,
                        step: a,
                        guildId: t
                    }),
                initialPlanId: L.id,
                skuId: L.sku_id,
                planGroup: H,
                renderPurchaseConfirmation: (n, i) =>
                    ee
                        ? (0, r.jsx)(I.m, {
                              listing: e,
                              onClose: i,
                              guildId: t
                          })
                        : (0, r.jsx)(S.x, {
                              listing: e,
                              onClose: i,
                              guildId: t
                          }),
                reviewWarningMessage: i
            });
        }, [M, e, L, U, H, t, Q, a, X, q, ee]),
        en = i.useCallback(() => {
            (0, f.hk)(t);
        }, [t]);
    return {
        openModal: Z ? en : et,
        canOpenModal: $,
        cannotOpenReason: l,
        isCheckingTrialEligibility: Y
    };
};
