n.d(t, {
    J: () => ev,
    Z: () => eO
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
    N = n(367907),
    C = n(162685),
    R = n(445446),
    P = n(979200),
    w = n(870822),
    D = n(600164),
    L = n(299206),
    x = n(726721),
    M = n(726521),
    k = n(240991),
    j = n(713938),
    U = n(973616),
    G = n(881998),
    B = n(592125),
    V = n(944486),
    F = n(246946),
    Z = n(9156),
    H = n(768581),
    Y = n(585483),
    W = n(630388),
    K = n(49012),
    z = n(621600),
    q = n(709054),
    Q = n(706454),
    X = n(210887),
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
let e_ = _.ZP.connectStores([X.Z], () => ({ theme: X.Z.theme }))(g.ubH);
function ep(e) {
    let { application: t, className: n } = e;
    return (0, r.jsxs)('div', {
        className: o()(eo.twoWayWarning, n),
        children: [
            (0, r.jsx)(g.d3s, {
                size: 'md',
                color: 'currentColor',
                className: eo.twoWayWarningIcon
            }),
            (0, r.jsx)(g.Text, {
                color: 'text-normal',
                variant: 'text-sm/medium',
                children: ea.intl.format(ea.t.jUhnwc, {
                    applicationName: t.name,
                    onConnectionPress: () => O.Z.setSection(er.jXE.SETTINGS_CONNECTIONS)
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
                    return (0, r.jsx)(g.enf, {
                        size: 'md',
                        color: 'currentColor',
                        className: eo.disclosureIcon
                    });
                case p.u$.DISPLAYS_ADVERTISEMENTS:
                    return (0, r.jsx)(g.FLu, { className: eo.disclosureIcon });
                default:
                    return (0, r.jsx)(g.d3s, { className: eo.disclosureIcon });
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
            (0, w.Z)(e) &&
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
            (0, g.h7j)((e) =>
                (0, r.jsx)(
                    S.default,
                    eu(
                        {
                            title: n,
                            body: i,
                            confirmText: ea.intl.string(ea.t.xUqheH),
                            confirmColor: g.Ttl.RED,
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
                                    (0, r.jsx)(g.R94, {
                                        className: eo.link,
                                        children: ea.intl.string(ea.t['lx+GeX'])
                                    }),
                                    (0, r.jsx)(g.Gr1, {
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
                                            (0, r.jsx)(g.R94, {
                                                className: eo.link,
                                                children: ea.intl.string(ea.t.okSwq6)
                                            }),
                                            (0, r.jsx)(g.Gr1, {
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
            p = i.useMemo(() => U.ZP.createFromServer(a), [a]),
            h = x.Z.useExperiment({ location: 'Authorized Applications' }, { autoTrackExposure: !0 }).enabled,
            m = () => {
                let e = [];
                for (let n of t) e.push(...(0, j.CI)(n, t)), n === f.x.APPLICATIONS_COMMANDS && e.push(ea.intl.string(ea.t.Ls2XRk));
                if (e.length > 0 || (null != u && u.length > 0))
                    return (0, r.jsx)(g.xJW, {
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
                                            children: [(0, r.jsx)('i', { className: eo.permissionCheckmark }), (0, r.jsx)(g.R94, { children: e })]
                                        },
                                        t
                                    )
                                ),
                                null == u
                                    ? void 0
                                    : u.map((t, n) => {
                                          let i = (0, P.PM)(t);
                                          return null != i
                                              ? (0, r.jsxs)(
                                                    'li',
                                                    {
                                                        className: eo.permission,
                                                        children: [(0, r.jsx)(eh, { disclosure: t }), (0, r.jsx)(g.R94, { children: i })]
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
                        title: ea.intl.string(ea.t.GfRGra),
                        children: (0, r.jsx)(g.R94, { children: a.description })
                    });
            },
            b = (0, L.Z)({
                id: a.id,
                label: ea.intl.string(ea.t['+NP/b2'])
            }),
            v = i.useMemo(() => {
                if (null != b)
                    return (e) => {
                        (0, y.jW)(e, async () => {
                            let { default: e } = await n.e('78040').then(n.bind(n, 599382));
                            return (t) => (0, r.jsx)(e, ef(eu({}, t), { items: [b] }));
                        });
                    };
            }, [b]),
            O = () => {
                let e = H.ZP.getApplicationIconURL({
                        id: a.id,
                        icon: a.icon
                    }),
                    t =
                        null != e
                            ? (0, r.jsx)(D.Z.Child, {
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
                                (0, r.jsx)(g.X6q, {
                                    variant: 'text-sm/semibold',
                                    className: eo.headerText,
                                    children: a.name
                                }),
                                (0, r.jsx)(g.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-normal',
                                    children: ea.intl.format(ea.t.yOApCA, { date: n })
                                })
                            ]
                        }),
                        h
                            ? (0, r.jsx)(g.zxk, {
                                  color: g.Ttl.TRANSPARENT,
                                  look: g.iLD.LINK,
                                  size: g.PhG.SMALL,
                                  className: eo.reportButton,
                                  onClick: () => em(p, l, s),
                                  children: ea.intl.string(ea.t['+78Pfn'])
                              })
                            : null,
                        (0, r.jsx)(g.zxk, {
                            color: g.Ttl.RED,
                            look: g.iLD.OUTLINED,
                            size: g.PhG.SMALL,
                            onClick: () => eg(a, c),
                            children: ea.intl.string(ea.t.xUqheH)
                        })
                    ]
                });
            },
            I = (0, ee.O)(a.id);
        return (0, r.jsx)(g.Zbd, {
            className: o()(eo.authedApp, el.marginBottom8),
            outline: !0,
            onContextMenu: v,
            children: (0, r.jsxs)(g.y5t, {
                component: O(),
                children: [
                    E(),
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
        let { scopes: t, application: a, selectedChannelId: s, selectedGuildId: l, onDelete: c, disclosures: d, locale: p, id: E } = e,
            y = a.id,
            O = i.useMemo(() => U.ZP.createFromServer(a), [a]),
            I = (0, W.yE)(O.flags, er.udG.EMBEDDED),
            S = (0, _.e7)(
                [$.Z],
                () => {
                    var e, t, n, r;
                    return null == (r = $.Z.settings.applications) || null == (n = r.appSettings) || null == (t = n[y]) || null == (e = t.appDmSettings) ? void 0 : e.allowMobilePush;
                },
                [y]
            ),
            T = C.w.useExperiment({ location: 'oauth2_authorize' }),
            A = a.bot,
            R = (0, _.e7)([B.Z], () => B.Z.getDMFromUserId(null == A ? void 0 : A.id)),
            { appDMChannelMuteConfig: w, dmChannelMuted: L } = (0, _.cj)([Z.ZP], () =>
                null == R
                    ? {
                          appDMChannelMuteConfig: null,
                          dmChannelMuted: !1
                      }
                    : {
                          appDMChannelMuteConfig: Z.ZP.getChannelMuteConfig(null, R),
                          dmChannelMuted: Z.ZP.isChannelMuted(null, R)
                      }
            ),
            [M, G] = i.useState(!1),
            [V, F] = i.useState(!1),
            Y = x.Z.useExperiment({ location: 'Authorized Applications' }, { autoTrackExposure: !0 }).enabled,
            K = () => {
                let e = [];
                for (let n of t) e.push(...(0, j.CI)(n, t)), n === f.x.APPLICATIONS_COMMANDS && e.push(ea.intl.string(ea.t.Ls2XRk));
                if (e.length > 0 || (null != d && d.length > 0))
                    return (0, r.jsx)(g.zF9, {
                        className: eo.appDetailsSection,
                        isExpanded: V,
                        collapsibleContent: (0, r.jsxs)('ul', {
                            className: eo.appDetailsContent,
                            children: [
                                e.map((e, t) =>
                                    (0, r.jsxs)(
                                        'li',
                                        {
                                            className: eo.permission,
                                            children: [(0, r.jsx)('i', { className: eo.permissionCheckmark }), (0, r.jsx)(g.R94, { children: e })]
                                        },
                                        t
                                    )
                                ),
                                null == d
                                    ? void 0
                                    : d.map((t, n) => {
                                          let i = (0, P.PM)(t);
                                          return null != i
                                              ? (0, r.jsxs)(
                                                    'li',
                                                    {
                                                        className: eo.permission,
                                                        children: [(0, r.jsx)(eh, { disclosure: t }), (0, r.jsx)(g.R94, { children: i })]
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
                                            F(!V), n(e);
                                        },
                                        children: [
                                            (0, r.jsx)(g.X6q, {
                                                variant: 'heading-sm/medium',
                                                color: 'header-primary',
                                                children: ea.intl.string(ea.t.xrmhRU)
                                            }),
                                            V
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
                                    !V &&
                                        (0, r.jsx)(g.Text, {
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
            Q = i.useMemo(() => {
                if (null != a.description && '' !== a.description)
                    return (0, r.jsx)(g.Text, {
                        className: es.markup,
                        variant: 'text-sm/normal',
                        color: 'text-normal',
                        children: (0, k.parseBioReact)(a.description)
                    });
            }, [a.description]),
            X = () => {
                let e = null != a.description && '' !== a.description,
                    t = null != a.terms_of_service_url || null != a.privacy_policy_url;
                return e || t
                    ? (0, r.jsx)(g.zF9, {
                          className: eo.appDetailsSection,
                          isExpanded: M,
                          collapsibleContent: (0, r.jsxs)('div', {
                              className: eo.appDetailsContent,
                              children: [
                                  e && Q,
                                  t &&
                                      (0, r.jsx)(eE, {
                                          application: a,
                                          isVisible: M
                                      })
                              ]
                          }),
                          children: (e) => {
                              let { onClick: t } = e;
                              return (0, r.jsxs)(m.P, {
                                  className: eo.appDetailsSectionHeader,
                                  onClick: (e) => {
                                      G(!M), t(e);
                                  },
                                  children: [
                                      (0, r.jsx)(g.X6q, {
                                          variant: 'heading-sm/medium',
                                          color: 'header-primary',
                                          children: ea.intl.string(ea.t.fcYgiY)
                                      }),
                                      M
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
            et = () => {
                let e = H.ZP.getApplicationIconURL({
                        id: a.id,
                        icon: a.icon
                    }),
                    t =
                        null != e
                            ? (0, r.jsx)(D.Z.Child, {
                                  className: eo.appAvatarV2,
                                  grow: 0,
                                  children: (0, r.jsx)('img', {
                                      src: e,
                                      alt: ''
                                  })
                              })
                            : null,
                    n = new Date(q.default.extractTimestamp(E)).toLocaleDateString(p);
                return (0, r.jsxs)('div', {
                    className: eo.headerV2,
                    children: [
                        t,
                        (0, r.jsxs)('div', {
                            className: eo.headerTextContainerV2,
                            children: [
                                (0, r.jsx)(g.X6q, {
                                    variant: 'heading-md/semibold',
                                    className: o()(eo.headerText, el.marginBottom4),
                                    children: a.name
                                }),
                                (0, r.jsx)(g.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-normal',
                                    children: ea.intl.format(ea.t.yOApCA, { date: n })
                                })
                            ]
                        }),
                        (0, r.jsx)(en.Z, {
                            appRecord: O,
                            showAppReportingOption: Y,
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
                        y in t.appSettings ? (null == t.appSettings[y].appDmSettings ? (t.appSettings[y].appDmSettings = h.c$.create({ allowMobilePush: e })) : (t.appSettings[y].appDmSettings.allowMobilePush = e)) : (t.appSettings[y] = h.dp.create({ appDmSettings: h.c$.create({ allowMobilePush: e }) }));
                    },
                    J.fy.INFREQUENT_USER_ACTION
                ),
                    N.ZP.trackWithMetadata(er.rMx.NOTIFICATION_SETTINGS_UPDATED, {
                        update_type: ei.Ib.AUTHORIZED_APP_DM_PUSH_NOTIFICATION,
                        application_id: a.id,
                        label: e ? z.ZB.Unmuted : z.ZB.Muted
                    });
            },
            ed = i.useCallback(async () => {
                u()(null != A, 'dm channel mute setting requires having a bot user');
                let e = R;
                null == e && (e = await b.Z.ensurePrivateChannel(A.id)),
                    L
                        ? v.Z.updateAppDMOverrideSettings(null, e, a.id, { muted: !1 }, z.ZB.Unmuted)
                        : (0, g.ZDy)(async () => {
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
            }, [R, A, L, a.id]),
            ef = () =>
                T.enabled
                    ? (0, r.jsxs)('div', {
                          className: eo.directMessagesSection,
                          children: [
                              (0, r.jsx)(g.X6q, {
                                  variant: 'heading-sm/medium',
                                  color: 'header-primary',
                                  className: eo.dmSettingsHeader,
                                  children: ea.intl.string(ea.t.NaZyYG)
                              }),
                              null != A
                                  ? (0, r.jsx)(g.j7V, {
                                        hideBorder: !0,
                                        onChange: ed,
                                        className: eo.dmSettingsSwitch,
                                        note:
                                            (null == w ? void 0 : w.end_time) != null
                                                ? ea.intl.format(ea.t.j7h4AA, {
                                                      endTime: new Date(w.end_time).toLocaleString(ea.intl.currentLocale, {
                                                          month: 'numeric',
                                                          day: 'numeric',
                                                          hour: 'numeric',
                                                          minute: '2-digit'
                                                      })
                                                  })
                                                : void 0,
                                        value: L,
                                        children: (0, r.jsx)(g.Text, {
                                            variant: 'text-sm/medium',
                                            children: ea.intl.string(ea.t.NkwaBg)
                                        })
                                    })
                                  : null,
                              I && T.enabled
                                  ? (0, r.jsx)(g.j7V, {
                                        hideBorder: !0,
                                        onChange: ec,
                                        className: eo.dmSettingsSwitch,
                                        note: ea.intl.string(ea.t.hw1nKS),
                                        value: S,
                                        disabled: L,
                                        children: (0, r.jsx)(g.Text, {
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
                            children: (0, r.jsx)(g.zxk, {
                                color: g.Ttl.RED,
                                look: g.iLD.OUTLINED,
                                size: g.PhG.SMALL,
                                onClick: () => eg(a, c),
                                children: ea.intl.string(ea.t.xUqheH)
                            })
                        })
                    ]
                });
        return (0, r.jsx)('div', {
            className: eo.authedAppV2,
            children: (0, r.jsx)(g.y5t, {
                component: et(),
                children: (0, r.jsxs)('div', {
                    className: eo.appDetailsContainer,
                    children: [X(), K(), ef(), em()]
                })
            })
        });
    },
    ev = (0, d.U)(() => ({ searchQuery: '' })),
    eO = () => {
        let e = (0, _.e7)([F.Z], () => F.Z.hidePersonalInformation),
            t = (0, _.e7)([G.Z], () => G.Z.getApps()),
            a = (0, _.e7)([Q.default], () => Q.default.locale),
            o = (0, _.e7)([T.ZP], () => T.ZP.getSelfEmbeddedActivities()),
            s = (0, _.e7)([B.Z, V.Z], () => B.Z.getChannel(V.Z.getChannelId())),
            c = null == s ? void 0 : s.getGuildId(),
            u = R.G.useExperiment({ location: 'UserSettingsAuthedApps' }, { autoTrackExposure: !0 }).enabled;
        i.useEffect(() => {
            E.Z.fetch();
        }, []),
            i.useEffect(
                () => () => {
                    ev.setState({ searchQuery: '' });
                },
                []
            );
        let d = (e) => {
                let { id: t, application: n } = e;
                E.Z.delete(t), Y.S.safeDispatch(er.CkL.HIDE_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, { applicationId: n.id });
                let r = o.get(n.id);
                null != r &&
                    A.Z.leaveActivity({
                        location: r.location,
                        applicationId: n.id,
                        showFeedback: !1
                    });
            },
            f = ev((e) => e.searchQuery),
            p = (e) => ev.setState({ searchQuery: e }),
            h = (e) => {
                p(e);
            },
            m = () => {
                p('');
            },
            b = () =>
                (0, r.jsx)('div', {
                    className: eo.searchContainer,
                    children: (0, r.jsx)(g.E1j, {
                        size: g.E1j.Sizes.MEDIUM,
                        query: f,
                        onChange: h,
                        onClear: m,
                        placeholder: ea.intl.string(ea.t['5prvKS']),
                        'aria-label': ea.intl.string(ea.t['5prvKS'])
                    })
                }),
            y = (e, t) =>
                (0, r.jsxs)(e_, {
                    className: eo.__invalid_marginTop20,
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
                          className: el.marginTop20,
                          type: g.$jN.Type.SPINNING_CIRCLE
                      })
                    : 0 === t.length
                      ? y(ea.intl.string(ea.t.CpPv5u), ea.intl.string(ea.t['E+SM6e']))
                      : 0 === v.length
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [b(), y(null, ea.intl.string(ea.t.EVWFNj))]
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  b(),
                                  v
                                      .sort((e, t) => Number(t.id) - Number(e.id))
                                      .map((e) =>
                                          u
                                              ? (0, r.jsx)(
                                                    ey,
                                                    eu(
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
                                                    eb,
                                                    eu(
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
                  title: ea.intl.string(ea.t['f6kk+v']),
                  children: (0, r.jsx)(g.y5t, {
                      component: (0, r.jsx)(g.ToO, {
                          className: el.marginBottom40,
                          type: g.sje.PRIMARY,
                          title: ea.intl.string(ea.t.HU3RFx),
                          body: ea.intl.string(ea.t.Nu5Yi4)
                      }),
                      children: O()
                  })
              });
    };
