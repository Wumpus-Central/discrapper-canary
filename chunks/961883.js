n.d(e, { $V: () => D, $k: () => C, aG: () => F, mO: () => U, v8: () => v }), n(321073);
var i = n(64700),
    a = n(106778),
    r = n(284009),
    l = n.n(r),
    s = n(575593),
    d = n(398590),
    o = n(87719),
    c = n(341915),
    E = n(545986),
    p = n(780964),
    u = n(858897),
    _ = n(318346),
    T = n(954571),
    A = n(203982),
    R = n(975571),
    S = n(993408),
    h = n(562819),
    I = n(442759),
    f = n(637193),
    g = n(617061),
    y = n(515727),
    O = n(158216),
    P = n(758836),
    m = n(652215),
    L = n(625265),
    N = n(985018);
let b = (t) => (null != t ? N.intl.format(N.t["4kp0AB"], { itemName: t }) : null),
    C = (t) => {
        let {
            product: e,
            overrideTitle: n,
            isVariantsGroupEnabled: i,
            shouldShowPromotionalExperience: a,
            productName: r,
            itemConsumed: l,
        } = t;
        if (null != n) return n;
        if (P.Dp.ORB_PROFILE_BADGE === e.skuId) return N.intl.string(L.default.nvaTQq);
        if (P.Dp.FRACTIONAL_PREMIUM === e.skuId)
            if (l) return N.intl.string(N.t.t0xkSB);
            else return N.intl.string(N.t.g5W1g8);
        if (i && !a) return N.intl.string(N.t.IMffmm);
        return N.intl.formatToPlainString(N.t.YNaxMp, { itemName: r });
    },
    v = (t) => {
        let {
            product: e,
            overrideDescription: n,
            productName: i,
            shouldShowPromotionalExperience: a,
            promotionalRewardCollectedText: r,
            itemConsumed: l,
            isFractionalPremiumActive: d,
            expiresAt: o,
        } = t;
        if (null != n) return n;
        if (P.Dp.ORB_PROFILE_BADGE === e.skuId) return N.intl.string(L.default.UnPGii);
        if (P.Dp.FRACTIONAL_PREMIUM === e.skuId) {
            let t = N.intl.formatToPlainString(N.t.Cz1G97, { days: 3 });
            return l
                ? N.intl.format(N.t.bhLChO, {
                      helpCenterLink: R.A.getArticleURL(m.MVz.FRACTIONAL_PREMIUM_ABOUT),
                      duration: t,
                      expirationDate: o,
                  })
                : d
                  ? N.intl.string(N.t.fBmhE9)
                  : N.intl.format(N.t["1ZBX4E"], {
                        helpCenterLink: R.A.getArticleURL(m.MVz.FRACTIONAL_PREMIUM_ABOUT),
                        duration: t,
                    });
        }
        if (e.type === s.R.BUNDLE) {
            let { itemOneName: t, itemTwoName: n } = (0, I.yW)(e);
            return N.intl.format(N.t.fXw44U, { itemOneName: t, itemTwoName: n });
        }
        return e.type === s.R.AVATAR_DECORATION && a && null != r ? r : b(i);
    },
    F = (t) => {
        let {
                product: e,
                onClose: n,
                analyticsLocations: i,
                hasRequiredProductItems: a,
                handleUseNow: r,
                isApplying: T,
                openProfileSettings: R,
                itemConsumed: S,
            } = t,
            I = [];
        if (P.Dp.ORB_PROFILE_BADGE === e.skuId)
            I.push(
                {
                    text: N.intl.string(L.default.yfwZuy),
                    variant: "primary",
                    onClick: () => {
                        n(), A._.dispatch(m.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
                    },
                },
                {
                    text: N.intl.string(N.t.H57f41),
                    variant: "secondary",
                    onClick: () => {
                        n(),
                            (0, _.Y)({
                                pageType: m.liQ.SHOP_ORBS_TAB,
                                sectionType: m.JJy.ORBS_BADGE_REDEMPTION_MODAL,
                                ctaObject: m.ZSU.CTA_TO_QUEST_HOME,
                            }),
                            (0, E.navigateToQuestHome)({ fromContent: c.uF.REWARD_MODAL });
                    },
                },
            );
        else if (P.Dp.FRACTIONAL_PREMIUM === e.skuId)
            S
                ? I.push(
                      { text: N.intl.string(N.t.cpT0Cq), variant: "secondary", onClick: n },
                      {
                          text: N.intl.string(N.t.ERKK6v),
                          variant: "primary",
                          onClick: () => {
                              (0, o.x)(n);
                          },
                      },
                  )
                : I.push(
                      { text: N.intl.string(N.t.cpT0Cq), variant: "secondary", onClick: n },
                      {
                          text: N.intl.string(N.t["Jr6N+s"]),
                          variant: "primary",
                          onClick: () => {
                              (0, u.openUserSettings)(p.X.SUBSCRIPTIONS_PANEL), n();
                          },
                      },
                  );
        else {
            let [t] = e.items;
            I.push({
                text: N.intl.string(N.t["2p2aYz"]),
                variant: a ? "secondary" : "primary",
                onClick: () => {
                    if ((n(), (0, d.jH)(), R?.(), e.type === s.R.AVATAR_DECORATION)) {
                        l()(t.type === s.R.AVATAR_DECORATION, "product type and item type are the same"),
                            (0, h.L)({ initialSelectedDecoration: t, analyticsLocations: i });
                        return;
                    }
                    if (e.type === s.R.PROFILE_EFFECT) {
                        l()(t.type === s.R.PROFILE_EFFECT, "product type and item type are the same"),
                            (0, g.W)({ initialSelectedEffect: t, analyticsLocations: i });
                        return;
                    }
                    if (e.type === s.R.NAMEPLATE) {
                        l()(t.type === s.R.NAMEPLATE, "product type and item type are the same"),
                            (0, f.p)({ initialSelectedNameplate: t, analyticsLocations: i });
                        return;
                    }
                    if (e.type === s.R.PROFILE_FRAME) {
                        l()(t.type === s.R.PROFILE_FRAME, "product type and item type are the same"),
                            (0, y.w)({ initialSelectedProfileFrame: t, analyticsLocations: i });
                        return;
                    }
                },
            });
        }
        return a && I.push({ text: N.intl.string(N.t.MAS7uK), variant: "primary", onClick: r, loading: T }), I;
    },
    D = (t, e) => {
        let n = i.useMemo(() => (0, S.V6)(t.type, t.skuId), [t.type, t.skuId]);
        return (
            i.useEffect(() => {
                T.default.track(m.HAw.OPEN_MODAL, {
                    type: m.JJy.COLLECTIBLES_SHOP_COLLECTED_MODAL,
                    location_stack: e,
                    sku_id: t.skuId,
                    product_type: n,
                });
            }, [e, t.skuId, t.items, n]),
            { productType: n }
        );
    },
    U = (t, e) => {
        let n = i.useRef(new a.OH()),
            r = (0, i.useRef)(null),
            [l, s] = i.useState(null),
            d = (0, O.AB)({ purchaseType: e, skuId: t.skuId });
        return {
            environment: n.current,
            modalRef: r,
            confettiCanvas: l,
            setConfettiCanvas: s,
            customConfettiDisplayOptions: d,
        };
    };
