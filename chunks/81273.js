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
    _ = n(906732),
    p = n(305325),
    h = n(246364),
    m = n(937111),
    g = n(281956),
    E = n(41776),
    b = n(738737),
    y = n(509545),
    O = n(63063),
    v = n(817460),
    I = n(584825),
    T = n(697227),
    S = n(934826),
    A = n(896083),
    C = n(939872),
    N = n(265985),
    R = n(293810),
    P = n(981631),
    D = n(388032);
let w = "MMM DD, YYYY",
    x = (e, t, n, a) => {
        let s,
            x = (0, c.e7)([E.Z], () => E.Z.isLurking(t)),
            L = (0, g.J)(t),
            M = (0, c.e7)([m.Z], () => (null != t ? m.Z.getRequest(t) : null)),
            k = (null == M ? void 0 : M.applicationStatus) === h.wB.SUBMITTED,
            j = null == e ? void 0 : e.subscription_plans[0],
            U = null == j ? void 0 : j.id,
            G = (null == e ? void 0 : e.published) === !0,
            B = null == j ? void 0 : j.sku_id,
            Z = (0, c.e7)([y.Z], () => (null != U ? y.Z.get(U) : null)),
            { activeSubscription: F, activeSubscriptionPlanFromStore: V } = (0, S.Z)(n),
            H = null == F || null != V,
            Y = (0, I._k)(n, { includeSoftDeleted: !0 }).map((e) => e.subscription_plans[0].id),
            W = (0, T.V)(F),
            K = null != W,
            z = !!(null == F ? void 0 : F.hasActiveTrial),
            { loading: q, getTrialPurchaseEligibility: X } = (0, A.F)(),
            Q = (0, I.oC)(null == e ? void 0 : e.id),
            { analyticsLocations: J } = (0, _.ZP)(),
            $ = (null == F ? void 0 : F.paymentGateway) === P.gg$.APPLE_PARTNER,
            ee = !x && null != Z && H && !k && !K && !z && !$;
        k || (x && !L)
            ? (s = D.intl.string(D.t.pQK5ho))
            : W === U
              ? (s = D.intl.formatToPlainString(D.t.UlBRTl, {
                    changeDate: null != F ? l()(F.currentPeriodEnd).format(w) : "",
                }))
              : K
                ? (s = D.intl.string(D.t.ePFYOS))
                : z
                  ? (s = D.intl.string(D.t["0lPoT2"]))
                  : $ && (s = D.intl.string(D.t.cEMaCt));
        let et = (0, f.Z)(R.iP);
        i.useEffect(() => {
            G &&
                null != B &&
                u.Z.wait(() => {
                    (0, d.GZ)(B);
                });
        }, [G, B]);
        let en = i.useCallback(async () => {
                let n, i;
                if (
                    (o()(null != e, "No subscription listing"),
                    o()(null != j, "No subscription plan"),
                    o()(G, "Cannot purchase this unpublished plan"),
                    (null == Q ? void 0 : Q.active_trial) != null)
                ) {
                    let r = await X(t, e.id, Q.active_trial.id);
                    if ((null == r ? void 0 : r.is_eligible) === !0) {
                        var s;
                        n = null == Q || null == (s = Q.active_trial) ? void 0 : s.id;
                    } else i = D.intl.string(D.t.vuvsK5);
                }
                (0, b.Z)({
                    activeSubscription: F,
                    analyticsSubscriptionType: P.NYc.GUILD,
                    trialId: n,
                    trialFooterMessageOverride:
                        (null == Q ? void 0 : Q.active_trial) != null
                            ? D.intl.format(D.t.zyGyNk, {
                                  buttonText: D.intl.string(D.t.BEeXib),
                                  interval: (0, v.iG)(j),
                                  days: 1,
                                  contactLink: P.EYA.CONTACT,
                                  cancelSubscriptionArticle: O.Z.getArticleURL(P.BhN.ROLE_SUBSCRIPTION_CANCEL),
                                  helpdeskArticle: O.Z.getArticleURL(P.BhN.ROLE_SUBSCRIPTION_TRIAL),
                                  paidServiceTermsArticle: O.Z.getArticleURL(P.BhN.PAID_TERMS),
                                  tierName: j.name,
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
                    initialPlanId: j.id,
                    skuId: j.sku_id,
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
            }, [G, e, j, F, Y, t, J, a, X, Q, et]),
            er = i.useCallback(() => {
                (0, p.hk)(t);
            }, [t]);
        return {
            openModal: L ? er : en,
            canOpenModal: ee,
            cannotOpenReason: s,
            isCheckingTrialEligibility: q,
        };
    };
