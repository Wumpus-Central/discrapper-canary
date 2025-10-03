i.d(t, { default: () => K }), i(953529), i(539854), i(388685);
var s = i(951288),
    n = i(647438),
    l = i(120356),
    a = i.n(l),
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
    v = i(434404),
    b = i(999382),
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
    T = i(700785),
    M = i(245315),
    y = i(513796),
    L = i(135899),
    R = i(981631),
    P = i(388032),
    A = i(353302),
    D = i(289575),
    k = i(371411),
    G = i(112847),
    Z = i(516954),
    q = i(674889),
    F = i(162752),
    B = i(438825);
let U = (e) => {
        let {
                guild: t,
                onAcceptVerificationLevel: i,
                onAcceptContentFilter: n,
                disableContentFilter: l,
                disableVerificationLevel: a,
                headerId: r,
                theme: c,
            } = e,
            d = (0, o.e7)([S.Z], () => S.Z.getGuild(t.id), [t.id]),
            p = null != d && d.verificationLevel > R.sFg.NONE,
            h = (null == d ? void 0 : d.explicitContentFilter) === R.lxg.ALL_MEMBERS,
            f = (0, u.wj)(c) ? q : F;
        return (0, s.jsxs)("div", {
            className: A.container,
            children: [
                (0, s.jsxs)("div", {
                    className: A.content,
                    children: [
                        (0, s.jsx)("img", {
                            alt: "",
                            src: f,
                            width: 80,
                        }),
                        (0, s.jsx)(x.X6q, {
                            variant: "heading-xl/semibold",
                            className: A.header,
                            id: r,
                            children: P.intl.string(P.t.QrjLYm),
                        }),
                        (0, s.jsx)(x.Text, {
                            color: "none",
                            variant: "text-md/normal",
                            className: A.headerCaption,
                            children: P.intl.string(P.t.i1STws),
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: A.form,
                    children: [
                        (0, s.jsx)(x.vwX, { children: P.intl.string(P.t.DpRdYG) }),
                        (0, s.jsx)(x.R94, {
                            type: x.geA.DESCRIPTION,
                            className: A.description,
                            children: p ? P.intl.string(P.t.k5crqq) : P.intl.string(P.t.fHiGAw),
                        }),
                        (0, s.jsx)(m.$q, {
                            type: m.M0.ROW,
                            disabled: a,
                            value: t.verificationLevel > R.sFg.NONE,
                            onChange: i,
                            children: (0, s.jsx)(x.Text, {
                                variant: "text-sm/normal",
                                children: P.intl.string(P.t.x4hbeX),
                            }),
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: A.form,
                    children: [
                        (0, s.jsx)(x.vwX, { children: P.intl.string(P.t.COu4bm) }),
                        (0, s.jsx)(x.R94, {
                            type: x.geA.DESCRIPTION,
                            className: A.description,
                            children: h ? P.intl.string(P.t.qgQLpq) : P.intl.string(P.t.b0MaDQ),
                        }),
                        (0, s.jsx)(m.$q, {
                            type: m.M0.ROW,
                            disabled: l,
                            value: t.explicitContentFilter === R.lxg.ALL_MEMBERS,
                            onChange: n,
                            children: (0, s.jsx)(x.Text, {
                                variant: "text-sm/normal",
                                children: P.intl.string(P.t.WAUiMj),
                            }),
                        }),
                    ],
                }),
            ],
        });
    },
    W = (e) => {
        let {
            selectableChannels: t,
            onRuleChannelChange: i,
            ruleChannel: l,
            onPublicUpdatesChannelChange: a,
            publicUpdatesChannel: r,
            headerId: o,
            theme: c,
            guildId: d,
        } = e;
        n.useEffect(() => {
            (0, M.BF)({
                fromStep: L.IO.SAFETY_CHECK,
                toStep: L.IO.BASICS,
                guildId: d,
            });
        }, [d]);
        let m = (0, u.wj)(c) ? D : k;
        return (0, s.jsxs)("div", {
            className: A.container,
            children: [
                (0, s.jsxs)("div", {
                    className: A.content,
                    children: [
                        (0, s.jsx)("img", {
                            alt: "",
                            src: m,
                            width: 80,
                        }),
                        (0, s.jsx)(x.X6q, {
                            variant: "heading-xl/semibold",
                            className: A.header,
                            id: o,
                            children: P.intl.string(P.t.YtXpEh),
                        }),
                        (0, s.jsx)(x.Text, {
                            color: "none",
                            variant: "text-md/normal",
                            className: A.headerCaption,
                            children: P.intl.string(P.t["J/fYR0"]),
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: A.form,
                    children: [
                        (0, s.jsx)(x.vwX, { children: P.intl.string(P.t.dYrhCA) }),
                        (0, s.jsx)(x.R94, {
                            type: x.geA.DESCRIPTION,
                            className: A.description,
                            children: P.intl.string(P.t["+Af+V1"]),
                        }),
                        (0, s.jsx)(x.VcW, {
                            options: t,
                            onChange: i,
                            value: l,
                            maxVisibleItems: 4,
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: A.form,
                    children: [
                        (0, s.jsx)(x.vwX, { children: P.intl.string(P.t.vAyDGR) }),
                        (0, s.jsx)(x.R94, {
                            type: x.geA.DESCRIPTION,
                            className: A.description,
                            children: P.intl.string(P.t.ZFeonp),
                        }),
                        (0, s.jsx)(x.VcW, {
                            options: t,
                            onChange: a,
                            value: r,
                            popoutPosition: "top",
                            maxVisibleItems: 4,
                        }),
                    ],
                }),
            ],
        });
    },
    X = (e) => {
        let {
                guild: t,
                policyAccepted: i,
                everyoneRolePermissionsAccepted: l,
                onAcceptPolicy: r,
                onAcceptDefaultNotifications: o,
                onAcceptEveryoneRolePermissions: c,
                disableDefaultNotifications: p,
                disableEveryoneRolePermissions: h,
                headerId: f,
                theme: v,
            } = e,
            b = (0, u.wj)(v) ? G : Z;
        return (
            n.useEffect(() => {
                (0, M.BF)({
                    fromStep: L.IO.BASICS,
                    toStep: L.IO.FINISH,
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
                                src: b,
                                width: 80,
                            }),
                            (0, s.jsx)(x.X6q, {
                                variant: "heading-xl/semibold",
                                className: A.header,
                                id: f,
                                children: P.intl.string(P.t["Pj/s/f"]),
                            }),
                            (0, s.jsx)(x.Text, {
                                color: "none",
                                variant: "text-md/normal",
                                className: A.headerCaption,
                                children: P.intl.string(P.t["IL7/np"]),
                            }),
                        ],
                    }),
                    (0, s.jsx)("div", {
                        className: A.form,
                        children: (0, s.jsx)(d.u, {
                            text: p ? P.intl.string(P.t.PHjrpq) : null,
                            "aria-label": !!p && P.intl.string(P.t.PHjrpq),
                            children: (0, s.jsx)("div", {
                                children: (0, s.jsx)(m.$q, {
                                    type: m.M0.ROW,
                                    disabled: p,
                                    value: t.defaultMessageNotifications === R.bL.ONLY_MENTIONS,
                                    onChange: o,
                                    className: a()({ [A.disabled]: p }),
                                    children: (0, s.jsx)(x.Text, {
                                        variant: "text-sm/normal",
                                        children: P.intl.format(P.t.K8Eg4O, {
                                            infoHook: () =>
                                                (0, s.jsx)(d.u, {
                                                    text: P.intl.string(P.t["3h2WyM"]),
                                                    "aria-label": P.intl.string(P.t["3h2WyM"]),
                                                    children: (0, s.jsx)(x.d3s, {
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
                        text: h ? P.intl.string(P.t.PHjrpq) : null,
                        "aria-label": !!h && P.intl.string(P.t.PHjrpq),
                        children: (0, s.jsx)("div", {
                            className: A.checkboxOption,
                            children: (0, s.jsx)(m.$q, {
                                type: m.M0.ROW,
                                disabled: h,
                                value: l,
                                onChange: c,
                                className: a()({ [A.disabled]: h }),
                                children: (0, s.jsx)(x.Text, {
                                    variant: "text-sm/normal",
                                    children: P.intl.format(P.t.v8qCoK, {
                                        infoHook: () =>
                                            (0, s.jsx)(d.u, {
                                                text: P.intl.string(P.t["+IyaiY"]),
                                                "aria-label": P.intl.string(P.t["+IyaiY"]),
                                                children: (0, s.jsx)(x.d3s, {
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
                    (0, s.jsxs)("div", {
                        className: A.form,
                        children: [
                            (0, s.jsx)(x.vwX, { children: P.intl.string(P.t["k+b2CQ"]) }),
                            (0, s.jsx)(x.R94, {
                                type: x.geA.DESCRIPTION,
                                className: A.description,
                                children: P.intl.format(P.t["BwbW/f"], {
                                    communityGuidelines: w.Z.getArticleURL(R.BhN.PUBLIC_GUILD_GUILDLINES),
                                    typesOfGuilds: w.Z.getArticleURL(R.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES),
                                }),
                            }),
                            (0, s.jsx)(m.$q, {
                                type: m.M0.ROW,
                                value: i,
                                onChange: r,
                                children: (0, s.jsx)(x.Text, {
                                    variant: "text-sm/normal",
                                    children: P.intl.string(P.t["9AG3wM"]),
                                }),
                            }),
                        ],
                    }),
                ],
            })
        );
    };
function Y(e) {
    let { guild: t } = e,
        { name: i, color: n } = (0, o.e7)([C.Z], () => C.Z.getEveryoneRole(t));
    return (0, s.jsx)("div", {
        className: A.__invalid_role,
        children: (0, s.jsxs)("span", {
            className: A.roleRow,
            children: [
                (0, s.jsx)(x.FhE, {
                    className: A.roleDot,
                    color: n.toString(),
                    background: !1,
                    tooltip: !1,
                }),
                (0, s.jsx)(x.Text, {
                    className: A.roleName,
                    variant: "text-sm/medium",
                    color: "interactive-active",
                    children: i,
                }),
            ],
        }),
    });
}
function H(e) {
    let { enabledPermissions: t, onGetPermisisonName: i } = e;
    return (0, s.jsxs)("div", {
        className: A.tableContainer,
        children: [
            (0, s.jsx)(x.Text, {
                className: A.tableHeader,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: P.intl.string(P.t.xU8RDg),
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
                                (0, s.jsx)(x.Text, {
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
function z(e) {
    let { disabledPermissions: t, onGetPermisisonName: i } = e,
        n = P.intl.string(P.t.Yo5qlp);
    return (
        t.length === L.$X.length && (n = P.intl.string(P.t.FgMS6u)),
        (0, s.jsxs)("div", {
            className: A.tableContainer,
            children: [
                (0, s.jsx)(x.Text, {
                    className: A.tableHeader,
                    variant: "text-xs/semibold",
                    color: "text-muted",
                    children: n,
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
                                    (0, s.jsx)(x.Text, {
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
                case R.Plq.MENTION_EVERYONE.toString():
                    return P.intl.string(P.t.yCpsQ0);
                case R.Plq.CREATE_GUILD_EXPRESSIONS.toString():
                    return P.intl.string(P.t.vo2LdX);
                case R.Plq.MANAGE_GUILD_EXPRESSIONS.toString():
                    return P.intl.string(P.t.cmp2W1);
                default:
                    return (0, N.wt)(e);
            }
        },
        { enabledPermissions: n, disabledPermissions: l } = t;
    return (0, s.jsxs)("div", {
        className: A.table,
        children: [
            0 !== n.length
                ? (0, s.jsx)(H, {
                      enabledPermissions: n,
                      onGetPermisisonName: i,
                  })
                : null,
            (0, s.jsx)(z, {
                disabledPermissions: l,
                onGetPermisisonName: i,
            }),
        ],
    });
}
let $ = (e) => {
        let { guild: t, policyAccepted: i, onAcceptPolicy: l, headerId: a, theme: r } = e,
            o = (0, u.wj)(r) ? G : Z;
        n.useEffect(() => {
            (0, M.BF)({
                fromStep: L.IO.BASICS,
                toStep: L.IO.FINISH,
                guildId: t.id,
            });
        }, [t.id]);
        let p = n.useMemo(() => {
            let e = [],
                i = [];
            return (
                L.$X.map((s) => {
                    T.oz(s, t) ? e.push(s) : i.push(s);
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
                        (0, s.jsx)(x.X6q, {
                            variant: "heading-xl/semibold",
                            className: A.updatedHeader,
                            id: a,
                            children: P.intl.string(P.t["Pj/s/f"]),
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: A.updatedForm,
                    children: [
                        (0, s.jsx)(x.vwX, {
                            className: A.formTitle,
                            children: P.intl.string(P.t["0q344e"]),
                        }),
                        (0, s.jsxs)("div", {
                            className: A.checklistRow,
                            children: [
                                (0, s.jsx)(x.owK, {
                                    size: "md",
                                    className: A.checklistIcon,
                                    color: c.Z.unsafe_rawColors.GREEN_360.css,
                                    secondaryColor: c.Z.unsafe_rawColors.WHITE_500.css,
                                }),
                                (0, s.jsx)(x.Text, {
                                    variant: "text-md/normal",
                                    children: P.intl.format(P.t.K8Eg4O, {
                                        infoHook: () =>
                                            (0, s.jsx)(d.u, {
                                                text: P.intl.string(P.t["3h2WyM"]),
                                                "aria-label": P.intl.string(P.t["3h2WyM"]),
                                                children: (0, s.jsx)(x.d3s, {
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
                                (0, s.jsx)(x.owK, {
                                    size: "md",
                                    className: A.checklistIcon,
                                    color: c.Z.unsafe_rawColors.GREEN_360.css,
                                    secondaryColor: c.Z.unsafe_rawColors.WHITE_500.css,
                                }),
                                (0, s.jsx)(x.Text, {
                                    variant: "text-md/normal",
                                    children: P.intl.string(P.t.LfeFFh),
                                }),
                                (0, s.jsx)(Y, { guild: t }),
                            ],
                        }),
                        (0, s.jsx)(V, { permissions: p }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: A.updatedForm,
                    children: [
                        (0, s.jsx)(x.vwX, {
                            className: A.formTitle,
                            children: P.intl.string(P.t["k+b2CQ"]),
                        }),
                        (0, s.jsx)(x.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            className: A.description,
                            children: P.intl.format(P.t["BwbW/f"], {
                                communityGuidelines: w.Z.getArticleURL(R.BhN.PUBLIC_GUILD_GUILDLINES),
                                typesOfGuilds: w.Z.getArticleURL(R.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES),
                            }),
                        }),
                        (0, s.jsx)(m.$q, {
                            type: m.M0.ROW,
                            value: i,
                            onChange: l,
                            children: (0, s.jsx)(x.Text, {
                                className: A.acceptText,
                                variant: "text-md/medium",
                                color: "header-primary",
                                children: P.intl.string(P.t["9AG3wM"]),
                            }),
                        }),
                    ],
                }),
            ],
        });
    },
    K = (e) => {
        var t;
        let { transitionState: i, onClose: l } = e;
        n.useEffect(() => {
            O.default.track(R.rMx.OPEN_MODAL, { type: L.tA });
        }, []);
        let { guild: a } = (0, o.cj)([b.Z], () => b.Z.getProps()),
            c = (0, o.e7)([j.Z], () => j.Z.theme),
            [d, u] = n.useState(!1),
            [m, x] = n.useState(!L.$X.some((e) => T.oz(e, a))),
            [N, S] = n.useState(L.b4),
            [w, M] = n.useState(L.b4),
            [D] = n.useState(null == a ? void 0 : a.defaultMessageNotifications),
            [k] = n.useState(null == a ? void 0 : a.verificationLevel),
            [G] = n.useState(null == a ? void 0 : a.explicitContentFilter),
            [Z] = n.useState(m),
            q = (0, o.e7)([C.Z], () => (null != a ? C.Z.getEveryoneRole(a) : void 0)),
            F = (0, o.e7)([_.ZP], () => (null != a ? _.ZP.getChannels(a.id) : null)),
            Y = (0, f.Dt)(),
            { enabled: H } = (0, p.D2)(null != (t = null == a ? void 0 : a.id) ? t : R.lds);
        if (null == a) return null;
        let z = [
            {
                value: L.b4,
                label: P.intl.string(P.t.Cla0ra),
            },
        ];
        F[_.sH].forEach((e) => {
            let { channel: t } = e;
            t.type === R.d4z.GUILD_TEXT &&
                z.push({
                    value: t.id,
                    label: (0, h.F6)(t, E.default, I.Z, !0),
                });
        });
        let V = k !== R.sFg.NONE,
            K = G === R.lxg.ALL_MEMBERS,
            Q = D === R.bL.ONLY_MENTIONS,
            J = async () => {
                var e, t;
                if (null == q || !d) return;
                let i = new Set(a.features);
                i.add(R.oNc.COMMUNITY);
                let s = m ? r.Od(q.permissions, L.mu) : q.permissions,
                    n =
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
                        })({}, q)),
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
                s !== q.permissions && (await (0, g.Gf)(a.id, [n])),
                    v.Z.updateGuild({
                        features: i,
                        rulesChannelId: N,
                        publicUpdatesChannelId: w,
                    }),
                    await v.Z.saveGuild(a.id, {
                        features: i,
                        rulesChannelId: N,
                        verificationLevel: a.verificationLevel,
                        explicitContentFilter: a.explicitContentFilter,
                        publicUpdatesChannelId: w,
                        defaultMessageNotifications: a.defaultMessageNotifications,
                    }),
                    setTimeout(() => {
                        l();
                    }, 0);
            },
            ee = (0, s.jsx)(U, {
                guild: a,
                disableVerificationLevel: V,
                disableContentFilter: K,
                onAcceptVerificationLevel: (e, t) => {
                    if (!t) return void v.Z.updateGuild({ verificationLevel: k });
                    t && v.Z.updateGuild({ verificationLevel: R.sFg.LOW });
                },
                onAcceptContentFilter: (e, t) => {
                    if (!t) return void v.Z.updateGuild({ explicitContentFilter: G });
                    v.Z.updateGuild({ explicitContentFilter: R.lxg.ALL_MEMBERS });
                },
                headerId: Y,
                theme: c,
            }),
            et = (0, s.jsx)(W, {
                selectableChannels: z,
                onRuleChannelChange: (e) => {
                    S(e);
                },
                onPublicUpdatesChannelChange: (e) => {
                    M(e);
                },
                ruleChannel: N,
                publicUpdatesChannel: w,
                headerId: Y,
                theme: c,
                guildId: a.id,
            }),
            ei = H
                ? (0, s.jsx)($, {
                      guild: a,
                      policyAccepted: d,
                      onAcceptPolicy: (e, t) => {
                          if (t) {
                              u(!0),
                                  Q || v.Z.updateGuild({ defaultMessageNotifications: R.bL.ONLY_MENTIONS }),
                                  m || null == q || x(!0);
                              return;
                          }
                          u(!1), Q && v.Z.updateGuild({ defaultMessageNotifications: D }), m && null != q && x(!1);
                      },
                      headerId: Y,
                      theme: c,
                  })
                : (0, s.jsx)(X, {
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
                          if (!t) return void v.Z.updateGuild({ defaultMessageNotifications: D });
                          v.Z.updateGuild({ defaultMessageNotifications: R.bL.ONLY_MENTIONS });
                      },
                      onAcceptEveryoneRolePermissions: (e, t) => {
                          null != q && (t ? x(!0) : x(!1));
                      },
                      headerId: Y,
                      theme: c,
                  }),
            es = (0, s.jsx)("img", {
                alt: "",
                src: B,
                className: A.footerImage,
                width: 240,
            }),
            en = [
                {
                    modalContent: ee,
                    disableNextStep:
                        a.explicitContentFilter !== R.lxg.ALL_MEMBERS || a.verificationLevel === R.sFg.NONE,
                    overviewTitle: P.intl.string(P.t.PpYoSk),
                },
                {
                    modalContent: et,
                    disableNextStep: null == N || null == w,
                    overviewTitle: P.intl.string(P.t["7MEtIS"]),
                },
                {
                    modalContent: ei,
                    disableNextStep: !d,
                    overviewTitle: P.intl.string(P.t.Pj9P8P),
                },
            ];
        return (0, s.jsx)(y.Z, {
            stepData: en,
            title: P.intl.string(P.t["6U5XTk"]),
            transitionState: i,
            onClose: () => {
                l(), O.default.track(R.rMx.MODAL_DISMISSED, { type: L.tA });
            },
            completeButtonText: P.intl.string(P.t.XGl4bW),
            onComplete: J,
            overviewFooter: es,
            sequencerClassName: A.container,
            autoCloseOnComplete: !1,
        });
    };
