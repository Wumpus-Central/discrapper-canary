n.d(e, { $V: () => b, $k: () => L, aG: () => U, mO: () => k, v8: () => D }), n(321073);
var i = n(64700),
    a = n(106778),
    l = n(284009),
    r = n.n(l),
    d = n(575593),
    s = n(398590),
    o = n(954921),
    p = n(590547),
    _ = n(87719),
    E = n(309635),
    u = n(341915),
    c = n(545986),
    S = n(780964),
    h = n(840065),
    A = n(318346),
    I = n(954571),
    R = n(203982),
    T = n(975571),
    f = n(993408),
    y = n(442759),
    g = n(158216),
    O = n(758836),
    N = n(652215),
    m = n(839358),
    v = n(985018);
let C = (t) => (null != t ? v.intl.format(v.t["4kp0AB"], { itemName: t }) : null),
    L = (t) => {
        let {
            product: e,
            overrideTitle: n,
            isVariantsGroupEnabled: i,
            shouldShowPromotionalExperience: a,
            productName: l,
            itemConsumed: r,
        } = t;
        if (null != n) return n;
        if (O.Dp.ORB_PROFILE_BADGE === e.skuId) return v.intl.string(m.default.nvaTQq);
        if (O.Dp.FRACTIONAL_PREMIUM === e.skuId)
            if (r) return v.intl.string(v.t.t0xkSB);
            else return v.intl.string(v.t.g5W1g8);
        if (i && !a) return v.intl.string(v.t.IMffmm);
        return v.intl.formatToPlainString(v.t.YNaxMp, { itemName: l });
    },
    D = (t) => {
        let {
            product: e,
            overrideDescription: n,
            productName: i,
            shouldShowPromotionalExperience: a,
            promotionalRewardCollectedText: l,
            itemConsumed: r,
            isFractionalPremiumActive: s,
            expiresAt: o,
        } = t;
        if (null != n) return n;
        if (O.Dp.ORB_PROFILE_BADGE === e.skuId) return v.intl.string(m.default.UnPGii);
        if (O.Dp.FRACTIONAL_PREMIUM === e.skuId) {
            let t = v.intl.formatToPlainString(v.t.Cz1G97, { days: 3 });
            return r
                ? v.intl.format(v.t.bhLChO, {
                      helpCenterLink: T.A.getArticleURL(N.MVz.FRACTIONAL_PREMIUM_ABOUT),
                      duration: t,
                      expirationDate: o,
                  })
                : s
                  ? v.intl.string(v.t.fBmhE9)
                  : v.intl.format(v.t["1ZBX4E"], {
                        helpCenterLink: T.A.getArticleURL(N.MVz.FRACTIONAL_PREMIUM_ABOUT),
                        duration: t,
                    });
        }
        if (e.type === d.R.BUNDLE) {
            let { itemOneName: t, itemTwoName: n } = (0, y.yW)(e);
            return v.intl.format(v.t.fXw44U, { itemOneName: t, itemTwoName: n });
        }
        return e.type === d.R.AVATAR_DECORATION && a && null != l ? l : C(i);
    },
    U = (t) => {
        let {
                product: e,
                onClose: n,
                analyticsLocations: i,
                hasRequiredProductItems: a,
                handleUseNow: l,
                isApplying: I,
                openProfileSettings: T,
                itemConsumed: f,
            } = t,
            y = [];
        if (O.Dp.ORB_PROFILE_BADGE === e.skuId)
            y.push(
                {
                    text: v.intl.string(m.default.yfwZuy),
                    variant: "primary",
                    onClick: () => {
                        n(), R._.dispatch(N.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
                    },
                },
                {
                    text: v.intl.string(v.t.H57f41),
                    variant: "secondary",
                    onClick: () => {
                        n(),
                            (0, A.Y)({
                                pageType: N.liQ.SHOP_ORBS_TAB,
                                sectionType: N.JJy.ORBS_BADGE_REDEMPTION_MODAL,
                                ctaObject: N.ZSU.CTA_TO_QUEST_HOME,
                            }),
                            (0, c.navigateToQuestHome)({ fromContent: u.uF.REWARD_MODAL });
                    },
                },
            );
        else if (O.Dp.FRACTIONAL_PREMIUM === e.skuId)
            f
                ? y.push(
                      { text: v.intl.string(v.t.cpT0Cq), variant: "secondary", onClick: n },
                      {
                          text: v.intl.string(v.t.ERKK6v),
                          variant: "primary",
                          onClick: () => {
                              (0, _.x)(n);
                          },
                      },
                  )
                : y.push(
                      { text: v.intl.string(v.t.cpT0Cq), variant: "secondary", onClick: n },
                      {
                          text: v.intl.string(v.t["Jr6N+s"]),
                          variant: "primary",
                          onClick: () => {
                              (0, h.openUserSettings)(S.X.SUBSCRIPTIONS_PANEL), n();
                          },
                      },
                  );
        else {
            let [t] = e.items;
            y.push({
                text: v.intl.string(v.t["2p2aYz"]),
                variant: a ? "secondary" : "primary",
                onClick: () => {
                    if ((n(), (0, s.jH)(), T?.(), e.type === d.R.AVATAR_DECORATION)) {
                        r()(t.type === d.R.AVATAR_DECORATION, "product type and item type are the same"),
                            (0, o.L)({ initialSelectedDecoration: t, analyticsLocations: i });
                        return;
                    }
                    if (e.type === d.R.PROFILE_EFFECT) {
                        r()(t.type === d.R.PROFILE_EFFECT, "product type and item type are the same"),
                            (0, E.W)({ initialSelectedEffect: t, analyticsLocations: i });
                        return;
                    }
                    if (e.type === d.R.NAMEPLATE) {
                        r()(t.type === d.R.NAMEPLATE, "product type and item type are the same"),
                            (0, p.p)({ initialSelectedNameplate: t, analyticsLocations: i });
                        return;
                    }
                },
            });
        }
        return a && y.push({ text: v.intl.string(v.t.MAS7uK), variant: "primary", onClick: l, loading: I }), y;
    },
    b = (t, e) => {
        let n = i.useMemo(() => (0, f.V6)(t.type, t.skuId), [t.type, t.skuId]);
        return (
            i.useEffect(() => {
                I.default.track(N.HAw.OPEN_MODAL, {
                    type: N.JJy.COLLECTIBLES_SHOP_COLLECTED_MODAL,
                    location_stack: e,
                    sku_id: t.skuId,
                    product_type: n,
                });
            }, [e, t.skuId, t.items, n]),
            { productType: n }
        );
    },
    k = (t, e) => {
        let n = i.useRef(new a.OH()),
            l = (0, i.useRef)(null),
            [r, d] = i.useState(null),
            s = (0, g.AB)({ purchaseType: e, skuId: t.skuId });
        return {
            environment: n.current,
            modalRef: l,
            confettiCanvas: r,
            setConfettiCanvas: d,
            customConfettiDisplayOptions: s,
        };
    };
