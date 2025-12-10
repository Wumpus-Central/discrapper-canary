i.d(t, { default: () => $ }), i(539854), i(388685);
var s = i(54381),
    l = i(473749),
    n = i(120356),
    a = i.n(n),
    r = i(149765),
    o = i(442837),
    c = i(692547),
    d = i(668339),
    u = i(28664),
    x = i(780384),
    m = i(755721),
    h = i(481060),
    g = i(785697),
    p = i(933557),
    f = i(313201),
    v = i(434404),
    N = i(999382),
    j = i(84058),
    b = i(422559),
    C = i(210887),
    E = i(984933),
    S = i(485386),
    I = i(430824),
    O = i(699516),
    L = i(594174),
    M = i(626135),
    w = i(63063),
    y = i(700785),
    P = i(245315),
    _ = i(513796),
    T = i(135899),
    k = i(981631),
    A = i(388032),
    G = i(353302),
    R = i(289575),
    Z = i(371411),
    D = i(112847),
    F = i(516954),
    U = i(674889),
    B = i(162752),
    H = i(438825);
let Y = (e) => {
        let {
                guild: t,
                onAcceptVerificationLevel: i,
                onAcceptContentFilter: l,
                disableContentFilter: n,
                disableVerificationLevel: a,
                headerId: r,
                theme: c,
            } = e,
            d = (0, o.e7)([I.Z], () => I.Z.getGuild(t.id), [t.id]),
            u = null != d && d.verificationLevel > k.sFg.NONE,
            m = (null == d ? void 0 : d.explicitContentFilter) === k.lxg.ALL_MEMBERS,
            g = (0, x.wj)(c) ? U : B;
        return (0, s.jsxs)("div", {
            className: G.container,
            children: [
                (0, s.jsxs)("div", {
                    className: G.content,
                    children: [
                        (0, s.jsx)("img", {
                            alt: "",
                            src: g,
                            width: 80,
                        }),
                        (0, s.jsx)(h.Heading, {
                            variant: "heading-xl/semibold",
                            className: G.header,
                            id: r,
                            children: A.intl.string(A.t.QrjLYl),
                        }),
                        (0, s.jsx)(h.Text, {
                            color: "none",
                            variant: "text-md/normal",
                            className: G.headerCaption,
                            children: A.intl.string(A.t.i1STwu),
                        }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: G.form,
                    children: (0, s.jsx)(h.gNt, {
                        label: A.intl.string(A.t.x4hbeZ),
                        description: u ? A.intl.string(A.t.k5crqq) : A.intl.string(A.t.fHiGA0),
                        children: (0, s.jsx)(h.Checkbox, {
                            disabled: a,
                            checked: t.verificationLevel > k.sFg.NONE,
                            onChange: i,
                            label: A.intl.string(A.t.x4hbeZ),
                        }),
                    }),
                }),
                (0, s.jsx)("div", {
                    className: G.form,
                    children: (0, s.jsx)(h.gNt, {
                        label: A.intl.string(A.t.COu4bk),
                        description: m ? A.intl.string(A.t.qgQLpg) : A.intl.string(A.t.b0MaDV),
                        children: (0, s.jsx)(h.Checkbox, {
                            disabled: n,
                            checked: t.explicitContentFilter === k.lxg.ALL_MEMBERS,
                            onChange: l,
                            label: A.intl.string(A.t.WAUiMt),
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
            ruleChannel: n,
            onPublicUpdatesChannelChange: a,
            publicUpdatesChannel: r,
            headerId: o,
            theme: c,
            guildId: u,
        } = e;
        l.useEffect(() => {
            (0, P.BF)({
                fromStep: T.IO.SAFETY_CHECK,
                toStep: T.IO.BASICS,
                guildId: u,
            });
        }, [u]);
        let m = (0, x.wj)(c) ? R : Z;
        return (0, s.jsxs)("div", {
            className: G.container,
            children: [
                (0, s.jsxs)("div", {
                    className: G.content,
                    children: [
                        (0, s.jsx)("img", {
                            alt: "",
                            src: m,
                            width: 80,
                        }),
                        (0, s.jsx)(h.Heading, {
                            variant: "heading-xl/semibold",
                            className: G.header,
                            id: o,
                            children: A.intl.string(A.t.YtXpEh),
                        }),
                        (0, s.jsx)(h.Text, {
                            color: "none",
                            variant: "text-md/normal",
                            className: G.headerCaption,
                            children: A.intl.string(A.t["J/fYR8"]),
                        }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: G.form,
                    children: (0, s.jsx)(d.d, {
                        label: A.intl.string(A.t.dYrhCO),
                        description: A.intl.string(A.t["+Af+Vw"]),
                        options: t,
                        onChange: i,
                        value: n,
                        maxVisibleItems: 4,
                    }),
                }),
                (0, s.jsx)("div", {
                    className: G.form,
                    children: (0, s.jsx)(d.d, {
                        label: A.intl.string(A.t.vAyDGU),
                        description: A.intl.string(A.t.ZFeonu),
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
                everyoneRolePermissionsAccepted: n,
                onAcceptPolicy: r,
                onAcceptDefaultNotifications: o,
                onAcceptEveryoneRolePermissions: c,
                disableDefaultNotifications: d,
                disableEveryoneRolePermissions: g,
                headerId: p,
                theme: f,
            } = e,
            v = (0, x.wj)(f) ? D : F;
        return (
            l.useEffect(() => {
                (0, P.BF)({
                    fromStep: T.IO.BASICS,
                    toStep: T.IO.FINISH,
                    guildId: t.id,
                });
            }, [t.id]),
            (0, s.jsxs)("div", {
                className: G.container,
                children: [
                    (0, s.jsxs)("div", {
                        className: G.content,
                        children: [
                            (0, s.jsx)("img", {
                                alt: "",
                                src: v,
                                width: 80,
                            }),
                            (0, s.jsx)(h.Heading, {
                                variant: "heading-xl/semibold",
                                className: G.header,
                                id: p,
                                children: A.intl.string(A.t["Pj/s/a"]),
                            }),
                            (0, s.jsx)(h.Text, {
                                color: "none",
                                variant: "text-md/normal",
                                className: G.headerCaption,
                                children: A.intl.string(A.t["IL7/no"]),
                            }),
                        ],
                    }),
                    (0, s.jsx)("div", {
                        className: G.form,
                        children: (0, s.jsx)(u.u, {
                            text: d ? A.intl.string(A.t.PHjrpp) : null,
                            "aria-label": !!d && A.intl.string(A.t.PHjrpp),
                            children: (0, s.jsx)("div", {
                                children: (0, s.jsx)(h.$qM, {
                                    type: m.M0.ROW,
                                    disabled: d,
                                    value: t.defaultMessageNotifications === k.bL.ONLY_MENTIONS,
                                    onChange: (e, t) => o(t),
                                    className: a()({ [G.disabled]: d }),
                                    children: (0, s.jsx)(h.Text, {
                                        variant: "text-sm/normal",
                                        children: A.intl.format(A.t.K8Eg4P, {
                                            infoHook: () =>
                                                (0, s.jsx)(u.u, {
                                                    text: A.intl.string(A.t["3h2WyM"]),
                                                    "aria-label": A.intl.string(A.t["3h2WyM"]),
                                                    children: (0, s.jsx)(h.d3s, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                        className: G.icon,
                                                    }),
                                                }),
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    }),
                    (0, s.jsx)(u.u, {
                        text: g ? A.intl.string(A.t.PHjrpp) : null,
                        "aria-label": !!g && A.intl.string(A.t.PHjrpp),
                        children: (0, s.jsx)("div", {
                            className: G.checkboxOption,
                            children: (0, s.jsx)(h.$qM, {
                                disabled: g,
                                value: n,
                                onChange: (e, t) => c(t),
                                className: a()({ [G.disabled]: g }),
                                children: (0, s.jsx)(h.Text, {
                                    variant: "text-sm/normal",
                                    children: A.intl.format(A.t.v8qCoG, {
                                        infoHook: () =>
                                            (0, s.jsx)(u.u, {
                                                text: A.intl.string(A.t["+Iyaif"]),
                                                "aria-label": A.intl.string(A.t["+Iyaif"]),
                                                children: (0, s.jsx)(h.d3s, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: G.icon,
                                                }),
                                            }),
                                    }),
                                }),
                            }),
                        }),
                    }),
                    (0, s.jsx)("div", {
                        className: G.form,
                        children: (0, s.jsx)(h.gNt, {
                            label: A.intl.string(A.t["k+b2Cf"]),
                            description: A.intl.format(A.t["BwbW/Q"], {
                                communityGuidelines: w.Z.getArticleURL(k.BhN.PUBLIC_GUILD_GUILDLINES),
                                typesOfGuilds: w.Z.getArticleURL(k.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES),
                            }),
                            children: (0, s.jsx)(h.Checkbox, {
                                checked: i,
                                onChange: r,
                                label: A.intl.string(A.t["9AG3wI"]),
                            }),
                        }),
                    }),
                ],
            })
        );
    };
function W(e) {
    let { guild: t } = e,
        { name: i, color: l } = (0, o.e7)([S.Z], () => S.Z.getEveryoneRole(t));
    return (0, s.jsx)("div", {
        className: G.__invalid_role,
        children: (0, s.jsxs)("span", {
            className: G.roleRow,
            children: [
                (0, s.jsx)(h.FhE, {
                    className: G.roleDot,
                    color: l.toString(),
                    background: !1,
                    tooltip: !1,
                }),
                (0, s.jsx)(h.Text, {
                    className: G.roleName,
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
    return (0, s.jsxs)("div", {
        className: G.tableContainer,
        children: [
            (0, s.jsx)(h.Text, {
                className: G.tableHeader,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: A.intl.string(A.t.xU8RDk),
            }),
            (0, s.jsx)("div", {
                className: G.permissionsTable,
                children: t.map((e, t) =>
                    (0, s.jsxs)(
                        "div",
                        {
                            className: G.permissionRow,
                            children: [
                                (0, s.jsx)("div", { className: G.bulletWarning }),
                                (0, s.jsx)(h.Text, {
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
        l = A.intl.string(A.t.Yo5qlq);
    return (
        t.length === T.$X.length && (l = A.intl.string(A.t.FgMS6i)),
        (0, s.jsxs)("div", {
            className: G.tableContainer,
            children: [
                (0, s.jsx)(h.Text, {
                    className: G.tableHeader,
                    variant: "text-xs/semibold",
                    color: "text-muted",
                    children: l,
                }),
                (0, s.jsx)("div", {
                    className: G.permissionsTable,
                    children: t.map((e, t) =>
                        (0, s.jsxs)(
                            "div",
                            {
                                className: G.permissionRow,
                                children: [
                                    (0, s.jsx)("div", { className: G.bullet }),
                                    (0, s.jsx)(h.Text, {
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
                    return A.intl.string(A.t.yCpsQw);
                case k.Plq.CREATE_GUILD_EXPRESSIONS.toString():
                    return A.intl.string(A.t.vo2LdY);
                case k.Plq.MANAGE_GUILD_EXPRESSIONS.toString():
                    return A.intl.string(A.t.cmp2W6);
                default:
                    return (0, b.wt)(e);
            }
        },
        { enabledPermissions: l, disabledPermissions: n } = t;
    return (0, s.jsxs)("div", {
        className: G.table,
        children: [
            0 !== l.length
                ? (0, s.jsx)(X, {
                      enabledPermissions: l,
                      onGetPermisisonName: i,
                  })
                : null,
            (0, s.jsx)(V, {
                disabledPermissions: n,
                onGetPermisisonName: i,
            }),
        ],
    });
}
let Q = (e) => {
        let { guild: t, policyAccepted: i, onAcceptPolicy: n, headerId: a, theme: r } = e,
            o = (0, x.wj)(r) ? D : F;
        l.useEffect(() => {
            (0, P.BF)({
                fromStep: T.IO.BASICS,
                toStep: T.IO.FINISH,
                guildId: t.id,
            });
        }, [t.id]);
        let d = l.useMemo(() => {
            let e = [],
                i = [];
            return (
                T.$X.map((s) => {
                    y.oz(s, t) ? e.push(s) : i.push(s);
                }),
                {
                    enabledPermissions: e,
                    disabledPermissions: i,
                }
            );
        }, [t]);
        return (0, s.jsxs)("div", {
            className: G.container,
            children: [
                (0, s.jsxs)("div", {
                    className: G.content,
                    children: [
                        (0, s.jsx)("img", {
                            alt: "",
                            src: o,
                            width: 80,
                        }),
                        (0, s.jsx)(h.Heading, {
                            variant: "heading-xl/semibold",
                            className: G.updatedHeader,
                            id: a,
                            children: A.intl.string(A.t["Pj/s/a"]),
                        }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: G.updatedForm,
                    children: (0, s.jsxs)(h.gNt, {
                        label: A.intl.string(A.t["0q344R"]),
                        children: [
                            (0, s.jsxs)("div", {
                                className: G.checklistRow,
                                children: [
                                    (0, s.jsx)(h.owK, {
                                        size: "md",
                                        className: G.checklistIcon,
                                        color: c.Z.unsafe_rawColors.GREEN_360.css,
                                        secondaryColor: c.Z.unsafe_rawColors.WHITE_500.css,
                                    }),
                                    (0, s.jsx)(h.Text, {
                                        variant: "text-md/normal",
                                        children: A.intl.format(A.t.K8Eg4P, {
                                            infoHook: () =>
                                                (0, s.jsx)(u.u, {
                                                    text: A.intl.string(A.t["3h2WyM"]),
                                                    "aria-label": A.intl.string(A.t["3h2WyM"]),
                                                    children: (0, s.jsx)(h.d3s, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                        className: G.icon,
                                                    }),
                                                }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: G.checklistRow,
                                children: [
                                    (0, s.jsx)(h.owK, {
                                        size: "md",
                                        className: G.checklistIcon,
                                        color: c.Z.unsafe_rawColors.GREEN_360.css,
                                        secondaryColor: c.Z.unsafe_rawColors.WHITE_500.css,
                                    }),
                                    (0, s.jsx)(h.Text, {
                                        variant: "text-md/normal",
                                        children: A.intl.string(A.t.LfeFFr),
                                    }),
                                    (0, s.jsx)(W, { guild: t }),
                                ],
                            }),
                            (0, s.jsx)(K, { permissions: d }),
                        ],
                    }),
                }),
                (0, s.jsx)("div", {
                    className: G.updatedForm,
                    children: (0, s.jsx)(h.gNt, {
                        label: A.intl.string(A.t["k+b2Cf"]),
                        description: A.intl.format(A.t["BwbW/Q"], {
                            communityGuidelines: w.Z.getArticleURL(k.BhN.PUBLIC_GUILD_GUILDLINES),
                            typesOfGuilds: w.Z.getArticleURL(k.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES),
                        }),
                        children: (0, s.jsx)(h.Checkbox, {
                            label: A.intl.string(A.t["9AG3wI"]),
                            checked: i,
                            onChange: n,
                        }),
                    }),
                }),
            ],
        });
    },
    $ = (e) => {
        var t;
        let { transitionState: i, onClose: n } = e;
        l.useEffect(() => {
            M.default.track(k.rMx.OPEN_MODAL, { type: T.tA });
        }, []);
        let { guild: a } = (0, o.cj)([N.Z], () => N.Z.getProps()),
            c = (0, o.e7)([C.Z], () => C.Z.theme),
            [d, u] = l.useState(!1),
            [x, m] = l.useState(!T.$X.some((e) => y.oz(e, a))),
            [h, b] = l.useState(T.b4),
            [I, w] = l.useState(T.b4),
            [P] = l.useState(null == a ? void 0 : a.defaultMessageNotifications),
            [R] = l.useState(null == a ? void 0 : a.verificationLevel),
            [Z] = l.useState(null == a ? void 0 : a.explicitContentFilter),
            [D] = l.useState(x),
            F = (0, o.e7)([S.Z], () => (null != a ? S.Z.getEveryoneRole(a) : void 0)),
            U = (0, o.e7)([E.ZP], () => (null != a ? E.ZP.getChannels(a.id) : null)),
            B = (0, f.Dt)(),
            { enabled: W } = (0, g.D2)(null != (t = null == a ? void 0 : a.id) ? t : k.lds);
        if (null == a) return null;
        let X = [
            {
                value: T.b4,
                label: A.intl.string(A.t.Cla0re),
            },
        ];
        U[E.sH].forEach((e) => {
            let { channel: t } = e;
            t.type === k.d4z.GUILD_TEXT &&
                X.push({
                    value: t.id,
                    label: (0, p.F6)(t, L.default, O.Z, !0),
                });
        });
        let V = R !== k.sFg.NONE,
            K = Z === k.lxg.ALL_MEMBERS,
            $ = P === k.bL.ONLY_MENTIONS,
            J = async () => {
                var e, t;
                if (null == F || !d) return;
                let i = new Set(a.features);
                i.add(k.GuildFeatures.COMMUNITY);
                let s = x ? r.Od(F.permissions, T.mu) : F.permissions,
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
                    v.Z.updateGuild({
                        features: i,
                        rulesChannelId: h,
                        publicUpdatesChannelId: I,
                    }),
                    await v.Z.saveGuild(a.id, {
                        features: i,
                        rulesChannelId: h,
                        verificationLevel: a.verificationLevel,
                        explicitContentFilter: a.explicitContentFilter,
                        publicUpdatesChannelId: I,
                        defaultMessageNotifications: a.defaultMessageNotifications,
                    }),
                    setTimeout(() => {
                        n();
                    }, 0);
            },
            ee = (0, s.jsx)(Y, {
                guild: a,
                disableVerificationLevel: V,
                disableContentFilter: K,
                onAcceptVerificationLevel: (e) => {
                    if (!e) return void v.Z.updateGuild({ verificationLevel: R });
                    e && v.Z.updateGuild({ verificationLevel: k.sFg.LOW });
                },
                onAcceptContentFilter: (e) => {
                    if (!e) return void v.Z.updateGuild({ explicitContentFilter: Z });
                    v.Z.updateGuild({ explicitContentFilter: k.lxg.ALL_MEMBERS });
                },
                headerId: B,
                theme: c,
            }),
            et = (0, s.jsx)(q, {
                selectableChannels: X,
                onRuleChannelChange: (e) => {
                    b(e);
                },
                onPublicUpdatesChannelChange: (e) => {
                    w(e);
                },
                ruleChannel: h,
                publicUpdatesChannel: I,
                headerId: B,
                theme: c,
                guildId: a.id,
            }),
            ei = W
                ? (0, s.jsx)(Q, {
                      guild: a,
                      policyAccepted: d,
                      onAcceptPolicy: (e) => {
                          if (e) {
                              u(!0),
                                  $ || v.Z.updateGuild({ defaultMessageNotifications: k.bL.ONLY_MENTIONS }),
                                  x || null == F || m(!0);
                              return;
                          }
                          u(!1), $ && v.Z.updateGuild({ defaultMessageNotifications: P }), x && null != F && m(!1);
                      },
                      headerId: B,
                      theme: c,
                  })
                : (0, s.jsx)(z, {
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
                          if (!e) return void v.Z.updateGuild({ defaultMessageNotifications: P });
                          v.Z.updateGuild({ defaultMessageNotifications: k.bL.ONLY_MENTIONS });
                      },
                      onAcceptEveryoneRolePermissions: (e) => {
                          null != F && (e ? m(!0) : m(!1));
                      },
                      headerId: B,
                      theme: c,
                  }),
            es = (0, s.jsx)("img", {
                alt: "",
                src: H,
                className: G.footerImage,
                width: 240,
            }),
            el = [
                {
                    modalContent: ee,
                    disableNextStep:
                        a.explicitContentFilter !== k.lxg.ALL_MEMBERS || a.verificationLevel === k.sFg.NONE,
                    overviewTitle: A.intl.string(A.t.PpYoSj),
                },
                {
                    modalContent: et,
                    disableNextStep: null == h || null == I,
                    overviewTitle: A.intl.string(A.t["7MEtIY"]),
                },
                {
                    modalContent: ei,
                    disableNextStep: !d,
                    overviewTitle: A.intl.string(A.t.Pj9P8E),
                },
            ];
        return (0, s.jsx)(_.Z, {
            stepData: el,
            title: A.intl.string(A.t["6U5XTu"]),
            transitionState: i,
            onClose: () => {
                n(), M.default.track(k.rMx.MODAL_DISMISSED, { type: T.tA });
            },
            completeButtonText: A.intl.string(A.t.XGl4ba),
            onComplete: J,
            overviewFooter: es,
            sequencerClassName: G.container,
            autoCloseOnComplete: !1,
        });
    };
