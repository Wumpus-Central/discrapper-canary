n.d(e, { $V: () => x, $k: () => g, aG: () => M, mO: () => B, v8: () => v }), n(321073);
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
    h = n(858897),
    E = n(318346),
    O = n(954571),
    f = n(203982),
    A = n(975571),
    I = n(993408),
    _ = n(562819),
    L = n(442759),
    R = n(637193),
    y = n(617061),
    C = n(158216),
    m = n(758836),
    T = n(652215),
    b = n(839358),
    k = n(985018);
let S = (t) => (null != t ? k.intl.format(k.t["4kp0AB"], { itemName: t }) : null),
    g = (t) => {
        let {
            product: e,
            overrideTitle: n,
            isVariantsGroupEnabled: i,
            shouldShowPromotionalExperience: r,
            productName: a,
            itemConsumed: l,
        } = t;
        if (null != n) return n;
        if (m.Dp.ORB_PROFILE_BADGE === e.skuId) return k.intl.string(b.default.nvaTQq);
        if (m.Dp.FRACTIONAL_PREMIUM === e.skuId)
            if (l) return k.intl.string(k.t.t0xkSB);
            else return k.intl.string(k.t.g5W1g8);
        if (i && !r) return k.intl.string(k.t.IMffmm);
        return k.intl.formatToPlainString(k.t.YNaxMp, { itemName: a });
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
        if (m.Dp.ORB_PROFILE_BADGE === e.skuId) return k.intl.string(b.default.UnPGii);
        if (m.Dp.FRACTIONAL_PREMIUM === e.skuId) {
            let t = k.intl.formatToPlainString(k.t.Cz1G97, { days: 3 });
            return l
                ? k.intl.format(k.t.bhLChO, {
                      helpCenterLink: A.A.getArticleURL(T.MVz.FRACTIONAL_PREMIUM_ABOUT),
                      duration: t,
                      expirationDate: u,
                  })
                : d
                  ? k.intl.string(k.t.fBmhE9)
                  : k.intl.format(k.t["1ZBX4E"], {
                        helpCenterLink: A.A.getArticleURL(T.MVz.FRACTIONAL_PREMIUM_ABOUT),
                        duration: t,
                    });
        }
        if (e.type === s.R.BUNDLE) {
            let { itemOneName: t, itemTwoName: n } = (0, L.yW)(e);
            return k.intl.format(k.t.fXw44U, { itemOneName: t, itemTwoName: n });
        }
        return e.type === s.R.AVATAR_DECORATION && r && null != a ? a : S(i);
    },
    M = (t) => {
        let {
                product: e,
                onClose: n,
                analyticsLocations: i,
                hasRequiredProductItems: r,
                handleUseNow: a,
                isApplying: O,
                openProfileSettings: A,
                itemConsumed: I,
            } = t,
            L = [];
        if (m.Dp.ORB_PROFILE_BADGE === e.skuId)
            L.push(
                {
                    text: k.intl.string(b.default.yfwZuy),
                    variant: "primary",
                    onClick: () => {
                        n(), f._.dispatch(T.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
                    },
                },
                {
                    text: k.intl.string(k.t.H57f41),
                    variant: "secondary",
                    onClick: () => {
                        n(),
                            (0, E.Y)({
                                pageType: T.liQ.SHOP_ORBS_TAB,
                                sectionType: T.JJy.ORBS_BADGE_REDEMPTION_MODAL,
                                ctaObject: T.ZSU.CTA_TO_QUEST_HOME,
                            }),
                            (0, c.navigateToQuestHome)({ fromContent: o.uF.REWARD_MODAL });
                    },
                },
            );
        else if (m.Dp.FRACTIONAL_PREMIUM === e.skuId)
            I
                ? L.push(
                      { text: k.intl.string(k.t.cpT0Cq), variant: "secondary", onClick: n },
                      {
                          text: k.intl.string(k.t.ERKK6v),
                          variant: "primary",
                          onClick: () => {
                              (0, u.x)(n);
                          },
                      },
                  )
                : L.push(
                      { text: k.intl.string(k.t.cpT0Cq), variant: "secondary", onClick: n },
                      {
                          text: k.intl.string(k.t["Jr6N+s"]),
                          variant: "primary",
                          onClick: () => {
                              (0, h.openUserSettings)(p.X.SUBSCRIPTIONS_PANEL), n();
                          },
                      },
                  );
        else {
            let [t] = e.items;
            L.push({
                text: k.intl.string(k.t["2p2aYz"]),
                variant: r ? "secondary" : "primary",
                onClick: () => {
                    if ((n(), (0, d.jH)(), A?.(), e.type === s.R.AVATAR_DECORATION)) {
                        l()(t.type === s.R.AVATAR_DECORATION, "product type and item type are the same"),
                            (0, _.L)({ initialSelectedDecoration: t, analyticsLocations: i });
                        return;
                    }
                    if (e.type === s.R.PROFILE_EFFECT) {
                        l()(t.type === s.R.PROFILE_EFFECT, "product type and item type are the same"),
                            (0, y.W)({ initialSelectedEffect: t, analyticsLocations: i });
                        return;
                    }
                    if (e.type === s.R.NAMEPLATE) {
                        l()(t.type === s.R.NAMEPLATE, "product type and item type are the same"),
                            (0, R.p)({ initialSelectedNameplate: t, analyticsLocations: i });
                        return;
                    }
                },
            });
        }
        return r && L.push({ text: k.intl.string(k.t.MAS7uK), variant: "primary", onClick: a, loading: O }), L;
    },
    x = (t, e) => {
        let n = i.useMemo(() => (0, I.V6)(t.type, t.skuId), [t.type, t.skuId]);
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
