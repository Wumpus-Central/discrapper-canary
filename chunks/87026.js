i.d(t, { default: () => z }), i(653041), i(47120);
var s = i(200651),
    l = i(192379),
    n = i(120356),
    a = i.n(n),
    r = i(149765),
    o = i(442837),
    c = i(692547),
    d = i(780384),
    u = i(481060),
    m = i(785697),
    x = i(933557),
    h = i(313201),
    f = i(434404),
    p = i(764260),
    v = i(999382),
    b = i(416162),
    g = i(422559),
    N = i(210887),
    j = i(984933),
    C = i(430824),
    _ = i(699516),
    I = i(594174),
    S = i(626135),
    E = i(63063),
    T = i(700785),
    R = i(245315),
    w = i(135899),
    L = i(981631),
    M = i(388032),
    O = i(450262),
    y = i(289575),
    Z = i(371411),
    A = i(112847),
    k = i(516954),
    P = i(674889),
    D = i(162752),
    G = i(438825);
let X = (e) => {
        let { guild: t, onAcceptVerificationLevel: i, onAcceptContentFilter: l, disableContentFilter: n, disableVerificationLevel: a, headerId: r, theme: c } = e,
            m = (0, o.e7)([C.Z], () => C.Z.getGuild(t.id), [t.id]),
            x = null != m && m.verificationLevel > L.sFg.NONE,
            h = (null == m ? void 0 : m.explicitContentFilter) === L.lxg.ALL_MEMBERS,
            f = (0, d.wj)(c) ? P : D;
        return (0, s.jsxs)('div', {
            className: O.container,
            children: [
                (0, s.jsxs)('div', {
                    className: O.content,
                    children: [
                        (0, s.jsx)('img', {
                            alt: '',
                            src: f,
                            width: 80
                        }),
                        (0, s.jsx)(u.X6q, {
                            variant: 'heading-xl/semibold',
                            className: O.header,
                            id: r,
                            children: M.intl.string(M.t.QrjLYm)
                        }),
                        (0, s.jsx)(u.Text, {
                            color: 'none',
                            variant: 'text-md/normal',
                            className: O.headerCaption,
                            children: M.intl.string(M.t.i1STws)
                        })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: O.form,
                    children: [
                        (0, s.jsx)(u.vwX, { children: M.intl.string(M.t.DpRdYG) }),
                        (0, s.jsx)(u.R94, {
                            type: u.geA.DESCRIPTION,
                            className: O.description,
                            children: x ? M.intl.string(M.t.k5crqq) : M.intl.string(M.t.fHiGAw)
                        }),
                        (0, s.jsx)(u.XZJ, {
                            type: u.XZJ.Types.ROW,
                            disabled: a,
                            value: t.verificationLevel > L.sFg.NONE,
                            onChange: i,
                            children: (0, s.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                children: M.intl.string(M.t.x4hbeX)
                            })
                        })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: O.form,
                    children: [
                        (0, s.jsx)(u.vwX, { children: M.intl.string(M.t.COu4bm) }),
                        (0, s.jsx)(u.R94, {
                            type: u.geA.DESCRIPTION,
                            className: O.description,
                            children: h ? M.intl.string(M.t.qgQLpq) : M.intl.string(M.t.b0MaDQ)
                        }),
                        (0, s.jsx)(u.XZJ, {
                            type: u.XZJ.Types.ROW,
                            disabled: n,
                            value: t.explicitContentFilter === L.lxg.ALL_MEMBERS,
                            onChange: l,
                            children: (0, s.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                children: M.intl.string(M.t.WAUiMj)
                            })
                        })
                    ]
                })
            ]
        });
    },
    F = (e) => {
        let { selectableChannels: t, onRuleChannelChange: i, ruleChannel: n, onPublicUpdatesChannelChange: a, publicUpdatesChannel: r, headerId: o, theme: c, guildId: m } = e;
        l.useEffect(() => {
            (0, R.BF)({
                fromStep: w.IO.SAFETY_CHECK,
                toStep: w.IO.BASICS,
                guildId: m
            });
        }, [m]);
        let x = (0, d.wj)(c) ? y : Z;
        return (0, s.jsxs)('div', {
            className: O.container,
            children: [
                (0, s.jsxs)('div', {
                    className: O.content,
                    children: [
                        (0, s.jsx)('img', {
                            alt: '',
                            src: x,
                            width: 80
                        }),
                        (0, s.jsx)(u.X6q, {
                            variant: 'heading-xl/semibold',
                            className: O.header,
                            id: o,
                            children: M.intl.string(M.t.YtXpEh)
                        }),
                        (0, s.jsx)(u.Text, {
                            color: 'none',
                            variant: 'text-md/normal',
                            className: O.headerCaption,
                            children: M.intl.string(M.t['J/fYR0'])
                        })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: O.form,
                    children: [
                        (0, s.jsx)(u.vwX, { children: M.intl.string(M.t.dYrhCA) }),
                        (0, s.jsx)(u.R94, {
                            type: u.geA.DESCRIPTION,
                            className: O.description,
                            children: M.intl.string(M.t['+Af+V1'])
                        }),
                        (0, s.jsx)(u.VcW, {
                            options: t,
                            onChange: i,
                            value: n,
                            maxVisibleItems: 4
                        })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: O.form,
                    children: [
                        (0, s.jsx)(u.vwX, { children: M.intl.string(M.t.vAyDGR) }),
                        (0, s.jsx)(u.R94, {
                            type: u.geA.DESCRIPTION,
                            className: O.description,
                            children: M.intl.string(M.t.ZFeonp)
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
    q = (e) => {
        let { guild: t, policyAccepted: i, everyoneRolePermissionsAccepted: n, onAcceptPolicy: r, onAcceptDefaultNotifications: o, onAcceptEveryoneRolePermissions: c, disableDefaultNotifications: m, disableEveryoneRolePermissions: x, headerId: h, theme: f } = e,
            p = (0, d.wj)(f) ? A : k;
        return (
            l.useEffect(() => {
                (0, R.BF)({
                    fromStep: w.IO.BASICS,
                    toStep: w.IO.FINISH,
                    guildId: t.id
                });
            }, [t.id]),
            (0, s.jsxs)('div', {
                className: O.container,
                children: [
                    (0, s.jsxs)('div', {
                        className: O.content,
                        children: [
                            (0, s.jsx)('img', {
                                alt: '',
                                src: p,
                                width: 80
                            }),
                            (0, s.jsx)(u.X6q, {
                                variant: 'heading-xl/semibold',
                                className: O.header,
                                id: h,
                                children: M.intl.string(M.t['Pj/s/f'])
                            }),
                            (0, s.jsx)(u.Text, {
                                color: 'none',
                                variant: 'text-md/normal',
                                className: O.headerCaption,
                                children: M.intl.string(M.t['IL7/np'])
                            })
                        ]
                    }),
                    (0, s.jsx)('div', {
                        className: O.form,
                        children: (0, s.jsx)(u.ua7, {
                            text: m ? M.intl.string(M.t.PHjrpq) : null,
                            'aria-label': !!m && M.intl.string(M.t.PHjrpq),
                            children: (e) =>
                                (0, s.jsx)('div', {
                                    ...e,
                                    children: (0, s.jsx)(u.XZJ, {
                                        type: u.XZJ.Types.ROW,
                                        disabled: m,
                                        value: t.defaultMessageNotifications === L.bL.ONLY_MENTIONS,
                                        onChange: o,
                                        className: a()({ [O.disabled]: m }),
                                        children: (0, s.jsx)(u.Text, {
                                            variant: 'text-sm/normal',
                                            children: M.intl.format(M.t.K8Eg4O, {
                                                infoHook: () =>
                                                    (0, s.jsx)(u.ua7, {
                                                        text: M.intl.string(M.t['3h2WyM']),
                                                        'aria-label': M.intl.string(M.t['3h2WyM']),
                                                        children: (e) =>
                                                            (0, s.jsx)(u.d3s, {
                                                                size: 'xs',
                                                                color: 'currentColor',
                                                                className: O.icon,
                                                                ...e
                                                            })
                                                    })
                                            })
                                        })
                                    })
                                })
                        })
                    }),
                    (0, s.jsx)(u.ua7, {
                        text: x ? M.intl.string(M.t.PHjrpq) : null,
                        'aria-label': !!x && M.intl.string(M.t.PHjrpq),
                        children: (e) =>
                            (0, s.jsx)('div', {
                                ...e,
                                className: O.checkboxOption,
                                children: (0, s.jsx)(u.XZJ, {
                                    type: u.XZJ.Types.ROW,
                                    disabled: x,
                                    value: n,
                                    onChange: c,
                                    className: a()({ [O.disabled]: x }),
                                    children: (0, s.jsx)(u.Text, {
                                        variant: 'text-sm/normal',
                                        children: M.intl.format(M.t.v8qCoK, {
                                            infoHook: () =>
                                                (0, s.jsx)(u.ua7, {
                                                    text: M.intl.string(M.t['+IyaiY']),
                                                    'aria-label': M.intl.string(M.t['+IyaiY']),
                                                    children: (e) =>
                                                        (0, s.jsx)(u.d3s, {
                                                            size: 'xs',
                                                            color: 'currentColor',
                                                            className: O.icon,
                                                            ...e
                                                        })
                                                })
                                        })
                                    })
                                })
                            })
                    }),
                    (0, s.jsxs)('div', {
                        className: O.form,
                        children: [
                            (0, s.jsx)(u.vwX, { children: M.intl.string(M.t['k+b2CQ']) }),
                            (0, s.jsx)(u.R94, {
                                type: u.geA.DESCRIPTION,
                                className: O.description,
                                children: M.intl.format(M.t['BwbW/f'], {
                                    communityGuidelines: E.Z.getArticleURL(L.BhN.PUBLIC_GUILD_GUILDLINES),
                                    typesOfGuilds: E.Z.getArticleURL(L.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
                                })
                            }),
                            (0, s.jsx)(u.XZJ, {
                                type: u.XZJ.Types.ROW,
                                value: i,
                                onChange: r,
                                children: (0, s.jsx)(u.Text, {
                                    variant: 'text-sm/normal',
                                    children: M.intl.string(M.t['9AG3wM'])
                                })
                            })
                        ]
                    })
                ]
            })
        );
    };
function B(e) {
    let { guild: t } = e,
        i = (0, o.e7)([C.Z], () => C.Z.getRole(t.id, t.getEveryoneRoleId()));
    if (null == i) return null;
    let { name: l, color: n } = i;
    return (0, s.jsx)('div', {
        className: O.__invalid_role,
        children: (0, s.jsxs)('span', {
            className: O.roleRow,
            children: [
                (0, s.jsx)(u.FhE, {
                    className: O.roleDot,
                    color: n.toString(),
                    background: !1,
                    tooltip: !1
                }),
                (0, s.jsx)(u.Text, {
                    className: O.roleName,
                    variant: 'text-sm/medium',
                    color: 'interactive-active',
                    children: l
                })
            ]
        })
    });
}
function U(e) {
    let { enabledPermissions: t, onGetPermisisonName: i } = e;
    return (0, s.jsxs)('div', {
        className: O.tableContainer,
        children: [
            (0, s.jsx)(u.Text, {
                className: O.tableHeader,
                variant: 'text-xs/semibold',
                color: 'text-muted',
                children: M.intl.string(M.t.xU8RDg)
            }),
            (0, s.jsx)('div', {
                className: O.permissionsTable,
                children: t.map((e, t) =>
                    (0, s.jsxs)(
                        'div',
                        {
                            className: O.permissionRow,
                            children: [
                                (0, s.jsx)('div', { className: O.bulletWarning }),
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
function W(e) {
    let { disabledPermissions: t, onGetPermisisonName: i } = e,
        l = M.intl.string(M.t.Yo5qlp);
    return (
        t.length === w.$X.length && (l = M.intl.string(M.t.FgMS6u)),
        (0, s.jsxs)('div', {
            className: O.tableContainer,
            children: [
                (0, s.jsx)(u.Text, {
                    className: O.tableHeader,
                    variant: 'text-xs/semibold',
                    color: 'text-muted',
                    children: l
                }),
                (0, s.jsx)('div', {
                    className: O.permissionsTable,
                    children: t.map((e, t) =>
                        (0, s.jsxs)(
                            'div',
                            {
                                className: O.permissionRow,
                                children: [
                                    (0, s.jsx)('div', { className: O.bullet }),
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
function Y(e) {
    let { permissions: t } = e,
        i = (e) => {
            switch (e.toString()) {
                case L.Plq.MENTION_EVERYONE.toString():
                    return M.intl.string(M.t.yCpsQ0);
                case L.Plq.CREATE_GUILD_EXPRESSIONS.toString():
                    return M.intl.string(M.t.vo2LdX);
                case L.Plq.MANAGE_GUILD_EXPRESSIONS.toString():
                    return M.intl.string(M.t.cmp2W1);
                default:
                    return (0, g.wt)(e);
            }
        },
        { enabledPermissions: l, disabledPermissions: n } = t;
    return (0, s.jsxs)('div', {
        className: O.table,
        children: [
            0 !== l.length
                ? (0, s.jsx)(U, {
                      enabledPermissions: l,
                      onGetPermisisonName: i
                  })
                : null,
            (0, s.jsx)(W, {
                disabledPermissions: n,
                onGetPermisisonName: i
            })
        ]
    });
}
let H = (e) => {
        let { guild: t, policyAccepted: i, onAcceptPolicy: n, headerId: a, theme: r } = e,
            o = (0, d.wj)(r) ? A : k;
        l.useEffect(() => {
            (0, R.BF)({
                fromStep: w.IO.BASICS,
                toStep: w.IO.FINISH,
                guildId: t.id
            });
        }, [t.id]);
        let m = l.useMemo(() => {
            let e = [],
                i = [];
            return (
                w.$X.map((s) => {
                    T.oz(s, t) ? e.push(s) : i.push(s);
                }),
                {
                    enabledPermissions: e,
                    disabledPermissions: i
                }
            );
        }, [t]);
        return (0, s.jsxs)('div', {
            className: O.container,
            children: [
                (0, s.jsxs)('div', {
                    className: O.content,
                    children: [
                        (0, s.jsx)('img', {
                            alt: '',
                            src: o,
                            width: 80
                        }),
                        (0, s.jsx)(u.X6q, {
                            variant: 'heading-xl/semibold',
                            className: O.updatedHeader,
                            id: a,
                            children: M.intl.string(M.t['Pj/s/f'])
                        })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: O.updatedForm,
                    children: [
                        (0, s.jsx)(u.vwX, {
                            className: O.formTitle,
                            children: M.intl.string(M.t['0q344e'])
                        }),
                        (0, s.jsxs)('div', {
                            className: O.checklistRow,
                            children: [
                                (0, s.jsx)(u.owK, {
                                    size: 'md',
                                    className: O.checklistIcon,
                                    color: c.Z.unsafe_rawColors.GREEN_360.css,
                                    secondaryColor: c.Z.unsafe_rawColors.WHITE_500.css
                                }),
                                (0, s.jsx)(u.Text, {
                                    variant: 'text-md/normal',
                                    children: M.intl.format(M.t.K8Eg4O, {
                                        infoHook: () =>
                                            (0, s.jsx)(u.ua7, {
                                                text: M.intl.string(M.t['3h2WyM']),
                                                'aria-label': M.intl.string(M.t['3h2WyM']),
                                                children: (e) =>
                                                    (0, s.jsx)(u.d3s, {
                                                        size: 'xs',
                                                        color: 'currentColor',
                                                        className: O.icon,
                                                        ...e
                                                    })
                                            })
                                    })
                                })
                            ]
                        }),
                        (0, s.jsxs)('div', {
                            className: O.checklistRow,
                            children: [
                                (0, s.jsx)(u.owK, {
                                    size: 'md',
                                    className: O.checklistIcon,
                                    color: c.Z.unsafe_rawColors.GREEN_360.css,
                                    secondaryColor: c.Z.unsafe_rawColors.WHITE_500.css
                                }),
                                (0, s.jsx)(u.Text, {
                                    variant: 'text-md/normal',
                                    children: M.intl.string(M.t.LfeFFh)
                                }),
                                (0, s.jsx)(B, { guild: t })
                            ]
                        }),
                        (0, s.jsx)(Y, { permissions: m })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: O.updatedForm,
                    children: [
                        (0, s.jsx)(u.vwX, {
                            className: O.formTitle,
                            children: M.intl.string(M.t['k+b2CQ'])
                        }),
                        (0, s.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            className: O.description,
                            children: M.intl.format(M.t['BwbW/f'], {
                                communityGuidelines: E.Z.getArticleURL(L.BhN.PUBLIC_GUILD_GUILDLINES),
                                typesOfGuilds: E.Z.getArticleURL(L.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
                            })
                        }),
                        (0, s.jsx)(u.XZJ, {
                            type: u.XZJ.Types.ROW,
                            value: i,
                            onChange: n,
                            children: (0, s.jsx)(u.Text, {
                                className: O.acceptText,
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                children: M.intl.string(M.t['9AG3wM'])
                            })
                        })
                    ]
                })
            ]
        });
    },
    z = (e) => {
        var t;
        let { transitionState: i, onClose: n } = e;
        l.useEffect(() => {
            S.default.track(L.rMx.OPEN_MODAL, { type: w.tA });
        }, []);
        let { guild: a } = (0, o.cj)([v.Z], () => v.Z.getProps()),
            c = (0, o.e7)([N.Z], () => N.Z.theme),
            [d, u] = l.useState(!1),
            [g, E] = l.useState(!w.$X.some((e) => T.oz(e, a))),
            [R, y] = l.useState(w.b4),
            [Z, A] = l.useState(w.b4),
            [k] = l.useState(null == a ? void 0 : a.defaultMessageNotifications),
            [P] = l.useState(null == a ? void 0 : a.verificationLevel),
            [D] = l.useState(null == a ? void 0 : a.explicitContentFilter),
            [B] = l.useState(g),
            U = (0, o.e7)([C.Z], () => (null != a ? C.Z.getRole(a.id, a.getEveryoneRoleId()) : void 0)),
            W = (0, o.e7)([j.ZP], () => (null != a ? j.ZP.getChannels(a.id) : null)),
            Y = (0, h.Dt)(),
            { enabled: z } = (0, m.D2)(null !== (t = null == a ? void 0 : a.id) && void 0 !== t ? t : L.lds);
        if (null == a) return null;
        let J = [
            {
                value: w.b4,
                label: M.intl.string(M.t.Cla0ra)
            }
        ];
        W[j.sH].forEach((e) => {
            let { channel: t } = e;
            t.type === L.d4z.GUILD_TEXT &&
                J.push({
                    value: t.id,
                    label: (0, x.F6)(t, I.default, _.Z, !0)
                });
        });
        let V = P !== L.sFg.NONE,
            K = D === L.lxg.ALL_MEMBERS,
            Q = k === L.bL.ONLY_MENTIONS,
            $ = async () => {
                if (null == U || !d) return;
                let e = new Set(a.features);
                e.add(L.oNc.COMMUNITY);
                let t = g ? r.Od(U.permissions, w.mu) : U.permissions,
                    i = {
                        ...U,
                        permissions: t
                    };
                t !== U.permissions && (await (0, p.Gf)(a.id, [i])),
                    f.Z.updateGuild({
                        features: e,
                        rulesChannelId: R,
                        publicUpdatesChannelId: Z
                    }),
                    await f.Z.saveGuild(a.id, {
                        features: e,
                        rulesChannelId: R,
                        verificationLevel: a.verificationLevel,
                        explicitContentFilter: a.explicitContentFilter,
                        publicUpdatesChannelId: Z,
                        defaultMessageNotifications: a.defaultMessageNotifications
                    }),
                    setTimeout(() => {
                        n();
                    }, 0);
            },
            ee = (0, s.jsx)(X, {
                guild: a,
                disableVerificationLevel: V,
                disableContentFilter: K,
                onAcceptVerificationLevel: (e, t) => {
                    if (!t) {
                        f.Z.updateGuild({ verificationLevel: P });
                        return;
                    }
                    t && f.Z.updateGuild({ verificationLevel: L.sFg.LOW });
                },
                onAcceptContentFilter: (e, t) => {
                    if (!t) {
                        f.Z.updateGuild({ explicitContentFilter: D });
                        return;
                    }
                    f.Z.updateGuild({ explicitContentFilter: L.lxg.ALL_MEMBERS });
                },
                headerId: Y,
                theme: c
            }),
            et = (0, s.jsx)(F, {
                selectableChannels: J,
                onRuleChannelChange: (e) => {
                    y(e);
                },
                onPublicUpdatesChannelChange: (e) => {
                    A(e);
                },
                ruleChannel: R,
                publicUpdatesChannel: Z,
                headerId: Y,
                theme: c,
                guildId: a.id
            }),
            ei = z
                ? (0, s.jsx)(H, {
                      guild: a,
                      policyAccepted: d,
                      onAcceptPolicy: (e, t) => {
                          if (t) {
                              u(!0), Q || f.Z.updateGuild({ defaultMessageNotifications: L.bL.ONLY_MENTIONS }), g || null == U || E(!0);
                              return;
                          }
                          u(!1), Q && f.Z.updateGuild({ defaultMessageNotifications: k }), g && null != U && E(!1);
                      },
                      headerId: Y,
                      theme: c
                  })
                : (0, s.jsx)(q, {
                      guild: a,
                      disableDefaultNotifications: Q,
                      disableEveryoneRolePermissions: B,
                      policyAccepted: d,
                      everyoneRolePermissionsAccepted: g,
                      onAcceptPolicy: (e, t) => {
                          if (t) {
                              u(!0);
                              return;
                          }
                          u(!1);
                      },
                      onAcceptDefaultNotifications: (e, t) => {
                          if (!t) {
                              f.Z.updateGuild({ defaultMessageNotifications: k });
                              return;
                          }
                          f.Z.updateGuild({ defaultMessageNotifications: L.bL.ONLY_MENTIONS });
                      },
                      onAcceptEveryoneRolePermissions: (e, t) => {
                          null != U && (t ? E(!0) : E(!1));
                      },
                      headerId: Y,
                      theme: c
                  }),
            es = (0, s.jsx)('img', {
                alt: '',
                src: G,
                className: O.footerImage,
                width: 240
            }),
            el = [
                {
                    modalContent: ee,
                    disableNextStep: a.explicitContentFilter !== L.lxg.ALL_MEMBERS || a.verificationLevel === L.sFg.NONE,
                    overviewTitle: M.intl.string(M.t.PpYoSk)
                },
                {
                    modalContent: et,
                    disableNextStep: null == R || null == Z,
                    overviewTitle: M.intl.string(M.t['7MEtIS'])
                },
                {
                    modalContent: ei,
                    disableNextStep: !d,
                    overviewTitle: M.intl.string(M.t.Pj9P8P)
                }
            ];
        return (0, s.jsx)(b.Z, {
            stepData: el,
            title: M.intl.string(M.t['6U5XTk']),
            transitionState: i,
            onClose: () => {
                n(), S.default.track(L.rMx.MODAL_DISMISSED, { type: w.tA });
            },
            completeButtonText: M.intl.string(M.t.XGl4bW),
            onComplete: $,
            overviewFooter: es,
            sequencerClassName: O.container,
            autoCloseOnComplete: !1
        });
    };
