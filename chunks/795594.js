n.d(t, {
    J: () => eb,
    Z: () => ey
}),
    n(539854),
    n(388685),
    n(953529),
    n(997841),
    n(781311),
    n(642613);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(658722),
    l = n.n(s),
    c = n(512722),
    u = n.n(c),
    d = n(290486),
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
    A = n(513202),
    N = n(162685),
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
    V = n(246946),
    F = n(9156),
    Z = n(768581),
    H = n(585483),
    Y = n(630388),
    W = n(49012),
    K = n(621600),
    z = n(709054),
    q = n(706454),
    Q = n(210887),
    X = n(675478),
    J = n(581883),
    $ = n(436267),
    ee = n(494620),
    et = n(869743),
    en = n(981631),
    er = n(388032),
    ei = n(989604),
    ea = n(73433),
    eo = n(20493);
function es(e, t, n) {
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
function el(e) {
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
                es(e, t, n[t]);
            });
    }
    return e;
}
function ec(e, t) {
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
function eu(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ec(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ed = _.ZP.connectStores([Q.Z], () => ({ theme: Q.Z.theme }))(g.ubH);
function ef(e) {
    let { application: t, className: n } = e;
    return (0, r.jsxs)('div', {
        className: o()(ei.twoWayWarning, n),
        children: [
            (0, r.jsx)(g.d3s, {
                size: 'md',
                color: 'currentColor',
                className: ei.twoWayWarningIcon
            }),
            (0, r.jsx)(g.Text, {
                color: 'text-normal',
                variant: 'text-sm/medium',
                children: er.intl.format(er.t.jUhnwc, {
                    applicationName: t.name,
                    onConnectionPress: () => O.Z.setSection(en.jXE.SETTINGS_CONNECTIONS)
                })
            })
        ]
    });
}
let e_ = (e) => {
        let { disclosure: t } = e;
        return i.useMemo(() => {
            switch (t) {
                case p.u$.IP_LOCATION:
                    return (0, r.jsx)(g.enf, {
                        size: 'md',
                        color: 'currentColor',
                        className: ei.disclosureIcon
                    });
                case p.u$.DISPLAYS_ADVERTISEMENTS:
                    return (0, r.jsx)(g.FLu, { className: ei.disclosureIcon });
                default:
                    return (0, r.jsx)(g.d3s, { className: ei.disclosureIcon });
            }
        }, [t]);
    },
    ep = (e, t, n) => {
        (0, x.uu)({
            application: e,
            entrypoint: 'authorized_apps_settings',
            contextualGuildId: t,
            contextualChannelId: n
        });
    },
    eh = (e, t) => {
        let n = er.intl.string(er.t.DT39Aw),
            i = er.intl.formatToPlainString(er.t.QWGvxM, { applicationName: e.name });
        return (
            (0, P.Z)(e) &&
                ((n = er.intl.formatToPlainString(er.t['paC+UV'], { applicationName: e.name })),
                (i = (0, r.jsxs)(r.Fragment, {
                    children: [
                        er.intl.formatToPlainString(er.t.inM1Ym, { applicationName: e.name }),
                        (0, r.jsx)(ee.Z, {
                            look: ee.z.WARNING,
                            className: ei.infoBox,
                            children: er.intl.string(er.t.LY35Z2)
                        })
                    ]
                }))),
            (0, $.Z)(e.id) &&
                (i = (0, r.jsxs)(r.Fragment, {
                    children: [
                        i,
                        (0, r.jsx)(ee.Z, {
                            className: ei.infoBox,
                            children: er.intl.format(er.t.KRnERk, { applicationName: e.name })
                        })
                    ]
                })),
            (0, g.h7j)((e) =>
                (0, r.jsx)(
                    S.default,
                    el(
                        {
                            title: n,
                            body: i,
                            confirmText: er.intl.string(er.t.xUqheH),
                            confirmColor: g.Ttl.RED,
                            cancelText: er.intl.string(er.t['ETE/oK']),
                            onConfirm: t
                        },
                        e
                    )
                )
            )
        );
    },
    em = (e) => {
        let { application: t, isVisible: n } = e,
            i = () => {
                null != t.terms_of_service_url &&
                    (0, W.q)({
                        href: t.terms_of_service_url,
                        shouldConfirm: !0
                    });
            },
            a = () => {
                null != t.privacy_policy_url &&
                    (0, W.q)({
                        href: t.privacy_policy_url,
                        shouldConfirm: !0
                    });
            };
        return null != t.terms_of_service_url || null != t.privacy_policy_url
            ? (0, r.jsxs)('div', {
                  className: ei.tosPrivacy,
                  children: [
                      null != t.terms_of_service_url
                          ? (0, r.jsxs)(m.P, {
                                tag: 'a',
                                onClick: i,
                                className: ei.tos,
                                tabIndex: n ? 0 : -1,
                                children: [
                                    (0, r.jsx)(g.R94, {
                                        className: ei.link,
                                        children: er.intl.string(er.t['lx+GeX'])
                                    }),
                                    (0, r.jsx)(g.Gr1, {
                                        className: ei.externalLinkIcon,
                                        color: 'var(--text-link)'
                                    })
                                ]
                            })
                          : null,
                      null != t.privacy_policy_url
                          ? (0, r.jsxs)('div', {
                                className: ei.privacy,
                                children: [
                                    null != t.terms_of_service_url ? (0, r.jsx)('div', { className: ei.divider }) : null,
                                    (0, r.jsxs)(m.P, {
                                        tag: 'a',
                                        onClick: a,
                                        className: ei.privacy,
                                        tabIndex: n ? 0 : -1,
                                        children: [
                                            (0, r.jsx)(g.R94, {
                                                className: ei.link,
                                                children: er.intl.string(er.t.okSwq6)
                                            }),
                                            (0, r.jsx)(g.Gr1, {
                                                className: ei.externalLinkIcon,
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
    eg = (e) => {
        let { scopes: t, application: a, selectedChannelId: s, selectedGuildId: l, onDelete: c, disclosures: u, locale: d, id: _ } = e,
            p = i.useMemo(() => j.ZP.createFromServer(a), [a]),
            h = L.Z.useExperiment({ location: 'Authorized Applications' }, { autoTrackExposure: !0 }).enabled,
            m = () => {
                let e = [];
                for (let n of t) e.push(...(0, k.CI)(n, t)), n === f.x.APPLICATIONS_COMMANDS && e.push(er.intl.string(er.t.Ls2XRk));
                if (e.length > 0 || (null != u && u.length > 0))
                    return (0, r.jsx)(g.xJW, {
                        faded: !0,
                        title: er.intl.string(er.t.xrmhRU),
                        className: eo.marginTop20,
                        children: (0, r.jsxs)('ul', {
                            children: [
                                e.map((e, t) =>
                                    (0, r.jsxs)(
                                        'li',
                                        {
                                            className: ei.permission,
                                            children: [(0, r.jsx)('i', { className: ei.permissionCheckmark }), (0, r.jsx)(g.R94, { children: e })]
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
                                                        className: ei.permission,
                                                        children: [(0, r.jsx)(e_, { disclosure: t }), (0, r.jsx)(g.R94, { children: i })]
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
                if (null != a.description && '' !== a.description)
                    return (0, r.jsx)(g.xJW, {
                        faded: !0,
                        title: er.intl.string(er.t.GfRGra),
                        children: (0, r.jsx)(g.R94, { children: a.description })
                    });
            },
            b = (0, D.Z)({
                id: a.id,
                label: er.intl.string(er.t['+NP/b2'])
            }),
            v = i.useMemo(() => {
                if (null != b)
                    return (e) => {
                        (0, y.jW)(e, async () => {
                            let { default: e } = await n.e('78040').then(n.bind(n, 599382));
                            return (t) => (0, r.jsx)(e, eu(el({}, t), { items: [b] }));
                        });
                    };
            }, [b]),
            O = () => {
                let e = Z.ZP.getApplicationIconURL({
                        id: a.id,
                        icon: a.icon
                    }),
                    t =
                        null != e
                            ? (0, r.jsx)(w.Z.Child, {
                                  className: ei.appAvatar,
                                  grow: 0,
                                  children: (0, r.jsx)('img', {
                                      src: e,
                                      alt: ''
                                  })
                              })
                            : null,
                    n = new Date(z.default.extractTimestamp(_)).toLocaleDateString(d);
                return (0, r.jsxs)('div', {
                    className: o()(ei.header, eo.marginBottom20),
                    children: [
                        t,
                        (0, r.jsxs)('div', {
                            className: ei.headerTextContainer,
                            children: [
                                (0, r.jsx)(g.X6q, {
                                    variant: 'text-sm/semibold',
                                    className: ei.headerText,
                                    children: a.name
                                }),
                                (0, r.jsx)(g.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-normal',
                                    children: er.intl.format(er.t.yOApCA, { date: n })
                                })
                            ]
                        }),
                        h
                            ? (0, r.jsx)(g.zxk, {
                                  color: g.Ttl.TRANSPARENT,
                                  look: g.iLD.LINK,
                                  size: g.PhG.SMALL,
                                  className: ei.reportButton,
                                  onClick: () => ep(p, l, s),
                                  children: er.intl.string(er.t['+78Pfn'])
                              })
                            : null,
                        (0, r.jsx)(g.zxk, {
                            color: g.Ttl.RED,
                            look: g.iLD.OUTLINED,
                            size: g.PhG.SMALL,
                            onClick: () => eh(a, c),
                            children: er.intl.string(er.t.xUqheH)
                        })
                    ]
                });
            },
            I = (0, $.O)(a.id);
        return (0, r.jsx)(g.Zbd, {
            className: o()(ei.authedApp, eo.marginBottom8),
            outline: !0,
            onContextMenu: v,
            children: (0, r.jsxs)(g.y5t, {
                component: O(),
                children: [
                    E(),
                    (0, r.jsx)(em, {
                        application: a,
                        isVisible: !0
                    }),
                    m(),
                    I &&
                        (0, r.jsx)(ef, {
                            application: a,
                            className: ei.twoWayWarningV1
                        })
                ]
            })
        });
    },
    eE = (e) => {
        let { scopes: t, application: a, selectedChannelId: s, selectedGuildId: l, onDelete: c, disclosures: d, locale: p, id: E } = e,
            y = a.id,
            O = i.useMemo(() => j.ZP.createFromServer(a), [a]),
            I = (0, Y.yE)(O.flags, en.udG.EMBEDDED),
            S = (0, _.e7)(
                [J.Z],
                () => {
                    var e, t, n, r;
                    return null == (r = J.Z.settings.applications) || null == (n = r.appSettings) || null == (t = n[y]) || null == (e = t.appDmSettings) ? void 0 : e.allowMobilePush;
                },
                [y]
            ),
            T = N.w.useExperiment({ location: 'oauth2_authorize' }),
            A = a.bot,
            C = (0, _.e7)([G.Z], () => G.Z.getDMFromUserId(null == A ? void 0 : A.id)),
            { appDMChannelMuteConfig: P, dmChannelMuted: D } = (0, _.cj)([F.ZP], () =>
                null == C
                    ? {
                          appDMChannelMuteConfig: null,
                          dmChannelMuted: !1
                      }
                    : {
                          appDMChannelMuteConfig: F.ZP.getChannelMuteConfig(null, C),
                          dmChannelMuted: F.ZP.isChannelMuted(null, C)
                      }
            ),
            [x, U] = i.useState(!1),
            [B, V] = i.useState(!1),
            H = L.Z.useExperiment({ location: 'Authorized Applications' }, { autoTrackExposure: !0 }).enabled,
            W = () => {
                let e = [];
                for (let n of t) e.push(...(0, k.CI)(n, t)), n === f.x.APPLICATIONS_COMMANDS && e.push(er.intl.string(er.t.Ls2XRk));
                if (e.length > 0 || (null != d && d.length > 0))
                    return (0, r.jsx)(g.zF9, {
                        className: ei.appDetailsSection,
                        isExpanded: B,
                        collapsibleContent: (0, r.jsxs)('ul', {
                            className: ei.appDetailsContent,
                            children: [
                                e.map((e, t) =>
                                    (0, r.jsxs)(
                                        'li',
                                        {
                                            className: ei.permission,
                                            children: [(0, r.jsx)('i', { className: ei.permissionCheckmark }), (0, r.jsx)(g.R94, { children: e })]
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
                                                        className: ei.permission,
                                                        children: [(0, r.jsx)(e_, { disclosure: t }), (0, r.jsx)(g.R94, { children: i })]
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
                                        className: ei.appDetailsSectionHeader,
                                        onClick: (e) => {
                                            V(!B), n(e);
                                        },
                                        children: [
                                            (0, r.jsx)(g.X6q, {
                                                variant: 'heading-sm/medium',
                                                color: 'header-primary',
                                                children: er.intl.string(er.t.xrmhRU)
                                            }),
                                            B
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
                                    !B &&
                                        (0, r.jsx)(g.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-secondary',
                                            className: o()(ei.appDetailsContent, ei.permissionsDescription),
                                            children: er.intl.format(er.t.nZOS8v, { numPermissions: e.length })
                                        })
                                ]
                            });
                        }
                    });
            },
            q = i.useMemo(() => {
                if (null != a.description && '' !== a.description)
                    return (0, r.jsx)(g.Text, {
                        className: ea.markup,
                        variant: 'text-sm/normal',
                        color: 'text-normal',
                        children: (0, M.parseBioReact)(a.description)
                    });
            }, [a.description]),
            Q = () => {
                let e = null != a.description && '' !== a.description,
                    t = null != a.terms_of_service_url || null != a.privacy_policy_url;
                return e || t
                    ? (0, r.jsx)(g.zF9, {
                          className: ei.appDetailsSection,
                          isExpanded: x,
                          collapsibleContent: (0, r.jsxs)('div', {
                              className: ei.appDetailsContent,
                              children: [
                                  e && q,
                                  t &&
                                      (0, r.jsx)(em, {
                                          application: a,
                                          isVisible: x
                                      })
                              ]
                          }),
                          children: (e) => {
                              let { onClick: t } = e;
                              return (0, r.jsxs)(m.P, {
                                  className: ei.appDetailsSectionHeader,
                                  onClick: (e) => {
                                      U(!x), t(e);
                                  },
                                  children: [
                                      (0, r.jsx)(g.X6q, {
                                          variant: 'heading-sm/medium',
                                          color: 'header-primary',
                                          children: er.intl.string(er.t.fcYgiY)
                                      }),
                                      x
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
            ee = () => {
                let e = Z.ZP.getApplicationIconURL({
                        id: a.id,
                        icon: a.icon
                    }),
                    t =
                        null != e
                            ? (0, r.jsx)(w.Z.Child, {
                                  className: ei.appAvatarV2,
                                  grow: 0,
                                  children: (0, r.jsx)('img', {
                                      src: e,
                                      alt: ''
                                  })
                              })
                            : null,
                    n = new Date(z.default.extractTimestamp(E)).toLocaleDateString(p);
                return (0, r.jsxs)('div', {
                    className: ei.headerV2,
                    children: [
                        t,
                        (0, r.jsxs)('div', {
                            className: ei.headerTextContainerV2,
                            children: [
                                (0, r.jsx)(g.X6q, {
                                    variant: 'heading-md/semibold',
                                    className: o()(ei.headerText, eo.marginBottom4),
                                    children: a.name
                                }),
                                (0, r.jsx)(g.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-normal',
                                    children: er.intl.format(er.t.yOApCA, { date: n })
                                })
                            ]
                        }),
                        (0, r.jsx)(et.Z, {
                            appRecord: O,
                            showAppReportingOption: H,
                            selectedGuildId: l,
                            selectedChannelId: s
                        })
                    ]
                });
            },
            es = (e) => {
                X.hW.updateAsync(
                    'applications',
                    (t) => {
                        y in t.appSettings ? (null == t.appSettings[y].appDmSettings ? (t.appSettings[y].appDmSettings = h.c$.create({ allowMobilePush: e })) : (t.appSettings[y].appDmSettings.allowMobilePush = e)) : (t.appSettings[y] = h.dp.create({ appDmSettings: h.c$.create({ allowMobilePush: e }) }));
                    },
                    X.fy.INFREQUENT_USER_ACTION
                );
            },
            ec = i.useCallback(async () => {
                if ((u()(null != A, 'dm channel mute setting requires having a bot user'), null == C)) {
                    let e = await b.Z.ensurePrivateChannel(A.id);
                    v.Z.updateChannelOverrideSettings(null, e, { muted: !1 }, K.ZB.Unmuted);
                    return;
                }
                D
                    ? v.Z.updateChannelOverrideSettings(null, C, { muted: !1 }, K.ZB.Unmuted)
                    : (0, g.ZDy)(async () => {
                          let { default: e } = await n.e('8246').then(n.bind(n, 540679));
                          return (t) => (0, r.jsx)(e, el({ channelId: C }, t));
                      });
            }, [C, A, D]),
            eu = () =>
                T.enabled
                    ? (0, r.jsxs)('div', {
                          className: ei.directMessagesSection,
                          children: [
                              (0, r.jsx)(g.X6q, {
                                  variant: 'heading-sm/medium',
                                  color: 'header-primary',
                                  className: ei.dmSettingsHeader,
                                  children: er.intl.string(er.t.NaZyYG)
                              }),
                              null != A
                                  ? (0, r.jsx)(g.j7V, {
                                        hideBorder: !0,
                                        onChange: ec,
                                        className: ei.dmSettingsSwitch,
                                        note:
                                            (null == P ? void 0 : P.end_time) != null
                                                ? er.intl.format(er.t.j7h4AA, {
                                                      endTime: new Date(P.end_time).toLocaleString(er.intl.currentLocale, {
                                                          month: 'numeric',
                                                          day: 'numeric',
                                                          hour: 'numeric',
                                                          minute: '2-digit'
                                                      })
                                                  })
                                                : void 0,
                                        value: D,
                                        children: (0, r.jsx)(g.Text, {
                                            variant: 'text-sm/medium',
                                            children: er.intl.string(er.t.NkwaBg)
                                        })
                                    })
                                  : null,
                              I && T.enabled
                                  ? (0, r.jsx)(g.j7V, {
                                        hideBorder: !0,
                                        onChange: es,
                                        className: ei.dmSettingsSwitch,
                                        note: er.intl.string(er.t.hw1nKS),
                                        value: S,
                                        disabled: D,
                                        children: (0, r.jsx)(g.Text, {
                                            variant: 'text-sm/medium',
                                            children: er.intl.string(er.t['Pkw//v'])
                                        })
                                    })
                                  : null
                          ]
                      })
                    : null,
            ed = (0, $.O)(a.id),
            ep = () =>
                (0, r.jsxs)('div', {
                    className: ei.footer,
                    children: [
                        ed &&
                            (0, r.jsx)(ef, {
                                application: a,
                                className: ei.twoWayWarningV2
                            }),
                        (0, r.jsx)('div', {
                            className: ei.deauthorizeButton,
                            children: (0, r.jsx)(g.zxk, {
                                color: g.Ttl.RED,
                                look: g.iLD.OUTLINED,
                                size: g.PhG.SMALL,
                                onClick: () => eh(a, c),
                                children: er.intl.string(er.t.xUqheH)
                            })
                        })
                    ]
                });
        return (0, r.jsx)('div', {
            className: ei.authedAppV2,
            children: (0, r.jsx)(g.y5t, {
                component: ee(),
                children: (0, r.jsxs)('div', {
                    className: ei.appDetailsContainer,
                    children: [Q(), W(), eu(), ep()]
                })
            })
        });
    },
    eb = (0, d.U)(() => ({ searchQuery: '' })),
    ey = () => {
        let e = (0, _.e7)([V.Z], () => V.Z.hidePersonalInformation),
            t = (0, _.e7)([U.Z], () => U.Z.getApps()),
            a = (0, _.e7)([q.default], () => q.default.locale),
            o = (0, _.e7)([T.ZP], () => T.ZP.getSelfEmbeddedActivities()),
            s = (0, _.e7)([G.Z, B.Z], () => G.Z.getChannel(B.Z.getChannelId())),
            c = null == s ? void 0 : s.getGuildId(),
            u = C.G.useExperiment({ location: 'UserSettingsAuthedApps' }, { autoTrackExposure: !0 }).enabled;
        i.useEffect(() => {
            E.Z.fetch();
        }, []),
            i.useEffect(
                () => () => {
                    eb.setState({ searchQuery: '' });
                },
                []
            );
        let d = (e) => {
                let { id: t, application: n } = e;
                E.Z.delete(t), H.S.safeDispatch(en.CkL.HIDE_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, { applicationId: n.id });
                let r = o.get(n.id);
                null != r &&
                    A.Z.leaveActivity({
                        location: r.location,
                        applicationId: n.id,
                        showFeedback: !1
                    });
            },
            f = eb((e) => e.searchQuery),
            p = (e) => eb.setState({ searchQuery: e }),
            h = (e) => {
                p(e);
            },
            m = () => {
                p('');
            },
            b = () =>
                (0, r.jsx)('div', {
                    className: ei.searchContainer,
                    children: (0, r.jsx)(g.E1j, {
                        size: g.E1j.Sizes.MEDIUM,
                        query: f,
                        onChange: h,
                        onClear: m,
                        placeholder: er.intl.string(er.t['5prvKS']),
                        'aria-label': er.intl.string(er.t['5prvKS'])
                    })
                }),
            y = (e, t) =>
                (0, r.jsxs)(ed, {
                    className: ei.__invalid_marginTop20,
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
            v = i.useMemo(() => {
                let e = f.trim().toLowerCase();
                return '' === e || null == t ? t : t.length < 100 ? t.filter((t) => l()(e, t.application.name.toLowerCase())) : t.filter((t) => t.application.name.toLowerCase().includes(e));
            }, [t, f]),
            O = () =>
                null == t || null == v
                    ? (0, r.jsx)(g.$jN, {
                          className: eo.marginTop20,
                          type: g.$jN.Type.SPINNING_CIRCLE
                      })
                    : 0 === t.length
                      ? y(er.intl.string(er.t.CpPv5u), er.intl.string(er.t['E+SM6e']))
                      : 0 === v.length
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [b(), y(null, er.intl.string(er.t.EVWFNj))]
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  b(),
                                  v
                                      .sort((e, t) => Number(t.id) - Number(e.id))
                                      .map((e) =>
                                          u
                                              ? (0, r.jsx)(
                                                    eE,
                                                    el(
                                                        {
                                                            locale: a,
                                                            onDelete: () => d(e),
                                                            selectedChannelId: null == s ? void 0 : s.id,
                                                            selectedGuildId: null != c ? c : void 0
                                                        },
                                                        e
                                                    ),
                                                    e.id
                                                )
                                              : (0, r.jsx)(
                                                    eg,
                                                    el(
                                                        {
                                                            locale: a,
                                                            onDelete: () => d(e),
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
                  title: er.intl.string(er.t['f6kk+v']),
                  children: (0, r.jsx)(g.y5t, {
                      component: (0, r.jsx)(g.ToO, {
                          className: eo.marginBottom40,
                          type: g.sje.PRIMARY,
                          title: er.intl.string(er.t.HU3RFx),
                          body: er.intl.string(er.t.Nu5Yi4)
                      }),
                      children: O()
                  })
              });
    };
