n.d(e, { default: () => B }), n(539854), n(953529), n(388685);
var i = n(54381),
    l = n(473749),
    s = n(149765),
    r = n(442837),
    o = n(692547),
    a = n(481060),
    c = n(933557),
    u = n(434404),
    d = n(999382),
    p = n(84058),
    g = n(422559),
    f = n(984933),
    x = n(485386),
    b = n(699516),
    S = n(594174),
    m = n(626135),
    O = n(63063),
    h = n(700785),
    I = n(245315),
    j = n(135899),
    y = n(981631),
    E = n(388032),
    v = n(23512);
function C() {
    return (C =
        Object.assign ||
        function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
            return t;
        }).apply(this, arguments);
}
function N(t) {
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
function P(t, e) {
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
function w(t) {
    let { guild: e, verificationLevelMet: n, contentFilterMet: s } = t;
    return (
        l.useEffect(() => {
            (0, I.BF)({
                fromStep: j.IO.INTRO,
                toStep: j.IO.SAFETY_CHECK,
                guildId: e.id,
            });
        }, [e.id]),
        (0, i.jsxs)(a.Kqy, {
            gap: 12,
            children: [
                !n &&
                    (0, i.jsx)(A, {
                        title: E.intl.string(E.t["rkA56+"]),
                        description: E.intl.string(E.t.fHiGA0),
                    }),
                !s &&
                    (0, i.jsx)(A, {
                        title: E.intl.string(E.t.COu4bk),
                        description: E.intl.string(E.t.b0MaDV),
                    }),
            ],
        })
    );
}
function L(t) {
    let {
        guild: e,
        rulesChannelId: n,
        publicUpdatesChannelId: s,
        onRulesChannelChange: o,
        onPublicUpdatesChannelChange: u,
    } = t;
    l.useEffect(() => {
        (0, I.BF)({
            fromStep: j.IO.SAFETY_CHECK,
            toStep: j.IO.BASICS,
            guildId: e.id,
        });
    }, [e.id]);
    let d = (0, r.e7)([f.ZP], () => (null != e ? f.ZP.getChannels(e.id) : null)),
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
                value: j.b4,
                label: E.intl.string(E.t.Cla0re),
            },
        ];
    return (
        d[f.sH].forEach((t) => {
            let { channel: e } = t;
            e.type === y.d4z.GUILD_TEXT &&
                g.push({
                    value: e.id,
                    label: (0, c.F6)(e, S.default, b.Z, !0),
                });
        }),
        (0, i.jsxs)(a.Kqy, {
            gap: 16,
            children: [
                (0, i.jsx)(a.VcW, {
                    label: E.intl.string(E.t.dYrhCO),
                    description: E.intl.string(E.t["+Af+Vw"]),
                    options: g,
                    formatOption: p,
                    onSelectionChange: (t) => o(null != t ? t : j.b4),
                    selectionMode: "single",
                    value: n,
                }),
                (0, i.jsx)(a.VcW, {
                    label: E.intl.string(E.t.vAyDGU),
                    description: E.intl.string(E.t.ZFeonu),
                    options: g,
                    formatOption: p,
                    onSelectionChange: (t) => u(null != t ? t : j.b4),
                    selectionMode: "single",
                    value: s,
                }),
            ],
        })
    );
}
function A(t) {
    let { title: e, description: n } = t;
    return (0, i.jsxs)(a.Kqy, {
        direction: "horizontal",
        gap: 8,
        align: "start",
        children: [
            (0, i.jsx)(a.owK, {
                size: "sm",
                className: v.checklistIcon,
                color: o.Z.colors.ICON_FEEDBACK_POSITIVE,
            }),
            (0, i.jsxs)(a.Kqy, {
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
function M(t) {
    let { enabledPermissions: e, onGetPermisisonName: n } = t;
    return (0, i.jsxs)("div", {
        className: v.tableContainer,
        children: [
            (0, i.jsx)(a.Text, {
                className: v.tableHeader,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: E.intl.string(E.t.xU8RDk),
            }),
            (0, i.jsx)("div", {
                className: v.permissionsTable,
                children: e.map((t, e) =>
                    (0, i.jsxs)(
                        "div",
                        {
                            className: v.permissionRow,
                            children: [
                                (0, i.jsx)("div", { className: v.bulletWarning }),
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
function T(t) {
    let { disabledPermissions: e, onGetPermisisonName: n } = t,
        l = E.intl.string(E.t.Yo5qlq);
    return (
        e.length === j.$X.length && (l = E.intl.string(E.t.FgMS6i)),
        (0, i.jsxs)("div", {
            className: v.tableContainer,
            children: [
                (0, i.jsx)(a.Text, {
                    className: v.tableHeader,
                    variant: "text-xs/semibold",
                    color: "text-muted",
                    children: l,
                }),
                (0, i.jsx)("div", {
                    className: v.permissionsTable,
                    children: e.map((t, e) =>
                        (0, i.jsxs)(
                            "div",
                            {
                                className: v.permissionRow,
                                children: [
                                    (0, i.jsx)("div", { className: v.bullet }),
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
function F(t) {
    let { permissions: e } = t,
        n = (t) => {
            switch (t.toString()) {
                case y.Plq.MENTION_EVERYONE.toString():
                    return E.intl.string(E.t.yCpsQw);
                case y.Plq.CREATE_GUILD_EXPRESSIONS.toString():
                    return E.intl.string(E.t.vo2LdY);
                case y.Plq.MANAGE_GUILD_EXPRESSIONS.toString():
                    return E.intl.string(E.t.cmp2W6);
                default:
                    return (0, g.wt)(t);
            }
        },
        { enabledPermissions: l, disabledPermissions: s } = e;
    return (0, i.jsxs)("div", {
        className: v.table,
        children: [
            0 !== l.length
                ? (0, i.jsx)(M, {
                      enabledPermissions: l,
                      onGetPermisisonName: n,
                  })
                : null,
            (0, i.jsx)(T, {
                disabledPermissions: s,
                onGetPermisisonName: n,
            }),
        ],
    });
}
function _(t) {
    let { guild: e, defaultNotificationSettingsMet: n, everyonePermissionsMet: s } = t;
    l.useEffect(() => {
        (0, I.BF)({
            fromStep: j.IO.BASICS,
            toStep: j.IO.FINISH,
            guildId: e.id,
        });
    }, [e.id]);
    let r = l.useMemo(() => {
        let t = [],
            n = [];
        return (
            j.$X.map((i) => {
                h.oz(i, e) ? t.push(i) : n.push(i);
            }),
            {
                enabledPermissions: t,
                disabledPermissions: n,
            }
        );
    }, [e]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(a.Kqy, {
                gap: 12,
                children: [
                    !n &&
                        (0, i.jsx)(A, {
                            title: E.intl.string(E.t.uPYswy),
                            description: E.intl.string(E.t.pf6ptp),
                        }),
                    !s &&
                        (0, i.jsx)(A, {
                            title: E.intl.format(E.t.IYQeOA, {}),
                            description: E.intl.string(E.t["+Iyaif"]),
                        }),
                ],
            }),
            !s && (0, i.jsx)(F, { permissions: r }),
        ],
    });
}
function G(t) {
    let { guild: e, policyAccepted: n, onPolicyAcceptedChange: s } = t;
    return (
        l.useEffect(() => {
            (0, I.BF)({
                fromStep: j.IO.BASICS,
                toStep: j.IO.RULES,
                guildId: e.id,
            });
        }, [e.id]),
        (0, i.jsx)(a.gNt, {
            label: E.intl.string(E.t["k+b2Cf"]),
            description: E.intl.format(E.t["BwbW/Q"], {
                communityGuidelines: O.Z.getArticleURL(y.BhN.PUBLIC_GUILD_GUILDLINES),
                typesOfGuilds: O.Z.getArticleURL(y.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES),
            }),
            children: (0, i.jsx)(a.Checkbox, {
                label: E.intl.string(E.t["9AG3wI"]),
                checked: n,
                onChange: s,
            }),
        })
    );
}
function B(t) {
    var e = C(
        {},
        (function (t) {
            if (null == t) throw TypeError("Cannot destructure " + t);
            return t;
        })(t),
    );
    l.useEffect(() => {
        m.default.track(y.rMx.OPEN_MODAL, { type: j.tA });
    }, []);
    let { guild: n } = (0, r.cj)([d.Z], () => d.Z.getProps()),
        [o, c] = l.useState("intro"),
        [g] = l.useState(() => (null == n ? void 0 : n.verificationLevel)),
        [f] = l.useState(() => (null == n ? void 0 : n.explicitContentFilter)),
        b = null != g && g > y.sFg.NONE,
        S = f === y.lxg.ALL_MEMBERS,
        O = !(b && S),
        [v, A] = l.useState(j.b4),
        [M, T] = l.useState(j.b4),
        [F] = l.useState(() => !j.$X.some((t) => h.oz(t, n))),
        [B] = l.useState(() => (null == n ? void 0 : n.defaultMessageNotifications)),
        K = B === y.bL.ONLY_MENTIONS,
        D = !K || !F,
        R = (0, r.e7)([x.Z], () => (null != n ? x.Z.getEveryoneRole(n) : void 0)),
        [Y, U] = l.useState(!1);
    if (null == n) return null;
    let k = async () => {
            if (null == R || !Y) return;
            let t = F ? null : s.Od(R.permissions, j.mu);
            if (null != t && t !== R.permissions) {
                let e = P(N({}, R), { permissions: t });
                await (0, p.Gf)(n.id, [e], void 0, void 0, void 0, { throwErr: !0 });
            }
            let e = N(
                {
                    features: new Set([...n.features, y.GuildFeatures.COMMUNITY]),
                    rulesChannelId: v,
                    publicUpdatesChannelId: M,
                },
                !b && { verificationLevel: y.sFg.LOW },
                !S && { explicitContentFilter: y.lxg.ALL_MEMBERS },
                !K && { defaultMessageNotifications: y.bL.ONLY_MENTIONS },
            );
            u.Z.updateGuild(e), await u.Z.saveGuild(n.id, e, { throwErr: !0 });
        },
        Z = async () => {
            m.default.track(y.rMx.MODAL_DISMISSED, { type: j.tA }), await e.onClose();
        },
        H = [
            {
                stepKey: j.IO.INTRO,
                title: E.intl.string(E.t.ElKTeb),
                subtitle: E.intl.string(E.t["CwC/ll"]),
                nextButtonProps: { text: E.intl.string(E.t.LhlgY9) },
            },
            {
                stepKey: j.IO.SAFETY_CHECK,
                title: E.intl.string(E.t.QrjLYl),
                subtitle: E.intl.string(E.t.i1STwu),
                body: (0, i.jsx)(w, {
                    guild: n,
                    verificationLevelMet: b,
                    contentFilterMet: S,
                }),
                nextButtonProps: { text: E.intl.string(E.t.JFfins) },
            },
            {
                stepKey: j.IO.BASICS,
                title: E.intl.string(E.t.YtXpEh),
                subtitle: E.intl.string(E.t["J/fYR8"]),
                body: (0, i.jsx)(L, {
                    guild: n,
                    rulesChannelId: v,
                    publicUpdatesChannelId: M,
                    onRulesChannelChange: A,
                    onPublicUpdatesChannelChange: T,
                }),
            },
            {
                stepKey: j.IO.FINISH,
                title: E.intl.string(E.t.EzGuSr),
                body: (0, i.jsx)(_, {
                    guild: n,
                    defaultNotificationSettingsMet: K,
                    everyonePermissionsMet: F,
                }),
                nextButtonProps: { text: E.intl.string(E.t.JFfins) },
            },
            {
                stepKey: j.IO.RULES,
                title: E.intl.string(E.t["Pj/s/a"]),
                nextButtonProps: { text: E.intl.string(E.t.XGl4ba) },
                body: (0, i.jsx)(G, {
                    guild: n,
                    policyAccepted: Y,
                    onPolicyAcceptedChange: U,
                }),
                nextEnabled: Y,
            },
        ].filter((t) => (t.stepKey !== j.IO.SAFETY_CHECK || !!O) && (t.stepKey !== j.IO.FINISH || !!D)),
        q = H.slice(1).map((t) => t.stepKey);
    return (0, i.jsx)(
        a.dGG,
        P(N({}, e), {
            steps: H,
            numberedSteps: q,
            currentStepKey: o,
            onClose: Z,
            onStepChange: (t, e) => {
                (0, I.BF)({
                    fromStep: e,
                    toStep: t,
                    guildId: n.id,
                }),
                    c(t);
            },
            onComplete: k,
        }),
    );
}
