s.d(t, { W: () => _, RiotCreditRewardModal: () => I });
var i = s(477900),
    n = s(189213),
    a = s(289873),
    l = s(192308),
    r = s(174459),
    c = s(975571);
s(852218);
var o = s(116011),
    d = s(582128),
    u = s(181658),
    m = s(828596),
    x = s(288106),
    g = s(993046),
    p = s(38405),
    f = s(962644),
    h = s(17928),
    N = s(264779),
    A = s(412260),
    j = s(202541),
    E = s(652215),
    T = s(280761),
    b = s(310235),
    C = s(287388),
    R = s(660183);
function I(e) {
    let t,
        s,
        l,
        { transitionState: I, onClose: _, analyticsLocations: v } = e,
        P = (0, T.U)(),
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
                [s, i] = d.useState(!1),
                {
                    code: n,
                    redemptionUrl: a,
                    isClaimedCodesLoaded: l,
                } = (function (e) {
                    let { shouldFetch: t } = e,
                        { claimedCode: s, isClaimedCodesLoaded: i } = (0, h.cf)([A.A], () => ({
                            claimedCode: A.A.claimedOutboundPromotionCodes.find(
                                (e) => "riot" === e.promotion.partnerId,
                            ),
                            isClaimedCodesLoaded: A.A.claimedOutboundPromotionCodesLoaded,
                        }));
                    return (d.useEffect(() => {
                        t && !A.A.claimedOutboundPromotionCodesLoaded && f.Ay.fetchClaimedOutboundPromotionCodes();
                    }, [t]),
                    null == s)
                        ? { code: null, redemptionUrl: null, isClaimedCodesLoaded: i }
                        : { isClaimedCodesLoaded: i, code: s.code, redemptionUrl: (0, N.kc)(s.code, s.promotion) };
                })({ shouldFetch: t && !s }),
                [c, o] = d.useState(!1),
                T = null != e ? e.id : null;
            return {
                code: n,
                redemptionUrl: a,
                isClaimed: t,
                isClaimedCodesLoaded: l,
                isClaiming: s,
                isOutOfCodes: c,
                handleClaim: d.useCallback(async () => {
                    if (null == T) throw Error("Riot credit storefront promotion is not available");
                    i(!0);
                    try {
                        let e = await (0, m.cF)(T, j.tv),
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
                        i(!1);
                    }
                }, [T]),
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
                  ? ((t = R.intl.string(C.default.jKrPE9)), (s = R.intl.string(C.default.u113tL)))
                  : ((t = R.intl.string(C.default["/2ypah"])),
                    (s = R.intl.formatToPlainString(C.default["4g4Fpz"], {
                        date: null != P.redemptionEndsAt ? P.redemptionEndsAt : P.endsAt,
                    }))),
              {
                  id: P.id,
                  partnerId: "riot",
                  title: t,
                  outboundTitle: t,
                  body: s,
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
        : (0, i.jsx)(n.a, {
              title: R.intl.string(C.default.r97mLn),
              subtitle: R.intl.format(b.default.ieA3V0, { termsUrl: c.A.getArticleURL(E.MVz.RIOT_CREDIT_CAMPAIGN) }),
              actions: [],
              transitionState: I,
              onClose: _,
              children:
                  0 === l
                      ? (0, i.jsx)(a.y, {})
                      : (0, i.jsx)(
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
            let { RiotCreditRewardModal: e } = await Promise.resolve().then(s.bind(s, 881296));
            return (s) => (0, i.jsx)(e, { ...s, analyticsLocations: t });
        }));
}
