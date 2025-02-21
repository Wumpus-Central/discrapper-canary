n.d(t, {
    J: () => eh,
    Z: () => em
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
    d = n(15729),
    f = n(243814),
    p = n(442837),
    _ = n(921072),
    h = n(524437),
    m = n(1561),
    g = n(481060),
    E = n(384275),
    v = n(493683),
    b = n(239091),
    y = n(87051),
    O = n(230711),
    S = n(497321),
    I = n(468026),
    T = n(317381),
    N = n(513202),
    A = n(279332),
    C = n(979200),
    R = n(870822),
    P = n(600164),
    w = n(299206),
    D = n(726721),
    x = n(726521),
    L = n(713938),
    M = n(973616),
    k = n(881998),
    j = n(592125),
    U = n(944486),
    G = n(246946),
    B = n(9156),
    Z = n(768581),
    F = n(585483),
    V = n(49012),
    H = n(621600),
    W = n(709054),
    Y = n(706454),
    K = n(210887),
    z = n(675478),
    q = n(581883),
    Q = n(436267),
    X = n(494620),
    J = n(869743),
    $ = n(981631),
    ee = n(388032),
    et = n(42596),
    en = n(455812);
function er(e, t, n) {
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
function ei(e) {
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
                er(e, t, n[t]);
            });
    }
    return e;
}
function eo(e, t) {
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
function ea(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eo(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let es = p.ZP.connectStores([K.Z], () => ({ theme: K.Z.theme }))(g.ubH);
function el(e) {
    let { application: t, className: n } = e;
    return (0, r.jsxs)('div', {
        className: a()(et.twoWayWarning, n),
        children: [
            (0, r.jsx)(g.d3s, {
                size: 'md',
                color: 'currentColor',
                className: et.twoWayWarningIcon
            }),
            (0, r.jsx)(g.Text, {
                color: 'text-normal',
                variant: 'text-sm/medium',
                children: ee.NW.format(ee.t.jUhnwc, {
                    applicationName: t.name,
                    onConnectionPress: () => O.Z.setSection($.jXE.SETTINGS_CONNECTIONS)
                })
            })
        ]
    });
}
let ec = (e) => {
        let { disclosure: t } = e;
        return i.useMemo(() => {
            switch (t) {
                case _.u$.IP_LOCATION:
                    return (0, r.jsx)(g.enf, {
                        size: 'md',
                        color: 'currentColor',
                        className: et.disclosureIcon
                    });
                case _.u$.DISPLAYS_ADVERTISEMENTS:
                    return (0, r.jsx)(g.FLu, { className: et.disclosureIcon });
                default:
                    return (0, r.jsx)(g.d3s, { className: et.disclosureIcon });
            }
        }, [t]);
    },
    eu = (e, t, n) => {
        (0, x.uu)({
            application: e,
            entrypoint: 'authorized_apps_settings',
            contextualGuildId: t,
            contextualChannelId: n
        });
    },
    ed = (e, t) => {
        let n = ee.NW.string(ee.t.DT39Aw),
            i = ee.NW.formatToPlainString(ee.t.QWGvxM, { applicationName: e.name });
        return (
            (0, R.Z)(e) &&
                ((n = ee.NW.formatToPlainString(ee.t['paC+UV'], { applicationName: e.name })),
                (i = (0, r.jsxs)(r.Fragment, {
                    children: [
                        ee.NW.formatToPlainString(ee.t.inM1Ym, { applicationName: e.name }),
                        (0, r.jsx)(X.Z, {
                            look: X.z.WARNING,
                            className: et.infoBox,
                            children: ee.NW.string(ee.t.LY35Z2)
                        })
                    ]
                }))),
            (0, Q.Z)(e.id) &&
                (i = (0, r.jsxs)(r.Fragment, {
                    children: [
                        i,
                        (0, r.jsx)(X.Z, {
                            className: et.infoBox,
                            children: ee.NW.format(ee.t.KRnERk, { applicationName: e.name })
                        })
                    ]
                })),
            (0, g.h7j)((e) =>
                (0, r.jsx)(
                    I.default,
                    ei(
                        {
                            title: n,
                            body: i,
                            confirmText: ee.NW.string(ee.t.xUqheH),
                            confirmColor: g.Ttl.RED,
                            cancelText: ee.NW.string(ee.t['ETE/oK']),
                            onConfirm: t
                        },
                        e
                    )
                )
            )
        );
    },
    ef = (e) => {
        let { application: t } = e,
            n = () => {
                null != t.terms_of_service_url &&
                    (0, V.q)({
                        href: t.terms_of_service_url,
                        shouldConfirm: !0
                    });
            },
            i = () => {
                null != t.privacy_policy_url &&
                    (0, V.q)({
                        href: t.privacy_policy_url,
                        shouldConfirm: !0
                    });
            };
        return null != t.terms_of_service_url || null != t.privacy_policy_url
            ? (0, r.jsxs)('div', {
                  className: et.tosPrivacy,
                  children: [
                      null != t.terms_of_service_url
                          ? (0, r.jsxs)(m.P, {
                                tag: 'a',
                                onClick: n,
                                className: et.tos,
                                children: [
                                    (0, r.jsx)(g.R94, {
                                        className: et.link,
                                        children: ee.NW.string(ee.t['lx+GeX'])
                                    }),
                                    (0, r.jsx)(g.Gr1, {
                                        className: et.externalLinkIcon,
                                        color: 'var(--text-link)'
                                    })
                                ]
                            })
                          : null,
                      null != t.privacy_policy_url
                          ? (0, r.jsxs)('div', {
                                className: et.privacy,
                                children: [
                                    null != t.terms_of_service_url ? (0, r.jsx)('div', { className: et.divider }) : null,
                                    (0, r.jsxs)(m.P, {
                                        tag: 'a',
                                        onClick: i,
                                        className: et.privacy,
                                        children: [
                                            (0, r.jsx)(g.R94, {
                                                className: et.link,
                                                children: ee.NW.string(ee.t.okSwq6)
                                            }),
                                            (0, r.jsx)(g.Gr1, {
                                                className: et.externalLinkIcon,
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
    ep = (e) => {
        let { scopes: t, application: o, selectedChannelId: s, selectedGuildId: l, onDelete: c, disclosures: u, locale: d, id: p } = e,
            _ = i.useMemo(() => M.ZP.createFromServer(o), [o]),
            h = D.Z.useExperiment({ location: 'Authorized Applications' }, { autoTrackExposure: !0 }).enabled,
            m = () => {
                let e = [];
                for (let n of t) e.push(...(0, L.CI)(n, t)), n === f.x.APPLICATIONS_COMMANDS && e.push(ee.NW.string(ee.t.Ls2XRk));
                if (e.length > 0 || (null != u && u.length > 0))
                    return (0, r.jsx)(g.xJW, {
                        faded: !0,
                        title: ee.NW.string(ee.t.xrmhRU),
                        className: en.marginTop20,
                        children: (0, r.jsxs)('ul', {
                            children: [
                                e.map((e, t) =>
                                    (0, r.jsxs)(
                                        'li',
                                        {
                                            className: a()(et.permission, en.marginTop8),
                                            children: [(0, r.jsx)('i', { className: et.permissionCheckmark }), (0, r.jsx)(g.R94, { children: e })]
                                        },
                                        t
                                    )
                                ),
                                null == u
                                    ? void 0
                                    : u.map((t, n) => {
                                          let i = (0, C.PM)(t);
                                          return null != i
                                              ? (0, r.jsxs)(
                                                    'li',
                                                    {
                                                        className: a()(et.permission, en.marginTop8),
                                                        children: [(0, r.jsx)(ec, { disclosure: t }), (0, r.jsx)(g.R94, { children: i })]
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
                        title: ee.NW.string(ee.t.GfRGra),
                        children: (0, r.jsx)(g.R94, { children: o.description })
                    });
            },
            v = (0, w.Z)({
                id: o.id,
                label: ee.NW.string(ee.t['+NP/b2'])
            }),
            y = i.useMemo(() => {
                if (null != v)
                    return (e) => {
                        (0, b.jW)(e, async () => {
                            let { default: e } = await n.e('78040').then(n.bind(n, 599382));
                            return (t) => (0, r.jsx)(e, ea(ei({}, t), { items: [v] }));
                        });
                    };
            }, [v]),
            O = () => {
                let e = Z.ZP.getApplicationIconURL({
                        id: o.id,
                        icon: o.icon
                    }),
                    t =
                        null != e
                            ? (0, r.jsx)(P.Z.Child, {
                                  className: et.appAvatar,
                                  grow: 0,
                                  children: (0, r.jsx)('img', {
                                      src: e,
                                      alt: ''
                                  })
                              })
                            : null,
                    n = new Date(W.default.extractTimestamp(p)).toLocaleDateString(d);
                return (0, r.jsxs)('div', {
                    className: a()(et.header, en.marginBottom20),
                    children: [
                        t,
                        (0, r.jsxs)('div', {
                            className: et.headerTextContainer,
                            children: [
                                (0, r.jsx)(g.X6q, {
                                    variant: 'text-sm/semibold',
                                    className: et.headerText,
                                    children: o.name
                                }),
                                (0, r.jsx)(g.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-normal',
                                    children: ee.NW.format(ee.t.yOApCA, { date: n })
                                })
                            ]
                        }),
                        h
                            ? (0, r.jsx)(g.zxk, {
                                  color: g.Ttl.TRANSPARENT,
                                  look: g.iLD.LINK,
                                  size: g.PhG.SMALL,
                                  className: et.reportButton,
                                  onClick: () => eu(_, l, s),
                                  children: ee.NW.string(ee.t['+78Pfn'])
                              })
                            : null,
                        (0, r.jsx)(g.zxk, {
                            color: g.Ttl.RED,
                            look: g.iLD.OUTLINED,
                            size: g.PhG.SMALL,
                            onClick: () => ed(o, c),
                            children: ee.NW.string(ee.t.xUqheH)
                        })
                    ]
                });
            },
            S = (0, Q.O)(o.id);
        return (0, r.jsx)(g.Zbd, {
            className: a()(et.authedApp, en.marginBottom8),
            outline: !0,
            onContextMenu: y,
            children: (0, r.jsxs)(g.y5t, {
                component: O(),
                children: [
                    E(),
                    (0, r.jsx)(ef, { application: o }),
                    m(),
                    S &&
                        (0, r.jsx)(el, {
                            application: o,
                            className: et.twoWayWarningV1
                        })
                ]
            })
        });
    },
    e_ = (e) => {
        let { scopes: t, application: o, selectedChannelId: s, selectedGuildId: l, onDelete: c, disclosures: d, locale: _, id: m } = e,
            E = o.id,
            b = i.useMemo(() => M.ZP.createFromServer(o), [o]),
            O = (0, p.e7)(
                [q.Z],
                () => {
                    var e, t, n, r;
                    return null === (r = q.Z.settings.applications) || void 0 === r ? void 0 : null === (n = r.appSettings) || void 0 === n ? void 0 : null === (t = n[E]) || void 0 === t ? void 0 : null === (e = t.appDmSettings) || void 0 === e ? void 0 : e.dmDisabled;
                },
                [E]
            ),
            S = o.bot,
            I = (0, p.e7)([j.Z], () => j.Z.getDMFromUserId(null == S ? void 0 : S.id)),
            T = (0, p.e7)([B.ZP], () => (null == I ? null : B.ZP.isChannelMuted(null, I))),
            N = D.Z.useExperiment({ location: 'Authorized Applications' }, { autoTrackExposure: !0 }).enabled,
            A = () => {
                let e = [];
                for (let n of t) e.push(...(0, L.CI)(n, t)), n === f.x.APPLICATIONS_COMMANDS && e.push(ee.NW.string(ee.t.Ls2XRk));
                if (e.length > 0 || (null != d && d.length > 0))
                    return (0, r.jsxs)('div', {
                        className: et.appDetailsSection,
                        children: [
                            (0, r.jsx)(g.X6q, {
                                variant: 'heading-sm/medium',
                                color: 'header-primary',
                                className: a()(en.marginBottom4),
                                children: ee.NW.string(ee.t.xrmhRU)
                            }),
                            (0, r.jsxs)('ul', {
                                children: [
                                    e.map((e, t) =>
                                        (0, r.jsxs)(
                                            'li',
                                            {
                                                className: a()(et.permission, en.marginTop8),
                                                children: [(0, r.jsx)('i', { className: et.permissionCheckmark }), (0, r.jsx)(g.R94, { children: e })]
                                            },
                                            t
                                        )
                                    ),
                                    null == d
                                        ? void 0
                                        : d.map((t, n) => {
                                              let i = (0, C.PM)(t);
                                              return null != i
                                                  ? (0, r.jsxs)(
                                                        'li',
                                                        {
                                                            className: a()(et.permission, en.marginTop8),
                                                            children: [(0, r.jsx)(ec, { disclosure: t }), (0, r.jsx)(g.R94, { children: i })]
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
            R = () =>
                (0, r.jsxs)('div', {
                    className: et.appDetailsSection,
                    children: [
                        (0, r.jsx)(g.X6q, {
                            variant: 'heading-sm/medium',
                            color: 'header-primary',
                            className: a()(en.marginBottom4),
                            children: ee.NW.string(ee.t.GfRGra)
                        }),
                        null != o.description &&
                            '' !== o.description &&
                            (0, r.jsx)(g.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-normal',
                                children: o.description
                            }),
                        (0, r.jsx)(ef, { application: o })
                    ]
                }),
            w = () => {
                let e = Z.ZP.getApplicationIconURL({
                        id: o.id,
                        icon: o.icon
                    }),
                    t =
                        null != e
                            ? (0, r.jsx)(P.Z.Child, {
                                  className: et.appAvatarV2,
                                  grow: 0,
                                  children: (0, r.jsx)('img', {
                                      src: e,
                                      alt: ''
                                  })
                              })
                            : null,
                    n = new Date(W.default.extractTimestamp(m)).toLocaleDateString(_);
                return (0, r.jsxs)('div', {
                    className: a()(et.headerV2),
                    children: [
                        t,
                        (0, r.jsxs)('div', {
                            className: et.headerTextContainerV2,
                            children: [
                                (0, r.jsx)(g.X6q, {
                                    variant: 'heading-md/semibold',
                                    className: a()(et.headerText, en.marginBottom4),
                                    children: o.name
                                }),
                                (0, r.jsx)(g.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-normal',
                                    children: ee.NW.format(ee.t.yOApCA, { date: n })
                                })
                            ]
                        }),
                        (0, r.jsx)(J.Z, {
                            appRecord: b,
                            showAppReportingOption: N,
                            selectedGuildId: l,
                            selectedChannelId: s
                        })
                    ]
                });
            },
            x = (e) => {
                z.hW.updateAsync(
                    'applications',
                    (t) => {
                        E in t.appSettings ? (null == t.appSettings[E].appDmSettings ? (t.appSettings[E].appDmSettings = h.c$.create({ dmDisabled: !e })) : (t.appSettings[E].appDmSettings.dmDisabled = !e)) : (t.appSettings[E] = h.dp.create({ appDmSettings: h.c$.create({ dmDisabled: !e }) }));
                    },
                    z.fy.INFREQUENT_USER_ACTION
                );
            },
            k = i.useCallback(async () => {
                if ((u()(null != S, 'dm channel mute setting requires having a bot user'), null == I)) {
                    let e = await v.Z.ensurePrivateChannel(S.id);
                    y.Z.updateChannelOverrideSettings(null, e, { muted: !1 }, H.ZB.Unmuted);
                    return;
                }
                T
                    ? y.Z.updateChannelOverrideSettings(null, I, { muted: !1 }, H.ZB.Unmuted)
                    : (0, g.ZDy)(async () => {
                          let { default: e } = await n.e('8246').then(n.bind(n, 540679));
                          return (t) => (0, r.jsx)(e, ei({ channelId: I }, t));
                      });
            }, [I, S, T]),
            U = () =>
                (0, r.jsxs)('div', {
                    className: et.appDetailsSection,
                    children: [
                        (0, r.jsx)(g.X6q, {
                            variant: 'heading-sm/medium',
                            color: 'header-primary',
                            className: a()(et.dmSettingsHeader),
                            children: ee.NW.string(ee.t.YUU0RE)
                        }),
                        (0, r.jsx)(g.j7V, {
                            hideBorder: !0,
                            onChange: x,
                            className: et.dmSettingsSwitch,
                            note: ee.NW.string(ee.t.anBbIS),
                            value: !O,
                            children: (0, r.jsx)(g.Text, {
                                variant: 'text-sm/medium',
                                children: ee.NW.string(ee.t.BRhdqa)
                            })
                        }),
                        null != S
                            ? (0, r.jsxs)('div', {
                                  className: et.dmSettingsMute,
                                  children: [
                                      (0, r.jsxs)('div', {
                                          children: [
                                              (0, r.jsx)(g.Text, {
                                                  className: en.marginBottom8,
                                                  variant: 'text-sm/medium',
                                                  color: 'text-normal',
                                                  children: ee.NW.string(ee.t.NkwaBg)
                                              }),
                                              (0, r.jsx)(g.Text, {
                                                  variant: 'text-sm/normal',
                                                  color: 'text-normal',
                                                  children: ee.NW.string(ee.t.JSptKy)
                                              })
                                          ]
                                      }),
                                      (0, r.jsx)(g.zxk, {
                                          color: g.Ttl.PRIMARY,
                                          size: g.PhG.SMALL,
                                          onClick: k,
                                          children: T ? ee.NW.string(ee.t.YqAjX1) : ee.NW.string(ee.t['w4m94+'])
                                      })
                                  ]
                              })
                            : null
                    ]
                }),
            G = (0, Q.O)(o.id),
            F = () =>
                (0, r.jsxs)('div', {
                    className: et.footer,
                    children: [
                        G &&
                            (0, r.jsx)(el, {
                                application: o,
                                className: et.twoWayWarningV2
                            }),
                        (0, r.jsx)(g.zxk, {
                            color: g.Ttl.RED,
                            look: g.iLD.OUTLINED,
                            size: g.PhG.SMALL,
                            onClick: () => ed(o, c),
                            children: ee.NW.string(ee.t.xUqheH)
                        })
                    ]
                });
        return (0, r.jsx)('div', {
            className: a()(et.authedAppV2, en.marginBottom8),
            children: (0, r.jsx)(g.y5t, {
                component: w(),
                children: (0, r.jsxs)('div', {
                    className: et.appDetailsContainer,
                    children: [R(), A(), U(), F()]
                })
            })
        });
    },
    eh = (0, d.U)(() => ({ searchQuery: '' })),
    em = () => {
        let e = (0, p.e7)([G.Z], () => G.Z.hidePersonalInformation),
            t = (0, p.e7)([k.Z], () => k.Z.getApps()),
            o = (0, p.e7)([Y.default], () => Y.default.locale),
            a = (0, p.e7)([T.ZP], () => T.ZP.getSelfEmbeddedActivities()),
            s = (0, p.e7)([j.Z, U.Z], () => j.Z.getChannel(U.Z.getChannelId())),
            c = null == s ? void 0 : s.getGuildId(),
            u = A.J.useExperiment({ location: 'UserSettingsAuthedApps' }, { autoTrackExposure: !0 }).enabled;
        i.useEffect(() => {
            E.Z.fetch();
        }, []),
            i.useEffect(
                () => () => {
                    eh.setState({ searchQuery: '' });
                },
                []
            );
        let d = (e) => {
                let { id: t, application: n } = e;
                E.Z.delete(t), F.S.safeDispatch($.CkL.HIDE_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, { applicationId: n.id });
                let r = a.get(n.id);
                null != r &&
                    N.Z.leaveActivity({
                        location: r.location,
                        applicationId: n.id,
                        showFeedback: !1
                    });
            },
            f = eh((e) => e.searchQuery),
            _ = (e) => eh.setState({ searchQuery: e }),
            h = (e) => {
                _(e);
            },
            m = () => {
                _('');
            },
            v = () =>
                (0, r.jsx)('div', {
                    className: et.searchContainer,
                    children: (0, r.jsx)(g.E1j, {
                        size: g.E1j.Sizes.MEDIUM,
                        query: f,
                        onChange: h,
                        onClear: m,
                        placeholder: ee.NW.string(ee.t['5prvKS']),
                        'aria-label': ee.NW.string(ee.t['5prvKS'])
                    })
                }),
            b = (e, t) =>
                (0, r.jsxs)(es, {
                    className: et.__invalid_marginTop20,
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
            y = i.useMemo(() => {
                let e = f.trim().toLowerCase();
                return '' === e || null == t ? t : t.length < 100 ? t.filter((t) => l()(e, t.application.name.toLowerCase())) : t.filter((t) => t.application.name.toLowerCase().includes(e));
            }, [t, f]),
            O = () =>
                null == t || null == y
                    ? (0, r.jsx)(g.$jN, {
                          className: en.marginTop20,
                          type: g.$jN.Type.SPINNING_CIRCLE
                      })
                    : 0 === t.length
                      ? b(ee.NW.string(ee.t.CpPv5u), ee.NW.string(ee.t['E+SM6e']))
                      : 0 === y.length
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [v(), b(null, ee.NW.string(ee.t.EVWFNj))]
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  v(),
                                  y
                                      .sort((e, t) => Number(t.id) - Number(e.id))
                                      .map((e) =>
                                          u
                                              ? (0, r.jsx)(
                                                    e_,
                                                    ei(
                                                        {
                                                            locale: o,
                                                            onDelete: () => d(e),
                                                            selectedChannelId: null == s ? void 0 : s.id,
                                                            selectedGuildId: null != c ? c : void 0
                                                        },
                                                        e
                                                    ),
                                                    e.id
                                                )
                                              : (0, r.jsx)(
                                                    ep,
                                                    ei(
                                                        {
                                                            locale: o,
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
            ? (0, r.jsx)(S.Z, {})
            : (0, r.jsx)(g.hjN, {
                  tag: g.RB0.H1,
                  title: ee.NW.string(ee.t['f6kk+v']),
                  children: (0, r.jsx)(g.y5t, {
                      component: (0, r.jsx)(g.ToO, {
                          className: en.marginBottom40,
                          type: g.sje.PRIMARY,
                          title: ee.NW.string(ee.t.HU3RFx),
                          body: ee.NW.string(ee.t.Nu5Yi4)
                      }),
                      children: O()
                  })
              });
    };
