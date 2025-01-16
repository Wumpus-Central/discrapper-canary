i.r(t), i(653041), i(47120);
var s = i(200651),
    l = i(192379),
    n = i(120356),
    a = i.n(n),
    r = i(149765),
    o = i(442837),
    c = i(692547),
    d = i(780384),
    m = i(481060),
    x = i(785697),
    u = i(933557),
    h = i(313201),
    p = i(434404),
    f = i(764260),
    g = i(999382),
    v = i(416162),
    N = i(422559),
    b = i(210887),
    j = i(984933),
    C = i(430824),
    T = i(699516),
    I = i(594174),
    S = i(626135),
    _ = i(63063),
    E = i(700785),
    M = i(245315),
    L = i(135899),
    R = i(981631),
    y = i(388032),
    O = i(289469),
    F = i(289575),
    k = i(371411),
    w = i(112847),
    P = i(516954),
    A = i(674889),
    D = i(162752),
    G = i(438825);
let Z = (e) => {
        let { guild: t, onAcceptVerificationLevel: i, onAcceptContentFilter: l, disableContentFilter: n, disableVerificationLevel: a, headerId: r, theme: c } = e,
            x = (0, o.e7)([C.Z], () => C.Z.getGuild(t.id), [t.id]),
            u = null != x && x.verificationLevel > R.sFg.NONE,
            h = (null == x ? void 0 : x.explicitContentFilter) === R.lxg.ALL_MEMBERS,
            p = (0, d.wj)(c) ? A : D;
        return (0, s.jsxs)('div', {
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
                        (0, s.jsx)(m.Heading, {
                            variant: 'heading-xl/semibold',
                            className: O.header,
                            id: r,
                            children: y.intl.string(y.t.QrjLYm)
                        }),
                        (0, s.jsx)(m.Text, {
                            color: 'none',
                            variant: 'text-md/normal',
                            className: O.headerCaption,
                            children: y.intl.string(y.t.i1STws)
                        })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: O.form,
                    children: [
                        (0, s.jsx)(m.FormTitle, { children: y.intl.string(y.t.DpRdYG) }),
                        (0, s.jsx)(m.FormText, {
                            type: m.FormTextTypes.DESCRIPTION,
                            className: O.description,
                            children: u ? y.intl.string(y.t.k5crqq) : y.intl.string(y.t.fHiGAw)
                        }),
                        (0, s.jsx)(m.Checkbox, {
                            type: m.Checkbox.Types.ROW,
                            disabled: a,
                            value: t.verificationLevel > R.sFg.NONE,
                            onChange: i,
                            children: (0, s.jsx)(m.Text, {
                                variant: 'text-sm/normal',
                                children: y.intl.string(y.t.x4hbeX)
                            })
                        })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: O.form,
                    children: [
                        (0, s.jsx)(m.FormTitle, { children: y.intl.string(y.t.COu4bm) }),
                        (0, s.jsx)(m.FormText, {
                            type: m.FormTextTypes.DESCRIPTION,
                            className: O.description,
                            children: h ? y.intl.string(y.t.qgQLpq) : y.intl.string(y.t.b0MaDQ)
                        }),
                        (0, s.jsx)(m.Checkbox, {
                            type: m.Checkbox.Types.ROW,
                            disabled: n,
                            value: t.explicitContentFilter === R.lxg.ALL_MEMBERS,
                            onChange: l,
                            children: (0, s.jsx)(m.Text, {
                                variant: 'text-sm/normal',
                                children: y.intl.string(y.t.WAUiMj)
                            })
                        })
                    ]
                })
            ]
        });
    },
    B = (e) => {
        let { selectableChannels: t, onRuleChannelChange: i, ruleChannel: n, onPublicUpdatesChannelChange: a, publicUpdatesChannel: r, headerId: o, theme: c, guildId: x } = e;
        l.useEffect(() => {
            (0, M.BF)({
                fromStep: L.IO.SAFETY_CHECK,
                toStep: L.IO.BASICS,
                guildId: x
            });
        }, [x]);
        let u = (0, d.wj)(c) ? F : k;
        return (0, s.jsxs)('div', {
            className: O.container,
            children: [
                (0, s.jsxs)('div', {
                    className: O.content,
                    children: [
                        (0, s.jsx)('img', {
                            alt: '',
                            src: u,
                            width: 80
                        }),
                        (0, s.jsx)(m.Heading, {
                            variant: 'heading-xl/semibold',
                            className: O.header,
                            id: o,
                            children: y.intl.string(y.t.YtXpEh)
                        }),
                        (0, s.jsx)(m.Text, {
                            color: 'none',
                            variant: 'text-md/normal',
                            className: O.headerCaption,
                            children: y.intl.string(y.t['J/fYR0'])
                        })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: O.form,
                    children: [
                        (0, s.jsx)(m.FormTitle, { children: y.intl.string(y.t.dYrhCA) }),
                        (0, s.jsx)(m.FormText, {
                            type: m.FormTextTypes.DESCRIPTION,
                            className: O.description,
                            children: y.intl.string(y.t['+Af+V1'])
                        }),
                        (0, s.jsx)(m.SearchableSelect, {
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
                        (0, s.jsx)(m.FormTitle, { children: y.intl.string(y.t.vAyDGR) }),
                        (0, s.jsx)(m.FormText, {
                            type: m.FormTextTypes.DESCRIPTION,
                            className: O.description,
                            children: y.intl.string(y.t.ZFeonp)
                        }),
                        (0, s.jsx)(m.SearchableSelect, {
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
        let { guild: t, policyAccepted: i, everyoneRolePermissionsAccepted: n, onAcceptPolicy: r, onAcceptDefaultNotifications: o, onAcceptEveryoneRolePermissions: c, disableDefaultNotifications: x, disableEveryoneRolePermissions: u, headerId: h, theme: p } = e,
            f = (0, d.wj)(p) ? w : P;
        return (
            l.useEffect(() => {
                (0, M.BF)({
                    fromStep: L.IO.BASICS,
                    toStep: L.IO.FINISH,
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
                                src: f,
                                width: 80
                            }),
                            (0, s.jsx)(m.Heading, {
                                variant: 'heading-xl/semibold',
                                className: O.header,
                                id: h,
                                children: y.intl.string(y.t['Pj/s/f'])
                            }),
                            (0, s.jsx)(m.Text, {
                                color: 'none',
                                variant: 'text-md/normal',
                                className: O.headerCaption,
                                children: y.intl.string(y.t['IL7/np'])
                            })
                        ]
                    }),
                    (0, s.jsx)('div', {
                        className: O.form,
                        children: (0, s.jsx)(m.Tooltip, {
                            text: x ? y.intl.string(y.t.PHjrpq) : null,
                            'aria-label': !!x && y.intl.string(y.t.PHjrpq),
                            children: (e) =>
                                (0, s.jsx)('div', {
                                    ...e,
                                    children: (0, s.jsx)(m.Checkbox, {
                                        type: m.Checkbox.Types.ROW,
                                        disabled: x,
                                        value: t.defaultMessageNotifications === R.bL.ONLY_MENTIONS,
                                        onChange: o,
                                        className: a()({ [O.disabled]: x }),
                                        children: (0, s.jsx)(m.Text, {
                                            variant: 'text-sm/normal',
                                            children: y.intl.format(y.t.K8Eg4O, {
                                                infoHook: () =>
                                                    (0, s.jsx)(m.Tooltip, {
                                                        text: y.intl.string(y.t['3h2WyM']),
                                                        'aria-label': y.intl.string(y.t['3h2WyM']),
                                                        children: (e) =>
                                                            (0, s.jsx)(m.CircleInformationIcon, {
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
                    (0, s.jsx)(m.Tooltip, {
                        text: u ? y.intl.string(y.t.PHjrpq) : null,
                        'aria-label': !!u && y.intl.string(y.t.PHjrpq),
                        children: (e) =>
                            (0, s.jsx)('div', {
                                ...e,
                                className: O.checkboxOption,
                                children: (0, s.jsx)(m.Checkbox, {
                                    type: m.Checkbox.Types.ROW,
                                    disabled: u,
                                    value: n,
                                    onChange: c,
                                    className: a()({ [O.disabled]: u }),
                                    children: (0, s.jsx)(m.Text, {
                                        variant: 'text-sm/normal',
                                        children: y.intl.format(y.t.v8qCoK, {
                                            infoHook: () =>
                                                (0, s.jsx)(m.Tooltip, {
                                                    text: y.intl.string(y.t['+IyaiY']),
                                                    'aria-label': y.intl.string(y.t['+IyaiY']),
                                                    children: (e) =>
                                                        (0, s.jsx)(m.CircleInformationIcon, {
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
                            (0, s.jsx)(m.FormTitle, { children: y.intl.string(y.t['k+b2CQ']) }),
                            (0, s.jsx)(m.FormText, {
                                type: m.FormTextTypes.DESCRIPTION,
                                className: O.description,
                                children: y.intl.format(y.t['BwbW/f'], {
                                    communityGuidelines: _.Z.getArticleURL(R.BhN.PUBLIC_GUILD_GUILDLINES),
                                    typesOfGuilds: _.Z.getArticleURL(R.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
                                })
                            }),
                            (0, s.jsx)(m.Checkbox, {
                                type: m.Checkbox.Types.ROW,
                                value: i,
                                onChange: r,
                                children: (0, s.jsx)(m.Text, {
                                    variant: 'text-sm/normal',
                                    children: y.intl.string(y.t['9AG3wM'])
                                })
                            })
                        ]
                    })
                ]
            })
        );
    };
function H(e) {
    let { guild: t } = e,
        i = (0, o.e7)([C.Z], () => C.Z.getRole(t.id, t.getEveryoneRoleId()));
    if (null == i) return null;
    let { name: l, color: n } = i;
    return (0, s.jsx)('div', {
        className: O.__invalid_role,
        children: (0, s.jsxs)('span', {
            className: O.roleRow,
            children: [
                (0, s.jsx)(m.RoleDot, {
                    className: O.roleDot,
                    color: n.toString(),
                    background: !1,
                    tooltip: !1
                }),
                (0, s.jsx)(m.Text, {
                    className: O.roleName,
                    variant: 'text-sm/medium',
                    color: 'interactive-active',
                    children: l
                })
            ]
        })
    });
}
function q(e) {
    let { enabledPermissions: t, onGetPermisisonName: i } = e;
    return (0, s.jsxs)('div', {
        className: O.tableContainer,
        children: [
            (0, s.jsx)(m.Text, {
                className: O.tableHeader,
                variant: 'text-xs/semibold',
                color: 'text-muted',
                children: y.intl.string(y.t.xU8RDg)
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
                                (0, s.jsx)(m.Text, {
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
        l = y.intl.string(y.t.Yo5qlp);
    return (
        t.length === L.$X.length && (l = y.intl.string(y.t.FgMS6u)),
        (0, s.jsxs)('div', {
            className: O.tableContainer,
            children: [
                (0, s.jsx)(m.Text, {
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
                                    (0, s.jsx)(m.Text, {
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
                case R.Plq.MENTION_EVERYONE.toString():
                    return y.intl.string(y.t.yCpsQ0);
                case R.Plq.CREATE_GUILD_EXPRESSIONS.toString():
                    return y.intl.string(y.t.vo2LdX);
                case R.Plq.MANAGE_GUILD_EXPRESSIONS.toString():
                    return y.intl.string(y.t.cmp2W1);
                default:
                    return (0, N.wt)(e);
            }
        },
        { enabledPermissions: l, disabledPermissions: n } = t;
    return (0, s.jsxs)('div', {
        className: O.table,
        children: [
            0 !== l.length
                ? (0, s.jsx)(q, {
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
let z = (e) => {
    let { guild: t, policyAccepted: i, onAcceptPolicy: n, headerId: a, theme: r } = e,
        o = (0, d.wj)(r) ? w : P;
    l.useEffect(() => {
        (0, M.BF)({
            fromStep: L.IO.BASICS,
            toStep: L.IO.FINISH,
            guildId: t.id
        });
    }, [t.id]);
    let x = l.useMemo(() => {
        let e = [],
            i = [];
        return (
            L.$X.map((s) => {
                E.oz(s, t) ? e.push(s) : i.push(s);
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
                    (0, s.jsx)(m.Heading, {
                        variant: 'heading-xl/semibold',
                        className: O.updatedHeader,
                        id: a,
                        children: y.intl.string(y.t['Pj/s/f'])
                    })
                ]
            }),
            (0, s.jsxs)('div', {
                className: O.updatedForm,
                children: [
                    (0, s.jsx)(m.FormTitle, {
                        className: O.formTitle,
                        children: y.intl.string(y.t['0q344e'])
                    }),
                    (0, s.jsxs)('div', {
                        className: O.checklistRow,
                        children: [
                            (0, s.jsx)(m.CircleCheckIcon, {
                                size: 'md',
                                className: O.checklistIcon,
                                color: c.Z.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: c.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            (0, s.jsx)(m.Text, {
                                variant: 'text-md/normal',
                                children: y.intl.format(y.t.K8Eg4O, {
                                    infoHook: () =>
                                        (0, s.jsx)(m.Tooltip, {
                                            text: y.intl.string(y.t['3h2WyM']),
                                            'aria-label': y.intl.string(y.t['3h2WyM']),
                                            children: (e) =>
                                                (0, s.jsx)(m.CircleInformationIcon, {
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
                            (0, s.jsx)(m.CircleCheckIcon, {
                                size: 'md',
                                className: O.checklistIcon,
                                color: c.Z.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: c.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            (0, s.jsx)(m.Text, {
                                variant: 'text-md/normal',
                                children: y.intl.string(y.t.LfeFFh)
                            }),
                            (0, s.jsx)(H, { guild: t })
                        ]
                    }),
                    (0, s.jsx)(Y, { permissions: x })
                ]
            }),
            (0, s.jsxs)('div', {
                className: O.updatedForm,
                children: [
                    (0, s.jsx)(m.FormTitle, {
                        className: O.formTitle,
                        children: y.intl.string(y.t['k+b2CQ'])
                    }),
                    (0, s.jsx)(m.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        className: O.description,
                        children: y.intl.format(y.t['BwbW/f'], {
                            communityGuidelines: _.Z.getArticleURL(R.BhN.PUBLIC_GUILD_GUILDLINES),
                            typesOfGuilds: _.Z.getArticleURL(R.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
                        })
                    }),
                    (0, s.jsx)(m.Checkbox, {
                        type: m.Checkbox.Types.ROW,
                        value: i,
                        onChange: n,
                        children: (0, s.jsx)(m.Text, {
                            className: O.acceptText,
                            variant: 'text-md/medium',
                            color: 'header-primary',
                            children: y.intl.string(y.t['9AG3wM'])
                        })
                    })
                ]
            })
        ]
    });
};
t.default = (e) => {
    var t;
    let { transitionState: i, onClose: n } = e;
    l.useEffect(() => {
        S.default.track(R.rMx.OPEN_MODAL, { type: L.tA });
    }, []);
    let { guild: a } = (0, o.cj)([g.Z], () => g.Z.getProps()),
        c = (0, o.e7)([b.Z], () => b.Z.theme),
        [d, m] = l.useState(!1),
        [N, _] = l.useState(!L.$X.some((e) => E.oz(e, a))),
        [M, F] = l.useState(L.b4),
        [k, w] = l.useState(L.b4),
        [P] = l.useState(null == a ? void 0 : a.defaultMessageNotifications),
        [A] = l.useState(null == a ? void 0 : a.verificationLevel),
        [D] = l.useState(null == a ? void 0 : a.explicitContentFilter),
        [H] = l.useState(N),
        q = (0, o.e7)([C.Z], () => (null != a ? C.Z.getRole(a.id, a.getEveryoneRoleId()) : void 0)),
        W = (0, o.e7)([j.ZP], () => (null != a ? j.ZP.getChannels(a.id) : null)),
        Y = (0, h.Dt)(),
        { enabled: X } = (0, x.D2)(null !== (t = null == a ? void 0 : a.id) && void 0 !== t ? t : R.lds);
    if (null == a) return null;
    let V = [
        {
            value: L.b4,
            label: y.intl.string(y.t.Cla0ra)
        }
    ];
    W[j.sH].forEach((e) => {
        let { channel: t } = e;
        t.type === R.d4z.GUILD_TEXT &&
            V.push({
                value: t.id,
                label: (0, u.F6)(t, I.default, T.Z, !0)
            });
    });
    let Q = A !== R.sFg.NONE,
        K = D === R.lxg.ALL_MEMBERS,
        $ = P === R.bL.ONLY_MENTIONS,
        J = async () => {
            if (null == q || !d) return;
            let e = new Set(a.features);
            e.add(R.oNc.COMMUNITY);
            let t = N ? r.Od(q.permissions, L.mu) : q.permissions,
                i = {
                    ...q,
                    permissions: t
                };
            t !== q.permissions && (await (0, f.Gf)(a.id, [i])),
                p.Z.updateGuild({
                    features: e,
                    rulesChannelId: M,
                    publicUpdatesChannelId: k
                }),
                await p.Z.saveGuild(a.id, {
                    features: e,
                    rulesChannelId: M,
                    verificationLevel: a.verificationLevel,
                    explicitContentFilter: a.explicitContentFilter,
                    publicUpdatesChannelId: k,
                    defaultMessageNotifications: a.defaultMessageNotifications
                }),
                setTimeout(() => {
                    n();
                }, 0);
        },
        ee = (0, s.jsx)(Z, {
            guild: a,
            disableVerificationLevel: Q,
            disableContentFilter: K,
            onAcceptVerificationLevel: (e, t) => {
                if (!t) {
                    p.Z.updateGuild({ verificationLevel: A });
                    return;
                }
                t && p.Z.updateGuild({ verificationLevel: R.sFg.LOW });
            },
            onAcceptContentFilter: (e, t) => {
                if (!t) {
                    p.Z.updateGuild({ explicitContentFilter: D });
                    return;
                }
                p.Z.updateGuild({ explicitContentFilter: R.lxg.ALL_MEMBERS });
            },
            headerId: Y,
            theme: c
        }),
        et = (0, s.jsx)(B, {
            selectableChannels: V,
            onRuleChannelChange: (e) => {
                F(e);
            },
            onPublicUpdatesChannelChange: (e) => {
                w(e);
            },
            ruleChannel: M,
            publicUpdatesChannel: k,
            headerId: Y,
            theme: c,
            guildId: a.id
        }),
        ei = X
            ? (0, s.jsx)(z, {
                  guild: a,
                  policyAccepted: d,
                  onAcceptPolicy: (e, t) => {
                      if (t) {
                          m(!0), !$ && p.Z.updateGuild({ defaultMessageNotifications: R.bL.ONLY_MENTIONS }), !N && null != q && _(!0);
                          return;
                      }
                      m(!1), $ && p.Z.updateGuild({ defaultMessageNotifications: P }), N && null != q && _(!1);
                  },
                  headerId: Y,
                  theme: c
              })
            : (0, s.jsx)(U, {
                  guild: a,
                  disableDefaultNotifications: $,
                  disableEveryoneRolePermissions: H,
                  policyAccepted: d,
                  everyoneRolePermissionsAccepted: N,
                  onAcceptPolicy: (e, t) => {
                      if (t) {
                          m(!0);
                          return;
                      }
                      m(!1);
                  },
                  onAcceptDefaultNotifications: (e, t) => {
                      if (!t) {
                          p.Z.updateGuild({ defaultMessageNotifications: P });
                          return;
                      }
                      p.Z.updateGuild({ defaultMessageNotifications: R.bL.ONLY_MENTIONS });
                  },
                  onAcceptEveryoneRolePermissions: (e, t) => {
                      null != q && (t ? _(!0) : _(!1));
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
                disableNextStep: a.explicitContentFilter !== R.lxg.ALL_MEMBERS || a.verificationLevel === R.sFg.NONE,
                overviewTitle: y.intl.string(y.t.PpYoSk)
            },
            {
                modalContent: et,
                disableNextStep: null == M || null == k,
                overviewTitle: y.intl.string(y.t['7MEtIS'])
            },
            {
                modalContent: ei,
                disableNextStep: !d,
                overviewTitle: y.intl.string(y.t.Pj9P8P)
            }
        ];
    return (0, s.jsx)(v.Z, {
        stepData: el,
        title: y.intl.string(y.t['6U5XTk']),
        transitionState: i,
        onClose: () => {
            n(), S.default.track(R.rMx.MODAL_DISMISSED, { type: L.tA });
        },
        completeButtonText: y.intl.string(y.t.XGl4bW),
        onComplete: J,
        overviewFooter: es,
        sequencerClassName: O.container,
        autoCloseOnComplete: !1
    });
};
