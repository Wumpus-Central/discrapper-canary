i.d(t, { W: () => _, RiotCreditRewardModal: () => I });
var s = i(477900),
    n = i(189213),
    a = i(289873),
    l = i(192308),
    r = i(174459),
    c = i(975571);
i(852218);
var o = i(116011),
    d = i(582128),
    u = i(181658),
    m = i(828596),
    x = i(288106),
    g = i(993046),
    p = i(38405),
    f = i(962644),
    h = i(17928),
    N = i(264779),
    A = i(412260),
    j = i(202541),
    E = i(652215),
    b = i(280761),
    T = i(180777),
    C = i(532650),
    R = i(105292);
function I(e) {
    let t,
        i,
        l,
        { transitionState: I, onClose: _, analyticsLocations: v } = e,
        P = (0, b.U)(),
        {
            code: y,
            redemptionUrl: S,
            isClaimed: D,
            isClaimedCodesLoaded: M,
            isClaiming: O,
            isOutOfCodes: U,
            handleClaim: L,
            handleClaimError: k,
        } = (function (e) {
            let t = null != e && e.rewardStatus === x.GM.CONSUMED,
                [i, s] = d.useState(!1),
                {
                    code: n,
                    redemptionUrl: a,
                    isClaimedCodesLoaded: l,
                } = (function (e) {
                    let { shouldFetch: t } = e,
                        { claimedCode: i, isClaimedCodesLoaded: s } = (0, h.cf)([A.A], () => ({
                            claimedCode: A.A.claimedOutboundPromotionCodes.find(
                                (e) => "riot" === e.promotion.partnerId,
                            ),
                            isClaimedCodesLoaded: A.A.claimedOutboundPromotionCodesLoaded,
                        }));
                    return (d.useEffect(() => {
                        t && !A.A.claimedOutboundPromotionCodesLoaded && f.Ay.fetchClaimedOutboundPromotionCodes();
                    }, [t]),
                    null == i)
                        ? { code: null, redemptionUrl: null, isClaimedCodesLoaded: s }
                        : { isClaimedCodesLoaded: s, code: i.code, redemptionUrl: (0, N.kc)(i.code, i.promotion) };
                })({ shouldFetch: t && !i }),
                [c, o] = d.useState(!1),
                b = null != e ? e.id : null;
            return {
                code: n,
                redemptionUrl: a,
                isClaimed: t,
                isClaimedCodesLoaded: l,
                isClaiming: i,
                isOutOfCodes: c,
                handleClaim: d.useCallback(async () => {
                    if (null == b) throw Error("Riot credit storefront promotion is not available");
                    s(!0);
                    try {
                        let e = await (0, m.cF)(b, j.tv),
                            t = (0, g.OF)(e);
                        if (null == t) throw Error("Riot credit storefront claim response contained no promo code");
                        if (
                            (r.default.track(E.HAw.OUTBOUND_PROMOTION_CLAIMED, { name: "riot", partner: "riot" }),
                            !(await f.Ay.fetchClaimedOutboundPromotionCodes()))
                        )
                            return (
                                p.A.captureMessage(
                                    "Failed to fetch claimed outbound promotion codes after Riot credit claim",
                                ),
                                null
                            );
                        return t.code;
                    } finally {
                        s(!1);
                    }
                }, [b]),
                handleClaimError: d.useCallback(
                    (e) =>
                        e instanceof u.A &&
                        e.code === E.t02.BILLING_STOREFRONT_PROMOTION_REWARD_UNAVAILABLE &&
                        (o(!0), !0),
                    [],
                ),
            };
        })(P);
    if (null == P) return null;
    let G =
        ((l = U ? 3 : null != y ? 2 : D && !M ? 0 : 1),
        null == P.startsAt || null == P.endsAt
            ? null
            : (3 === l
                  ? ((t = R.intl.string(C.default.jKrPE9)), (i = R.intl.string(C.default.u113tL)))
                  : ((t = R.intl.string(C.default["/2ypah"])),
                    (i = R.intl.formatToPlainString(C.default["4g4Fpz"], {
                        date: null != P.redemptionEndsAt ? P.redemptionEndsAt : P.endsAt,
                    }))),
              {
                  id: P.id,
                  partnerId: "riot",
                  title: t,
                  outboundTitle: t,
                  body: i,
                  startDate: P.startsAt,
                  endDate: P.endsAt,
                  code: y,
                  redemptionURL: null != S ? S : "",
                  asset: "https://cdn.discordapp.com/assets/content/f9a03629577352ebb83c4b1a24f8f7a2a7a6163c92db8028806fa121b24c2b65.webp",
                  redeemCtaText: R.intl.string(C.default.YRjiSW),
                  claimCtaText: R.intl.string(C.default.pjdMpI),
              }));
    return null == G
        ? null
        : (0, s.jsx)(n.a, {
              title: R.intl.string(C.default.r97mLn),
              subtitle: R.intl.format(T.default.ieA3V0, { termsUrl: c.A.getArticleURL(E.MVz.RIOT_CREDIT_CAMPAIGN) }),
              actions: [],
              transitionState: I,
              onClose: _,
              children:
                  0 === l
                      ? (0, s.jsx)(a.y, {})
                      : (0, s.jsx)(
                            o.wx,
                            {
                                recurrence: G,
                                showPartnerImage: !0,
                                claimButtonPlacement: o.u5.FOOTER,
                                onClaim: L,
                                onClaimError: k,
                                isClaiming: O,
                                hideClaimButton: 3 === l,
                                analyticsLocations: v,
                            },
                            l,
                        ),
          });
}
function _(e) {
    let { analyticsLocations: t } = e;
    (r.default.track(E.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { partner_id: "riot", location_stack: t }),
        (0, l.openModalLazy)(async () => {
            let { RiotCreditRewardModal: e } = await Promise.resolve().then(i.bind(i, 881296));
            return (i) => (0, s.jsx)(e, { ...i, analyticsLocations: t });
        }));
}
