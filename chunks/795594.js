n.d(t, {
    J: () => ei,
    Z: () => el
}),
    n(653041),
    n(47120);
var i = n(200651),
    l = n(192379),
    s = n(120356),
    a = n.n(s),
    r = n(658722),
    o = n.n(r),
    c = n(15729),
    d = n(243814),
    p = n(442837),
    u = n(921072),
    m = n(524437),
    h = n(1561),
    x = n(481060),
    g = n(384275),
    N = n(230711),
    j = n(497321),
    f = n(468026),
    I = n(317381),
    A = n(513202),
    T = n(279332),
    v = n(979200),
    S = n(600164),
    _ = n(726721),
    C = n(726521),
    E = n(713938),
    P = n(973616),
    R = n(881998),
    D = n(592125),
    Z = n(944486),
    b = n(246946),
    L = n(768581),
    O = n(585483),
    y = n(49012),
    k = n(709054),
    w = n(706454),
    U = n(210887),
    G = n(675478),
    M = n(581883),
    F = n(436267),
    z = n(149418),
    B = n(494620),
    H = n(869743),
    W = n(981631),
    q = n(388032),
    X = n(995233),
    V = n(483938);
let Y = p.ZP.connectStores([U.Z], () => ({ theme: U.Z.theme }))(x.ubH);
function K(e) {
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
                children: q.intl.format(q.t.jUhnwc, {
                    applicationName: t.name,
                    onConnectionPress: () => N.Z.setSection(W.jXE.SETTINGS_CONNECTIONS)
                })
            })
        ]
    });
}
let Q = (e) => {
        let { disclosure: t } = e;
        return l.useMemo(() => {
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
    $ = (e, t, n) => {
        (0, C.uu)({
            application: e,
            entrypoint: 'authorized_apps_settings',
            contextualGuildId: t,
            contextualChannelId: n
        });
    },
    J = (e, t) => {
        let n = q.intl.string(q.t.DT39Aw),
            l = q.intl.formatToPlainString(q.t.QWGvxM, { applicationName: e.name });
        return (
            (0, z.Z)(e) &&
                ((n = q.intl.formatToPlainString(q.t['paC+UV'], { applicationName: e.name })),
                (l = (0, i.jsxs)(i.Fragment, {
                    children: [
                        q.intl.formatToPlainString(q.t.inM1Ym, { applicationName: e.name }),
                        (0, i.jsx)(B.Z, {
                            look: B.z.WARNING,
                            className: X.infoBox,
                            children: q.intl.string(q.t.LY35Z2)
                        })
                    ]
                }))),
            (0, F.Z)(e.id) &&
                (l = (0, i.jsxs)(i.Fragment, {
                    children: [
                        l,
                        (0, i.jsx)(B.Z, {
                            className: X.infoBox,
                            children: q.intl.format(q.t.KRnERk, { applicationName: e.name })
                        })
                    ]
                })),
            (0, x.h7j)((e) =>
                (0, i.jsx)(f.default, {
                    title: n,
                    body: l,
                    confirmText: q.intl.string(q.t.xUqheH),
                    confirmColor: x.Ttl.RED,
                    cancelText: q.intl.string(q.t['ETE/oK']),
                    onConfirm: t,
                    ...e
                })
            )
        );
    },
    ee = (e) => {
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
                                        (0, y.q)({
                                            href: t.terms_of_service_url,
                                            shouldConfirm: !0
                                        });
                                },
                                className: X.tos,
                                children: [
                                    (0, i.jsx)(x.R94, {
                                        className: X.link,
                                        children: q.intl.string(q.t['lx+GeX'])
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
                                                (0, y.q)({
                                                    href: t.privacy_policy_url,
                                                    shouldConfirm: !0
                                                });
                                        },
                                        className: X.privacy,
                                        children: [
                                            (0, i.jsx)(x.R94, {
                                                className: X.link,
                                                children: q.intl.string(q.t.okSwq6)
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
    et = (e) => {
        let { scopes: t, application: n, selectedChannelId: s, selectedGuildId: r, onDelete: o, disclosures: c, locale: p, id: u } = e,
            m = l.useMemo(() => P.ZP.createFromServer(n), [n]),
            h = _.Z.useExperiment({ location: 'Authorized Applications' }, { autoTrackExposure: !0 }).enabled,
            g = (0, F.O)(n.id);
        return (0, i.jsx)(x.Zbd, {
            className: a()(X.authedApp, V.marginBottom8),
            outline: !0,
            children: (0, i.jsxs)(x.y5t, {
                component: (() => {
                    let e = L.ZP.getApplicationIconURL({
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
                        l = new Date(k.default.extractTimestamp(u)).toLocaleDateString(p);
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
                                        children: q.intl.format(q.t.yOApCA, { date: l })
                                    })
                                ]
                            }),
                            h
                                ? (0, i.jsx)(x.zxk, {
                                      color: x.Ttl.TRANSPARENT,
                                      look: x.iLD.LINK,
                                      size: x.PhG.SMALL,
                                      className: X.reportButton,
                                      onClick: () => $(m, r, s),
                                      children: q.intl.string(q.t['+78Pfn'])
                                  })
                                : null,
                            (0, i.jsx)(x.zxk, {
                                color: x.Ttl.RED,
                                look: x.iLD.OUTLINED,
                                size: x.PhG.SMALL,
                                onClick: () => J(n, o),
                                children: q.intl.string(q.t.xUqheH)
                            })
                        ]
                    });
                })(),
                children: [
                    (() => {
                        if (null != n.description && '' !== n.description)
                            return (0, i.jsx)(x.xJW, {
                                faded: !0,
                                title: q.intl.string(q.t.GfRGra),
                                children: (0, i.jsx)(x.R94, { children: n.description })
                            });
                    })(),
                    (0, i.jsx)(ee, { application: n }),
                    (() => {
                        let e = [];
                        for (let n of t) e.push(...(0, E.CI)(n, t)), n === d.x.APPLICATIONS_COMMANDS && e.push(q.intl.string(q.t.Ls2XRk));
                        if (e.length > 0 || (null != c && c.length > 0))
                            return (0, i.jsx)(x.xJW, {
                                faded: !0,
                                title: q.intl.string(q.t.xrmhRU),
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
                                                  let l = (0, v.PM)(t);
                                                  return null != l
                                                      ? (0, i.jsxs)(
                                                            'li',
                                                            {
                                                                className: a()(X.permission, V.marginTop8),
                                                                children: [(0, i.jsx)(Q, { disclosure: t }), (0, i.jsx)(x.R94, { children: l })]
                                                            },
                                                            n + e.length
                                                        )
                                                      : null;
                                              })
                                    ]
                                })
                            });
                    })(),
                    g &&
                        (0, i.jsx)(K, {
                            application: n,
                            className: X.twoWayWarningV1
                        })
                ]
            })
        });
    },
    en = (e) => {
        let { scopes: t, application: n, selectedChannelId: s, selectedGuildId: r, onDelete: o, disclosures: c, locale: u, id: h } = e,
            g = n.id,
            N = l.useMemo(() => P.ZP.createFromServer(n), [n]),
            j = (0, p.e7)(
                [M.Z],
                () => {
                    var e, t, n, i;
                    return null === (i = M.Z.settings.applications) || void 0 === i ? void 0 : null === (n = i.appSettings) || void 0 === n ? void 0 : null === (t = n[g]) || void 0 === t ? void 0 : null === (e = t.appDmSettings) || void 0 === e ? void 0 : e.dmDisabled;
                },
                [g]
            ),
            f = _.Z.useExperiment({ location: 'Authorized Applications' }, { autoTrackExposure: !0 }).enabled,
            I = (0, F.O)(n.id);
        return (0, i.jsx)('div', {
            className: a()(X.authedAppV2, V.marginBottom8),
            children: (0, i.jsx)(x.y5t, {
                component: (() => {
                    let e = L.ZP.getApplicationIconURL({
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
                        l = new Date(k.default.extractTimestamp(h)).toLocaleDateString(u);
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
                                        children: q.intl.format(q.t.yOApCA, { date: l })
                                    })
                                ]
                            }),
                            (0, i.jsx)(H.Z, {
                                appRecord: N,
                                showAppReportingOption: f,
                                selectedGuildId: r,
                                selectedChannelId: s
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
                                    children: q.intl.string(q.t.GfRGra)
                                }),
                                null != n.description &&
                                    '' !== n.description &&
                                    (0, i.jsx)(x.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-normal',
                                        children: n.description
                                    }),
                                (0, i.jsx)(ee, { application: n })
                            ]
                        }),
                        (() => {
                            let e = [];
                            for (let n of t) e.push(...(0, E.CI)(n, t)), n === d.x.APPLICATIONS_COMMANDS && e.push(q.intl.string(q.t.Ls2XRk));
                            if (e.length > 0 || (null != c && c.length > 0))
                                return (0, i.jsxs)('div', {
                                    className: X.appDetailsSection,
                                    children: [
                                        (0, i.jsx)(x.X6q, {
                                            variant: 'heading-sm/medium',
                                            color: 'header-primary',
                                            className: a()(V.marginBottom4),
                                            children: q.intl.string(q.t.xrmhRU)
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
                                                          let l = (0, v.PM)(t);
                                                          return null != l
                                                              ? (0, i.jsxs)(
                                                                    'li',
                                                                    {
                                                                        className: a()(X.permission, V.marginTop8),
                                                                        children: [(0, i.jsx)(Q, { disclosure: t }), (0, i.jsx)(x.R94, { children: l })]
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
                                    children: q.intl.string(q.t.YUU0RE)
                                }),
                                (0, i.jsx)(x.j7V, {
                                    hideBorder: !0,
                                    onChange: (e) => {
                                        G.hW.updateAsync(
                                            'applications',
                                            (t) => {
                                                g in t.appSettings ? (null == t.appSettings[g].appDmSettings ? (t.appSettings[g].appDmSettings = m.c$.create({ dmDisabled: !e })) : (t.appSettings[g].appDmSettings.dmDisabled = !e)) : (t.appSettings[g] = m.dp.create({ appDmSettings: m.c$.create({ dmDisabled: !e }) }));
                                            },
                                            G.fy.INFREQUENT_USER_ACTION
                                        );
                                    },
                                    className: X.dmSettingsSwitch,
                                    note: q.intl.string(q.t.anBbIS),
                                    value: !j,
                                    children: (0, i.jsx)(x.Text, {
                                        variant: 'text-sm/medium',
                                        children: q.intl.string(q.t.BRhdqa)
                                    })
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: X.footer,
                            children: [
                                I &&
                                    (0, i.jsx)(K, {
                                        application: n,
                                        className: X.twoWayWarningV2
                                    }),
                                (0, i.jsx)(x.zxk, {
                                    color: x.Ttl.RED,
                                    look: x.iLD.OUTLINED,
                                    size: x.PhG.SMALL,
                                    onClick: () => J(n, o),
                                    children: q.intl.string(q.t.xUqheH)
                                })
                            ]
                        })
                    ]
                })
            })
        });
    },
    ei = (0, c.U)(() => ({ searchQuery: '' })),
    el = () => {
        let e = (0, p.e7)([b.Z], () => b.Z.hidePersonalInformation),
            t = (0, p.e7)([R.Z], () => R.Z.getApps()),
            s = (0, p.e7)([w.default], () => w.default.locale),
            a = (0, p.e7)([I.ZP], () => I.ZP.getSelfEmbeddedActivities()),
            r = (0, p.e7)([D.Z, Z.Z], () => D.Z.getChannel(Z.Z.getChannelId())),
            c = null == r ? void 0 : r.getGuildId(),
            d = T.J.useExperiment({ location: 'UserSettingsAuthedApps' }, { autoTrackExposure: !0 }).enabled;
        l.useEffect(() => {
            g.Z.fetch();
        }, []),
            l.useEffect(
                () => () => {
                    ei.setState({ searchQuery: '' });
                },
                []
            );
        let u = (e) => {
                let { id: t, application: n } = e;
                g.Z.delete(t), O.S.safeDispatch(W.CkL.HIDE_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, { applicationId: n.id });
                let i = a.get(n.id);
                null != i &&
                    A.Z.leaveActivity({
                        location: i.location,
                        applicationId: n.id,
                        showFeedback: !1
                    });
            },
            m = ei((e) => e.searchQuery),
            h = (e) => ei.setState({ searchQuery: e }),
            N = (e) => {
                h(e);
            },
            f = () => {
                h('');
            },
            v = () =>
                (0, i.jsx)('div', {
                    className: X.searchContainer,
                    children: (0, i.jsx)(x.E1j, {
                        size: x.E1j.Sizes.MEDIUM,
                        query: m,
                        onChange: N,
                        onClear: f,
                        placeholder: q.intl.string(q.t['5prvKS']),
                        'aria-label': q.intl.string(q.t['5prvKS'])
                    })
                }),
            S = (e, t) =>
                (0, i.jsxs)(Y, {
                    className: X.__invalid_marginTop20,
                    children: [
                        (0, i.jsx)(x.oxh, {
                            darkSrc: n(701972),
                            lightSrc: n(818658),
                            width: 380,
                            height: 282
                        }),
                        (0, i.jsx)(x.OZU, {
                            note: e,
                            children: t
                        })
                    ]
                }),
            _ = l.useMemo(() => {
                let e = m.trim().toLowerCase();
                return '' === e || null == t ? t : t.length < 100 ? t.filter((t) => o()(e, t.application.name.toLowerCase())) : t.filter((t) => t.application.name.toLowerCase().includes(e));
            }, [t, m]);
        return e
            ? (0, i.jsx)(j.Z, {})
            : (0, i.jsx)(x.hjN, {
                  tag: x.RB0.H1,
                  title: q.intl.string(q.t['f6kk+v']),
                  children: (0, i.jsx)(x.y5t, {
                      component: (0, i.jsx)(x.ToO, {
                          className: V.marginBottom40,
                          type: x.sje.PRIMARY,
                          title: q.intl.string(q.t.HU3RFx),
                          body: q.intl.string(q.t.Nu5Yi4)
                      }),
                      children:
                          null == t || null == _
                              ? (0, i.jsx)(x.$jN, {
                                    className: V.marginTop20,
                                    type: x.$jN.Type.SPINNING_CIRCLE
                                })
                              : 0 === t.length
                                ? S(q.intl.string(q.t.CpPv5u), q.intl.string(q.t['E+SM6e']))
                                : 0 === _.length
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [v(), S(null, q.intl.string(q.t.EVWFNj))]
                                    })
                                  : (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            v(),
                                            _.sort((e, t) => Number(t.id) - Number(e.id)).map((e) =>
                                                d
                                                    ? (0, i.jsx)(
                                                          en,
                                                          {
                                                              locale: s,
                                                              onDelete: () => u(e),
                                                              selectedChannelId: null == r ? void 0 : r.id,
                                                              selectedGuildId: null != c ? c : void 0,
                                                              ...e
                                                          },
                                                          e.id
                                                      )
                                                    : (0, i.jsx)(
                                                          et,
                                                          {
                                                              locale: s,
                                                              onDelete: () => u(e),
                                                              selectedChannelId: null == r ? void 0 : r.id,
                                                              selectedGuildId: null != c ? c : void 0,
                                                              ...e
                                                          },
                                                          e.id
                                                      )
                                            )
                                        ]
                                    })
                  })
              });
    };
