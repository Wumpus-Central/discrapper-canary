n.d(t, { A: () => I });
var i = n(627968),
    s = n(64700),
    l = n(417597),
    r = n(990078),
    a = n(397927),
    o = n(58149),
    c = n(408213),
    d = n(60175),
    u = n(386784),
    m = n(954571),
    _ = n(403362),
    x = n(591552),
    p = n(961973),
    g = n(218785),
    h = n(164048),
    f = n(839447),
    A = n(539916),
    v = n(652215),
    N = n(985018),
    j = n(702486);
function b(e, t) {
    return (0, i.jsx)("span", { className: j.a1, children: e }, t);
}
function E(e) {
    let {
            headerId: t,
            guild: n,
            step: s,
            lastPrompt: o,
            questionCount: c,
            currentPrompt: d,
            hasConnections: m,
            isSubmitting: _,
            selectOption: h,
            gotoPrevPrompt: A,
            gotoNextPrompt: v,
            completeOnboarding: E,
        } = e,
        C = (0, l.yK)([x.A], () => x.A.getOnboardingResponsesForPrompt(n.id, d.id)),
        I = 0 === C.length && d?.required,
        O = d?.options.filter((e) => C.includes(e.id)),
        T = (0, p.a)(O),
        y = (0, p.vV)(O),
        D = 0 === C.length,
        { helpText: S, helpTextAdditional: P } = (0, g.A)({
            guild: n,
            prompt: d,
            selectedRoleIds: T,
            selectedChannelIds: y,
            itemHook: b,
        }),
        k = (0, u.A)(n.id, 1e3),
        R = d.options.map((e) => ({ value: e.id, ...e })),
        L = d.options.filter((e) => C.includes(e.id)).map((e) => e.id);
    return (0, i.jsx)("div", {
        className: j.J1,
        children: (0, i.jsxs)("div", {
            className: j.mK,
            children: [
                (0, i.jsxs)(a.IpV, {
                    className: j.gT,
                    children: [
                        (0, i.jsxs)("div", {
                            className: j.q,
                            children: [
                                (0, i.jsx)(a.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: N.intl.format(N.t.isV0NW, { currentQuestion: s + 1, questionCount: c }),
                                }),
                                d.required
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(a.Text, {
                                                  variant: "text-xs/normal",
                                                  className: j.HE,
                                                  children: "\xb7",
                                              }),
                                              (0, i.jsx)(a.Text, {
                                                  variant: "text-sm/medium",
                                                  color: "text-brand",
                                                  children: N.intl.string(N.t.Ur8Vrt),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, i.jsx)(a.Heading, {
                            className: j.DD,
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            id: t,
                            children: d.title,
                        }),
                        (0, i.jsx)(f.A, {
                            options: R,
                            value: L,
                            onChange: (e) => {
                                let t = e.find((e) => !C.includes(e.id)),
                                    n = e.map((e) => e.id);
                                if (null != t) h(d.id, t.id, !0);
                                else {
                                    let e = C.filter((e) => !n.includes(e));
                                    d.options
                                        .filter((t) => e.includes(t.id))
                                        .forEach((e) => {
                                            h(d.id, e.id, !1);
                                        });
                                }
                            },
                            memberCounts: k,
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: j.N3,
                    children: [
                        (0, i.jsx)("div", {
                            className: j.X1,
                            children:
                                (s > 0 || m) &&
                                (0, i.jsx)(a.Button, {
                                    variant: "secondary",
                                    size: "md",
                                    text: N.intl.string(N.t["13/7kX"]),
                                    onClick: () => A(C.length),
                                    icon: a.Zge,
                                    iconPosition: "start",
                                }),
                        }),
                        (0, i.jsxs)("div", {
                            className: j.Oh,
                            children: [
                                (0, i.jsxs)(a.Text, {
                                    className: j.BK,
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [S, " ", P],
                                }),
                                (0, i.jsx)(r.m, {
                                    asContainer: !0,
                                    text: I ? N.intl.string(N.t.dA1dSf) : null,
                                    children: (0, i.jsx)(a.Button, {
                                        variant: D ? "secondary" : "primary",
                                        size: "md",
                                        text: o
                                            ? `${N.intl.string(N.t["8SuVoE"])} 🎉`
                                            : D
                                              ? N.intl.string(N.t["5Wxrcd"])
                                              : N.intl.string(N.t.PDTjLN),
                                        onClick: () => (o ? E() : v(C.length)),
                                        disabled: I || _,
                                        loading: _,
                                        icon: o ? void 0 : a.KS6,
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
function C(e) {
    let {
            headerId: t,
            guild: n,
            step: s,
            lastPrompt: o,
            questionCount: c,
            currentPrompt: d,
            hasConnections: u,
            isSubmitting: m,
            selectOption: _,
            gotoPrevPrompt: f,
            gotoNextPrompt: A,
            completeOnboarding: v,
        } = e,
        E = (0, l.yK)([x.A], () => x.A.getOnboardingResponsesForPrompt(n.id, d.id)),
        C = 0 === E.length && d?.required,
        I = d?.options.filter((e) => E.includes(e.id)),
        O = (0, p.a)(I),
        T = (0, p.vV)(I),
        y = 0 === E.length,
        { helpText: D, helpTextAdditional: S } = (0, g.A)({
            guild: n,
            prompt: d,
            selectedRoleIds: O,
            selectedChannelIds: T,
            itemHook: b,
        });
    return (0, i.jsx)("div", {
        className: j.J1,
        children: (0, i.jsxs)("div", {
            className: j.mK,
            children: [
                (0, i.jsxs)(a.IpV, {
                    className: j.gT,
                    children: [
                        (0, i.jsxs)("div", {
                            className: j.q,
                            children: [
                                (0, i.jsx)(a.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: N.intl.format(N.t.isV0NW, { currentQuestion: s + 1, questionCount: c }),
                                }),
                                d.required
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(a.Text, {
                                                  variant: "text-xs/normal",
                                                  className: j.HE,
                                                  children: "\xb7",
                                              }),
                                              (0, i.jsx)(a.Text, {
                                                  variant: "text-sm/medium",
                                                  color: "text-brand",
                                                  children: N.intl.string(N.t.Ur8Vrt),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, i.jsx)(a.Heading, {
                            className: j.DD,
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            id: t,
                            children: d.title,
                        }),
                        (0, i.jsx)("div", {
                            className: j.vS,
                            children: d.options.map((e) =>
                                (0, i.jsx)(
                                    h.A,
                                    {
                                        guildId: n.id,
                                        option: e,
                                        onSelect: (t) => _(d.id, e.id, t ?? !1),
                                        selected: E.includes(e.id),
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: j.N3,
                    children: [
                        (0, i.jsx)("div", {
                            className: j.X1,
                            children:
                                (s > 0 || u) &&
                                (0, i.jsx)(a.Button, {
                                    variant: "secondary",
                                    size: "md",
                                    text: N.intl.string(N.t["13/7kX"]),
                                    onClick: () => f(E.length),
                                    icon: a.Zge,
                                    iconPosition: "start",
                                }),
                        }),
                        (0, i.jsxs)("div", {
                            className: j.Oh,
                            children: [
                                (0, i.jsxs)(a.Text, {
                                    className: j.BK,
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [D, " ", S],
                                }),
                                (0, i.jsx)(r.m, {
                                    asContainer: !0,
                                    text: C ? N.intl.string(N.t.dA1dSf) : null,
                                    children: (0, i.jsx)(a.Button, {
                                        variant: y ? "secondary" : "primary",
                                        size: "md",
                                        text: o
                                            ? `${N.intl.string(N.t["8SuVoE"])} 🎉`
                                            : y
                                              ? N.intl.string(N.t["5Wxrcd"])
                                              : N.intl.string(N.t.PDTjLN),
                                        onClick: () => (o ? v() : A(E.length)),
                                        disabled: C || m,
                                        loading: m,
                                        icon: o ? void 0 : a.KS6,
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
function I(e) {
    let {
            guild: t,
            prompts: n,
            step: r,
            selectOption: a,
            completeOnboarding: u,
            setCurrentStep: g,
            headerId: h,
            disableTracking: f,
        } = e,
        [N, j] = s.useState(!1),
        b = (0, l.bG)([d.A], () => d.A.getRulesPrompt(t.id)),
        I = (0, l.bG)([x.A], () => x.A.getConnections(t.id)),
        O = s.useCallback(() => {
            j(!0), u();
        }, [u]);
    s.useEffect(() => {
        t.features.has(v.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            !t.features.has(v.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            c.Ay.fetchVerificationForm(t.id);
    }, [t]);
    let T = n[r],
        y = r + 1 >= n.length && !(0, p.L1)(t, b),
        D = n[0].required;
    s.useEffect(() => {
        f || m.default.track(v.HAw.GUILD_ONBOARDING_STEP_VIEWED, { ...(0, o.H$)(t.id), step: 0, required: D });
    }, [t.id, D, f]);
    let S = (e) => {
            !f &&
                (m.default.track(v.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                    ...(0, o.H$)(t.id),
                    step: r,
                    options_selected: e,
                    skipped: 0 === e,
                    back: !1,
                    in_onboarding: !0,
                    is_final_step: !1,
                }),
                r < n.length - 1 &&
                    m.default.track(v.HAw.GUILD_ONBOARDING_STEP_VIEWED, {
                        ...(0, o.H$)(t.id),
                        step: r,
                        required: n[r + 1].required,
                    })),
                r + 1 < n.length ? g(r + 1) : (0, p.L1)(t, b) && g("rules");
        },
        P = (e) => {
            !f &&
                (m.default.track(v.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                    ...(0, o.H$)(t.id),
                    step: r,
                    skipped: !1,
                    back: !0,
                    options_selected: e,
                    in_onboarding: !0,
                    is_final_step: !1,
                }),
                r > 0 &&
                    m.default.track(v.HAw.GUILD_ONBOARDING_STEP_VIEWED, {
                        ...(0, o.H$)(t.id),
                        step: r - 1,
                        required: n[r - 1].required,
                    })),
                0 === r && I.length > 0 ? g("connections") : g(Math.max(0, r - 1));
        };
    if (null == T) return null;
    switch (T.type) {
        case A.ME.MULTIPLE_CHOICE:
            return (0, i.jsx)(C, {
                guild: t,
                headerId: h,
                step: r,
                questionCount: n.length,
                currentPrompt: T,
                lastPrompt: y,
                hasConnections: I.length > 0,
                isSubmitting: N,
                selectOption: a,
                gotoPrevPrompt: P,
                gotoNextPrompt: S,
                completeOnboarding: O,
            });
        case A.ME.DROPDOWN:
            return (0, i.jsx)(E, {
                guild: t,
                headerId: h,
                step: r,
                questionCount: n.length,
                currentPrompt: T,
                lastPrompt: y,
                hasConnections: I.length > 0,
                isSubmitting: N,
                selectOption: a,
                gotoPrevPrompt: P,
                gotoNextPrompt: S,
                completeOnboarding: O,
            });
        default:
            (0, _.xb)(T.type);
    }
}
