n.d(e, { default: () => R }), n(321073), n(228524), n(896048);
var i = n(627968),
    l = n(64700),
    s = n(136722),
    r = n(311907),
    o = n(827734),
    a = n(397927),
    c = n(47167),
    u = n(997509),
    d = n(555337),
    p = n(636042),
    g = n(376092),
    f = n(808728),
    x = n(317525),
    S = n(994500),
    j = n(287809),
    m = n(954571),
    b = n(975571),
    h = n(488926),
    E = n(455207),
    y = n(124759),
    v = n(652215),
    O = n(985018),
    C = n(513804),
    I = n(796343);
function P() {
    return (P =
        Object.assign ||
        function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
            return t;
        }).apply(this, arguments);
}
function A(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }),
            )),
            i.forEach(function (e) {
                var i;
                (i = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = i);
            });
    }
    return t;
}
function N(t, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(e)).forEach(function (n) {
                  Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
              }),
        t
    );
}
function M(t) {
    let { guild: e, verificationLevelMet: n, contentFilterMet: s } = t;
    return (
        l.useEffect(() => {
            (0, E.sx)({
                fromStep: y.pj.INTRO,
                toStep: y.pj.SAFETY_CHECK,
                guildId: e.id,
            });
        }, [e.id]),
        (0, i.jsxs)(a.BJc, {
            gap: 12,
            children: [
                !n &&
                    (0, i.jsx)(L, {
                        title: O.intl.string(O.t["rkA56+"]),
                        description: O.intl.string(O.t.fHiGA0),
                    }),
                !s &&
                    (0, i.jsx)(L, {
                        title: O.intl.string(O.t.COu4bk),
                        description: O.intl.string(O.t.b0MaDV),
                    }),
            ],
        })
    );
}
function w(t) {
    let {
        guild: e,
        rulesChannelId: n,
        publicUpdatesChannelId: s,
        onRulesChannelChange: o,
        onPublicUpdatesChannelChange: u,
    } = t;
    l.useEffect(() => {
        (0, E.sx)({
            fromStep: y.pj.SAFETY_CHECK,
            toStep: y.pj.BASICS,
            guildId: e.id,
        });
    }, [e.id]);
    let d = (0, r.bG)([f.Ay], () => (null != e ? f.Ay.getChannels(e.id) : null)),
        p = l.useCallback(
            (t) => ({
                id: t.value,
                value: t.value,
                label: t.label,
            }),
            [],
        ),
        g = [
            {
                value: y.SP,
                label: O.intl.string(O.t.Cla0re),
            },
        ];
    return (
        d[f.I6].forEach((t) => {
            let { channel: e } = t;
            e.type === v.rbe.GUILD_TEXT &&
                g.push({
                    value: e.id,
                    label: (0, c.m1)(e, j.default, S.A, !0),
                });
        }),
        (0, i.jsxs)(a.BJc, {
            gap: 16,
            children: [
                (0, i.jsx)(a.ZiE, {
                    label: O.intl.string(O.t.dYrhCO),
                    description: O.intl.string(O.t["+Af+Vw"]),
                    options: g,
                    formatOption: p,
                    onSelectionChange: (t) => o(null != t ? t : y.SP),
                    selectionMode: "single",
                    value: n,
                }),
                (0, i.jsx)(a.ZiE, {
                    label: O.intl.string(O.t.vAyDGU),
                    description: O.intl.string(O.t.ZFeonu),
                    options: g,
                    formatOption: p,
                    onSelectionChange: (t) => u(null != t ? t : y.SP),
                    selectionMode: "single",
                    value: s,
                }),
            ],
        })
    );
}
function L(t) {
    let { title: e, description: n } = t;
    return (0, i.jsxs)(a.BJc, {
        direction: "horizontal",
        gap: 8,
        align: "start",
        children: [
            (0, i.jsx)(a.yr3, {
                size: "sm",
                className: C.aV,
                color: o.A.colors.ICON_FEEDBACK_POSITIVE,
            }),
            (0, i.jsxs)(a.BJc, {
                gap: 4,
                children: [
                    (0, i.jsx)(a.Text, {
                        variant: "text-md/normal",
                        children: e,
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        children: n,
                    }),
                ],
            }),
        ],
    });
}
function T(t) {
    let { enabledPermissions: e, onGetPermisisonName: n } = t;
    return (0, i.jsxs)("div", {
        className: C.CZ,
        children: [
            (0, i.jsx)(a.Text, {
                className: C.qd,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: O.intl.string(O.t.xU8RDk),
            }),
            (0, i.jsx)("div", {
                className: C.lM,
                children: e.map((t, e) =>
                    (0, i.jsxs)(
                        "div",
                        {
                            className: C.ce,
                            children: [
                                (0, i.jsx)("div", { className: C.dT }),
                                (0, i.jsx)(a.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: n(t),
                                }),
                            ],
                        },
                        e,
                    ),
                ),
            }),
        ],
    });
}
function _(t) {
    let { disabledPermissions: e, onGetPermisisonName: n } = t,
        l = O.intl.string(O.t.Yo5qlq);
    return (
        e.length === y.dR.length && (l = O.intl.string(O.t.FgMS6i)),
        (0, i.jsxs)("div", {
            className: C.CZ,
            children: [
                (0, i.jsx)(a.Text, {
                    className: C.qd,
                    variant: "text-xs/semibold",
                    color: "text-muted",
                    children: l,
                }),
                (0, i.jsx)("div", {
                    className: C.lM,
                    children: e.map((t, e) =>
                        (0, i.jsxs)(
                            "div",
                            {
                                className: C.ce,
                                children: [
                                    (0, i.jsx)("div", { className: C.xE }),
                                    (0, i.jsx)(a.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: n(t),
                                    }),
                                ],
                            },
                            e,
                        ),
                    ),
                }),
            ],
        })
    );
}
function D(t) {
    let { permissions: e } = t,
        n = (t) => {
            switch (t.toString()) {
                case v.xBc.MENTION_EVERYONE.toString():
                    return O.intl.string(O.t.yCpsQw);
                case v.xBc.CREATE_GUILD_EXPRESSIONS.toString():
                    return O.intl.string(O.t.vo2LdY);
                case v.xBc.MANAGE_GUILD_EXPRESSIONS.toString():
                    return O.intl.string(O.t.cmp2W6);
                default:
                    return (0, g.hx)(t);
            }
        },
        { enabledPermissions: l, disabledPermissions: s } = e;
    return (0, i.jsxs)("div", {
        className: C.tp,
        children: [
            0 !== l.length
                ? (0, i.jsx)(T, {
                      enabledPermissions: l,
                      onGetPermisisonName: n,
                  })
                : null,
            (0, i.jsx)(_, {
                disabledPermissions: s,
                onGetPermisisonName: n,
            }),
        ],
    });
}
function B(t) {
    let { guild: e, defaultNotificationSettingsMet: n, everyonePermissionsMet: s } = t;
    l.useEffect(() => {
        (0, E.sx)({
            fromStep: y.pj.BASICS,
            toStep: y.pj.FINISH,
            guildId: e.id,
        });
    }, [e.id]);
    let r = l.useMemo(() => {
        let t = [],
            n = [];
        return (
            y.dR.map((i) => {
                h.Ib(i, e) ? t.push(i) : n.push(i);
            }),
            {
                enabledPermissions: t,
                disabledPermissions: n,
            }
        );
    }, [e]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(a.BJc, {
                gap: 12,
                children: [
                    !n &&
                        (0, i.jsx)(L, {
                            title: O.intl.string(O.t.uPYswy),
                            description: O.intl.string(O.t.pf6ptp),
                        }),
                    !s &&
                        (0, i.jsx)(L, {
                            title: O.intl.format(O.t.IYQeOA, {}),
                            description: O.intl.string(O.t["+Iyaif"]),
                        }),
                ],
            }),
            !s && (0, i.jsx)(D, { permissions: r }),
        ],
    });
}
function G(t) {
    let { guild: e, policyAccepted: n, onPolicyAcceptedChange: s } = t;
    return (
        l.useEffect(() => {
            (0, E.sx)({
                fromStep: y.pj.BASICS,
                toStep: y.pj.RULES,
                guildId: e.id,
            });
        }, [e.id]),
        (0, i.jsx)(a.D0$, {
            label: O.intl.string(O.t["k+b2Cf"]),
            description: O.intl.format(O.t["BwbW/Q"], {
                communityGuidelines: b.A.getArticleURL(v.MVz.PUBLIC_GUILD_GUILDLINES),
                typesOfGuilds: b.A.getArticleURL(v.MVz.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES),
            }),
            children: (0, i.jsx)(a.Checkbox, {
                label: O.intl.string(O.t["9AG3wI"]),
                checked: n,
                onChange: s,
            }),
        })
    );
}
function R(t) {
    let {} = t,
        e = P({}, t);
    l.useEffect(() => {
        m.default.track(v.HAw.OPEN_MODAL, { type: y.bK });
    }, []);
    let { guild: n } = (0, r.cf)([d.A], () => d.A.getProps()),
        [o, c] = l.useState("intro"),
        [g] = l.useState(() => (null == n ? void 0 : n.verificationLevel)),
        [f] = l.useState(() => (null == n ? void 0 : n.explicitContentFilter)),
        S = null != g && g > v.PvD.NONE,
        j = f === v.gh6.ALL_MEMBERS,
        b = !(S && j),
        [C, L] = l.useState(y.SP),
        [T, _] = l.useState(y.SP),
        [D] = l.useState(() => !y.dR.some((t) => h.Ib(t, n))),
        [R] = l.useState(() => (null == n ? void 0 : n.defaultMessageNotifications)),
        Y = R === v.orn.ONLY_MENTIONS,
        F = !Y || !D,
        K = (0, r.bG)([x.A], () => (null != n ? x.A.getEveryoneRole(n) : void 0)),
        [U, k] = l.useState(!1);
    if (null == n) return null;
    let H = async () => {
            if (null == K || !U) return;
            let t = D ? null : s.TF(K.permissions, y.e$);
            if (null != t && t !== K.permissions) {
                let e = N(A({}, K), { permissions: t });
                await (0, p.JY)(n.id, [e], void 0, void 0, void 0, { throwErr: !0 });
            }
            let e = A(
                {
                    features: new Set([...n.features, v.GuildFeatures.COMMUNITY]),
                    rulesChannelId: C,
                    publicUpdatesChannelId: T,
                },
                !S && { verificationLevel: v.PvD.LOW },
                !j && { explicitContentFilter: v.gh6.ALL_MEMBERS },
                !Y && { defaultMessageNotifications: v.orn.ONLY_MENTIONS },
            );
            u.A.updateGuild(e), await u.A.saveGuild(n.id, e, { throwErr: !0 });
        },
        J = async () => {
            m.default.track(v.HAw.MODAL_DISMISSED, { type: y.bK }), await e.onClose();
        },
        V = [
            {
                stepKey: y.pj.INTRO,
                modalProps: {
                    title: O.intl.string(O.t.ElKTeb),
                    subtitle: O.intl.string(O.t["CwC/ll"]),
                    graphic: {
                        src: I.A,
                        type: "image",
                    },
                    gradientColor: "blue",
                },
                nextButtonProps: { text: O.intl.string(O.t.LhlgY9) },
            },
            {
                stepKey: y.pj.SAFETY_CHECK,
                modalProps: {
                    title: O.intl.string(O.t.QrjLYl),
                    subtitle: O.intl.string(O.t.i1STwu),
                },
                body: (0, i.jsx)(M, {
                    guild: n,
                    verificationLevelMet: S,
                    contentFilterMet: j,
                }),
                nextButtonProps: { text: O.intl.string(O.t.JFfins) },
            },
            {
                stepKey: y.pj.BASICS,
                modalProps: {
                    title: O.intl.string(O.t.YtXpEh),
                    subtitle: O.intl.string(O.t["J/fYR8"]),
                },
                body: (0, i.jsx)(w, {
                    guild: n,
                    rulesChannelId: C,
                    publicUpdatesChannelId: T,
                    onRulesChannelChange: L,
                    onPublicUpdatesChannelChange: _,
                }),
            },
            {
                stepKey: y.pj.FINISH,
                modalProps: { title: O.intl.string(O.t.EzGuSr) },
                body: (0, i.jsx)(B, {
                    guild: n,
                    defaultNotificationSettingsMet: Y,
                    everyonePermissionsMet: D,
                }),
                nextButtonProps: { text: O.intl.string(O.t.JFfins) },
            },
            {
                stepKey: y.pj.RULES,
                modalProps: { title: O.intl.string(O.t["Pj/s/a"]) },
                nextButtonProps: { text: O.intl.string(O.t.XGl4ba) },
                body: (0, i.jsx)(G, {
                    guild: n,
                    policyAccepted: U,
                    onPolicyAcceptedChange: k,
                }),
                nextEnabled: U,
            },
        ].filter((t) => (t.stepKey !== y.pj.SAFETY_CHECK || !!b) && (t.stepKey !== y.pj.FINISH || !!F)),
        z = V.slice(1).map((t) => t.stepKey);
    return (0, i.jsx)(
        a.t04,
        N(A({}, e), {
            steps: V,
            numberedSteps: z,
            currentStepKey: o,
            onClose: J,
            onStepChange: (t, e) => {
                (0, E.sx)({
                    fromStep: e,
                    toStep: t,
                    guildId: n.id,
                }),
                    c(t);
            },
            onComplete: H,
        }),
    );
}
