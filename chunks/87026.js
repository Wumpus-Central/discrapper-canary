(i.d(t, { default: () => K }), i(953529), i(539854), i(388685));
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
    C = i(485386),
    S = i(430824),
    _ = i(699516),
    I = i(594174),
    E = i(626135),
    O = i(63063),
    T = i(700785),
    w = i(245315),
    y = i(135899),
    R = i(981631),
    L = i(388032),
    M = i(341190),
    P = i(289575),
    Z = i(371411),
    A = i(112847),
    k = i(516954),
    D = i(674889),
    G = i(162752),
    X = i(438825);
function F(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {},
            s = Object.keys(i);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (s = s.concat(
                Object.getOwnPropertySymbols(i).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable;
                })
            )),
            s.forEach(function (t) {
                var s;
                ((s = i[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: s,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = s));
            }));
    }
    return e;
}
function q(e, t) {
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
let B = (e) => {
        let { guild: t, onAcceptVerificationLevel: i, onAcceptContentFilter: n, disableContentFilter: l, disableVerificationLevel: a, headerId: r, theme: c } = e,
            m = (0, o.e7)([S.Z], () => S.Z.getGuild(t.id), [t.id]),
            x = null != m && m.verificationLevel > R.sFg.NONE,
            f = (null == m ? void 0 : m.explicitContentFilter) === R.lxg.ALL_MEMBERS,
            p = (0, d.wj)(c) ? D : G;
        return (0, s.jsxs)('div', {
            className: M.container,
            children: [
                (0, s.jsxs)('div', {
                    className: M.content,
                    children: [
                        (0, s.jsx)('img', {
                            alt: '',
                            src: p,
                            width: 80
                        }),
                        (0, s.jsx)(u.X6q, {
                            variant: 'heading-xl/semibold',
                            className: M.header,
                            id: r,
                            children: L.intl.string(L.t.QrjLYm)
                        }),
                        (0, s.jsx)(u.Text, {
                            color: 'none',
                            variant: 'text-md/normal',
                            className: M.headerCaption,
                            children: L.intl.string(L.t.i1STws)
                        })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: M.form,
                    children: [
                        (0, s.jsx)(u.vwX, { children: L.intl.string(L.t.DpRdYG) }),
                        (0, s.jsx)(u.R94, {
                            type: u.geA.DESCRIPTION,
                            className: M.description,
                            children: x ? L.intl.string(L.t.k5crqq) : L.intl.string(L.t.fHiGAw)
                        }),
                        (0, s.jsx)(u.XZJ, {
                            type: u.XZJ.Types.ROW,
                            disabled: a,
                            value: t.verificationLevel > R.sFg.NONE,
                            onChange: i,
                            children: (0, s.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                children: L.intl.string(L.t.x4hbeX)
                            })
                        })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: M.form,
                    children: [
                        (0, s.jsx)(u.vwX, { children: L.intl.string(L.t.COu4bm) }),
                        (0, s.jsx)(u.R94, {
                            type: u.geA.DESCRIPTION,
                            className: M.description,
                            children: f ? L.intl.string(L.t.qgQLpq) : L.intl.string(L.t.b0MaDQ)
                        }),
                        (0, s.jsx)(u.XZJ, {
                            type: u.XZJ.Types.ROW,
                            disabled: l,
                            value: t.explicitContentFilter === R.lxg.ALL_MEMBERS,
                            onChange: n,
                            children: (0, s.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                children: L.intl.string(L.t.WAUiMj)
                            })
                        })
                    ]
                })
            ]
        });
    },
    U = (e) => {
        let { selectableChannels: t, onRuleChannelChange: i, ruleChannel: l, onPublicUpdatesChannelChange: a, publicUpdatesChannel: r, headerId: o, theme: c, guildId: m } = e;
        n.useEffect(() => {
            (0, w.BF)({
                fromStep: y.IO.SAFETY_CHECK,
                toStep: y.IO.BASICS,
                guildId: m
            });
        }, [m]);
        let x = (0, d.wj)(c) ? P : Z;
        return (0, s.jsxs)('div', {
            className: M.container,
            children: [
                (0, s.jsxs)('div', {
                    className: M.content,
                    children: [
                        (0, s.jsx)('img', {
                            alt: '',
                            src: x,
                            width: 80
                        }),
                        (0, s.jsx)(u.X6q, {
                            variant: 'heading-xl/semibold',
                            className: M.header,
                            id: o,
                            children: L.intl.string(L.t.YtXpEh)
                        }),
                        (0, s.jsx)(u.Text, {
                            color: 'none',
                            variant: 'text-md/normal',
                            className: M.headerCaption,
                            children: L.intl.string(L.t['J/fYR0'])
                        })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: M.form,
                    children: [
                        (0, s.jsx)(u.vwX, { children: L.intl.string(L.t.dYrhCA) }),
                        (0, s.jsx)(u.R94, {
                            type: u.geA.DESCRIPTION,
                            className: M.description,
                            children: L.intl.string(L.t['+Af+V1'])
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
                    className: M.form,
                    children: [
                        (0, s.jsx)(u.vwX, { children: L.intl.string(L.t.vAyDGR) }),
                        (0, s.jsx)(u.R94, {
                            type: u.geA.DESCRIPTION,
                            className: M.description,
                            children: L.intl.string(L.t.ZFeonp)
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
    W = (e) => {
        let { guild: t, policyAccepted: i, everyoneRolePermissionsAccepted: l, onAcceptPolicy: r, onAcceptDefaultNotifications: o, onAcceptEveryoneRolePermissions: c, disableDefaultNotifications: m, disableEveryoneRolePermissions: x, headerId: f, theme: p } = e,
            h = (0, d.wj)(p) ? A : k;
        return (
            n.useEffect(() => {
                (0, w.BF)({
                    fromStep: y.IO.BASICS,
                    toStep: y.IO.FINISH,
                    guildId: t.id
                });
            }, [t.id]),
            (0, s.jsxs)('div', {
                className: M.container,
                children: [
                    (0, s.jsxs)('div', {
                        className: M.content,
                        children: [
                            (0, s.jsx)('img', {
                                alt: '',
                                src: h,
                                width: 80
                            }),
                            (0, s.jsx)(u.X6q, {
                                variant: 'heading-xl/semibold',
                                className: M.header,
                                id: f,
                                children: L.intl.string(L.t['Pj/s/f'])
                            }),
                            (0, s.jsx)(u.Text, {
                                color: 'none',
                                variant: 'text-md/normal',
                                className: M.headerCaption,
                                children: L.intl.string(L.t['IL7/np'])
                            })
                        ]
                    }),
                    (0, s.jsx)('div', {
                        className: M.form,
                        children: (0, s.jsx)(u.ua7, {
                            text: m ? L.intl.string(L.t.PHjrpq) : null,
                            'aria-label': !!m && L.intl.string(L.t.PHjrpq),
                            children: (e) =>
                                (0, s.jsx)(
                                    'div',
                                    q(F({}, e), {
                                        children: (0, s.jsx)(u.XZJ, {
                                            type: u.XZJ.Types.ROW,
                                            disabled: m,
                                            value: t.defaultMessageNotifications === R.bL.ONLY_MENTIONS,
                                            onChange: o,
                                            className: a()({ [M.disabled]: m }),
                                            children: (0, s.jsx)(u.Text, {
                                                variant: 'text-sm/normal',
                                                children: L.intl.format(L.t.K8Eg4O, {
                                                    infoHook: () =>
                                                        (0, s.jsx)(u.ua7, {
                                                            text: L.intl.string(L.t['3h2WyM']),
                                                            'aria-label': L.intl.string(L.t['3h2WyM']),
                                                            children: (e) =>
                                                                (0, s.jsx)(
                                                                    u.d3s,
                                                                    F(
                                                                        {
                                                                            size: 'xs',
                                                                            color: 'currentColor',
                                                                            className: M.icon
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
                        text: x ? L.intl.string(L.t.PHjrpq) : null,
                        'aria-label': !!x && L.intl.string(L.t.PHjrpq),
                        children: (e) =>
                            (0, s.jsx)(
                                'div',
                                q(F({}, e), {
                                    className: M.checkboxOption,
                                    children: (0, s.jsx)(u.XZJ, {
                                        type: u.XZJ.Types.ROW,
                                        disabled: x,
                                        value: l,
                                        onChange: c,
                                        className: a()({ [M.disabled]: x }),
                                        children: (0, s.jsx)(u.Text, {
                                            variant: 'text-sm/normal',
                                            children: L.intl.format(L.t.v8qCoK, {
                                                infoHook: () =>
                                                    (0, s.jsx)(u.ua7, {
                                                        text: L.intl.string(L.t['+IyaiY']),
                                                        'aria-label': L.intl.string(L.t['+IyaiY']),
                                                        children: (e) =>
                                                            (0, s.jsx)(
                                                                u.d3s,
                                                                F(
                                                                    {
                                                                        size: 'xs',
                                                                        color: 'currentColor',
                                                                        className: M.icon
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
                        className: M.form,
                        children: [
                            (0, s.jsx)(u.vwX, { children: L.intl.string(L.t['k+b2CQ']) }),
                            (0, s.jsx)(u.R94, {
                                type: u.geA.DESCRIPTION,
                                className: M.description,
                                children: L.intl.format(L.t['BwbW/f'], {
                                    communityGuidelines: O.Z.getArticleURL(R.BhN.PUBLIC_GUILD_GUILDLINES),
                                    typesOfGuilds: O.Z.getArticleURL(R.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
                                })
                            }),
                            (0, s.jsx)(u.XZJ, {
                                type: u.XZJ.Types.ROW,
                                value: i,
                                onChange: r,
                                children: (0, s.jsx)(u.Text, {
                                    variant: 'text-sm/normal',
                                    children: L.intl.string(L.t['9AG3wM'])
                                })
                            })
                        ]
                    })
                ]
            })
        );
    };
function Y(e) {
    let { guild: t } = e,
        i = (0, o.e7)([C.Z], () => C.Z.getRole(t.id, t.getEveryoneRoleId()));
    if (null == i) return null;
    let { name: n, color: l } = i;
    return (0, s.jsx)('div', {
        className: M.__invalid_role,
        children: (0, s.jsxs)('span', {
            className: M.roleRow,
            children: [
                (0, s.jsx)(u.FhE, {
                    className: M.roleDot,
                    color: l.toString(),
                    background: !1,
                    tooltip: !1
                }),
                (0, s.jsx)(u.Text, {
                    className: M.roleName,
                    variant: 'text-sm/medium',
                    color: 'interactive-active',
                    children: n
                })
            ]
        })
    });
}
function H(e) {
    let { enabledPermissions: t, onGetPermisisonName: i } = e;
    return (0, s.jsxs)('div', {
        className: M.tableContainer,
        children: [
            (0, s.jsx)(u.Text, {
                className: M.tableHeader,
                variant: 'text-xs/semibold',
                color: 'text-muted',
                children: L.intl.string(L.t.xU8RDg)
            }),
            (0, s.jsx)('div', {
                className: M.permissionsTable,
                children: t.map((e, t) =>
                    (0, s.jsxs)(
                        'div',
                        {
                            className: M.permissionRow,
                            children: [
                                (0, s.jsx)('div', { className: M.bulletWarning }),
                                (0, s.jsx)(u.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-default',
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
function z(e) {
    let { disabledPermissions: t, onGetPermisisonName: i } = e,
        n = L.intl.string(L.t.Yo5qlp);
    return (
        t.length === y.$X.length && (n = L.intl.string(L.t.FgMS6u)),
        (0, s.jsxs)('div', {
            className: M.tableContainer,
            children: [
                (0, s.jsx)(u.Text, {
                    className: M.tableHeader,
                    variant: 'text-xs/semibold',
                    color: 'text-muted',
                    children: n
                }),
                (0, s.jsx)('div', {
                    className: M.permissionsTable,
                    children: t.map((e, t) =>
                        (0, s.jsxs)(
                            'div',
                            {
                                className: M.permissionRow,
                                children: [
                                    (0, s.jsx)('div', { className: M.bullet }),
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
function J(e) {
    let { permissions: t } = e,
        i = (e) => {
            switch (e.toString()) {
                case R.Plq.MENTION_EVERYONE.toString():
                    return L.intl.string(L.t.yCpsQ0);
                case R.Plq.CREATE_GUILD_EXPRESSIONS.toString():
                    return L.intl.string(L.t.vo2LdX);
                case R.Plq.MANAGE_GUILD_EXPRESSIONS.toString():
                    return L.intl.string(L.t.cmp2W1);
                default:
                    return (0, g.wt)(e);
            }
        },
        { enabledPermissions: n, disabledPermissions: l } = t;
    return (0, s.jsxs)('div', {
        className: M.table,
        children: [
            0 !== n.length
                ? (0, s.jsx)(H, {
                      enabledPermissions: n,
                      onGetPermisisonName: i
                  })
                : null,
            (0, s.jsx)(z, {
                disabledPermissions: l,
                onGetPermisisonName: i
            })
        ]
    });
}
let V = (e) => {
        let { guild: t, policyAccepted: i, onAcceptPolicy: l, headerId: a, theme: r } = e,
            o = (0, d.wj)(r) ? A : k;
        n.useEffect(() => {
            (0, w.BF)({
                fromStep: y.IO.BASICS,
                toStep: y.IO.FINISH,
                guildId: t.id
            });
        }, [t.id]);
        let m = n.useMemo(() => {
            let e = [],
                i = [];
            return (
                y.$X.map((s) => {
                    T.oz(s, t) ? e.push(s) : i.push(s);
                }),
                {
                    enabledPermissions: e,
                    disabledPermissions: i
                }
            );
        }, [t]);
        return (0, s.jsxs)('div', {
            className: M.container,
            children: [
                (0, s.jsxs)('div', {
                    className: M.content,
                    children: [
                        (0, s.jsx)('img', {
                            alt: '',
                            src: o,
                            width: 80
                        }),
                        (0, s.jsx)(u.X6q, {
                            variant: 'heading-xl/semibold',
                            className: M.updatedHeader,
                            id: a,
                            children: L.intl.string(L.t['Pj/s/f'])
                        })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: M.updatedForm,
                    children: [
                        (0, s.jsx)(u.vwX, {
                            className: M.formTitle,
                            children: L.intl.string(L.t['0q344e'])
                        }),
                        (0, s.jsxs)('div', {
                            className: M.checklistRow,
                            children: [
                                (0, s.jsx)(u.owK, {
                                    size: 'md',
                                    className: M.checklistIcon,
                                    color: c.Z.unsafe_rawColors.GREEN_360.css,
                                    secondaryColor: c.Z.unsafe_rawColors.WHITE_500.css
                                }),
                                (0, s.jsx)(u.Text, {
                                    variant: 'text-md/normal',
                                    children: L.intl.format(L.t.K8Eg4O, {
                                        infoHook: () =>
                                            (0, s.jsx)(u.ua7, {
                                                text: L.intl.string(L.t['3h2WyM']),
                                                'aria-label': L.intl.string(L.t['3h2WyM']),
                                                children: (e) =>
                                                    (0, s.jsx)(
                                                        u.d3s,
                                                        F(
                                                            {
                                                                size: 'xs',
                                                                color: 'currentColor',
                                                                className: M.icon
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
                            className: M.checklistRow,
                            children: [
                                (0, s.jsx)(u.owK, {
                                    size: 'md',
                                    className: M.checklistIcon,
                                    color: c.Z.unsafe_rawColors.GREEN_360.css,
                                    secondaryColor: c.Z.unsafe_rawColors.WHITE_500.css
                                }),
                                (0, s.jsx)(u.Text, {
                                    variant: 'text-md/normal',
                                    children: L.intl.string(L.t.LfeFFh)
                                }),
                                (0, s.jsx)(Y, { guild: t })
                            ]
                        }),
                        (0, s.jsx)(J, { permissions: m })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: M.updatedForm,
                    children: [
                        (0, s.jsx)(u.vwX, {
                            className: M.formTitle,
                            children: L.intl.string(L.t['k+b2CQ'])
                        }),
                        (0, s.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            className: M.description,
                            children: L.intl.format(L.t['BwbW/f'], {
                                communityGuidelines: O.Z.getArticleURL(R.BhN.PUBLIC_GUILD_GUILDLINES),
                                typesOfGuilds: O.Z.getArticleURL(R.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
                            })
                        }),
                        (0, s.jsx)(u.XZJ, {
                            type: u.XZJ.Types.ROW,
                            value: i,
                            onChange: l,
                            children: (0, s.jsx)(u.Text, {
                                className: M.acceptText,
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                children: L.intl.string(L.t['9AG3wM'])
                            })
                        })
                    ]
                })
            ]
        });
    },
    K = (e) => {
        var t;
        let { transitionState: i, onClose: l } = e;
        n.useEffect(() => {
            E.default.track(R.rMx.OPEN_MODAL, { type: y.tA });
        }, []);
        let { guild: a } = (0, o.cj)([b.Z], () => b.Z.getProps()),
            c = (0, o.e7)([N.Z], () => N.Z.theme),
            [d, u] = n.useState(!1),
            [g, S] = n.useState(!y.$X.some((e) => T.oz(e, a))),
            [O, w] = n.useState(y.b4),
            [P, Z] = n.useState(y.b4),
            [A] = n.useState(null == a ? void 0 : a.defaultMessageNotifications),
            [k] = n.useState(null == a ? void 0 : a.verificationLevel),
            [D] = n.useState(null == a ? void 0 : a.explicitContentFilter),
            [G] = n.useState(g),
            Y = (0, o.e7)([C.Z], () => (null != a ? C.Z.getRole(a.id, a.getEveryoneRoleId()) : void 0)),
            H = (0, o.e7)([j.ZP], () => (null != a ? j.ZP.getChannels(a.id) : null)),
            z = (0, f.Dt)(),
            { enabled: J } = (0, m.D2)(null != (t = null == a ? void 0 : a.id) ? t : R.lds);
        if (null == a) return null;
        let K = [
            {
                value: y.b4,
                label: L.intl.string(L.t.Cla0ra)
            }
        ];
        H[j.sH].forEach((e) => {
            let { channel: t } = e;
            t.type === R.d4z.GUILD_TEXT &&
                K.push({
                    value: t.id,
                    label: (0, x.F6)(t, I.default, _.Z, !0)
                });
        });
        let Q = k !== R.sFg.NONE,
            $ = D === R.lxg.ALL_MEMBERS,
            ee = A === R.bL.ONLY_MENTIONS,
            et = async () => {
                if (null == Y || !d) return;
                let e = new Set(a.features);
                e.add(R.oNc.COMMUNITY);
                let t = g ? r.Od(Y.permissions, y.mu) : Y.permissions,
                    i = q(F({}, Y), { permissions: t });
                (t !== Y.permissions && (await (0, h.Gf)(a.id, [i])),
                    p.Z.updateGuild({
                        features: e,
                        rulesChannelId: O,
                        publicUpdatesChannelId: P
                    }),
                    await p.Z.saveGuild(a.id, {
                        features: e,
                        rulesChannelId: O,
                        verificationLevel: a.verificationLevel,
                        explicitContentFilter: a.explicitContentFilter,
                        publicUpdatesChannelId: P,
                        defaultMessageNotifications: a.defaultMessageNotifications
                    }),
                    setTimeout(() => {
                        l();
                    }, 0));
            },
            ei = (0, s.jsx)(B, {
                guild: a,
                disableVerificationLevel: Q,
                disableContentFilter: $,
                onAcceptVerificationLevel: (e, t) => {
                    if (!t) return void p.Z.updateGuild({ verificationLevel: k });
                    t && p.Z.updateGuild({ verificationLevel: R.sFg.LOW });
                },
                onAcceptContentFilter: (e, t) => {
                    if (!t) return void p.Z.updateGuild({ explicitContentFilter: D });
                    p.Z.updateGuild({ explicitContentFilter: R.lxg.ALL_MEMBERS });
                },
                headerId: z,
                theme: c
            }),
            es = (0, s.jsx)(U, {
                selectableChannels: K,
                onRuleChannelChange: (e) => {
                    w(e);
                },
                onPublicUpdatesChannelChange: (e) => {
                    Z(e);
                },
                ruleChannel: O,
                publicUpdatesChannel: P,
                headerId: z,
                theme: c,
                guildId: a.id
            }),
            en = J
                ? (0, s.jsx)(V, {
                      guild: a,
                      policyAccepted: d,
                      onAcceptPolicy: (e, t) => {
                          if (t) {
                              (u(!0), ee || p.Z.updateGuild({ defaultMessageNotifications: R.bL.ONLY_MENTIONS }), g || null == Y || S(!0));
                              return;
                          }
                          (u(!1), ee && p.Z.updateGuild({ defaultMessageNotifications: A }), g && null != Y && S(!1));
                      },
                      headerId: z,
                      theme: c
                  })
                : (0, s.jsx)(W, {
                      guild: a,
                      disableDefaultNotifications: ee,
                      disableEveryoneRolePermissions: G,
                      policyAccepted: d,
                      everyoneRolePermissionsAccepted: g,
                      onAcceptPolicy: (e, t) => {
                          if (t) return void u(!0);
                          u(!1);
                      },
                      onAcceptDefaultNotifications: (e, t) => {
                          if (!t) return void p.Z.updateGuild({ defaultMessageNotifications: A });
                          p.Z.updateGuild({ defaultMessageNotifications: R.bL.ONLY_MENTIONS });
                      },
                      onAcceptEveryoneRolePermissions: (e, t) => {
                          null != Y && (t ? S(!0) : S(!1));
                      },
                      headerId: z,
                      theme: c
                  }),
            el = (0, s.jsx)('img', {
                alt: '',
                src: X,
                className: M.footerImage,
                width: 240
            }),
            ea = [
                {
                    modalContent: ei,
                    disableNextStep: a.explicitContentFilter !== R.lxg.ALL_MEMBERS || a.verificationLevel === R.sFg.NONE,
                    overviewTitle: L.intl.string(L.t.PpYoSk)
                },
                {
                    modalContent: es,
                    disableNextStep: null == O || null == P,
                    overviewTitle: L.intl.string(L.t['7MEtIS'])
                },
                {
                    modalContent: en,
                    disableNextStep: !d,
                    overviewTitle: L.intl.string(L.t.Pj9P8P)
                }
            ];
        return (0, s.jsx)(v.Z, {
            stepData: ea,
            title: L.intl.string(L.t['6U5XTk']),
            transitionState: i,
            onClose: () => {
                (l(), E.default.track(R.rMx.MODAL_DISMISSED, { type: y.tA }));
            },
            completeButtonText: L.intl.string(L.t.XGl4bW),
            onComplete: et,
            overviewFooter: el,
            sequencerClassName: M.container,
            autoCloseOnComplete: !1
        });
    };
