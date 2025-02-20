n.d(t, {
    J: () => ec,
    Z: () => eu
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
    g = n(239091),
    E = n(230711),
    v = n(497321),
    b = n(468026),
    y = n(317381),
    O = n(513202),
    S = n(279332),
    I = n(979200),
    T = n(600164),
    N = n(299206),
    A = n(726721),
    C = n(726521),
    R = n(713938),
    P = n(973616),
    w = n(881998),
    D = n(592125),
    x = n(944486),
    L = n(246946),
    M = n(768581),
    k = n(585483),
    j = n(49012),
    U = n(709054),
    G = n(706454),
    B = n(210887),
    Z = n(675478),
    F = n(581883),
    V = n(436267),
    H = n(149418),
    W = n(494620),
    Y = n(869743),
    K = n(981631),
    z = n(388032),
    q = n(42596),
    Q = n(455812);
function X(e, t, n) {
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
function J(e) {
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
                X(e, t, n[t]);
            });
    }
    return e;
}
function $(e, t) {
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
function ee(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : $(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let et = d.ZP.connectStores([B.Z], () => ({ theme: B.Z.theme }))(h.ubH);
function en(e) {
    let { application: t, className: n } = e;
    return (0, r.jsxs)('div', {
        className: a()(q.twoWayWarning, n),
        children: [
            (0, r.jsx)(h.d3s, {
                size: 'md',
                color: 'currentColor',
                className: q.twoWayWarningIcon
            }),
            (0, r.jsx)(h.Text, {
                color: 'text-normal',
                variant: 'text-sm/medium',
                children: z.NW.format(z.t.jUhnwc, {
                    applicationName: t.name,
                    onConnectionPress: () => E.Z.setSection(K.jXE.SETTINGS_CONNECTIONS)
                })
            })
        ]
    });
}
let er = (e) => {
        let { disclosure: t } = e;
        return i.useMemo(() => {
            switch (t) {
                case f.u$.IP_LOCATION:
                    return (0, r.jsx)(h.enf, {
                        size: 'md',
                        color: 'currentColor',
                        className: q.disclosureIcon
                    });
                case f.u$.DISPLAYS_ADVERTISEMENTS:
                    return (0, r.jsx)(h.FLu, { className: q.disclosureIcon });
                default:
                    return (0, r.jsx)(h.d3s, { className: q.disclosureIcon });
            }
        }, [t]);
    },
    ei = (e, t, n) => {
        (0, C.uu)({
            application: e,
            entrypoint: 'authorized_apps_settings',
            contextualGuildId: t,
            contextualChannelId: n
        });
    },
    eo = (e, t) => {
        let n = z.NW.string(z.t.DT39Aw),
            i = z.NW.formatToPlainString(z.t.QWGvxM, { applicationName: e.name });
        return (
            (0, H.Z)(e) &&
                ((n = z.NW.formatToPlainString(z.t['paC+UV'], { applicationName: e.name })),
                (i = (0, r.jsxs)(r.Fragment, {
                    children: [
                        z.NW.formatToPlainString(z.t.inM1Ym, { applicationName: e.name }),
                        (0, r.jsx)(W.Z, {
                            look: W.z.WARNING,
                            className: q.infoBox,
                            children: z.NW.string(z.t.LY35Z2)
                        })
                    ]
                }))),
            (0, V.Z)(e.id) &&
                (i = (0, r.jsxs)(r.Fragment, {
                    children: [
                        i,
                        (0, r.jsx)(W.Z, {
                            className: q.infoBox,
                            children: z.NW.format(z.t.KRnERk, { applicationName: e.name })
                        })
                    ]
                })),
            (0, h.h7j)((e) =>
                (0, r.jsx)(
                    b.default,
                    J(
                        {
                            title: n,
                            body: i,
                            confirmText: z.NW.string(z.t.xUqheH),
                            confirmColor: h.Ttl.RED,
                            cancelText: z.NW.string(z.t['ETE/oK']),
                            onConfirm: t
                        },
                        e
                    )
                )
            )
        );
    },
    ea = (e) => {
        let { application: t } = e,
            n = () => {
                null != t.terms_of_service_url &&
                    (0, j.q)({
                        href: t.terms_of_service_url,
                        shouldConfirm: !0
                    });
            },
            i = () => {
                null != t.privacy_policy_url &&
                    (0, j.q)({
                        href: t.privacy_policy_url,
                        shouldConfirm: !0
                    });
            };
        return null != t.terms_of_service_url || null != t.privacy_policy_url
            ? (0, r.jsxs)('div', {
                  className: q.tosPrivacy,
                  children: [
                      null != t.terms_of_service_url
                          ? (0, r.jsxs)(_.P, {
                                tag: 'a',
                                onClick: n,
                                className: q.tos,
                                children: [
                                    (0, r.jsx)(h.R94, {
                                        className: q.link,
                                        children: z.NW.string(z.t['lx+GeX'])
                                    }),
                                    (0, r.jsx)(h.Gr1, {
                                        className: q.externalLinkIcon,
                                        color: 'var(--text-link)'
                                    })
                                ]
                            })
                          : null,
                      null != t.privacy_policy_url
                          ? (0, r.jsxs)('div', {
                                className: q.privacy,
                                children: [
                                    null != t.terms_of_service_url ? (0, r.jsx)('div', { className: q.divider }) : null,
                                    (0, r.jsxs)(_.P, {
                                        tag: 'a',
                                        onClick: i,
                                        className: q.privacy,
                                        children: [
                                            (0, r.jsx)(h.R94, {
                                                className: q.link,
                                                children: z.NW.string(z.t.okSwq6)
                                            }),
                                            (0, r.jsx)(h.Gr1, {
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
    es = (e) => {
        let { scopes: t, application: o, selectedChannelId: s, selectedGuildId: l, onDelete: c, disclosures: d, locale: f, id: p } = e,
            _ = i.useMemo(() => P.ZP.createFromServer(o), [o]),
            m = A.Z.useExperiment({ location: 'Authorized Applications' }, { autoTrackExposure: !0 }).enabled,
            E = () => {
                let e = [];
                for (let n of t) e.push(...(0, R.CI)(n, t)), n === u.x.APPLICATIONS_COMMANDS && e.push(z.NW.string(z.t.Ls2XRk));
                if (e.length > 0 || (null != d && d.length > 0))
                    return (0, r.jsx)(h.xJW, {
                        faded: !0,
                        title: z.NW.string(z.t.xrmhRU),
                        className: Q.marginTop20,
                        children: (0, r.jsxs)('ul', {
                            children: [
                                e.map((e, t) =>
                                    (0, r.jsxs)(
                                        'li',
                                        {
                                            className: a()(q.permission, Q.marginTop8),
                                            children: [(0, r.jsx)('i', { className: q.permissionCheckmark }), (0, r.jsx)(h.R94, { children: e })]
                                        },
                                        t
                                    )
                                ),
                                null == d
                                    ? void 0
                                    : d.map((t, n) => {
                                          let i = (0, I.PM)(t);
                                          return null != i
                                              ? (0, r.jsxs)(
                                                    'li',
                                                    {
                                                        className: a()(q.permission, Q.marginTop8),
                                                        children: [(0, r.jsx)(er, { disclosure: t }), (0, r.jsx)(h.R94, { children: i })]
                                                    },
                                                    n + e.length
                                                )
                                              : null;
                                      })
                            ]
                        })
                    });
            },
            v = () => {
                if (null != o.description && '' !== o.description)
                    return (0, r.jsx)(h.xJW, {
                        faded: !0,
                        title: z.NW.string(z.t.GfRGra),
                        children: (0, r.jsx)(h.R94, { children: o.description })
                    });
            },
            b = (0, N.Z)({
                id: o.id,
                label: z.NW.string(z.t['+NP/b2'])
            }),
            y = i.useMemo(() => {
                if (null != b)
                    return (e) => {
                        (0, g.jW)(e, async () => {
                            let { default: e } = await n.e('78040').then(n.bind(n, 599382));
                            return (t) => (0, r.jsx)(e, ee(J({}, t), { items: [b] }));
                        });
                    };
            }, [b]),
            O = () => {
                let e = M.ZP.getApplicationIconURL({
                        id: o.id,
                        icon: o.icon
                    }),
                    t =
                        null != e
                            ? (0, r.jsx)(T.Z.Child, {
                                  className: q.appAvatar,
                                  grow: 0,
                                  children: (0, r.jsx)('img', {
                                      src: e,
                                      alt: ''
                                  })
                              })
                            : null,
                    n = new Date(U.default.extractTimestamp(p)).toLocaleDateString(f);
                return (0, r.jsxs)('div', {
                    className: a()(q.header, Q.marginBottom20),
                    children: [
                        t,
                        (0, r.jsxs)('div', {
                            className: q.headerTextContainer,
                            children: [
                                (0, r.jsx)(h.X6q, {
                                    variant: 'text-sm/semibold',
                                    className: q.headerText,
                                    children: o.name
                                }),
                                (0, r.jsx)(h.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-normal',
                                    children: z.NW.format(z.t.yOApCA, { date: n })
                                })
                            ]
                        }),
                        m
                            ? (0, r.jsx)(h.zxk, {
                                  color: h.Ttl.TRANSPARENT,
                                  look: h.iLD.LINK,
                                  size: h.PhG.SMALL,
                                  className: q.reportButton,
                                  onClick: () => ei(_, l, s),
                                  children: z.NW.string(z.t['+78Pfn'])
                              })
                            : null,
                        (0, r.jsx)(h.zxk, {
                            color: h.Ttl.RED,
                            look: h.iLD.OUTLINED,
                            size: h.PhG.SMALL,
                            onClick: () => eo(o, c),
                            children: z.NW.string(z.t.xUqheH)
                        })
                    ]
                });
            },
            S = (0, V.O)(o.id);
        return (0, r.jsx)(h.Zbd, {
            className: a()(q.authedApp, Q.marginBottom8),
            outline: !0,
            onContextMenu: y,
            children: (0, r.jsxs)(h.y5t, {
                component: O(),
                children: [
                    v(),
                    (0, r.jsx)(ea, { application: o }),
                    E(),
                    S &&
                        (0, r.jsx)(en, {
                            application: o,
                            className: q.twoWayWarningV1
                        })
                ]
            })
        });
    },
    el = (e) => {
        let { scopes: t, application: n, selectedChannelId: o, selectedGuildId: s, onDelete: l, disclosures: c, locale: f, id: _ } = e,
            m = n.id,
            g = i.useMemo(() => P.ZP.createFromServer(n), [n]),
            E = (0, d.e7)(
                [F.Z],
                () => {
                    var e, t, n, r;
                    return null === (r = F.Z.settings.applications) || void 0 === r ? void 0 : null === (n = r.appSettings) || void 0 === n ? void 0 : null === (t = n[m]) || void 0 === t ? void 0 : null === (e = t.appDmSettings) || void 0 === e ? void 0 : e.dmDisabled;
                },
                [m]
            ),
            v = A.Z.useExperiment({ location: 'Authorized Applications' }, { autoTrackExposure: !0 }).enabled,
            b = () => {
                let e = [];
                for (let n of t) e.push(...(0, R.CI)(n, t)), n === u.x.APPLICATIONS_COMMANDS && e.push(z.NW.string(z.t.Ls2XRk));
                if (e.length > 0 || (null != c && c.length > 0))
                    return (0, r.jsxs)('div', {
                        className: q.appDetailsSection,
                        children: [
                            (0, r.jsx)(h.X6q, {
                                variant: 'heading-sm/medium',
                                color: 'header-primary',
                                className: a()(Q.marginBottom4),
                                children: z.NW.string(z.t.xrmhRU)
                            }),
                            (0, r.jsxs)('ul', {
                                children: [
                                    e.map((e, t) =>
                                        (0, r.jsxs)(
                                            'li',
                                            {
                                                className: a()(q.permission, Q.marginTop8),
                                                children: [(0, r.jsx)('i', { className: q.permissionCheckmark }), (0, r.jsx)(h.R94, { children: e })]
                                            },
                                            t
                                        )
                                    ),
                                    null == c
                                        ? void 0
                                        : c.map((t, n) => {
                                              let i = (0, I.PM)(t);
                                              return null != i
                                                  ? (0, r.jsxs)(
                                                        'li',
                                                        {
                                                            className: a()(q.permission, Q.marginTop8),
                                                            children: [(0, r.jsx)(er, { disclosure: t }), (0, r.jsx)(h.R94, { children: i })]
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
                    className: q.appDetailsSection,
                    children: [
                        (0, r.jsx)(h.X6q, {
                            variant: 'heading-sm/medium',
                            color: 'header-primary',
                            className: a()(Q.marginBottom4),
                            children: z.NW.string(z.t.GfRGra)
                        }),
                        null != n.description &&
                            '' !== n.description &&
                            (0, r.jsx)(h.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-normal',
                                children: n.description
                            }),
                        (0, r.jsx)(ea, { application: n })
                    ]
                }),
            O = () => {
                let e = M.ZP.getApplicationIconURL({
                        id: n.id,
                        icon: n.icon
                    }),
                    t =
                        null != e
                            ? (0, r.jsx)(T.Z.Child, {
                                  className: q.appAvatarV2,
                                  grow: 0,
                                  children: (0, r.jsx)('img', {
                                      src: e,
                                      alt: ''
                                  })
                              })
                            : null,
                    i = new Date(U.default.extractTimestamp(_)).toLocaleDateString(f);
                return (0, r.jsxs)('div', {
                    className: a()(q.headerV2),
                    children: [
                        t,
                        (0, r.jsxs)('div', {
                            className: q.headerTextContainerV2,
                            children: [
                                (0, r.jsx)(h.X6q, {
                                    variant: 'heading-md/semibold',
                                    className: a()(q.headerText, Q.marginBottom4),
                                    children: n.name
                                }),
                                (0, r.jsx)(h.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-normal',
                                    children: z.NW.format(z.t.yOApCA, { date: i })
                                })
                            ]
                        }),
                        (0, r.jsx)(Y.Z, {
                            appRecord: g,
                            showAppReportingOption: v,
                            selectedGuildId: s,
                            selectedChannelId: o
                        })
                    ]
                });
            },
            S = (e) => {
                Z.hW.updateAsync(
                    'applications',
                    (t) => {
                        m in t.appSettings ? (null == t.appSettings[m].appDmSettings ? (t.appSettings[m].appDmSettings = p.c$.create({ dmDisabled: !e })) : (t.appSettings[m].appDmSettings.dmDisabled = !e)) : (t.appSettings[m] = p.dp.create({ appDmSettings: p.c$.create({ dmDisabled: !e }) }));
                    },
                    Z.fy.INFREQUENT_USER_ACTION
                );
            },
            N = () =>
                (0, r.jsxs)('div', {
                    className: q.appDetailsSection,
                    children: [
                        (0, r.jsx)(h.X6q, {
                            variant: 'heading-sm/medium',
                            color: 'header-primary',
                            className: a()(q.dmSettingsHeader),
                            children: z.NW.string(z.t.YUU0RE)
                        }),
                        (0, r.jsx)(h.j7V, {
                            hideBorder: !0,
                            onChange: S,
                            className: q.dmSettingsSwitch,
                            note: z.NW.string(z.t.anBbIS),
                            value: !E,
                            children: (0, r.jsx)(h.Text, {
                                variant: 'text-sm/medium',
                                children: z.NW.string(z.t.BRhdqa)
                            })
                        })
                    ]
                }),
            C = (0, V.O)(n.id),
            w = () =>
                (0, r.jsxs)('div', {
                    className: q.footer,
                    children: [
                        C &&
                            (0, r.jsx)(en, {
                                application: n,
                                className: q.twoWayWarningV2
                            }),
                        (0, r.jsx)(h.zxk, {
                            color: h.Ttl.RED,
                            look: h.iLD.OUTLINED,
                            size: h.PhG.SMALL,
                            onClick: () => eo(n, l),
                            children: z.NW.string(z.t.xUqheH)
                        })
                    ]
                });
        return (0, r.jsx)('div', {
            className: a()(q.authedAppV2, Q.marginBottom8),
            children: (0, r.jsx)(h.y5t, {
                component: O(),
                children: (0, r.jsxs)('div', {
                    className: q.appDetailsContainer,
                    children: [y(), b(), N(), w()]
                })
            })
        });
    },
    ec = (0, c.U)(() => ({ searchQuery: '' })),
    eu = () => {
        let e = (0, d.e7)([L.Z], () => L.Z.hidePersonalInformation),
            t = (0, d.e7)([w.Z], () => w.Z.getApps()),
            o = (0, d.e7)([G.default], () => G.default.locale),
            a = (0, d.e7)([y.ZP], () => y.ZP.getSelfEmbeddedActivities()),
            s = (0, d.e7)([D.Z, x.Z], () => D.Z.getChannel(x.Z.getChannelId())),
            c = null == s ? void 0 : s.getGuildId(),
            u = S.J.useExperiment({ location: 'UserSettingsAuthedApps' }, { autoTrackExposure: !0 }).enabled;
        i.useEffect(() => {
            m.Z.fetch();
        }, []),
            i.useEffect(
                () => () => {
                    ec.setState({ searchQuery: '' });
                },
                []
            );
        let f = (e) => {
                let { id: t, application: n } = e;
                m.Z.delete(t), k.S.safeDispatch(K.CkL.HIDE_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, { applicationId: n.id });
                let r = a.get(n.id);
                null != r &&
                    O.Z.leaveActivity({
                        location: r.location,
                        applicationId: n.id,
                        showFeedback: !1
                    });
            },
            p = ec((e) => e.searchQuery),
            _ = (e) => ec.setState({ searchQuery: e }),
            g = (e) => {
                _(e);
            },
            E = () => {
                _('');
            },
            b = () =>
                (0, r.jsx)('div', {
                    className: q.searchContainer,
                    children: (0, r.jsx)(h.E1j, {
                        size: h.E1j.Sizes.MEDIUM,
                        query: p,
                        onChange: g,
                        onClear: E,
                        placeholder: z.NW.string(z.t['5prvKS']),
                        'aria-label': z.NW.string(z.t['5prvKS'])
                    })
                }),
            I = (e, t) =>
                (0, r.jsxs)(et, {
                    className: q.__invalid_marginTop20,
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
                          className: Q.marginTop20,
                          type: h.$jN.Type.SPINNING_CIRCLE
                      })
                    : 0 === t.length
                      ? I(z.NW.string(z.t.CpPv5u), z.NW.string(z.t['E+SM6e']))
                      : 0 === T.length
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [b(), I(null, z.NW.string(z.t.EVWFNj))]
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  b(),
                                  T.sort((e, t) => Number(t.id) - Number(e.id)).map((e) =>
                                      u
                                          ? (0, r.jsx)(
                                                el,
                                                J(
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
                                                es,
                                                J(
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
            ? (0, r.jsx)(v.Z, {})
            : (0, r.jsx)(h.hjN, {
                  tag: h.RB0.H1,
                  title: z.NW.string(z.t['f6kk+v']),
                  children: (0, r.jsx)(h.y5t, {
                      component: (0, r.jsx)(h.ToO, {
                          className: Q.marginBottom40,
                          type: h.sje.PRIMARY,
                          title: z.NW.string(z.t.HU3RFx),
                          body: z.NW.string(z.t.Nu5Yi4)
                      }),
                      children: N()
                  })
              });
    };
