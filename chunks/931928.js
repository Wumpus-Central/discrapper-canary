n.d(t, { u: () => O });
var r = n(255367),
    i = n(73800),
    l = n(114858),
    o = n(704215),
    a = n(266454),
    s = n(703656),
    c = n(507808),
    u = n(822857),
    d = n(518121),
    p = n(432792),
    f = n(981631),
    h = n(215023),
    g = n(921944),
    m = n(46140),
    b = n(388032);
let _ = [f.Z5c.ME, f.Z5c.COLLECTIBLES_SHOP, f.Z5c.NITRO_HOME],
    O = (e) => {
        let { targetElementRef: t, scrollToBottom: n, renderDiscoveryButton: O, isGuildBarScrolling: y } = e,
            { enabled: v } = (0, u.WX)({ location: "orbs_discovery_onboarding_coachmark" }),
            {
                shouldShow: j,
                questId: C,
                onClose: E,
                onCtaClick: x,
                onDiscoveryButtonClick: S,
            } = ((e) => {
                let { isVirtualCurrencyEnabled: t, onShowCoachmarkHandler: n } = e,
                    r = (0, l.TH)().pathname,
                    { shouldShow: u, closeCoachmarkIfOpen: d } = (0, p.M)({
                        onboardingCoachmarkType: "discover",
                        onShowCoachmarkHandler: n,
                    }),
                    b = i.useCallback(
                        function () {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "CLOSE";
                            (0, a.Q3)(o.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, {
                                dismissAction: g.L.INDIRECT_ACTION,
                                groupName: g.R.VIRTUAL_CURRENCY_ONBOARDING,
                            }),
                                d(e);
                        },
                        [d],
                    ),
                    O = i.useCallback(() => {
                        d("CTA_CLICK"), _.includes(r) || (0, s.uL)(f.Z5c.COLLECTIBLES_SHOP_WITH_TAB(h.AW.ORBS));
                    }, [d, r]),
                    y = i.useCallback(() => {
                        b("CTA_CLICK"),
                            (0, c.Y)({
                                pageType: f.ZY5.GUILD_LIST,
                                sectionType: f.jXE.ORBS_DISCOVERY_ONBOARDING_COACHMARK,
                                ctaObject: f.qAy.DISCOVERY_BUTTON_TO_ORB_INTRO_QUEST,
                            });
                    }, [b]);
                return t
                    ? {
                          shouldShow: u,
                          questId: m.V6,
                          onClose: b,
                          onCtaClick: O,
                          onDiscoveryButtonClick: y,
                      }
                    : {
                          shouldShow: !1,
                          questId: void 0,
                          onClose: f.dG4,
                          onCtaClick: f.dG4,
                          onDiscoveryButtonClick: f.dG4,
                      };
            })({
                isVirtualCurrencyEnabled: v,
                onShowCoachmarkHandler: (0, d.O5)({
                    targetElementRef: t,
                    scrollToBottom: n,
                }),
            }),
            I = i.useMemo(
                () => ({
                    onCtaClick: x,
                    onClose: E,
                    titleText: b.intl.string(b.t.KnWRQU),
                    descriptionText: b.intl.format(b.t["xYx+WV"], { quantity: 200 }),
                    ctaText: b.intl.string(b.t.v4HbPz),
                }),
                [x, E],
            );
        return (0, r.jsx)(d.G6, {
            errorBoundarySource: "ORBS_DISCOVERY_ONBOARDING_COACHMARK",
            targetElementRef: t,
            targetQuestId: C,
            renderDiscoveryButton: O,
            showingCoachmark: j,
            isGuildBarScrolling: y,
            onDiscoveryButtonClick: S,
            innerCoachmarkProps: I,
        });
    };
