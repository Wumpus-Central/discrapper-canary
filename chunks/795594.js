n.d(t, {
    J: () => ef,
    Z: () => e_
}),
    n(997841),
    n(388685),
    n(539854),
    n(953529),
    n(781311),
    n(642613);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(658722),
    l = n.n(s),
    c = n(512722),
    u = n.n(c),
    d = n(97519),
    f = n(243814),
    _ = n(442837),
    p = n(921072),
    h = n(524437),
    m = n(1561),
    g = n(481060),
    E = n(384275),
    b = n(493683),
    y = n(87051),
    O = n(230711),
    v = n(497321),
    I = n(468026),
    T = n(317381),
    S = n(513202),
    A = n(367907),
    N = n(162685),
    C = n(979200),
    R = n(870822),
    P = n(589414),
    w = n(600164),
    D = n(240991),
    L = n(713938),
    x = n(973616),
    k = n(881998),
    M = n(592125),
    j = n(944486),
    U = n(246946),
    G = n(9156),
    B = n(768581),
    V = n(630388),
    F = n(49012),
    Z = n(621600),
    H = n(709054),
    Y = n(706454),
    W = n(210887),
    K = n(675478),
    z = n(581883),
    q = n(436267),
    X = n(494620),
    Q = n(869743),
    J = n(981631),
    $ = n(468788),
    ee = n(388032),
    et = n(989604),
    en = n(73433),
    er = n(20493);
function ei(e, t, n) {
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
function ea(e) {
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
                ei(e, t, n[t]);
            });
    }
    return e;
}
let eo = _.ZP.connectStores([W.Z], () => ({ theme: W.Z.theme }))(g.ubH);
function es(e) {
    let { className: t, text: n } = e;
    return (0, r.jsxs)('div', {
        className: o()(et.warningOuterContainer, t),
        children: [
            (0, r.jsx)(g.d3s, {
                size: 'md',
                color: 'currentColor',
                className: et.warningIcon
            }),
            (0, r.jsx)(g.Text, {
                color: 'text-default',
                variant: 'text-sm/medium',
                children: n
            })
        ]
    });
}
let el = (e) => {
        let { disclosure: t } = e;
        return i.useMemo(() => {
            switch (t) {
                case p.u$.IP_LOCATION:
                    return (0, r.jsx)(g.enf, {
                        size: 'md',
                        color: 'currentColor',
                        className: et.disclosureIcon
                    });
                case p.u$.DISPLAYS_ADVERTISEMENTS:
                    return (0, r.jsx)(g.FLu, { className: et.disclosureIcon });
                default:
                    return (0, r.jsx)(g.d3s, { className: et.disclosureIcon });
            }
        }, [t]);
    },
    ec = (e, t) => {
        let n = ee.intl.string(ee.t.DT39Aw),
            i = ee.intl.formatToPlainString(ee.t.QWGvxM, { applicationName: e.name });
        return (
            (0, R.Z)(e) &&
                ((n = ee.intl.formatToPlainString(ee.t['paC+UV'], { applicationName: e.name })),
                (i = (0, r.jsxs)(r.Fragment, {
                    children: [
                        ee.intl.formatToPlainString(ee.t.inM1Ym, { applicationName: e.name }),
                        (0, r.jsx)(X.Z, {
                            look: X.z.WARNING,
                            className: et.infoBox,
                            children: ee.intl.string(ee.t.LY35Z2)
                        })
                    ]
                }))),
            (0, q.Z)(e.id) &&
                (i = (0, r.jsxs)(r.Fragment, {
                    children: [
                        i,
                        (0, r.jsx)(X.Z, {
                            className: et.infoBox,
                            children: ee.intl.format(ee.t.KRnERk, { applicationName: e.name })
                        })
                    ]
                })),
            (0, g.h7j)((e) =>
                (0, r.jsx)(
                    I.default,
                    ea(
                        {
                            title: n,
                            body: i,
                            confirmText: ee.intl.string(ee.t.xUqheH),
                            confirmColor: g.Ttl.RED,
                            cancelText: ee.intl.string(ee.t['ETE/oK']),
                            onConfirm: t
                        },
                        e
                    )
                )
            )
        );
    },
    eu = (e) => {
        let { application: t, isVisible: n } = e,
            i = () => {
                null != t.terms_of_service_url &&
                    (0, F.q)({
                        href: t.terms_of_service_url,
                        shouldConfirm: !0
                    });
            },
            a = () => {
                null != t.privacy_policy_url &&
                    (0, F.q)({
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
                                onClick: i,
                                className: et.tos,
                                tabIndex: n ? 0 : -1,
                                children: [
                                    (0, r.jsx)(g.R94, {
                                        className: et.link,
                                        children: ee.intl.string(ee.t['lx+GeX'])
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
                                        onClick: a,
                                        className: et.privacy,
                                        tabIndex: n ? 0 : -1,
                                        children: [
                                            (0, r.jsx)(g.R94, {
                                                className: et.link,
                                                children: ee.intl.string(ee.t.okSwq6)
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
    ed = (e) => {
        let { scopes: t, application: a, selectedChannelId: s, selectedGuildId: l, onDelete: c, disclosures: d, locale: p, id: E } = e,
            v = a.id,
            I = i.useMemo(() => x.ZP.createFromServer(a), [a]),
            T = (0, V.yE)(I.flags, J.udG.EMBEDDED),
            S = (0, _.e7)(
                [z.Z],
                () => {
                    var e, t, n, r;
                    return null == (r = z.Z.settings.applications) || null == (n = r.appSettings) || null == (t = n[v]) || null == (e = t.appDmSettings) ? void 0 : e.allowMobilePush;
                },
                [v]
            ),
            R = N.w.useExperiment({ location: 'oauth2_authorize' }),
            k = a.bot,
            j = (0, _.e7)([M.Z], () => M.Z.getDMFromUserId(null == k ? void 0 : k.id)),
            { appDMChannelMuteConfig: U, dmChannelMuted: F } = (0, _.cj)([G.ZP], () =>
                null == j
                    ? {
                          appDMChannelMuteConfig: null,
                          dmChannelMuted: !1
                      }
                    : {
                          appDMChannelMuteConfig: G.ZP.getChannelMuteConfig(null, j),
                          dmChannelMuted: G.ZP.isChannelMuted(null, j)
                      }
            ),
            [Y, W] = i.useState(!1),
            [X, ei] = i.useState(!1),
            eo = () => {
                let e = [];
                for (let n of t) e.push(...(0, L.CI)(n, t)), n === f.x.APPLICATIONS_COMMANDS && e.push(ee.intl.string(ee.t.Ls2XRk));
                if (e.length > 0 || (null != d && d.length > 0))
                    return (0, r.jsx)(g.zF9, {
                        className: et.appDetailsSection,
                        isExpanded: X,
                        collapsibleContent: (0, r.jsxs)('ul', {
                            className: et.appDetailsContent,
                            children: [
                                e.map((e, t) =>
                                    (0, r.jsxs)(
                                        'li',
                                        {
                                            className: et.permission,
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
                                                        className: et.permission,
                                                        children: [(0, r.jsx)(el, { disclosure: t }), (0, r.jsx)(g.R94, { children: i })]
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
                                        className: et.appDetailsSectionHeader,
                                        onClick: (e) => {
                                            ei(!X), n(e);
                                        },
                                        children: [
                                            (0, r.jsx)(g.X6q, {
                                                variant: 'heading-sm/medium',
                                                color: 'header-primary',
                                                children: ee.intl.string(ee.t.xrmhRU)
                                            }),
                                            X
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
                                    !X &&
                                        (0, r.jsx)(g.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-secondary',
                                            className: o()(et.appDetailsContent, et.permissionsDescription),
                                            children: ee.intl.format(ee.t.nZOS8v, { numPermissions: e.length })
                                        })
                                ]
                            });
                        }
                    });
            },
            ed = i.useMemo(() => {
                if (null != a.description && '' !== a.description)
                    return (0, r.jsx)(g.Text, {
                        className: en.markup,
                        variant: 'text-sm/normal',
                        color: 'text-default',
                        children: (0, D.parseBioReact)(a.description)
                    });
            }, [a.description]),
            ef = () => {
                let e = null != a.description && '' !== a.description,
                    t = null != a.terms_of_service_url || null != a.privacy_policy_url;
                return e || t
                    ? (0, r.jsx)(g.zF9, {
                          className: et.appDetailsSection,
                          isExpanded: Y,
                          collapsibleContent: (0, r.jsxs)('div', {
                              className: et.appDetailsContent,
                              children: [
                                  e && ed,
                                  t &&
                                      (0, r.jsx)(eu, {
                                          application: a,
                                          isVisible: Y
                                      })
                              ]
                          }),
                          children: (e) => {
                              let { onClick: t } = e;
                              return (0, r.jsxs)(m.P, {
                                  className: et.appDetailsSectionHeader,
                                  onClick: (e) => {
                                      W(!Y), t(e);
                                  },
                                  children: [
                                      (0, r.jsx)(g.X6q, {
                                          variant: 'heading-sm/medium',
                                          color: 'header-primary',
                                          children: ee.intl.string(ee.t.fcYgiY)
                                      }),
                                      Y
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
            e_ = () => {
                let e = B.ZP.getApplicationIconURL({
                        id: a.id,
                        icon: a.icon
                    }),
                    t =
                        null != e
                            ? (0, r.jsx)(w.Z.Child, {
                                  className: et.appAvatarV2,
                                  grow: 0,
                                  children: (0, r.jsx)('img', {
                                      src: e,
                                      alt: ''
                                  })
                              })
                            : null,
                    n = new Date(H.default.extractTimestamp(E)).toLocaleDateString(p);
                return (0, r.jsxs)('div', {
                    className: et.headerV2,
                    children: [
                        t,
                        (0, r.jsxs)('div', {
                            className: et.headerTextContainerV2,
                            children: [
                                (0, r.jsx)(g.X6q, {
                                    variant: 'heading-md/semibold',
                                    className: o()(et.headerText, er.marginBottom4),
                                    children: a.name
                                }),
                                (0, r.jsx)(g.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-default',
                                    children: ee.intl.format(ee.t.yOApCA, { date: n })
                                })
                            ]
                        }),
                        (0, r.jsx)(Q.Z, {
                            appRecord: I,
                            selectedGuildId: l,
                            selectedChannelId: s
                        })
                    ]
                });
            },
            ep = (e) => {
                K.hW.updateAsync(
                    'applications',
                    (t) => {
                        v in t.appSettings ? (null == t.appSettings[v].appDmSettings ? (t.appSettings[v].appDmSettings = h.c$.create({ allowMobilePush: e })) : (t.appSettings[v].appDmSettings.allowMobilePush = e)) : (t.appSettings[v] = h.dp.create({ appDmSettings: h.c$.create({ allowMobilePush: e }) }));
                    },
                    K.fy.INFREQUENT_USER_ACTION
                ),
                    A.ZP.trackWithMetadata(J.rMx.NOTIFICATION_SETTINGS_UPDATED, {
                        update_type: $.I.AUTHORIZED_APP_DM_PUSH_NOTIFICATION,
                        application_id: a.id,
                        label: e ? Z.ZB.Unmuted : Z.ZB.Muted
                    });
            },
            eh = i.useCallback(async () => {
                u()(null != k, 'dm channel mute setting requires having a bot user');
                let e = j;
                null == e && (e = await b.Z.ensurePrivateChannel(k.id)),
                    F
                        ? y.Z.updateAppDMOverrideSettings(null, e, a.id, { muted: !1 }, Z.ZB.Unmuted)
                        : (0, g.ZDy)(async () => {
                              let { default: t } = await n.e('8246').then(n.bind(n, 540679));
                              return (n) =>
                                  (0, r.jsx)(
                                      t,
                                      ea(
                                          {
                                              channelId: e,
                                              applicationId: a.id
                                          },
                                          n
                                      )
                                  );
                          });
            }, [j, k, F, a.id]),
            em = () =>
                R.enabled
                    ? (0, r.jsxs)('div', {
                          className: et.directMessagesSection,
                          children: [
                              (0, r.jsx)(g.X6q, {
                                  variant: 'heading-sm/medium',
                                  color: 'header-primary',
                                  className: et.dmSettingsHeader,
                                  children: ee.intl.string(ee.t.NaZyYG)
                              }),
                              null != k
                                  ? (0, r.jsx)(g.j7V, {
                                        hideBorder: !0,
                                        onChange: eh,
                                        className: et.dmSettingsSwitch,
                                        note:
                                            (null == U ? void 0 : U.end_time) != null
                                                ? ee.intl.format(ee.t.j7h4AA, {
                                                      endTime: new Date(U.end_time).toLocaleString(ee.intl.currentLocale, {
                                                          month: 'numeric',
                                                          day: 'numeric',
                                                          hour: 'numeric',
                                                          minute: '2-digit'
                                                      })
                                                  })
                                                : void 0,
                                        value: F,
                                        children: (0, r.jsx)(g.Text, {
                                            variant: 'text-sm/medium',
                                            children: ee.intl.string(ee.t.NkwaBg)
                                        })
                                    })
                                  : null,
                              T && R.enabled
                                  ? (0, r.jsx)(g.j7V, {
                                        hideBorder: !0,
                                        onChange: ep,
                                        className: et.dmSettingsSwitch,
                                        note: ee.intl.string(ee.t.hw1nKS),
                                        value: S,
                                        disabled: F,
                                        children: (0, r.jsx)(g.Text, {
                                            variant: 'text-sm/medium',
                                            children: ee.intl.string(ee.t['Pkw//v'])
                                        })
                                    })
                                  : null
                          ]
                      })
                    : null,
            eg = (0, q.O)(a.id),
            eE = (0, P.Z)(a),
            eb = () =>
                (0, r.jsxs)('div', {
                    className: et.footer,
                    children: [
                        eE
                            ? (0, r.jsx)(es, {
                                  className: et.warningContainer,
                                  text: ee.intl.format(ee.t.j4B7ER, { applicationName: a.name })
                              })
                            : eg
                              ? (0, r.jsx)(es, {
                                    className: et.warningContainer,
                                    text: ee.intl.format(ee.t.jUhnwc, {
                                        applicationName: a.name,
                                        onConnectionPress: () => O.Z.setSection(J.jXE.SETTINGS_CONNECTIONS)
                                    })
                                })
                              : null,
                        (0, r.jsx)('div', {
                            className: et.deauthorizeButton,
                            children: (0, r.jsx)(g.zxk, {
                                color: g.Ttl.RED,
                                look: g.iLD.OUTLINED,
                                size: g.PhG.SMALL,
                                onClick: () => ec(a, c),
                                children: ee.intl.string(ee.t.xUqheH)
                            })
                        })
                    ]
                });
        return (0, r.jsx)('div', {
            className: et.authedAppV2,
            children: (0, r.jsx)(g.y5t, {
                component: e_(),
                children: (0, r.jsxs)('div', {
                    className: et.appDetailsContainer,
                    children: [ef(), eo(), em(), eb()]
                })
            })
        });
    },
    ef = (0, d.U)(() => ({ searchQuery: '' })),
    e_ = () => {
        let e = (0, _.e7)([U.Z], () => U.Z.hidePersonalInformation),
            t = (0, _.e7)([k.Z], () => k.Z.getNonChildrenApps()),
            n = (0, _.e7)([Y.default], () => Y.default.locale),
            a = (0, _.e7)([T.ZP], () => T.ZP.getSelfEmbeddedActivities()),
            o = (0, _.e7)([M.Z, j.Z], () => M.Z.getChannel(j.Z.getChannelId())),
            s = null == o ? void 0 : o.getGuildId();
        i.useEffect(() => {
            E.Z.fetch();
        }, []),
            i.useEffect(
                () => () => {
                    ef.setState({ searchQuery: '' });
                },
                []
            );
        let c = (e) => {
                let { id: t, application: n } = e;
                E.Z.delete(t);
                let r = a.get(n.id);
                null != r &&
                    S.Z.leaveActivity({
                        location: r.location,
                        applicationId: n.id,
                        showFeedback: !1
                    });
            },
            u = ef((e) => e.searchQuery),
            d = (e) => ef.setState({ searchQuery: e }),
            f = (e) => {
                d(e);
            },
            p = () => {
                d('');
            },
            h = () =>
                (0, r.jsx)('div', {
                    className: et.searchContainer,
                    children: (0, r.jsx)(g.E1j, {
                        size: g.E1j.Sizes.MEDIUM,
                        query: u,
                        onChange: f,
                        onClear: p,
                        placeholder: ee.intl.string(ee.t['5prvKS']),
                        'aria-label': ee.intl.string(ee.t['5prvKS'])
                    })
                }),
            m = (e, t) =>
                (0, r.jsx)(eo, {
                    className: et.__invalid_marginTop20,
                    children: (0, r.jsx)(g.OZU, {
                        note: e,
                        children: t
                    })
                }),
            b = i.useMemo(() => {
                let e = u.trim().toLowerCase();
                return '' === e || null == t ? t : t.length < 100 ? t.filter((t) => l()(e, t.application.name.toLowerCase())) : t.filter((t) => t.application.name.toLowerCase().includes(e));
            }, [t, u]),
            y = () =>
                null == t || null == b
                    ? (0, r.jsx)(g.$jN, {
                          className: er.marginTop20,
                          type: g.$jN.Type.SPINNING_CIRCLE
                      })
                    : 0 === t.length
                      ? m(ee.intl.string(ee.t.CpPv5u), ee.intl.string(ee.t['E+SM6e']))
                      : 0 === b.length
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [h(), m(null, ee.intl.string(ee.t.EVWFNj))]
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  h(),
                                  b
                                      .sort((e, t) => Number(t.id) - Number(e.id))
                                      .map((e) =>
                                          (0, r.jsx)(
                                              ed,
                                              ea(
                                                  {
                                                      locale: n,
                                                      onDelete: () => c(e),
                                                      selectedChannelId: null == o ? void 0 : o.id,
                                                      selectedGuildId: null != s ? s : void 0
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
            : (0, r.jsx)(g.hjN, {
                  tag: g.RB0.H1,
                  title: ee.intl.string(ee.t['f6kk+v']),
                  children: (0, r.jsx)(g.y5t, {
                      component: (0, r.jsx)(g.ToO, {
                          className: er.marginBottom40,
                          type: g.sje.PRIMARY,
                          title: ee.intl.string(ee.t.HU3RFx),
                          body: ee.intl.string(ee.t.Nu5Yi4)
                      }),
                      children: y()
                  })
              });
    };
