n.d(t, {
    J: () => eo,
    Z: () => ea
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
    c = n(15729),
    u = n(243814),
    d = n(442837),
    f = n(921072),
    p = n(524437),
    _ = n(1561),
    h = n(481060),
    m = n(384275),
    g = n(230711),
    E = n(497321),
    v = n(468026),
    b = n(317381),
    y = n(513202),
    O = n(279332),
    S = n(979200),
    I = n(600164),
    T = n(726721),
    N = n(726521),
    A = n(713938),
    C = n(973616),
    R = n(881998),
    P = n(592125),
    w = n(944486),
    D = n(246946),
    x = n(768581),
    L = n(585483),
    M = n(49012),
    k = n(709054),
    j = n(706454),
    U = n(210887),
    G = n(675478),
    B = n(581883),
    Z = n(436267),
    F = n(149418),
    V = n(494620),
    H = n(869743),
    W = n(981631),
    Y = n(388032),
    K = n(42596),
    z = n(455812);
function q(e, t, n) {
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
function Q(e) {
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
                q(e, t, n[t]);
            });
    }
    return e;
}
let X = d.ZP.connectStores([U.Z], () => ({ theme: U.Z.theme }))(h.ubH);
function J(e) {
    let { application: t, className: n } = e;
    return (0, r.jsxs)('div', {
        className: a()(K.twoWayWarning, n),
        children: [
            (0, r.jsx)(h.d3s, {
                size: 'md',
                color: 'currentColor',
                className: K.twoWayWarningIcon
            }),
            (0, r.jsx)(h.Text, {
                color: 'text-normal',
                variant: 'text-sm/medium',
                children: Y.NW.format(Y.t.jUhnwc, {
                    applicationName: t.name,
                    onConnectionPress: () => g.Z.setSection(W.jXE.SETTINGS_CONNECTIONS)
                })
            })
        ]
    });
}
let $ = (e) => {
        let { disclosure: t } = e;
        return i.useMemo(() => {
            switch (t) {
                case f.u$.IP_LOCATION:
                    return (0, r.jsx)(h.enf, {
                        size: 'md',
                        color: 'currentColor',
                        className: K.disclosureIcon
                    });
                case f.u$.DISPLAYS_ADVERTISEMENTS:
                    return (0, r.jsx)(h.FLu, { className: K.disclosureIcon });
                default:
                    return (0, r.jsx)(h.d3s, { className: K.disclosureIcon });
            }
        }, [t]);
    },
    ee = (e, t, n) => {
        (0, N.uu)({
            application: e,
            entrypoint: 'authorized_apps_settings',
            contextualGuildId: t,
            contextualChannelId: n
        });
    },
    et = (e, t) => {
        let n = Y.NW.string(Y.t.DT39Aw),
            i = Y.NW.formatToPlainString(Y.t.QWGvxM, { applicationName: e.name });
        return (
            (0, F.Z)(e) &&
                ((n = Y.NW.formatToPlainString(Y.t['paC+UV'], { applicationName: e.name })),
                (i = (0, r.jsxs)(r.Fragment, {
                    children: [
                        Y.NW.formatToPlainString(Y.t.inM1Ym, { applicationName: e.name }),
                        (0, r.jsx)(V.Z, {
                            look: V.z.WARNING,
                            className: K.infoBox,
                            children: Y.NW.string(Y.t.LY35Z2)
                        })
                    ]
                }))),
            (0, Z.Z)(e.id) &&
                (i = (0, r.jsxs)(r.Fragment, {
                    children: [
                        i,
                        (0, r.jsx)(V.Z, {
                            className: K.infoBox,
                            children: Y.NW.format(Y.t.KRnERk, { applicationName: e.name })
                        })
                    ]
                })),
            (0, h.h7j)((e) =>
                (0, r.jsx)(
                    v.default,
                    Q(
                        {
                            title: n,
                            body: i,
                            confirmText: Y.NW.string(Y.t.xUqheH),
                            confirmColor: h.Ttl.RED,
                            cancelText: Y.NW.string(Y.t['ETE/oK']),
                            onConfirm: t
                        },
                        e
                    )
                )
            )
        );
    },
    en = (e) => {
        let { application: t } = e,
            n = () => {
                null != t.terms_of_service_url &&
                    (0, M.q)({
                        href: t.terms_of_service_url,
                        shouldConfirm: !0
                    });
            },
            i = () => {
                null != t.privacy_policy_url &&
                    (0, M.q)({
                        href: t.privacy_policy_url,
                        shouldConfirm: !0
                    });
            };
        return null != t.terms_of_service_url || null != t.privacy_policy_url
            ? (0, r.jsxs)('div', {
                  className: K.tosPrivacy,
                  children: [
                      null != t.terms_of_service_url
                          ? (0, r.jsxs)(_.P, {
                                tag: 'a',
                                onClick: n,
                                className: K.tos,
                                children: [
                                    (0, r.jsx)(h.R94, {
                                        className: K.link,
                                        children: Y.NW.string(Y.t['lx+GeX'])
                                    }),
                                    (0, r.jsx)(h.Gr1, {
                                        className: K.externalLinkIcon,
                                        color: 'var(--text-link)'
                                    })
                                ]
                            })
                          : null,
                      null != t.privacy_policy_url
                          ? (0, r.jsxs)('div', {
                                className: K.privacy,
                                children: [
                                    null != t.terms_of_service_url ? (0, r.jsx)('div', { className: K.divider }) : null,
                                    (0, r.jsxs)(_.P, {
                                        tag: 'a',
                                        onClick: i,
                                        className: K.privacy,
                                        children: [
                                            (0, r.jsx)(h.R94, {
                                                className: K.link,
                                                children: Y.NW.string(Y.t.okSwq6)
                                            }),
                                            (0, r.jsx)(h.Gr1, {
                                                className: K.externalLinkIcon,
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
    er = (e) => {
        let { scopes: t, application: n, selectedChannelId: o, selectedGuildId: s, onDelete: l, disclosures: c, locale: d, id: f } = e,
            p = i.useMemo(() => C.ZP.createFromServer(n), [n]),
            _ = T.Z.useExperiment({ location: 'Authorized Applications' }, { autoTrackExposure: !0 }).enabled,
            m = () => {
                let e = [];
                for (let n of t) e.push(...(0, A.CI)(n, t)), n === u.x.APPLICATIONS_COMMANDS && e.push(Y.NW.string(Y.t.Ls2XRk));
                if (e.length > 0 || (null != c && c.length > 0))
                    return (0, r.jsx)(h.xJW, {
                        faded: !0,
                        title: Y.NW.string(Y.t.xrmhRU),
                        className: z.marginTop20,
                        children: (0, r.jsxs)('ul', {
                            children: [
                                e.map((e, t) =>
                                    (0, r.jsxs)(
                                        'li',
                                        {
                                            className: a()(K.permission, z.marginTop8),
                                            children: [(0, r.jsx)('i', { className: K.permissionCheckmark }), (0, r.jsx)(h.R94, { children: e })]
                                        },
                                        t
                                    )
                                ),
                                null == c
                                    ? void 0
                                    : c.map((t, n) => {
                                          let i = (0, S.PM)(t);
                                          return null != i
                                              ? (0, r.jsxs)(
                                                    'li',
                                                    {
                                                        className: a()(K.permission, z.marginTop8),
                                                        children: [(0, r.jsx)($, { disclosure: t }), (0, r.jsx)(h.R94, { children: i })]
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
                if (null != n.description && '' !== n.description)
                    return (0, r.jsx)(h.xJW, {
                        faded: !0,
                        title: Y.NW.string(Y.t.GfRGra),
                        children: (0, r.jsx)(h.R94, { children: n.description })
                    });
            },
            E = () => {
                let e = x.ZP.getApplicationIconURL({
                        id: n.id,
                        icon: n.icon
                    }),
                    t =
                        null != e
                            ? (0, r.jsx)(I.Z.Child, {
                                  className: K.appAvatar,
                                  grow: 0,
                                  children: (0, r.jsx)('img', {
                                      src: e,
                                      alt: ''
                                  })
                              })
                            : null,
                    i = new Date(k.default.extractTimestamp(f)).toLocaleDateString(d);
                return (0, r.jsxs)('div', {
                    className: a()(K.header, z.marginBottom20),
                    children: [
                        t,
                        (0, r.jsxs)('div', {
                            className: K.headerTextContainer,
                            children: [
                                (0, r.jsx)(h.X6q, {
                                    variant: 'text-sm/semibold',
                                    className: K.headerText,
                                    children: n.name
                                }),
                                (0, r.jsx)(h.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-normal',
                                    children: Y.NW.format(Y.t.yOApCA, { date: i })
                                })
                            ]
                        }),
                        _
                            ? (0, r.jsx)(h.zxk, {
                                  color: h.Ttl.TRANSPARENT,
                                  look: h.iLD.LINK,
                                  size: h.PhG.SMALL,
                                  className: K.reportButton,
                                  onClick: () => ee(p, s, o),
                                  children: Y.NW.string(Y.t['+78Pfn'])
                              })
                            : null,
                        (0, r.jsx)(h.zxk, {
                            color: h.Ttl.RED,
                            look: h.iLD.OUTLINED,
                            size: h.PhG.SMALL,
                            onClick: () => et(n, l),
                            children: Y.NW.string(Y.t.xUqheH)
                        })
                    ]
                });
            },
            v = (0, Z.O)(n.id);
        return (0, r.jsx)(h.Zbd, {
            className: a()(K.authedApp, z.marginBottom8),
            outline: !0,
            children: (0, r.jsxs)(h.y5t, {
                component: E(),
                children: [
                    g(),
                    (0, r.jsx)(en, { application: n }),
                    m(),
                    v &&
                        (0, r.jsx)(J, {
                            application: n,
                            className: K.twoWayWarningV1
                        })
                ]
            })
        });
    },
    ei = (e) => {
        let { scopes: t, application: n, selectedChannelId: o, selectedGuildId: s, onDelete: l, disclosures: c, locale: f, id: _ } = e,
            m = n.id,
            g = i.useMemo(() => C.ZP.createFromServer(n), [n]),
            E = (0, d.e7)(
                [B.Z],
                () => {
                    var e, t, n, r;
                    return null === (r = B.Z.settings.applications) || void 0 === r ? void 0 : null === (n = r.appSettings) || void 0 === n ? void 0 : null === (t = n[m]) || void 0 === t ? void 0 : null === (e = t.appDmSettings) || void 0 === e ? void 0 : e.dmDisabled;
                },
                [m]
            ),
            v = T.Z.useExperiment({ location: 'Authorized Applications' }, { autoTrackExposure: !0 }).enabled,
            b = () => {
                let e = [];
                for (let n of t) e.push(...(0, A.CI)(n, t)), n === u.x.APPLICATIONS_COMMANDS && e.push(Y.NW.string(Y.t.Ls2XRk));
                if (e.length > 0 || (null != c && c.length > 0))
                    return (0, r.jsxs)('div', {
                        className: K.appDetailsSection,
                        children: [
                            (0, r.jsx)(h.X6q, {
                                variant: 'heading-sm/medium',
                                color: 'header-primary',
                                className: a()(z.marginBottom4),
                                children: Y.NW.string(Y.t.xrmhRU)
                            }),
                            (0, r.jsxs)('ul', {
                                children: [
                                    e.map((e, t) =>
                                        (0, r.jsxs)(
                                            'li',
                                            {
                                                className: a()(K.permission, z.marginTop8),
                                                children: [(0, r.jsx)('i', { className: K.permissionCheckmark }), (0, r.jsx)(h.R94, { children: e })]
                                            },
                                            t
                                        )
                                    ),
                                    null == c
                                        ? void 0
                                        : c.map((t, n) => {
                                              let i = (0, S.PM)(t);
                                              return null != i
                                                  ? (0, r.jsxs)(
                                                        'li',
                                                        {
                                                            className: a()(K.permission, z.marginTop8),
                                                            children: [(0, r.jsx)($, { disclosure: t }), (0, r.jsx)(h.R94, { children: i })]
                                                        },
                                                        n + e.length
                                                    )
                                                  : null;
                                          })
                                ]
                            })
                        ]
                    });
            },
            y = () =>
                (0, r.jsxs)('div', {
                    className: K.appDetailsSection,
                    children: [
                        (0, r.jsx)(h.X6q, {
                            variant: 'heading-sm/medium',
                            color: 'header-primary',
                            className: a()(z.marginBottom4),
                            children: Y.NW.string(Y.t.GfRGra)
                        }),
                        null != n.description &&
                            '' !== n.description &&
                            (0, r.jsx)(h.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-normal',
                                children: n.description
                            }),
                        (0, r.jsx)(en, { application: n })
                    ]
                }),
            O = () => {
                let e = x.ZP.getApplicationIconURL({
                        id: n.id,
                        icon: n.icon
                    }),
                    t =
                        null != e
                            ? (0, r.jsx)(I.Z.Child, {
                                  className: K.appAvatarV2,
                                  grow: 0,
                                  children: (0, r.jsx)('img', {
                                      src: e,
                                      alt: ''
                                  })
                              })
                            : null,
                    i = new Date(k.default.extractTimestamp(_)).toLocaleDateString(f);
                return (0, r.jsxs)('div', {
                    className: a()(K.headerV2),
                    children: [
                        t,
                        (0, r.jsxs)('div', {
                            className: K.headerTextContainerV2,
                            children: [
                                (0, r.jsx)(h.X6q, {
                                    variant: 'heading-md/semibold',
                                    className: a()(K.headerText, z.marginBottom4),
                                    children: n.name
                                }),
                                (0, r.jsx)(h.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-normal',
                                    children: Y.NW.format(Y.t.yOApCA, { date: i })
                                })
                            ]
                        }),
                        (0, r.jsx)(H.Z, {
                            appRecord: g,
                            showAppReportingOption: v,
                            selectedGuildId: s,
                            selectedChannelId: o
                        })
                    ]
                });
            },
            N = (e) => {
                G.hW.updateAsync(
                    'applications',
                    (t) => {
                        m in t.appSettings ? (null == t.appSettings[m].appDmSettings ? (t.appSettings[m].appDmSettings = p.c$.create({ dmDisabled: !e })) : (t.appSettings[m].appDmSettings.dmDisabled = !e)) : (t.appSettings[m] = p.dp.create({ appDmSettings: p.c$.create({ dmDisabled: !e }) }));
                    },
                    G.fy.INFREQUENT_USER_ACTION
                );
            },
            R = () =>
                (0, r.jsxs)('div', {
                    className: K.appDetailsSection,
                    children: [
                        (0, r.jsx)(h.X6q, {
                            variant: 'heading-sm/medium',
                            color: 'header-primary',
                            className: a()(K.dmSettingsHeader),
                            children: Y.NW.string(Y.t.YUU0RE)
                        }),
                        (0, r.jsx)(h.j7V, {
                            hideBorder: !0,
                            onChange: N,
                            className: K.dmSettingsSwitch,
                            note: Y.NW.string(Y.t.anBbIS),
                            value: !E,
                            children: (0, r.jsx)(h.Text, {
                                variant: 'text-sm/medium',
                                children: Y.NW.string(Y.t.BRhdqa)
                            })
                        })
                    ]
                }),
            P = (0, Z.O)(n.id),
            w = () =>
                (0, r.jsxs)('div', {
                    className: K.footer,
                    children: [
                        P &&
                            (0, r.jsx)(J, {
                                application: n,
                                className: K.twoWayWarningV2
                            }),
                        (0, r.jsx)(h.zxk, {
                            color: h.Ttl.RED,
                            look: h.iLD.OUTLINED,
                            size: h.PhG.SMALL,
                            onClick: () => et(n, l),
                            children: Y.NW.string(Y.t.xUqheH)
                        })
                    ]
                });
        return (0, r.jsx)('div', {
            className: a()(K.authedAppV2, z.marginBottom8),
            children: (0, r.jsx)(h.y5t, {
                component: O(),
                children: (0, r.jsxs)('div', {
                    className: K.appDetailsContainer,
                    children: [y(), b(), R(), w()]
                })
            })
        });
    },
    eo = (0, c.U)(() => ({ searchQuery: '' })),
    ea = () => {
        let e = (0, d.e7)([D.Z], () => D.Z.hidePersonalInformation),
            t = (0, d.e7)([R.Z], () => R.Z.getApps()),
            o = (0, d.e7)([j.default], () => j.default.locale),
            a = (0, d.e7)([b.ZP], () => b.ZP.getSelfEmbeddedActivities()),
            s = (0, d.e7)([P.Z, w.Z], () => P.Z.getChannel(w.Z.getChannelId())),
            c = null == s ? void 0 : s.getGuildId(),
            u = O.J.useExperiment({ location: 'UserSettingsAuthedApps' }, { autoTrackExposure: !0 }).enabled;
        i.useEffect(() => {
            m.Z.fetch();
        }, []),
            i.useEffect(
                () => () => {
                    eo.setState({ searchQuery: '' });
                },
                []
            );
        let f = (e) => {
                let { id: t, application: n } = e;
                m.Z.delete(t), L.S.safeDispatch(W.CkL.HIDE_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, { applicationId: n.id });
                let r = a.get(n.id);
                null != r &&
                    y.Z.leaveActivity({
                        location: r.location,
                        applicationId: n.id,
                        showFeedback: !1
                    });
            },
            p = eo((e) => e.searchQuery),
            _ = (e) => eo.setState({ searchQuery: e }),
            g = (e) => {
                _(e);
            },
            v = () => {
                _('');
            },
            S = () =>
                (0, r.jsx)('div', {
                    className: K.searchContainer,
                    children: (0, r.jsx)(h.E1j, {
                        size: h.E1j.Sizes.MEDIUM,
                        query: p,
                        onChange: g,
                        onClear: v,
                        placeholder: Y.NW.string(Y.t['5prvKS']),
                        'aria-label': Y.NW.string(Y.t['5prvKS'])
                    })
                }),
            I = (e, t) =>
                (0, r.jsxs)(X, {
                    className: K.__invalid_marginTop20,
                    children: [
                        (0, r.jsx)(h.oxh, {
                            darkSrc: n(701972),
                            lightSrc: n(818658),
                            width: 380,
                            height: 282
                        }),
                        (0, r.jsx)(h.OZU, {
                            note: e,
                            children: t
                        })
                    ]
                }),
            T = i.useMemo(() => {
                let e = p.trim().toLowerCase();
                return '' === e || null == t ? t : t.length < 100 ? t.filter((t) => l()(e, t.application.name.toLowerCase())) : t.filter((t) => t.application.name.toLowerCase().includes(e));
            }, [t, p]),
            N = () =>
                null == t || null == T
                    ? (0, r.jsx)(h.$jN, {
                          className: z.marginTop20,
                          type: h.$jN.Type.SPINNING_CIRCLE
                      })
                    : 0 === t.length
                      ? I(Y.NW.string(Y.t.CpPv5u), Y.NW.string(Y.t['E+SM6e']))
                      : 0 === T.length
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [S(), I(null, Y.NW.string(Y.t.EVWFNj))]
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  S(),
                                  T.sort((e, t) => Number(t.id) - Number(e.id)).map((e) =>
                                      u
                                          ? (0, r.jsx)(
                                                ei,
                                                Q(
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
                                          : (0, r.jsx)(
                                                er,
                                                Q(
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
            ? (0, r.jsx)(E.Z, {})
            : (0, r.jsx)(h.hjN, {
                  tag: h.RB0.H1,
                  title: Y.NW.string(Y.t['f6kk+v']),
                  children: (0, r.jsx)(h.y5t, {
                      component: (0, r.jsx)(h.ToO, {
                          className: z.marginBottom40,
                          type: h.sje.PRIMARY,
                          title: Y.NW.string(Y.t.HU3RFx),
                          body: Y.NW.string(Y.t.Nu5Yi4)
                      }),
                      children: N()
                  })
              });
    };
