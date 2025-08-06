n.d(t, { u: () => y });
var r = n(255367),
    i = n(73800),
    l = n(114858),
    o = n(704215),
    s = n(266454),
    a = n(703656),
    c = n(507808),
    u = n(822857),
    d = n(518121),
    h = n(432792),
    p = n(981631),
    f = n(215023),
    g = n(921944),
    m = n(46140),
    b = n(388032);
let O = [p.Z5c.ME, p.Z5c.COLLECTIBLES_SHOP, p.Z5c.NITRO_HOME],
    _ = (e) => {
        let { isVirtualCurrencyEnabled: t, onShowCoachmarkHandler: n } = e,
            r = (0, l.TH)().pathname,
            { shouldShow: u, closeCoachmarkIfOpen: d } = (0, h.M)({
                onboardingCoachmarkType: "discover",
                onShowCoachmarkHandler: n,
            }),
            b = i.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "CLOSE";
                    (0, s.Q3)(o.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, {
                        dismissAction: g.L.INDIRECT_ACTION,
                        groupName: g.R.VIRTUAL_CURRENCY_ONBOARDING,
                    }),
                        d(e);
                },
                [d],
            ),
            _ = i.useCallback(() => {
                d("CTA_CLICK"), O.includes(r) || (0, a.uL)(p.Z5c.COLLECTIBLES_SHOP_WITH_TAB(f.AW.ORBS));
            }, [d, r]),
            y = i.useCallback(() => {
                b("CTA_CLICK"),
                    (0, c.Y)({
                        pageType: p.ZY5.GUILD_LIST,
                        sectionType: p.jXE.ORBS_DISCOVERY_ONBOARDING_COACHMARK,
                        ctaObject: p.qAy.DISCOVERY_BUTTON_TO_ORB_INTRO_QUEST,
                    });
            }, [b]);
        return t
            ? {
                  shouldShow: u,
                  questId: m.V6,
                  onClose: b,
                  onCtaClick: _,
                  onDiscoveryButtonClick: y,
              }
            : {
                  shouldShow: !1,
                  questId: void 0,
                  onClose: p.dG4,
                  onCtaClick: p.dG4,
                  onDiscoveryButtonClick: p.dG4,
              };
    },
    y = (e) => {
        let { targetElementRef: t, scrollToBottom: n, renderDiscoveryButton: l, isGuildBarScrolling: o } = e,
            { enabled: s } = (0, u.WX)({ location: "orbs_discovery_onboarding_coachmark" }),
            {
                shouldShow: a,
                questId: c,
                onClose: h,
                onCtaClick: p,
                onDiscoveryButtonClick: f,
            } = _({
                isVirtualCurrencyEnabled: s,
                onShowCoachmarkHandler: (0, d.O5)({
                    targetElementRef: t,
                    scrollToBottom: n,
                }),
            }),
            g = i.useMemo(
                () => ({
                    onCtaClick: p,
                    onClose: h,
                    titleText: b.intl.string(b.t.KnWRQU),
                    descriptionText: b.intl.format(b.t["xYx+WV"], { quantity: 200 }),
                    ctaText: b.intl.string(b.t.v4HbPz),
                }),
                [p, h],
            );
        return (0, r.jsx)(d.G6, {
            errorBoundarySource: "ORBS_DISCOVERY_ONBOARDING_COACHMARK",
            targetElementRef: t,
            targetQuestId: c,
            renderDiscoveryButton: l,
            showingCoachmark: a,
            isGuildBarScrolling: o,
            onDiscoveryButtonClick: f,
            innerCoachmarkProps: g,
        });
    };
