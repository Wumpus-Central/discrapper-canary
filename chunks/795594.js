n.d(t, {
    J: () => q,
    Z: () => Q
}),
    n(653041),
    n(47120);
var l = n(200651),
    i = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(658722),
    o = n.n(a),
    c = n(15729),
    d = n(243814),
    u = n(442837),
    m = n(921072),
    p = n(1561),
    x = n(481060),
    h = n(384275),
    N = n(230711),
    f = n(497321),
    g = n(468026),
    I = n(317381),
    T = n(513202),
    j = n(979200),
    _ = n(600164),
    A = n(726721),
    C = n(726521),
    E = n(713938),
    v = n(973616),
    P = n(881998),
    S = n(592125),
    Z = n(944486),
    L = n(246946),
    O = n(768581),
    R = n(585483),
    D = n(49012),
    k = n(709054),
    y = n(706454),
    b = n(210887),
    w = n(436267),
    G = n(149418),
    U = n(494620),
    F = n(981631),
    H = n(388032),
    M = n(157452),
    z = n(814632);
let B = u.ZP.connectStores([b.Z], () => ({ theme: b.Z.theme }))(x.ubH);
function W(e) {
    let { application: t } = e;
    return (0, l.jsxs)('div', {
        className: M.twoWayWarning,
        children: [
            (0, l.jsx)(x.d3s, {
                size: 'md',
                color: 'currentColor',
                className: M.twoWayWarningIcon
            }),
            (0, l.jsx)(x.Text, {
                color: 'text-normal',
                variant: 'text-sm/medium',
                children: H.intl.format(H.t.jUhnwc, {
                    applicationName: t.name,
                    onConnectionPress: () => N.Z.setSection(F.jXE.SETTINGS_CONNECTIONS)
                })
            })
        ]
    });
}
let Y = (e) => {
        let { disclosure: t } = e;
        return i.useMemo(() => {
            switch (t) {
                case m.u$.IP_LOCATION:
                    return (0, l.jsx)(x.enf, {
                        size: 'md',
                        color: 'currentColor',
                        className: M.disclosureIcon
                    });
                case m.u$.DISPLAYS_ADVERTISEMENTS:
                    return (0, l.jsx)(x.FLu, { className: M.disclosureIcon });
                default:
                    return (0, l.jsx)(x.d3s, { className: M.disclosureIcon });
            }
        }, [t]);
    },
    X = (e) => {
        let { scopes: t, application: n, selectedChannelId: r, selectedGuildId: a, onDelete: o, disclosures: c, locale: u, id: m } = e,
            h = i.useMemo(() => v.ZP.createFromServer(n), [n]),
            N = A.Z.useExperiment({ location: 'Authorized Applications' }, { autoTrackExposure: !0 }).enabled,
            f = () => {
                let e = H.intl.string(H.t.DT39Aw),
                    t = H.intl.formatToPlainString(H.t.QWGvxM, { applicationName: n.name });
                return (
                    (0, G.Z)(n) &&
                        ((e = H.intl.formatToPlainString(H.t['paC+UV'], { applicationName: n.name })),
                        (t = (0, l.jsxs)(l.Fragment, {
                            children: [
                                H.intl.formatToPlainString(H.t.inM1Ym, { applicationName: n.name }),
                                (0, l.jsx)(U.Z, {
                                    look: U.z.WARNING,
                                    className: M.infoBox,
                                    children: H.intl.string(H.t.LY35Z2)
                                })
                            ]
                        }))),
                    (0, w.Z)(n.id) &&
                        (t = (0, l.jsxs)(l.Fragment, {
                            children: [
                                t,
                                (0, l.jsx)(U.Z, {
                                    className: M.infoBox,
                                    children: H.intl.format(H.t.KRnERk, { applicationName: n.name })
                                })
                            ]
                        })),
                    (0, x.h7j)((n) =>
                        (0, l.jsx)(g.default, {
                            title: e,
                            body: t,
                            confirmText: H.intl.string(H.t.xUqheH),
                            confirmColor: x.Ttl.RED,
                            cancelText: H.intl.string(H.t['ETE/oK']),
                            onConfirm: o,
                            ...n
                        })
                    )
                );
            },
            I = () => {
                (0, C.uu)({
                    application: h,
                    entrypoint: 'authorized_apps_settings',
                    contextualGuildId: a,
                    contextualChannelId: r
                });
            },
            T = () => {
                null != n.terms_of_service_url &&
                    (0, D.q)({
                        href: n.terms_of_service_url,
                        shouldConfirm: !0
                    });
            },
            P = () => {
                null != n.privacy_policy_url &&
                    (0, D.q)({
                        href: n.privacy_policy_url,
                        shouldConfirm: !0
                    });
            },
            S = (0, w.O)(n.id);
        return (0, l.jsx)(x.Zbd, {
            className: s()(M.authedApp, z.marginBottom8),
            outline: !0,
            children: (0, l.jsxs)(x.y5t, {
                component: (() => {
                    let e = O.ZP.getApplicationIconURL({
                            id: n.id,
                            icon: n.icon
                        }),
                        t =
                            null != e
                                ? (0, l.jsx)(_.Z.Child, {
                                      className: M.appAvatar,
                                      grow: 0,
                                      children: (0, l.jsx)('img', {
                                          src: e,
                                          alt: ''
                                      })
                                  })
                                : null,
                        i = new Date(k.default.extractTimestamp(m)).toLocaleDateString(u);
                    return (0, l.jsxs)('div', {
                        className: s()(M.header, z.marginBottom20),
                        children: [
                            t,
                            (0, l.jsxs)('div', {
                                className: M.headerTextContainer,
                                children: [
                                    (0, l.jsx)(x.X6q, {
                                        variant: 'text-sm/semibold',
                                        className: M.headerText,
                                        children: n.name
                                    }),
                                    (0, l.jsx)(x.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-normal',
                                        children: H.intl.format(H.t.yOApCA, { date: i })
                                    })
                                ]
                            }),
                            N
                                ? (0, l.jsx)(x.zxk, {
                                      color: x.Ttl.TRANSPARENT,
                                      look: x.iLD.LINK,
                                      size: x.PhG.SMALL,
                                      className: M.reportButton,
                                      onClick: I,
                                      children: H.intl.string(H.t['+78Pfn'])
                                  })
                                : null,
                            (0, l.jsx)(x.zxk, {
                                color: x.Ttl.RED,
                                look: x.iLD.OUTLINED,
                                size: x.PhG.SMALL,
                                onClick: f,
                                children: H.intl.string(H.t.xUqheH)
                            })
                        ]
                    });
                })(),
                children: [
                    (() => {
                        if (null != n.description && '' !== n.description)
                            return (0, l.jsx)(x.xJW, {
                                faded: !0,
                                title: H.intl.string(H.t.GfRGra),
                                children: (0, l.jsx)(x.R94, { children: n.description })
                            });
                    })(),
                    (() => {
                        if (null != n.terms_of_service_url || null != n.privacy_policy_url)
                            return (0, l.jsxs)('div', {
                                className: M.tosPrivacy,
                                children: [
                                    null != n.terms_of_service_url
                                        ? (0, l.jsxs)(p.P, {
                                              tag: 'a',
                                              onClick: T,
                                              className: M.tos,
                                              children: [
                                                  (0, l.jsx)(x.R94, {
                                                      className: M.link,
                                                      children: H.intl.string(H.t['lx+GeX'])
                                                  }),
                                                  (0, l.jsx)(x.Gr1, {
                                                      className: M.externalLinkIcon,
                                                      color: 'var(--text-link)'
                                                  })
                                              ]
                                          })
                                        : null,
                                    null != n.privacy_policy_url
                                        ? (0, l.jsxs)('div', {
                                              className: M.privacy,
                                              children: [
                                                  null != n.terms_of_service_url ? (0, l.jsx)('div', { className: M.divider }) : null,
                                                  (0, l.jsxs)(p.P, {
                                                      tag: 'a',
                                                      onClick: P,
                                                      className: M.privacy,
                                                      children: [
                                                          (0, l.jsx)(x.R94, {
                                                              className: M.link,
                                                              children: H.intl.string(H.t.okSwq6)
                                                          }),
                                                          (0, l.jsx)(x.Gr1, {
                                                              className: M.externalLinkIcon,
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
                        for (let n of t) e.push(...(0, E.CI)(n, t)), n === d.x.APPLICATIONS_COMMANDS && e.push(H.intl.string(H.t.Ls2XRk));
                        if (e.length > 0 || (null != c && c.length > 0))
                            return (0, l.jsx)(x.xJW, {
                                faded: !0,
                                title: H.intl.string(H.t.xrmhRU),
                                className: z.marginTop20,
                                children: (0, l.jsxs)('ul', {
                                    children: [
                                        e.map((e, t) =>
                                            (0, l.jsxs)(
                                                'li',
                                                {
                                                    className: s()(M.permission, z.marginTop8),
                                                    children: [(0, l.jsx)('i', { className: M.permissionCheckmark }), (0, l.jsx)(x.R94, { children: e })]
                                                },
                                                t
                                            )
                                        ),
                                        null == c
                                            ? void 0
                                            : c.map((t, n) => {
                                                  let i = (0, j.PM)(t);
                                                  return null != i
                                                      ? (0, l.jsxs)(
                                                            'li',
                                                            {
                                                                className: s()(M.permission, z.marginTop8),
                                                                children: [(0, l.jsx)(Y, { disclosure: t }), (0, l.jsx)(x.R94, { children: i })]
                                                            },
                                                            n + e.length
                                                        )
                                                      : null;
                                              })
                                    ]
                                })
                            });
                    })(),
                    S && (0, l.jsx)(W, { application: n })
                ]
            })
        });
    },
    q = (0, c.U)(() => ({ searchQuery: '' })),
    Q = () => {
        let e = (0, u.e7)([L.Z], () => L.Z.hidePersonalInformation),
            t = (0, u.e7)([P.Z], () => P.Z.getApps()),
            r = (0, u.e7)([y.default], () => y.default.locale),
            s = (0, u.e7)([I.ZP], () => I.ZP.getSelfEmbeddedActivities()),
            a = (0, u.e7)([S.Z, Z.Z], () => S.Z.getChannel(Z.Z.getChannelId())),
            c = null == a ? void 0 : a.getGuildId();
        i.useEffect(() => {
            h.Z.fetch();
        }, []),
            i.useEffect(
                () => () => {
                    q.setState({ searchQuery: '' });
                },
                []
            );
        let d = (e) => {
                let { id: t, application: n } = e;
                h.Z.delete(t), R.S.safeDispatch(F.CkL.HIDE_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, { applicationId: n.id });
                let l = s.get(n.id);
                null != l &&
                    T.Z.leaveActivity({
                        location: l.location,
                        applicationId: n.id,
                        showFeedback: !1
                    });
            },
            m = q((e) => e.searchQuery),
            p = (e) => q.setState({ searchQuery: e }),
            N = (e) => {
                p(e);
            },
            g = () => {
                p('');
            },
            j = () =>
                (0, l.jsx)('div', {
                    className: M.searchContainer,
                    children: (0, l.jsx)(x.E1j, {
                        size: x.E1j.Sizes.MEDIUM,
                        query: m,
                        onChange: N,
                        onClear: g,
                        placeholder: H.intl.string(H.t['5prvKS']),
                        'aria-label': H.intl.string(H.t['5prvKS'])
                    })
                }),
            _ = (e, t) =>
                (0, l.jsxs)(B, {
                    className: M.__invalid_marginTop20,
                    children: [
                        (0, l.jsx)(x.oxh, {
                            darkSrc: n(701972),
                            lightSrc: n(818658),
                            width: 380,
                            height: 282
                        }),
                        (0, l.jsx)(x.OZU, {
                            note: e,
                            children: t
                        })
                    ]
                }),
            A = i.useMemo(() => {
                let e = m.trim().toLowerCase();
                return '' === e || null == t ? t : t.length < 100 ? t.filter((t) => o()(e, t.application.name.toLowerCase())) : t.filter((t) => t.application.name.toLowerCase().includes(e));
            }, [t, m]);
        return e
            ? (0, l.jsx)(f.Z, {})
            : (0, l.jsx)(x.hjN, {
                  tag: x.RB0.H1,
                  title: H.intl.string(H.t['f6kk+v']),
                  children: (0, l.jsx)(x.y5t, {
                      component: (0, l.jsx)(x.ToO, {
                          className: z.marginBottom40,
                          type: x.sje.PRIMARY,
                          title: H.intl.string(H.t.HU3RFx),
                          body: H.intl.string(H.t.Nu5Yi4)
                      }),
                      children:
                          null == t || null == A
                              ? (0, l.jsx)(x.$jN, {
                                    className: z.marginTop20,
                                    type: x.$jN.Type.SPINNING_CIRCLE
                                })
                              : 0 === t.length
                                ? _(H.intl.string(H.t.CpPv5u), H.intl.string(H.t['E+SM6e']))
                                : 0 === A.length
                                  ? (0, l.jsxs)(l.Fragment, {
                                        children: [j(), _(null, H.intl.string(H.t.EVWFNj))]
                                    })
                                  : (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            j(),
                                            A.sort((e, t) => Number(t.id) - Number(e.id)).map((e) =>
                                                (0, l.jsx)(
                                                    X,
                                                    {
                                                        locale: r,
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
