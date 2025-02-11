n.d(t, {
    J: () => $,
    Z: () => ee
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
    u = n(921072),
    p = n(1561),
    x = n(481060),
    h = n(384275),
    g = n(230711),
    N = n(497321),
    j = n(468026),
    f = n(317381),
    T = n(513202),
    A = n(279332),
    I = n(979200),
    _ = n(600164),
    v = n(726721),
    C = n(726521),
    E = n(713938),
    P = n(973616),
    S = n(881998),
    L = n(592125),
    Z = n(944486),
    D = n(246946),
    O = n(768581),
    R = n(585483),
    b = n(49012),
    k = n(709054),
    y = n(706454),
    w = n(210887),
    U = n(436267),
    G = n(149418),
    M = n(494620),
    z = n(981631),
    F = n(388032),
    H = n(157452),
    B = n(814632);
let W = m.ZP.connectStores([w.Z], () => ({ theme: w.Z.theme }))(x.ubH);
function q(e) {
    let { application: t, className: n } = e;
    return (0, i.jsxs)('div', {
        className: s()(H.twoWayWarning, n),
        children: [
            (0, i.jsx)(x.d3s, {
                size: 'md',
                color: 'currentColor',
                className: H.twoWayWarningIcon
            }),
            (0, i.jsx)(x.Text, {
                color: 'text-normal',
                variant: 'text-sm/medium',
                children: F.intl.format(F.t.jUhnwc, {
                    applicationName: t.name,
                    onConnectionPress: () => g.Z.setSection(z.jXE.SETTINGS_CONNECTIONS)
                })
            })
        ]
    });
}
let X = (e) => {
        let { disclosure: t } = e;
        return l.useMemo(() => {
            switch (t) {
                case u.u$.IP_LOCATION:
                    return (0, i.jsx)(x.enf, {
                        size: 'md',
                        color: 'currentColor',
                        className: H.disclosureIcon
                    });
                case u.u$.DISPLAYS_ADVERTISEMENTS:
                    return (0, i.jsx)(x.FLu, { className: H.disclosureIcon });
                default:
                    return (0, i.jsx)(x.d3s, { className: H.disclosureIcon });
            }
        }, [t]);
    },
    V = (e, t, n) => {
        (0, C.uu)({
            application: e,
            entrypoint: 'authorized_apps_settings',
            contextualGuildId: t,
            contextualChannelId: n
        });
    },
    Y = (e, t) => {
        let n = F.intl.string(F.t.DT39Aw),
            l = F.intl.formatToPlainString(F.t.QWGvxM, { applicationName: e.name });
        return (
            (0, G.Z)(e) &&
                ((n = F.intl.formatToPlainString(F.t['paC+UV'], { applicationName: e.name })),
                (l = (0, i.jsxs)(i.Fragment, {
                    children: [
                        F.intl.formatToPlainString(F.t.inM1Ym, { applicationName: e.name }),
                        (0, i.jsx)(M.Z, {
                            look: M.z.WARNING,
                            className: H.infoBox,
                            children: F.intl.string(F.t.LY35Z2)
                        })
                    ]
                }))),
            (0, U.Z)(e.id) &&
                (l = (0, i.jsxs)(i.Fragment, {
                    children: [
                        l,
                        (0, i.jsx)(M.Z, {
                            className: H.infoBox,
                            children: F.intl.format(F.t.KRnERk, { applicationName: e.name })
                        })
                    ]
                })),
            (0, x.h7j)((e) =>
                (0, i.jsx)(j.default, {
                    title: n,
                    body: l,
                    confirmText: F.intl.string(F.t.xUqheH),
                    confirmColor: x.Ttl.RED,
                    cancelText: F.intl.string(F.t['ETE/oK']),
                    onConfirm: t,
                    ...e
                })
            )
        );
    },
    K = (e) => {
        let { application: t } = e;
        return null != t.terms_of_service_url || null != t.privacy_policy_url
            ? (0, i.jsxs)('div', {
                  className: H.tosPrivacy,
                  children: [
                      null != t.terms_of_service_url
                          ? (0, i.jsxs)(p.P, {
                                tag: 'a',
                                onClick: () => {
                                    null != t.terms_of_service_url &&
                                        (0, b.q)({
                                            href: t.terms_of_service_url,
                                            shouldConfirm: !0
                                        });
                                },
                                className: H.tos,
                                children: [
                                    (0, i.jsx)(x.R94, {
                                        className: H.link,
                                        children: F.intl.string(F.t['lx+GeX'])
                                    }),
                                    (0, i.jsx)(x.Gr1, {
                                        className: H.externalLinkIcon,
                                        color: 'var(--text-link)'
                                    })
                                ]
                            })
                          : null,
                      null != t.privacy_policy_url
                          ? (0, i.jsxs)('div', {
                                className: H.privacy,
                                children: [
                                    null != t.terms_of_service_url ? (0, i.jsx)('div', { className: H.divider }) : null,
                                    (0, i.jsxs)(p.P, {
                                        tag: 'a',
                                        onClick: () => {
                                            null != t.privacy_policy_url &&
                                                (0, b.q)({
                                                    href: t.privacy_policy_url,
                                                    shouldConfirm: !0
                                                });
                                        },
                                        className: H.privacy,
                                        children: [
                                            (0, i.jsx)(x.R94, {
                                                className: H.link,
                                                children: F.intl.string(F.t.okSwq6)
                                            }),
                                            (0, i.jsx)(x.Gr1, {
                                                className: H.externalLinkIcon,
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
    Q = (e) => {
        let { scopes: t, application: n, selectedChannelId: a, selectedGuildId: r, onDelete: o, disclosures: c, locale: m, id: u } = e,
            p = l.useMemo(() => P.ZP.createFromServer(n), [n]),
            h = v.Z.useExperiment({ location: 'Authorized Applications' }, { autoTrackExposure: !0 }).enabled,
            g = (0, U.O)(n.id);
        return (0, i.jsx)(x.Zbd, {
            className: s()(H.authedApp, B.marginBottom8),
            outline: !0,
            children: (0, i.jsxs)(x.y5t, {
                component: (() => {
                    let e = O.ZP.getApplicationIconURL({
                            id: n.id,
                            icon: n.icon
                        }),
                        t =
                            null != e
                                ? (0, i.jsx)(_.Z.Child, {
                                      className: H.appAvatar,
                                      grow: 0,
                                      children: (0, i.jsx)('img', {
                                          src: e,
                                          alt: ''
                                      })
                                  })
                                : null,
                        l = new Date(k.default.extractTimestamp(u)).toLocaleDateString(m);
                    return (0, i.jsxs)('div', {
                        className: s()(H.header, B.marginBottom20),
                        children: [
                            t,
                            (0, i.jsxs)('div', {
                                className: H.headerTextContainer,
                                children: [
                                    (0, i.jsx)(x.X6q, {
                                        variant: 'text-sm/semibold',
                                        className: H.headerText,
                                        children: n.name
                                    }),
                                    (0, i.jsx)(x.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-normal',
                                        children: F.intl.format(F.t.yOApCA, { date: l })
                                    })
                                ]
                            }),
                            h
                                ? (0, i.jsx)(x.zxk, {
                                      color: x.Ttl.TRANSPARENT,
                                      look: x.iLD.LINK,
                                      size: x.PhG.SMALL,
                                      className: H.reportButton,
                                      onClick: () => V(p, r, a),
                                      children: F.intl.string(F.t['+78Pfn'])
                                  })
                                : null,
                            (0, i.jsx)(x.zxk, {
                                color: x.Ttl.RED,
                                look: x.iLD.OUTLINED,
                                size: x.PhG.SMALL,
                                onClick: () => Y(n, o),
                                children: F.intl.string(F.t.xUqheH)
                            })
                        ]
                    });
                })(),
                children: [
                    (() => {
                        if (null != n.description && '' !== n.description)
                            return (0, i.jsx)(x.xJW, {
                                faded: !0,
                                title: F.intl.string(F.t.GfRGra),
                                children: (0, i.jsx)(x.R94, { children: n.description })
                            });
                    })(),
                    (0, i.jsx)(K, { application: n }),
                    (() => {
                        let e = [];
                        for (let n of t) e.push(...(0, E.CI)(n, t)), n === d.x.APPLICATIONS_COMMANDS && e.push(F.intl.string(F.t.Ls2XRk));
                        if (e.length > 0 || (null != c && c.length > 0))
                            return (0, i.jsx)(x.xJW, {
                                faded: !0,
                                title: F.intl.string(F.t.xrmhRU),
                                className: B.marginTop20,
                                children: (0, i.jsxs)('ul', {
                                    children: [
                                        e.map((e, t) =>
                                            (0, i.jsxs)(
                                                'li',
                                                {
                                                    className: s()(H.permission, B.marginTop8),
                                                    children: [(0, i.jsx)('i', { className: H.permissionCheckmark }), (0, i.jsx)(x.R94, { children: e })]
                                                },
                                                t
                                            )
                                        ),
                                        null == c
                                            ? void 0
                                            : c.map((t, n) => {
                                                  let l = (0, I.PM)(t);
                                                  return null != l
                                                      ? (0, i.jsxs)(
                                                            'li',
                                                            {
                                                                className: s()(H.permission, B.marginTop8),
                                                                children: [(0, i.jsx)(X, { disclosure: t }), (0, i.jsx)(x.R94, { children: l })]
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
                        (0, i.jsx)(q, {
                            application: n,
                            className: H.twoWayWarningV1
                        })
                ]
            })
        });
    },
    J = (e) => {
        let { scopes: t, application: n, selectedChannelId: a, selectedGuildId: r, onDelete: o, disclosures: c, locale: m, id: u } = e,
            h = l.useMemo(() => P.ZP.createFromServer(n), [n]),
            g = v.Z.useExperiment({ location: 'Authorized Applications' }, { autoTrackExposure: !0 }).enabled,
            N = (0, U.O)(n.id);
        return (0, i.jsx)('div', {
            className: s()(H.authedAppV2, B.marginBottom8),
            children: (0, i.jsx)(x.y5t, {
                component: (() => {
                    let e = O.ZP.getApplicationIconURL({
                            id: n.id,
                            icon: n.icon
                        }),
                        t =
                            null != e
                                ? (0, i.jsx)(_.Z.Child, {
                                      className: H.appAvatarV2,
                                      grow: 0,
                                      children: (0, i.jsx)('img', {
                                          src: e,
                                          alt: ''
                                      })
                                  })
                                : null,
                        l = new Date(k.default.extractTimestamp(u)).toLocaleDateString(m);
                    return (0, i.jsxs)('div', {
                        className: s()(H.headerV2),
                        children: [
                            t,
                            (0, i.jsxs)('div', {
                                className: H.headerTextContainerV2,
                                children: [
                                    (0, i.jsx)(x.X6q, {
                                        variant: 'heading-md/semibold',
                                        className: s()(H.headerText, B.marginBottom4),
                                        children: n.name
                                    }),
                                    (0, i.jsx)(x.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-normal',
                                        children: F.intl.format(F.t.yOApCA, { date: l })
                                    })
                                ]
                            }),
                            (0, i.jsx)(x.yRy, {
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, i.jsxs)(x.v2r, {
                                        navId: 'authorized-app-action-menu',
                                        onClose: t,
                                        'aria-label': F.intl.string(F.t.tKobzc),
                                        onSelect: void 0,
                                        children: [
                                            g
                                                ? (0, i.jsx)(x.sNh, {
                                                      id: 'report',
                                                      label: F.intl.string(F.t['+78Pfn']),
                                                      color: 'danger',
                                                      action: () => V(h, r, a)
                                                  })
                                                : null,
                                            (0, i.jsx)(x.sNh, {
                                                id: 'deauthorize',
                                                label: F.intl.string(F.t.xUqheH),
                                                color: 'danger',
                                                action: () => Y(n, o)
                                            })
                                        ]
                                    });
                                },
                                align: 'right',
                                position: 'bottom',
                                children: (e) =>
                                    (0, i.jsx)(p.P, {
                                        className: s()(H.actionMenuButton),
                                        'aria-label': F.intl.string(F.t.UKOtz8),
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
                    className: H.appDetailsContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: H.appDetailsSection,
                            children: [
                                (0, i.jsx)(x.X6q, {
                                    variant: 'heading-sm/medium',
                                    color: 'header-primary',
                                    className: s()(B.marginBottom4),
                                    children: F.intl.string(F.t.GfRGra)
                                }),
                                null != n.description &&
                                    '' !== n.description &&
                                    (0, i.jsx)(x.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-normal',
                                        children: n.description
                                    }),
                                (0, i.jsx)(K, { application: n })
                            ]
                        }),
                        (() => {
                            let e = [];
                            for (let n of t) e.push(...(0, E.CI)(n, t)), n === d.x.APPLICATIONS_COMMANDS && e.push(F.intl.string(F.t.Ls2XRk));
                            if (e.length > 0 || (null != c && c.length > 0))
                                return (0, i.jsxs)('div', {
                                    className: H.appDetailsSection,
                                    children: [
                                        (0, i.jsx)(x.X6q, {
                                            variant: 'heading-sm/medium',
                                            color: 'header-primary',
                                            className: s()(B.marginBottom4),
                                            children: F.intl.string(F.t.xrmhRU)
                                        }),
                                        (0, i.jsxs)('ul', {
                                            children: [
                                                e.map((e, t) =>
                                                    (0, i.jsxs)(
                                                        'li',
                                                        {
                                                            className: s()(H.permission, B.marginTop8),
                                                            children: [(0, i.jsx)('i', { className: H.permissionCheckmark }), (0, i.jsx)(x.R94, { children: e })]
                                                        },
                                                        t
                                                    )
                                                ),
                                                null == c
                                                    ? void 0
                                                    : c.map((t, n) => {
                                                          let l = (0, I.PM)(t);
                                                          return null != l
                                                              ? (0, i.jsxs)(
                                                                    'li',
                                                                    {
                                                                        className: s()(H.permission, B.marginTop8),
                                                                        children: [(0, i.jsx)(X, { disclosure: t }), (0, i.jsx)(x.R94, { children: l })]
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
                            className: H.footer,
                            children: [
                                N &&
                                    (0, i.jsx)(q, {
                                        application: n,
                                        className: H.twoWayWarningV2
                                    }),
                                (0, i.jsx)(x.zxk, {
                                    color: x.Ttl.RED,
                                    look: x.iLD.OUTLINED,
                                    size: x.PhG.SMALL,
                                    onClick: () => Y(n, o),
                                    children: F.intl.string(F.t.xUqheH)
                                })
                            ]
                        })
                    ]
                })
            })
        });
    },
    $ = (0, c.U)(() => ({ searchQuery: '' })),
    ee = () => {
        let e = (0, m.e7)([D.Z], () => D.Z.hidePersonalInformation),
            t = (0, m.e7)([S.Z], () => S.Z.getApps()),
            a = (0, m.e7)([y.default], () => y.default.locale),
            s = (0, m.e7)([f.ZP], () => f.ZP.getSelfEmbeddedActivities()),
            r = (0, m.e7)([L.Z, Z.Z], () => L.Z.getChannel(Z.Z.getChannelId())),
            c = null == r ? void 0 : r.getGuildId(),
            d = A.J.useExperiment({ location: 'UserSettingsAuthedApps' }, { autoTrackExposure: !0 }).enabled;
        l.useEffect(() => {
            h.Z.fetch();
        }, []),
            l.useEffect(
                () => () => {
                    $.setState({ searchQuery: '' });
                },
                []
            );
        let u = (e) => {
                let { id: t, application: n } = e;
                h.Z.delete(t), R.S.safeDispatch(z.CkL.HIDE_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, { applicationId: n.id });
                let i = s.get(n.id);
                null != i &&
                    T.Z.leaveActivity({
                        location: i.location,
                        applicationId: n.id,
                        showFeedback: !1
                    });
            },
            p = $((e) => e.searchQuery),
            g = (e) => $.setState({ searchQuery: e }),
            j = (e) => {
                g(e);
            },
            I = () => {
                g('');
            },
            _ = () =>
                (0, i.jsx)('div', {
                    className: H.searchContainer,
                    children: (0, i.jsx)(x.E1j, {
                        size: x.E1j.Sizes.MEDIUM,
                        query: p,
                        onChange: j,
                        onClear: I,
                        placeholder: F.intl.string(F.t['5prvKS']),
                        'aria-label': F.intl.string(F.t['5prvKS'])
                    })
                }),
            v = (e, t) =>
                (0, i.jsxs)(W, {
                    className: H.__invalid_marginTop20,
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
            C = l.useMemo(() => {
                let e = p.trim().toLowerCase();
                return '' === e || null == t ? t : t.length < 100 ? t.filter((t) => o()(e, t.application.name.toLowerCase())) : t.filter((t) => t.application.name.toLowerCase().includes(e));
            }, [t, p]);
        return e
            ? (0, i.jsx)(N.Z, {})
            : (0, i.jsx)(x.hjN, {
                  tag: x.RB0.H1,
                  title: F.intl.string(F.t['f6kk+v']),
                  children: (0, i.jsx)(x.y5t, {
                      component: (0, i.jsx)(x.ToO, {
                          className: B.marginBottom40,
                          type: x.sje.PRIMARY,
                          title: F.intl.string(F.t.HU3RFx),
                          body: F.intl.string(F.t.Nu5Yi4)
                      }),
                      children:
                          null == t || null == C
                              ? (0, i.jsx)(x.$jN, {
                                    className: B.marginTop20,
                                    type: x.$jN.Type.SPINNING_CIRCLE
                                })
                              : 0 === t.length
                                ? v(F.intl.string(F.t.CpPv5u), F.intl.string(F.t['E+SM6e']))
                                : 0 === C.length
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [_(), v(null, F.intl.string(F.t.EVWFNj))]
                                    })
                                  : (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            _(),
                                            C.sort((e, t) => Number(t.id) - Number(e.id)).map((e) =>
                                                d
                                                    ? (0, i.jsx)(
                                                          J,
                                                          {
                                                              locale: a,
                                                              onDelete: () => u(e),
                                                              selectedChannelId: null == r ? void 0 : r.id,
                                                              selectedGuildId: null != c ? c : void 0,
                                                              ...e
                                                          },
                                                          e.id
                                                      )
                                                    : (0, i.jsx)(
                                                          Q,
                                                          {
                                                              locale: a,
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
