n.d(t, {
    J: () => er,
    Z: () => el
}),
    n(653041),
    n(47120),
    n(266796),
    n(566702),
    n(230036);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(658722),
    o = n.n(s),
    c = n(15729),
    d = n(243814),
    p = n(442837),
    u = n(921072),
    m = n(524437),
    h = n(1561),
    x = n(481060),
    N = n(384275),
    g = n(230711),
    j = n(497321),
    f = n(468026),
    v = n(317381),
    I = n(513202),
    A = n(279332),
    T = n(979200),
    S = n(600164),
    b = n(726721),
    P = n(726521),
    O = n(713938),
    _ = n(973616),
    C = n(881998),
    E = n(592125),
    y = n(944486),
    D = n(246946),
    R = n(768581),
    W = n(585483),
    Z = n(49012),
    w = n(709054),
    L = n(706454),
    k = n(210887),
    U = n(675478),
    G = n(581883),
    M = n(436267),
    F = n(149418),
    z = n(494620),
    B = n(869743),
    H = n(981631),
    q = n(388032),
    X = n(42596),
    V = n(455812);
function Y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
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
let K = p.ZP.connectStores([k.Z], () => ({ theme: k.Z.theme }))(x.ubH);
function Q(e) {
    let { application: t, className: n } = e;
    return (0, i.jsxs)('div', {
        className: a()(X.twoWayWarning, n),
        children: [
            (0, i.jsx)(x.d3s, {
                size: 'md',
                color: 'currentColor',
                className: X.twoWayWarningIcon
            }),
            (0, i.jsx)(x.Text, {
                color: 'text-normal',
                variant: 'text-sm/medium',
                children: q.NW.format(q.t.jUhnwc, {
                    applicationName: t.name,
                    onConnectionPress: () => g.Z.setSection(H.jXE.SETTINGS_CONNECTIONS)
                })
            })
        ]
    });
}
let $ = (e) => {
        let { disclosure: t } = e;
        return r.useMemo(() => {
            switch (t) {
                case u.u$.IP_LOCATION:
                    return (0, i.jsx)(x.enf, {
                        size: 'md',
                        color: 'currentColor',
                        className: X.disclosureIcon
                    });
                case u.u$.DISPLAYS_ADVERTISEMENTS:
                    return (0, i.jsx)(x.FLu, { className: X.disclosureIcon });
                default:
                    return (0, i.jsx)(x.d3s, { className: X.disclosureIcon });
            }
        }, [t]);
    },
    J = (e, t, n) => {
        (0, P.uu)({
            application: e,
            entrypoint: 'authorized_apps_settings',
            contextualGuildId: t,
            contextualChannelId: n
        });
    },
    ee = (e, t) => {
        let n = q.NW.string(q.t.DT39Aw),
            r = q.NW.formatToPlainString(q.t.QWGvxM, { applicationName: e.name });
        return (
            (0, F.Z)(e) &&
                ((n = q.NW.formatToPlainString(q.t['paC+UV'], { applicationName: e.name })),
                (r = (0, i.jsxs)(i.Fragment, {
                    children: [
                        q.NW.formatToPlainString(q.t.inM1Ym, { applicationName: e.name }),
                        (0, i.jsx)(z.Z, {
                            look: z.z.WARNING,
                            className: X.infoBox,
                            children: q.NW.string(q.t.LY35Z2)
                        })
                    ]
                }))),
            (0, M.Z)(e.id) &&
                (r = (0, i.jsxs)(i.Fragment, {
                    children: [
                        r,
                        (0, i.jsx)(z.Z, {
                            className: X.infoBox,
                            children: q.NW.format(q.t.KRnERk, { applicationName: e.name })
                        })
                    ]
                })),
            (0, x.h7j)((e) =>
                (0, i.jsx)(
                    f.default,
                    Y(
                        {
                            title: n,
                            body: r,
                            confirmText: q.NW.string(q.t.xUqheH),
                            confirmColor: x.Ttl.RED,
                            cancelText: q.NW.string(q.t['ETE/oK']),
                            onConfirm: t
                        },
                        e
                    )
                )
            )
        );
    },
    et = (e) => {
        let { application: t } = e;
        return null != t.terms_of_service_url || null != t.privacy_policy_url
            ? (0, i.jsxs)('div', {
                  className: X.tosPrivacy,
                  children: [
                      null != t.terms_of_service_url
                          ? (0, i.jsxs)(h.P, {
                                tag: 'a',
                                onClick: () => {
                                    null != t.terms_of_service_url &&
                                        (0, Z.q)({
                                            href: t.terms_of_service_url,
                                            shouldConfirm: !0
                                        });
                                },
                                className: X.tos,
                                children: [
                                    (0, i.jsx)(x.R94, {
                                        className: X.link,
                                        children: q.NW.string(q.t['lx+GeX'])
                                    }),
                                    (0, i.jsx)(x.Gr1, {
                                        className: X.externalLinkIcon,
                                        color: 'var(--text-link)'
                                    })
                                ]
                            })
                          : null,
                      null != t.privacy_policy_url
                          ? (0, i.jsxs)('div', {
                                className: X.privacy,
                                children: [
                                    null != t.terms_of_service_url ? (0, i.jsx)('div', { className: X.divider }) : null,
                                    (0, i.jsxs)(h.P, {
                                        tag: 'a',
                                        onClick: () => {
                                            null != t.privacy_policy_url &&
                                                (0, Z.q)({
                                                    href: t.privacy_policy_url,
                                                    shouldConfirm: !0
                                                });
                                        },
                                        className: X.privacy,
                                        children: [
                                            (0, i.jsx)(x.R94, {
                                                className: X.link,
                                                children: q.NW.string(q.t.okSwq6)
                                            }),
                                            (0, i.jsx)(x.Gr1, {
                                                className: X.externalLinkIcon,
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
    en = (e) => {
        let { scopes: t, application: n, selectedChannelId: l, selectedGuildId: s, onDelete: o, disclosures: c, locale: p, id: u } = e,
            m = r.useMemo(() => _.ZP.createFromServer(n), [n]),
            h = b.Z.useExperiment({ location: 'Authorized Applications' }, { autoTrackExposure: !0 }).enabled,
            N = (0, M.O)(n.id);
        return (0, i.jsx)(x.Zbd, {
            className: a()(X.authedApp, V.marginBottom8),
            outline: !0,
            children: (0, i.jsxs)(x.y5t, {
                component: (() => {
                    let e = R.ZP.getApplicationIconURL({
                            id: n.id,
                            icon: n.icon
                        }),
                        t =
                            null != e
                                ? (0, i.jsx)(S.Z.Child, {
                                      className: X.appAvatar,
                                      grow: 0,
                                      children: (0, i.jsx)('img', {
                                          src: e,
                                          alt: ''
                                      })
                                  })
                                : null,
                        r = new Date(w.default.extractTimestamp(u)).toLocaleDateString(p);
                    return (0, i.jsxs)('div', {
                        className: a()(X.header, V.marginBottom20),
                        children: [
                            t,
                            (0, i.jsxs)('div', {
                                className: X.headerTextContainer,
                                children: [
                                    (0, i.jsx)(x.X6q, {
                                        variant: 'text-sm/semibold',
                                        className: X.headerText,
                                        children: n.name
                                    }),
                                    (0, i.jsx)(x.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-normal',
                                        children: q.NW.format(q.t.yOApCA, { date: r })
                                    })
                                ]
                            }),
                            h
                                ? (0, i.jsx)(x.zxk, {
                                      color: x.Ttl.TRANSPARENT,
                                      look: x.iLD.LINK,
                                      size: x.PhG.SMALL,
                                      className: X.reportButton,
                                      onClick: () => J(m, s, l),
                                      children: q.NW.string(q.t['+78Pfn'])
                                  })
                                : null,
                            (0, i.jsx)(x.zxk, {
                                color: x.Ttl.RED,
                                look: x.iLD.OUTLINED,
                                size: x.PhG.SMALL,
                                onClick: () => ee(n, o),
                                children: q.NW.string(q.t.xUqheH)
                            })
                        ]
                    });
                })(),
                children: [
                    (() => {
                        if (null != n.description && '' !== n.description)
                            return (0, i.jsx)(x.xJW, {
                                faded: !0,
                                title: q.NW.string(q.t.GfRGra),
                                children: (0, i.jsx)(x.R94, { children: n.description })
                            });
                    })(),
                    (0, i.jsx)(et, { application: n }),
                    (() => {
                        let e = [];
                        for (let n of t) e.push(...(0, O.CI)(n, t)), n === d.x.APPLICATIONS_COMMANDS && e.push(q.NW.string(q.t.Ls2XRk));
                        if (e.length > 0 || (null != c && c.length > 0))
                            return (0, i.jsx)(x.xJW, {
                                faded: !0,
                                title: q.NW.string(q.t.xrmhRU),
                                className: V.marginTop20,
                                children: (0, i.jsxs)('ul', {
                                    children: [
                                        e.map((e, t) =>
                                            (0, i.jsxs)(
                                                'li',
                                                {
                                                    className: a()(X.permission, V.marginTop8),
                                                    children: [(0, i.jsx)('i', { className: X.permissionCheckmark }), (0, i.jsx)(x.R94, { children: e })]
                                                },
                                                t
                                            )
                                        ),
                                        null == c
                                            ? void 0
                                            : c.map((t, n) => {
                                                  let r = (0, T.PM)(t);
                                                  return null != r
                                                      ? (0, i.jsxs)(
                                                            'li',
                                                            {
                                                                className: a()(X.permission, V.marginTop8),
                                                                children: [(0, i.jsx)($, { disclosure: t }), (0, i.jsx)(x.R94, { children: r })]
                                                            },
                                                            n + e.length
                                                        )
                                                      : null;
                                              })
                                    ]
                                })
                            });
                    })(),
                    N &&
                        (0, i.jsx)(Q, {
                            application: n,
                            className: X.twoWayWarningV1
                        })
                ]
            })
        });
    },
    ei = (e) => {
        let { scopes: t, application: n, selectedChannelId: l, selectedGuildId: s, onDelete: o, disclosures: c, locale: u, id: h } = e,
            N = n.id,
            g = r.useMemo(() => _.ZP.createFromServer(n), [n]),
            j = (0, p.e7)(
                [G.Z],
                () => {
                    var e, t, n, i;
                    return null === (i = G.Z.settings.applications) || void 0 === i ? void 0 : null === (n = i.appSettings) || void 0 === n ? void 0 : null === (t = n[N]) || void 0 === t ? void 0 : null === (e = t.appDmSettings) || void 0 === e ? void 0 : e.dmDisabled;
                },
                [N]
            ),
            f = b.Z.useExperiment({ location: 'Authorized Applications' }, { autoTrackExposure: !0 }).enabled,
            v = (0, M.O)(n.id);
        return (0, i.jsx)('div', {
            className: a()(X.authedAppV2, V.marginBottom8),
            children: (0, i.jsx)(x.y5t, {
                component: (() => {
                    let e = R.ZP.getApplicationIconURL({
                            id: n.id,
                            icon: n.icon
                        }),
                        t =
                            null != e
                                ? (0, i.jsx)(S.Z.Child, {
                                      className: X.appAvatarV2,
                                      grow: 0,
                                      children: (0, i.jsx)('img', {
                                          src: e,
                                          alt: ''
                                      })
                                  })
                                : null,
                        r = new Date(w.default.extractTimestamp(h)).toLocaleDateString(u);
                    return (0, i.jsxs)('div', {
                        className: a()(X.headerV2),
                        children: [
                            t,
                            (0, i.jsxs)('div', {
                                className: X.headerTextContainerV2,
                                children: [
                                    (0, i.jsx)(x.X6q, {
                                        variant: 'heading-md/semibold',
                                        className: a()(X.headerText, V.marginBottom4),
                                        children: n.name
                                    }),
                                    (0, i.jsx)(x.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-normal',
                                        children: q.NW.format(q.t.yOApCA, { date: r })
                                    })
                                ]
                            }),
                            (0, i.jsx)(B.Z, {
                                appRecord: g,
                                showAppReportingOption: f,
                                selectedGuildId: s,
                                selectedChannelId: l
                            })
                        ]
                    });
                })(),
                children: (0, i.jsxs)('div', {
                    className: X.appDetailsContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: X.appDetailsSection,
                            children: [
                                (0, i.jsx)(x.X6q, {
                                    variant: 'heading-sm/medium',
                                    color: 'header-primary',
                                    className: a()(V.marginBottom4),
                                    children: q.NW.string(q.t.GfRGra)
                                }),
                                null != n.description &&
                                    '' !== n.description &&
                                    (0, i.jsx)(x.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-normal',
                                        children: n.description
                                    }),
                                (0, i.jsx)(et, { application: n })
                            ]
                        }),
                        (() => {
                            let e = [];
                            for (let n of t) e.push(...(0, O.CI)(n, t)), n === d.x.APPLICATIONS_COMMANDS && e.push(q.NW.string(q.t.Ls2XRk));
                            if (e.length > 0 || (null != c && c.length > 0))
                                return (0, i.jsxs)('div', {
                                    className: X.appDetailsSection,
                                    children: [
                                        (0, i.jsx)(x.X6q, {
                                            variant: 'heading-sm/medium',
                                            color: 'header-primary',
                                            className: a()(V.marginBottom4),
                                            children: q.NW.string(q.t.xrmhRU)
                                        }),
                                        (0, i.jsxs)('ul', {
                                            children: [
                                                e.map((e, t) =>
                                                    (0, i.jsxs)(
                                                        'li',
                                                        {
                                                            className: a()(X.permission, V.marginTop8),
                                                            children: [(0, i.jsx)('i', { className: X.permissionCheckmark }), (0, i.jsx)(x.R94, { children: e })]
                                                        },
                                                        t
                                                    )
                                                ),
                                                null == c
                                                    ? void 0
                                                    : c.map((t, n) => {
                                                          let r = (0, T.PM)(t);
                                                          return null != r
                                                              ? (0, i.jsxs)(
                                                                    'li',
                                                                    {
                                                                        className: a()(X.permission, V.marginTop8),
                                                                        children: [(0, i.jsx)($, { disclosure: t }), (0, i.jsx)(x.R94, { children: r })]
                                                                    },
                                                                    n + e.length
                                                                )
                                                              : null;
                                                      })
                                            ]
                                        })
                                    ]
                                });
                        })(),
                        (0, i.jsxs)('div', {
                            className: X.appDetailsSection,
                            children: [
                                (0, i.jsx)(x.X6q, {
                                    variant: 'heading-sm/medium',
                                    color: 'header-primary',
                                    className: a()(X.dmSettingsHeader),
                                    children: q.NW.string(q.t.YUU0RE)
                                }),
                                (0, i.jsx)(x.j7V, {
                                    hideBorder: !0,
                                    onChange: (e) => {
                                        U.hW.updateAsync(
                                            'applications',
                                            (t) => {
                                                N in t.appSettings ? (null == t.appSettings[N].appDmSettings ? (t.appSettings[N].appDmSettings = m.c$.create({ dmDisabled: !e })) : (t.appSettings[N].appDmSettings.dmDisabled = !e)) : (t.appSettings[N] = m.dp.create({ appDmSettings: m.c$.create({ dmDisabled: !e }) }));
                                            },
                                            U.fy.INFREQUENT_USER_ACTION
                                        );
                                    },
                                    className: X.dmSettingsSwitch,
                                    note: q.NW.string(q.t.anBbIS),
                                    value: !j,
                                    children: (0, i.jsx)(x.Text, {
                                        variant: 'text-sm/medium',
                                        children: q.NW.string(q.t.BRhdqa)
                                    })
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: X.footer,
                            children: [
                                v &&
                                    (0, i.jsx)(Q, {
                                        application: n,
                                        className: X.twoWayWarningV2
                                    }),
                                (0, i.jsx)(x.zxk, {
                                    color: x.Ttl.RED,
                                    look: x.iLD.OUTLINED,
                                    size: x.PhG.SMALL,
                                    onClick: () => ee(n, o),
                                    children: q.NW.string(q.t.xUqheH)
                                })
                            ]
                        })
                    ]
                })
            })
        });
    },
    er = (0, c.U)(() => ({ searchQuery: '' })),
    el = () => {
        let e = (0, p.e7)([D.Z], () => D.Z.hidePersonalInformation),
            t = (0, p.e7)([C.Z], () => C.Z.getApps()),
            l = (0, p.e7)([L.default], () => L.default.locale),
            a = (0, p.e7)([v.ZP], () => v.ZP.getSelfEmbeddedActivities()),
            s = (0, p.e7)([E.Z, y.Z], () => E.Z.getChannel(y.Z.getChannelId())),
            c = null == s ? void 0 : s.getGuildId(),
            d = A.J.useExperiment({ location: 'UserSettingsAuthedApps' }, { autoTrackExposure: !0 }).enabled;
        r.useEffect(() => {
            N.Z.fetch();
        }, []),
            r.useEffect(
                () => () => {
                    er.setState({ searchQuery: '' });
                },
                []
            );
        let u = (e) => {
                let { id: t, application: n } = e;
                N.Z.delete(t), W.S.safeDispatch(H.CkL.HIDE_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, { applicationId: n.id });
                let i = a.get(n.id);
                null != i &&
                    I.Z.leaveActivity({
                        location: i.location,
                        applicationId: n.id,
                        showFeedback: !1
                    });
            },
            m = er((e) => e.searchQuery),
            h = (e) => er.setState({ searchQuery: e }),
            g = (e) => {
                h(e);
            },
            f = () => {
                h('');
            },
            T = () =>
                (0, i.jsx)('div', {
                    className: X.searchContainer,
                    children: (0, i.jsx)(x.E1j, {
                        size: x.E1j.Sizes.MEDIUM,
                        query: m,
                        onChange: g,
                        onClear: f,
                        placeholder: q.NW.string(q.t['5prvKS']),
                        'aria-label': q.NW.string(q.t['5prvKS'])
                    })
                }),
            S = (e, t) =>
                (0, i.jsxs)(K, {
                    className: X.__invalid_marginTop20,
                    children: [
                        (0, i.jsx)(x.oxh, {
                            darkSrc: n(701972),
                            lightSrc: n(32824),
                            width: 380,
                            height: 282
                        }),
                        (0, i.jsx)(x.OZU, {
                            note: e,
                            children: t
                        })
                    ]
                }),
            b = r.useMemo(() => {
                let e = m.trim().toLowerCase();
                return '' === e || null == t ? t : t.length < 100 ? t.filter((t) => o()(e, t.application.name.toLowerCase())) : t.filter((t) => t.application.name.toLowerCase().includes(e));
            }, [t, m]);
        return e
            ? (0, i.jsx)(j.Z, {})
            : (0, i.jsx)(x.hjN, {
                  tag: x.RB0.H1,
                  title: q.NW.string(q.t['f6kk+v']),
                  children: (0, i.jsx)(x.y5t, {
                      component: (0, i.jsx)(x.ToO, {
                          className: V.marginBottom40,
                          type: x.sje.PRIMARY,
                          title: q.NW.string(q.t.HU3RFx),
                          body: q.NW.string(q.t.Nu5Yi4)
                      }),
                      children:
                          null == t || null == b
                              ? (0, i.jsx)(x.$jN, {
                                    className: V.marginTop20,
                                    type: x.$jN.Type.SPINNING_CIRCLE
                                })
                              : 0 === t.length
                                ? S(q.NW.string(q.t.CpPv5u), q.NW.string(q.t['E+SM6e']))
                                : 0 === b.length
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [T(), S(null, q.NW.string(q.t.EVWFNj))]
                                    })
                                  : (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            T(),
                                            b
                                                .sort((e, t) => Number(t.id) - Number(e.id))
                                                .map((e) =>
                                                    d
                                                        ? (0, i.jsx)(
                                                              ei,
                                                              Y(
                                                                  {
                                                                      locale: l,
                                                                      onDelete: () => u(e),
                                                                      selectedChannelId: null == s ? void 0 : s.id,
                                                                      selectedGuildId: null != c ? c : void 0
                                                                  },
                                                                  e
                                                              ),
                                                              e.id
                                                          )
                                                        : (0, i.jsx)(
                                                              en,
                                                              Y(
                                                                  {
                                                                      locale: l,
                                                                      onDelete: () => u(e),
                                                                      selectedChannelId: null == s ? void 0 : s.id,
                                                                      selectedGuildId: null != c ? c : void 0
                                                                  },
                                                                  e
                                                              ),
                                                              e.id
                                                          )
                                                )
                                        ]
                                    })
                  })
              });
    };
