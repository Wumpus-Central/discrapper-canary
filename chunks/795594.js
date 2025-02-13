n.d(t, {
    J: () => en,
    Z: () => ei
}),
    n(653041),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    s = n.n(a),
    r = n(658722),
    o = n.n(r),
    c = n(15729),
    d = n(243814),
    m = n(442837),
    p = n(921072),
    u = n(524437),
    h = n(1561),
    x = n(481060),
    g = n(384275),
    N = n(230711),
    j = n(497321),
    f = n(468026),
    T = n(317381),
    v = n(513202),
    I = n(279332),
    A = n(979200),
    S = n(600164),
    _ = n(726721),
    C = n(726521),
    E = n(713938),
    P = n(973616),
    D = n(881998),
    L = n(592125),
    b = n(944486),
    R = n(246946),
    Z = n(768581),
    O = n(585483),
    y = n(49012),
    k = n(709054),
    U = n(706454),
    w = n(210887),
    G = n(675478),
    M = n(581883),
    F = n(436267),
    z = n(149418),
    H = n(494620),
    B = n(981631),
    W = n(388032),
    q = n(995233),
    X = n(483938);
let V = m.ZP.connectStores([w.Z], () => ({ theme: w.Z.theme }))(x.ubH);
function Y(e) {
    let { application: t, className: n } = e;
    return (0, i.jsxs)('div', {
        className: s()(q.twoWayWarning, n),
        children: [
            (0, i.jsx)(x.d3s, {
                size: 'md',
                color: 'currentColor',
                className: q.twoWayWarningIcon
            }),
            (0, i.jsx)(x.Text, {
                color: 'text-normal',
                variant: 'text-sm/medium',
                children: W.intl.format(W.t.jUhnwc, {
                    applicationName: t.name,
                    onConnectionPress: () => N.Z.setSection(B.jXE.SETTINGS_CONNECTIONS)
                })
            })
        ]
    });
}
let K = (e) => {
        let { disclosure: t } = e;
        return l.useMemo(() => {
            switch (t) {
                case p.u$.IP_LOCATION:
                    return (0, i.jsx)(x.enf, {
                        size: 'md',
                        color: 'currentColor',
                        className: q.disclosureIcon
                    });
                case p.u$.DISPLAYS_ADVERTISEMENTS:
                    return (0, i.jsx)(x.FLu, { className: q.disclosureIcon });
                default:
                    return (0, i.jsx)(x.d3s, { className: q.disclosureIcon });
            }
        }, [t]);
    },
    Q = (e, t, n) => {
        (0, C.uu)({
            application: e,
            entrypoint: 'authorized_apps_settings',
            contextualGuildId: t,
            contextualChannelId: n
        });
    },
    $ = (e, t) => {
        let n = W.intl.string(W.t.DT39Aw),
            l = W.intl.formatToPlainString(W.t.QWGvxM, { applicationName: e.name });
        return (
            (0, z.Z)(e) &&
                ((n = W.intl.formatToPlainString(W.t['paC+UV'], { applicationName: e.name })),
                (l = (0, i.jsxs)(i.Fragment, {
                    children: [
                        W.intl.formatToPlainString(W.t.inM1Ym, { applicationName: e.name }),
                        (0, i.jsx)(H.Z, {
                            look: H.z.WARNING,
                            className: q.infoBox,
                            children: W.intl.string(W.t.LY35Z2)
                        })
                    ]
                }))),
            (0, F.Z)(e.id) &&
                (l = (0, i.jsxs)(i.Fragment, {
                    children: [
                        l,
                        (0, i.jsx)(H.Z, {
                            className: q.infoBox,
                            children: W.intl.format(W.t.KRnERk, { applicationName: e.name })
                        })
                    ]
                })),
            (0, x.h7j)((e) =>
                (0, i.jsx)(f.default, {
                    title: n,
                    body: l,
                    confirmText: W.intl.string(W.t.xUqheH),
                    confirmColor: x.Ttl.RED,
                    cancelText: W.intl.string(W.t['ETE/oK']),
                    onConfirm: t,
                    ...e
                })
            )
        );
    },
    J = (e) => {
        let { application: t } = e;
        return null != t.terms_of_service_url || null != t.privacy_policy_url
            ? (0, i.jsxs)('div', {
                  className: q.tosPrivacy,
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
                                className: q.tos,
                                children: [
                                    (0, i.jsx)(x.R94, {
                                        className: q.link,
                                        children: W.intl.string(W.t['lx+GeX'])
                                    }),
                                    (0, i.jsx)(x.Gr1, {
                                        className: q.externalLinkIcon,
                                        color: 'var(--text-link)'
                                    })
                                ]
                            })
                          : null,
                      null != t.privacy_policy_url
                          ? (0, i.jsxs)('div', {
                                className: q.privacy,
                                children: [
                                    null != t.terms_of_service_url ? (0, i.jsx)('div', { className: q.divider }) : null,
                                    (0, i.jsxs)(h.P, {
                                        tag: 'a',
                                        onClick: () => {
                                            null != t.privacy_policy_url &&
                                                (0, y.q)({
                                                    href: t.privacy_policy_url,
                                                    shouldConfirm: !0
                                                });
                                        },
                                        className: q.privacy,
                                        children: [
                                            (0, i.jsx)(x.R94, {
                                                className: q.link,
                                                children: W.intl.string(W.t.okSwq6)
                                            }),
                                            (0, i.jsx)(x.Gr1, {
                                                className: q.externalLinkIcon,
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
    ee = (e) => {
        let { scopes: t, application: n, selectedChannelId: a, selectedGuildId: r, onDelete: o, disclosures: c, locale: m, id: p } = e,
            u = l.useMemo(() => P.ZP.createFromServer(n), [n]),
            h = _.Z.useExperiment({ location: 'Authorized Applications' }, { autoTrackExposure: !0 }).enabled,
            g = (0, F.O)(n.id);
        return (0, i.jsx)(x.Zbd, {
            className: s()(q.authedApp, X.marginBottom8),
            outline: !0,
            children: (0, i.jsxs)(x.y5t, {
                component: (() => {
                    let e = Z.ZP.getApplicationIconURL({
                            id: n.id,
                            icon: n.icon
                        }),
                        t =
                            null != e
                                ? (0, i.jsx)(S.Z.Child, {
                                      className: q.appAvatar,
                                      grow: 0,
                                      children: (0, i.jsx)('img', {
                                          src: e,
                                          alt: ''
                                      })
                                  })
                                : null,
                        l = new Date(k.default.extractTimestamp(p)).toLocaleDateString(m);
                    return (0, i.jsxs)('div', {
                        className: s()(q.header, X.marginBottom20),
                        children: [
                            t,
                            (0, i.jsxs)('div', {
                                className: q.headerTextContainer,
                                children: [
                                    (0, i.jsx)(x.X6q, {
                                        variant: 'text-sm/semibold',
                                        className: q.headerText,
                                        children: n.name
                                    }),
                                    (0, i.jsx)(x.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-normal',
                                        children: W.intl.format(W.t.yOApCA, { date: l })
                                    })
                                ]
                            }),
                            h
                                ? (0, i.jsx)(x.zxk, {
                                      color: x.Ttl.TRANSPARENT,
                                      look: x.iLD.LINK,
                                      size: x.PhG.SMALL,
                                      className: q.reportButton,
                                      onClick: () => Q(u, r, a),
                                      children: W.intl.string(W.t['+78Pfn'])
                                  })
                                : null,
                            (0, i.jsx)(x.zxk, {
                                color: x.Ttl.RED,
                                look: x.iLD.OUTLINED,
                                size: x.PhG.SMALL,
                                onClick: () => $(n, o),
                                children: W.intl.string(W.t.xUqheH)
                            })
                        ]
                    });
                })(),
                children: [
                    (() => {
                        if (null != n.description && '' !== n.description)
                            return (0, i.jsx)(x.xJW, {
                                faded: !0,
                                title: W.intl.string(W.t.GfRGra),
                                children: (0, i.jsx)(x.R94, { children: n.description })
                            });
                    })(),
                    (0, i.jsx)(J, { application: n }),
                    (() => {
                        let e = [];
                        for (let n of t) e.push(...(0, E.CI)(n, t)), n === d.x.APPLICATIONS_COMMANDS && e.push(W.intl.string(W.t.Ls2XRk));
                        if (e.length > 0 || (null != c && c.length > 0))
                            return (0, i.jsx)(x.xJW, {
                                faded: !0,
                                title: W.intl.string(W.t.xrmhRU),
                                className: X.marginTop20,
                                children: (0, i.jsxs)('ul', {
                                    children: [
                                        e.map((e, t) =>
                                            (0, i.jsxs)(
                                                'li',
                                                {
                                                    className: s()(q.permission, X.marginTop8),
                                                    children: [(0, i.jsx)('i', { className: q.permissionCheckmark }), (0, i.jsx)(x.R94, { children: e })]
                                                },
                                                t
                                            )
                                        ),
                                        null == c
                                            ? void 0
                                            : c.map((t, n) => {
                                                  let l = (0, A.PM)(t);
                                                  return null != l
                                                      ? (0, i.jsxs)(
                                                            'li',
                                                            {
                                                                className: s()(q.permission, X.marginTop8),
                                                                children: [(0, i.jsx)(K, { disclosure: t }), (0, i.jsx)(x.R94, { children: l })]
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
                        (0, i.jsx)(Y, {
                            application: n,
                            className: q.twoWayWarningV1
                        })
                ]
            })
        });
    },
    et = (e) => {
        let { scopes: t, application: n, selectedChannelId: a, selectedGuildId: r, onDelete: o, disclosures: c, locale: p, id: g } = e,
            N = n.id,
            j = l.useMemo(() => P.ZP.createFromServer(n), [n]),
            f = (0, m.e7)(
                [M.Z],
                () => {
                    var e, t, n, i;
                    return null === (i = M.Z.settings.applications) || void 0 === i ? void 0 : null === (n = i.appSettings) || void 0 === n ? void 0 : null === (t = n[N]) || void 0 === t ? void 0 : null === (e = t.appDmSettings) || void 0 === e ? void 0 : e.dmDisabled;
                },
                [N]
            ),
            T = _.Z.useExperiment({ location: 'Authorized Applications' }, { autoTrackExposure: !0 }).enabled,
            v = (0, F.O)(n.id);
        return (0, i.jsx)('div', {
            className: s()(q.authedAppV2, X.marginBottom8),
            children: (0, i.jsx)(x.y5t, {
                component: (() => {
                    let e = Z.ZP.getApplicationIconURL({
                            id: n.id,
                            icon: n.icon
                        }),
                        t =
                            null != e
                                ? (0, i.jsx)(S.Z.Child, {
                                      className: q.appAvatarV2,
                                      grow: 0,
                                      children: (0, i.jsx)('img', {
                                          src: e,
                                          alt: ''
                                      })
                                  })
                                : null,
                        l = new Date(k.default.extractTimestamp(g)).toLocaleDateString(p);
                    return (0, i.jsxs)('div', {
                        className: s()(q.headerV2),
                        children: [
                            t,
                            (0, i.jsxs)('div', {
                                className: q.headerTextContainerV2,
                                children: [
                                    (0, i.jsx)(x.X6q, {
                                        variant: 'heading-md/semibold',
                                        className: s()(q.headerText, X.marginBottom4),
                                        children: n.name
                                    }),
                                    (0, i.jsx)(x.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-normal',
                                        children: W.intl.format(W.t.yOApCA, { date: l })
                                    })
                                ]
                            }),
                            (0, i.jsx)(x.yRy, {
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, i.jsxs)(x.v2r, {
                                        navId: 'authorized-app-action-menu',
                                        onClose: t,
                                        'aria-label': W.intl.string(W.t.tKobzc),
                                        onSelect: void 0,
                                        children: [
                                            T
                                                ? (0, i.jsx)(x.sNh, {
                                                      id: 'report',
                                                      label: W.intl.string(W.t['+78Pfn']),
                                                      color: 'danger',
                                                      action: () => Q(j, r, a)
                                                  })
                                                : null,
                                            (0, i.jsx)(x.sNh, {
                                                id: 'deauthorize',
                                                label: W.intl.string(W.t.xUqheH),
                                                color: 'danger',
                                                action: () => $(n, o)
                                            })
                                        ]
                                    });
                                },
                                align: 'right',
                                position: 'bottom',
                                children: (e) =>
                                    (0, i.jsx)(h.P, {
                                        className: s()(q.actionMenuButton),
                                        'aria-label': W.intl.string(W.t.UKOtz8),
                                        ...e,
                                        children: (0, i.jsx)(x.xhG, {
                                            size: 'xs',
                                            color: x.TVs.colors.INTERACTIVE_NORMAL
                                        })
                                    })
                            })
                        ]
                    });
                })(),
                children: (0, i.jsxs)('div', {
                    className: q.appDetailsContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: q.appDetailsSection,
                            children: [
                                (0, i.jsx)(x.X6q, {
                                    variant: 'heading-sm/medium',
                                    color: 'header-primary',
                                    className: s()(X.marginBottom4),
                                    children: W.intl.string(W.t.GfRGra)
                                }),
                                null != n.description &&
                                    '' !== n.description &&
                                    (0, i.jsx)(x.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-normal',
                                        children: n.description
                                    }),
                                (0, i.jsx)(J, { application: n })
                            ]
                        }),
                        (() => {
                            let e = [];
                            for (let n of t) e.push(...(0, E.CI)(n, t)), n === d.x.APPLICATIONS_COMMANDS && e.push(W.intl.string(W.t.Ls2XRk));
                            if (e.length > 0 || (null != c && c.length > 0))
                                return (0, i.jsxs)('div', {
                                    className: q.appDetailsSection,
                                    children: [
                                        (0, i.jsx)(x.X6q, {
                                            variant: 'heading-sm/medium',
                                            color: 'header-primary',
                                            className: s()(X.marginBottom4),
                                            children: W.intl.string(W.t.xrmhRU)
                                        }),
                                        (0, i.jsxs)('ul', {
                                            children: [
                                                e.map((e, t) =>
                                                    (0, i.jsxs)(
                                                        'li',
                                                        {
                                                            className: s()(q.permission, X.marginTop8),
                                                            children: [(0, i.jsx)('i', { className: q.permissionCheckmark }), (0, i.jsx)(x.R94, { children: e })]
                                                        },
                                                        t
                                                    )
                                                ),
                                                null == c
                                                    ? void 0
                                                    : c.map((t, n) => {
                                                          let l = (0, A.PM)(t);
                                                          return null != l
                                                              ? (0, i.jsxs)(
                                                                    'li',
                                                                    {
                                                                        className: s()(q.permission, X.marginTop8),
                                                                        children: [(0, i.jsx)(K, { disclosure: t }), (0, i.jsx)(x.R94, { children: l })]
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
                            className: q.appDetailsSection,
                            children: [
                                (0, i.jsx)(x.X6q, {
                                    variant: 'heading-sm/medium',
                                    color: 'header-primary',
                                    className: s()(q.dmSettingsHeader),
                                    children: W.intl.string(W.t.YUU0RE)
                                }),
                                (0, i.jsx)(x.j7V, {
                                    hideBorder: !0,
                                    onChange: (e) => {
                                        G.hW.updateAsync(
                                            'applications',
                                            (t) => {
                                                N in t.appSettings ? (null == t.appSettings[N].appDmSettings ? (t.appSettings[N].appDmSettings = u.c$.create({ dmDisabled: !e })) : (t.appSettings[N].appDmSettings.dmDisabled = !e)) : (t.appSettings[N] = u.dp.create({ appDmSettings: u.c$.create({ dmDisabled: !e }) }));
                                            },
                                            G.fy.INFREQUENT_USER_ACTION
                                        );
                                    },
                                    className: q.dmSettingsSwitch,
                                    note: W.intl.string(W.t.anBbIS),
                                    value: !f,
                                    children: (0, i.jsx)(x.Text, {
                                        variant: 'text-sm/medium',
                                        children: W.intl.string(W.t.BRhdqa)
                                    })
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: q.footer,
                            children: [
                                v &&
                                    (0, i.jsx)(Y, {
                                        application: n,
                                        className: q.twoWayWarningV2
                                    }),
                                (0, i.jsx)(x.zxk, {
                                    color: x.Ttl.RED,
                                    look: x.iLD.OUTLINED,
                                    size: x.PhG.SMALL,
                                    onClick: () => $(n, o),
                                    children: W.intl.string(W.t.xUqheH)
                                })
                            ]
                        })
                    ]
                })
            })
        });
    },
    en = (0, c.U)(() => ({ searchQuery: '' })),
    ei = () => {
        let e = (0, m.e7)([R.Z], () => R.Z.hidePersonalInformation),
            t = (0, m.e7)([D.Z], () => D.Z.getApps()),
            a = (0, m.e7)([U.default], () => U.default.locale),
            s = (0, m.e7)([T.ZP], () => T.ZP.getSelfEmbeddedActivities()),
            r = (0, m.e7)([L.Z, b.Z], () => L.Z.getChannel(b.Z.getChannelId())),
            c = null == r ? void 0 : r.getGuildId(),
            d = I.J.useExperiment({ location: 'UserSettingsAuthedApps' }, { autoTrackExposure: !0 }).enabled;
        l.useEffect(() => {
            g.Z.fetch();
        }, []),
            l.useEffect(
                () => () => {
                    en.setState({ searchQuery: '' });
                },
                []
            );
        let p = (e) => {
                let { id: t, application: n } = e;
                g.Z.delete(t), O.S.safeDispatch(B.CkL.HIDE_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, { applicationId: n.id });
                let i = s.get(n.id);
                null != i &&
                    v.Z.leaveActivity({
                        location: i.location,
                        applicationId: n.id,
                        showFeedback: !1
                    });
            },
            u = en((e) => e.searchQuery),
            h = (e) => en.setState({ searchQuery: e }),
            N = (e) => {
                h(e);
            },
            f = () => {
                h('');
            },
            A = () =>
                (0, i.jsx)('div', {
                    className: q.searchContainer,
                    children: (0, i.jsx)(x.E1j, {
                        size: x.E1j.Sizes.MEDIUM,
                        query: u,
                        onChange: N,
                        onClear: f,
                        placeholder: W.intl.string(W.t['5prvKS']),
                        'aria-label': W.intl.string(W.t['5prvKS'])
                    })
                }),
            S = (e, t) =>
                (0, i.jsxs)(V, {
                    className: q.__invalid_marginTop20,
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
                let e = u.trim().toLowerCase();
                return '' === e || null == t ? t : t.length < 100 ? t.filter((t) => o()(e, t.application.name.toLowerCase())) : t.filter((t) => t.application.name.toLowerCase().includes(e));
            }, [t, u]);
        return e
            ? (0, i.jsx)(j.Z, {})
            : (0, i.jsx)(x.hjN, {
                  tag: x.RB0.H1,
                  title: W.intl.string(W.t['f6kk+v']),
                  children: (0, i.jsx)(x.y5t, {
                      component: (0, i.jsx)(x.ToO, {
                          className: X.marginBottom40,
                          type: x.sje.PRIMARY,
                          title: W.intl.string(W.t.HU3RFx),
                          body: W.intl.string(W.t.Nu5Yi4)
                      }),
                      children:
                          null == t || null == _
                              ? (0, i.jsx)(x.$jN, {
                                    className: X.marginTop20,
                                    type: x.$jN.Type.SPINNING_CIRCLE
                                })
                              : 0 === t.length
                                ? S(W.intl.string(W.t.CpPv5u), W.intl.string(W.t['E+SM6e']))
                                : 0 === _.length
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [A(), S(null, W.intl.string(W.t.EVWFNj))]
                                    })
                                  : (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            A(),
                                            _.sort((e, t) => Number(t.id) - Number(e.id)).map((e) =>
                                                d
                                                    ? (0, i.jsx)(
                                                          et,
                                                          {
                                                              locale: a,
                                                              onDelete: () => p(e),
                                                              selectedChannelId: null == r ? void 0 : r.id,
                                                              selectedGuildId: null != c ? c : void 0,
                                                              ...e
                                                          },
                                                          e.id
                                                      )
                                                    : (0, i.jsx)(
                                                          ee,
                                                          {
                                                              locale: a,
                                                              onDelete: () => p(e),
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
