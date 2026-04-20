n.d(e, { $V: () => x, $k: () => M, aG: () => P, mO: () => B, v8: () => v }), n(321073);
var i = n(64700),
    r = n(106778),
    a = n(284009),
    l = n.n(a),
    s = n(575593),
    d = n(398590),
    u = n(87719),
    o = n(341915),
    c = n(545986),
    p = n(780964),
    E = n(858897),
    h = n(318346),
    O = n(954571),
    f = n(203982),
    A = n(975571),
    R = n(993408),
    I = n(562819),
    _ = n(442759),
    y = n(637193),
    L = n(617061),
    m = n(515727),
    C = n(158216),
    b = n(758836),
    T = n(652215),
    S = n(625265),
    g = n(985018);
let k = (t) => (null != t ? g.intl.format(g.t["4kp0AB"], { itemName: t }) : null),
    M = (t) => {
        let {
            product: e,
            overrideTitle: n,
            isVariantsGroupEnabled: i,
            shouldShowPromotionalExperience: r,
            productName: a,
            itemConsumed: l,
        } = t;
        if (null != n) return n;
        if (b.Dp.ORB_PROFILE_BADGE === e.skuId) return g.intl.string(S.default.nvaTQq);
        if (b.Dp.FRACTIONAL_PREMIUM === e.skuId)
            if (l) return g.intl.string(g.t.t0xkSB);
            else return g.intl.string(g.t.g5W1g8);
        if (i && !r) return g.intl.string(g.t.IMffmm);
        return g.intl.formatToPlainString(g.t.YNaxMp, { itemName: a });
    },
    v = (t) => {
        let {
            product: e,
            overrideDescription: n,
            productName: i,
            shouldShowPromotionalExperience: r,
            promotionalRewardCollectedText: a,
            itemConsumed: l,
            isFractionalPremiumActive: d,
            expiresAt: u,
        } = t;
        if (null != n) return n;
        if (b.Dp.ORB_PROFILE_BADGE === e.skuId) return g.intl.string(S.default.UnPGii);
        if (b.Dp.FRACTIONAL_PREMIUM === e.skuId) {
            let t = g.intl.formatToPlainString(g.t.Cz1G97, { days: 3 });
            return l
                ? g.intl.format(g.t.bhLChO, {
                      helpCenterLink: A.A.getArticleURL(T.MVz.FRACTIONAL_PREMIUM_ABOUT),
                      duration: t,
                      expirationDate: u,
                  })
                : d
                  ? g.intl.string(g.t.fBmhE9)
                  : g.intl.format(g.t["1ZBX4E"], {
                        helpCenterLink: A.A.getArticleURL(T.MVz.FRACTIONAL_PREMIUM_ABOUT),
                        duration: t,
                    });
        }
        if (e.type === s.R.BUNDLE) {
            let { itemOneName: t, itemTwoName: n } = (0, _.yW)(e);
            return g.intl.format(g.t.fXw44U, { itemOneName: t, itemTwoName: n });
        }
        return e.type === s.R.AVATAR_DECORATION && r && null != a ? a : k(i);
    },
    P = (t) => {
        let {
                product: e,
                onClose: n,
                analyticsLocations: i,
                hasRequiredProductItems: r,
                handleUseNow: a,
                isApplying: O,
                openProfileSettings: A,
                itemConsumed: R,
            } = t,
            _ = [];
        if (b.Dp.ORB_PROFILE_BADGE === e.skuId)
            _.push(
                {
                    text: g.intl.string(S.default.yfwZuy),
                    variant: "primary",
                    onClick: () => {
                        n(), f._.dispatch(T.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
                    },
                },
                {
                    text: g.intl.string(g.t.H57f41),
                    variant: "secondary",
                    onClick: () => {
                        n(),
                            (0, h.Y)({
                                pageType: T.liQ.SHOP_ORBS_TAB,
                                sectionType: T.JJy.ORBS_BADGE_REDEMPTION_MODAL,
                                ctaObject: T.ZSU.CTA_TO_QUEST_HOME,
                            }),
                            (0, c.navigateToQuestHome)({ fromContent: o.uF.REWARD_MODAL });
                    },
                },
            );
        else if (b.Dp.FRACTIONAL_PREMIUM === e.skuId)
            R
                ? _.push(
                      { text: g.intl.string(g.t.cpT0Cq), variant: "secondary", onClick: n },
                      {
                          text: g.intl.string(g.t.ERKK6v),
                          variant: "primary",
                          onClick: () => {
                              (0, u.x)(n);
                          },
                      },
                  )
                : _.push(
                      { text: g.intl.string(g.t.cpT0Cq), variant: "secondary", onClick: n },
                      {
                          text: g.intl.string(g.t["Jr6N+s"]),
                          variant: "primary",
                          onClick: () => {
                              (0, E.openUserSettings)(p.X.SUBSCRIPTIONS_PANEL), n();
                          },
                      },
                  );
        else {
            let [t] = e.items;
            _.push({
                text: g.intl.string(g.t["2p2aYz"]),
                variant: r ? "secondary" : "primary",
                onClick: () => {
                    if ((n(), (0, d.jH)(), A?.(), e.type === s.R.AVATAR_DECORATION)) {
                        l()(t.type === s.R.AVATAR_DECORATION, "product type and item type are the same"),
                            (0, I.L)({ initialSelectedDecoration: t, analyticsLocations: i });
                        return;
                    }
                    if (e.type === s.R.PROFILE_EFFECT) {
                        l()(t.type === s.R.PROFILE_EFFECT, "product type and item type are the same"),
                            (0, L.W)({ initialSelectedEffect: t, analyticsLocations: i });
                        return;
                    }
                    if (e.type === s.R.NAMEPLATE) {
                        l()(t.type === s.R.NAMEPLATE, "product type and item type are the same"),
                            (0, y.p)({ initialSelectedNameplate: t, analyticsLocations: i });
                        return;
                    }
                    if (e.type === s.R.PROFILE_FRAME) {
                        l()(t.type === s.R.PROFILE_FRAME, "product type and item type are the same"),
                            (0, m.w)({ initialSelectedProfileFrame: t, analyticsLocations: i });
                        return;
                    }
                },
            });
        }
        return r && _.push({ text: g.intl.string(g.t.MAS7uK), variant: "primary", onClick: a, loading: O }), _;
    },
    x = (t, e) => {
        let n = i.useMemo(() => (0, R.V6)(t.type, t.skuId), [t.type, t.skuId]);
        return (
            i.useEffect(() => {
                O.default.track(T.HAw.OPEN_MODAL, {
                    type: T.JJy.COLLECTIBLES_SHOP_COLLECTED_MODAL,
                    location_stack: e,
                    sku_id: t.skuId,
                    product_type: n,
                });
            }, [e, t.skuId, t.items, n]),
            { productType: n }
        );
    },
    B = (t, e) => {
        let n = i.useRef(new r.OH()),
            a = (0, i.useRef)(null),
            [l, s] = i.useState(null),
            d = (0, C.AB)({ purchaseType: e, skuId: t.skuId });
        return {
            environment: n.current,
            modalRef: a,
            confettiCanvas: l,
            setConfettiCanvas: s,
            customConfettiDisplayOptions: d,
        };
    };
