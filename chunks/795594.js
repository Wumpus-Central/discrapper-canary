n.d(t, {
    J: () => ey,
    Z: () => ev
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
    er = n(468788),
    ei = n(388032),
    ea = n(989604),
    eo = n(73433),
    es = n(20493);
function el(e, t, n) {
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
function ec(e) {
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
                el(e, t, n[t]);
            });
    }
    return e;
}
function eu(e, t) {
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
function ed(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eu(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ef = _.ZP.connectStores([Q.Z], () => ({ theme: Q.Z.theme }))(g.ubH);
function e_(e) {
    let { application: t, className: n } = e;
    return (0, r.jsxs)('div', {
        className: o()(ea.twoWayWarning, n),
        children: [
            (0, r.jsx)(g.d3s, {
                size: 'md',
                color: 'currentColor',
                className: ea.twoWayWarningIcon
            }),
            (0, r.jsx)(g.Text, {
                color: 'text-normal',
                variant: 'text-sm/medium',
                children: ei.intl.format(ei.t.jUhnwc, {
                    applicationName: t.name,
                    onConnectionPress: () => O.Z.setSection(en.jXE.SETTINGS_CONNECTIONS)
                })
            })
        ]
    });
}
let ep = (e) => {
        let { disclosure: t } = e;
        return i.useMemo(() => {
            switch (t) {
                case p.u$.IP_LOCATION:
                    return (0, r.jsx)(g.enf, {
                        size: 'md',
                        color: 'currentColor',
                        className: ea.disclosureIcon
                    });
                case p.u$.DISPLAYS_ADVERTISEMENTS:
                    return (0, r.jsx)(g.FLu, { className: ea.disclosureIcon });
                default:
                    return (0, r.jsx)(g.d3s, { className: ea.disclosureIcon });
            }
        }, [t]);
    },
    eh = (e, t, n) => {
        (0, M.uu)({
            application: e,
            entrypoint: 'authorized_apps_settings',
            contextualGuildId: t,
            contextualChannelId: n
        });
    },
    em = (e, t) => {
        let n = ei.intl.string(ei.t.DT39Aw),
            i = ei.intl.formatToPlainString(ei.t.QWGvxM, { applicationName: e.name });
        return (
            (0, w.Z)(e) &&
                ((n = ei.intl.formatToPlainString(ei.t['paC+UV'], { applicationName: e.name })),
                (i = (0, r.jsxs)(r.Fragment, {
                    children: [
                        ei.intl.formatToPlainString(ei.t.inM1Ym, { applicationName: e.name }),
                        (0, r.jsx)(ee.Z, {
                            look: ee.z.WARNING,
                            className: ea.infoBox,
                            children: ei.intl.string(ei.t.LY35Z2)
                        })
                    ]
                }))),
            (0, $.Z)(e.id) &&
                (i = (0, r.jsxs)(r.Fragment, {
                    children: [
                        i,
                        (0, r.jsx)(ee.Z, {
                            className: ea.infoBox,
                            children: ei.intl.format(ei.t.KRnERk, { applicationName: e.name })
                        })
                    ]
                })),
            (0, g.h7j)((e) =>
                (0, r.jsx)(
                    S.default,
                    ec(
                        {
                            title: n,
                            body: i,
                            confirmText: ei.intl.string(ei.t.xUqheH),
                            confirmColor: g.Ttl.RED,
                            cancelText: ei.intl.string(ei.t['ETE/oK']),
                            onConfirm: t
                        },
                        e
                    )
                )
            )
        );
    },
    eg = (e) => {
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
                  className: ea.tosPrivacy,
                  children: [
                      null != t.terms_of_service_url
                          ? (0, r.jsxs)(m.P, {
                                tag: 'a',
                                onClick: i,
                                className: ea.tos,
                                tabIndex: n ? 0 : -1,
                                children: [
                                    (0, r.jsx)(g.R94, {
                                        className: ea.link,
                                        children: ei.intl.string(ei.t['lx+GeX'])
                                    }),
                                    (0, r.jsx)(g.Gr1, {
                                        className: ea.externalLinkIcon,
                                        color: 'var(--text-link)'
                                    })
                                ]
                            })
                          : null,
                      null != t.privacy_policy_url
                          ? (0, r.jsxs)('div', {
                                className: ea.privacy,
                                children: [
                                    null != t.terms_of_service_url ? (0, r.jsx)('div', { className: ea.divider }) : null,
                                    (0, r.jsxs)(m.P, {
                                        tag: 'a',
                                        onClick: a,
                                        className: ea.privacy,
                                        tabIndex: n ? 0 : -1,
                                        children: [
                                            (0, r.jsx)(g.R94, {
                                                className: ea.link,
                                                children: ei.intl.string(ei.t.okSwq6)
                                            }),
                                            (0, r.jsx)(g.Gr1, {
                                                className: ea.externalLinkIcon,
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
    eE = (e) => {
        let { scopes: t, application: a, selectedChannelId: s, selectedGuildId: l, onDelete: c, disclosures: u, locale: d, id: _ } = e,
            p = i.useMemo(() => U.ZP.createFromServer(a), [a]),
            h = x.Z.useExperiment({ location: 'Authorized Applications' }, { autoTrackExposure: !0 }).enabled,
            m = () => {
                let e = [];
                for (let n of t) e.push(...(0, j.CI)(n, t)), n === f.x.APPLICATIONS_COMMANDS && e.push(ei.intl.string(ei.t.Ls2XRk));
                if (e.length > 0 || (null != u && u.length > 0))
                    return (0, r.jsx)(g.xJW, {
                        faded: !0,
                        title: ei.intl.string(ei.t.xrmhRU),
                        className: es.marginTop20,
                        children: (0, r.jsxs)('ul', {
                            children: [
                                e.map((e, t) =>
                                    (0, r.jsxs)(
                                        'li',
                                        {
                                            className: ea.permission,
                                            children: [(0, r.jsx)('i', { className: ea.permissionCheckmark }), (0, r.jsx)(g.R94, { children: e })]
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
                                                        className: ea.permission,
                                                        children: [(0, r.jsx)(ep, { disclosure: t }), (0, r.jsx)(g.R94, { children: i })]
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
                        title: ei.intl.string(ei.t.GfRGra),
                        children: (0, r.jsx)(g.R94, { children: a.description })
                    });
            },
            b = (0, L.Z)({
                id: a.id,
                label: ei.intl.string(ei.t['+NP/b2'])
            }),
            v = i.useMemo(() => {
                if (null != b)
                    return (e) => {
                        (0, y.jW)(e, async () => {
                            let { default: e } = await n.e('78040').then(n.bind(n, 599382));
                            return (t) => (0, r.jsx)(e, ed(ec({}, t), { items: [b] }));
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
                                  className: ea.appAvatar,
                                  grow: 0,
                                  children: (0, r.jsx)('img', {
                                      src: e,
                                      alt: ''
                                  })
                              })
                            : null,
                    n = new Date(z.default.extractTimestamp(_)).toLocaleDateString(d);
                return (0, r.jsxs)('div', {
                    className: o()(ea.header, es.marginBottom20),
                    children: [
                        t,
                        (0, r.jsxs)('div', {
                            className: ea.headerTextContainer,
                            children: [
                                (0, r.jsx)(g.X6q, {
                                    variant: 'text-sm/semibold',
                                    className: ea.headerText,
                                    children: a.name
                                }),
                                (0, r.jsx)(g.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-normal',
                                    children: ei.intl.format(ei.t.yOApCA, { date: n })
                                })
                            ]
                        }),
                        h
                            ? (0, r.jsx)(g.zxk, {
                                  color: g.Ttl.TRANSPARENT,
                                  look: g.iLD.LINK,
                                  size: g.PhG.SMALL,
                                  className: ea.reportButton,
                                  onClick: () => eh(p, l, s),
                                  children: ei.intl.string(ei.t['+78Pfn'])
                              })
                            : null,
                        (0, r.jsx)(g.zxk, {
                            color: g.Ttl.RED,
                            look: g.iLD.OUTLINED,
                            size: g.PhG.SMALL,
                            onClick: () => em(a, c),
                            children: ei.intl.string(ei.t.xUqheH)
                        })
                    ]
                });
            },
            I = (0, $.O)(a.id);
        return (0, r.jsx)(g.Zbd, {
            className: o()(ea.authedApp, es.marginBottom8),
            outline: !0,
            onContextMenu: v,
            children: (0, r.jsxs)(g.y5t, {
                component: O(),
                children: [
                    E(),
                    (0, r.jsx)(eg, {
                        application: a,
                        isVisible: !0
                    }),
                    m(),
                    I &&
                        (0, r.jsx)(e_, {
                            application: a,
                            className: ea.twoWayWarningV1
                        })
                ]
            })
        });
    },
    eb = (e) => {
        let { scopes: t, application: a, selectedChannelId: s, selectedGuildId: l, onDelete: c, disclosures: d, locale: p, id: E } = e,
            y = a.id,
            O = i.useMemo(() => U.ZP.createFromServer(a), [a]),
            I = (0, Y.yE)(O.flags, en.udG.EMBEDDED),
            S = (0, _.e7)(
                [J.Z],
                () => {
                    var e, t, n, r;
                    return null == (r = J.Z.settings.applications) || null == (n = r.appSettings) || null == (t = n[y]) || null == (e = t.appDmSettings) ? void 0 : e.allowMobilePush;
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
            W = x.Z.useExperiment({ location: 'Authorized Applications' }, { autoTrackExposure: !0 }).enabled,
            q = () => {
                let e = [];
                for (let n of t) e.push(...(0, j.CI)(n, t)), n === f.x.APPLICATIONS_COMMANDS && e.push(ei.intl.string(ei.t.Ls2XRk));
                if (e.length > 0 || (null != d && d.length > 0))
                    return (0, r.jsx)(g.zF9, {
                        className: ea.appDetailsSection,
                        isExpanded: V,
                        collapsibleContent: (0, r.jsxs)('ul', {
                            className: ea.appDetailsContent,
                            children: [
                                e.map((e, t) =>
                                    (0, r.jsxs)(
                                        'li',
                                        {
                                            className: ea.permission,
                                            children: [(0, r.jsx)('i', { className: ea.permissionCheckmark }), (0, r.jsx)(g.R94, { children: e })]
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
                                                        className: ea.permission,
                                                        children: [(0, r.jsx)(ep, { disclosure: t }), (0, r.jsx)(g.R94, { children: i })]
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
                                        className: ea.appDetailsSectionHeader,
                                        onClick: (e) => {
                                            F(!V), n(e);
                                        },
                                        children: [
                                            (0, r.jsx)(g.X6q, {
                                                variant: 'heading-sm/medium',
                                                color: 'header-primary',
                                                children: ei.intl.string(ei.t.xrmhRU)
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
                                            className: o()(ea.appDetailsContent, ea.permissionsDescription),
                                            children: ei.intl.format(ei.t.nZOS8v, { numPermissions: e.length })
                                        })
                                ]
                            });
                        }
                    });
            },
            Q = i.useMemo(() => {
                if (null != a.description && '' !== a.description)
                    return (0, r.jsx)(g.Text, {
                        className: eo.markup,
                        variant: 'text-sm/normal',
                        color: 'text-normal',
                        children: (0, k.parseBioReact)(a.description)
                    });
            }, [a.description]),
            ee = () => {
                let e = null != a.description && '' !== a.description,
                    t = null != a.terms_of_service_url || null != a.privacy_policy_url;
                return e || t
                    ? (0, r.jsx)(g.zF9, {
                          className: ea.appDetailsSection,
                          isExpanded: M,
                          collapsibleContent: (0, r.jsxs)('div', {
                              className: ea.appDetailsContent,
                              children: [
                                  e && Q,
                                  t &&
                                      (0, r.jsx)(eg, {
                                          application: a,
                                          isVisible: M
                                      })
                              ]
                          }),
                          children: (e) => {
                              let { onClick: t } = e;
                              return (0, r.jsxs)(m.P, {
                                  className: ea.appDetailsSectionHeader,
                                  onClick: (e) => {
                                      G(!M), t(e);
                                  },
                                  children: [
                                      (0, r.jsx)(g.X6q, {
                                          variant: 'heading-sm/medium',
                                          color: 'header-primary',
                                          children: ei.intl.string(ei.t.fcYgiY)
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
            el = () => {
                let e = H.ZP.getApplicationIconURL({
                        id: a.id,
                        icon: a.icon
                    }),
                    t =
                        null != e
                            ? (0, r.jsx)(D.Z.Child, {
                                  className: ea.appAvatarV2,
                                  grow: 0,
                                  children: (0, r.jsx)('img', {
                                      src: e,
                                      alt: ''
                                  })
                              })
                            : null,
                    n = new Date(z.default.extractTimestamp(E)).toLocaleDateString(p);
                return (0, r.jsxs)('div', {
                    className: ea.headerV2,
                    children: [
                        t,
                        (0, r.jsxs)('div', {
                            className: ea.headerTextContainerV2,
                            children: [
                                (0, r.jsx)(g.X6q, {
                                    variant: 'heading-md/semibold',
                                    className: o()(ea.headerText, es.marginBottom4),
                                    children: a.name
                                }),
                                (0, r.jsx)(g.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-normal',
                                    children: ei.intl.format(ei.t.yOApCA, { date: n })
                                })
                            ]
                        }),
                        (0, r.jsx)(et.Z, {
                            appRecord: O,
                            showAppReportingOption: W,
                            selectedGuildId: l,
                            selectedChannelId: s
                        })
                    ]
                });
            },
            eu = (e) => {
                X.hW.updateAsync(
                    'applications',
                    (t) => {
                        y in t.appSettings ? (null == t.appSettings[y].appDmSettings ? (t.appSettings[y].appDmSettings = h.c$.create({ allowMobilePush: e })) : (t.appSettings[y].appDmSettings.allowMobilePush = e)) : (t.appSettings[y] = h.dp.create({ appDmSettings: h.c$.create({ allowMobilePush: e }) }));
                    },
                    X.fy.INFREQUENT_USER_ACTION
                ),
                    N.ZP.trackWithMetadata(en.rMx.NOTIFICATION_SETTINGS_UPDATED, {
                        update_type: er.I.AUTHORIZED_APP_DM_PUSH_NOTIFICATION,
                        application_id: a.id,
                        label: e ? K.ZB.Unmuted : K.ZB.Muted
                    });
            },
            ed = i.useCallback(async () => {
                u()(null != A, 'dm channel mute setting requires having a bot user');
                let e = R;
                null == e && (e = await b.Z.ensurePrivateChannel(A.id)),
                    L
                        ? v.Z.updateAppDMOverrideSettings(null, e, a.id, { muted: !1 }, K.ZB.Unmuted)
                        : (0, g.ZDy)(async () => {
                              let { default: t } = await n.e('8246').then(n.bind(n, 540679));
                              return (n) =>
                                  (0, r.jsx)(
                                      t,
                                      ec(
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
                          className: ea.directMessagesSection,
                          children: [
                              (0, r.jsx)(g.X6q, {
                                  variant: 'heading-sm/medium',
                                  color: 'header-primary',
                                  className: ea.dmSettingsHeader,
                                  children: ei.intl.string(ei.t.NaZyYG)
                              }),
                              null != A
                                  ? (0, r.jsx)(g.j7V, {
                                        hideBorder: !0,
                                        onChange: ed,
                                        className: ea.dmSettingsSwitch,
                                        note:
                                            (null == w ? void 0 : w.end_time) != null
                                                ? ei.intl.format(ei.t.j7h4AA, {
                                                      endTime: new Date(w.end_time).toLocaleString(ei.intl.currentLocale, {
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
                                            children: ei.intl.string(ei.t.NkwaBg)
                                        })
                                    })
                                  : null,
                              I && T.enabled
                                  ? (0, r.jsx)(g.j7V, {
                                        hideBorder: !0,
                                        onChange: eu,
                                        className: ea.dmSettingsSwitch,
                                        note: ei.intl.string(ei.t.hw1nKS),
                                        value: S,
                                        disabled: L,
                                        children: (0, r.jsx)(g.Text, {
                                            variant: 'text-sm/medium',
                                            children: ei.intl.string(ei.t['Pkw//v'])
                                        })
                                    })
                                  : null
                          ]
                      })
                    : null,
            eh = (0, $.O)(a.id),
            eE = () =>
                (0, r.jsxs)('div', {
                    className: ea.footer,
                    children: [
                        eh &&
                            (0, r.jsx)(e_, {
                                application: a,
                                className: ea.twoWayWarningV2
                            }),
                        (0, r.jsx)('div', {
                            className: ea.deauthorizeButton,
                            children: (0, r.jsx)(g.zxk, {
                                color: g.Ttl.RED,
                                look: g.iLD.OUTLINED,
                                size: g.PhG.SMALL,
                                onClick: () => em(a, c),
                                children: ei.intl.string(ei.t.xUqheH)
                            })
                        })
                    ]
                });
        return (0, r.jsx)('div', {
            className: ea.authedAppV2,
            children: (0, r.jsx)(g.y5t, {
                component: el(),
                children: (0, r.jsxs)('div', {
                    className: ea.appDetailsContainer,
                    children: [ee(), q(), ef(), eE()]
                })
            })
        });
    },
    ey = (0, d.U)(() => ({ searchQuery: '' })),
    ev = () => {
        let e = (0, _.e7)([F.Z], () => F.Z.hidePersonalInformation),
            t = (0, _.e7)([G.Z], () => G.Z.getApps()),
            a = (0, _.e7)([q.default], () => q.default.locale),
            o = (0, _.e7)([T.ZP], () => T.ZP.getSelfEmbeddedActivities()),
            s = (0, _.e7)([B.Z, V.Z], () => B.Z.getChannel(V.Z.getChannelId())),
            c = null == s ? void 0 : s.getGuildId(),
            u = R.G.useExperiment({ location: 'UserSettingsAuthedApps' }, { autoTrackExposure: !0 }).enabled;
        i.useEffect(() => {
            E.Z.fetch();
        }, []),
            i.useEffect(
                () => () => {
                    ey.setState({ searchQuery: '' });
                },
                []
            );
        let d = (e) => {
                let { id: t, application: n } = e;
                E.Z.delete(t);
                let r = o.get(n.id);
                null != r &&
                    A.Z.leaveActivity({
                        location: r.location,
                        applicationId: n.id,
                        showFeedback: !1
                    });
            },
            f = ey((e) => e.searchQuery),
            p = (e) => ey.setState({ searchQuery: e }),
            h = (e) => {
                p(e);
            },
            m = () => {
                p('');
            },
            b = () =>
                (0, r.jsx)('div', {
                    className: ea.searchContainer,
                    children: (0, r.jsx)(g.E1j, {
                        size: g.E1j.Sizes.MEDIUM,
                        query: f,
                        onChange: h,
                        onClear: m,
                        placeholder: ei.intl.string(ei.t['5prvKS']),
                        'aria-label': ei.intl.string(ei.t['5prvKS'])
                    })
                }),
            y = (e, t) =>
                (0, r.jsxs)(ef, {
                    className: ea.__invalid_marginTop20,
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
                          className: es.marginTop20,
                          type: g.$jN.Type.SPINNING_CIRCLE
                      })
                    : 0 === t.length
                      ? y(ei.intl.string(ei.t.CpPv5u), ei.intl.string(ei.t['E+SM6e']))
                      : 0 === v.length
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [b(), y(null, ei.intl.string(ei.t.EVWFNj))]
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  b(),
                                  v
                                      .sort((e, t) => Number(t.id) - Number(e.id))
                                      .map((e) =>
                                          u
                                              ? (0, r.jsx)(
                                                    eb,
                                                    ec(
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
                                                    eE,
                                                    ec(
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
                  title: ei.intl.string(ei.t['f6kk+v']),
                  children: (0, r.jsx)(g.y5t, {
                      component: (0, r.jsx)(g.ToO, {
                          className: es.marginBottom40,
                          type: g.sje.PRIMARY,
                          title: ei.intl.string(ei.t.HU3RFx),
                          body: ei.intl.string(ei.t.Nu5Yi4)
                      }),
                      children: O()
                  })
              });
    };
