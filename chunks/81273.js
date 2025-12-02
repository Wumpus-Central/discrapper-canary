n.d(t, { Z: () => x });
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(913527),
    l = n.n(s),
    c = n(442837),
    u = n(570140),
    d = n(821849),
    f = n(131388),
    p = n(906732),
    _ = n(305325),
    m = n(246364),
    h = n(937111),
    g = n(281956),
    E = n(41776),
    b = n(738737),
    y = n(509545),
    O = n(63063),
    v = n(817460),
    S = n(584825),
    I = n(697227),
    T = n(934826),
    A = n(896083),
    C = n(939872),
    N = n(265985),
    P = n(293810),
    R = n(981631),
    w = n(388032);
let D = "MMM DD, YYYY",
    x = (e, t, n, a) => {
        let s,
            x = (0, c.e7)([E.Z], () => E.Z.isLurking(t)),
            L = (0, g.J)(t),
            j = (0, c.e7)([h.Z], () => (null != t ? h.Z.getRequest(t) : null)),
            M = (null == j ? void 0 : j.applicationStatus) === m.wB.SUBMITTED,
            k = null == e ? void 0 : e.subscription_plans[0],
            U = null == k ? void 0 : k.id,
            G = (null == e ? void 0 : e.published) === !0,
            Z = null == k ? void 0 : k.sku_id,
            B = (0, c.e7)([y.Z], () => (null != U ? y.Z.get(U) : null)),
            { activeSubscription: F, activeSubscriptionPlanFromStore: V } = (0, T.Z)(n),
            H = null == F || null != V,
            Y = (0, S._k)(n, { includeSoftDeleted: !0 }).map((e) => e.subscription_plans[0].id),
            W = (0, I.V)(F),
            K = null != W,
            z = !!(null == F ? void 0 : F.hasActiveTrial),
            { loading: q, getTrialPurchaseEligibility: X } = (0, A.F)(),
            Q = (0, S.oC)(null == e ? void 0 : e.id),
            { analyticsLocations: J } = (0, p.ZP)(),
            $ = (null == F ? void 0 : F.paymentGateway) === R.gg$.APPLE_PARTNER,
            ee = !x && null != B && H && !M && !K && !z && !$;
        M || (x && !L)
            ? (s = w.intl.string(w.t.pQK5ho))
            : W === U
              ? (s = w.intl.formatToPlainString(w.t.UlBRTl, {
                    changeDate: null != F ? l()(F.currentPeriodEnd).format(D) : "",
                }))
              : K
                ? (s = w.intl.string(w.t.ePFYOS))
                : z
                  ? (s = w.intl.string(w.t["0lPoT2"]))
                  : $ && (s = w.intl.string(w.t.cEMaCt));
        let et = (0, f.Z)(P.iP);
        i.useEffect(() => {
            G &&
                null != Z &&
                u.Z.wait(() => {
                    (0, d.GZ)(Z);
                });
        }, [G, Z]);
        let en = i.useCallback(async () => {
                let n, i;
                if (
                    (o()(null != e, "No subscription listing"),
                    o()(null != k, "No subscription plan"),
                    o()(G, "Cannot purchase this unpublished plan"),
                    (null == Q ? void 0 : Q.active_trial) != null)
                ) {
                    let r = await X(t, e.id, Q.active_trial.id);
                    if ((null == r ? void 0 : r.is_eligible) === !0) {
                        var s;
                        n = null == Q || null == (s = Q.active_trial) ? void 0 : s.id;
                    } else i = w.intl.string(w.t.vuvsK5);
                }
                (0, b.Z)({
                    activeSubscription: F,
                    analyticsSubscriptionType: R.NYc.GUILD,
                    trialId: n,
                    trialFooterMessageOverride:
                        (null == Q ? void 0 : Q.active_trial) != null
                            ? w.intl.format(w.t.zyGyNk, {
                                  buttonText: w.intl.string(w.t.BEeXib),
                                  interval: (0, v.iG)(k),
                                  days: 1,
                                  contactLink: R.EYA.CONTACT,
                                  cancelSubscriptionArticle: O.Z.getArticleURL(R.BhN.ROLE_SUBSCRIPTION_CANCEL),
                                  helpdeskArticle: O.Z.getArticleURL(R.BhN.ROLE_SUBSCRIPTION_TRIAL),
                                  paidServiceTermsArticle: O.Z.getArticleURL(R.BhN.PAID_TERMS),
                                  tierName: k.name,
                              })
                            : void 0,
                    analyticsLocations: J,
                    analyticsLocation: a,
                    renderHeader: (n, i, a) =>
                        (0, r.jsx)(N.h, {
                            onClose: i,
                            listing: e,
                            step: a,
                            guildId: t,
                        }),
                    initialPlanId: k.id,
                    skuId: k.sku_id,
                    planGroup: Y,
                    renderPurchaseConfirmation: (n, i) =>
                        et
                            ? (0, r.jsx)(C.m, {
                                  listing: e,
                                  onClose: i,
                                  guildId: t,
                              })
                            : (0, r.jsx)(N.x, {
                                  listing: e,
                                  onClose: i,
                                  guildId: t,
                              }),
                    reviewWarningMessage: i,
                });
            }, [G, e, k, F, Y, t, J, a, X, Q, et]),
            er = i.useCallback(() => {
                (0, _.hk)(t);
            }, [t]);
        return {
            openModal: L ? er : en,
            canOpenModal: ee,
            cannotOpenReason: s,
            isCheckingTrialEligibility: q,
        };
    };
