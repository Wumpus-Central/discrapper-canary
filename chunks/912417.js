n.d(t, { A: () => D }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(417597),
    s = n(990078),
    c = n(397927),
    a = n(58149),
    o = n(408213),
    d = n(60175),
    u = n(386784),
    f = n(954571),
    p = n(403362),
    b = n(591552),
    m = n(961973),
    g = n(218785),
    O = n(164048),
    x = n(839447),
    h = n(539916),
    j = n(652215),
    v = n(985018),
    y = n(22941);
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e, t) {
    return (0, r.jsx)(
        "span",
        {
            className: y.a1,
            children: e,
        },
        t,
    );
}
function P(e) {
    let {
            headerId: t,
            guild: n,
            step: i,
            lastPrompt: a,
            questionCount: o,
            currentPrompt: d,
            hasConnections: f,
            isSubmitting: p,
            selectOption: O,
            gotoPrevPrompt: h,
            gotoNextPrompt: j,
            completeOnboarding: A,
        } = e,
        P = (0, l.yK)([b.A], () => b.A.getOnboardingResponsesForPrompt(n.id, d.id)),
        E = 0 === P.length && (null == d ? void 0 : d.required),
        D = null == d ? void 0 : d.options.filter((e) => P.includes(e.id)),
        w = (0, m.a)(D),
        S = (0, m.vV)(D),
        C = 0 === P.length,
        { helpText: I, helpTextAdditional: k } = (0, g.A)({
            guild: n,
            prompt: d,
            selectedRoleIds: w,
            selectedChannelIds: S,
            itemHook: N,
        }),
        T = (0, u.A)(n.id, 1000),
        R = d.options.map((e) => _({ value: e.id }, e)),
        G = d.options.filter((e) => P.includes(e.id)).map((e) => e.id);
    return (0, r.jsx)("div", {
        className: y.J1,
        children: (0, r.jsxs)("div", {
            className: y.mK,
            children: [
                (0, r.jsxs)(c.IpV, {
                    className: y.gT,
                    children: [
                        (0, r.jsxs)("div", {
                            className: y.q,
                            children: [
                                (0, r.jsx)(c.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: v.intl.format(v.t.isV0NW, {
                                        currentQuestion: i + 1,
                                        questionCount: o,
                                    }),
                                }),
                                d.required
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(c.Text, {
                                                  variant: "text-xs/normal",
                                                  className: y.HE,
                                                  children: "\xB7",
                                              }),
                                              (0, r.jsx)(c.Text, {
                                                  variant: "text-sm/medium",
                                                  color: "text-brand",
                                                  children: v.intl.string(v.t.Ur8Vrt),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, r.jsx)(c.Heading, {
                            className: y.DD,
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            id: t,
                            children: d.title,
                        }),
                        (0, r.jsx)(x.A, {
                            options: R,
                            value: G,
                            onChange: (e) => {
                                let t = e.find((e) => !P.includes(e.id)),
                                    n = e.map((e) => e.id);
                                if (null != t) O(d.id, t.id, !0);
                                else {
                                    let e = P.filter((e) => !n.includes(e));
                                    d.options
                                        .filter((t) => e.includes(t.id))
                                        .forEach((e) => {
                                            O(d.id, e.id, !1);
                                        });
                                }
                            },
                            memberCounts: T,
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: y.N3,
                    children: [
                        (0, r.jsx)("div", {
                            className: y.X1,
                            children:
                                (i > 0 || f) &&
                                (0, r.jsx)(c.Button, {
                                    variant: "secondary",
                                    size: "md",
                                    text: v.intl.string(v.t["13/7kX"]),
                                    onClick: () => h(P.length),
                                    icon: c.Zge,
                                    iconPosition: "start",
                                }),
                        }),
                        (0, r.jsxs)("div", {
                            className: y.Oh,
                            children: [
                                (0, r.jsxs)(c.Text, {
                                    className: y.BK,
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [I, " ", k],
                                }),
                                (0, r.jsx)(s.m, {
                                    asContainer: !0,
                                    text: E ? v.intl.string(v.t.dA1dSf) : null,
                                    children: (0, r.jsx)(c.Button, {
                                        variant: C ? "secondary" : "primary",
                                        size: "md",
                                        text: a
                                            ? "".concat(v.intl.string(v.t["8SuVoE"]), " \uD83C\uDF89")
                                            : C
                                              ? v.intl.string(v.t["5Wxrcd"])
                                              : v.intl.string(v.t.PDTjLN),
                                        onClick: () => (a ? A() : j(P.length)),
                                        disabled: E || p,
                                        loading: p,
                                        icon: a ? void 0 : c.KS6,
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
function E(e) {
    let {
            headerId: t,
            guild: n,
            step: i,
            lastPrompt: a,
            questionCount: o,
            currentPrompt: d,
            hasConnections: u,
            isSubmitting: f,
            selectOption: p,
            gotoPrevPrompt: x,
            gotoNextPrompt: h,
            completeOnboarding: j,
        } = e,
        _ = (0, l.yK)([b.A], () => b.A.getOnboardingResponsesForPrompt(n.id, d.id)),
        A = 0 === _.length && (null == d ? void 0 : d.required),
        P = null == d ? void 0 : d.options.filter((e) => _.includes(e.id)),
        E = (0, m.a)(P),
        D = (0, m.vV)(P),
        w = 0 === _.length,
        { helpText: S, helpTextAdditional: C } = (0, g.A)({
            guild: n,
            prompt: d,
            selectedRoleIds: E,
            selectedChannelIds: D,
            itemHook: N,
        });
    return (0, r.jsx)("div", {
        className: y.J1,
        children: (0, r.jsxs)("div", {
            className: y.mK,
            children: [
                (0, r.jsxs)(c.IpV, {
                    className: y.gT,
                    children: [
                        (0, r.jsxs)("div", {
                            className: y.q,
                            children: [
                                (0, r.jsx)(c.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: v.intl.format(v.t.isV0NW, {
                                        currentQuestion: i + 1,
                                        questionCount: o,
                                    }),
                                }),
                                d.required
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(c.Text, {
                                                  variant: "text-xs/normal",
                                                  className: y.HE,
                                                  children: "\xB7",
                                              }),
                                              (0, r.jsx)(c.Text, {
                                                  variant: "text-sm/medium",
                                                  color: "text-brand",
                                                  children: v.intl.string(v.t.Ur8Vrt),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, r.jsx)(c.Heading, {
                            className: y.DD,
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            id: t,
                            children: d.title,
                        }),
                        (0, r.jsx)("div", {
                            className: y.vS,
                            children: d.options.map((e) =>
                                (0, r.jsx)(
                                    O.A,
                                    {
                                        guildId: n.id,
                                        option: e,
                                        onSelect: (t) => p(d.id, e.id, null != t && t),
                                        selected: _.includes(e.id),
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: y.N3,
                    children: [
                        (0, r.jsx)("div", {
                            className: y.X1,
                            children:
                                (i > 0 || u) &&
                                (0, r.jsx)(c.Button, {
                                    variant: "secondary",
                                    size: "md",
                                    text: v.intl.string(v.t["13/7kX"]),
                                    onClick: () => x(_.length),
                                    icon: c.Zge,
                                    iconPosition: "start",
                                }),
                        }),
                        (0, r.jsxs)("div", {
                            className: y.Oh,
                            children: [
                                (0, r.jsxs)(c.Text, {
                                    className: y.BK,
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [S, " ", C],
                                }),
                                (0, r.jsx)(s.m, {
                                    asContainer: !0,
                                    text: A ? v.intl.string(v.t.dA1dSf) : null,
                                    children: (0, r.jsx)(c.Button, {
                                        variant: w ? "secondary" : "primary",
                                        size: "md",
                                        text: a
                                            ? "".concat(v.intl.string(v.t["8SuVoE"]), " \uD83C\uDF89")
                                            : w
                                              ? v.intl.string(v.t["5Wxrcd"])
                                              : v.intl.string(v.t.PDTjLN),
                                        onClick: () => (a ? j() : h(_.length)),
                                        disabled: A || f,
                                        loading: f,
                                        icon: a ? void 0 : c.KS6,
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
function D(e) {
    let {
            guild: t,
            prompts: n,
            step: s,
            selectOption: c,
            completeOnboarding: u,
            setCurrentStep: g,
            headerId: O,
            disableTracking: x,
        } = e,
        [v, y] = i.useState(!1),
        N = (0, l.bG)([d.A], () => d.A.getRulesPrompt(t.id)),
        D = (0, l.bG)([b.A], () => b.A.getConnections(t.id)),
        w = i.useCallback(() => {
            y(!0), u();
        }, [u]);
    i.useEffect(() => {
        t.features.has(j.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            !t.features.has(j.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            o.Ay.fetchVerificationForm(t.id);
    }, [t]);
    let S = n[s],
        C = s + 1 >= n.length && !(0, m.L1)(t, N),
        I = n[0].required;
    i.useEffect(() => {
        x ||
            f.default.track(
                j.HAw.GUILD_ONBOARDING_STEP_VIEWED,
                A(_({}, (0, a.H$)(t.id)), {
                    step: 0,
                    required: I,
                }),
            );
    }, [t.id, I, x]);
    let k = (e) => {
            !x &&
                (f.default.track(
                    j.HAw.GUILD_ONBOARDING_STEP_COMPLETED,
                    A(_({}, (0, a.H$)(t.id)), {
                        step: s,
                        options_selected: e,
                        skipped: 0 === e,
                        back: !1,
                        in_onboarding: !0,
                        is_final_step: !1,
                    }),
                ),
                s < n.length - 1 &&
                    f.default.track(
                        j.HAw.GUILD_ONBOARDING_STEP_VIEWED,
                        A(_({}, (0, a.H$)(t.id)), {
                            step: s,
                            required: n[s + 1].required,
                        }),
                    )),
                s + 1 < n.length ? g(s + 1) : (0, m.L1)(t, N) && g("rules");
        },
        T = (e) => {
            !x &&
                (f.default.track(
                    j.HAw.GUILD_ONBOARDING_STEP_COMPLETED,
                    A(_({}, (0, a.H$)(t.id)), {
                        step: s,
                        skipped: !1,
                        back: !0,
                        options_selected: e,
                        in_onboarding: !0,
                        is_final_step: !1,
                    }),
                ),
                s > 0 &&
                    f.default.track(
                        j.HAw.GUILD_ONBOARDING_STEP_VIEWED,
                        A(_({}, (0, a.H$)(t.id)), {
                            step: s - 1,
                            required: n[s - 1].required,
                        }),
                    )),
                0 === s && D.length > 0 ? g("connections") : g(Math.max(0, s - 1));
        };
    if (null == S) return null;
    switch (S.type) {
        case h.ME.MULTIPLE_CHOICE:
            return (0, r.jsx)(E, {
                guild: t,
                headerId: O,
                step: s,
                questionCount: n.length,
                currentPrompt: S,
                lastPrompt: C,
                hasConnections: D.length > 0,
                isSubmitting: v,
                selectOption: c,
                gotoPrevPrompt: T,
                gotoNextPrompt: k,
                completeOnboarding: w,
            });
        case h.ME.DROPDOWN:
            return (0, r.jsx)(P, {
                guild: t,
                headerId: O,
                step: s,
                questionCount: n.length,
                currentPrompt: S,
                lastPrompt: C,
                hasConnections: D.length > 0,
                isSubmitting: v,
                selectOption: c,
                gotoPrevPrompt: T,
                gotoNextPrompt: k,
                completeOnboarding: w,
            });
        default:
            (0, p.xb)(S.type);
    }
}
