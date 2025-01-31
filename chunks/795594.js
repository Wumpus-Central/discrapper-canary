t.d(n, {
    J: () => H,
    Z: () => K
}),
    t(653041),
    t(47120);
var l = t(200651),
    i = t(192379),
    s = t(120356),
    r = t.n(s),
    a = t(658722),
    o = t.n(a),
    c = t(15729),
    d = t(243814),
    u = t(442837),
    m = t(921072),
    x = t(1561),
    p = t(481060),
    h = t(384275),
    N = t(230711),
    f = t(497321),
    g = t(468026),
    j = t(317381),
    I = t(513202),
    _ = t(979200),
    A = t(600164),
    T = t(726721),
    v = t(726521),
    C = t(713938),
    P = t(973616),
    S = t(881998),
    L = t(592125),
    Z = t(944486),
    E = t(246946),
    k = t(768581),
    y = t(585483),
    O = t(49012),
    R = t(709054),
    b = t(706454),
    w = t(210887),
    D = t(436267),
    G = t(149418),
    M = t(494620),
    U = t(981631),
    z = t(388032),
    B = t(728513),
    F = t(232186);
let W = u.ZP.connectStores([w.Z], () => ({ theme: w.Z.theme }))(p.ubH);
function Y(e) {
    let { application: n } = e;
    return (0, l.jsxs)('div', {
        className: B.twoWayWarning,
        children: [
            (0, l.jsx)(p.d3s, {
                size: 'md',
                color: 'currentColor',
                className: B.twoWayWarningIcon
            }),
            (0, l.jsx)(p.Text, {
                color: 'text-normal',
                variant: 'text-sm/medium',
                children: z.intl.format(z.t.jUhnwc, {
                    applicationName: n.name,
                    onConnectionPress: () => N.Z.setSection(U.jXE.SETTINGS_CONNECTIONS)
                })
            })
        ]
    });
}
let X = (e) => {
        let { disclosure: n } = e;
        return i.useMemo(() => {
            switch (n) {
                case m.u$.IP_LOCATION:
                    return (0, l.jsx)(p.enf, {
                        size: 'md',
                        color: 'currentColor',
                        className: B.disclosureIcon
                    });
                case m.u$.DISPLAYS_ADVERTISEMENTS:
                    return (0, l.jsx)(p.FLu, { className: B.disclosureIcon });
                default:
                    return (0, l.jsx)(p.d3s, { className: B.disclosureIcon });
            }
        }, [n]);
    },
    q = (e) => {
        let { scopes: n, application: t, selectedChannelId: s, selectedGuildId: a, onDelete: o, disclosures: c, locale: u, id: m } = e,
            h = i.useMemo(() => P.ZP.createFromServer(t), [t]),
            N = T.Z.useExperiment({ location: 'Authorized Applications' }, { autoTrackExposure: !0 }).enabled,
            f = () => {
                let e = z.intl.formatToPlainString(z.t.QWGvxM, { applicationName: t.name });
                return (
                    (0, G.Z)(t) &&
                        (e = (0, l.jsxs)(l.Fragment, {
                            children: [
                                e,
                                (0, l.jsx)(M.Z, {
                                    look: M.z.WARNING,
                                    className: B.infoBox,
                                    children: z.intl.string(z.t.LY35Z2)
                                })
                            ]
                        })),
                    (0, D.Z)(t.id) &&
                        (e = (0, l.jsxs)(l.Fragment, {
                            children: [
                                e,
                                (0, l.jsx)(M.Z, {
                                    className: B.infoBox,
                                    children: z.intl.format(z.t.KRnERk, { applicationName: t.name })
                                })
                            ]
                        })),
                    (0, p.h7j)((n) =>
                        (0, l.jsx)(g.default, {
                            title: z.intl.string(z.t.DT39Aw),
                            body: e,
                            confirmText: z.intl.string(z.t.xUqheH),
                            cancelText: z.intl.string(z.t['ETE/oK']),
                            onConfirm: o,
                            ...n
                        })
                    )
                );
            },
            j = () => {
                (0, v.uu)({
                    application: h,
                    entrypoint: 'authorized_apps_settings',
                    contextualGuildId: a,
                    contextualChannelId: s
                });
            },
            I = () => {
                null != t.terms_of_service_url &&
                    (0, O.q)({
                        href: t.terms_of_service_url,
                        shouldConfirm: !0
                    });
            },
            S = () => {
                null != t.privacy_policy_url &&
                    (0, O.q)({
                        href: t.privacy_policy_url,
                        shouldConfirm: !0
                    });
            },
            L = (0, D.O)(t.id);
        return (0, l.jsx)(p.Zbd, {
            className: r()(B.authedApp, F.marginBottom8),
            outline: !0,
            children: (0, l.jsxs)(p.y5t, {
                component: (() => {
                    let e = k.ZP.getApplicationIconURL({
                            id: t.id,
                            icon: t.icon
                        }),
                        n =
                            null != e
                                ? (0, l.jsx)(A.Z.Child, {
                                      className: B.appAvatar,
                                      grow: 0,
                                      children: (0, l.jsx)('img', {
                                          src: e,
                                          alt: ''
                                      })
                                  })
                                : null,
                        i = new Date(R.default.extractTimestamp(m)).toLocaleDateString(u);
                    return (0, l.jsxs)('div', {
                        className: r()(B.header, F.marginBottom20),
                        children: [
                            n,
                            (0, l.jsxs)('div', {
                                className: B.headerTextContainer,
                                children: [
                                    (0, l.jsx)(p.X6q, {
                                        variant: 'text-sm/semibold',
                                        className: B.headerText,
                                        children: t.name
                                    }),
                                    (0, l.jsx)(p.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-normal',
                                        children: z.intl.format(z.t.yOApCA, { date: i })
                                    })
                                ]
                            }),
                            N
                                ? (0, l.jsx)(p.zxk, {
                                      color: p.Ttl.TRANSPARENT,
                                      look: p.iLD.LINK,
                                      size: p.PhG.SMALL,
                                      className: B.reportButton,
                                      onClick: j,
                                      children: z.intl.string(z.t['+78Pfn'])
                                  })
                                : null,
                            (0, l.jsx)(p.zxk, {
                                color: p.Ttl.RED,
                                look: p.iLD.OUTLINED,
                                size: p.PhG.SMALL,
                                onClick: f,
                                children: z.intl.string(z.t.xUqheH)
                            })
                        ]
                    });
                })(),
                children: [
                    (() => {
                        if (null != t.description && '' !== t.description)
                            return (0, l.jsx)(p.xJW, {
                                faded: !0,
                                title: z.intl.string(z.t.GfRGra),
                                children: (0, l.jsx)(p.R94, { children: t.description })
                            });
                    })(),
                    (() => {
                        if (null != t.terms_of_service_url || null != t.privacy_policy_url)
                            return (0, l.jsxs)('div', {
                                className: B.tosPrivacy,
                                children: [
                                    null != t.terms_of_service_url
                                        ? (0, l.jsxs)(x.P, {
                                              tag: 'a',
                                              onClick: I,
                                              className: B.tos,
                                              children: [
                                                  (0, l.jsx)(p.R94, {
                                                      className: B.link,
                                                      children: z.intl.string(z.t['lx+GeX'])
                                                  }),
                                                  (0, l.jsx)(p.Gr1, {
                                                      className: B.externalLinkIcon,
                                                      color: 'var(--text-link)'
                                                  })
                                              ]
                                          })
                                        : null,
                                    null != t.privacy_policy_url
                                        ? (0, l.jsxs)('div', {
                                              className: B.privacy,
                                              children: [
                                                  null != t.terms_of_service_url ? (0, l.jsx)('div', { className: B.divider }) : null,
                                                  (0, l.jsxs)(x.P, {
                                                      tag: 'a',
                                                      onClick: S,
                                                      className: B.privacy,
                                                      children: [
                                                          (0, l.jsx)(p.R94, {
                                                              className: B.link,
                                                              children: z.intl.string(z.t.okSwq6)
                                                          }),
                                                          (0, l.jsx)(p.Gr1, {
                                                              className: B.externalLinkIcon,
                                                              color: 'var(--text-link)'
                                                          })
                                                      ]
                                                  })
                                              ]
                                          })
                                        : null
                                ]
                            });
                    })(),
                    (() => {
                        let e = [];
                        for (let t of n) e.push(...(0, C.CI)(t, n)), t === d.x.APPLICATIONS_COMMANDS && e.push(z.intl.string(z.t.Ls2XRk));
                        if (e.length > 0 || (null != c && c.length > 0))
                            return (0, l.jsx)(p.xJW, {
                                faded: !0,
                                title: z.intl.string(z.t.xrmhRU),
                                className: F.marginTop20,
                                children: (0, l.jsxs)('ul', {
                                    children: [
                                        e.map((e, n) =>
                                            (0, l.jsxs)(
                                                'li',
                                                {
                                                    className: r()(B.permission, F.marginTop8),
                                                    children: [(0, l.jsx)('i', { className: B.permissionCheckmark }), (0, l.jsx)(p.R94, { children: e })]
                                                },
                                                n
                                            )
                                        ),
                                        null == c
                                            ? void 0
                                            : c.map((n, t) => {
                                                  let i = (0, _.PM)(n);
                                                  return null != i
                                                      ? (0, l.jsxs)(
                                                            'li',
                                                            {
                                                                className: r()(B.permission, F.marginTop8),
                                                                children: [(0, l.jsx)(X, { disclosure: n }), (0, l.jsx)(p.R94, { children: i })]
                                                            },
                                                            t + e.length
                                                        )
                                                      : null;
                                              })
                                    ]
                                })
                            });
                    })(),
                    L && (0, l.jsx)(Y, { application: t })
                ]
            })
        });
    },
    H = (0, c.U)(() => ({ searchQuery: '' })),
    K = () => {
        let e = (0, u.e7)([E.Z], () => E.Z.hidePersonalInformation),
            n = (0, u.e7)([S.Z], () => S.Z.getApps()),
            s = (0, u.e7)([b.default], () => b.default.locale),
            r = (0, u.e7)([j.ZP], () => j.ZP.getSelfEmbeddedActivities()),
            a = (0, u.e7)([L.Z, Z.Z], () => L.Z.getChannel(Z.Z.getChannelId())),
            c = null == a ? void 0 : a.getGuildId();
        i.useEffect(() => {
            h.Z.fetch();
        }, []),
            i.useEffect(
                () => () => {
                    H.setState({ searchQuery: '' });
                },
                []
            );
        let d = (e) => {
                let { id: n, application: t } = e;
                h.Z.delete(n), y.S.safeDispatch(U.CkL.HIDE_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, { applicationId: t.id });
                let l = r.get(t.id);
                null != l &&
                    I.Z.leaveActivity({
                        location: l.location,
                        applicationId: t.id,
                        showFeedback: !1
                    });
            },
            m = H((e) => e.searchQuery),
            x = (e) => H.setState({ searchQuery: e }),
            N = (e) => {
                x(e);
            },
            g = () => {
                x('');
            },
            _ = () =>
                (0, l.jsx)('div', {
                    className: B.searchContainer,
                    children: (0, l.jsx)(p.E1j, {
                        size: p.E1j.Sizes.MEDIUM,
                        query: m,
                        onChange: N,
                        onClear: g,
                        placeholder: z.intl.string(z.t['5prvKS']),
                        'aria-label': z.intl.string(z.t['5prvKS'])
                    })
                }),
            A = (e, n) =>
                (0, l.jsxs)(W, {
                    className: B.__invalid_marginTop20,
                    children: [
                        (0, l.jsx)(p.oxh, {
                            darkSrc: t(701972),
                            lightSrc: t(818658),
                            width: 380,
                            height: 282
                        }),
                        (0, l.jsx)(p.OZU, {
                            note: e,
                            children: n
                        })
                    ]
                }),
            T = i.useMemo(() => {
                let e = m.trim().toLowerCase();
                return '' === e || null == n ? n : n.length < 100 ? n.filter((n) => o()(e, n.application.name.toLowerCase())) : n.filter((n) => n.application.name.toLowerCase().includes(e));
            }, [n, m]);
        return e
            ? (0, l.jsx)(f.Z, {})
            : (0, l.jsx)(p.hjN, {
                  tag: p.RB0.H1,
                  title: z.intl.string(z.t['f6kk+v']),
                  children: (0, l.jsx)(p.y5t, {
                      component: (0, l.jsx)(p.ToO, {
                          className: F.marginBottom40,
                          type: p.sje.PRIMARY,
                          title: z.intl.string(z.t.HU3RFx),
                          body: z.intl.string(z.t.Nu5Yi4)
                      }),
                      children:
                          null == n || null == T
                              ? (0, l.jsx)(p.$jN, {
                                    className: F.marginTop20,
                                    type: p.$jN.Type.SPINNING_CIRCLE
                                })
                              : 0 === n.length
                                ? A(z.intl.string(z.t.CpPv5u), z.intl.string(z.t['E+SM6e']))
                                : 0 === T.length
                                  ? (0, l.jsxs)(l.Fragment, {
                                        children: [_(), A(null, z.intl.string(z.t.EVWFNj))]
                                    })
                                  : (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            _(),
                                            T.sort((e, n) => Number(n.id) - Number(e.id)).map((e) =>
                                                (0, l.jsx)(
                                                    q,
                                                    {
                                                        locale: s,
                                                        onDelete: () => d(e),
                                                        selectedChannelId: null == a ? void 0 : a.id,
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
