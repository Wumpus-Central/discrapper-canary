i.d(t, { default: () => Q }), i(953529), i(539854), i(388685);
var s = i(951288),
    n = i(647438),
    l = i(120356),
    a = i.n(l),
    r = i(149765),
    o = i(442837),
    c = i(692547),
    d = i(780384),
    u = i(755721),
    m = i(481060),
    x = i(785697),
    p = i(933557),
    h = i(313201),
    f = i(434404),
    v = i(999382),
    b = i(84058),
    g = i(422559),
    N = i(210887),
    j = i(984933),
    _ = i(485386),
    C = i(430824),
    S = i(699516),
    I = i(594174),
    E = i(626135),
    O = i(63063),
    w = i(700785),
    T = i(245315),
    M = i(513796),
    y = i(135899),
    L = i(981631),
    R = i(388032),
    P = i(353302),
    A = i(289575),
    D = i(371411),
    k = i(112847),
    G = i(516954),
    Z = i(674889),
    q = i(162752),
    F = i(438825);
function B(e) {
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
}
function U(e, t) {
    return (
        (t = null != t ? t : {}),
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
        e
    );
}
let W = (e) => {
        let {
                guild: t,
                onAcceptVerificationLevel: i,
                onAcceptContentFilter: n,
                disableContentFilter: l,
                disableVerificationLevel: a,
                headerId: r,
                theme: c,
            } = e,
            x = (0, o.e7)([C.Z], () => C.Z.getGuild(t.id), [t.id]),
            p = null != x && x.verificationLevel > L.sFg.NONE,
            h = (null == x ? void 0 : x.explicitContentFilter) === L.lxg.ALL_MEMBERS,
            f = (0, d.wj)(c) ? Z : q;
        return (0, s.jsxs)("div", {
            className: P.container,
            children: [
                (0, s.jsxs)("div", {
                    className: P.content,
                    children: [
                        (0, s.jsx)("img", {
                            alt: "",
                            src: f,
                            width: 80,
                        }),
                        (0, s.jsx)(m.X6q, {
                            variant: "heading-xl/semibold",
                            className: P.header,
                            id: r,
                            children: R.intl.string(R.t.QrjLYm),
                        }),
                        (0, s.jsx)(m.Text, {
                            color: "none",
                            variant: "text-md/normal",
                            className: P.headerCaption,
                            children: R.intl.string(R.t.i1STws),
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: P.form,
                    children: [
                        (0, s.jsx)(m.vwX, { children: R.intl.string(R.t.DpRdYG) }),
                        (0, s.jsx)(m.R94, {
                            type: m.geA.DESCRIPTION,
                            className: P.description,
                            children: p ? R.intl.string(R.t.k5crqq) : R.intl.string(R.t.fHiGAw),
                        }),
                        (0, s.jsx)(u.$q, {
                            type: u.M0.ROW,
                            disabled: a,
                            value: t.verificationLevel > L.sFg.NONE,
                            onChange: i,
                            children: (0, s.jsx)(m.Text, {
                                variant: "text-sm/normal",
                                children: R.intl.string(R.t.x4hbeX),
                            }),
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: P.form,
                    children: [
                        (0, s.jsx)(m.vwX, { children: R.intl.string(R.t.COu4bm) }),
                        (0, s.jsx)(m.R94, {
                            type: m.geA.DESCRIPTION,
                            className: P.description,
                            children: h ? R.intl.string(R.t.qgQLpq) : R.intl.string(R.t.b0MaDQ),
                        }),
                        (0, s.jsx)(u.$q, {
                            type: u.M0.ROW,
                            disabled: l,
                            value: t.explicitContentFilter === L.lxg.ALL_MEMBERS,
                            onChange: n,
                            children: (0, s.jsx)(m.Text, {
                                variant: "text-sm/normal",
                                children: R.intl.string(R.t.WAUiMj),
                            }),
                        }),
                    ],
                }),
            ],
        });
    },
    X = (e) => {
        let {
            selectableChannels: t,
            onRuleChannelChange: i,
            ruleChannel: l,
            onPublicUpdatesChannelChange: a,
            publicUpdatesChannel: r,
            headerId: o,
            theme: c,
            guildId: u,
        } = e;
        n.useEffect(() => {
            (0, T.BF)({
                fromStep: y.IO.SAFETY_CHECK,
                toStep: y.IO.BASICS,
                guildId: u,
            });
        }, [u]);
        let x = (0, d.wj)(c) ? A : D;
        return (0, s.jsxs)("div", {
            className: P.container,
            children: [
                (0, s.jsxs)("div", {
                    className: P.content,
                    children: [
                        (0, s.jsx)("img", {
                            alt: "",
                            src: x,
                            width: 80,
                        }),
                        (0, s.jsx)(m.X6q, {
                            variant: "heading-xl/semibold",
                            className: P.header,
                            id: o,
                            children: R.intl.string(R.t.YtXpEh),
                        }),
                        (0, s.jsx)(m.Text, {
                            color: "none",
                            variant: "text-md/normal",
                            className: P.headerCaption,
                            children: R.intl.string(R.t["J/fYR0"]),
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: P.form,
                    children: [
                        (0, s.jsx)(m.vwX, { children: R.intl.string(R.t.dYrhCA) }),
                        (0, s.jsx)(m.R94, {
                            type: m.geA.DESCRIPTION,
                            className: P.description,
                            children: R.intl.string(R.t["+Af+V1"]),
                        }),
                        (0, s.jsx)(m.VcW, {
                            options: t,
                            onChange: i,
                            value: l,
                            maxVisibleItems: 4,
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: P.form,
                    children: [
                        (0, s.jsx)(m.vwX, { children: R.intl.string(R.t.vAyDGR) }),
                        (0, s.jsx)(m.R94, {
                            type: m.geA.DESCRIPTION,
                            className: P.description,
                            children: R.intl.string(R.t.ZFeonp),
                        }),
                        (0, s.jsx)(m.VcW, {
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
    Y = (e) => {
        let {
                guild: t,
                policyAccepted: i,
                everyoneRolePermissionsAccepted: l,
                onAcceptPolicy: r,
                onAcceptDefaultNotifications: o,
                onAcceptEveryoneRolePermissions: c,
                disableDefaultNotifications: x,
                disableEveryoneRolePermissions: p,
                headerId: h,
                theme: f,
            } = e,
            v = (0, d.wj)(f) ? k : G;
        return (
            n.useEffect(() => {
                (0, T.BF)({
                    fromStep: y.IO.BASICS,
                    toStep: y.IO.FINISH,
                    guildId: t.id,
                });
            }, [t.id]),
            (0, s.jsxs)("div", {
                className: P.container,
                children: [
                    (0, s.jsxs)("div", {
                        className: P.content,
                        children: [
                            (0, s.jsx)("img", {
                                alt: "",
                                src: v,
                                width: 80,
                            }),
                            (0, s.jsx)(m.X6q, {
                                variant: "heading-xl/semibold",
                                className: P.header,
                                id: h,
                                children: R.intl.string(R.t["Pj/s/f"]),
                            }),
                            (0, s.jsx)(m.Text, {
                                color: "none",
                                variant: "text-md/normal",
                                className: P.headerCaption,
                                children: R.intl.string(R.t["IL7/np"]),
                            }),
                        ],
                    }),
                    (0, s.jsx)("div", {
                        className: P.form,
                        children: (0, s.jsx)(m.ua7, {
                            text: x ? R.intl.string(R.t.PHjrpq) : null,
                            "aria-label": !!x && R.intl.string(R.t.PHjrpq),
                            children: (e) =>
                                (0, s.jsx)(
                                    "div",
                                    U(B({}, e), {
                                        children: (0, s.jsx)(u.$q, {
                                            type: u.M0.ROW,
                                            disabled: x,
                                            value: t.defaultMessageNotifications === L.bL.ONLY_MENTIONS,
                                            onChange: o,
                                            className: a()({ [P.disabled]: x }),
                                            children: (0, s.jsx)(m.Text, {
                                                variant: "text-sm/normal",
                                                children: R.intl.format(R.t.K8Eg4O, {
                                                    infoHook: () =>
                                                        (0, s.jsx)(m.ua7, {
                                                            text: R.intl.string(R.t["3h2WyM"]),
                                                            "aria-label": R.intl.string(R.t["3h2WyM"]),
                                                            children: (e) =>
                                                                (0, s.jsx)(
                                                                    m.d3s,
                                                                    B(
                                                                        {
                                                                            size: "xs",
                                                                            color: "currentColor",
                                                                            className: P.icon,
                                                                        },
                                                                        e,
                                                                    ),
                                                                ),
                                                        }),
                                                }),
                                            }),
                                        }),
                                    }),
                                ),
                        }),
                    }),
                    (0, s.jsx)(m.ua7, {
                        text: p ? R.intl.string(R.t.PHjrpq) : null,
                        "aria-label": !!p && R.intl.string(R.t.PHjrpq),
                        children: (e) =>
                            (0, s.jsx)(
                                "div",
                                U(B({}, e), {
                                    className: P.checkboxOption,
                                    children: (0, s.jsx)(u.$q, {
                                        type: u.M0.ROW,
                                        disabled: p,
                                        value: l,
                                        onChange: c,
                                        className: a()({ [P.disabled]: p }),
                                        children: (0, s.jsx)(m.Text, {
                                            variant: "text-sm/normal",
                                            children: R.intl.format(R.t.v8qCoK, {
                                                infoHook: () =>
                                                    (0, s.jsx)(m.ua7, {
                                                        text: R.intl.string(R.t["+IyaiY"]),
                                                        "aria-label": R.intl.string(R.t["+IyaiY"]),
                                                        children: (e) =>
                                                            (0, s.jsx)(
                                                                m.d3s,
                                                                B(
                                                                    {
                                                                        size: "xs",
                                                                        color: "currentColor",
                                                                        className: P.icon,
                                                                    },
                                                                    e,
                                                                ),
                                                            ),
                                                    }),
                                            }),
                                        }),
                                    }),
                                }),
                            ),
                    }),
                    (0, s.jsxs)("div", {
                        className: P.form,
                        children: [
                            (0, s.jsx)(m.vwX, { children: R.intl.string(R.t["k+b2CQ"]) }),
                            (0, s.jsx)(m.R94, {
                                type: m.geA.DESCRIPTION,
                                className: P.description,
                                children: R.intl.format(R.t["BwbW/f"], {
                                    communityGuidelines: O.Z.getArticleURL(L.BhN.PUBLIC_GUILD_GUILDLINES),
                                    typesOfGuilds: O.Z.getArticleURL(L.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES),
                                }),
                            }),
                            (0, s.jsx)(u.$q, {
                                type: u.M0.ROW,
                                value: i,
                                onChange: r,
                                children: (0, s.jsx)(m.Text, {
                                    variant: "text-sm/normal",
                                    children: R.intl.string(R.t["9AG3wM"]),
                                }),
                            }),
                        ],
                    }),
                ],
            })
        );
    };
function H(e) {
    let { guild: t } = e,
        { name: i, color: n } = (0, o.e7)([_.Z], () => _.Z.getEveryoneRole(t));
    return (0, s.jsx)("div", {
        className: P.__invalid_role,
        children: (0, s.jsxs)("span", {
            className: P.roleRow,
            children: [
                (0, s.jsx)(m.FhE, {
                    className: P.roleDot,
                    color: n.toString(),
                    background: !1,
                    tooltip: !1,
                }),
                (0, s.jsx)(m.Text, {
                    className: P.roleName,
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
    return (0, s.jsxs)("div", {
        className: P.tableContainer,
        children: [
            (0, s.jsx)(m.Text, {
                className: P.tableHeader,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: R.intl.string(R.t.xU8RDg),
            }),
            (0, s.jsx)("div", {
                className: P.permissionsTable,
                children: t.map((e, t) =>
                    (0, s.jsxs)(
                        "div",
                        {
                            className: P.permissionRow,
                            children: [
                                (0, s.jsx)("div", { className: P.bulletWarning }),
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
function V(e) {
    let { disabledPermissions: t, onGetPermisisonName: i } = e,
        n = R.intl.string(R.t.Yo5qlp);
    return (
        t.length === y.$X.length && (n = R.intl.string(R.t.FgMS6u)),
        (0, s.jsxs)("div", {
            className: P.tableContainer,
            children: [
                (0, s.jsx)(m.Text, {
                    className: P.tableHeader,
                    variant: "text-xs/semibold",
                    color: "text-muted",
                    children: n,
                }),
                (0, s.jsx)("div", {
                    className: P.permissionsTable,
                    children: t.map((e, t) =>
                        (0, s.jsxs)(
                            "div",
                            {
                                className: P.permissionRow,
                                children: [
                                    (0, s.jsx)("div", { className: P.bullet }),
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
function $(e) {
    let { permissions: t } = e,
        i = (e) => {
            switch (e.toString()) {
                case L.Plq.MENTION_EVERYONE.toString():
                    return R.intl.string(R.t.yCpsQ0);
                case L.Plq.CREATE_GUILD_EXPRESSIONS.toString():
                    return R.intl.string(R.t.vo2LdX);
                case L.Plq.MANAGE_GUILD_EXPRESSIONS.toString():
                    return R.intl.string(R.t.cmp2W1);
                default:
                    return (0, g.wt)(e);
            }
        },
        { enabledPermissions: n, disabledPermissions: l } = t;
    return (0, s.jsxs)("div", {
        className: P.table,
        children: [
            0 !== n.length
                ? (0, s.jsx)(z, {
                      enabledPermissions: n,
                      onGetPermisisonName: i,
                  })
                : null,
            (0, s.jsx)(V, {
                disabledPermissions: l,
                onGetPermisisonName: i,
            }),
        ],
    });
}
let K = (e) => {
        let { guild: t, policyAccepted: i, onAcceptPolicy: l, headerId: a, theme: r } = e,
            o = (0, d.wj)(r) ? k : G;
        n.useEffect(() => {
            (0, T.BF)({
                fromStep: y.IO.BASICS,
                toStep: y.IO.FINISH,
                guildId: t.id,
            });
        }, [t.id]);
        let x = n.useMemo(() => {
            let e = [],
                i = [];
            return (
                y.$X.map((s) => {
                    w.oz(s, t) ? e.push(s) : i.push(s);
                }),
                {
                    enabledPermissions: e,
                    disabledPermissions: i,
                }
            );
        }, [t]);
        return (0, s.jsxs)("div", {
            className: P.container,
            children: [
                (0, s.jsxs)("div", {
                    className: P.content,
                    children: [
                        (0, s.jsx)("img", {
                            alt: "",
                            src: o,
                            width: 80,
                        }),
                        (0, s.jsx)(m.X6q, {
                            variant: "heading-xl/semibold",
                            className: P.updatedHeader,
                            id: a,
                            children: R.intl.string(R.t["Pj/s/f"]),
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: P.updatedForm,
                    children: [
                        (0, s.jsx)(m.vwX, {
                            className: P.formTitle,
                            children: R.intl.string(R.t["0q344e"]),
                        }),
                        (0, s.jsxs)("div", {
                            className: P.checklistRow,
                            children: [
                                (0, s.jsx)(m.owK, {
                                    size: "md",
                                    className: P.checklistIcon,
                                    color: c.Z.unsafe_rawColors.GREEN_360.css,
                                    secondaryColor: c.Z.unsafe_rawColors.WHITE_500.css,
                                }),
                                (0, s.jsx)(m.Text, {
                                    variant: "text-md/normal",
                                    children: R.intl.format(R.t.K8Eg4O, {
                                        infoHook: () =>
                                            (0, s.jsx)(m.ua7, {
                                                text: R.intl.string(R.t["3h2WyM"]),
                                                "aria-label": R.intl.string(R.t["3h2WyM"]),
                                                children: (e) =>
                                                    (0, s.jsx)(
                                                        m.d3s,
                                                        B(
                                                            {
                                                                size: "xs",
                                                                color: "currentColor",
                                                                className: P.icon,
                                                            },
                                                            e,
                                                        ),
                                                    ),
                                            }),
                                    }),
                                }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: P.checklistRow,
                            children: [
                                (0, s.jsx)(m.owK, {
                                    size: "md",
                                    className: P.checklistIcon,
                                    color: c.Z.unsafe_rawColors.GREEN_360.css,
                                    secondaryColor: c.Z.unsafe_rawColors.WHITE_500.css,
                                }),
                                (0, s.jsx)(m.Text, {
                                    variant: "text-md/normal",
                                    children: R.intl.string(R.t.LfeFFh),
                                }),
                                (0, s.jsx)(H, { guild: t }),
                            ],
                        }),
                        (0, s.jsx)($, { permissions: x }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: P.updatedForm,
                    children: [
                        (0, s.jsx)(m.vwX, {
                            className: P.formTitle,
                            children: R.intl.string(R.t["k+b2CQ"]),
                        }),
                        (0, s.jsx)(m.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            className: P.description,
                            children: R.intl.format(R.t["BwbW/f"], {
                                communityGuidelines: O.Z.getArticleURL(L.BhN.PUBLIC_GUILD_GUILDLINES),
                                typesOfGuilds: O.Z.getArticleURL(L.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES),
                            }),
                        }),
                        (0, s.jsx)(u.$q, {
                            type: u.M0.ROW,
                            value: i,
                            onChange: l,
                            children: (0, s.jsx)(m.Text, {
                                className: P.acceptText,
                                variant: "text-md/medium",
                                color: "header-primary",
                                children: R.intl.string(R.t["9AG3wM"]),
                            }),
                        }),
                    ],
                }),
            ],
        });
    },
    Q = (e) => {
        var t;
        let { transitionState: i, onClose: l } = e;
        n.useEffect(() => {
            E.default.track(L.rMx.OPEN_MODAL, { type: y.tA });
        }, []);
        let { guild: a } = (0, o.cj)([v.Z], () => v.Z.getProps()),
            c = (0, o.e7)([N.Z], () => N.Z.theme),
            [d, u] = n.useState(!1),
            [m, g] = n.useState(!y.$X.some((e) => w.oz(e, a))),
            [C, O] = n.useState(y.b4),
            [T, A] = n.useState(y.b4),
            [D] = n.useState(null == a ? void 0 : a.defaultMessageNotifications),
            [k] = n.useState(null == a ? void 0 : a.verificationLevel),
            [G] = n.useState(null == a ? void 0 : a.explicitContentFilter),
            [Z] = n.useState(m),
            q = (0, o.e7)([_.Z], () => (null != a ? _.Z.getEveryoneRole(a) : void 0)),
            H = (0, o.e7)([j.ZP], () => (null != a ? j.ZP.getChannels(a.id) : null)),
            z = (0, h.Dt)(),
            { enabled: V } = (0, x.D2)(null != (t = null == a ? void 0 : a.id) ? t : L.lds);
        if (null == a) return null;
        let $ = [
            {
                value: y.b4,
                label: R.intl.string(R.t.Cla0ra),
            },
        ];
        H[j.sH].forEach((e) => {
            let { channel: t } = e;
            t.type === L.d4z.GUILD_TEXT &&
                $.push({
                    value: t.id,
                    label: (0, p.F6)(t, I.default, S.Z, !0),
                });
        });
        let Q = k !== L.sFg.NONE,
            J = G === L.lxg.ALL_MEMBERS,
            ee = D === L.bL.ONLY_MENTIONS,
            et = async () => {
                if (null == q || !d) return;
                let e = new Set(a.features);
                e.add(L.oNc.COMMUNITY);
                let t = m ? r.Od(q.permissions, y.mu) : q.permissions,
                    i = U(B({}, q), { permissions: t });
                t !== q.permissions && (await (0, b.Gf)(a.id, [i])),
                    f.Z.updateGuild({
                        features: e,
                        rulesChannelId: C,
                        publicUpdatesChannelId: T,
                    }),
                    await f.Z.saveGuild(a.id, {
                        features: e,
                        rulesChannelId: C,
                        verificationLevel: a.verificationLevel,
                        explicitContentFilter: a.explicitContentFilter,
                        publicUpdatesChannelId: T,
                        defaultMessageNotifications: a.defaultMessageNotifications,
                    }),
                    setTimeout(() => {
                        l();
                    }, 0);
            },
            ei = (0, s.jsx)(W, {
                guild: a,
                disableVerificationLevel: Q,
                disableContentFilter: J,
                onAcceptVerificationLevel: (e, t) => {
                    if (!t) return void f.Z.updateGuild({ verificationLevel: k });
                    t && f.Z.updateGuild({ verificationLevel: L.sFg.LOW });
                },
                onAcceptContentFilter: (e, t) => {
                    if (!t) return void f.Z.updateGuild({ explicitContentFilter: G });
                    f.Z.updateGuild({ explicitContentFilter: L.lxg.ALL_MEMBERS });
                },
                headerId: z,
                theme: c,
            }),
            es = (0, s.jsx)(X, {
                selectableChannels: $,
                onRuleChannelChange: (e) => {
                    O(e);
                },
                onPublicUpdatesChannelChange: (e) => {
                    A(e);
                },
                ruleChannel: C,
                publicUpdatesChannel: T,
                headerId: z,
                theme: c,
                guildId: a.id,
            }),
            en = V
                ? (0, s.jsx)(K, {
                      guild: a,
                      policyAccepted: d,
                      onAcceptPolicy: (e, t) => {
                          if (t) {
                              u(!0),
                                  ee || f.Z.updateGuild({ defaultMessageNotifications: L.bL.ONLY_MENTIONS }),
                                  m || null == q || g(!0);
                              return;
                          }
                          u(!1), ee && f.Z.updateGuild({ defaultMessageNotifications: D }), m && null != q && g(!1);
                      },
                      headerId: z,
                      theme: c,
                  })
                : (0, s.jsx)(Y, {
                      guild: a,
                      disableDefaultNotifications: ee,
                      disableEveryoneRolePermissions: Z,
                      policyAccepted: d,
                      everyoneRolePermissionsAccepted: m,
                      onAcceptPolicy: (e, t) => {
                          if (t) return void u(!0);
                          u(!1);
                      },
                      onAcceptDefaultNotifications: (e, t) => {
                          if (!t) return void f.Z.updateGuild({ defaultMessageNotifications: D });
                          f.Z.updateGuild({ defaultMessageNotifications: L.bL.ONLY_MENTIONS });
                      },
                      onAcceptEveryoneRolePermissions: (e, t) => {
                          null != q && (t ? g(!0) : g(!1));
                      },
                      headerId: z,
                      theme: c,
                  }),
            el = (0, s.jsx)("img", {
                alt: "",
                src: F,
                className: P.footerImage,
                width: 240,
            }),
            ea = [
                {
                    modalContent: ei,
                    disableNextStep:
                        a.explicitContentFilter !== L.lxg.ALL_MEMBERS || a.verificationLevel === L.sFg.NONE,
                    overviewTitle: R.intl.string(R.t.PpYoSk),
                },
                {
                    modalContent: es,
                    disableNextStep: null == C || null == T,
                    overviewTitle: R.intl.string(R.t["7MEtIS"]),
                },
                {
                    modalContent: en,
                    disableNextStep: !d,
                    overviewTitle: R.intl.string(R.t.Pj9P8P),
                },
            ];
        return (0, s.jsx)(M.Z, {
            stepData: ea,
            title: R.intl.string(R.t["6U5XTk"]),
            transitionState: i,
            onClose: () => {
                l(), E.default.track(L.rMx.MODAL_DISMISSED, { type: y.tA });
            },
            completeButtonText: R.intl.string(R.t.XGl4bW),
            onComplete: et,
            overviewFooter: el,
            sequencerClassName: P.container,
            autoCloseOnComplete: !1,
        });
    };
