n.d(t, {
    J: () => eE,
    Z: () => eb
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
    d = n(230383),
    f = n(243814),
    _ = n(442837),
    p = n(921072),
    h = n(524437),
    m = n(1561),
    g = n(481060),
    E = n(384275),
    b = n(493683),
    y = n(239091),
    v = n(87051),
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
    M = n(240991),
    k = n(713938),
    j = n(973616),
    U = n(881998),
    G = n(592125),
    B = n(944486),
    F = n(246946),
    V = n(9156),
    Z = n(768581),
    H = n(585483),
    W = n(49012),
    Y = n(621600),
    K = n(709054),
    z = n(706454),
    q = n(210887),
    Q = n(675478),
    X = n(581883),
    J = n(436267),
    $ = n(494620),
    ee = n(869743),
    et = n(981631),
    en = n(388032),
    er = n(989604),
    ei = n(73433),
    eo = n(20493);
function ea(e, t, n) {
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
function es(e) {
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
                ea(e, t, n[t]);
            });
    }
    return e;
}
function el(e, t) {
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
function ec(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : el(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eu = _.ZP.connectStores([q.Z], () => ({ theme: q.Z.theme }))(g.ubH);
function ed(e) {
    let { application: t, className: n } = e;
    return (0, r.jsxs)('div', {
        className: a()(er.twoWayWarning, n),
        children: [
            (0, r.jsx)(g.d3s, {
                size: 'md',
                color: 'currentColor',
                className: er.twoWayWarningIcon
            }),
            (0, r.jsx)(g.Text, {
                color: 'text-normal',
                variant: 'text-sm/medium',
                children: en.NW.format(en.t.jUhnwc, {
                    applicationName: t.name,
                    onConnectionPress: () => O.Z.setSection(et.jXE.SETTINGS_CONNECTIONS)
                })
            })
        ]
    });
}
let ef = (e) => {
        let { disclosure: t } = e;
        return i.useMemo(() => {
            switch (t) {
                case p.u$.IP_LOCATION:
                    return (0, r.jsx)(g.enf, {
                        size: 'md',
                        color: 'currentColor',
                        className: er.disclosureIcon
                    });
                case p.u$.DISPLAYS_ADVERTISEMENTS:
                    return (0, r.jsx)(g.FLu, { className: er.disclosureIcon });
                default:
                    return (0, r.jsx)(g.d3s, { className: er.disclosureIcon });
            }
        }, [t]);
    },
    e_ = (e, t, n) => {
        (0, x.uu)({
            application: e,
            entrypoint: 'authorized_apps_settings',
            contextualGuildId: t,
            contextualChannelId: n
        });
    },
    ep = (e, t) => {
        let n = en.NW.string(en.t.DT39Aw),
            i = en.NW.formatToPlainString(en.t.QWGvxM, { applicationName: e.name });
        return (
            (0, P.Z)(e) &&
                ((n = en.NW.formatToPlainString(en.t['paC+UV'], { applicationName: e.name })),
                (i = (0, r.jsxs)(r.Fragment, {
                    children: [
                        en.NW.formatToPlainString(en.t.inM1Ym, { applicationName: e.name }),
                        (0, r.jsx)($.Z, {
                            look: $.z.WARNING,
                            className: er.infoBox,
                            children: en.NW.string(en.t.LY35Z2)
                        })
                    ]
                }))),
            (0, J.Z)(e.id) &&
                (i = (0, r.jsxs)(r.Fragment, {
                    children: [
                        i,
                        (0, r.jsx)($.Z, {
                            className: er.infoBox,
                            children: en.NW.format(en.t.KRnERk, { applicationName: e.name })
                        })
                    ]
                })),
            (0, g.h7j)((e) =>
                (0, r.jsx)(
                    S.default,
                    es(
                        {
                            title: n,
                            body: i,
                            confirmText: en.NW.string(en.t.xUqheH),
                            confirmColor: g.Ttl.RED,
                            cancelText: en.NW.string(en.t['ETE/oK']),
                            onConfirm: t
                        },
                        e
                    )
                )
            )
        );
    },
    eh = (e) => {
        let { application: t, isVisible: n } = e,
            i = () => {
                null != t.terms_of_service_url &&
                    (0, W.q)({
                        href: t.terms_of_service_url,
                        shouldConfirm: !0
                    });
            },
            o = () => {
                null != t.privacy_policy_url &&
                    (0, W.q)({
                        href: t.privacy_policy_url,
                        shouldConfirm: !0
                    });
            };
        return null != t.terms_of_service_url || null != t.privacy_policy_url
            ? (0, r.jsxs)('div', {
                  className: er.tosPrivacy,
                  children: [
                      null != t.terms_of_service_url
                          ? (0, r.jsxs)(m.P, {
                                tag: 'a',
                                onClick: i,
                                className: er.tos,
                                tabIndex: n ? 0 : -1,
                                children: [
                                    (0, r.jsx)(g.R94, {
                                        className: er.link,
                                        children: en.NW.string(en.t['lx+GeX'])
                                    }),
                                    (0, r.jsx)(g.Gr1, {
                                        className: er.externalLinkIcon,
                                        color: 'var(--text-link)'
                                    })
                                ]
                            })
                          : null,
                      null != t.privacy_policy_url
                          ? (0, r.jsxs)('div', {
                                className: er.privacy,
                                children: [
                                    null != t.terms_of_service_url ? (0, r.jsx)('div', { className: er.divider }) : null,
                                    (0, r.jsxs)(m.P, {
                                        tag: 'a',
                                        onClick: o,
                                        className: er.privacy,
                                        tabIndex: n ? 0 : -1,
                                        children: [
                                            (0, r.jsx)(g.R94, {
                                                className: er.link,
                                                children: en.NW.string(en.t.okSwq6)
                                            }),
                                            (0, r.jsx)(g.Gr1, {
                                                className: er.externalLinkIcon,
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
    em = (e) => {
        let { scopes: t, application: o, selectedChannelId: s, selectedGuildId: l, onDelete: c, disclosures: u, locale: d, id: _ } = e,
            p = i.useMemo(() => j.ZP.createFromServer(o), [o]),
            h = L.Z.useExperiment({ location: 'Authorized Applications' }, { autoTrackExposure: !0 }).enabled,
            m = () => {
                let e = [];
                for (let n of t) e.push(...(0, k.CI)(n, t)), n === f.x.APPLICATIONS_COMMANDS && e.push(en.NW.string(en.t.Ls2XRk));
                if (e.length > 0 || (null != u && u.length > 0))
                    return (0, r.jsx)(g.xJW, {
                        faded: !0,
                        title: en.NW.string(en.t.xrmhRU),
                        className: eo.marginTop20,
                        children: (0, r.jsxs)('ul', {
                            children: [
                                e.map((e, t) =>
                                    (0, r.jsxs)(
                                        'li',
                                        {
                                            className: er.permission,
                                            children: [(0, r.jsx)('i', { className: er.permissionCheckmark }), (0, r.jsx)(g.R94, { children: e })]
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
                                                        className: er.permission,
                                                        children: [(0, r.jsx)(ef, { disclosure: t }), (0, r.jsx)(g.R94, { children: i })]
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
                        title: en.NW.string(en.t.GfRGra),
                        children: (0, r.jsx)(g.R94, { children: o.description })
                    });
            },
            b = (0, D.Z)({
                id: o.id,
                label: en.NW.string(en.t['+NP/b2'])
            }),
            v = i.useMemo(() => {
                if (null != b)
                    return (e) => {
                        (0, y.jW)(e, async () => {
                            let { default: e } = await n.e('78040').then(n.bind(n, 599382));
                            return (t) => (0, r.jsx)(e, ec(es({}, t), { items: [b] }));
                        });
                    };
            }, [b]),
            O = () => {
                let e = Z.ZP.getApplicationIconURL({
                        id: o.id,
                        icon: o.icon
                    }),
                    t =
                        null != e
                            ? (0, r.jsx)(w.Z.Child, {
                                  className: er.appAvatar,
                                  grow: 0,
                                  children: (0, r.jsx)('img', {
                                      src: e,
                                      alt: ''
                                  })
                              })
                            : null,
                    n = new Date(K.default.extractTimestamp(_)).toLocaleDateString(d);
                return (0, r.jsxs)('div', {
                    className: a()(er.header, eo.marginBottom20),
                    children: [
                        t,
                        (0, r.jsxs)('div', {
                            className: er.headerTextContainer,
                            children: [
                                (0, r.jsx)(g.X6q, {
                                    variant: 'text-sm/semibold',
                                    className: er.headerText,
                                    children: o.name
                                }),
                                (0, r.jsx)(g.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-normal',
                                    children: en.NW.format(en.t.yOApCA, { date: n })
                                })
                            ]
                        }),
                        h
                            ? (0, r.jsx)(g.zxk, {
                                  color: g.Ttl.TRANSPARENT,
                                  look: g.iLD.LINK,
                                  size: g.PhG.SMALL,
                                  className: er.reportButton,
                                  onClick: () => e_(p, l, s),
                                  children: en.NW.string(en.t['+78Pfn'])
                              })
                            : null,
                        (0, r.jsx)(g.zxk, {
                            color: g.Ttl.RED,
                            look: g.iLD.OUTLINED,
                            size: g.PhG.SMALL,
                            onClick: () => ep(o, c),
                            children: en.NW.string(en.t.xUqheH)
                        })
                    ]
                });
            },
            I = (0, J.O)(o.id);
        return (0, r.jsx)(g.Zbd, {
            className: a()(er.authedApp, eo.marginBottom8),
            outline: !0,
            onContextMenu: v,
            children: (0, r.jsxs)(g.y5t, {
                component: O(),
                children: [
                    E(),
                    (0, r.jsx)(eh, {
                        application: o,
                        isVisible: !0
                    }),
                    m(),
                    I &&
                        (0, r.jsx)(ed, {
                            application: o,
                            className: er.twoWayWarningV1
                        })
                ]
            })
        });
    },
    eg = (e) => {
        let { scopes: t, application: o, selectedChannelId: s, selectedGuildId: l, onDelete: c, disclosures: d, locale: p, id: E, hasDMOptOutSettings: y } = e,
            O = o.id,
            I = i.useMemo(() => j.ZP.createFromServer(o), [o]),
            S = (0, _.e7)(
                [X.Z],
                () => {
                    var e, t, n, r;
                    return null == (r = X.Z.settings.applications) || null == (n = r.appSettings) || null == (t = n[O]) || null == (e = t.appDmSettings) ? void 0 : e.dmDisabled;
                },
                [O]
            ),
            T = o.bot,
            N = (0, _.e7)([G.Z], () => G.Z.getDMFromUserId(null == T ? void 0 : T.id)),
            A = (0, _.e7)([V.ZP], () => (null == N ? null : V.ZP.isChannelMuted(null, N))),
            [C, P] = i.useState(!1),
            [D, x] = i.useState(!1),
            U = L.Z.useExperiment({ location: 'Authorized Applications' }, { autoTrackExposure: !0 }).enabled,
            B = () => {
                let e = [];
                for (let n of t) e.push(...(0, k.CI)(n, t)), n === f.x.APPLICATIONS_COMMANDS && e.push(en.NW.string(en.t.Ls2XRk));
                if (e.length > 0 || (null != d && d.length > 0))
                    return (0, r.jsx)(g.zF9, {
                        className: er.appDetailsSection,
                        isExpanded: D,
                        collapsibleContent: (0, r.jsxs)('ul', {
                            className: er.appDetailsContent,
                            children: [
                                e.map((e, t) =>
                                    (0, r.jsxs)(
                                        'li',
                                        {
                                            className: er.permission,
                                            children: [(0, r.jsx)('i', { className: er.permissionCheckmark }), (0, r.jsx)(g.R94, { children: e })]
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
                                                        className: er.permission,
                                                        children: [(0, r.jsx)(ef, { disclosure: t }), (0, r.jsx)(g.R94, { children: i })]
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
                                        className: er.appDetailsSectionHeader,
                                        onClick: (e) => {
                                            x(!D), n(e);
                                        },
                                        children: [
                                            (0, r.jsx)(g.X6q, {
                                                variant: 'heading-sm/medium',
                                                color: 'header-primary',
                                                children: en.NW.string(en.t.xrmhRU)
                                            }),
                                            D
                                                ? (0, r.jsx)(g.CJ0, {
                                                      size: 'md',
                                                      color: g.TVs.colors.INTERACTIVE_NORMAL
                                                  })
                                                : (0, r.jsx)(g.Fbu, {
                                                      size: 'md',
                                                      color: g.TVs.colors.INTERACTIVE_NORMAL
                                                  })
                                        ]
                                    }),
                                    !D &&
                                        (0, r.jsx)(g.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-secondary',
                                            className: a()(er.appDetailsContent, er.permissionsDescription),
                                            children: en.NW.format(en.t.nZOS8v, { numPermissions: e.length })
                                        })
                                ]
                            });
                        }
                    });
            },
            F = i.useMemo(() => {
                if (null != o.description && '' !== o.description)
                    return (0, r.jsx)(g.Text, {
                        className: ei.markup,
                        variant: 'text-sm/normal',
                        color: 'text-normal',
                        children: (0, M.parseBioReact)(o.description)
                    });
            }, [o.description]),
            H = () => {
                let e = null != o.description && '' !== o.description,
                    t = null != o.terms_of_service_url || null != o.privacy_policy_url;
                return e || t
                    ? (0, r.jsx)(g.zF9, {
                          className: er.appDetailsSection,
                          isExpanded: C,
                          collapsibleContent: (0, r.jsxs)('div', {
                              className: er.appDetailsContent,
                              children: [
                                  e && F,
                                  t &&
                                      (0, r.jsx)(eh, {
                                          application: o,
                                          isVisible: C
                                      })
                              ]
                          }),
                          children: (e) => {
                              let { onClick: t } = e;
                              return (0, r.jsxs)(m.P, {
                                  className: er.appDetailsSectionHeader,
                                  onClick: (e) => {
                                      P(!C), t(e);
                                  },
                                  children: [
                                      (0, r.jsx)(g.X6q, {
                                          variant: 'heading-sm/medium',
                                          color: 'header-primary',
                                          children: en.NW.string(en.t.fcYgiY)
                                      }),
                                      C
                                          ? (0, r.jsx)(g.CJ0, {
                                                size: 'md',
                                                color: g.TVs.colors.INTERACTIVE_NORMAL
                                            })
                                          : (0, r.jsx)(g.Fbu, {
                                                size: 'md',
                                                color: g.TVs.colors.INTERACTIVE_NORMAL
                                            })
                                  ]
                              });
                          }
                      })
                    : null;
            },
            W = () => {
                let e = Z.ZP.getApplicationIconURL({
                        id: o.id,
                        icon: o.icon
                    }),
                    t =
                        null != e
                            ? (0, r.jsx)(w.Z.Child, {
                                  className: er.appAvatarV2,
                                  grow: 0,
                                  children: (0, r.jsx)('img', {
                                      src: e,
                                      alt: ''
                                  })
                              })
                            : null,
                    n = new Date(K.default.extractTimestamp(E)).toLocaleDateString(p);
                return (0, r.jsxs)('div', {
                    className: er.headerV2,
                    children: [
                        t,
                        (0, r.jsxs)('div', {
                            className: er.headerTextContainerV2,
                            children: [
                                (0, r.jsx)(g.X6q, {
                                    variant: 'heading-md/semibold',
                                    className: a()(er.headerText, eo.marginBottom4),
                                    children: o.name
                                }),
                                (0, r.jsx)(g.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-normal',
                                    children: en.NW.format(en.t.yOApCA, { date: n })
                                })
                            ]
                        }),
                        (0, r.jsx)(ee.Z, {
                            appRecord: I,
                            showAppReportingOption: U,
                            selectedGuildId: l,
                            selectedChannelId: s
                        })
                    ]
                });
            },
            z = (e) => {
                Q.hW.updateAsync(
                    'applications',
                    (t) => {
                        O in t.appSettings ? (null == t.appSettings[O].appDmSettings ? (t.appSettings[O].appDmSettings = h.c$.create({ dmDisabled: !e })) : (t.appSettings[O].appDmSettings.dmDisabled = !e)) : (t.appSettings[O] = h.dp.create({ appDmSettings: h.c$.create({ dmDisabled: !e }) }));
                    },
                    Q.fy.INFREQUENT_USER_ACTION
                );
            },
            q = i.useCallback(async () => {
                if ((u()(null != T, 'dm channel mute setting requires having a bot user'), null == N)) {
                    let e = await b.Z.ensurePrivateChannel(T.id);
                    v.Z.updateChannelOverrideSettings(null, e, { muted: !1 }, Y.ZB.Unmuted);
                    return;
                }
                A
                    ? v.Z.updateChannelOverrideSettings(null, N, { muted: !1 }, Y.ZB.Unmuted)
                    : (0, g.ZDy)(async () => {
                          let { default: e } = await n.e('8246').then(n.bind(n, 540679));
                          return (t) => (0, r.jsx)(e, es({ channelId: N }, t));
                      });
            }, [N, T, A]),
            $ = () =>
                y
                    ? (0, r.jsxs)('div', {
                          className: er.appDetailsSection,
                          children: [
                              (0, r.jsx)(g.X6q, {
                                  variant: 'heading-sm/medium',
                                  color: 'header-primary',
                                  className: er.dmSettingsHeader,
                                  children: en.NW.string(en.t.YUU0RE)
                              }),
                              (0, r.jsx)(g.j7V, {
                                  hideBorder: !0,
                                  onChange: z,
                                  className: er.dmSettingsSwitch,
                                  note: en.NW.string(en.t.anBbIS),
                                  value: !S,
                                  children: (0, r.jsx)(g.Text, {
                                      variant: 'text-sm/medium',
                                      children: en.NW.string(en.t.BRhdqa)
                                  })
                              }),
                              null != T
                                  ? (0, r.jsxs)('div', {
                                        className: er.dmSettingsMute,
                                        children: [
                                            (0, r.jsxs)('div', {
                                                children: [
                                                    (0, r.jsx)(g.Text, {
                                                        className: eo.marginBottom8,
                                                        variant: 'text-sm/medium',
                                                        color: 'text-normal',
                                                        children: en.NW.string(en.t.NkwaBg)
                                                    }),
                                                    (0, r.jsx)(g.Text, {
                                                        variant: 'text-sm/normal',
                                                        color: 'text-normal',
                                                        children: en.NW.string(en.t.JSptKy)
                                                    })
                                                ]
                                            }),
                                            (0, r.jsx)(g.zxk, {
                                                color: g.Ttl.PRIMARY,
                                                size: g.PhG.SMALL,
                                                onClick: q,
                                                children: A ? en.NW.string(en.t.YqAjX1) : en.NW.string(en.t['w4m94+'])
                                            })
                                        ]
                                    })
                                  : null
                          ]
                      })
                    : null,
            et = (0, J.O)(o.id),
            ea = () =>
                (0, r.jsxs)('div', {
                    className: er.footer,
                    children: [
                        et &&
                            (0, r.jsx)(ed, {
                                application: o,
                                className: er.twoWayWarningV2
                            }),
                        (0, r.jsx)('div', {
                            className: er.deauthorizeButton,
                            children: (0, r.jsx)(g.zxk, {
                                color: g.Ttl.RED,
                                look: g.iLD.OUTLINED,
                                size: g.PhG.SMALL,
                                onClick: () => ep(o, c),
                                children: en.NW.string(en.t.xUqheH)
                            })
                        })
                    ]
                });
        return (0, r.jsx)('div', {
            className: er.authedAppV2,
            children: (0, r.jsx)(g.y5t, {
                component: W(),
                children: (0, r.jsxs)('div', {
                    className: er.appDetailsContainer,
                    children: [H(), B(), $(), ea()]
                })
            })
        });
    },
    eE = (0, d.U)(() => ({ searchQuery: '' })),
    eb = () => {
        let e = (0, _.e7)([F.Z], () => F.Z.hidePersonalInformation),
            t = (0, _.e7)([U.Z], () => U.Z.getApps()),
            o = (0, _.e7)([z.default], () => z.default.locale),
            a = (0, _.e7)([T.ZP], () => T.ZP.getSelfEmbeddedActivities()),
            s = (0, _.e7)([G.Z, B.Z], () => G.Z.getChannel(B.Z.getChannelId())),
            c = null == s ? void 0 : s.getGuildId(),
            u = A.J.useExperiment({ location: 'UserSettingsAuthedApps' }, { autoTrackExposure: !0 }).enabled,
            d = C.G.useExperiment({ location: 'UserSettingsAuthedApps' }, { autoTrackExposure: !0 }).enabled;
        i.useEffect(() => {
            E.Z.fetch();
        }, []),
            i.useEffect(
                () => () => {
                    eE.setState({ searchQuery: '' });
                },
                []
            );
        let f = (e) => {
                let { id: t, application: n } = e;
                E.Z.delete(t), H.S.safeDispatch(et.CkL.HIDE_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, { applicationId: n.id });
                let r = a.get(n.id);
                null != r &&
                    N.Z.leaveActivity({
                        location: r.location,
                        applicationId: n.id,
                        showFeedback: !1
                    });
            },
            p = eE((e) => e.searchQuery),
            h = (e) => eE.setState({ searchQuery: e }),
            m = (e) => {
                h(e);
            },
            b = () => {
                h('');
            },
            y = () =>
                (0, r.jsx)('div', {
                    className: er.searchContainer,
                    children: (0, r.jsx)(g.E1j, {
                        size: g.E1j.Sizes.MEDIUM,
                        query: p,
                        onChange: m,
                        onClear: b,
                        placeholder: en.NW.string(en.t['5prvKS']),
                        'aria-label': en.NW.string(en.t['5prvKS'])
                    })
                }),
            v = (e, t) =>
                (0, r.jsxs)(eu, {
                    className: er.__invalid_marginTop20,
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
                          className: eo.marginTop20,
                          type: g.$jN.Type.SPINNING_CIRCLE
                      })
                    : 0 === t.length
                      ? v(en.NW.string(en.t.CpPv5u), en.NW.string(en.t['E+SM6e']))
                      : 0 === O.length
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [y(), v(null, en.NW.string(en.t.EVWFNj))]
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  y(),
                                  O.sort((e, t) => Number(t.id) - Number(e.id)).map((e) =>
                                      d
                                          ? (0, r.jsx)(
                                                eg,
                                                es(
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
                                                em,
                                                es(
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
                  title: en.NW.string(en.t['f6kk+v']),
                  children: (0, r.jsx)(g.y5t, {
                      component: (0, r.jsx)(g.ToO, {
                          className: eo.marginBottom40,
                          type: g.sje.PRIMARY,
                          title: en.NW.string(en.t.HU3RFx),
                          body: en.NW.string(en.t.Nu5Yi4)
                      }),
                      children: S()
                  })
              });
    };
