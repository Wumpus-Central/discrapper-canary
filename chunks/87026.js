i.d(t, { default: () => V }), i(953529), i(539854), i(388685);
var s = i(255367),
    n = i(73800),
    l = i(120356),
    a = i.n(l),
    r = i(149765),
    o = i(442837),
    c = i(692547),
    d = i(780384),
    u = i(481060),
    m = i(785697),
    x = i(933557),
    f = i(313201),
    p = i(434404),
    h = i(764260),
    b = i(999382),
    v = i(416162),
    g = i(422559),
    N = i(210887),
    j = i(984933),
    C = i(430824),
    _ = i(699516),
    S = i(594174),
    I = i(626135),
    E = i(63063),
    O = i(700785),
    T = i(245315),
    w = i(135899),
    y = i(981631),
    R = i(388032),
    L = i(341190),
    M = i(289575),
    P = i(371411),
    Z = i(112847),
    A = i(516954),
    k = i(674889),
    D = i(162752),
    G = i(438825);
function X(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {},
            s = Object.keys(i);
        'function' == typeof Object.getOwnPropertySymbols &&
            (s = s.concat(
                Object.getOwnPropertySymbols(i).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable;
                })
            )),
            s.forEach(function (t) {
                var s;
                (s = i[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: s,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = s);
            });
    }
    return e;
}
function F(e, t) {
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
let q = (e) => {
        let { guild: t, onAcceptVerificationLevel: i, onAcceptContentFilter: n, disableContentFilter: l, disableVerificationLevel: a, headerId: r, theme: c } = e,
            m = (0, o.e7)([C.Z], () => C.Z.getGuild(t.id), [t.id]),
            x = null != m && m.verificationLevel > y.sFg.NONE,
            f = (null == m ? void 0 : m.explicitContentFilter) === y.lxg.ALL_MEMBERS,
            p = (0, d.wj)(c) ? k : D;
        return (0, s.jsxs)('div', {
            className: L.container,
            children: [
                (0, s.jsxs)('div', {
                    className: L.content,
                    children: [
                        (0, s.jsx)('img', {
                            alt: '',
                            src: p,
                            width: 80
                        }),
                        (0, s.jsx)(u.X6q, {
                            variant: 'heading-xl/semibold',
                            className: L.header,
                            id: r,
                            children: R.intl.string(R.t.QrjLYm)
                        }),
                        (0, s.jsx)(u.Text, {
                            color: 'none',
                            variant: 'text-md/normal',
                            className: L.headerCaption,
                            children: R.intl.string(R.t.i1STws)
                        })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: L.form,
                    children: [
                        (0, s.jsx)(u.vwX, { children: R.intl.string(R.t.DpRdYG) }),
                        (0, s.jsx)(u.R94, {
                            type: u.geA.DESCRIPTION,
                            className: L.description,
                            children: x ? R.intl.string(R.t.k5crqq) : R.intl.string(R.t.fHiGAw)
                        }),
                        (0, s.jsx)(u.XZJ, {
                            type: u.XZJ.Types.ROW,
                            disabled: a,
                            value: t.verificationLevel > y.sFg.NONE,
                            onChange: i,
                            children: (0, s.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                children: R.intl.string(R.t.x4hbeX)
                            })
                        })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: L.form,
                    children: [
                        (0, s.jsx)(u.vwX, { children: R.intl.string(R.t.COu4bm) }),
                        (0, s.jsx)(u.R94, {
                            type: u.geA.DESCRIPTION,
                            className: L.description,
                            children: f ? R.intl.string(R.t.qgQLpq) : R.intl.string(R.t.b0MaDQ)
                        }),
                        (0, s.jsx)(u.XZJ, {
                            type: u.XZJ.Types.ROW,
                            disabled: l,
                            value: t.explicitContentFilter === y.lxg.ALL_MEMBERS,
                            onChange: n,
                            children: (0, s.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                children: R.intl.string(R.t.WAUiMj)
                            })
                        })
                    ]
                })
            ]
        });
    },
    B = (e) => {
        let { selectableChannels: t, onRuleChannelChange: i, ruleChannel: l, onPublicUpdatesChannelChange: a, publicUpdatesChannel: r, headerId: o, theme: c, guildId: m } = e;
        n.useEffect(() => {
            (0, T.BF)({
                fromStep: w.IO.SAFETY_CHECK,
                toStep: w.IO.BASICS,
                guildId: m
            });
        }, [m]);
        let x = (0, d.wj)(c) ? M : P;
        return (0, s.jsxs)('div', {
            className: L.container,
            children: [
                (0, s.jsxs)('div', {
                    className: L.content,
                    children: [
                        (0, s.jsx)('img', {
                            alt: '',
                            src: x,
                            width: 80
                        }),
                        (0, s.jsx)(u.X6q, {
                            variant: 'heading-xl/semibold',
                            className: L.header,
                            id: o,
                            children: R.intl.string(R.t.YtXpEh)
                        }),
                        (0, s.jsx)(u.Text, {
                            color: 'none',
                            variant: 'text-md/normal',
                            className: L.headerCaption,
                            children: R.intl.string(R.t['J/fYR0'])
                        })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: L.form,
                    children: [
                        (0, s.jsx)(u.vwX, { children: R.intl.string(R.t.dYrhCA) }),
                        (0, s.jsx)(u.R94, {
                            type: u.geA.DESCRIPTION,
                            className: L.description,
                            children: R.intl.string(R.t['+Af+V1'])
                        }),
                        (0, s.jsx)(u.VcW, {
                            options: t,
                            onChange: i,
                            value: l,
                            maxVisibleItems: 4
                        })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: L.form,
                    children: [
                        (0, s.jsx)(u.vwX, { children: R.intl.string(R.t.vAyDGR) }),
                        (0, s.jsx)(u.R94, {
                            type: u.geA.DESCRIPTION,
                            className: L.description,
                            children: R.intl.string(R.t.ZFeonp)
                        }),
                        (0, s.jsx)(u.VcW, {
                            options: t,
                            onChange: a,
                            value: r,
                            popoutPosition: 'top',
                            maxVisibleItems: 4
                        })
                    ]
                })
            ]
        });
    },
    U = (e) => {
        let { guild: t, policyAccepted: i, everyoneRolePermissionsAccepted: l, onAcceptPolicy: r, onAcceptDefaultNotifications: o, onAcceptEveryoneRolePermissions: c, disableDefaultNotifications: m, disableEveryoneRolePermissions: x, headerId: f, theme: p } = e,
            h = (0, d.wj)(p) ? Z : A;
        return (
            n.useEffect(() => {
                (0, T.BF)({
                    fromStep: w.IO.BASICS,
                    toStep: w.IO.FINISH,
                    guildId: t.id
                });
            }, [t.id]),
            (0, s.jsxs)('div', {
                className: L.container,
                children: [
                    (0, s.jsxs)('div', {
                        className: L.content,
                        children: [
                            (0, s.jsx)('img', {
                                alt: '',
                                src: h,
                                width: 80
                            }),
                            (0, s.jsx)(u.X6q, {
                                variant: 'heading-xl/semibold',
                                className: L.header,
                                id: f,
                                children: R.intl.string(R.t['Pj/s/f'])
                            }),
                            (0, s.jsx)(u.Text, {
                                color: 'none',
                                variant: 'text-md/normal',
                                className: L.headerCaption,
                                children: R.intl.string(R.t['IL7/np'])
                            })
                        ]
                    }),
                    (0, s.jsx)('div', {
                        className: L.form,
                        children: (0, s.jsx)(u.ua7, {
                            text: m ? R.intl.string(R.t.PHjrpq) : null,
                            'aria-label': !!m && R.intl.string(R.t.PHjrpq),
                            children: (e) =>
                                (0, s.jsx)(
                                    'div',
                                    F(X({}, e), {
                                        children: (0, s.jsx)(u.XZJ, {
                                            type: u.XZJ.Types.ROW,
                                            disabled: m,
                                            value: t.defaultMessageNotifications === y.bL.ONLY_MENTIONS,
                                            onChange: o,
                                            className: a()({ [L.disabled]: m }),
                                            children: (0, s.jsx)(u.Text, {
                                                variant: 'text-sm/normal',
                                                children: R.intl.format(R.t.K8Eg4O, {
                                                    infoHook: () =>
                                                        (0, s.jsx)(u.ua7, {
                                                            text: R.intl.string(R.t['3h2WyM']),
                                                            'aria-label': R.intl.string(R.t['3h2WyM']),
                                                            children: (e) =>
                                                                (0, s.jsx)(
                                                                    u.d3s,
                                                                    X(
                                                                        {
                                                                            size: 'xs',
                                                                            color: 'currentColor',
                                                                            className: L.icon
                                                                        },
                                                                        e
                                                                    )
                                                                )
                                                        })
                                                })
                                            })
                                        })
                                    })
                                )
                        })
                    }),
                    (0, s.jsx)(u.ua7, {
                        text: x ? R.intl.string(R.t.PHjrpq) : null,
                        'aria-label': !!x && R.intl.string(R.t.PHjrpq),
                        children: (e) =>
                            (0, s.jsx)(
                                'div',
                                F(X({}, e), {
                                    className: L.checkboxOption,
                                    children: (0, s.jsx)(u.XZJ, {
                                        type: u.XZJ.Types.ROW,
                                        disabled: x,
                                        value: l,
                                        onChange: c,
                                        className: a()({ [L.disabled]: x }),
                                        children: (0, s.jsx)(u.Text, {
                                            variant: 'text-sm/normal',
                                            children: R.intl.format(R.t.v8qCoK, {
                                                infoHook: () =>
                                                    (0, s.jsx)(u.ua7, {
                                                        text: R.intl.string(R.t['+IyaiY']),
                                                        'aria-label': R.intl.string(R.t['+IyaiY']),
                                                        children: (e) =>
                                                            (0, s.jsx)(
                                                                u.d3s,
                                                                X(
                                                                    {
                                                                        size: 'xs',
                                                                        color: 'currentColor',
                                                                        className: L.icon
                                                                    },
                                                                    e
                                                                )
                                                            )
                                                    })
                                            })
                                        })
                                    })
                                })
                            )
                    }),
                    (0, s.jsxs)('div', {
                        className: L.form,
                        children: [
                            (0, s.jsx)(u.vwX, { children: R.intl.string(R.t['k+b2CQ']) }),
                            (0, s.jsx)(u.R94, {
                                type: u.geA.DESCRIPTION,
                                className: L.description,
                                children: R.intl.format(R.t['BwbW/f'], {
                                    communityGuidelines: E.Z.getArticleURL(y.BhN.PUBLIC_GUILD_GUILDLINES),
                                    typesOfGuilds: E.Z.getArticleURL(y.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
                                })
                            }),
                            (0, s.jsx)(u.XZJ, {
                                type: u.XZJ.Types.ROW,
                                value: i,
                                onChange: r,
                                children: (0, s.jsx)(u.Text, {
                                    variant: 'text-sm/normal',
                                    children: R.intl.string(R.t['9AG3wM'])
                                })
                            })
                        ]
                    })
                ]
            })
        );
    };
function W(e) {
    let { guild: t } = e,
        i = (0, o.e7)([C.Z], () => C.Z.getRole(t.id, t.getEveryoneRoleId()));
    if (null == i) return null;
    let { name: n, color: l } = i;
    return (0, s.jsx)('div', {
        className: L.__invalid_role,
        children: (0, s.jsxs)('span', {
            className: L.roleRow,
            children: [
                (0, s.jsx)(u.FhE, {
                    className: L.roleDot,
                    color: l.toString(),
                    background: !1,
                    tooltip: !1
                }),
                (0, s.jsx)(u.Text, {
                    className: L.roleName,
                    variant: 'text-sm/medium',
                    color: 'interactive-active',
                    children: n
                })
            ]
        })
    });
}
function Y(e) {
    let { enabledPermissions: t, onGetPermisisonName: i } = e;
    return (0, s.jsxs)('div', {
        className: L.tableContainer,
        children: [
            (0, s.jsx)(u.Text, {
                className: L.tableHeader,
                variant: 'text-xs/semibold',
                color: 'text-muted',
                children: R.intl.string(R.t.xU8RDg)
            }),
            (0, s.jsx)('div', {
                className: L.permissionsTable,
                children: t.map((e, t) =>
                    (0, s.jsxs)(
                        'div',
                        {
                            className: L.permissionRow,
                            children: [
                                (0, s.jsx)('div', { className: L.bulletWarning }),
                                (0, s.jsx)(u.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-normal',
                                    children: i(e)
                                })
                            ]
                        },
                        t
                    )
                )
            })
        ]
    });
}
function H(e) {
    let { disabledPermissions: t, onGetPermisisonName: i } = e,
        n = R.intl.string(R.t.Yo5qlp);
    return (
        t.length === w.$X.length && (n = R.intl.string(R.t.FgMS6u)),
        (0, s.jsxs)('div', {
            className: L.tableContainer,
            children: [
                (0, s.jsx)(u.Text, {
                    className: L.tableHeader,
                    variant: 'text-xs/semibold',
                    color: 'text-muted',
                    children: n
                }),
                (0, s.jsx)('div', {
                    className: L.permissionsTable,
                    children: t.map((e, t) =>
                        (0, s.jsxs)(
                            'div',
                            {
                                className: L.permissionRow,
                                children: [
                                    (0, s.jsx)('div', { className: L.bullet }),
                                    (0, s.jsx)(u.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        children: i(e)
                                    })
                                ]
                            },
                            t
                        )
                    )
                })
            ]
        })
    );
}
function z(e) {
    let { permissions: t } = e,
        i = (e) => {
            switch (e.toString()) {
                case y.Plq.MENTION_EVERYONE.toString():
                    return R.intl.string(R.t.yCpsQ0);
                case y.Plq.CREATE_GUILD_EXPRESSIONS.toString():
                    return R.intl.string(R.t.vo2LdX);
                case y.Plq.MANAGE_GUILD_EXPRESSIONS.toString():
                    return R.intl.string(R.t.cmp2W1);
                default:
                    return (0, g.wt)(e);
            }
        },
        { enabledPermissions: n, disabledPermissions: l } = t;
    return (0, s.jsxs)('div', {
        className: L.table,
        children: [
            0 !== n.length
                ? (0, s.jsx)(Y, {
                      enabledPermissions: n,
                      onGetPermisisonName: i
                  })
                : null,
            (0, s.jsx)(H, {
                disabledPermissions: l,
                onGetPermisisonName: i
            })
        ]
    });
}
let J = (e) => {
        let { guild: t, policyAccepted: i, onAcceptPolicy: l, headerId: a, theme: r } = e,
            o = (0, d.wj)(r) ? Z : A;
        n.useEffect(() => {
            (0, T.BF)({
                fromStep: w.IO.BASICS,
                toStep: w.IO.FINISH,
                guildId: t.id
            });
        }, [t.id]);
        let m = n.useMemo(() => {
            let e = [],
                i = [];
            return (
                w.$X.map((s) => {
                    O.oz(s, t) ? e.push(s) : i.push(s);
                }),
                {
                    enabledPermissions: e,
                    disabledPermissions: i
                }
            );
        }, [t]);
        return (0, s.jsxs)('div', {
            className: L.container,
            children: [
                (0, s.jsxs)('div', {
                    className: L.content,
                    children: [
                        (0, s.jsx)('img', {
                            alt: '',
                            src: o,
                            width: 80
                        }),
                        (0, s.jsx)(u.X6q, {
                            variant: 'heading-xl/semibold',
                            className: L.updatedHeader,
                            id: a,
                            children: R.intl.string(R.t['Pj/s/f'])
                        })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: L.updatedForm,
                    children: [
                        (0, s.jsx)(u.vwX, {
                            className: L.formTitle,
                            children: R.intl.string(R.t['0q344e'])
                        }),
                        (0, s.jsxs)('div', {
                            className: L.checklistRow,
                            children: [
                                (0, s.jsx)(u.owK, {
                                    size: 'md',
                                    className: L.checklistIcon,
                                    color: c.Z.unsafe_rawColors.GREEN_360.css,
                                    secondaryColor: c.Z.unsafe_rawColors.WHITE_500.css
                                }),
                                (0, s.jsx)(u.Text, {
                                    variant: 'text-md/normal',
                                    children: R.intl.format(R.t.K8Eg4O, {
                                        infoHook: () =>
                                            (0, s.jsx)(u.ua7, {
                                                text: R.intl.string(R.t['3h2WyM']),
                                                'aria-label': R.intl.string(R.t['3h2WyM']),
                                                children: (e) =>
                                                    (0, s.jsx)(
                                                        u.d3s,
                                                        X(
                                                            {
                                                                size: 'xs',
                                                                color: 'currentColor',
                                                                className: L.icon
                                                            },
                                                            e
                                                        )
                                                    )
                                            })
                                    })
                                })
                            ]
                        }),
                        (0, s.jsxs)('div', {
                            className: L.checklistRow,
                            children: [
                                (0, s.jsx)(u.owK, {
                                    size: 'md',
                                    className: L.checklistIcon,
                                    color: c.Z.unsafe_rawColors.GREEN_360.css,
                                    secondaryColor: c.Z.unsafe_rawColors.WHITE_500.css
                                }),
                                (0, s.jsx)(u.Text, {
                                    variant: 'text-md/normal',
                                    children: R.intl.string(R.t.LfeFFh)
                                }),
                                (0, s.jsx)(W, { guild: t })
                            ]
                        }),
                        (0, s.jsx)(z, { permissions: m })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: L.updatedForm,
                    children: [
                        (0, s.jsx)(u.vwX, {
                            className: L.formTitle,
                            children: R.intl.string(R.t['k+b2CQ'])
                        }),
                        (0, s.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            className: L.description,
                            children: R.intl.format(R.t['BwbW/f'], {
                                communityGuidelines: E.Z.getArticleURL(y.BhN.PUBLIC_GUILD_GUILDLINES),
                                typesOfGuilds: E.Z.getArticleURL(y.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
                            })
                        }),
                        (0, s.jsx)(u.XZJ, {
                            type: u.XZJ.Types.ROW,
                            value: i,
                            onChange: l,
                            children: (0, s.jsx)(u.Text, {
                                className: L.acceptText,
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                children: R.intl.string(R.t['9AG3wM'])
                            })
                        })
                    ]
                })
            ]
        });
    },
    V = (e) => {
        var t;
        let { transitionState: i, onClose: l } = e;
        n.useEffect(() => {
            I.default.track(y.rMx.OPEN_MODAL, { type: w.tA });
        }, []);
        let { guild: a } = (0, o.cj)([b.Z], () => b.Z.getProps()),
            c = (0, o.e7)([N.Z], () => N.Z.theme),
            [d, u] = n.useState(!1),
            [g, E] = n.useState(!w.$X.some((e) => O.oz(e, a))),
            [T, M] = n.useState(w.b4),
            [P, Z] = n.useState(w.b4),
            [A] = n.useState(null == a ? void 0 : a.defaultMessageNotifications),
            [k] = n.useState(null == a ? void 0 : a.verificationLevel),
            [D] = n.useState(null == a ? void 0 : a.explicitContentFilter),
            [W] = n.useState(g),
            Y = (0, o.e7)([C.Z], () => (null != a ? C.Z.getRole(a.id, a.getEveryoneRoleId()) : void 0)),
            H = (0, o.e7)([j.ZP], () => (null != a ? j.ZP.getChannels(a.id) : null)),
            z = (0, f.Dt)(),
            { enabled: V } = (0, m.D2)(null != (t = null == a ? void 0 : a.id) ? t : y.lds);
        if (null == a) return null;
        let K = [
            {
                value: w.b4,
                label: R.intl.string(R.t.Cla0ra)
            }
        ];
        H[j.sH].forEach((e) => {
            let { channel: t } = e;
            t.type === y.d4z.GUILD_TEXT &&
                K.push({
                    value: t.id,
                    label: (0, x.F6)(t, S.default, _.Z, !0)
                });
        });
        let Q = k !== y.sFg.NONE,
            $ = D === y.lxg.ALL_MEMBERS,
            ee = A === y.bL.ONLY_MENTIONS,
            et = async () => {
                if (null == Y || !d) return;
                let e = new Set(a.features);
                e.add(y.oNc.COMMUNITY);
                let t = g ? r.Od(Y.permissions, w.mu) : Y.permissions,
                    i = F(X({}, Y), { permissions: t });
                t !== Y.permissions && (await (0, h.Gf)(a.id, [i])),
                    p.Z.updateGuild({
                        features: e,
                        rulesChannelId: T,
                        publicUpdatesChannelId: P
                    }),
                    await p.Z.saveGuild(a.id, {
                        features: e,
                        rulesChannelId: T,
                        verificationLevel: a.verificationLevel,
                        explicitContentFilter: a.explicitContentFilter,
                        publicUpdatesChannelId: P,
                        defaultMessageNotifications: a.defaultMessageNotifications
                    }),
                    setTimeout(() => {
                        l();
                    }, 0);
            },
            ei = (0, s.jsx)(q, {
                guild: a,
                disableVerificationLevel: Q,
                disableContentFilter: $,
                onAcceptVerificationLevel: (e, t) => {
                    if (!t) return void p.Z.updateGuild({ verificationLevel: k });
                    t && p.Z.updateGuild({ verificationLevel: y.sFg.LOW });
                },
                onAcceptContentFilter: (e, t) => {
                    if (!t) return void p.Z.updateGuild({ explicitContentFilter: D });
                    p.Z.updateGuild({ explicitContentFilter: y.lxg.ALL_MEMBERS });
                },
                headerId: z,
                theme: c
            }),
            es = (0, s.jsx)(B, {
                selectableChannels: K,
                onRuleChannelChange: (e) => {
                    M(e);
                },
                onPublicUpdatesChannelChange: (e) => {
                    Z(e);
                },
                ruleChannel: T,
                publicUpdatesChannel: P,
                headerId: z,
                theme: c,
                guildId: a.id
            }),
            en = V
                ? (0, s.jsx)(J, {
                      guild: a,
                      policyAccepted: d,
                      onAcceptPolicy: (e, t) => {
                          if (t) {
                              u(!0), ee || p.Z.updateGuild({ defaultMessageNotifications: y.bL.ONLY_MENTIONS }), g || null == Y || E(!0);
                              return;
                          }
                          u(!1), ee && p.Z.updateGuild({ defaultMessageNotifications: A }), g && null != Y && E(!1);
                      },
                      headerId: z,
                      theme: c
                  })
                : (0, s.jsx)(U, {
                      guild: a,
                      disableDefaultNotifications: ee,
                      disableEveryoneRolePermissions: W,
                      policyAccepted: d,
                      everyoneRolePermissionsAccepted: g,
                      onAcceptPolicy: (e, t) => {
                          if (t) return void u(!0);
                          u(!1);
                      },
                      onAcceptDefaultNotifications: (e, t) => {
                          if (!t) return void p.Z.updateGuild({ defaultMessageNotifications: A });
                          p.Z.updateGuild({ defaultMessageNotifications: y.bL.ONLY_MENTIONS });
                      },
                      onAcceptEveryoneRolePermissions: (e, t) => {
                          null != Y && (t ? E(!0) : E(!1));
                      },
                      headerId: z,
                      theme: c
                  }),
            el = (0, s.jsx)('img', {
                alt: '',
                src: G,
                className: L.footerImage,
                width: 240
            }),
            ea = [
                {
                    modalContent: ei,
                    disableNextStep: a.explicitContentFilter !== y.lxg.ALL_MEMBERS || a.verificationLevel === y.sFg.NONE,
                    overviewTitle: R.intl.string(R.t.PpYoSk)
                },
                {
                    modalContent: es,
                    disableNextStep: null == T || null == P,
                    overviewTitle: R.intl.string(R.t['7MEtIS'])
                },
                {
                    modalContent: en,
                    disableNextStep: !d,
                    overviewTitle: R.intl.string(R.t.Pj9P8P)
                }
            ];
        return (0, s.jsx)(v.Z, {
            stepData: ea,
            title: R.intl.string(R.t['6U5XTk']),
            transitionState: i,
            onClose: () => {
                l(), I.default.track(y.rMx.MODAL_DISMISSED, { type: w.tA });
            },
            completeButtonText: R.intl.string(R.t.XGl4bW),
            onComplete: et,
            overviewFooter: el,
            sequencerClassName: L.container,
            autoCloseOnComplete: !1
        });
    };
