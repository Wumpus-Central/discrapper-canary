i.d(t, { default: () => $ }), i(539854), i(388685);
var l = i(54381),
    n = i(473749),
    s = i(120356),
    a = i.n(s),
    r = i(149765),
    c = i(442837),
    o = i(692547),
    d = i(668339),
    u = i(28664),
    m = i(780384),
    b = i(755721),
    x = i(481060),
    h = i(785697),
    p = i(933557),
    g = i(313201),
    f = i(434404),
    v = i(999382),
    N = i(84058),
    j = i(422559),
    C = i(210887),
    S = i(984933),
    I = i(485386),
    E = i(430824),
    _ = i(699516),
    w = i(594174),
    O = i(626135),
    L = i(63063),
    M = i(700785),
    y = i(245315),
    P = i(962145),
    T = i(135899),
    k = i(981631),
    R = i(388032),
    A = i(733005),
    G = i(289575),
    D = i(371411),
    Z = i(112847),
    F = i(516954),
    B = i(674889),
    U = i(162752),
    H = i(438825);
let Y = (e) => {
        let {
                guild: t,
                onAcceptVerificationLevel: i,
                onAcceptContentFilter: n,
                disableContentFilter: s,
                disableVerificationLevel: a,
                headerId: r,
                theme: o,
            } = e,
            d = (0, c.e7)([E.Z], () => E.Z.getGuild(t.id), [t.id]),
            u = null != d && d.verificationLevel > k.sFg.NONE,
            b = (null == d ? void 0 : d.explicitContentFilter) === k.lxg.ALL_MEMBERS,
            h = (0, m.wj)(o) ? B : U;
        return (0, l.jsxs)("div", {
            className: A.container,
            children: [
                (0, l.jsxs)("div", {
                    className: A.content,
                    children: [
                        (0, l.jsx)("img", {
                            alt: "",
                            src: h,
                            width: 80,
                        }),
                        (0, l.jsx)(x.Heading, {
                            variant: "heading-xl/semibold",
                            className: A.header,
                            id: r,
                            children: R.intl.string(R.t.QrjLYl),
                        }),
                        (0, l.jsx)(x.Text, {
                            color: "none",
                            variant: "text-md/normal",
                            className: A.headerCaption,
                            children: R.intl.string(R.t.i1STwu),
                        }),
                    ],
                }),
                (0, l.jsx)("div", {
                    className: A.form,
                    children: (0, l.jsx)(x.gNt, {
                        label: R.intl.string(R.t.x4hbeZ),
                        description: u ? R.intl.string(R.t.k5crqq) : R.intl.string(R.t.fHiGA0),
                        children: (0, l.jsx)(x.Checkbox, {
                            disabled: a,
                            checked: t.verificationLevel > k.sFg.NONE,
                            onChange: i,
                            label: R.intl.string(R.t.x4hbeZ),
                        }),
                    }),
                }),
                (0, l.jsx)("div", {
                    className: A.form,
                    children: (0, l.jsx)(x.gNt, {
                        label: R.intl.string(R.t.COu4bk),
                        description: b ? R.intl.string(R.t.qgQLpg) : R.intl.string(R.t.b0MaDV),
                        children: (0, l.jsx)(x.Checkbox, {
                            disabled: s,
                            checked: t.explicitContentFilter === k.lxg.ALL_MEMBERS,
                            onChange: n,
                            label: R.intl.string(R.t.WAUiMt),
                        }),
                    }),
                }),
            ],
        });
    },
    q = (e) => {
        let {
            selectableChannels: t,
            onRuleChannelChange: i,
            ruleChannel: s,
            onPublicUpdatesChannelChange: a,
            publicUpdatesChannel: r,
            headerId: c,
            theme: o,
            guildId: u,
        } = e;
        n.useEffect(() => {
            (0, y.BF)({
                fromStep: T.IO.SAFETY_CHECK,
                toStep: T.IO.BASICS,
                guildId: u,
            });
        }, [u]);
        let b = (0, m.wj)(o) ? G : D;
        return (0, l.jsxs)("div", {
            className: A.container,
            children: [
                (0, l.jsxs)("div", {
                    className: A.content,
                    children: [
                        (0, l.jsx)("img", {
                            alt: "",
                            src: b,
                            width: 80,
                        }),
                        (0, l.jsx)(x.Heading, {
                            variant: "heading-xl/semibold",
                            className: A.header,
                            id: c,
                            children: R.intl.string(R.t.YtXpEh),
                        }),
                        (0, l.jsx)(x.Text, {
                            color: "none",
                            variant: "text-md/normal",
                            className: A.headerCaption,
                            children: R.intl.string(R.t["J/fYR8"]),
                        }),
                    ],
                }),
                (0, l.jsx)("div", {
                    className: A.form,
                    children: (0, l.jsx)(d.d, {
                        label: R.intl.string(R.t.dYrhCO),
                        description: R.intl.string(R.t["+Af+Vw"]),
                        options: t,
                        onChange: i,
                        value: s,
                        maxVisibleItems: 4,
                    }),
                }),
                (0, l.jsx)("div", {
                    className: A.form,
                    children: (0, l.jsx)(d.d, {
                        label: R.intl.string(R.t.vAyDGU),
                        description: R.intl.string(R.t.ZFeonu),
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
    z = (e) => {
        let {
                guild: t,
                policyAccepted: i,
                everyoneRolePermissionsAccepted: s,
                onAcceptPolicy: r,
                onAcceptDefaultNotifications: c,
                onAcceptEveryoneRolePermissions: o,
                disableDefaultNotifications: d,
                disableEveryoneRolePermissions: h,
                headerId: p,
                theme: g,
            } = e,
            f = (0, m.wj)(g) ? Z : F;
        return (
            n.useEffect(() => {
                (0, y.BF)({
                    fromStep: T.IO.BASICS,
                    toStep: T.IO.FINISH,
                    guildId: t.id,
                });
            }, [t.id]),
            (0, l.jsxs)("div", {
                className: A.container,
                children: [
                    (0, l.jsxs)("div", {
                        className: A.content,
                        children: [
                            (0, l.jsx)("img", {
                                alt: "",
                                src: f,
                                width: 80,
                            }),
                            (0, l.jsx)(x.Heading, {
                                variant: "heading-xl/semibold",
                                className: A.header,
                                id: p,
                                children: R.intl.string(R.t["Pj/s/a"]),
                            }),
                            (0, l.jsx)(x.Text, {
                                color: "none",
                                variant: "text-md/normal",
                                className: A.headerCaption,
                                children: R.intl.string(R.t["IL7/no"]),
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: A.form,
                        children: (0, l.jsx)(u.u, {
                            text: d ? R.intl.string(R.t.PHjrpp) : null,
                            "aria-label": !!d && R.intl.string(R.t.PHjrpp),
                            children: (0, l.jsx)("div", {
                                children: (0, l.jsx)(x.$qM, {
                                    type: b.M0.ROW,
                                    disabled: d,
                                    value: t.defaultMessageNotifications === k.bL.ONLY_MENTIONS,
                                    onChange: (e, t) => c(t),
                                    className: a()({ [A.disabled]: d }),
                                    children: (0, l.jsx)(x.Text, {
                                        variant: "text-sm/normal",
                                        children: R.intl.format(R.t.K8Eg4P, {
                                            infoHook: () =>
                                                (0, l.jsx)(u.u, {
                                                    text: R.intl.string(R.t["3h2WyM"]),
                                                    "aria-label": R.intl.string(R.t["3h2WyM"]),
                                                    children: (0, l.jsx)(x.d3s, {
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
                    (0, l.jsx)(u.u, {
                        text: h ? R.intl.string(R.t.PHjrpp) : null,
                        "aria-label": !!h && R.intl.string(R.t.PHjrpp),
                        children: (0, l.jsx)("div", {
                            className: A.checkboxOption,
                            children: (0, l.jsx)(x.$qM, {
                                disabled: h,
                                value: s,
                                onChange: (e, t) => o(t),
                                className: a()({ [A.disabled]: h }),
                                children: (0, l.jsx)(x.Text, {
                                    variant: "text-sm/normal",
                                    children: R.intl.format(R.t.v8qCoG, {
                                        infoHook: () =>
                                            (0, l.jsx)(u.u, {
                                                text: R.intl.string(R.t["+Iyaif"]),
                                                "aria-label": R.intl.string(R.t["+Iyaif"]),
                                                children: (0, l.jsx)(x.d3s, {
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
                    (0, l.jsx)("div", {
                        className: A.form,
                        children: (0, l.jsx)(x.gNt, {
                            label: R.intl.string(R.t["k+b2Cf"]),
                            description: R.intl.format(R.t["BwbW/Q"], {
                                communityGuidelines: L.Z.getArticleURL(k.BhN.PUBLIC_GUILD_GUILDLINES),
                                typesOfGuilds: L.Z.getArticleURL(k.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES),
                            }),
                            children: (0, l.jsx)(x.Checkbox, {
                                checked: i,
                                onChange: r,
                                label: R.intl.string(R.t["9AG3wI"]),
                            }),
                        }),
                    }),
                ],
            })
        );
    };
function W(e) {
    let { guild: t } = e,
        { name: i, color: n } = (0, c.e7)([I.Z], () => I.Z.getEveryoneRole(t));
    return (0, l.jsx)("div", {
        className: A.__invalid_role,
        children: (0, l.jsxs)("span", {
            className: A.roleRow,
            children: [
                (0, l.jsx)(x.FhE, {
                    className: A.roleDot,
                    color: n.toString(),
                    background: !1,
                    tooltip: !1,
                }),
                (0, l.jsx)(x.Text, {
                    className: A.roleName,
                    variant: "text-sm/medium",
                    color: "interactive-text-active",
                    children: i,
                }),
            ],
        }),
    });
}
function X(e) {
    let { enabledPermissions: t, onGetPermisisonName: i } = e;
    return (0, l.jsxs)("div", {
        className: A.tableContainer,
        children: [
            (0, l.jsx)(x.Text, {
                className: A.tableHeader,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: R.intl.string(R.t.xU8RDk),
            }),
            (0, l.jsx)("div", {
                className: A.permissionsTable,
                children: t.map((e, t) =>
                    (0, l.jsxs)(
                        "div",
                        {
                            className: A.permissionRow,
                            children: [
                                (0, l.jsx)("div", { className: A.bulletWarning }),
                                (0, l.jsx)(x.Text, {
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
function V(e) {
    let { disabledPermissions: t, onGetPermisisonName: i } = e,
        n = R.intl.string(R.t.Yo5qlq);
    return (
        t.length === T.$X.length && (n = R.intl.string(R.t.FgMS6i)),
        (0, l.jsxs)("div", {
            className: A.tableContainer,
            children: [
                (0, l.jsx)(x.Text, {
                    className: A.tableHeader,
                    variant: "text-xs/semibold",
                    color: "text-muted",
                    children: n,
                }),
                (0, l.jsx)("div", {
                    className: A.permissionsTable,
                    children: t.map((e, t) =>
                        (0, l.jsxs)(
                            "div",
                            {
                                className: A.permissionRow,
                                children: [
                                    (0, l.jsx)("div", { className: A.bullet }),
                                    (0, l.jsx)(x.Text, {
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
function K(e) {
    let { permissions: t } = e,
        i = (e) => {
            switch (e.toString()) {
                case k.Plq.MENTION_EVERYONE.toString():
                    return R.intl.string(R.t.yCpsQw);
                case k.Plq.CREATE_GUILD_EXPRESSIONS.toString():
                    return R.intl.string(R.t.vo2LdY);
                case k.Plq.MANAGE_GUILD_EXPRESSIONS.toString():
                    return R.intl.string(R.t.cmp2W6);
                default:
                    return (0, j.wt)(e);
            }
        },
        { enabledPermissions: n, disabledPermissions: s } = t;
    return (0, l.jsxs)("div", {
        className: A.table,
        children: [
            0 !== n.length
                ? (0, l.jsx)(X, {
                      enabledPermissions: n,
                      onGetPermisisonName: i,
                  })
                : null,
            (0, l.jsx)(V, {
                disabledPermissions: s,
                onGetPermisisonName: i,
            }),
        ],
    });
}
let Q = (e) => {
        let { guild: t, policyAccepted: i, onAcceptPolicy: s, headerId: a, theme: r } = e,
            c = (0, m.wj)(r) ? Z : F;
        n.useEffect(() => {
            (0, y.BF)({
                fromStep: T.IO.BASICS,
                toStep: T.IO.FINISH,
                guildId: t.id,
            });
        }, [t.id]);
        let d = n.useMemo(() => {
            let e = [],
                i = [];
            return (
                T.$X.map((l) => {
                    M.oz(l, t) ? e.push(l) : i.push(l);
                }),
                {
                    enabledPermissions: e,
                    disabledPermissions: i,
                }
            );
        }, [t]);
        return (0, l.jsxs)("div", {
            className: A.container,
            children: [
                (0, l.jsxs)("div", {
                    className: A.content,
                    children: [
                        (0, l.jsx)("img", {
                            alt: "",
                            src: c,
                            width: 80,
                        }),
                        (0, l.jsx)(x.Heading, {
                            variant: "heading-xl/semibold",
                            className: A.updatedHeader,
                            id: a,
                            children: R.intl.string(R.t["Pj/s/a"]),
                        }),
                    ],
                }),
                (0, l.jsx)("div", {
                    className: A.updatedForm,
                    children: (0, l.jsxs)(x.gNt, {
                        label: R.intl.string(R.t["0q344R"]),
                        children: [
                            (0, l.jsxs)("div", {
                                className: A.checklistRow,
                                children: [
                                    (0, l.jsx)(x.owK, {
                                        size: "md",
                                        className: A.checklistIcon,
                                        color: o.Z.unsafe_rawColors.GREEN_360.css,
                                        secondaryColor: o.Z.unsafe_rawColors.WHITE.css,
                                    }),
                                    (0, l.jsx)(x.Text, {
                                        variant: "text-md/normal",
                                        children: R.intl.format(R.t.K8Eg4P, {
                                            infoHook: () =>
                                                (0, l.jsx)(u.u, {
                                                    text: R.intl.string(R.t["3h2WyM"]),
                                                    "aria-label": R.intl.string(R.t["3h2WyM"]),
                                                    children: (0, l.jsx)(x.d3s, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                        className: A.icon,
                                                    }),
                                                }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: A.checklistRow,
                                children: [
                                    (0, l.jsx)(x.owK, {
                                        size: "md",
                                        className: A.checklistIcon,
                                        color: o.Z.unsafe_rawColors.GREEN_360.css,
                                        secondaryColor: o.Z.unsafe_rawColors.WHITE.css,
                                    }),
                                    (0, l.jsx)(x.Text, {
                                        variant: "text-md/normal",
                                        children: R.intl.string(R.t.LfeFFr),
                                    }),
                                    (0, l.jsx)(W, { guild: t }),
                                ],
                            }),
                            (0, l.jsx)(K, { permissions: d }),
                        ],
                    }),
                }),
                (0, l.jsx)("div", {
                    className: A.updatedForm,
                    children: (0, l.jsx)(x.gNt, {
                        label: R.intl.string(R.t["k+b2Cf"]),
                        description: R.intl.format(R.t["BwbW/Q"], {
                            communityGuidelines: L.Z.getArticleURL(k.BhN.PUBLIC_GUILD_GUILDLINES),
                            typesOfGuilds: L.Z.getArticleURL(k.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES),
                        }),
                        children: (0, l.jsx)(x.Checkbox, {
                            label: R.intl.string(R.t["9AG3wI"]),
                            checked: i,
                            onChange: s,
                        }),
                    }),
                }),
            ],
        });
    },
    $ = (e) => {
        var t;
        let { transitionState: i, onClose: s } = e;
        n.useEffect(() => {
            O.default.track(k.rMx.OPEN_MODAL, { type: T.tA });
        }, []);
        let { guild: a } = (0, c.cj)([v.Z], () => v.Z.getProps()),
            o = (0, c.e7)([C.Z], () => C.Z.theme),
            [d, u] = n.useState(!1),
            [m, b] = n.useState(!T.$X.some((e) => M.oz(e, a))),
            [x, j] = n.useState(T.b4),
            [E, L] = n.useState(T.b4),
            [y] = n.useState(null == a ? void 0 : a.defaultMessageNotifications),
            [G] = n.useState(null == a ? void 0 : a.verificationLevel),
            [D] = n.useState(null == a ? void 0 : a.explicitContentFilter),
            [Z] = n.useState(m),
            F = (0, c.e7)([I.Z], () => (null != a ? I.Z.getEveryoneRole(a) : void 0)),
            B = (0, c.e7)([S.ZP], () => (null != a ? S.ZP.getChannels(a.id) : null)),
            U = (0, g.Dt)(),
            { enabled: W } = (0, h.D2)(null != (t = null == a ? void 0 : a.id) ? t : k.lds);
        if (null == a) return null;
        let X = [
            {
                value: T.b4,
                label: R.intl.string(R.t.Cla0re),
            },
        ];
        B[S.sH].forEach((e) => {
            let { channel: t } = e;
            t.type === k.d4z.GUILD_TEXT &&
                X.push({
                    value: t.id,
                    label: (0, p.F6)(t, w.default, _.Z, !0),
                });
        });
        let V = G !== k.sFg.NONE,
            K = D === k.lxg.ALL_MEMBERS,
            $ = y === k.bL.ONLY_MENTIONS,
            J = async () => {
                var e, t;
                if (null == F || !d) return;
                let i = new Set(a.features);
                i.add(k.GuildFeatures.COMMUNITY);
                let l = m ? r.Od(F.permissions, T.mu) : F.permissions,
                    n =
                        ((e = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var i = null != arguments[t] ? arguments[t] : {},
                                    l = Object.keys(i);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (l = l.concat(
                                        Object.getOwnPropertySymbols(i).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(i, e).enumerable;
                                        }),
                                    )),
                                    l.forEach(function (t) {
                                        var l;
                                        (l = i[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: l,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = l);
                                    });
                            }
                            return e;
                        })({}, F)),
                        (t = t = { permissions: l }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                            : (function (e, t) {
                                  var i = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var l = Object.getOwnPropertySymbols(e);
                                      i.push.apply(i, l);
                                  }
                                  return i;
                              })(Object(t)).forEach(function (i) {
                                  Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i));
                              }),
                        e);
                l !== F.permissions && (await (0, N.Gf)(a.id, [n])),
                    f.Z.updateGuild({
                        features: i,
                        rulesChannelId: x,
                        publicUpdatesChannelId: E,
                    }),
                    await f.Z.saveGuild(a.id, {
                        features: i,
                        rulesChannelId: x,
                        verificationLevel: a.verificationLevel,
                        explicitContentFilter: a.explicitContentFilter,
                        publicUpdatesChannelId: E,
                        defaultMessageNotifications: a.defaultMessageNotifications,
                    }),
                    setTimeout(() => {
                        s();
                    }, 0);
            },
            ee = (0, l.jsx)(Y, {
                guild: a,
                disableVerificationLevel: V,
                disableContentFilter: K,
                onAcceptVerificationLevel: (e) => {
                    if (!e) return void f.Z.updateGuild({ verificationLevel: G });
                    e && f.Z.updateGuild({ verificationLevel: k.sFg.LOW });
                },
                onAcceptContentFilter: (e) => {
                    if (!e) return void f.Z.updateGuild({ explicitContentFilter: D });
                    f.Z.updateGuild({ explicitContentFilter: k.lxg.ALL_MEMBERS });
                },
                headerId: U,
                theme: o,
            }),
            et = (0, l.jsx)(q, {
                selectableChannels: X,
                onRuleChannelChange: (e) => {
                    j(e);
                },
                onPublicUpdatesChannelChange: (e) => {
                    L(e);
                },
                ruleChannel: x,
                publicUpdatesChannel: E,
                headerId: U,
                theme: o,
                guildId: a.id,
            }),
            ei = W
                ? (0, l.jsx)(Q, {
                      guild: a,
                      policyAccepted: d,
                      onAcceptPolicy: (e) => {
                          if (e) {
                              u(!0),
                                  $ || f.Z.updateGuild({ defaultMessageNotifications: k.bL.ONLY_MENTIONS }),
                                  m || null == F || b(!0);
                              return;
                          }
                          u(!1), $ && f.Z.updateGuild({ defaultMessageNotifications: y }), m && null != F && b(!1);
                      },
                      headerId: U,
                      theme: o,
                  })
                : (0, l.jsx)(z, {
                      guild: a,
                      disableDefaultNotifications: $,
                      disableEveryoneRolePermissions: Z,
                      policyAccepted: d,
                      everyoneRolePermissionsAccepted: m,
                      onAcceptPolicy: (e) => {
                          if (e) return void u(!0);
                          u(!1);
                      },
                      onAcceptDefaultNotifications: (e) => {
                          if (!e) return void f.Z.updateGuild({ defaultMessageNotifications: y });
                          f.Z.updateGuild({ defaultMessageNotifications: k.bL.ONLY_MENTIONS });
                      },
                      onAcceptEveryoneRolePermissions: (e) => {
                          null != F && (e ? b(!0) : b(!1));
                      },
                      headerId: U,
                      theme: o,
                  }),
            el = (0, l.jsx)("img", {
                alt: "",
                src: H,
                className: A.footerImage,
                width: 240,
            }),
            en = [
                {
                    modalContent: ee,
                    disableNextStep:
                        a.explicitContentFilter !== k.lxg.ALL_MEMBERS || a.verificationLevel === k.sFg.NONE,
                    overviewTitle: R.intl.string(R.t.PpYoSj),
                },
                {
                    modalContent: et,
                    disableNextStep: null == x || null == E,
                    overviewTitle: R.intl.string(R.t["7MEtIY"]),
                },
                {
                    modalContent: ei,
                    disableNextStep: !d,
                    overviewTitle: R.intl.string(R.t.Pj9P8E),
                },
            ];
        return (0, l.jsx)(P.Z, {
            stepData: en,
            title: R.intl.string(R.t["6U5XTu"]),
            transitionState: i,
            onClose: () => {
                s(), O.default.track(k.rMx.MODAL_DISMISSED, { type: T.tA });
            },
            completeButtonText: R.intl.string(R.t.XGl4ba),
            onComplete: J,
            overviewFooter: el,
            sequencerClassName: A.container,
            autoCloseOnComplete: !1,
        });
    };
