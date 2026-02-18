i.d(e, { default: () => G }), i(321073);
var n = i(627968),
    s = i(64700),
    l = i(136722),
    r = i(311907),
    a = i(827734),
    o = i(397927),
    d = i(47167),
    c = i(997509),
    u = i(555337),
    p = i(636042),
    x = i(376092),
    g = i(808728),
    S = i(317525),
    m = i(994500),
    f = i(287809),
    h = i(954571),
    j = i(975571),
    E = i(488926),
    C = i(455207),
    I = i(124759),
    A = i(652215),
    N = i(985018),
    b = i(513804),
    v = i(123033);
function y(t) {
    let { guild: e, verificationLevelMet: i, contentFilterMet: l } = t;
    return (
        s.useEffect(() => {
            (0, C.sx)({ fromStep: I.pj.INTRO, toStep: I.pj.SAFETY_CHECK, guildId: e.id });
        }, [e.id]),
        (0, n.jsxs)(o.BJc, {
            gap: 12,
            children: [
                !i && (0, n.jsx)(M, { title: N.intl.string(N.t["rkA56+"]), description: N.intl.string(N.t.fHiGA0) }),
                !l && (0, n.jsx)(M, { title: N.intl.string(N.t.COu4bk), description: N.intl.string(N.t.b0MaDV) }),
            ],
        })
    );
}
function P(t) {
    let {
        guild: e,
        rulesChannelId: i,
        publicUpdatesChannelId: l,
        onRulesChannelChange: a,
        onPublicUpdatesChannelChange: c,
    } = t;
    s.useEffect(() => {
        (0, C.sx)({ fromStep: I.pj.SAFETY_CHECK, toStep: I.pj.BASICS, guildId: e.id });
    }, [e.id]);
    let u = (0, r.bG)([g.Ay], () => (null != e ? g.Ay.getChannels(e.id) : null)),
        p = s.useCallback((t) => ({ id: t.value, value: t.value, label: t.label }), []),
        x = [{ value: I.SP, label: N.intl.string(N.t.Cla0re) }];
    return (
        u[g.I6].forEach((t) => {
            let { channel: e } = t;
            e.type === A.rbe.GUILD_TEXT && x.push({ value: e.id, label: (0, d.m1)(e, f.default, m.A, !0) });
        }),
        (0, n.jsxs)(o.BJc, {
            gap: 16,
            children: [
                (0, n.jsx)(o.ZiE, {
                    label: N.intl.string(N.t.dYrhCO),
                    description: N.intl.string(N.t["+Af+Vw"]),
                    options: x,
                    formatOption: p,
                    onSelectionChange: (t) => a(t ?? I.SP),
                    selectionMode: "single",
                    value: i,
                }),
                (0, n.jsx)(o.ZiE, {
                    label: N.intl.string(N.t.vAyDGU),
                    description: N.intl.string(N.t.ZFeonu),
                    options: x,
                    formatOption: p,
                    onSelectionChange: (t) => c(t ?? I.SP),
                    selectionMode: "single",
                    value: l,
                }),
            ],
        })
    );
}
function M(t) {
    let { title: e, description: i } = t;
    return (0, n.jsxs)(o.BJc, {
        direction: "horizontal",
        gap: 8,
        align: "start",
        children: [
            (0, n.jsx)(o.yr3, { size: "sm", className: b.aV, color: a.A.colors.ICON_FEEDBACK_POSITIVE }),
            (0, n.jsxs)(o.BJc, {
                gap: 4,
                children: [
                    (0, n.jsx)(o.Text, { variant: "text-md/normal", children: e }),
                    (0, n.jsx)(o.Text, { variant: "text-xs/normal", color: "text-subtle", children: i }),
                ],
            }),
        ],
    });
}
function L(t) {
    let { enabledPermissions: e, onGetPermisisonName: i } = t;
    return (0, n.jsxs)("div", {
        className: b.CZ,
        children: [
            (0, n.jsx)(o.Text, {
                className: b.qd,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: N.intl.string(N.t.xU8RDk),
            }),
            (0, n.jsx)("div", {
                className: b.lM,
                children: e.map((t, e) =>
                    (0, n.jsxs)(
                        "div",
                        {
                            className: b.ce,
                            children: [
                                (0, n.jsx)("div", { className: b.dT }),
                                (0, n.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: i(t),
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
function O(t) {
    let { disabledPermissions: e, onGetPermisisonName: i } = t,
        s = N.intl.string(N.t.Yo5qlq);
    return (
        e.length === I.dR.length && (s = N.intl.string(N.t.FgMS6i)),
        (0, n.jsxs)("div", {
            className: b.CZ,
            children: [
                (0, n.jsx)(o.Text, { className: b.qd, variant: "text-xs/semibold", color: "text-muted", children: s }),
                (0, n.jsx)("div", {
                    className: b.lM,
                    children: e.map((t, e) =>
                        (0, n.jsxs)(
                            "div",
                            {
                                className: b.ce,
                                children: [
                                    (0, n.jsx)("div", { className: b.xE }),
                                    (0, n.jsx)(o.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: i(t),
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
function T(t) {
    let { permissions: e } = t,
        i = (t) => {
            switch (t.toString()) {
                case A.xBc.MENTION_EVERYONE.toString():
                    return N.intl.string(N.t.yCpsQw);
                case A.xBc.CREATE_GUILD_EXPRESSIONS.toString():
                    return N.intl.string(N.t.vo2LdY);
                case A.xBc.MANAGE_GUILD_EXPRESSIONS.toString():
                    return N.intl.string(N.t.cmp2W6);
                default:
                    return (0, x.hx)(t);
            }
        },
        { enabledPermissions: s, disabledPermissions: l } = e;
    return (0, n.jsxs)("div", {
        className: b.tp,
        children: [
            0 !== s.length ? (0, n.jsx)(L, { enabledPermissions: s, onGetPermisisonName: i }) : null,
            (0, n.jsx)(O, { disabledPermissions: l, onGetPermisisonName: i }),
        ],
    });
}
function _(t) {
    let { guild: e, defaultNotificationSettingsMet: i, everyonePermissionsMet: l } = t;
    s.useEffect(() => {
        (0, C.sx)({ fromStep: I.pj.BASICS, toStep: I.pj.FINISH, guildId: e.id });
    }, [e.id]);
    let r = s.useMemo(() => {
        let t = [],
            i = [];
        return (
            I.dR.map((n) => {
                E.Ib(n, e) ? t.push(n) : i.push(n);
            }),
            { enabledPermissions: t, disabledPermissions: i }
        );
    }, [e]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(o.BJc, {
                gap: 12,
                children: [
                    !i && (0, n.jsx)(M, { title: N.intl.string(N.t.uPYswy), description: N.intl.string(N.t.pf6ptp) }),
                    !l &&
                        (0, n.jsx)(M, {
                            title: N.intl.format(N.t.IYQeOA, {}),
                            description: N.intl.string(N.t["+Iyaif"]),
                        }),
                ],
            }),
            !l && (0, n.jsx)(T, { permissions: r }),
        ],
    });
}
function B(t) {
    let { guild: e, policyAccepted: i, onPolicyAcceptedChange: l } = t;
    return (
        s.useEffect(() => {
            (0, C.sx)({ fromStep: I.pj.BASICS, toStep: I.pj.RULES, guildId: e.id });
        }, [e.id]),
        (0, n.jsx)(o.D0$, {
            label: N.intl.string(N.t["k+b2Cf"]),
            description: N.intl.format(N.t["BwbW/Q"], {
                communityGuidelines: j.A.getArticleURL(A.MVz.PUBLIC_GUILD_GUILDLINES),
                typesOfGuilds: j.A.getArticleURL(A.MVz.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES),
            }),
            children: (0, n.jsx)(o.Checkbox, { label: N.intl.string(N.t["9AG3wI"]), checked: i, onChange: l }),
        })
    );
}
function G(t) {
    let { ...e } = t;
    s.useEffect(() => {
        h.default.track(A.HAw.OPEN_MODAL, { type: I.bK });
    }, []);
    let { guild: i } = (0, r.cf)([u.A], () => u.A.getProps()),
        [a, d] = s.useState("intro"),
        [x] = s.useState(() => i?.verificationLevel),
        [g] = s.useState(() => i?.explicitContentFilter),
        m = null != x && x > A.PvD.NONE,
        f = g === A.gh6.ALL_MEMBERS,
        j = !(m && f),
        [b, M] = s.useState(I.SP),
        [L, O] = s.useState(I.SP),
        [T] = s.useState(() => !I.dR.some((t) => E.Ib(t, i))),
        [G] = s.useState(() => i?.defaultMessageNotifications),
        R = G === A.orn.ONLY_MENTIONS,
        Y = !R || !T,
        D = (0, r.bG)([S.A], () => (null != i ? S.A.getEveryoneRole(i) : void 0)),
        [F, w] = s.useState(!1);
    if (null == i) return null;
    let K = async () => {
            if (null == D || !F) return;
            let t = T ? null : l.TF(D.permissions, I.e$);
            if (null != t && t !== D.permissions) {
                let e = { ...D, permissions: t };
                await (0, p.JY)(i.id, [e], void 0, void 0, void 0, { throwErr: !0 });
            }
            let e = {
                features: new Set([...i.features, A.GuildFeatures.COMMUNITY]),
                rulesChannelId: b,
                publicUpdatesChannelId: L,
                ...(!m && { verificationLevel: A.PvD.LOW }),
                ...(!f && { explicitContentFilter: A.gh6.ALL_MEMBERS }),
                ...(!R && { defaultMessageNotifications: A.orn.ONLY_MENTIONS }),
            };
            c.A.updateGuild(e), await c.A.saveGuild(i.id, e, { throwErr: !0 });
        },
        U = async () => {
            h.default.track(A.HAw.MODAL_DISMISSED, { type: I.bK }), await e.onClose();
        },
        k = [
            {
                stepKey: I.pj.INTRO,
                modalProps: {
                    title: N.intl.string(N.t.ElKTeb),
                    subtitle: N.intl.string(N.t["CwC/ll"]),
                    graphic: { src: v.A, type: "image" },
                    gradientColor: "green",
                },
                nextButtonProps: { text: N.intl.string(N.t.LhlgY9) },
            },
            {
                stepKey: I.pj.SAFETY_CHECK,
                modalProps: { title: N.intl.string(N.t.QrjLYl), subtitle: N.intl.string(N.t.i1STwu) },
                body: (0, n.jsx)(y, { guild: i, verificationLevelMet: m, contentFilterMet: f }),
                nextButtonProps: { text: N.intl.string(N.t.JFfins) },
            },
            {
                stepKey: I.pj.BASICS,
                modalProps: { title: N.intl.string(N.t.YtXpEh), subtitle: N.intl.string(N.t["J/fYR8"]) },
                body: (0, n.jsx)(P, {
                    guild: i,
                    rulesChannelId: b,
                    publicUpdatesChannelId: L,
                    onRulesChannelChange: M,
                    onPublicUpdatesChannelChange: O,
                }),
            },
            {
                stepKey: I.pj.FINISH,
                modalProps: { title: N.intl.string(N.t.EzGuSr) },
                body: (0, n.jsx)(_, { guild: i, defaultNotificationSettingsMet: R, everyonePermissionsMet: T }),
                nextButtonProps: { text: N.intl.string(N.t.JFfins) },
            },
            {
                stepKey: I.pj.RULES,
                modalProps: { title: N.intl.string(N.t["Pj/s/a"]) },
                nextButtonProps: { text: N.intl.string(N.t.XGl4ba) },
                body: (0, n.jsx)(B, { guild: i, policyAccepted: F, onPolicyAcceptedChange: w }),
                nextEnabled: F,
            },
        ].filter((t) => (t.stepKey !== I.pj.SAFETY_CHECK || !!j) && (t.stepKey !== I.pj.FINISH || !!Y)),
        H = k.slice(1).map((t) => t.stepKey);
    return (0, n.jsx)(o.t04, {
        ...e,
        steps: k,
        numberedSteps: H,
        currentStepKey: a,
        onClose: U,
        onStepChange: (t, e) => {
            (0, C.sx)({ fromStep: e, toStep: t, guildId: i.id }), d(t);
        },
        onComplete: K,
    });
}
