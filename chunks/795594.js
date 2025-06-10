n.d(t, {
    J: () => eO,
    Z: () => ev
}),
    n(539854),
    n(388685),
    n(953529),
    n(997841),
    n(781311),
    n(642613);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(658722),
    l = n.n(s),
    c = n(512722),
    u = n.n(c),
    d = n(97519),
    f = n(243814),
    _ = n(442837),
    p = n(921072),
    h = n(524437),
    m = n(1561),
    g = n(844168),
    E = n(481060),
    b = n(384275),
    y = n(493683),
    O = n(239091),
    v = n(87051),
    I = n(230711),
    S = n(497321),
    T = n(468026),
    A = n(317381),
    N = n(513202),
    C = n(367907),
    R = n(162685),
    P = n(445446),
    w = n(979200),
    D = n(870822),
    L = n(600164),
    x = n(299206),
    k = n(726721),
    M = n(726521),
    j = n(240991),
    U = n(713938),
    G = n(973616),
    B = n(881998),
    F = n(592125),
    V = n(944486),
    Z = n(246946),
    H = n(9156),
    Y = n(768581),
    W = n(630388),
    K = n(49012),
    z = n(621600),
    q = n(709054),
    X = n(706454),
    Q = n(210887),
    J = n(675478),
    $ = n(581883),
    ee = n(436267),
    et = n(494620),
    en = n(869743),
    er = n(981631),
    ei = n(468788),
    ea = n(388032),
    eo = n(989604),
    es = n(73433),
    el = n(20493);
function ec(e, t, n) {
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
function eu(e) {
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
                ec(e, t, n[t]);
            });
    }
    return e;
}
function ed(e, t) {
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
function ef(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ed(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let e_ = _.ZP.connectStores([Q.Z], () => ({ theme: Q.Z.theme }))(E.ubH);
function ep(e) {
    let { application: t, className: n } = e;
    return (0, r.jsxs)('div', {
        className: o()(eo.twoWayWarning, n),
        children: [
            (0, r.jsx)(E.d3s, {
                size: 'md',
                color: 'currentColor',
                className: eo.twoWayWarningIcon
            }),
            (0, r.jsx)(E.Text, {
                color: 'text-normal',
                variant: 'text-sm/medium',
                children: ea.intl.format(ea.t.jUhnwc, {
                    applicationName: t.name,
                    onConnectionPress: () => I.Z.setSection(er.jXE.SETTINGS_CONNECTIONS)
                })
            })
        ]
    });
}
let eh = (e) => {
        let { disclosure: t } = e;
        return i.useMemo(() => {
            switch (t) {
                case p.u$.IP_LOCATION:
                    return (0, r.jsx)(E.enf, {
                        size: 'md',
                        color: 'currentColor',
                        className: eo.disclosureIcon
                    });
                case p.u$.DISPLAYS_ADVERTISEMENTS:
                    return (0, r.jsx)(E.FLu, { className: eo.disclosureIcon });
                default:
                    return (0, r.jsx)(E.d3s, { className: eo.disclosureIcon });
            }
        }, [t]);
    },
    em = (e, t, n) => {
        (0, M.uu)({
            application: e,
            entrypoint: 'authorized_apps_settings',
            contextualGuildId: t,
            contextualChannelId: n
        });
    },
    eg = (e, t) => {
        let n = ea.intl.string(ea.t.DT39Aw),
            i = ea.intl.formatToPlainString(ea.t.QWGvxM, { applicationName: e.name });
        return (
            (0, D.Z)(e) &&
                ((n = ea.intl.formatToPlainString(ea.t['paC+UV'], { applicationName: e.name })),
                (i = (0, r.jsxs)(r.Fragment, {
                    children: [
                        ea.intl.formatToPlainString(ea.t.inM1Ym, { applicationName: e.name }),
                        (0, r.jsx)(et.Z, {
                            look: et.z.WARNING,
                            className: eo.infoBox,
                            children: ea.intl.string(ea.t.LY35Z2)
                        })
                    ]
                }))),
            (0, ee.Z)(e.id) &&
                (i = (0, r.jsxs)(r.Fragment, {
                    children: [
                        i,
                        (0, r.jsx)(et.Z, {
                            className: eo.infoBox,
                            children: ea.intl.format(ea.t.KRnERk, { applicationName: e.name })
                        })
                    ]
                })),
            (0, E.h7j)((e) =>
                (0, r.jsx)(
                    T.default,
                    eu(
                        {
                            title: n,
                            body: i,
                            confirmText: ea.intl.string(ea.t.xUqheH),
                            confirmColor: E.Ttl.RED,
                            cancelText: ea.intl.string(ea.t['ETE/oK']),
                            onConfirm: t
                        },
                        e
                    )
                )
            )
        );
    },
    eE = (e) => {
        let { application: t, isVisible: n } = e,
            i = () => {
                null != t.terms_of_service_url &&
                    (0, K.q)({
                        href: t.terms_of_service_url,
                        shouldConfirm: !0
                    });
            },
            a = () => {
                null != t.privacy_policy_url &&
                    (0, K.q)({
                        href: t.privacy_policy_url,
                        shouldConfirm: !0
                    });
            };
        return null != t.terms_of_service_url || null != t.privacy_policy_url
            ? (0, r.jsxs)('div', {
                  className: eo.tosPrivacy,
                  children: [
                      null != t.terms_of_service_url
                          ? (0, r.jsxs)(m.P, {
                                tag: 'a',
                                onClick: i,
                                className: eo.tos,
                                tabIndex: n ? 0 : -1,
                                children: [
                                    (0, r.jsx)(E.R94, {
                                        className: eo.link,
                                        children: ea.intl.string(ea.t['lx+GeX'])
                                    }),
                                    (0, r.jsx)(E.Gr1, {
                                        className: eo.externalLinkIcon,
                                        color: 'var(--text-link)'
                                    })
                                ]
                            })
                          : null,
                      null != t.privacy_policy_url
                          ? (0, r.jsxs)('div', {
                                className: eo.privacy,
                                children: [
                                    null != t.terms_of_service_url ? (0, r.jsx)('div', { className: eo.divider }) : null,
                                    (0, r.jsxs)(m.P, {
                                        tag: 'a',
                                        onClick: a,
                                        className: eo.privacy,
                                        tabIndex: n ? 0 : -1,
                                        children: [
                                            (0, r.jsx)(E.R94, {
                                                className: eo.link,
                                                children: ea.intl.string(ea.t.okSwq6)
                                            }),
                                            (0, r.jsx)(E.Gr1, {
                                                className: eo.externalLinkIcon,
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
    eb = (e) => {
        let { scopes: t, application: a, selectedChannelId: s, selectedGuildId: l, onDelete: c, disclosures: u, locale: d, id: _ } = e,
            p = i.useMemo(() => G.ZP.createFromServer(a), [a]),
            h = k.Z.useExperiment({ location: 'Authorized Applications' }, { autoTrackExposure: !0 }).enabled,
            m = () => {
                let e = [];
                for (let n of t) e.push(...(0, U.CI)(n, t)), n === f.x.APPLICATIONS_COMMANDS && e.push(ea.intl.string(ea.t.Ls2XRk));
                if (e.length > 0 || (null != u && u.length > 0))
                    return (0, r.jsx)(E.xJW, {
                        faded: !0,
                        title: ea.intl.string(ea.t.xrmhRU),
                        className: el.marginTop20,
                        children: (0, r.jsxs)('ul', {
                            children: [
                                e.map((e, t) =>
                                    (0, r.jsxs)(
                                        'li',
                                        {
                                            className: eo.permission,
                                            children: [(0, r.jsx)('i', { className: eo.permissionCheckmark }), (0, r.jsx)(E.R94, { children: e })]
                                        },
                                        t
                                    )
                                ),
                                null == u
                                    ? void 0
                                    : u.map((t, n) => {
                                          let i = (0, w.PM)(t);
                                          return null != i
                                              ? (0, r.jsxs)(
                                                    'li',
                                                    {
                                                        className: eo.permission,
                                                        children: [(0, r.jsx)(eh, { disclosure: t }), (0, r.jsx)(E.R94, { children: i })]
                                                    },
                                                    n + e.length
                                                )
                                              : null;
                                      })
                            ]
                        })
                    });
            },
            g = () => {
                if (null != a.description && '' !== a.description)
                    return (0, r.jsx)(E.xJW, {
                        faded: !0,
                        title: ea.intl.string(ea.t.GfRGra),
                        children: (0, r.jsx)(E.R94, { children: a.description })
                    });
            },
            b = (0, x.Z)({
                id: a.id,
                label: ea.intl.string(ea.t['+NP/b2'])
            }),
            y = i.useMemo(() => {
                if (null != b)
                    return (e) => {
                        (0, O.jW)(e, async () => {
                            let { default: e } = await n.e('78040').then(n.bind(n, 599382));
                            return (t) => (0, r.jsx)(e, ef(eu({}, t), { items: [b] }));
                        });
                    };
            }, [b]),
            v = () => {
                let e = Y.ZP.getApplicationIconURL({
                        id: a.id,
                        icon: a.icon
                    }),
                    t =
                        null != e
                            ? (0, r.jsx)(L.Z.Child, {
                                  className: eo.appAvatar,
                                  grow: 0,
                                  children: (0, r.jsx)('img', {
                                      src: e,
                                      alt: ''
                                  })
                              })
                            : null,
                    n = new Date(q.default.extractTimestamp(_)).toLocaleDateString(d);
                return (0, r.jsxs)('div', {
                    className: o()(eo.header, el.marginBottom20),
                    children: [
                        t,
                        (0, r.jsxs)('div', {
                            className: eo.headerTextContainer,
                            children: [
                                (0, r.jsx)(E.X6q, {
                                    variant: 'text-sm/semibold',
                                    className: eo.headerText,
                                    children: a.name
                                }),
                                (0, r.jsx)(E.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-normal',
                                    children: ea.intl.format(ea.t.yOApCA, { date: n })
                                })
                            ]
                        }),
                        h
                            ? (0, r.jsx)(E.zxk, {
                                  color: E.Ttl.TRANSPARENT,
                                  look: E.iLD.LINK,
                                  size: E.PhG.SMALL,
                                  className: eo.reportButton,
                                  onClick: () => em(p, l, s),
                                  children: ea.intl.string(ea.t['+78Pfn'])
                              })
                            : null,
                        (0, r.jsx)(E.zxk, {
                            color: E.Ttl.RED,
                            look: E.iLD.OUTLINED,
                            size: E.PhG.SMALL,
                            onClick: () => eg(a, c),
                            children: ea.intl.string(ea.t.xUqheH)
                        })
                    ]
                });
            },
            I = (0, ee.O)(a.id);
        return (0, r.jsx)(E.Zbd, {
            className: o()(eo.authedApp, el.marginBottom8),
            outline: !0,
            onContextMenu: y,
            children: (0, r.jsxs)(E.y5t, {
                component: v(),
                children: [
                    g(),
                    (0, r.jsx)(eE, {
                        application: a,
                        isVisible: !0
                    }),
                    m(),
                    I &&
                        (0, r.jsx)(ep, {
                            application: a,
                            className: eo.twoWayWarningV1
                        })
                ]
            })
        });
    },
    ey = (e) => {
        let { scopes: t, application: a, selectedChannelId: s, selectedGuildId: l, onDelete: c, disclosures: d, locale: p, id: g } = e,
            b = a.id,
            O = i.useMemo(() => G.ZP.createFromServer(a), [a]),
            I = (0, W.yE)(O.flags, er.udG.EMBEDDED),
            S = (0, _.e7)(
                [$.Z],
                () => {
                    var e, t, n, r;
                    return null == (r = $.Z.settings.applications) || null == (n = r.appSettings) || null == (t = n[b]) || null == (e = t.appDmSettings) ? void 0 : e.allowMobilePush;
                },
                [b]
            ),
            T = R.w.useExperiment({ location: 'oauth2_authorize' }),
            A = a.bot,
            N = (0, _.e7)([F.Z], () => F.Z.getDMFromUserId(null == A ? void 0 : A.id)),
            { appDMChannelMuteConfig: P, dmChannelMuted: D } = (0, _.cj)([H.ZP], () =>
                null == N
                    ? {
                          appDMChannelMuteConfig: null,
                          dmChannelMuted: !1
                      }
                    : {
                          appDMChannelMuteConfig: H.ZP.getChannelMuteConfig(null, N),
                          dmChannelMuted: H.ZP.isChannelMuted(null, N)
                      }
            ),
            [x, M] = i.useState(!1),
            [B, V] = i.useState(!1),
            Z = k.Z.useExperiment({ location: 'Authorized Applications' }, { autoTrackExposure: !0 }).enabled,
            K = () => {
                let e = [];
                for (let n of t) e.push(...(0, U.CI)(n, t)), n === f.x.APPLICATIONS_COMMANDS && e.push(ea.intl.string(ea.t.Ls2XRk));
                if (e.length > 0 || (null != d && d.length > 0))
                    return (0, r.jsx)(E.zF9, {
                        className: eo.appDetailsSection,
                        isExpanded: B,
                        collapsibleContent: (0, r.jsxs)('ul', {
                            className: eo.appDetailsContent,
                            children: [
                                e.map((e, t) =>
                                    (0, r.jsxs)(
                                        'li',
                                        {
                                            className: eo.permission,
                                            children: [(0, r.jsx)('i', { className: eo.permissionCheckmark }), (0, r.jsx)(E.R94, { children: e })]
                                        },
                                        t
                                    )
                                ),
                                null == d
                                    ? void 0
                                    : d.map((t, n) => {
                                          let i = (0, w.PM)(t);
                                          return null != i
                                              ? (0, r.jsxs)(
                                                    'li',
                                                    {
                                                        className: eo.permission,
                                                        children: [(0, r.jsx)(eh, { disclosure: t }), (0, r.jsx)(E.R94, { children: i })]
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
                                        className: eo.appDetailsSectionHeader,
                                        onClick: (e) => {
                                            V(!B), n(e);
                                        },
                                        children: [
                                            (0, r.jsx)(E.X6q, {
                                                variant: 'heading-sm/medium',
                                                color: 'header-primary',
                                                children: ea.intl.string(ea.t.xrmhRU)
                                            }),
                                            B
                                                ? (0, r.jsx)(E.CJ0, {
                                                      size: 'md',
                                                      color: E.TVs.colors.INTERACTIVE_NORMAL
                                                  })
                                                : (0, r.jsx)(E.Fbu, {
                                                      size: 'md',
                                                      color: E.TVs.colors.INTERACTIVE_NORMAL
                                                  })
                                        ]
                                    }),
                                    !B &&
                                        (0, r.jsx)(E.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-secondary',
                                            className: o()(eo.appDetailsContent, eo.permissionsDescription),
                                            children: ea.intl.format(ea.t.nZOS8v, { numPermissions: e.length })
                                        })
                                ]
                            });
                        }
                    });
            },
            X = i.useMemo(() => {
                if (null != a.description && '' !== a.description)
                    return (0, r.jsx)(E.Text, {
                        className: es.markup,
                        variant: 'text-sm/normal',
                        color: 'text-normal',
                        children: (0, j.parseBioReact)(a.description)
                    });
            }, [a.description]),
            Q = () => {
                let e = null != a.description && '' !== a.description,
                    t = null != a.terms_of_service_url || null != a.privacy_policy_url;
                return e || t
                    ? (0, r.jsx)(E.zF9, {
                          className: eo.appDetailsSection,
                          isExpanded: x,
                          collapsibleContent: (0, r.jsxs)('div', {
                              className: eo.appDetailsContent,
                              children: [
                                  e && X,
                                  t &&
                                      (0, r.jsx)(eE, {
                                          application: a,
                                          isVisible: x
                                      })
                              ]
                          }),
                          children: (e) => {
                              let { onClick: t } = e;
                              return (0, r.jsxs)(m.P, {
                                  className: eo.appDetailsSectionHeader,
                                  onClick: (e) => {
                                      M(!x), t(e);
                                  },
                                  children: [
                                      (0, r.jsx)(E.X6q, {
                                          variant: 'heading-sm/medium',
                                          color: 'header-primary',
                                          children: ea.intl.string(ea.t.fcYgiY)
                                      }),
                                      x
                                          ? (0, r.jsx)(E.CJ0, {
                                                size: 'md',
                                                color: E.TVs.colors.INTERACTIVE_NORMAL
                                            })
                                          : (0, r.jsx)(E.Fbu, {
                                                size: 'md',
                                                color: E.TVs.colors.INTERACTIVE_NORMAL
                                            })
                                  ]
                              });
                          }
                      })
                    : null;
            },
            et = () => {
                let e = Y.ZP.getApplicationIconURL({
                        id: a.id,
                        icon: a.icon
                    }),
                    t =
                        null != e
                            ? (0, r.jsx)(L.Z.Child, {
                                  className: eo.appAvatarV2,
                                  grow: 0,
                                  children: (0, r.jsx)('img', {
                                      src: e,
                                      alt: ''
                                  })
                              })
                            : null,
                    n = new Date(q.default.extractTimestamp(g)).toLocaleDateString(p);
                return (0, r.jsxs)('div', {
                    className: eo.headerV2,
                    children: [
                        t,
                        (0, r.jsxs)('div', {
                            className: eo.headerTextContainerV2,
                            children: [
                                (0, r.jsx)(E.X6q, {
                                    variant: 'heading-md/semibold',
                                    className: o()(eo.headerText, el.marginBottom4),
                                    children: a.name
                                }),
                                (0, r.jsx)(E.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-normal',
                                    children: ea.intl.format(ea.t.yOApCA, { date: n })
                                })
                            ]
                        }),
                        (0, r.jsx)(en.Z, {
                            appRecord: O,
                            showAppReportingOption: Z,
                            selectedGuildId: l,
                            selectedChannelId: s
                        })
                    ]
                });
            },
            ec = (e) => {
                J.hW.updateAsync(
                    'applications',
                    (t) => {
                        b in t.appSettings ? (null == t.appSettings[b].appDmSettings ? (t.appSettings[b].appDmSettings = h.c$.create({ allowMobilePush: e })) : (t.appSettings[b].appDmSettings.allowMobilePush = e)) : (t.appSettings[b] = h.dp.create({ appDmSettings: h.c$.create({ allowMobilePush: e }) }));
                    },
                    J.fy.INFREQUENT_USER_ACTION
                ),
                    C.ZP.trackWithMetadata(er.rMx.NOTIFICATION_SETTINGS_UPDATED, {
                        update_type: ei.I.AUTHORIZED_APP_DM_PUSH_NOTIFICATION,
                        application_id: a.id,
                        label: e ? z.ZB.Unmuted : z.ZB.Muted
                    });
            },
            ed = i.useCallback(async () => {
                u()(null != A, 'dm channel mute setting requires having a bot user');
                let e = N;
                null == e && (e = await y.Z.ensurePrivateChannel(A.id)),
                    D
                        ? v.Z.updateAppDMOverrideSettings(null, e, a.id, { muted: !1 }, z.ZB.Unmuted)
                        : (0, E.ZDy)(async () => {
                              let { default: t } = await n.e('8246').then(n.bind(n, 540679));
                              return (n) =>
                                  (0, r.jsx)(
                                      t,
                                      eu(
                                          {
                                              channelId: e,
                                              applicationId: a.id
                                          },
                                          n
                                      )
                                  );
                          });
            }, [N, A, D, a.id]),
            ef = () =>
                T.enabled
                    ? (0, r.jsxs)('div', {
                          className: eo.directMessagesSection,
                          children: [
                              (0, r.jsx)(E.X6q, {
                                  variant: 'heading-sm/medium',
                                  color: 'header-primary',
                                  className: eo.dmSettingsHeader,
                                  children: ea.intl.string(ea.t.NaZyYG)
                              }),
                              null != A
                                  ? (0, r.jsx)(E.j7V, {
                                        hideBorder: !0,
                                        onChange: ed,
                                        className: eo.dmSettingsSwitch,
                                        note:
                                            (null == P ? void 0 : P.end_time) != null
                                                ? ea.intl.format(ea.t.j7h4AA, {
                                                      endTime: new Date(P.end_time).toLocaleString(ea.intl.currentLocale, {
                                                          month: 'numeric',
                                                          day: 'numeric',
                                                          hour: 'numeric',
                                                          minute: '2-digit'
                                                      })
                                                  })
                                                : void 0,
                                        value: D,
                                        children: (0, r.jsx)(E.Text, {
                                            variant: 'text-sm/medium',
                                            children: ea.intl.string(ea.t.NkwaBg)
                                        })
                                    })
                                  : null,
                              I && T.enabled
                                  ? (0, r.jsx)(E.j7V, {
                                        hideBorder: !0,
                                        onChange: ec,
                                        className: eo.dmSettingsSwitch,
                                        note: ea.intl.string(ea.t.hw1nKS),
                                        value: S,
                                        disabled: D,
                                        children: (0, r.jsx)(E.Text, {
                                            variant: 'text-sm/medium',
                                            children: ea.intl.string(ea.t['Pkw//v'])
                                        })
                                    })
                                  : null
                          ]
                      })
                    : null,
            e_ = (0, ee.O)(a.id),
            em = () =>
                (0, r.jsxs)('div', {
                    className: eo.footer,
                    children: [
                        e_ &&
                            (0, r.jsx)(ep, {
                                application: a,
                                className: eo.twoWayWarningV2
                            }),
                        (0, r.jsx)('div', {
                            className: eo.deauthorizeButton,
                            children: (0, r.jsx)(E.zxk, {
                                color: E.Ttl.RED,
                                look: E.iLD.OUTLINED,
                                size: E.PhG.SMALL,
                                onClick: () => eg(a, c),
                                children: ea.intl.string(ea.t.xUqheH)
                            })
                        })
                    ]
                });
        return (0, r.jsx)('div', {
            className: eo.authedAppV2,
            children: (0, r.jsx)(E.y5t, {
                component: et(),
                children: (0, r.jsxs)('div', {
                    className: eo.appDetailsContainer,
                    children: [Q(), K(), ef(), em()]
                })
            })
        });
    },
    eO = (0, d.U)(() => ({ searchQuery: '' })),
    ev = () => {
        let e = (0, _.e7)([Z.Z], () => Z.Z.hidePersonalInformation),
            t = (0, _.e7)([B.Z], () => B.Z.getApps()),
            a = (0, _.e7)([X.default], () => X.default.locale),
            o = (0, _.e7)([A.ZP], () => A.ZP.getSelfEmbeddedActivities()),
            s = (0, _.e7)([F.Z, V.Z], () => F.Z.getChannel(V.Z.getChannelId())),
            c = null == s ? void 0 : s.getGuildId(),
            u = P.G.useExperiment({ location: 'UserSettingsAuthedApps' }, { autoTrackExposure: !0 }).enabled,
            d = (0, g.C)('user-settings-authed-apps');
        i.useEffect(() => {
            b.Z.fetch();
        }, []),
            i.useEffect(
                () => () => {
                    eO.setState({ searchQuery: '' });
                },
                []
            );
        let f = (e) => {
                let { id: t, application: n } = e;
                b.Z.delete(t);
                let r = o.get(n.id);
                null != r &&
                    N.Z.leaveActivity({
                        location: r.location,
                        applicationId: n.id,
                        showFeedback: !1
                    });
            },
            p = eO((e) => e.searchQuery),
            h = (e) => eO.setState({ searchQuery: e }),
            m = (e) => {
                h(e);
            },
            y = () => {
                h('');
            },
            O = () =>
                (0, r.jsx)('div', {
                    className: eo.searchContainer,
                    children: (0, r.jsx)(E.E1j, {
                        size: E.E1j.Sizes.MEDIUM,
                        query: p,
                        onChange: m,
                        onClear: y,
                        placeholder: ea.intl.string(ea.t['5prvKS']),
                        'aria-label': ea.intl.string(ea.t['5prvKS'])
                    })
                }),
            v = (e, t) =>
                (0, r.jsxs)(e_, {
                    className: eo.__invalid_marginTop20,
                    children: [
                        !d &&
                            (0, r.jsx)(E.oxh, {
                                darkSrc: n(701972),
                                lightSrc: n(818658),
                                width: 380,
                                height: 282
                            }),
                        (0, r.jsx)(E.OZU, {
                            note: e,
                            children: t
                        })
                    ]
                }),
            I = i.useMemo(() => {
                let e = p.trim().toLowerCase();
                return '' === e || null == t ? t : t.length < 100 ? t.filter((t) => l()(e, t.application.name.toLowerCase())) : t.filter((t) => t.application.name.toLowerCase().includes(e));
            }, [t, p]),
            T = () =>
                null == t || null == I
                    ? (0, r.jsx)(E.$jN, {
                          className: el.marginTop20,
                          type: E.$jN.Type.SPINNING_CIRCLE
                      })
                    : 0 === t.length
                      ? v(ea.intl.string(ea.t.CpPv5u), ea.intl.string(ea.t['E+SM6e']))
                      : 0 === I.length
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [O(), v(null, ea.intl.string(ea.t.EVWFNj))]
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  O(),
                                  I.sort((e, t) => Number(t.id) - Number(e.id)).map((e) =>
                                      u
                                          ? (0, r.jsx)(
                                                ey,
                                                eu(
                                                    {
                                                        locale: a,
                                                        onDelete: () => f(e),
                                                        selectedChannelId: null == s ? void 0 : s.id,
                                                        selectedGuildId: null != c ? c : void 0
                                                    },
                                                    e
                                                ),
                                                e.id
                                            )
                                          : (0, r.jsx)(
                                                eb,
                                                eu(
                                                    {
                                                        locale: a,
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
            ? (0, r.jsx)(S.Z, {})
            : (0, r.jsx)(E.hjN, {
                  tag: E.RB0.H1,
                  title: ea.intl.string(ea.t['f6kk+v']),
                  children: (0, r.jsx)(E.y5t, {
                      component: (0, r.jsx)(E.ToO, {
                          className: el.marginBottom40,
                          type: E.sje.PRIMARY,
                          title: ea.intl.string(ea.t.HU3RFx),
                          body: ea.intl.string(ea.t.Nu5Yi4)
                      }),
                      children: T()
                  })
              });
    };
