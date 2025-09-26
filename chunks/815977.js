n.d(t, { Z: () => D });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(704215),
    c = n(755721),
    d = n(481060),
    u = n(503089),
    m = n(266454),
    g = n(768762),
    p = n(585483),
    f = n(999382),
    h = n(213956),
    b = n(743475),
    x = n(983135),
    j = n(8426),
    v = n(570961),
    _ = n(208665),
    O = n(359191),
    y = n(84658),
    C = n(142961),
    N = n(729311),
    E = n(850864),
    I = n(729995),
    S = n(966301),
    T = n(707076),
    P = n(981631),
    w = n(388032),
    R = n(344037);
function D() {
    let e = (0, a.e7)([f.Z], () => f.Z.getGuildId());
    return null == e ? null : (0, r.jsx)(Z, { guildId: e });
}
function Z(e) {
    let t,
        { guildId: n } = e,
        l = (0, a.e7)([O.Z], () => O.Z.getCurrentPage()),
        f = (0, a.e7)([O.Z], () => {
            let e = (0, y.lg)(l);
            return null != e && !O.Z.isEducationUpsellDismissed(e);
        }),
        _ = (0, C.Z)(n),
        D = !_ && f;
    switch (
        (i.useEffect(() => {
            (0, m.Q3)(o.z.COMMUNITY_ONBOARDING_NEW_BADGE);
        }, []),
        l)
    ) {
        case y.PG.LANDING:
            t = _
                ? (0, r.jsx)(I.Z, {
                      completed: !0,
                      guildId: n,
                  })
                : (0, r.jsx)(T.Z, {});
            break;
        case y.PG.SAFETY_CHECK:
            t = (0, r.jsx)(h.Z, {});
            break;
        case y.PG.DEFAULT_CHANNELS:
            t = (0, r.jsx)(N.Z, { saveOnClose: !_ });
            break;
        case y.PG.CUSTOMIZATION_QUESTIONS:
            t = (0, r.jsx)(S.ZP, { saveOnClose: !_ });
            break;
        case y.PG.HOME_SETTINGS:
            t = (0, r.jsx)(E.Z, { saveOnClose: !_ });
            break;
        case y.PG.REVIEW:
            t = (0, r.jsx)(I.Z, {
                completed: _,
                guildId: n,
            });
    }
    return (0, r.jsxs)("div", {
        className: s()(R.onboardingContainer, { [R.upsellOnTop]: D }),
        children: [
            !_ &&
                l !== y.PG.LANDING &&
                (0, r.jsx)(A, {
                    setOnboardingStep: x.$K,
                    page: l,
                    homeSettingsEnabled: !0,
                }),
            _ &&
                l !== y.PG.LANDING &&
                (0, r.jsx)("div", {
                    children: (0, r.jsxs)(c.zx, {
                        innerClassName: R.backButton,
                        look: c.zx.Looks.BLANK,
                        size: c.zx.Sizes.MIN,
                        onClick: () => {
                            if (O.Z.hasChanges() && !O.Z.canCloseEarly()) {
                                p.S.dispatch(P.CkL.SHAKE_APP, {
                                    duration: 300,
                                    intensity: u.$x,
                                }),
                                    p.S.dispatch(P.CkL.EMPHASIZE_NOTICE);
                                return;
                            }
                            (0, v.NB)(), (0, b.BG)(), (0, j.bj)(), (0, x.$K)(y.PG.LANDING);
                        },
                        children: [
                            (0, r.jsx)(g.Z, {
                                className: R.arrow,
                                direction: g.Z.Directions.LEFT,
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
        l = (0, a.e7)([O.Z], () => O.Z.hasErrors()),
        o = (e) => {
            if (!l) return () => n(e);
        },
        c = (0, a.e7)([_.Z], () => _.Z.advancedMode);
    return (0, r.jsxs)("div", {
        className: R.progressContainer,
        children: [
            (0, r.jsxs)(d.P3F, {
                className: s()(R.progressBarContainer, R.clickableProgressBar),
                onClick: o(y.PG.SAFETY_CHECK),
                children: [
                    (0, r.jsx)("div", {
                        className: s()(R.progressBar, { [R.progressBarCurrent]: t === y.PG.SAFETY_CHECK }),
                    }),
                    (0, r.jsx)(d.Text, {
                        color: t === y.PG.SAFETY_CHECK ? "text-brand" : "text-muted",
                        variant: "text-xs/medium",
                        children: w.intl.format(w.t.Me5MmZ, { stepNumber: 1 }),
                    }),
                ],
            }),
            (0, r.jsxs)(d.P3F, {
                className: s()(R.progressBarContainer, R.clickableProgressBar),
                onClick: o(y.PG.DEFAULT_CHANNELS),
                children: [
                    (0, r.jsx)("div", {
                        className: s()(R.progressBar, { [R.progressBarCurrent]: t === y.PG.DEFAULT_CHANNELS }),
                    }),
                    (0, r.jsx)(d.Text, {
                        color: t === y.PG.DEFAULT_CHANNELS ? "text-brand" : "text-muted",
                        variant: "text-xs/medium",
                        children: c
                            ? w.intl.formatToPlainString(w.t["8mGhOz"], { stepNumber: 2 })
                            : w.intl.formatToPlainString(w.t.vxpuTU, { stepNumber: 2 }),
                    }),
                ],
            }),
            (0, r.jsxs)(d.P3F, {
                className: s()(R.progressBarContainer, R.clickableProgressBar),
                onClick: o(y.PG.CUSTOMIZATION_QUESTIONS),
                children: [
                    (0, r.jsx)("div", {
                        className: s()(R.progressBar, { [R.progressBarCurrent]: t === y.PG.CUSTOMIZATION_QUESTIONS }),
                    }),
                    (0, r.jsx)(d.Text, {
                        color: t === y.PG.CUSTOMIZATION_QUESTIONS ? "text-brand" : "text-muted",
                        variant: "text-xs/medium",
                        children: c
                            ? w.intl.formatToPlainString(w.t.vb6J5u, { stepNumber: 3 })
                            : w.intl.formatToPlainString(w.t.ZpdQqK, { stepNumber: 3 }),
                    }),
                ],
            }),
            i &&
                (0, r.jsxs)(d.P3F, {
                    className: s()(R.progressBarContainer, R.clickableProgressBar),
                    onClick: o(y.PG.HOME_SETTINGS),
                    children: [
                        (0, r.jsx)("div", {
                            className: s()(R.progressBar, { [R.progressBarCurrent]: t === y.PG.HOME_SETTINGS }),
                        }),
                        (0, r.jsx)(d.Text, {
                            color: t === y.PG.HOME_SETTINGS ? "text-brand" : "text-muted",
                            variant: "text-xs/medium",
                            children: w.intl.format(w.t.KVOukp, { stepNumber: 4 }),
                        }),
                    ],
                }),
            (0, r.jsxs)("div", {
                className: R.progressBarContainer,
                children: [
                    (0, r.jsx)("div", { className: s()(R.progressBar, { [R.progressBarCurrent]: t === y.PG.REVIEW }) }),
                    (0, r.jsx)(d.Text, {
                        color: t === y.PG.REVIEW ? "text-brand" : "text-muted",
                        variant: "text-xs/medium",
                        children: w.intl.format(w.t.oVzkiI, { stepNumber: 3 + +!!i + 1 }),
                    }),
                ],
            }),
        ],
    });
}
