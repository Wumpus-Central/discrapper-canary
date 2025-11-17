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
    m = n(768762),
    p = n(585483),
    f = n(999382),
    h = n(213956),
    b = n(743475),
    x = n(983135),
    j = n(190007),
    _ = n(8426),
    v = n(570961),
    O = n(208665),
    C = n(359191),
    y = n(84658),
    N = n(142961),
    E = n(729311),
    I = n(850864),
    S = n(478777),
    T = n(729995),
    P = n(966301),
    w = n(707076),
    Z = n(981631),
    R = n(388032),
    D = n(344037);
function A() {
    let e = (0, s.e7)([f.Z], () => f.Z.getGuildId());
    return null == e ? null : (0, r.jsx)(L, { guildId: e });
}
function L(e) {
    let t,
        { guildId: n } = e,
        l = (0, s.e7)([C.Z], () => C.Z.getCurrentPage()),
        f = (0, s.e7)([C.Z], () => {
            let e = (0, y.lg)(l);
            return null != e && !C.Z.isEducationUpsellDismissed(e);
        }),
        O = (0, N.Z)(n),
        A = !O && f;
    switch (
        (i.useEffect(() => {
            (0, g.Q3)(o.z.COMMUNITY_ONBOARDING_NEW_BADGE);
        }, []),
        l)
    ) {
        case y.PG.LANDING:
            t = O
                ? (0, r.jsx)(T.Z, {
                      completed: !0,
                      guildId: n,
                  })
                : (0, r.jsx)(w.Z, {});
            break;
        case y.PG.SAFETY_CHECK:
            t = (0, r.jsx)(h.Z, {});
            break;
        case y.PG.DEFAULT_CHANNELS:
            t = (0, r.jsx)(E.Z, { saveOnClose: !O });
            break;
        case y.PG.CUSTOMIZATION_QUESTIONS:
            t = (0, r.jsx)(P.ZP, { saveOnClose: !O });
            break;
        case y.PG.HOME_SETTINGS:
            t = (0, r.jsx)(I.Z, { saveOnClose: !O });
            break;
        case y.PG.CONNECTIONS:
            t = (0, r.jsx)(S.Z, { saveOnClose: !O });
            break;
        case y.PG.REVIEW:
            t = (0, r.jsx)(T.Z, {
                completed: O,
                guildId: n,
            });
    }
    return (0, r.jsxs)("div", {
        className: a()(D.onboardingContainer, { [D.upsellOnTop]: A }),
        children: [
            !O &&
                l !== y.PG.LANDING &&
                (0, r.jsx)(k, {
                    setOnboardingStep: x.$K,
                    page: l,
                    homeSettingsEnabled: !0,
                }),
            O &&
                l !== y.PG.LANDING &&
                (0, r.jsx)("div", {
                    children: (0, r.jsxs)(c.zx, {
                        innerClassName: D.backButton,
                        look: c.zx.Looks.BLANK,
                        size: c.zx.Sizes.MIN,
                        onClick: () => {
                            if (C.Z.hasChanges() && !C.Z.canCloseEarly()) {
                                p.S.dispatch(Z.CkL.SHAKE_APP, {
                                    duration: 300,
                                    intensity: u.$x,
                                }),
                                    p.S.dispatch(Z.CkL.EMPHASIZE_NOTICE);
                                return;
                            }
                            (0, v.NB)(), (0, b.BG)(), (0, _.bj)(), (0, j.Pk)(), (0, x.$K)(y.PG.LANDING);
                        },
                        children: [
                            (0, r.jsx)(m.Z, {
                                className: D.arrow,
                                direction: m.Z.Directions.LEFT,
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: "text-sm/semibold",
                                color: "interactive-normal",
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
        l = (0, s.e7)([C.Z], () => C.Z.hasErrors()),
        o = (e) => {
            if (!l) return () => n(e);
        },
        c = (0, s.e7)([O.Z], () => O.Z.advancedMode);
    return (0, r.jsxs)("div", {
        className: D.progressContainer,
        children: [
            (0, r.jsxs)(d.P3F, {
                className: a()(D.progressBarContainer, D.clickableProgressBar),
                onClick: o(y.PG.SAFETY_CHECK),
                children: [
                    (0, r.jsx)("div", {
                        className: a()(D.progressBar, { [D.progressBarCurrent]: t === y.PG.SAFETY_CHECK }),
                    }),
                    (0, r.jsx)(d.Text, {
                        color: t === y.PG.SAFETY_CHECK ? "text-brand" : "text-muted",
                        variant: "text-xs/medium",
                        children: R.intl.format(R.t.Me5Mma, { stepNumber: 1 }),
                    }),
                ],
            }),
            (0, r.jsxs)(d.P3F, {
                className: a()(D.progressBarContainer, D.clickableProgressBar),
                onClick: o(y.PG.DEFAULT_CHANNELS),
                children: [
                    (0, r.jsx)("div", {
                        className: a()(D.progressBar, { [D.progressBarCurrent]: t === y.PG.DEFAULT_CHANNELS }),
                    }),
                    (0, r.jsx)(d.Text, {
                        color: t === y.PG.DEFAULT_CHANNELS ? "text-brand" : "text-muted",
                        variant: "text-xs/medium",
                        children: c
                            ? R.intl.formatToPlainString(R.t["8mGhOy"], { stepNumber: 2 })
                            : R.intl.formatToPlainString(R.t.vxpuTd, { stepNumber: 2 }),
                    }),
                ],
            }),
            (0, r.jsxs)(d.P3F, {
                className: a()(D.progressBarContainer, D.clickableProgressBar),
                onClick: o(y.PG.CUSTOMIZATION_QUESTIONS),
                children: [
                    (0, r.jsx)("div", {
                        className: a()(D.progressBar, { [D.progressBarCurrent]: t === y.PG.CUSTOMIZATION_QUESTIONS }),
                    }),
                    (0, r.jsx)(d.Text, {
                        color: t === y.PG.CUSTOMIZATION_QUESTIONS ? "text-brand" : "text-muted",
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
                    onClick: o(y.PG.HOME_SETTINGS),
                    children: [
                        (0, r.jsx)("div", {
                            className: a()(D.progressBar, { [D.progressBarCurrent]: t === y.PG.HOME_SETTINGS }),
                        }),
                        (0, r.jsx)(d.Text, {
                            color: t === y.PG.HOME_SETTINGS ? "text-brand" : "text-muted",
                            variant: "text-xs/medium",
                            children: R.intl.format(R.t.KVOukh, { stepNumber: 4 }),
                        }),
                    ],
                }),
            (0, r.jsxs)("div", {
                className: D.progressBarContainer,
                children: [
                    (0, r.jsx)("div", { className: a()(D.progressBar, { [D.progressBarCurrent]: t === y.PG.REVIEW }) }),
                    (0, r.jsx)(d.Text, {
                        color: t === y.PG.REVIEW ? "text-brand" : "text-muted",
                        variant: "text-xs/medium",
                        children: R.intl.format(R.t.oVzkiA, { stepNumber: 3 + +!!i + 1 }),
                    }),
                ],
            }),
        ],
    });
}
