n.d(t, {
    J: () => em,
    Z: () => eg
}),
    n(653041),
    n(47120),
    n(266796),
    n(566702),
    n(230036);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(658722),
    l = n.n(s),
    c = n(512722),
    u = n.n(c),
    d = n(15729),
    f = n(243814),
    _ = n(442837),
    p = n(921072),
    h = n(524437),
    m = n(1561),
    g = n(481060),
    E = n(384275),
    b = n(493683),
    v = n(239091),
    y = n(87051),
    O = n(230711),
    I = n(497321),
    S = n(468026),
    T = n(317381),
    N = n(513202),
    A = n(279332),
    C = n(445446),
    R = n(979200),
    P = n(870822),
    w = n(600164),
    D = n(299206),
    L = n(726721),
    x = n(726521),
    M = n(713938),
    k = n(973616),
    j = n(881998),
    U = n(592125),
    G = n(944486),
    B = n(246946),
    F = n(9156),
    V = n(768581),
    Z = n(585483),
    H = n(49012),
    W = n(621600),
    Y = n(709054),
    K = n(706454),
    z = n(210887),
    q = n(675478),
    Q = n(581883),
    X = n(436267),
    J = n(494620),
    $ = n(869743),
    ee = n(981631),
    et = n(388032),
    en = n(664536),
    er = n(802138);
function ei(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function eo(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                ei(e, t, n[t]);
            });
    }
    return e;
}
function ea(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function es(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ea(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let el = _.ZP.connectStores([z.Z], () => ({ theme: z.Z.theme }))(g.ubH);
function ec(e) {
    let { application: t, className: n } = e;
    return (0, r.jsxs)('div', {
        className: a()(en.twoWayWarning, n),
        children: [
            (0, r.jsx)(g.d3s, {
                size: 'md',
                color: 'currentColor',
                className: en.twoWayWarningIcon
            }),
            (0, r.jsx)(g.Text, {
                color: 'text-normal',
                variant: 'text-sm/medium',
                children: et.NW.format(et.t.jUhnwc, {
                    applicationName: t.name,
                    onConnectionPress: () => O.Z.setSection(ee.jXE.SETTINGS_CONNECTIONS)
                })
            })
        ]
    });
}
let eu = (e) => {
        let { disclosure: t } = e;
        return i.useMemo(() => {
            switch (t) {
                case p.u$.IP_LOCATION:
                    return (0, r.jsx)(g.enf, {
                        size: 'md',
                        color: 'currentColor',
                        className: en.disclosureIcon
                    });
                case p.u$.DISPLAYS_ADVERTISEMENTS:
                    return (0, r.jsx)(g.FLu, { className: en.disclosureIcon });
                default:
                    return (0, r.jsx)(g.d3s, { className: en.disclosureIcon });
            }
        }, [t]);
    },
    ed = (e, t, n) => {
        (0, x.uu)({
            application: e,
            entrypoint: 'authorized_apps_settings',
            contextualGuildId: t,
            contextualChannelId: n
        });
    },
    ef = (e, t) => {
        let n = et.NW.string(et.t.DT39Aw),
            i = et.NW.formatToPlainString(et.t.QWGvxM, { applicationName: e.name });
        return (
            (0, P.Z)(e) &&
                ((n = et.NW.formatToPlainString(et.t['paC+UV'], { applicationName: e.name })),
                (i = (0, r.jsxs)(r.Fragment, {
                    children: [
                        et.NW.formatToPlainString(et.t.inM1Ym, { applicationName: e.name }),
                        (0, r.jsx)(J.Z, {
                            look: J.z.WARNING,
                            className: en.infoBox,
                            children: et.NW.string(et.t.LY35Z2)
                        })
                    ]
                }))),
            (0, X.Z)(e.id) &&
                (i = (0, r.jsxs)(r.Fragment, {
                    children: [
                        i,
                        (0, r.jsx)(J.Z, {
                            className: en.infoBox,
                            children: et.NW.format(et.t.KRnERk, { applicationName: e.name })
                        })
                    ]
                })),
            (0, g.h7j)((e) =>
                (0, r.jsx)(
                    S.default,
                    eo(
                        {
                            title: n,
                            body: i,
                            confirmText: et.NW.string(et.t.xUqheH),
                            confirmColor: g.Ttl.RED,
                            cancelText: et.NW.string(et.t['ETE/oK']),
                            onConfirm: t
                        },
                        e
                    )
                )
            )
        );
    },
    e_ = (e) => {
        let { application: t, isVisible: n } = e,
            i = () => {
                null != t.terms_of_service_url &&
                    (0, H.q)({
                        href: t.terms_of_service_url,
                        shouldConfirm: !0
                    });
            },
            o = () => {
                null != t.privacy_policy_url &&
                    (0, H.q)({
                        href: t.privacy_policy_url,
                        shouldConfirm: !0
                    });
            };
        return null != t.terms_of_service_url || null != t.privacy_policy_url
            ? (0, r.jsxs)('div', {
                  className: en.tosPrivacy,
                  children: [
                      null != t.terms_of_service_url
                          ? (0, r.jsxs)(m.P, {
                                tag: 'a',
                                onClick: i,
                                className: en.tos,
                                tabIndex: n ? 0 : -1,
                                children: [
                                    (0, r.jsx)(g.R94, {
                                        className: en.link,
                                        children: et.NW.string(et.t['lx+GeX'])
                                    }),
                                    (0, r.jsx)(g.Gr1, {
                                        className: en.externalLinkIcon,
                                        color: 'var(--text-link)'
                                    })
                                ]
                            })
                          : null,
                      null != t.privacy_policy_url
                          ? (0, r.jsxs)('div', {
                                className: en.privacy,
                                children: [
                                    null != t.terms_of_service_url ? (0, r.jsx)('div', { className: en.divider }) : null,
                                    (0, r.jsxs)(m.P, {
                                        tag: 'a',
                                        onClick: o,
                                        className: en.privacy,
                                        tabIndex: n ? 0 : -1,
                                        children: [
                                            (0, r.jsx)(g.R94, {
                                                className: en.link,
                                                children: et.NW.string(et.t.okSwq6)
                                            }),
                                            (0, r.jsx)(g.Gr1, {
                                                className: en.externalLinkIcon,
                                                color: 'var(--text-link)'
                                            })
                                        ]
                                    })
                                ]
                            })
                          : null
                  ]
              })
            : null;
    },
    ep = (e) => {
        let { scopes: t, application: o, selectedChannelId: s, selectedGuildId: l, onDelete: c, disclosures: u, locale: d, id: _ } = e,
            p = i.useMemo(() => k.ZP.createFromServer(o), [o]),
            h = L.Z.useExperiment({ location: 'Authorized Applications' }, { autoTrackExposure: !0 }).enabled,
            m = () => {
                let e = [];
                for (let n of t) e.push(...(0, M.CI)(n, t)), n === f.x.APPLICATIONS_COMMANDS && e.push(et.NW.string(et.t.Ls2XRk));
                if (e.length > 0 || (null != u && u.length > 0))
                    return (0, r.jsx)(g.xJW, {
                        faded: !0,
                        title: et.NW.string(et.t.xrmhRU),
                        className: er.marginTop20,
                        children: (0, r.jsxs)('ul', {
                            children: [
                                e.map((e, t) =>
                                    (0, r.jsxs)(
                                        'li',
                                        {
                                            className: en.permission,
                                            children: [(0, r.jsx)('i', { className: en.permissionCheckmark }), (0, r.jsx)(g.R94, { children: e })]
                                        },
                                        t
                                    )
                                ),
                                null == u
                                    ? void 0
                                    : u.map((t, n) => {
                                          let i = (0, R.PM)(t);
                                          return null != i
                                              ? (0, r.jsxs)(
                                                    'li',
                                                    {
                                                        className: en.permission,
                                                        children: [(0, r.jsx)(eu, { disclosure: t }), (0, r.jsx)(g.R94, { children: i })]
                                                    },
                                                    n + e.length
                                                )
                                              : null;
                                      })
                            ]
                        })
                    });
            },
            E = () => {
                if (null != o.description && '' !== o.description)
                    return (0, r.jsx)(g.xJW, {
                        faded: !0,
                        title: et.NW.string(et.t.GfRGra),
                        children: (0, r.jsx)(g.R94, { children: o.description })
                    });
            },
            b = (0, D.Z)({
                id: o.id,
                label: et.NW.string(et.t['+NP/b2'])
            }),
            y = i.useMemo(() => {
                if (null != b)
                    return (e) => {
                        (0, v.jW)(e, async () => {
                            let { default: e } = await n.e('78040').then(n.bind(n, 599382));
                            return (t) => (0, r.jsx)(e, es(eo({}, t), { items: [b] }));
                        });
                    };
            }, [b]),
            O = () => {
                let e = V.ZP.getApplicationIconURL({
                        id: o.id,
                        icon: o.icon
                    }),
                    t =
                        null != e
                            ? (0, r.jsx)(w.Z.Child, {
                                  className: en.appAvatar,
                                  grow: 0,
                                  children: (0, r.jsx)('img', {
                                      src: e,
                                      alt: ''
                                  })
                              })
                            : null,
                    n = new Date(Y.default.extractTimestamp(_)).toLocaleDateString(d);
                return (0, r.jsxs)('div', {
                    className: a()(en.header, er.marginBottom20),
                    children: [
                        t,
                        (0, r.jsxs)('div', {
                            className: en.headerTextContainer,
                            children: [
                                (0, r.jsx)(g.X6q, {
                                    variant: 'text-sm/semibold',
                                    className: en.headerText,
                                    children: o.name
                                }),
                                (0, r.jsx)(g.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-normal',
                                    children: et.NW.format(et.t.yOApCA, { date: n })
                                })
                            ]
                        }),
                        h
                            ? (0, r.jsx)(g.zxk, {
                                  color: g.Ttl.TRANSPARENT,
                                  look: g.iLD.LINK,
                                  size: g.PhG.SMALL,
                                  className: en.reportButton,
                                  onClick: () => ed(p, l, s),
                                  children: et.NW.string(et.t['+78Pfn'])
                              })
                            : null,
                        (0, r.jsx)(g.zxk, {
                            color: g.Ttl.RED,
                            look: g.iLD.OUTLINED,
                            size: g.PhG.SMALL,
                            onClick: () => ef(o, c),
                            children: et.NW.string(et.t.xUqheH)
                        })
                    ]
                });
            },
            I = (0, X.O)(o.id);
        return (0, r.jsx)(g.Zbd, {
            className: a()(en.authedApp, er.marginBottom8),
            outline: !0,
            onContextMenu: y,
            children: (0, r.jsxs)(g.y5t, {
                component: O(),
                children: [
                    E(),
                    (0, r.jsx)(e_, {
                        application: o,
                        isVisible: !0
                    }),
                    m(),
                    I &&
                        (0, r.jsx)(ec, {
                            application: o,
                            className: en.twoWayWarningV1
                        })
                ]
            })
        });
    },
    eh = (e) => {
        let { scopes: t, application: o, selectedChannelId: s, selectedGuildId: l, onDelete: c, disclosures: d, locale: p, id: E, hasDMOptOutSettings: v } = e,
            O = o.id,
            I = i.useMemo(() => k.ZP.createFromServer(o), [o]),
            S = (0, _.e7)(
                [Q.Z],
                () => {
                    var e, t, n, r;
                    return null === (r = Q.Z.settings.applications) || void 0 === r ? void 0 : null === (n = r.appSettings) || void 0 === n ? void 0 : null === (t = n[O]) || void 0 === t ? void 0 : null === (e = t.appDmSettings) || void 0 === e ? void 0 : e.dmDisabled;
                },
                [O]
            ),
            T = o.bot,
            N = (0, _.e7)([U.Z], () => U.Z.getDMFromUserId(null == T ? void 0 : T.id)),
            A = (0, _.e7)([F.ZP], () => (null == N ? null : F.ZP.isChannelMuted(null, N))),
            [C, P] = i.useState(!1),
            [D, x] = i.useState(!1),
            j = L.Z.useExperiment({ location: 'Authorized Applications' }, { autoTrackExposure: !0 }).enabled,
            G = () => {
                let e = [];
                for (let n of t) e.push(...(0, M.CI)(n, t)), n === f.x.APPLICATIONS_COMMANDS && e.push(et.NW.string(et.t.Ls2XRk));
                if (e.length > 0 || (null != d && d.length > 0))
                    return (0, r.jsx)(g.zF9, {
                        className: en.appDetailsSection,
                        isExpanded: D,
                        collapsibleContent: (0, r.jsxs)('ul', {
                            className: en.appDetailsContent,
                            children: [
                                e.map((e, t) =>
                                    (0, r.jsxs)(
                                        'li',
                                        {
                                            className: en.permission,
                                            children: [(0, r.jsx)('i', { className: en.permissionCheckmark }), (0, r.jsx)(g.R94, { children: e })]
                                        },
                                        t
                                    )
                                ),
                                null == d
                                    ? void 0
                                    : d.map((t, n) => {
                                          let i = (0, R.PM)(t);
                                          return null != i
                                              ? (0, r.jsxs)(
                                                    'li',
                                                    {
                                                        className: en.permission,
                                                        children: [(0, r.jsx)(eu, { disclosure: t }), (0, r.jsx)(g.R94, { children: i })]
                                                    },
                                                    n + e.length
                                                )
                                              : null;
                                      })
                            ]
                        }),
                        children: (t) => {
                            let { onClick: n } = t;
                            return (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsxs)(m.P, {
                                        className: en.appDetailsSectionHeader,
                                        onClick: (e) => {
                                            x(!D), n(e);
                                        },
                                        children: [
                                            (0, r.jsx)(g.X6q, {
                                                variant: 'heading-sm/medium',
                                                color: 'header-primary',
                                                children: et.NW.string(et.t.xrmhRU)
                                            }),
                                            D
                                                ? (0, r.jsx)(g.u04, {
                                                      size: 'md',
                                                      color: g.TVs.colors.INTERACTIVE_NORMAL
                                                  })
                                                : (0, r.jsx)(g.CJ0, {
                                                      size: 'md',
                                                      color: g.TVs.colors.INTERACTIVE_NORMAL
                                                  })
                                        ]
                                    }),
                                    !D &&
                                        (0, r.jsx)(g.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-secondary',
                                            className: a()(en.appDetailsContent, en.permissionsDescription),
                                            children: et.NW.format(et.t.nZOS8v, { numPermissions: e.length })
                                        })
                                ]
                            });
                        }
                    });
            },
            B = () =>
                (0, r.jsx)(g.zF9, {
                    className: en.appDetailsSection,
                    isExpanded: C,
                    collapsibleContent: (0, r.jsxs)('div', {
                        className: en.appDetailsContent,
                        children: [
                            null != o.description &&
                                '' !== o.description &&
                                (0, r.jsx)(g.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-normal',
                                    children: o.description
                                }),
                            (0, r.jsx)(e_, {
                                application: o,
                                isVisible: C
                            })
                        ]
                    }),
                    children: (e) => {
                        let { onClick: t } = e;
                        return (0, r.jsxs)(m.P, {
                            className: en.appDetailsSectionHeader,
                            onClick: (e) => {
                                P(!C), t(e);
                            },
                            children: [
                                (0, r.jsx)(g.X6q, {
                                    variant: 'heading-sm/medium',
                                    color: 'header-primary',
                                    children: et.NW.string(et.t.GfRGra)
                                }),
                                C
                                    ? (0, r.jsx)(g.u04, {
                                          size: 'md',
                                          color: g.TVs.colors.INTERACTIVE_NORMAL
                                      })
                                    : (0, r.jsx)(g.CJ0, {
                                          size: 'md',
                                          color: g.TVs.colors.INTERACTIVE_NORMAL
                                      })
                            ]
                        });
                    }
                }),
            Z = () => {
                let e = V.ZP.getApplicationIconURL({
                        id: o.id,
                        icon: o.icon
                    }),
                    t =
                        null != e
                            ? (0, r.jsx)(w.Z.Child, {
                                  className: en.appAvatarV2,
                                  grow: 0,
                                  children: (0, r.jsx)('img', {
                                      src: e,
                                      alt: ''
                                  })
                              })
                            : null,
                    n = new Date(Y.default.extractTimestamp(E)).toLocaleDateString(p);
                return (0, r.jsxs)('div', {
                    className: en.headerV2,
                    children: [
                        t,
                        (0, r.jsxs)('div', {
                            className: en.headerTextContainerV2,
                            children: [
                                (0, r.jsx)(g.X6q, {
                                    variant: 'heading-md/semibold',
                                    className: a()(en.headerText, er.marginBottom4),
                                    children: o.name
                                }),
                                (0, r.jsx)(g.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-normal',
                                    children: et.NW.format(et.t.yOApCA, { date: n })
                                })
                            ]
                        }),
                        (0, r.jsx)($.Z, {
                            appRecord: I,
                            showAppReportingOption: j,
                            selectedGuildId: l,
                            selectedChannelId: s
                        })
                    ]
                });
            },
            H = (e) => {
                q.hW.updateAsync(
                    'applications',
                    (t) => {
                        O in t.appSettings ? (null == t.appSettings[O].appDmSettings ? (t.appSettings[O].appDmSettings = h.c$.create({ dmDisabled: !e })) : (t.appSettings[O].appDmSettings.dmDisabled = !e)) : (t.appSettings[O] = h.dp.create({ appDmSettings: h.c$.create({ dmDisabled: !e }) }));
                    },
                    q.fy.INFREQUENT_USER_ACTION
                );
            },
            K = i.useCallback(async () => {
                if ((u()(null != T, 'dm channel mute setting requires having a bot user'), null == N)) {
                    let e = await b.Z.ensurePrivateChannel(T.id);
                    y.Z.updateChannelOverrideSettings(null, e, { muted: !1 }, W.ZB.Unmuted);
                    return;
                }
                A
                    ? y.Z.updateChannelOverrideSettings(null, N, { muted: !1 }, W.ZB.Unmuted)
                    : (0, g.ZDy)(async () => {
                          let { default: e } = await n.e('8246').then(n.bind(n, 540679));
                          return (t) => (0, r.jsx)(e, eo({ channelId: N }, t));
                      });
            }, [N, T, A]),
            z = () =>
                v
                    ? (0, r.jsxs)('div', {
                          className: en.appDetailsSection,
                          children: [
                              (0, r.jsx)(g.X6q, {
                                  variant: 'heading-sm/medium',
                                  color: 'header-primary',
                                  className: en.dmSettingsHeader,
                                  children: et.NW.string(et.t.YUU0RE)
                              }),
                              (0, r.jsx)(g.j7V, {
                                  hideBorder: !0,
                                  onChange: H,
                                  className: en.dmSettingsSwitch,
                                  note: et.NW.string(et.t.anBbIS),
                                  value: !S,
                                  children: (0, r.jsx)(g.Text, {
                                      variant: 'text-sm/medium',
                                      children: et.NW.string(et.t.BRhdqa)
                                  })
                              }),
                              null != T
                                  ? (0, r.jsxs)('div', {
                                        className: en.dmSettingsMute,
                                        children: [
                                            (0, r.jsxs)('div', {
                                                children: [
                                                    (0, r.jsx)(g.Text, {
                                                        className: er.marginBottom8,
                                                        variant: 'text-sm/medium',
                                                        color: 'text-normal',
                                                        children: et.NW.string(et.t.NkwaBg)
                                                    }),
                                                    (0, r.jsx)(g.Text, {
                                                        variant: 'text-sm/normal',
                                                        color: 'text-normal',
                                                        children: et.NW.string(et.t.JSptKy)
                                                    })
                                                ]
                                            }),
                                            (0, r.jsx)(g.zxk, {
                                                color: g.Ttl.PRIMARY,
                                                size: g.PhG.SMALL,
                                                onClick: K,
                                                children: A ? et.NW.string(et.t.YqAjX1) : et.NW.string(et.t['w4m94+'])
                                            })
                                        ]
                                    })
                                  : null
                          ]
                      })
                    : null,
            J = (0, X.O)(o.id),
            ee = () =>
                (0, r.jsxs)('div', {
                    className: en.footer,
                    children: [
                        J &&
                            (0, r.jsx)(ec, {
                                application: o,
                                className: en.twoWayWarningV2
                            }),
                        (0, r.jsx)(g.zxk, {
                            color: g.Ttl.RED,
                            look: g.iLD.OUTLINED,
                            size: g.PhG.SMALL,
                            onClick: () => ef(o, c),
                            children: et.NW.string(et.t.xUqheH)
                        })
                    ]
                });
        return (0, r.jsx)('div', {
            className: a()(en.authedAppV2, er.marginBottom8),
            children: (0, r.jsx)(g.y5t, {
                component: Z(),
                children: (0, r.jsxs)('div', {
                    className: en.appDetailsContainer,
                    children: [B(), G(), z(), ee()]
                })
            })
        });
    },
    em = (0, d.U)(() => ({ searchQuery: '' })),
    eg = () => {
        let e = (0, _.e7)([B.Z], () => B.Z.hidePersonalInformation),
            t = (0, _.e7)([j.Z], () => j.Z.getApps()),
            o = (0, _.e7)([K.default], () => K.default.locale),
            a = (0, _.e7)([T.ZP], () => T.ZP.getSelfEmbeddedActivities()),
            s = (0, _.e7)([U.Z, G.Z], () => U.Z.getChannel(G.Z.getChannelId())),
            c = null == s ? void 0 : s.getGuildId(),
            u = A.J.useExperiment({ location: 'UserSettingsAuthedApps' }, { autoTrackExposure: !0 }).enabled,
            d = C.G.useExperiment({ location: 'UserSettingsAuthedApps' }, { autoTrackExposure: !0 }).enabled;
        i.useEffect(() => {
            E.Z.fetch();
        }, []),
            i.useEffect(
                () => () => {
                    em.setState({ searchQuery: '' });
                },
                []
            );
        let f = (e) => {
                let { id: t, application: n } = e;
                E.Z.delete(t), Z.S.safeDispatch(ee.CkL.HIDE_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, { applicationId: n.id });
                let r = a.get(n.id);
                null != r &&
                    N.Z.leaveActivity({
                        location: r.location,
                        applicationId: n.id,
                        showFeedback: !1
                    });
            },
            p = em((e) => e.searchQuery),
            h = (e) => em.setState({ searchQuery: e }),
            m = (e) => {
                h(e);
            },
            b = () => {
                h('');
            },
            v = () =>
                (0, r.jsx)('div', {
                    className: en.searchContainer,
                    children: (0, r.jsx)(g.E1j, {
                        size: g.E1j.Sizes.MEDIUM,
                        query: p,
                        onChange: m,
                        onClear: b,
                        placeholder: et.NW.string(et.t['5prvKS']),
                        'aria-label': et.NW.string(et.t['5prvKS'])
                    })
                }),
            y = (e, t) =>
                (0, r.jsxs)(el, {
                    className: en.__invalid_marginTop20,
                    children: [
                        (0, r.jsx)(g.oxh, {
                            darkSrc: n(701972),
                            lightSrc: n(818658),
                            width: 380,
                            height: 282
                        }),
                        (0, r.jsx)(g.OZU, {
                            note: e,
                            children: t
                        })
                    ]
                }),
            O = i.useMemo(() => {
                let e = p.trim().toLowerCase();
                return '' === e || null == t ? t : t.length < 100 ? t.filter((t) => l()(e, t.application.name.toLowerCase())) : t.filter((t) => t.application.name.toLowerCase().includes(e));
            }, [t, p]),
            S = () =>
                null == t || null == O
                    ? (0, r.jsx)(g.$jN, {
                          className: er.marginTop20,
                          type: g.$jN.Type.SPINNING_CIRCLE
                      })
                    : 0 === t.length
                      ? y(et.NW.string(et.t.CpPv5u), et.NW.string(et.t['E+SM6e']))
                      : 0 === O.length
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [v(), y(null, et.NW.string(et.t.EVWFNj))]
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  v(),
                                  O.sort((e, t) => Number(t.id) - Number(e.id)).map((e) =>
                                      d
                                          ? (0, r.jsx)(
                                                eh,
                                                eo(
                                                    {
                                                        locale: o,
                                                        onDelete: () => f(e),
                                                        selectedChannelId: null == s ? void 0 : s.id,
                                                        selectedGuildId: null != c ? c : void 0,
                                                        hasDMOptOutSettings: u
                                                    },
                                                    e
                                                ),
                                                e.id
                                            )
                                          : (0, r.jsx)(
                                                ep,
                                                eo(
                                                    {
                                                        locale: o,
                                                        onDelete: () => f(e),
                                                        selectedChannelId: null == s ? void 0 : s.id,
                                                        selectedGuildId: null != c ? c : void 0
                                                    },
                                                    e
                                                ),
                                                e.id
                                            )
                                  )
                              ]
                          });
        return e
            ? (0, r.jsx)(I.Z, {})
            : (0, r.jsx)(g.hjN, {
                  tag: g.RB0.H1,
                  title: et.NW.string(et.t['f6kk+v']),
                  children: (0, r.jsx)(g.y5t, {
                      component: (0, r.jsx)(g.ToO, {
                          className: er.marginBottom40,
                          type: g.sje.PRIMARY,
                          title: et.NW.string(et.t.HU3RFx),
                          body: et.NW.string(et.t.Nu5Yi4)
                      }),
                      children: S()
                  })
              });
    };
