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
    b = i(652215),
    A = i(985018),
    N = i(513804),
    v = i(796343);
function y(t) {
    let { guild: e, verificationLevelMet: i, contentFilterMet: l } = t;
    return (
        s.useEffect(() => {
            (0, C.sx)({ fromStep: I.pj.INTRO, toStep: I.pj.SAFETY_CHECK, guildId: e.id });
        }, [e.id]),
        (0, n.jsxs)(o.BJc, {
            gap: 12,
            children: [
                !i && (0, n.jsx)(M, { title: A.intl.string(A.t["rkA56+"]), description: A.intl.string(A.t.fHiGA0) }),
                !l && (0, n.jsx)(M, { title: A.intl.string(A.t.COu4bk), description: A.intl.string(A.t.b0MaDV) }),
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
        x = [{ value: I.SP, label: A.intl.string(A.t.Cla0re) }];
    return (
        u[g.I6].forEach((t) => {
            let { channel: e } = t;
            e.type === b.rbe.GUILD_TEXT && x.push({ value: e.id, label: (0, d.m1)(e, f.default, m.A, !0) });
        }),
        (0, n.jsxs)(o.BJc, {
            gap: 16,
            children: [
                (0, n.jsx)(o.ZiE, {
                    label: A.intl.string(A.t.dYrhCO),
                    description: A.intl.string(A.t["+Af+Vw"]),
                    options: x,
                    formatOption: p,
                    onSelectionChange: (t) => a(t ?? I.SP),
                    selectionMode: "single",
                    value: i,
                }),
                (0, n.jsx)(o.ZiE, {
                    label: A.intl.string(A.t.vAyDGU),
                    description: A.intl.string(A.t.ZFeonu),
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
            (0, n.jsx)(o.yr3, { size: "sm", className: N.aV, color: a.A.colors.ICON_FEEDBACK_POSITIVE }),
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
        className: N.CZ,
        children: [
            (0, n.jsx)(o.Text, {
                className: N.qd,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: A.intl.string(A.t.xU8RDk),
            }),
            (0, n.jsx)("div", {
                className: N.lM,
                children: e.map((t, e) =>
                    (0, n.jsxs)(
                        "div",
                        {
                            className: N.ce,
                            children: [
                                (0, n.jsx)("div", { className: N.dT }),
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
        s = A.intl.string(A.t.Yo5qlq);
    return (
        e.length === I.dR.length && (s = A.intl.string(A.t.FgMS6i)),
        (0, n.jsxs)("div", {
            className: N.CZ,
            children: [
                (0, n.jsx)(o.Text, { className: N.qd, variant: "text-xs/semibold", color: "text-muted", children: s }),
                (0, n.jsx)("div", {
                    className: N.lM,
                    children: e.map((t, e) =>
                        (0, n.jsxs)(
                            "div",
                            {
                                className: N.ce,
                                children: [
                                    (0, n.jsx)("div", { className: N.xE }),
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
                case b.xBc.MENTION_EVERYONE.toString():
                    return A.intl.string(A.t.yCpsQw);
                case b.xBc.CREATE_GUILD_EXPRESSIONS.toString():
                    return A.intl.string(A.t.vo2LdY);
                case b.xBc.MANAGE_GUILD_EXPRESSIONS.toString():
                    return A.intl.string(A.t.cmp2W6);
                default:
                    return (0, x.hx)(t);
            }
        },
        { enabledPermissions: s, disabledPermissions: l } = e;
    return (0, n.jsxs)("div", {
        className: N.tp,
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
                    !i && (0, n.jsx)(M, { title: A.intl.string(A.t.uPYswy), description: A.intl.string(A.t.pf6ptp) }),
                    !l &&
                        (0, n.jsx)(M, {
                            title: A.intl.format(A.t.IYQeOA, {}),
                            description: A.intl.string(A.t["+Iyaif"]),
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
            label: A.intl.string(A.t["k+b2Cf"]),
            description: A.intl.format(A.t["BwbW/Q"], {
                communityGuidelines: j.A.getArticleURL(b.MVz.PUBLIC_GUILD_GUILDLINES),
                typesOfGuilds: j.A.getArticleURL(b.MVz.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES),
            }),
            children: (0, n.jsx)(o.Checkbox, { label: A.intl.string(A.t["9AG3wI"]), checked: i, onChange: l }),
        })
    );
}
function G(t) {
    let { ...e } = t;
    s.useEffect(() => {
        h.default.track(b.HAw.OPEN_MODAL, { type: I.bK });
    }, []);
    let { guild: i } = (0, r.cf)([u.A], () => u.A.getProps()),
        [a, d] = s.useState("intro"),
        [x] = s.useState(() => i?.verificationLevel),
        [g] = s.useState(() => i?.explicitContentFilter),
        m = null != x && x > b.PvD.NONE,
        f = g === b.gh6.ALL_MEMBERS,
        j = !(m && f),
        [N, M] = s.useState(I.SP),
        [L, O] = s.useState(I.SP),
        [T] = s.useState(() => !I.dR.some((t) => E.Ib(t, i))),
        [G] = s.useState(() => i?.defaultMessageNotifications),
        R = G === b.orn.ONLY_MENTIONS,
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
                features: new Set([...i.features, b.GuildFeatures.COMMUNITY]),
                rulesChannelId: N,
                publicUpdatesChannelId: L,
                ...(!m && { verificationLevel: b.PvD.LOW }),
                ...(!f && { explicitContentFilter: b.gh6.ALL_MEMBERS }),
                ...(!R && { defaultMessageNotifications: b.orn.ONLY_MENTIONS }),
            };
            c.A.updateGuild(e), await c.A.saveGuild(i.id, e, { throwErr: !0 });
        },
        U = async () => {
            h.default.track(b.HAw.MODAL_DISMISSED, { type: I.bK }), await e.onClose();
        },
        k = [
            {
                stepKey: I.pj.INTRO,
                modalProps: {
                    title: A.intl.string(A.t.ElKTeb),
                    subtitle: A.intl.string(A.t["CwC/ll"]),
                    graphic: { src: v.A, type: "image" },
                    gradientColor: "blue",
                },
                nextButtonProps: { text: A.intl.string(A.t.LhlgY9) },
            },
            {
                stepKey: I.pj.SAFETY_CHECK,
                modalProps: { title: A.intl.string(A.t.QrjLYl), subtitle: A.intl.string(A.t.i1STwu) },
                body: (0, n.jsx)(y, { guild: i, verificationLevelMet: m, contentFilterMet: f }),
                nextButtonProps: { text: A.intl.string(A.t.JFfins) },
            },
            {
                stepKey: I.pj.BASICS,
                modalProps: { title: A.intl.string(A.t.YtXpEh), subtitle: A.intl.string(A.t["J/fYR8"]) },
                body: (0, n.jsx)(P, {
                    guild: i,
                    rulesChannelId: N,
                    publicUpdatesChannelId: L,
                    onRulesChannelChange: M,
                    onPublicUpdatesChannelChange: O,
                }),
            },
            {
                stepKey: I.pj.FINISH,
                modalProps: { title: A.intl.string(A.t.EzGuSr) },
                body: (0, n.jsx)(_, { guild: i, defaultNotificationSettingsMet: R, everyonePermissionsMet: T }),
                nextButtonProps: { text: A.intl.string(A.t.JFfins) },
            },
            {
                stepKey: I.pj.RULES,
                modalProps: { title: A.intl.string(A.t["Pj/s/a"]) },
                nextButtonProps: { text: A.intl.string(A.t.XGl4ba) },
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
