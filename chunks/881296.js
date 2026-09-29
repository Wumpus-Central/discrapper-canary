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
    b = s(280761),
    T = s(14429),
    R = s(293838),
    C = s(375708);
function I(e) {
    let t,
        s,
        l,
        { transitionState: r, onClose: I } = e,
        _ = (0, b.U)(),
        {
            code: v,
            redemptionUrl: P,
            isClaimed: S,
            isClaimedCodesLoaded: y,
            isClaiming: D,
            isOutOfCodes: M,
            handleClaim: O,
            handleClaimError: L,
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
                [r, c] = d.useState(!1),
                o = null != e ? e.id : null;
            return {
                code: n,
                redemptionUrl: a,
                isClaimed: t,
                isClaimedCodesLoaded: l,
                isClaiming: s,
                isOutOfCodes: r,
                handleClaim: d.useCallback(async () => {
                    if (null == o) throw Error("Riot credit storefront promotion is not available");
                    i(!0);
                    try {
                        let e = await (0, m.cF)(o, j.tv),
                            t = (0, g.OF)(e);
                        if (null == t) throw Error("Riot credit storefront claim response contained no promo code");
                        if (!(await f.Ay.fetchClaimedOutboundPromotionCodes()))
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
                }, [o]),
                handleClaimError: d.useCallback(
                    (e) =>
                        e instanceof u.A &&
                        e.code === E.t02.BILLING_STOREFRONT_PROMOTION_REWARD_UNAVAILABLE &&
                        (c(!0), !0),
                    [],
                ),
            };
        })(_);
    if (null == _) return null;
    let U =
        ((l = M ? 3 : null != v ? 2 : S && !y ? 0 : 1),
        null == _.startsAt || null == _.endsAt
            ? null
            : (3 === l
                  ? ((t = C.intl.string(R.default.jKrPE9)), (s = C.intl.string(R.default.u113tL)))
                  : ((t = C.intl.string(R.default["/2ypah"])),
                    (s = C.intl.formatToPlainString(R.default["4g4Fpz"], {
                        date: null != _.redemptionEndsAt ? _.redemptionEndsAt : _.endsAt,
                    }))),
              {
                  id: _.id,
                  partnerId: "riot",
                  title: t,
                  outboundTitle: t,
                  body: s,
                  startDate: _.startsAt,
                  endDate: _.endsAt,
                  code: v,
                  redemptionURL: null != P ? P : "",
                  asset: "https://cdn.discordapp.com/assets/content/f9a03629577352ebb83c4b1a24f8f7a2a7a6163c92db8028806fa121b24c2b65.webp",
                  redeemCtaText: C.intl.string(R.default.YRjiSW),
                  claimCtaText: C.intl.string(R.default.pjdMpI),
              }));
    return null == U
        ? null
        : (0, i.jsx)(n.a, {
              title: C.intl.string(R.default.r97mLn),
              subtitle: C.intl.formatToPlainString(T.default.ieA3V0, {
                  termsUrl: c.A.getArticleURL(E.MVz.RIOT_CREDIT_CAMPAIGN),
              }),
              actions: [],
              transitionState: r,
              onClose: I,
              children:
                  0 === l
                      ? (0, i.jsx)(a.y, {})
                      : (0, i.jsx)(
                            o.wx,
                            {
                                recurrence: U,
                                showPartnerImage: !0,
                                claimButtonPlacement: o.u5.FOOTER,
                                onClaim: O,
                                onClaimError: L,
                                isClaiming: D,
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
            return (t) => (0, i.jsx)(e, { ...t });
        }));
}
