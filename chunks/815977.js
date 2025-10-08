n.d(t, { Z: () => R });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(704215),
    c = n(755721),
    d = n(481060),
    u = n(503089),
    g = n(266454),
    m = n(768762),
    p = n(585483),
    f = n(999382),
    h = n(213956),
    x = n(743475),
    b = n(983135),
    j = n(8426),
    _ = n(570961),
    v = n(208665),
    C = n(359191),
    O = n(84658),
    y = n(142961),
    N = n(729311),
    E = n(850864),
    I = n(729995),
    S = n(966301),
    T = n(707076),
    P = n(981631),
    w = n(388032),
    Z = n(344037);
function R() {
    let e = (0, a.e7)([f.Z], () => f.Z.getGuildId());
    return null == e ? null : (0, r.jsx)(D, { guildId: e });
}
function D(e) {
    let t,
        { guildId: n } = e,
        l = (0, a.e7)([C.Z], () => C.Z.getCurrentPage()),
        f = (0, a.e7)([C.Z], () => {
            let e = (0, O.lg)(l);
            return null != e && !C.Z.isEducationUpsellDismissed(e);
        }),
        v = (0, y.Z)(n),
        R = !v && f;
    switch (
        (i.useEffect(() => {
            (0, g.Q3)(o.z.COMMUNITY_ONBOARDING_NEW_BADGE);
        }, []),
        l)
    ) {
        case O.PG.LANDING:
            t = v
                ? (0, r.jsx)(I.Z, {
                      completed: !0,
                      guildId: n,
                  })
                : (0, r.jsx)(T.Z, {});
            break;
        case O.PG.SAFETY_CHECK:
            t = (0, r.jsx)(h.Z, {});
            break;
        case O.PG.DEFAULT_CHANNELS:
            t = (0, r.jsx)(N.Z, { saveOnClose: !v });
            break;
        case O.PG.CUSTOMIZATION_QUESTIONS:
            t = (0, r.jsx)(S.ZP, { saveOnClose: !v });
            break;
        case O.PG.HOME_SETTINGS:
            t = (0, r.jsx)(E.Z, { saveOnClose: !v });
            break;
        case O.PG.REVIEW:
            t = (0, r.jsx)(I.Z, {
                completed: v,
                guildId: n,
            });
    }
    return (0, r.jsxs)("div", {
        className: s()(Z.onboardingContainer, { [Z.upsellOnTop]: R }),
        children: [
            !v &&
                l !== O.PG.LANDING &&
                (0, r.jsx)(A, {
                    setOnboardingStep: b.$K,
                    page: l,
                    homeSettingsEnabled: !0,
                }),
            v &&
                l !== O.PG.LANDING &&
                (0, r.jsx)("div", {
                    children: (0, r.jsxs)(c.zx, {
                        innerClassName: Z.backButton,
                        look: c.zx.Looks.BLANK,
                        size: c.zx.Sizes.MIN,
                        onClick: () => {
                            if (C.Z.hasChanges() && !C.Z.canCloseEarly()) {
                                p.S.dispatch(P.CkL.SHAKE_APP, {
                                    duration: 300,
                                    intensity: u.$x,
                                }),
                                    p.S.dispatch(P.CkL.EMPHASIZE_NOTICE);
                                return;
                            }
                            (0, _.NB)(), (0, x.BG)(), (0, j.bj)(), (0, b.$K)(O.PG.LANDING);
                        },
                        children: [
                            (0, r.jsx)(m.Z, {
                                className: Z.arrow,
                                direction: m.Z.Directions.LEFT,
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: "text-sm/semibold",
                                color: "interactive-normal",
                                children: w.intl.string(w.t["13/7kZ"]),
                            }),
                        ],
                    }),
                }),
            (0, r.jsx)("div", { children: t }),
        ],
    });
}
function A(e) {
    let { page: t, setOnboardingStep: n, homeSettingsEnabled: i } = e,
        l = (0, a.e7)([C.Z], () => C.Z.hasErrors()),
        o = (e) => {
            if (!l) return () => n(e);
        },
        c = (0, a.e7)([v.Z], () => v.Z.advancedMode);
    return (0, r.jsxs)("div", {
        className: Z.progressContainer,
        children: [
            (0, r.jsxs)(d.P3F, {
                className: s()(Z.progressBarContainer, Z.clickableProgressBar),
                onClick: o(O.PG.SAFETY_CHECK),
                children: [
                    (0, r.jsx)("div", {
                        className: s()(Z.progressBar, { [Z.progressBarCurrent]: t === O.PG.SAFETY_CHECK }),
                    }),
                    (0, r.jsx)(d.Text, {
                        color: t === O.PG.SAFETY_CHECK ? "text-brand" : "text-muted",
                        variant: "text-xs/medium",
                        children: w.intl.format(w.t.Me5MmZ, { stepNumber: 1 }),
                    }),
                ],
            }),
            (0, r.jsxs)(d.P3F, {
                className: s()(Z.progressBarContainer, Z.clickableProgressBar),
                onClick: o(O.PG.DEFAULT_CHANNELS),
                children: [
                    (0, r.jsx)("div", {
                        className: s()(Z.progressBar, { [Z.progressBarCurrent]: t === O.PG.DEFAULT_CHANNELS }),
                    }),
                    (0, r.jsx)(d.Text, {
                        color: t === O.PG.DEFAULT_CHANNELS ? "text-brand" : "text-muted",
                        variant: "text-xs/medium",
                        children: c
                            ? w.intl.formatToPlainString(w.t["8mGhOz"], { stepNumber: 2 })
                            : w.intl.formatToPlainString(w.t.vxpuTU, { stepNumber: 2 }),
                    }),
                ],
            }),
            (0, r.jsxs)(d.P3F, {
                className: s()(Z.progressBarContainer, Z.clickableProgressBar),
                onClick: o(O.PG.CUSTOMIZATION_QUESTIONS),
                children: [
                    (0, r.jsx)("div", {
                        className: s()(Z.progressBar, { [Z.progressBarCurrent]: t === O.PG.CUSTOMIZATION_QUESTIONS }),
                    }),
                    (0, r.jsx)(d.Text, {
                        color: t === O.PG.CUSTOMIZATION_QUESTIONS ? "text-brand" : "text-muted",
                        variant: "text-xs/medium",
                        children: c
                            ? w.intl.formatToPlainString(w.t.vb6J5u, { stepNumber: 3 })
                            : w.intl.formatToPlainString(w.t.ZpdQqK, { stepNumber: 3 }),
                    }),
                ],
            }),
            i &&
                (0, r.jsxs)(d.P3F, {
                    className: s()(Z.progressBarContainer, Z.clickableProgressBar),
                    onClick: o(O.PG.HOME_SETTINGS),
                    children: [
                        (0, r.jsx)("div", {
                            className: s()(Z.progressBar, { [Z.progressBarCurrent]: t === O.PG.HOME_SETTINGS }),
                        }),
                        (0, r.jsx)(d.Text, {
                            color: t === O.PG.HOME_SETTINGS ? "text-brand" : "text-muted",
                            variant: "text-xs/medium",
                            children: w.intl.format(w.t.KVOukp, { stepNumber: 4 }),
                        }),
                    ],
                }),
            (0, r.jsxs)("div", {
                className: Z.progressBarContainer,
                children: [
                    (0, r.jsx)("div", { className: s()(Z.progressBar, { [Z.progressBarCurrent]: t === O.PG.REVIEW }) }),
                    (0, r.jsx)(d.Text, {
                        color: t === O.PG.REVIEW ? "text-brand" : "text-muted",
                        variant: "text-xs/medium",
                        children: w.intl.format(w.t.oVzkiI, { stepNumber: 3 + +!!i + 1 }),
                    }),
                ],
            }),
        ],
    });
}
