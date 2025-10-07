i.d(t, { default: () => K }), i(539854), i(388685);
var n = i(951288),
    l = i(647438),
    s = i(120356),
    a = i.n(s),
    r = i(149765),
    o = i(442837),
    c = i(692547),
    d = i(28664),
    u = i(780384),
    m = i(755721),
    x = i(481060),
    p = i(785697),
    h = i(933557),
    f = i(313201),
    b = i(434404),
    v = i(999382),
    g = i(84058),
    N = i(422559),
    j = i(210887),
    _ = i(984933),
    C = i(485386),
    S = i(430824),
    I = i(699516),
    E = i(594174),
    O = i(626135),
    w = i(63063),
    M = i(700785),
    L = i(245315),
    y = i(513796),
    T = i(135899),
    P = i(981631),
    R = i(388032),
    A = i(353302),
    k = i(289575),
    D = i(371411),
    G = i(112847),
    Z = i(516954),
    q = i(674889),
    F = i(162752),
    B = i(438825);
let U = (e) => {
        let {
                guild: t,
                onAcceptVerificationLevel: i,
                onAcceptContentFilter: l,
                disableContentFilter: s,
                disableVerificationLevel: a,
                headerId: r,
                theme: c,
            } = e,
            d = (0, o.e7)([S.Z], () => S.Z.getGuild(t.id), [t.id]),
            p = null != d && d.verificationLevel > P.sFg.NONE,
            h = (null == d ? void 0 : d.explicitContentFilter) === P.lxg.ALL_MEMBERS,
            f = (0, u.wj)(c) ? q : F;
        return (0, n.jsxs)("div", {
            className: A.container,
            children: [
                (0, n.jsxs)("div", {
                    className: A.content,
                    children: [
                        (0, n.jsx)("img", {
                            alt: "",
                            src: f,
                            width: 80,
                        }),
                        (0, n.jsx)(x.X6q, {
                            variant: "heading-xl/semibold",
                            className: A.header,
                            id: r,
                            children: R.intl.string(R.t.QrjLYm),
                        }),
                        (0, n.jsx)(x.Text, {
                            color: "none",
                            variant: "text-md/normal",
                            className: A.headerCaption,
                            children: R.intl.string(R.t.i1STws),
                        }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: A.form,
                    children: (0, n.jsx)(x.NIc, {
                        label: R.intl.string(R.t.x4hbeX),
                        description: p ? R.intl.string(R.t.k5crqq) : R.intl.string(R.t.fHiGAw),
                        children: (0, n.jsx)(m.$q, {
                            type: m.M0.ROW,
                            disabled: a,
                            value: t.verificationLevel > P.sFg.NONE,
                            onChange: i,
                            children: (0, n.jsx)(x.Text, {
                                variant: "text-sm/normal",
                                children: R.intl.string(R.t.x4hbeX),
                            }),
                        }),
                    }),
                }),
                (0, n.jsx)("div", {
                    className: A.form,
                    children: (0, n.jsx)(x.NIc, {
                        label: R.intl.string(R.t.COu4bm),
                        description: h ? R.intl.string(R.t.qgQLpq) : R.intl.string(R.t.b0MaDQ),
                        children: (0, n.jsx)(m.$q, {
                            type: m.M0.ROW,
                            disabled: s,
                            value: t.explicitContentFilter === P.lxg.ALL_MEMBERS,
                            onChange: l,
                            children: (0, n.jsx)(x.Text, {
                                variant: "text-sm/normal",
                                children: R.intl.string(R.t.WAUiMj),
                            }),
                        }),
                    }),
                }),
            ],
        });
    },
    W = (e) => {
        let {
            selectableChannels: t,
            onRuleChannelChange: i,
            ruleChannel: s,
            onPublicUpdatesChannelChange: a,
            publicUpdatesChannel: r,
            headerId: o,
            theme: c,
            guildId: d,
        } = e;
        l.useEffect(() => {
            (0, L.BF)({
                fromStep: T.IO.SAFETY_CHECK,
                toStep: T.IO.BASICS,
                guildId: d,
            });
        }, [d]);
        let m = (0, u.wj)(c) ? k : D;
        return (0, n.jsxs)("div", {
            className: A.container,
            children: [
                (0, n.jsxs)("div", {
                    className: A.content,
                    children: [
                        (0, n.jsx)("img", {
                            alt: "",
                            src: m,
                            width: 80,
                        }),
                        (0, n.jsx)(x.X6q, {
                            variant: "heading-xl/semibold",
                            className: A.header,
                            id: o,
                            children: R.intl.string(R.t.YtXpEh),
                        }),
                        (0, n.jsx)(x.Text, {
                            color: "none",
                            variant: "text-md/normal",
                            className: A.headerCaption,
                            children: R.intl.string(R.t["J/fYR0"]),
                        }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: A.form,
                    children: (0, n.jsx)(x.VcW, {
                        label: R.intl.string(R.t.dYrhCA),
                        description: R.intl.string(R.t["+Af+V1"]),
                        options: t,
                        onChange: i,
                        value: s,
                        maxVisibleItems: 4,
                    }),
                }),
                (0, n.jsx)("div", {
                    className: A.form,
                    children: (0, n.jsx)(x.VcW, {
                        label: R.intl.string(R.t.vAyDGR),
                        description: R.intl.string(R.t.ZFeonp),
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
    H = (e) => {
        let {
                guild: t,
                policyAccepted: i,
                everyoneRolePermissionsAccepted: s,
                onAcceptPolicy: r,
                onAcceptDefaultNotifications: o,
                onAcceptEveryoneRolePermissions: c,
                disableDefaultNotifications: p,
                disableEveryoneRolePermissions: h,
                headerId: f,
                theme: b,
            } = e,
            v = (0, u.wj)(b) ? G : Z;
        return (
            l.useEffect(() => {
                (0, L.BF)({
                    fromStep: T.IO.BASICS,
                    toStep: T.IO.FINISH,
                    guildId: t.id,
                });
            }, [t.id]),
            (0, n.jsxs)("div", {
                className: A.container,
                children: [
                    (0, n.jsxs)("div", {
                        className: A.content,
                        children: [
                            (0, n.jsx)("img", {
                                alt: "",
                                src: v,
                                width: 80,
                            }),
                            (0, n.jsx)(x.X6q, {
                                variant: "heading-xl/semibold",
                                className: A.header,
                                id: f,
                                children: R.intl.string(R.t["Pj/s/f"]),
                            }),
                            (0, n.jsx)(x.Text, {
                                color: "none",
                                variant: "text-md/normal",
                                className: A.headerCaption,
                                children: R.intl.string(R.t["IL7/np"]),
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: A.form,
                        children: (0, n.jsx)(d.u, {
                            text: p ? R.intl.string(R.t.PHjrpq) : null,
                            "aria-label": !!p && R.intl.string(R.t.PHjrpq),
                            children: (0, n.jsx)("div", {
                                children: (0, n.jsx)(m.$q, {
                                    type: m.M0.ROW,
                                    disabled: p,
                                    value: t.defaultMessageNotifications === P.bL.ONLY_MENTIONS,
                                    onChange: o,
                                    className: a()({ [A.disabled]: p }),
                                    children: (0, n.jsx)(x.Text, {
                                        variant: "text-sm/normal",
                                        children: R.intl.format(R.t.K8Eg4O, {
                                            infoHook: () =>
                                                (0, n.jsx)(d.u, {
                                                    text: R.intl.string(R.t["3h2WyM"]),
                                                    "aria-label": R.intl.string(R.t["3h2WyM"]),
                                                    children: (0, n.jsx)(x.d3s, {
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
                    (0, n.jsx)(d.u, {
                        text: h ? R.intl.string(R.t.PHjrpq) : null,
                        "aria-label": !!h && R.intl.string(R.t.PHjrpq),
                        children: (0, n.jsx)("div", {
                            className: A.checkboxOption,
                            children: (0, n.jsx)(m.$q, {
                                type: m.M0.ROW,
                                disabled: h,
                                value: s,
                                onChange: c,
                                className: a()({ [A.disabled]: h }),
                                children: (0, n.jsx)(x.Text, {
                                    variant: "text-sm/normal",
                                    children: R.intl.format(R.t.v8qCoK, {
                                        infoHook: () =>
                                            (0, n.jsx)(d.u, {
                                                text: R.intl.string(R.t["+IyaiY"]),
                                                "aria-label": R.intl.string(R.t["+IyaiY"]),
                                                children: (0, n.jsx)(x.d3s, {
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
                    (0, n.jsx)("div", {
                        className: A.form,
                        children: (0, n.jsx)(x.NIc, {
                            label: R.intl.string(R.t["k+b2CQ"]),
                            description: R.intl.format(R.t["BwbW/f"], {
                                communityGuidelines: w.Z.getArticleURL(P.BhN.PUBLIC_GUILD_GUILDLINES),
                                typesOfGuilds: w.Z.getArticleURL(P.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES),
                            }),
                            children: (0, n.jsx)(m.$q, {
                                type: m.M0.ROW,
                                value: i,
                                onChange: r,
                                children: (0, n.jsx)(x.Text, {
                                    variant: "text-sm/normal",
                                    children: R.intl.string(R.t["9AG3wM"]),
                                }),
                            }),
                        }),
                    }),
                ],
            })
        );
    };
function Y(e) {
    let { guild: t } = e,
        { name: i, color: l } = (0, o.e7)([C.Z], () => C.Z.getEveryoneRole(t));
    return (0, n.jsx)("div", {
        className: A.__invalid_role,
        children: (0, n.jsxs)("span", {
            className: A.roleRow,
            children: [
                (0, n.jsx)(x.FhE, {
                    className: A.roleDot,
                    color: l.toString(),
                    background: !1,
                    tooltip: !1,
                }),
                (0, n.jsx)(x.Text, {
                    className: A.roleName,
                    variant: "text-sm/medium",
                    color: "interactive-active",
                    children: i,
                }),
            ],
        }),
    });
}
function z(e) {
    let { enabledPermissions: t, onGetPermisisonName: i } = e;
    return (0, n.jsxs)("div", {
        className: A.tableContainer,
        children: [
            (0, n.jsx)(x.Text, {
                className: A.tableHeader,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: R.intl.string(R.t.xU8RDg),
            }),
            (0, n.jsx)("div", {
                className: A.permissionsTable,
                children: t.map((e, t) =>
                    (0, n.jsxs)(
                        "div",
                        {
                            className: A.permissionRow,
                            children: [
                                (0, n.jsx)("div", { className: A.bulletWarning }),
                                (0, n.jsx)(x.Text, {
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
        l = R.intl.string(R.t.Yo5qlp);
    return (
        t.length === T.$X.length && (l = R.intl.string(R.t.FgMS6u)),
        (0, n.jsxs)("div", {
            className: A.tableContainer,
            children: [
                (0, n.jsx)(x.Text, {
                    className: A.tableHeader,
                    variant: "text-xs/semibold",
                    color: "text-muted",
                    children: l,
                }),
                (0, n.jsx)("div", {
                    className: A.permissionsTable,
                    children: t.map((e, t) =>
                        (0, n.jsxs)(
                            "div",
                            {
                                className: A.permissionRow,
                                children: [
                                    (0, n.jsx)("div", { className: A.bullet }),
                                    (0, n.jsx)(x.Text, {
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
                case P.Plq.MENTION_EVERYONE.toString():
                    return R.intl.string(R.t.yCpsQ0);
                case P.Plq.CREATE_GUILD_EXPRESSIONS.toString():
                    return R.intl.string(R.t.vo2LdX);
                case P.Plq.MANAGE_GUILD_EXPRESSIONS.toString():
                    return R.intl.string(R.t.cmp2W1);
                default:
                    return (0, N.wt)(e);
            }
        },
        { enabledPermissions: l, disabledPermissions: s } = t;
    return (0, n.jsxs)("div", {
        className: A.table,
        children: [
            0 !== l.length
                ? (0, n.jsx)(z, {
                      enabledPermissions: l,
                      onGetPermisisonName: i,
                  })
                : null,
            (0, n.jsx)(X, {
                disabledPermissions: s,
                onGetPermisisonName: i,
            }),
        ],
    });
}
let $ = (e) => {
        let { guild: t, policyAccepted: i, onAcceptPolicy: s, headerId: a, theme: r } = e,
            o = (0, u.wj)(r) ? G : Z;
        l.useEffect(() => {
            (0, L.BF)({
                fromStep: T.IO.BASICS,
                toStep: T.IO.FINISH,
                guildId: t.id,
            });
        }, [t.id]);
        let p = l.useMemo(() => {
            let e = [],
                i = [];
            return (
                T.$X.map((n) => {
                    M.oz(n, t) ? e.push(n) : i.push(n);
                }),
                {
                    enabledPermissions: e,
                    disabledPermissions: i,
                }
            );
        }, [t]);
        return (0, n.jsxs)("div", {
            className: A.container,
            children: [
                (0, n.jsxs)("div", {
                    className: A.content,
                    children: [
                        (0, n.jsx)("img", {
                            alt: "",
                            src: o,
                            width: 80,
                        }),
                        (0, n.jsx)(x.X6q, {
                            variant: "heading-xl/semibold",
                            className: A.updatedHeader,
                            id: a,
                            children: R.intl.string(R.t["Pj/s/f"]),
                        }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: A.updatedForm,
                    children: (0, n.jsxs)(x.NIc, {
                        label: R.intl.string(R.t["0q344e"]),
                        children: [
                            (0, n.jsxs)("div", {
                                className: A.checklistRow,
                                children: [
                                    (0, n.jsx)(x.owK, {
                                        size: "md",
                                        className: A.checklistIcon,
                                        color: c.Z.unsafe_rawColors.GREEN_360.css,
                                        secondaryColor: c.Z.unsafe_rawColors.WHITE_500.css,
                                    }),
                                    (0, n.jsx)(x.Text, {
                                        variant: "text-md/normal",
                                        children: R.intl.format(R.t.K8Eg4O, {
                                            infoHook: () =>
                                                (0, n.jsx)(d.u, {
                                                    text: R.intl.string(R.t["3h2WyM"]),
                                                    "aria-label": R.intl.string(R.t["3h2WyM"]),
                                                    children: (0, n.jsx)(x.d3s, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                        className: A.icon,
                                                    }),
                                                }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, n.jsxs)("div", {
                                className: A.checklistRow,
                                children: [
                                    (0, n.jsx)(x.owK, {
                                        size: "md",
                                        className: A.checklistIcon,
                                        color: c.Z.unsafe_rawColors.GREEN_360.css,
                                        secondaryColor: c.Z.unsafe_rawColors.WHITE_500.css,
                                    }),
                                    (0, n.jsx)(x.Text, {
                                        variant: "text-md/normal",
                                        children: R.intl.string(R.t.LfeFFh),
                                    }),
                                    (0, n.jsx)(Y, { guild: t }),
                                ],
                            }),
                            (0, n.jsx)(V, { permissions: p }),
                        ],
                    }),
                }),
                (0, n.jsx)("div", {
                    className: A.updatedForm,
                    children: (0, n.jsx)(x.NIc, {
                        label: R.intl.string(R.t["k+b2CQ"]),
                        description: R.intl.format(R.t["BwbW/f"], {
                            communityGuidelines: w.Z.getArticleURL(P.BhN.PUBLIC_GUILD_GUILDLINES),
                            typesOfGuilds: w.Z.getArticleURL(P.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES),
                        }),
                        children: (0, n.jsx)(m.$q, {
                            type: m.M0.ROW,
                            value: i,
                            onChange: s,
                            children: (0, n.jsx)(x.Text, {
                                className: A.acceptText,
                                variant: "text-md/medium",
                                color: "header-primary",
                                children: R.intl.string(R.t["9AG3wM"]),
                            }),
                        }),
                    }),
                }),
            ],
        });
    },
    K = (e) => {
        var t;
        let { transitionState: i, onClose: s } = e;
        l.useEffect(() => {
            O.default.track(P.rMx.OPEN_MODAL, { type: T.tA });
        }, []);
        let { guild: a } = (0, o.cj)([v.Z], () => v.Z.getProps()),
            c = (0, o.e7)([j.Z], () => j.Z.theme),
            [d, u] = l.useState(!1),
            [m, x] = l.useState(!T.$X.some((e) => M.oz(e, a))),
            [N, S] = l.useState(T.b4),
            [w, L] = l.useState(T.b4),
            [k] = l.useState(null == a ? void 0 : a.defaultMessageNotifications),
            [D] = l.useState(null == a ? void 0 : a.verificationLevel),
            [G] = l.useState(null == a ? void 0 : a.explicitContentFilter),
            [Z] = l.useState(m),
            q = (0, o.e7)([C.Z], () => (null != a ? C.Z.getEveryoneRole(a) : void 0)),
            F = (0, o.e7)([_.ZP], () => (null != a ? _.ZP.getChannels(a.id) : null)),
            Y = (0, f.Dt)(),
            { enabled: z } = (0, p.D2)(null != (t = null == a ? void 0 : a.id) ? t : P.lds);
        if (null == a) return null;
        let X = [
            {
                value: T.b4,
                label: R.intl.string(R.t.Cla0ra),
            },
        ];
        F[_.sH].forEach((e) => {
            let { channel: t } = e;
            t.type === P.d4z.GUILD_TEXT &&
                X.push({
                    value: t.id,
                    label: (0, h.F6)(t, E.default, I.Z, !0),
                });
        });
        let V = D !== P.sFg.NONE,
            K = G === P.lxg.ALL_MEMBERS,
            Q = k === P.bL.ONLY_MENTIONS,
            J = async () => {
                var e, t;
                if (null == q || !d) return;
                let i = new Set(a.features);
                i.add(P.oNc.COMMUNITY);
                let n = m ? r.Od(q.permissions, T.mu) : q.permissions,
                    l =
                        ((e = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var i = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(i);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (n = n.concat(
                                        Object.getOwnPropertySymbols(i).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(i, e).enumerable;
                                        }),
                                    )),
                                    n.forEach(function (t) {
                                        var n;
                                        (n = i[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: n,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = n);
                                    });
                            }
                            return e;
                        })({}, q)),
                        (t = t = { permissions: n }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                            : (function (e, t) {
                                  var i = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var n = Object.getOwnPropertySymbols(e);
                                      i.push.apply(i, n);
                                  }
                                  return i;
                              })(Object(t)).forEach(function (i) {
                                  Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i));
                              }),
                        e);
                n !== q.permissions && (await (0, g.Gf)(a.id, [l])),
                    b.Z.updateGuild({
                        features: i,
                        rulesChannelId: N,
                        publicUpdatesChannelId: w,
                    }),
                    await b.Z.saveGuild(a.id, {
                        features: i,
                        rulesChannelId: N,
                        verificationLevel: a.verificationLevel,
                        explicitContentFilter: a.explicitContentFilter,
                        publicUpdatesChannelId: w,
                        defaultMessageNotifications: a.defaultMessageNotifications,
                    }),
                    setTimeout(() => {
                        s();
                    }, 0);
            },
            ee = (0, n.jsx)(U, {
                guild: a,
                disableVerificationLevel: V,
                disableContentFilter: K,
                onAcceptVerificationLevel: (e, t) => {
                    if (!t) return void b.Z.updateGuild({ verificationLevel: D });
                    t && b.Z.updateGuild({ verificationLevel: P.sFg.LOW });
                },
                onAcceptContentFilter: (e, t) => {
                    if (!t) return void b.Z.updateGuild({ explicitContentFilter: G });
                    b.Z.updateGuild({ explicitContentFilter: P.lxg.ALL_MEMBERS });
                },
                headerId: Y,
                theme: c,
            }),
            et = (0, n.jsx)(W, {
                selectableChannels: X,
                onRuleChannelChange: (e) => {
                    S(e);
                },
                onPublicUpdatesChannelChange: (e) => {
                    L(e);
                },
                ruleChannel: N,
                publicUpdatesChannel: w,
                headerId: Y,
                theme: c,
                guildId: a.id,
            }),
            ei = z
                ? (0, n.jsx)($, {
                      guild: a,
                      policyAccepted: d,
                      onAcceptPolicy: (e, t) => {
                          if (t) {
                              u(!0),
                                  Q || b.Z.updateGuild({ defaultMessageNotifications: P.bL.ONLY_MENTIONS }),
                                  m || null == q || x(!0);
                              return;
                          }
                          u(!1), Q && b.Z.updateGuild({ defaultMessageNotifications: k }), m && null != q && x(!1);
                      },
                      headerId: Y,
                      theme: c,
                  })
                : (0, n.jsx)(H, {
                      guild: a,
                      disableDefaultNotifications: Q,
                      disableEveryoneRolePermissions: Z,
                      policyAccepted: d,
                      everyoneRolePermissionsAccepted: m,
                      onAcceptPolicy: (e, t) => {
                          if (t) return void u(!0);
                          u(!1);
                      },
                      onAcceptDefaultNotifications: (e, t) => {
                          if (!t) return void b.Z.updateGuild({ defaultMessageNotifications: k });
                          b.Z.updateGuild({ defaultMessageNotifications: P.bL.ONLY_MENTIONS });
                      },
                      onAcceptEveryoneRolePermissions: (e, t) => {
                          null != q && (t ? x(!0) : x(!1));
                      },
                      headerId: Y,
                      theme: c,
                  }),
            en = (0, n.jsx)("img", {
                alt: "",
                src: B,
                className: A.footerImage,
                width: 240,
            }),
            el = [
                {
                    modalContent: ee,
                    disableNextStep:
                        a.explicitContentFilter !== P.lxg.ALL_MEMBERS || a.verificationLevel === P.sFg.NONE,
                    overviewTitle: R.intl.string(R.t.PpYoSk),
                },
                {
                    modalContent: et,
                    disableNextStep: null == N || null == w,
                    overviewTitle: R.intl.string(R.t["7MEtIS"]),
                },
                {
                    modalContent: ei,
                    disableNextStep: !d,
                    overviewTitle: R.intl.string(R.t.Pj9P8P),
                },
            ];
        return (0, n.jsx)(y.Z, {
            stepData: el,
            title: R.intl.string(R.t["6U5XTk"]),
            transitionState: i,
            onClose: () => {
                s(), O.default.track(P.rMx.MODAL_DISMISSED, { type: T.tA });
            },
            completeButtonText: R.intl.string(R.t.XGl4bW),
            onComplete: J,
            overviewFooter: en,
            sequencerClassName: A.container,
            autoCloseOnComplete: !1,
        });
    };
