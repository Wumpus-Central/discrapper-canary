s.d(t, { default: () => V }), s(266796), s(653041), s(47120);
var i = s(200651),
    n = s(192379),
    l = s(120356),
    a = s.n(l),
    r = s(149765),
    o = s(442837),
    c = s(692547),
    d = s(780384),
    u = s(481060),
    m = s(785697),
    x = s(933557),
    N = s(313201),
    f = s(434404),
    p = s(764260),
    h = s(999382),
    b = s(416162),
    v = s(422559),
    g = s(210887),
    j = s(984933),
    C = s(430824),
    _ = s(699516),
    S = s(594174),
    I = s(626135),
    E = s(63063),
    W = s(700785),
    O = s(245315),
    T = s(135899),
    w = s(981631),
    y = s(388032),
    R = s(341190),
    L = s(289575),
    M = s(371411),
    P = s(112847),
    Z = s(516954),
    A = s(674889),
    k = s(162752),
    D = s(438825);
function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var s = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(s);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(s).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(s, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = s[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function X(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var s = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      s.push.apply(s, i);
                  }
                  return s;
              })(Object(t)).forEach(function (s) {
                  Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s));
              }),
        e
    );
}
let F = (e) => {
        let { guild: t, onAcceptVerificationLevel: s, onAcceptContentFilter: n, disableContentFilter: l, disableVerificationLevel: a, headerId: r, theme: c } = e,
            m = (0, o.e7)([C.Z], () => C.Z.getGuild(t.id), [t.id]),
            x = null != m && m.verificationLevel > w.sFg.NONE,
            N = (null == m ? void 0 : m.explicitContentFilter) === w.lxg.ALL_MEMBERS,
            f = (0, d.wj)(c) ? A : k;
        return (0, i.jsxs)('div', {
            className: R.container,
            children: [
                (0, i.jsxs)('div', {
                    className: R.content,
                    children: [
                        (0, i.jsx)('img', {
                            alt: '',
                            src: f,
                            width: 80
                        }),
                        (0, i.jsx)(u.X6q, {
                            variant: 'heading-xl/semibold',
                            className: R.header,
                            id: r,
                            children: y.NW.string(y.t.QrjLYm)
                        }),
                        (0, i.jsx)(u.Text, {
                            color: 'none',
                            variant: 'text-md/normal',
                            className: R.headerCaption,
                            children: y.NW.string(y.t.i1STws)
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: R.form,
                    children: [
                        (0, i.jsx)(u.vwX, { children: y.NW.string(y.t.DpRdYG) }),
                        (0, i.jsx)(u.R94, {
                            type: u.geA.DESCRIPTION,
                            className: R.description,
                            children: x ? y.NW.string(y.t.k5crqq) : y.NW.string(y.t.fHiGAw)
                        }),
                        (0, i.jsx)(u.XZJ, {
                            type: u.XZJ.Types.ROW,
                            disabled: a,
                            value: t.verificationLevel > w.sFg.NONE,
                            onChange: s,
                            children: (0, i.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                children: y.NW.string(y.t.x4hbeX)
                            })
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: R.form,
                    children: [
                        (0, i.jsx)(u.vwX, { children: y.NW.string(y.t.COu4bm) }),
                        (0, i.jsx)(u.R94, {
                            type: u.geA.DESCRIPTION,
                            className: R.description,
                            children: N ? y.NW.string(y.t.qgQLpq) : y.NW.string(y.t.b0MaDQ)
                        }),
                        (0, i.jsx)(u.XZJ, {
                            type: u.XZJ.Types.ROW,
                            disabled: l,
                            value: t.explicitContentFilter === w.lxg.ALL_MEMBERS,
                            onChange: n,
                            children: (0, i.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                children: y.NW.string(y.t.WAUiMj)
                            })
                        })
                    ]
                })
            ]
        });
    },
    q = (e) => {
        let { selectableChannels: t, onRuleChannelChange: s, ruleChannel: l, onPublicUpdatesChannelChange: a, publicUpdatesChannel: r, headerId: o, theme: c, guildId: m } = e;
        n.useEffect(() => {
            (0, O.BF)({
                fromStep: T.IO.SAFETY_CHECK,
                toStep: T.IO.BASICS,
                guildId: m
            });
        }, [m]);
        let x = (0, d.wj)(c) ? L : M;
        return (0, i.jsxs)('div', {
            className: R.container,
            children: [
                (0, i.jsxs)('div', {
                    className: R.content,
                    children: [
                        (0, i.jsx)('img', {
                            alt: '',
                            src: x,
                            width: 80
                        }),
                        (0, i.jsx)(u.X6q, {
                            variant: 'heading-xl/semibold',
                            className: R.header,
                            id: o,
                            children: y.NW.string(y.t.YtXpEh)
                        }),
                        (0, i.jsx)(u.Text, {
                            color: 'none',
                            variant: 'text-md/normal',
                            className: R.headerCaption,
                            children: y.NW.string(y.t['J/fYR0'])
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: R.form,
                    children: [
                        (0, i.jsx)(u.vwX, { children: y.NW.string(y.t.dYrhCA) }),
                        (0, i.jsx)(u.R94, {
                            type: u.geA.DESCRIPTION,
                            className: R.description,
                            children: y.NW.string(y.t['+Af+V1'])
                        }),
                        (0, i.jsx)(u.VcW, {
                            options: t,
                            onChange: s,
                            value: l,
                            maxVisibleItems: 4
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: R.form,
                    children: [
                        (0, i.jsx)(u.vwX, { children: y.NW.string(y.t.vAyDGR) }),
                        (0, i.jsx)(u.R94, {
                            type: u.geA.DESCRIPTION,
                            className: R.description,
                            children: y.NW.string(y.t.ZFeonp)
                        }),
                        (0, i.jsx)(u.VcW, {
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
    B = (e) => {
        let { guild: t, policyAccepted: s, everyoneRolePermissionsAccepted: l, onAcceptPolicy: r, onAcceptDefaultNotifications: o, onAcceptEveryoneRolePermissions: c, disableDefaultNotifications: m, disableEveryoneRolePermissions: x, headerId: N, theme: f } = e,
            p = (0, d.wj)(f) ? P : Z;
        return (
            n.useEffect(() => {
                (0, O.BF)({
                    fromStep: T.IO.BASICS,
                    toStep: T.IO.FINISH,
                    guildId: t.id
                });
            }, [t.id]),
            (0, i.jsxs)('div', {
                className: R.container,
                children: [
                    (0, i.jsxs)('div', {
                        className: R.content,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: p,
                                width: 80
                            }),
                            (0, i.jsx)(u.X6q, {
                                variant: 'heading-xl/semibold',
                                className: R.header,
                                id: N,
                                children: y.NW.string(y.t['Pj/s/f'])
                            }),
                            (0, i.jsx)(u.Text, {
                                color: 'none',
                                variant: 'text-md/normal',
                                className: R.headerCaption,
                                children: y.NW.string(y.t['IL7/np'])
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: R.form,
                        children: (0, i.jsx)(u.ua7, {
                            text: m ? y.NW.string(y.t.PHjrpq) : null,
                            'aria-label': !!m && y.NW.string(y.t.PHjrpq),
                            children: (e) =>
                                (0, i.jsx)(
                                    'div',
                                    X(G({}, e), {
                                        children: (0, i.jsx)(u.XZJ, {
                                            type: u.XZJ.Types.ROW,
                                            disabled: m,
                                            value: t.defaultMessageNotifications === w.bL.ONLY_MENTIONS,
                                            onChange: o,
                                            className: a()({ [R.disabled]: m }),
                                            children: (0, i.jsx)(u.Text, {
                                                variant: 'text-sm/normal',
                                                children: y.NW.format(y.t.K8Eg4O, {
                                                    infoHook: () =>
                                                        (0, i.jsx)(u.ua7, {
                                                            text: y.NW.string(y.t['3h2WyM']),
                                                            'aria-label': y.NW.string(y.t['3h2WyM']),
                                                            children: (e) =>
                                                                (0, i.jsx)(
                                                                    u.d3s,
                                                                    G(
                                                                        {
                                                                            size: 'xs',
                                                                            color: 'currentColor',
                                                                            className: R.icon
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
                    (0, i.jsx)(u.ua7, {
                        text: x ? y.NW.string(y.t.PHjrpq) : null,
                        'aria-label': !!x && y.NW.string(y.t.PHjrpq),
                        children: (e) =>
                            (0, i.jsx)(
                                'div',
                                X(G({}, e), {
                                    className: R.checkboxOption,
                                    children: (0, i.jsx)(u.XZJ, {
                                        type: u.XZJ.Types.ROW,
                                        disabled: x,
                                        value: l,
                                        onChange: c,
                                        className: a()({ [R.disabled]: x }),
                                        children: (0, i.jsx)(u.Text, {
                                            variant: 'text-sm/normal',
                                            children: y.NW.format(y.t.v8qCoK, {
                                                infoHook: () =>
                                                    (0, i.jsx)(u.ua7, {
                                                        text: y.NW.string(y.t['+IyaiY']),
                                                        'aria-label': y.NW.string(y.t['+IyaiY']),
                                                        children: (e) =>
                                                            (0, i.jsx)(
                                                                u.d3s,
                                                                G(
                                                                    {
                                                                        size: 'xs',
                                                                        color: 'currentColor',
                                                                        className: R.icon
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
                    (0, i.jsxs)('div', {
                        className: R.form,
                        children: [
                            (0, i.jsx)(u.vwX, { children: y.NW.string(y.t['k+b2CQ']) }),
                            (0, i.jsx)(u.R94, {
                                type: u.geA.DESCRIPTION,
                                className: R.description,
                                children: y.NW.format(y.t['BwbW/f'], {
                                    communityGuidelines: E.Z.getArticleURL(w.BhN.PUBLIC_GUILD_GUILDLINES),
                                    typesOfGuilds: E.Z.getArticleURL(w.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
                                })
                            }),
                            (0, i.jsx)(u.XZJ, {
                                type: u.XZJ.Types.ROW,
                                value: s,
                                onChange: r,
                                children: (0, i.jsx)(u.Text, {
                                    variant: 'text-sm/normal',
                                    children: y.NW.string(y.t['9AG3wM'])
                                })
                            })
                        ]
                    })
                ]
            })
        );
    };
function U(e) {
    let { guild: t } = e,
        s = (0, o.e7)([C.Z], () => C.Z.getRole(t.id, t.getEveryoneRoleId()));
    if (null == s) return null;
    let { name: n, color: l } = s;
    return (0, i.jsx)('div', {
        className: R.__invalid_role,
        children: (0, i.jsxs)('span', {
            className: R.roleRow,
            children: [
                (0, i.jsx)(u.FhE, {
                    className: R.roleDot,
                    color: l.toString(),
                    background: !1,
                    tooltip: !1
                }),
                (0, i.jsx)(u.Text, {
                    className: R.roleName,
                    variant: 'text-sm/medium',
                    color: 'interactive-active',
                    children: n
                })
            ]
        })
    });
}
function Y(e) {
    let { enabledPermissions: t, onGetPermisisonName: s } = e;
    return (0, i.jsxs)('div', {
        className: R.tableContainer,
        children: [
            (0, i.jsx)(u.Text, {
                className: R.tableHeader,
                variant: 'text-xs/semibold',
                color: 'text-muted',
                children: y.NW.string(y.t.xU8RDg)
            }),
            (0, i.jsx)('div', {
                className: R.permissionsTable,
                children: t.map((e, t) =>
                    (0, i.jsxs)(
                        'div',
                        {
                            className: R.permissionRow,
                            children: [
                                (0, i.jsx)('div', { className: R.bulletWarning }),
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-normal',
                                    children: s(e)
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
    let { disabledPermissions: t, onGetPermisisonName: s } = e,
        n = y.NW.string(y.t.Yo5qlp);
    return (
        t.length === T.$X.length && (n = y.NW.string(y.t.FgMS6u)),
        (0, i.jsxs)('div', {
            className: R.tableContainer,
            children: [
                (0, i.jsx)(u.Text, {
                    className: R.tableHeader,
                    variant: 'text-xs/semibold',
                    color: 'text-muted',
                    children: n
                }),
                (0, i.jsx)('div', {
                    className: R.permissionsTable,
                    children: t.map((e, t) =>
                        (0, i.jsxs)(
                            'div',
                            {
                                className: R.permissionRow,
                                children: [
                                    (0, i.jsx)('div', { className: R.bullet }),
                                    (0, i.jsx)(u.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        children: s(e)
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
        s = (e) => {
            switch (e.toString()) {
                case w.Plq.MENTION_EVERYONE.toString():
                    return y.NW.string(y.t.yCpsQ0);
                case w.Plq.CREATE_GUILD_EXPRESSIONS.toString():
                    return y.NW.string(y.t.vo2LdX);
                case w.Plq.MANAGE_GUILD_EXPRESSIONS.toString():
                    return y.NW.string(y.t.cmp2W1);
                default:
                    return (0, v.wt)(e);
            }
        },
        { enabledPermissions: n, disabledPermissions: l } = t;
    return (0, i.jsxs)('div', {
        className: R.table,
        children: [
            0 !== n.length
                ? (0, i.jsx)(Y, {
                      enabledPermissions: n,
                      onGetPermisisonName: s
                  })
                : null,
            (0, i.jsx)(H, {
                disabledPermissions: l,
                onGetPermisisonName: s
            })
        ]
    });
}
let J = (e) => {
        let { guild: t, policyAccepted: s, onAcceptPolicy: l, headerId: a, theme: r } = e,
            o = (0, d.wj)(r) ? P : Z;
        n.useEffect(() => {
            (0, O.BF)({
                fromStep: T.IO.BASICS,
                toStep: T.IO.FINISH,
                guildId: t.id
            });
        }, [t.id]);
        let m = n.useMemo(() => {
            let e = [],
                s = [];
            return (
                T.$X.map((i) => {
                    W.oz(i, t) ? e.push(i) : s.push(i);
                }),
                {
                    enabledPermissions: e,
                    disabledPermissions: s
                }
            );
        }, [t]);
        return (0, i.jsxs)('div', {
            className: R.container,
            children: [
                (0, i.jsxs)('div', {
                    className: R.content,
                    children: [
                        (0, i.jsx)('img', {
                            alt: '',
                            src: o,
                            width: 80
                        }),
                        (0, i.jsx)(u.X6q, {
                            variant: 'heading-xl/semibold',
                            className: R.updatedHeader,
                            id: a,
                            children: y.NW.string(y.t['Pj/s/f'])
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: R.updatedForm,
                    children: [
                        (0, i.jsx)(u.vwX, {
                            className: R.formTitle,
                            children: y.NW.string(y.t['0q344e'])
                        }),
                        (0, i.jsxs)('div', {
                            className: R.checklistRow,
                            children: [
                                (0, i.jsx)(u.owK, {
                                    size: 'md',
                                    className: R.checklistIcon,
                                    color: c.Z.unsafe_rawColors.GREEN_360.css,
                                    secondaryColor: c.Z.unsafe_rawColors.WHITE_500.css
                                }),
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-md/normal',
                                    children: y.NW.format(y.t.K8Eg4O, {
                                        infoHook: () =>
                                            (0, i.jsx)(u.ua7, {
                                                text: y.NW.string(y.t['3h2WyM']),
                                                'aria-label': y.NW.string(y.t['3h2WyM']),
                                                children: (e) =>
                                                    (0, i.jsx)(
                                                        u.d3s,
                                                        G(
                                                            {
                                                                size: 'xs',
                                                                color: 'currentColor',
                                                                className: R.icon
                                                            },
                                                            e
                                                        )
                                                    )
                                            })
                                    })
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: R.checklistRow,
                            children: [
                                (0, i.jsx)(u.owK, {
                                    size: 'md',
                                    className: R.checklistIcon,
                                    color: c.Z.unsafe_rawColors.GREEN_360.css,
                                    secondaryColor: c.Z.unsafe_rawColors.WHITE_500.css
                                }),
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-md/normal',
                                    children: y.NW.string(y.t.LfeFFh)
                                }),
                                (0, i.jsx)(U, { guild: t })
                            ]
                        }),
                        (0, i.jsx)(z, { permissions: m })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: R.updatedForm,
                    children: [
                        (0, i.jsx)(u.vwX, {
                            className: R.formTitle,
                            children: y.NW.string(y.t['k+b2CQ'])
                        }),
                        (0, i.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            className: R.description,
                            children: y.NW.format(y.t['BwbW/f'], {
                                communityGuidelines: E.Z.getArticleURL(w.BhN.PUBLIC_GUILD_GUILDLINES),
                                typesOfGuilds: E.Z.getArticleURL(w.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
                            })
                        }),
                        (0, i.jsx)(u.XZJ, {
                            type: u.XZJ.Types.ROW,
                            value: s,
                            onChange: l,
                            children: (0, i.jsx)(u.Text, {
                                className: R.acceptText,
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                children: y.NW.string(y.t['9AG3wM'])
                            })
                        })
                    ]
                })
            ]
        });
    },
    V = (e) => {
        var t;
        let { transitionState: s, onClose: l } = e;
        n.useEffect(() => {
            I.default.track(w.rMx.OPEN_MODAL, { type: T.tA });
        }, []);
        let { guild: a } = (0, o.cj)([h.Z], () => h.Z.getProps()),
            c = (0, o.e7)([g.Z], () => g.Z.theme),
            [d, u] = n.useState(!1),
            [v, E] = n.useState(!T.$X.some((e) => W.oz(e, a))),
            [O, L] = n.useState(T.b4),
            [M, P] = n.useState(T.b4),
            [Z] = n.useState(null == a ? void 0 : a.defaultMessageNotifications),
            [A] = n.useState(null == a ? void 0 : a.verificationLevel),
            [k] = n.useState(null == a ? void 0 : a.explicitContentFilter),
            [U] = n.useState(v),
            Y = (0, o.e7)([C.Z], () => (null != a ? C.Z.getRole(a.id, a.getEveryoneRoleId()) : void 0)),
            H = (0, o.e7)([j.ZP], () => (null != a ? j.ZP.getChannels(a.id) : null)),
            z = (0, N.Dt)(),
            { enabled: V } = (0, m.D2)(null != (t = null == a ? void 0 : a.id) ? t : w.lds);
        if (null == a) return null;
        let K = [
            {
                value: T.b4,
                label: y.NW.string(y.t.Cla0ra)
            }
        ];
        H[j.sH].forEach((e) => {
            let { channel: t } = e;
            t.type === w.d4z.GUILD_TEXT &&
                K.push({
                    value: t.id,
                    label: (0, x.F6)(t, S.default, _.Z, !0)
                });
        });
        let Q = A !== w.sFg.NONE,
            $ = k === w.lxg.ALL_MEMBERS,
            ee = Z === w.bL.ONLY_MENTIONS,
            et = async () => {
                if (null == Y || !d) return;
                let e = new Set(a.features);
                e.add(w.oNc.COMMUNITY);
                let t = v ? r.Od(Y.permissions, T.mu) : Y.permissions,
                    s = X(G({}, Y), { permissions: t });
                t !== Y.permissions && (await (0, p.Gf)(a.id, [s])),
                    f.Z.updateGuild({
                        features: e,
                        rulesChannelId: O,
                        publicUpdatesChannelId: M
                    }),
                    await f.Z.saveGuild(a.id, {
                        features: e,
                        rulesChannelId: O,
                        verificationLevel: a.verificationLevel,
                        explicitContentFilter: a.explicitContentFilter,
                        publicUpdatesChannelId: M,
                        defaultMessageNotifications: a.defaultMessageNotifications
                    }),
                    setTimeout(() => {
                        l();
                    }, 0);
            },
            es = (0, i.jsx)(F, {
                guild: a,
                disableVerificationLevel: Q,
                disableContentFilter: $,
                onAcceptVerificationLevel: (e, t) => {
                    if (!t) return void f.Z.updateGuild({ verificationLevel: A });
                    t && f.Z.updateGuild({ verificationLevel: w.sFg.LOW });
                },
                onAcceptContentFilter: (e, t) => {
                    if (!t) return void f.Z.updateGuild({ explicitContentFilter: k });
                    f.Z.updateGuild({ explicitContentFilter: w.lxg.ALL_MEMBERS });
                },
                headerId: z,
                theme: c
            }),
            ei = (0, i.jsx)(q, {
                selectableChannels: K,
                onRuleChannelChange: (e) => {
                    L(e);
                },
                onPublicUpdatesChannelChange: (e) => {
                    P(e);
                },
                ruleChannel: O,
                publicUpdatesChannel: M,
                headerId: z,
                theme: c,
                guildId: a.id
            }),
            en = V
                ? (0, i.jsx)(J, {
                      guild: a,
                      policyAccepted: d,
                      onAcceptPolicy: (e, t) => {
                          if (t) {
                              u(!0), ee || f.Z.updateGuild({ defaultMessageNotifications: w.bL.ONLY_MENTIONS }), v || null == Y || E(!0);
                              return;
                          }
                          u(!1), ee && f.Z.updateGuild({ defaultMessageNotifications: Z }), v && null != Y && E(!1);
                      },
                      headerId: z,
                      theme: c
                  })
                : (0, i.jsx)(B, {
                      guild: a,
                      disableDefaultNotifications: ee,
                      disableEveryoneRolePermissions: U,
                      policyAccepted: d,
                      everyoneRolePermissionsAccepted: v,
                      onAcceptPolicy: (e, t) => {
                          if (t) return void u(!0);
                          u(!1);
                      },
                      onAcceptDefaultNotifications: (e, t) => {
                          if (!t) return void f.Z.updateGuild({ defaultMessageNotifications: Z });
                          f.Z.updateGuild({ defaultMessageNotifications: w.bL.ONLY_MENTIONS });
                      },
                      onAcceptEveryoneRolePermissions: (e, t) => {
                          null != Y && (t ? E(!0) : E(!1));
                      },
                      headerId: z,
                      theme: c
                  }),
            el = (0, i.jsx)('img', {
                alt: '',
                src: D,
                className: R.footerImage,
                width: 240
            }),
            ea = [
                {
                    modalContent: es,
                    disableNextStep: a.explicitContentFilter !== w.lxg.ALL_MEMBERS || a.verificationLevel === w.sFg.NONE,
                    overviewTitle: y.NW.string(y.t.PpYoSk)
                },
                {
                    modalContent: ei,
                    disableNextStep: null == O || null == M,
                    overviewTitle: y.NW.string(y.t['7MEtIS'])
                },
                {
                    modalContent: en,
                    disableNextStep: !d,
                    overviewTitle: y.NW.string(y.t.Pj9P8P)
                }
            ];
        return (0, i.jsx)(b.Z, {
            stepData: ea,
            title: y.NW.string(y.t['6U5XTk']),
            transitionState: s,
            onClose: () => {
                l(), I.default.track(w.rMx.MODAL_DISMISSED, { type: T.tA });
            },
            completeButtonText: y.NW.string(y.t.XGl4bW),
            onComplete: et,
            overviewFooter: el,
            sequencerClassName: R.container,
            autoCloseOnComplete: !1
        });
    };
