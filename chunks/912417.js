n.d(t, { A: () => S });
var i = n(627968),
    s = n(64700),
    l = n(417597),
    r = n(990078),
    a = n(573613),
    o = n(834730),
    c = n(534514),
    d = n(821609),
    u = n(548411),
    m = n(554830),
    _ = n(58149),
    p = n(408213),
    x = n(60175),
    g = n(386784),
    h = n(954571),
    f = n(403362),
    A = n(591552),
    v = n(961973),
    N = n(218785),
    E = n(164048),
    j = n(839447),
    b = n(539916),
    C = n(652215),
    I = n(985018),
    O = n(462918);
function D(e, t) {
    return (0, i.jsx)("span", { className: O.a1, children: e }, t);
}
function y(e) {
    let {
            headerId: t,
            guild: n,
            step: s,
            lastPrompt: _,
            questionCount: p,
            currentPrompt: x,
            hasConnections: h,
            isSubmitting: f,
            selectOption: E,
            gotoPrevPrompt: b,
            gotoNextPrompt: C,
            completeOnboarding: y,
        } = e,
        P = (0, l.yK)([A.A], () => A.A.getOnboardingResponsesForPrompt(n.id, x.id)),
        S = 0 === P.length && x?.required,
        k = x?.options.filter((e) => P.includes(e.id)),
        T = (0, v.a)(k),
        R = (0, v.vV)(k),
        L = 0 === P.length,
        { helpText: G, helpTextAdditional: w } = (0, N.A)({
            guild: n,
            prompt: x,
            selectedRoleIds: T,
            selectedChannelIds: R,
            itemHook: D,
        }),
        H = (0, g.A)(n.id, 1e3),
        V = x.options.map((e) => ({ value: e.id, ...e })),
        F = x.options.filter((e) => P.includes(e.id)).map((e) => e.id);
    return (0, i.jsx)("div", {
        className: O.J1,
        children: (0, i.jsxs)("div", {
            className: O.mK,
            children: [
                (0, i.jsxs)(a.Ip, {
                    className: O.gT,
                    children: [
                        (0, i.jsxs)("div", {
                            className: O.q,
                            children: [
                                (0, i.jsx)(o.E, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: I.intl.format(I.t.isV0NW, { currentQuestion: s + 1, questionCount: p }),
                                }),
                                x.required
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(o.E, {
                                                  variant: "text-xs/normal",
                                                  className: O.HE,
                                                  children: "\xb7",
                                              }),
                                              (0, i.jsx)(o.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-brand",
                                                  children: I.intl.string(I.t.Ur8Vrt),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, i.jsx)(c.D, {
                            className: O.DD,
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            id: t,
                            children: x.title,
                        }),
                        (0, i.jsx)(j.A, {
                            options: V,
                            value: F,
                            onChange: (e) => {
                                let t = e.find((e) => !P.includes(e.id)),
                                    n = e.map((e) => e.id);
                                if (null != t) E(x.id, t.id, !0);
                                else {
                                    let e = P.filter((e) => !n.includes(e));
                                    x.options
                                        .filter((t) => e.includes(t.id))
                                        .forEach((e) => {
                                            E(x.id, e.id, !1);
                                        });
                                }
                            },
                            memberCounts: H,
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: O.N3,
                    children: [
                        (0, i.jsx)("div", {
                            className: O.X1,
                            children:
                                (s > 0 || h) &&
                                (0, i.jsx)(d.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: I.intl.string(I.t["13/7kX"]),
                                    onClick: () => b(P.length),
                                    icon: u.Z,
                                    iconPosition: "start",
                                }),
                        }),
                        (0, i.jsxs)("div", {
                            className: O.Oh,
                            children: [
                                (0, i.jsxs)(o.E, {
                                    className: O.BK,
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [G, " ", w],
                                }),
                                (0, i.jsx)(r.m, {
                                    asContainer: !0,
                                    text: S ? I.intl.string(I.t.dA1dSf) : null,
                                    children: (0, i.jsx)(d.$, {
                                        variant: L ? "secondary" : "primary",
                                        size: "md",
                                        text: _
                                            ? `${I.intl.string(I.t["8SuVoE"])} 🎉`
                                            : L
                                              ? I.intl.string(I.t["5Wxrcd"])
                                              : I.intl.string(I.t.PDTjLN),
                                        onClick: () => (_ ? y() : C(P.length)),
                                        disabled: S || f,
                                        loading: f,
                                        icon: _ ? void 0 : m.K,
                                        iconPosition: "end",
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function P(e) {
    let {
            headerId: t,
            guild: n,
            step: s,
            lastPrompt: _,
            questionCount: p,
            currentPrompt: x,
            hasConnections: g,
            isSubmitting: h,
            selectOption: f,
            gotoPrevPrompt: j,
            gotoNextPrompt: b,
            completeOnboarding: C,
        } = e,
        y = (0, l.yK)([A.A], () => A.A.getOnboardingResponsesForPrompt(n.id, x.id)),
        P = 0 === y.length && x?.required,
        S = x?.options.filter((e) => y.includes(e.id)),
        k = (0, v.a)(S),
        T = (0, v.vV)(S),
        R = 0 === y.length,
        { helpText: L, helpTextAdditional: G } = (0, N.A)({
            guild: n,
            prompt: x,
            selectedRoleIds: k,
            selectedChannelIds: T,
            itemHook: D,
        });
    return (0, i.jsx)("div", {
        className: O.J1,
        children: (0, i.jsxs)("div", {
            className: O.mK,
            children: [
                (0, i.jsxs)(a.Ip, {
                    className: O.gT,
                    children: [
                        (0, i.jsxs)("div", {
                            className: O.q,
                            children: [
                                (0, i.jsx)(o.E, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: I.intl.format(I.t.isV0NW, { currentQuestion: s + 1, questionCount: p }),
                                }),
                                x.required
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(o.E, {
                                                  variant: "text-xs/normal",
                                                  className: O.HE,
                                                  children: "\xb7",
                                              }),
                                              (0, i.jsx)(o.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-brand",
                                                  children: I.intl.string(I.t.Ur8Vrt),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, i.jsx)(c.D, {
                            className: O.DD,
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            id: t,
                            children: x.title,
                        }),
                        (0, i.jsx)("div", {
                            className: O.vS,
                            children: x.options.map((e) =>
                                (0, i.jsx)(
                                    E.A,
                                    {
                                        guildId: n.id,
                                        option: e,
                                        onSelect: (t) => f(x.id, e.id, t ?? !1),
                                        selected: y.includes(e.id),
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: O.N3,
                    children: [
                        (0, i.jsx)("div", {
                            className: O.X1,
                            children:
                                (s > 0 || g) &&
                                (0, i.jsx)(d.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: I.intl.string(I.t["13/7kX"]),
                                    onClick: () => j(y.length),
                                    icon: u.Z,
                                    iconPosition: "start",
                                }),
                        }),
                        (0, i.jsxs)("div", {
                            className: O.Oh,
                            children: [
                                (0, i.jsxs)(o.E, {
                                    className: O.BK,
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [L, " ", G],
                                }),
                                (0, i.jsx)(r.m, {
                                    asContainer: !0,
                                    text: P ? I.intl.string(I.t.dA1dSf) : null,
                                    children: (0, i.jsx)(d.$, {
                                        variant: R ? "secondary" : "primary",
                                        size: "md",
                                        text: _
                                            ? `${I.intl.string(I.t["8SuVoE"])} 🎉`
                                            : R
                                              ? I.intl.string(I.t["5Wxrcd"])
                                              : I.intl.string(I.t.PDTjLN),
                                        onClick: () => (_ ? C() : b(y.length)),
                                        disabled: P || h,
                                        loading: h,
                                        icon: _ ? void 0 : m.K,
                                        iconPosition: "end",
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function S(e) {
    let {
            guild: t,
            prompts: n,
            step: r,
            selectOption: a,
            completeOnboarding: o,
            setCurrentStep: c,
            headerId: d,
            disableTracking: u,
        } = e,
        [m, g] = s.useState(!1),
        N = (0, l.bG)([x.A], () => x.A.getRulesPrompt(t.id)),
        E = (0, l.bG)([A.A], () => A.A.getConnections(t.id)),
        j = s.useCallback(() => {
            g(!0), o();
        }, [o]);
    s.useEffect(() => {
        t.features.has(C.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            !t.features.has(C.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            p.Ay.fetchVerificationForm(t.id);
    }, [t]);
    let I = n[r],
        O = r + 1 >= n.length && !(0, v.L1)(t, N),
        D = n[0].required;
    s.useEffect(() => {
        u || h.default.track(C.HAw.GUILD_ONBOARDING_STEP_VIEWED, { ...(0, _.H$)(t.id), step: 0, required: D });
    }, [t.id, D, u]);
    let S = (e) => {
            !u &&
                (h.default.track(C.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                    ...(0, _.H$)(t.id),
                    step: r,
                    options_selected: e,
                    skipped: 0 === e,
                    back: !1,
                    in_onboarding: !0,
                    is_final_step: !1,
                }),
                r < n.length - 1 &&
                    h.default.track(C.HAw.GUILD_ONBOARDING_STEP_VIEWED, {
                        ...(0, _.H$)(t.id),
                        step: r,
                        required: n[r + 1].required,
                    })),
                r + 1 < n.length ? c(r + 1) : (0, v.L1)(t, N) && c("rules");
        },
        k = (e) => {
            !u &&
                (h.default.track(C.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                    ...(0, _.H$)(t.id),
                    step: r,
                    skipped: !1,
                    back: !0,
                    options_selected: e,
                    in_onboarding: !0,
                    is_final_step: !1,
                }),
                r > 0 &&
                    h.default.track(C.HAw.GUILD_ONBOARDING_STEP_VIEWED, {
                        ...(0, _.H$)(t.id),
                        step: r - 1,
                        required: n[r - 1].required,
                    })),
                0 === r && E.length > 0 ? c("connections") : c(Math.max(0, r - 1));
        };
    if (null == I) return null;
    switch (I.type) {
        case b.ME.MULTIPLE_CHOICE:
            return (0, i.jsx)(P, {
                guild: t,
                headerId: d,
                step: r,
                questionCount: n.length,
                currentPrompt: I,
                lastPrompt: O,
                hasConnections: E.length > 0,
                isSubmitting: m,
                selectOption: a,
                gotoPrevPrompt: k,
                gotoNextPrompt: S,
                completeOnboarding: j,
            });
        case b.ME.DROPDOWN:
            return (0, i.jsx)(y, {
                guild: t,
                headerId: d,
                step: r,
                questionCount: n.length,
                currentPrompt: I,
                lastPrompt: O,
                hasConnections: E.length > 0,
                isSubmitting: m,
                selectOption: a,
                gotoPrevPrompt: k,
                gotoNextPrompt: S,
                completeOnboarding: j,
            });
        default:
            (0, f.xb)(I.type);
    }
}
