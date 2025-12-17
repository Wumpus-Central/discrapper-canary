n.d(t, { Z: () => A });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(704215),
    c = n(755721),
    d = n(481060),
    u = n(503089),
    g = n(266454),
    f = n(768762),
    m = n(585483),
    b = n(999382),
    p = n(213956),
    h = n(743475),
    x = n(983135),
    j = n(190007),
    v = n(8426),
    O = n(570961),
    C = n(208665),
    y = n(359191),
    N = n(84658),
    E = n(142961),
    I = n(729311),
    S = n(850864),
    _ = n(478777),
    T = n(729995),
    P = n(966301),
    w = n(707076),
    Z = n(981631),
    R = n(388032),
    D = n(477242);
function A() {
    let e = (0, s.e7)([b.Z], () => b.Z.getGuildId());
    return null == e ? null : (0, r.jsx)(L, { guildId: e });
}
function L(e) {
    let t,
        { guildId: n } = e,
        l = (0, s.e7)([y.Z], () => y.Z.getCurrentPage()),
        b = (0, s.e7)([y.Z], () => {
            let e = (0, N.lg)(l);
            return null != e && !y.Z.isEducationUpsellDismissed(e);
        }),
        C = (0, E.Z)(n),
        A = !C && b;
    switch (
        (i.useEffect(() => {
            (0, g.Q3)(o.z.COMMUNITY_ONBOARDING_NEW_BADGE);
        }, []),
        l)
    ) {
        case N.PG.LANDING:
            t = C
                ? (0, r.jsx)(T.Z, {
                      completed: !0,
                      guildId: n,
                  })
                : (0, r.jsx)(w.Z, {});
            break;
        case N.PG.SAFETY_CHECK:
            t = (0, r.jsx)(p.Z, {});
            break;
        case N.PG.DEFAULT_CHANNELS:
            t = (0, r.jsx)(I.Z, { saveOnClose: !C });
            break;
        case N.PG.CUSTOMIZATION_QUESTIONS:
            t = (0, r.jsx)(P.ZP, { saveOnClose: !C });
            break;
        case N.PG.HOME_SETTINGS:
            t = (0, r.jsx)(S.Z, { saveOnClose: !C });
            break;
        case N.PG.CONNECTIONS:
            t = (0, r.jsx)(_.Z, { saveOnClose: !C });
            break;
        case N.PG.REVIEW:
            t = (0, r.jsx)(T.Z, {
                completed: C,
                guildId: n,
            });
    }
    return (0, r.jsxs)("div", {
        className: a()(D.onboardingContainer, { [D.upsellOnTop]: A }),
        children: [
            !C &&
                l !== N.PG.LANDING &&
                (0, r.jsx)(k, {
                    setOnboardingStep: x.$K,
                    page: l,
                    homeSettingsEnabled: !0,
                }),
            C &&
                l !== N.PG.LANDING &&
                (0, r.jsx)("div", {
                    children: (0, r.jsxs)(c.zx, {
                        innerClassName: D.backButton,
                        look: c.zx.Looks.BLANK,
                        size: c.zx.Sizes.MIN,
                        onClick: () => {
                            if (y.Z.hasChanges() && !y.Z.canCloseEarly()) {
                                m.S.dispatch(Z.CkL.SHAKE_APP, {
                                    duration: 300,
                                    intensity: u.$x,
                                }),
                                    m.S.dispatch(Z.CkL.EMPHASIZE_NOTICE);
                                return;
                            }
                            (0, O.NB)(), (0, h.BG)(), (0, v.bj)(), (0, j.Pk)(), (0, x.$K)(N.PG.LANDING);
                        },
                        children: [
                            (0, r.jsx)(f.Z, {
                                className: D.arrow,
                                direction: f.Z.Directions.LEFT,
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: "text-sm/semibold",
                                color: "interactive-text-default",
                                children: R.intl.string(R.t["13/7kX"]),
                            }),
                        ],
                    }),
                }),
            (0, r.jsx)("div", { children: t }),
        ],
    });
}
function k(e) {
    let { page: t, setOnboardingStep: n, homeSettingsEnabled: i } = e,
        l = (0, s.e7)([y.Z], () => y.Z.hasErrors()),
        o = (e) => {
            if (!l) return () => n(e);
        },
        c = (0, s.e7)([C.Z], () => C.Z.advancedMode);
    return (0, r.jsxs)("div", {
        className: D.progressContainer,
        children: [
            (0, r.jsxs)(d.P3F, {
                className: a()(D.progressBarContainer, D.clickableProgressBar),
                onClick: o(N.PG.SAFETY_CHECK),
                children: [
                    (0, r.jsx)("div", {
                        className: a()(D.progressBar, { [D.progressBarCurrent]: t === N.PG.SAFETY_CHECK }),
                    }),
                    (0, r.jsx)(d.Text, {
                        color: t === N.PG.SAFETY_CHECK ? "text-brand" : "text-muted",
                        variant: "text-xs/medium",
                        children: R.intl.format(R.t.Me5Mma, { stepNumber: 1 }),
                    }),
                ],
            }),
            (0, r.jsxs)(d.P3F, {
                className: a()(D.progressBarContainer, D.clickableProgressBar),
                onClick: o(N.PG.DEFAULT_CHANNELS),
                children: [
                    (0, r.jsx)("div", {
                        className: a()(D.progressBar, { [D.progressBarCurrent]: t === N.PG.DEFAULT_CHANNELS }),
                    }),
                    (0, r.jsx)(d.Text, {
                        color: t === N.PG.DEFAULT_CHANNELS ? "text-brand" : "text-muted",
                        variant: "text-xs/medium",
                        children: c
                            ? R.intl.formatToPlainString(R.t["8mGhOy"], { stepNumber: 2 })
                            : R.intl.formatToPlainString(R.t.vxpuTd, { stepNumber: 2 }),
                    }),
                ],
            }),
            (0, r.jsxs)(d.P3F, {
                className: a()(D.progressBarContainer, D.clickableProgressBar),
                onClick: o(N.PG.CUSTOMIZATION_QUESTIONS),
                children: [
                    (0, r.jsx)("div", {
                        className: a()(D.progressBar, { [D.progressBarCurrent]: t === N.PG.CUSTOMIZATION_QUESTIONS }),
                    }),
                    (0, r.jsx)(d.Text, {
                        color: t === N.PG.CUSTOMIZATION_QUESTIONS ? "text-brand" : "text-muted",
                        variant: "text-xs/medium",
                        children: c
                            ? R.intl.formatToPlainString(R.t.vb6J5g, { stepNumber: 3 })
                            : R.intl.formatToPlainString(R.t.ZpdQqK, { stepNumber: 3 }),
                    }),
                ],
            }),
            i &&
                (0, r.jsxs)(d.P3F, {
                    className: a()(D.progressBarContainer, D.clickableProgressBar),
                    onClick: o(N.PG.HOME_SETTINGS),
                    children: [
                        (0, r.jsx)("div", {
                            className: a()(D.progressBar, { [D.progressBarCurrent]: t === N.PG.HOME_SETTINGS }),
                        }),
                        (0, r.jsx)(d.Text, {
                            color: t === N.PG.HOME_SETTINGS ? "text-brand" : "text-muted",
                            variant: "text-xs/medium",
                            children: R.intl.format(R.t.KVOukh, { stepNumber: 4 }),
                        }),
                    ],
                }),
            (0, r.jsxs)("div", {
                className: D.progressBarContainer,
                children: [
                    (0, r.jsx)("div", { className: a()(D.progressBar, { [D.progressBarCurrent]: t === N.PG.REVIEW }) }),
                    (0, r.jsx)(d.Text, {
                        color: t === N.PG.REVIEW ? "text-brand" : "text-muted",
                        variant: "text-xs/medium",
                        children: R.intl.format(R.t.oVzkiA, { stepNumber: 3 + +!!i + 1 }),
                    }),
                ],
            }),
        ],
    });
}
