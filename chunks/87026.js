i.d(t, { default: () => Q }), i(539854), i(388685);
var s = i(951288),
    l = i(647438),
    n = i(120356),
    a = i.n(n),
    r = i(149765),
    o = i(442837),
    c = i(692547),
    d = i(28664),
    u = i(780384),
    x = i(755721),
    m = i(481060),
    h = i(785697),
    g = i(933557),
    p = i(313201),
    f = i(434404),
    v = i(999382),
    j = i(84058),
    N = i(422559),
    b = i(210887),
    C = i(984933),
    S = i(485386),
    E = i(430824),
    I = i(699516),
    O = i(594174),
    M = i(626135),
    L = i(63063),
    w = i(700785),
    y = i(245315),
    _ = i(513796),
    P = i(135899),
    T = i(981631),
    k = i(388032),
    A = i(353302),
    G = i(289575),
    R = i(371411),
    Z = i(112847),
    D = i(516954),
    F = i(674889),
    U = i(162752),
    B = i(438825);
let H = (e) => {
        let {
                guild: t,
                onAcceptVerificationLevel: i,
                onAcceptContentFilter: l,
                disableContentFilter: n,
                disableVerificationLevel: a,
                headerId: r,
                theme: c,
            } = e,
            d = (0, o.e7)([E.Z], () => E.Z.getGuild(t.id), [t.id]),
            x = null != d && d.verificationLevel > T.sFg.NONE,
            h = (null == d ? void 0 : d.explicitContentFilter) === T.lxg.ALL_MEMBERS,
            g = (0, u.wj)(c) ? F : U;
        return (0, s.jsxs)("div", {
            className: A.container,
            children: [
                (0, s.jsxs)("div", {
                    className: A.content,
                    children: [
                        (0, s.jsx)("img", {
                            alt: "",
                            src: g,
                            width: 80,
                        }),
                        (0, s.jsx)(m.Heading, {
                            variant: "heading-xl/semibold",
                            className: A.header,
                            id: r,
                            children: k.intl.string(k.t.QrjLYm),
                        }),
                        (0, s.jsx)(m.Text, {
                            color: "none",
                            variant: "text-md/normal",
                            className: A.headerCaption,
                            children: k.intl.string(k.t.i1STws),
                        }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: A.form,
                    children: (0, s.jsx)(m.gNt, {
                        label: k.intl.string(k.t.x4hbeX),
                        description: x ? k.intl.string(k.t.k5crqq) : k.intl.string(k.t.fHiGAw),
                        children: (0, s.jsx)(m.Checkbox, {
                            disabled: a,
                            checked: t.verificationLevel > T.sFg.NONE,
                            onChange: i,
                            label: k.intl.string(k.t.x4hbeX),
                        }),
                    }),
                }),
                (0, s.jsx)("div", {
                    className: A.form,
                    children: (0, s.jsx)(m.gNt, {
                        label: k.intl.string(k.t.COu4bm),
                        description: h ? k.intl.string(k.t.qgQLpq) : k.intl.string(k.t.b0MaDQ),
                        children: (0, s.jsx)(m.Checkbox, {
                            disabled: n,
                            checked: t.explicitContentFilter === T.lxg.ALL_MEMBERS,
                            onChange: l,
                            label: k.intl.string(k.t.WAUiMj),
                        }),
                    }),
                }),
            ],
        });
    },
    Y = (e) => {
        let {
            selectableChannels: t,
            onRuleChannelChange: i,
            ruleChannel: n,
            onPublicUpdatesChannelChange: a,
            publicUpdatesChannel: r,
            headerId: o,
            theme: c,
            guildId: d,
        } = e;
        l.useEffect(() => {
            (0, y.BF)({
                fromStep: P.IO.SAFETY_CHECK,
                toStep: P.IO.BASICS,
                guildId: d,
            });
        }, [d]);
        let x = (0, u.wj)(c) ? G : R;
        return (0, s.jsxs)("div", {
            className: A.container,
            children: [
                (0, s.jsxs)("div", {
                    className: A.content,
                    children: [
                        (0, s.jsx)("img", {
                            alt: "",
                            src: x,
                            width: 80,
                        }),
                        (0, s.jsx)(m.Heading, {
                            variant: "heading-xl/semibold",
                            className: A.header,
                            id: o,
                            children: k.intl.string(k.t.YtXpEh),
                        }),
                        (0, s.jsx)(m.Text, {
                            color: "none",
                            variant: "text-md/normal",
                            className: A.headerCaption,
                            children: k.intl.string(k.t["J/fYR0"]),
                        }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: A.form,
                    children: (0, s.jsx)(m.VcW, {
                        label: k.intl.string(k.t.dYrhCA),
                        description: k.intl.string(k.t["+Af+V1"]),
                        options: t,
                        onChange: i,
                        value: n,
                        maxVisibleItems: 4,
                    }),
                }),
                (0, s.jsx)("div", {
                    className: A.form,
                    children: (0, s.jsx)(m.VcW, {
                        label: k.intl.string(k.t.vAyDGR),
                        description: k.intl.string(k.t.ZFeonp),
                        options: t,
                        onChange: a,
                        value: r,
                        popoutPosition: "top",
                        maxVisibleItems: 4,
                    }),
                }),
            ],
        });
    },
    q = (e) => {
        let {
                guild: t,
                policyAccepted: i,
                everyoneRolePermissionsAccepted: n,
                onAcceptPolicy: r,
                onAcceptDefaultNotifications: o,
                onAcceptEveryoneRolePermissions: c,
                disableDefaultNotifications: h,
                disableEveryoneRolePermissions: g,
                headerId: p,
                theme: f,
            } = e,
            v = (0, u.wj)(f) ? Z : D;
        return (
            l.useEffect(() => {
                (0, y.BF)({
                    fromStep: P.IO.BASICS,
                    toStep: P.IO.FINISH,
                    guildId: t.id,
                });
            }, [t.id]),
            (0, s.jsxs)("div", {
                className: A.container,
                children: [
                    (0, s.jsxs)("div", {
                        className: A.content,
                        children: [
                            (0, s.jsx)("img", {
                                alt: "",
                                src: v,
                                width: 80,
                            }),
                            (0, s.jsx)(m.Heading, {
                                variant: "heading-xl/semibold",
                                className: A.header,
                                id: p,
                                children: k.intl.string(k.t["Pj/s/f"]),
                            }),
                            (0, s.jsx)(m.Text, {
                                color: "none",
                                variant: "text-md/normal",
                                className: A.headerCaption,
                                children: k.intl.string(k.t["IL7/np"]),
                            }),
                        ],
                    }),
                    (0, s.jsx)("div", {
                        className: A.form,
                        children: (0, s.jsx)(d.u, {
                            text: h ? k.intl.string(k.t.PHjrpq) : null,
                            "aria-label": !!h && k.intl.string(k.t.PHjrpq),
                            children: (0, s.jsx)("div", {
                                children: (0, s.jsx)(m.$qM, {
                                    type: x.M0.ROW,
                                    disabled: h,
                                    value: t.defaultMessageNotifications === T.bL.ONLY_MENTIONS,
                                    onChange: (e, t) => o(t),
                                    className: a()({ [A.disabled]: h }),
                                    children: (0, s.jsx)(m.Text, {
                                        variant: "text-sm/normal",
                                        children: k.intl.format(k.t.K8Eg4O, {
                                            infoHook: () =>
                                                (0, s.jsx)(d.u, {
                                                    text: k.intl.string(k.t["3h2WyM"]),
                                                    "aria-label": k.intl.string(k.t["3h2WyM"]),
                                                    children: (0, s.jsx)(m.d3s, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                        className: A.icon,
                                                    }),
                                                }),
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    }),
                    (0, s.jsx)(d.u, {
                        text: g ? k.intl.string(k.t.PHjrpq) : null,
                        "aria-label": !!g && k.intl.string(k.t.PHjrpq),
                        children: (0, s.jsx)("div", {
                            className: A.checkboxOption,
                            children: (0, s.jsx)(m.$qM, {
                                disabled: g,
                                value: n,
                                onChange: (e, t) => c(t),
                                className: a()({ [A.disabled]: g }),
                                children: (0, s.jsx)(m.Text, {
                                    variant: "text-sm/normal",
                                    children: k.intl.format(k.t.v8qCoK, {
                                        infoHook: () =>
                                            (0, s.jsx)(d.u, {
                                                text: k.intl.string(k.t["+IyaiY"]),
                                                "aria-label": k.intl.string(k.t["+IyaiY"]),
                                                children: (0, s.jsx)(m.d3s, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: A.icon,
                                                }),
                                            }),
                                    }),
                                }),
                            }),
                        }),
                    }),
                    (0, s.jsx)("div", {
                        className: A.form,
                        children: (0, s.jsx)(m.gNt, {
                            label: k.intl.string(k.t["k+b2CQ"]),
                            description: k.intl.format(k.t["BwbW/f"], {
                                communityGuidelines: L.Z.getArticleURL(T.BhN.PUBLIC_GUILD_GUILDLINES),
                                typesOfGuilds: L.Z.getArticleURL(T.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES),
                            }),
                            children: (0, s.jsx)(m.Checkbox, {
                                checked: i,
                                onChange: r,
                                label: k.intl.string(k.t["9AG3wM"]),
                            }),
                        }),
                    }),
                ],
            })
        );
    };
function z(e) {
    let { guild: t } = e,
        { name: i, color: l } = (0, o.e7)([S.Z], () => S.Z.getEveryoneRole(t));
    return (0, s.jsx)("div", {
        className: A.__invalid_role,
        children: (0, s.jsxs)("span", {
            className: A.roleRow,
            children: [
                (0, s.jsx)(m.FhE, {
                    className: A.roleDot,
                    color: l.toString(),
                    background: !1,
                    tooltip: !1,
                }),
                (0, s.jsx)(m.Text, {
                    className: A.roleName,
                    variant: "text-sm/medium",
                    color: "interactive-active",
                    children: i,
                }),
            ],
        }),
    });
}
function W(e) {
    let { enabledPermissions: t, onGetPermisisonName: i } = e;
    return (0, s.jsxs)("div", {
        className: A.tableContainer,
        children: [
            (0, s.jsx)(m.Text, {
                className: A.tableHeader,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: k.intl.string(k.t.xU8RDg),
            }),
            (0, s.jsx)("div", {
                className: A.permissionsTable,
                children: t.map((e, t) =>
                    (0, s.jsxs)(
                        "div",
                        {
                            className: A.permissionRow,
                            children: [
                                (0, s.jsx)("div", { className: A.bulletWarning }),
                                (0, s.jsx)(m.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: i(e),
                                }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
        ],
    });
}
function X(e) {
    let { disabledPermissions: t, onGetPermisisonName: i } = e,
        l = k.intl.string(k.t.Yo5qlp);
    return (
        t.length === P.$X.length && (l = k.intl.string(k.t.FgMS6u)),
        (0, s.jsxs)("div", {
            className: A.tableContainer,
            children: [
                (0, s.jsx)(m.Text, {
                    className: A.tableHeader,
                    variant: "text-xs/semibold",
                    color: "text-muted",
                    children: l,
                }),
                (0, s.jsx)("div", {
                    className: A.permissionsTable,
                    children: t.map((e, t) =>
                        (0, s.jsxs)(
                            "div",
                            {
                                className: A.permissionRow,
                                children: [
                                    (0, s.jsx)("div", { className: A.bullet }),
                                    (0, s.jsx)(m.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: i(e),
                                    }),
                                ],
                            },
                            t,
                        ),
                    ),
                }),
            ],
        })
    );
}
function V(e) {
    let { permissions: t } = e,
        i = (e) => {
            switch (e.toString()) {
                case T.Plq.MENTION_EVERYONE.toString():
                    return k.intl.string(k.t.yCpsQ0);
                case T.Plq.CREATE_GUILD_EXPRESSIONS.toString():
                    return k.intl.string(k.t.vo2LdX);
                case T.Plq.MANAGE_GUILD_EXPRESSIONS.toString():
                    return k.intl.string(k.t.cmp2W1);
                default:
                    return (0, N.wt)(e);
            }
        },
        { enabledPermissions: l, disabledPermissions: n } = t;
    return (0, s.jsxs)("div", {
        className: A.table,
        children: [
            0 !== l.length
                ? (0, s.jsx)(W, {
                      enabledPermissions: l,
                      onGetPermisisonName: i,
                  })
                : null,
            (0, s.jsx)(X, {
                disabledPermissions: n,
                onGetPermisisonName: i,
            }),
        ],
    });
}
let K = (e) => {
        let { guild: t, policyAccepted: i, onAcceptPolicy: n, headerId: a, theme: r } = e,
            o = (0, u.wj)(r) ? Z : D;
        l.useEffect(() => {
            (0, y.BF)({
                fromStep: P.IO.BASICS,
                toStep: P.IO.FINISH,
                guildId: t.id,
            });
        }, [t.id]);
        let x = l.useMemo(() => {
            let e = [],
                i = [];
            return (
                P.$X.map((s) => {
                    w.oz(s, t) ? e.push(s) : i.push(s);
                }),
                {
                    enabledPermissions: e,
                    disabledPermissions: i,
                }
            );
        }, [t]);
        return (0, s.jsxs)("div", {
            className: A.container,
            children: [
                (0, s.jsxs)("div", {
                    className: A.content,
                    children: [
                        (0, s.jsx)("img", {
                            alt: "",
                            src: o,
                            width: 80,
                        }),
                        (0, s.jsx)(m.Heading, {
                            variant: "heading-xl/semibold",
                            className: A.updatedHeader,
                            id: a,
                            children: k.intl.string(k.t["Pj/s/f"]),
                        }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: A.updatedForm,
                    children: (0, s.jsxs)(m.gNt, {
                        label: k.intl.string(k.t["0q344e"]),
                        children: [
                            (0, s.jsxs)("div", {
                                className: A.checklistRow,
                                children: [
                                    (0, s.jsx)(m.owK, {
                                        size: "md",
                                        className: A.checklistIcon,
                                        color: c.Z.unsafe_rawColors.GREEN_360.css,
                                        secondaryColor: c.Z.unsafe_rawColors.WHITE_500.css,
                                    }),
                                    (0, s.jsx)(m.Text, {
                                        variant: "text-md/normal",
                                        children: k.intl.format(k.t.K8Eg4O, {
                                            infoHook: () =>
                                                (0, s.jsx)(d.u, {
                                                    text: k.intl.string(k.t["3h2WyM"]),
                                                    "aria-label": k.intl.string(k.t["3h2WyM"]),
                                                    children: (0, s.jsx)(m.d3s, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                        className: A.icon,
                                                    }),
                                                }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: A.checklistRow,
                                children: [
                                    (0, s.jsx)(m.owK, {
                                        size: "md",
                                        className: A.checklistIcon,
                                        color: c.Z.unsafe_rawColors.GREEN_360.css,
                                        secondaryColor: c.Z.unsafe_rawColors.WHITE_500.css,
                                    }),
                                    (0, s.jsx)(m.Text, {
                                        variant: "text-md/normal",
                                        children: k.intl.string(k.t.LfeFFh),
                                    }),
                                    (0, s.jsx)(z, { guild: t }),
                                ],
                            }),
                            (0, s.jsx)(V, { permissions: x }),
                        ],
                    }),
                }),
                (0, s.jsx)("div", {
                    className: A.updatedForm,
                    children: (0, s.jsx)(m.gNt, {
                        label: k.intl.string(k.t["k+b2CQ"]),
                        description: k.intl.format(k.t["BwbW/f"], {
                            communityGuidelines: L.Z.getArticleURL(T.BhN.PUBLIC_GUILD_GUILDLINES),
                            typesOfGuilds: L.Z.getArticleURL(T.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES),
                        }),
                        children: (0, s.jsx)(m.Checkbox, {
                            label: k.intl.string(k.t["9AG3wM"]),
                            checked: i,
                            onChange: n,
                        }),
                    }),
                }),
            ],
        });
    },
    Q = (e) => {
        var t;
        let { transitionState: i, onClose: n } = e;
        l.useEffect(() => {
            M.default.track(T.rMx.OPEN_MODAL, { type: P.tA });
        }, []);
        let { guild: a } = (0, o.cj)([v.Z], () => v.Z.getProps()),
            c = (0, o.e7)([b.Z], () => b.Z.theme),
            [d, u] = l.useState(!1),
            [x, m] = l.useState(!P.$X.some((e) => w.oz(e, a))),
            [N, E] = l.useState(P.b4),
            [L, y] = l.useState(P.b4),
            [G] = l.useState(null == a ? void 0 : a.defaultMessageNotifications),
            [R] = l.useState(null == a ? void 0 : a.verificationLevel),
            [Z] = l.useState(null == a ? void 0 : a.explicitContentFilter),
            [D] = l.useState(x),
            F = (0, o.e7)([S.Z], () => (null != a ? S.Z.getEveryoneRole(a) : void 0)),
            U = (0, o.e7)([C.ZP], () => (null != a ? C.ZP.getChannels(a.id) : null)),
            z = (0, p.Dt)(),
            { enabled: W } = (0, h.D2)(null != (t = null == a ? void 0 : a.id) ? t : T.lds);
        if (null == a) return null;
        let X = [
            {
                value: P.b4,
                label: k.intl.string(k.t.Cla0ra),
            },
        ];
        U[C.sH].forEach((e) => {
            let { channel: t } = e;
            t.type === T.d4z.GUILD_TEXT &&
                X.push({
                    value: t.id,
                    label: (0, g.F6)(t, O.default, I.Z, !0),
                });
        });
        let V = R !== T.sFg.NONE,
            Q = Z === T.lxg.ALL_MEMBERS,
            $ = G === T.bL.ONLY_MENTIONS,
            J = async () => {
                var e, t;
                if (null == F || !d) return;
                let i = new Set(a.features);
                i.add(T.GuildFeatures.COMMUNITY);
                let s = x ? r.Od(F.permissions, P.mu) : F.permissions,
                    l =
                        ((e = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var i = null != arguments[t] ? arguments[t] : {},
                                    s = Object.keys(i);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (s = s.concat(
                                        Object.getOwnPropertySymbols(i).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(i, e).enumerable;
                                        }),
                                    )),
                                    s.forEach(function (t) {
                                        var s;
                                        (s = i[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: s,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = s);
                                    });
                            }
                            return e;
                        })({}, F)),
                        (t = t = { permissions: s }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                            : (function (e, t) {
                                  var i = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var s = Object.getOwnPropertySymbols(e);
                                      i.push.apply(i, s);
                                  }
                                  return i;
                              })(Object(t)).forEach(function (i) {
                                  Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i));
                              }),
                        e);
                s !== F.permissions && (await (0, j.Gf)(a.id, [l])),
                    f.Z.updateGuild({
                        features: i,
                        rulesChannelId: N,
                        publicUpdatesChannelId: L,
                    }),
                    await f.Z.saveGuild(a.id, {
                        features: i,
                        rulesChannelId: N,
                        verificationLevel: a.verificationLevel,
                        explicitContentFilter: a.explicitContentFilter,
                        publicUpdatesChannelId: L,
                        defaultMessageNotifications: a.defaultMessageNotifications,
                    }),
                    setTimeout(() => {
                        n();
                    }, 0);
            },
            ee = (0, s.jsx)(H, {
                guild: a,
                disableVerificationLevel: V,
                disableContentFilter: Q,
                onAcceptVerificationLevel: (e) => {
                    if (!e) return void f.Z.updateGuild({ verificationLevel: R });
                    e && f.Z.updateGuild({ verificationLevel: T.sFg.LOW });
                },
                onAcceptContentFilter: (e) => {
                    if (!e) return void f.Z.updateGuild({ explicitContentFilter: Z });
                    f.Z.updateGuild({ explicitContentFilter: T.lxg.ALL_MEMBERS });
                },
                headerId: z,
                theme: c,
            }),
            et = (0, s.jsx)(Y, {
                selectableChannels: X,
                onRuleChannelChange: (e) => {
                    E(e);
                },
                onPublicUpdatesChannelChange: (e) => {
                    y(e);
                },
                ruleChannel: N,
                publicUpdatesChannel: L,
                headerId: z,
                theme: c,
                guildId: a.id,
            }),
            ei = W
                ? (0, s.jsx)(K, {
                      guild: a,
                      policyAccepted: d,
                      onAcceptPolicy: (e) => {
                          if (e) {
                              u(!0),
                                  $ || f.Z.updateGuild({ defaultMessageNotifications: T.bL.ONLY_MENTIONS }),
                                  x || null == F || m(!0);
                              return;
                          }
                          u(!1), $ && f.Z.updateGuild({ defaultMessageNotifications: G }), x && null != F && m(!1);
                      },
                      headerId: z,
                      theme: c,
                  })
                : (0, s.jsx)(q, {
                      guild: a,
                      disableDefaultNotifications: $,
                      disableEveryoneRolePermissions: D,
                      policyAccepted: d,
                      everyoneRolePermissionsAccepted: x,
                      onAcceptPolicy: (e) => {
                          if (e) return void u(!0);
                          u(!1);
                      },
                      onAcceptDefaultNotifications: (e) => {
                          if (!e) return void f.Z.updateGuild({ defaultMessageNotifications: G });
                          f.Z.updateGuild({ defaultMessageNotifications: T.bL.ONLY_MENTIONS });
                      },
                      onAcceptEveryoneRolePermissions: (e) => {
                          null != F && (e ? m(!0) : m(!1));
                      },
                      headerId: z,
                      theme: c,
                  }),
            es = (0, s.jsx)("img", {
                alt: "",
                src: B,
                className: A.footerImage,
                width: 240,
            }),
            el = [
                {
                    modalContent: ee,
                    disableNextStep:
                        a.explicitContentFilter !== T.lxg.ALL_MEMBERS || a.verificationLevel === T.sFg.NONE,
                    overviewTitle: k.intl.string(k.t.PpYoSk),
                },
                {
                    modalContent: et,
                    disableNextStep: null == N || null == L,
                    overviewTitle: k.intl.string(k.t["7MEtIS"]),
                },
                {
                    modalContent: ei,
                    disableNextStep: !d,
                    overviewTitle: k.intl.string(k.t.Pj9P8P),
                },
            ];
        return (0, s.jsx)(_.Z, {
            stepData: el,
            title: k.intl.string(k.t["6U5XTk"]),
            transitionState: i,
            onClose: () => {
                n(), M.default.track(T.rMx.MODAL_DISMISSED, { type: P.tA });
            },
            completeButtonText: k.intl.string(k.t.XGl4bW),
            onComplete: J,
            overviewFooter: es,
            sequencerClassName: A.container,
            autoCloseOnComplete: !1,
        });
    };
