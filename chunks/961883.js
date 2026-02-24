n.d(e, { $V: () => D, $k: () => C, aG: () => N, mO: () => L, v8: () => T }), n(321073);
var i = n(64700),
    a = n(106778),
    l = n(284009),
    r = n.n(l),
    d = n(575593),
    s = n(398590),
    o = n(954921),
    p = n(590547),
    u = n(87719),
    c = n(309635),
    g = n(545986),
    A = n(780964),
    h = n(840065),
    f = n(318346),
    m = n(954571),
    y = n(203982),
    E = n(975571),
    v = n(993408),
    I = n(442759),
    _ = n(158216),
    O = n(758836),
    R = n(652215),
    b = n(839358),
    S = n(985018);
let k = (t) => (null != t ? S.intl.format(S.t["4kp0AB"], { itemName: t }) : null),
    C = (t) => {
        let {
            product: e,
            overrideTitle: n,
            isVariantsGroupEnabled: i,
            shouldShowPromotionalExperience: a,
            productName: l,
            itemConsumed: r,
        } = t;
        if (null != n) return n;
        if (O.Dp.ORB_PROFILE_BADGE === e.skuId) return S.intl.string(b.default.nvaTQq);
        if (O.Dp.FRACTIONAL_PREMIUM === e.skuId)
            if (r) return S.intl.string(S.t.t0xkSB);
            else return S.intl.string(S.t.g5W1g8);
        if (i && !a) return S.intl.string(S.t.IMffmm);
        return S.intl.formatToPlainString(S.t.YNaxMp, { itemName: l });
    },
    T = (t) => {
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
        if (O.Dp.ORB_PROFILE_BADGE === e.skuId) return S.intl.string(b.default.UnPGii);
        if (O.Dp.FRACTIONAL_PREMIUM === e.skuId) {
            let t = S.intl.formatToPlainString(S.t.Cz1G97, { days: 3 });
            return r
                ? S.intl.format(S.t.bhLChO, {
                      helpCenterLink: E.A.getArticleURL(R.MVz.FRACTIONAL_PREMIUM_ABOUT),
                      duration: t,
                      expirationDate: o,
                  })
                : s
                  ? S.intl.string(S.t.fBmhE9)
                  : S.intl.format(S.t["1ZBX4E"], {
                        helpCenterLink: E.A.getArticleURL(R.MVz.FRACTIONAL_PREMIUM_ABOUT),
                        duration: t,
                    });
        }
        if (e.type === d.R.BUNDLE) {
            let { itemOneName: t, itemTwoName: n } = (0, I.yW)(e);
            return S.intl.format(S.t.fXw44U, { itemOneName: t, itemTwoName: n });
        }
        return e.type === d.R.AVATAR_DECORATION && a && null != l ? l : k(i);
    },
    N = (t) => {
        let {
                product: e,
                onClose: n,
                analyticsLocations: i,
                hasRequiredProductItems: a,
                handleUseNow: l,
                isApplying: m,
                openProfileSettings: E,
                itemConsumed: v,
            } = t,
            I = [];
        if (O.Dp.ORB_PROFILE_BADGE === e.skuId)
            I.push(
                {
                    text: S.intl.string(b.default.yfwZuy),
                    variant: "primary",
                    onClick: () => {
                        n(), y._.dispatch(R.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
                    },
                },
                {
                    text: S.intl.string(S.t.H57f41),
                    variant: "secondary",
                    onClick: () => {
                        n(),
                            (0, f.Y)({
                                pageType: R.liQ.SHOP_ORBS_TAB,
                                sectionType: R.JJy.ORBS_BADGE_REDEMPTION_MODAL,
                                ctaObject: R.ZSU.CTA_TO_QUEST_HOME,
                            }),
                            (0, g.navigateToQuestHome)();
                    },
                },
            );
        else if (O.Dp.FRACTIONAL_PREMIUM === e.skuId)
            v
                ? I.push(
                      { text: S.intl.string(S.t.cpT0Cq), variant: "secondary", onClick: n },
                      {
                          text: S.intl.string(S.t.ERKK6v),
                          variant: "primary",
                          onClick: () => {
                              (0, u.x)(n);
                          },
                      },
                  )
                : I.push(
                      { text: S.intl.string(S.t.cpT0Cq), variant: "secondary", onClick: n },
                      {
                          text: S.intl.string(S.t["Jr6N+s"]),
                          variant: "primary",
                          onClick: () => {
                              (0, h.openUserSettings)(A.X.SUBSCRIPTIONS_PANEL, { section: R.nc_.SUBSCRIPTIONS }), n();
                          },
                      },
                  );
        else {
            let [t] = e.items;
            I.push({
                text: S.intl.string(S.t["2p2aYz"]),
                variant: a ? "secondary" : "primary",
                onClick: () => {
                    if ((n(), (0, s.jH)(), E?.(), e.type === d.R.AVATAR_DECORATION)) {
                        r()(t.type === d.R.AVATAR_DECORATION, "product type and item type are the same"),
                            (0, o.L)({ initialSelectedDecoration: t, analyticsLocations: i });
                        return;
                    }
                    if (e.type === d.R.PROFILE_EFFECT) {
                        r()(t.type === d.R.PROFILE_EFFECT, "product type and item type are the same"),
                            (0, c.W)({ initialSelectedEffect: t, analyticsLocations: i });
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
        return a && I.push({ text: S.intl.string(S.t.MAS7uK), variant: "primary", onClick: l, loading: m }), I;
    },
    D = (t, e) => {
        let n = i.useMemo(() => (0, v.V6)(t.type, t.skuId), [t.type, t.skuId]);
        return (
            i.useEffect(() => {
                m.default.track(R.HAw.OPEN_MODAL, {
                    type: R.JJy.COLLECTIBLES_SHOP_COLLECTED_MODAL,
                    location_stack: e,
                    sku_id: t.skuId,
                    product_type: n,
                });
            }, [e, t.skuId, t.items, n]),
            { productType: n }
        );
    },
    L = (t, e) => {
        let n = i.useRef(new a.OH()),
            l = (0, i.useRef)(null),
            [r, d] = i.useState(null),
            s = (0, _.AB)({ purchaseType: e, skuId: t.skuId });
        return {
            environment: n.current,
            modalRef: l,
            confettiCanvas: r,
            setConfettiCanvas: d,
            customConfettiDisplayOptions: s,
        };
    };
