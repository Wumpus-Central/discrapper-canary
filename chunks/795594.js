(n.d(t, {
    J: () => ef,
    Z: () => ep
}),
    n(997841),
    n(388685),
    n(539854),
    n(953529),
    n(781311),
    n(642613));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(658722),
    l = n.n(s),
    c = n(512722),
    u = n.n(c),
    d = n(97519),
    _ = n(243814),
    f = n(442837),
    p = n(921072),
    h = n(524437),
    m = n(1561),
    g = n(755721),
    E = n(481060),
    b = n(384275),
    y = n(493683),
    O = n(87051),
    v = n(230711),
    I = n(497321),
    T = n(468026),
    S = n(317381),
    A = n(513202),
    N = n(367907),
    C = n(162685),
    R = n(979200),
    P = n(870822),
    w = n(589414),
    D = n(600164),
    L = n(240991),
    x = n(713938),
    M = n(973616),
    k = n(881998),
    j = n(592125),
    U = n(944486),
    G = n(246946),
    B = n(9156),
    V = n(768581),
    F = n(630388),
    Z = n(49012),
    H = n(621600),
    Y = n(709054),
    W = n(706454),
    K = n(210887),
    z = n(675478),
    q = n(581883),
    X = n(436267),
    Q = n(494620),
    J = n(869743),
    $ = n(981631),
    ee = n(468788),
    et = n(388032),
    en = n(989604),
    er = n(73433),
    ei = n(20493);
function ea(e, t, n) {
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
function eo(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                ea(e, t, n[t]);
            }));
    }
    return e;
}
let es = f.ZP.connectStores([K.Z], () => ({ theme: K.Z.theme }))(E.ubH);
function el(e) {
    let { className: t, text: n } = e;
    return (0, r.jsxs)('div', {
        className: o()(en.warningOuterContainer, t),
        children: [
            (0, r.jsx)(E.d3s, {
                size: 'md',
                color: 'currentColor',
                className: en.warningIcon
            }),
            (0, r.jsx)(E.Text, {
                color: 'text-default',
                variant: 'text-sm/medium',
                children: n
            })
        ]
    });
}
let ec = (e) => {
        let { disclosure: t } = e;
        return i.useMemo(() => {
            switch (t) {
                case p.u$.IP_LOCATION:
                    return (0, r.jsx)(E.enf, {
                        size: 'md',
                        color: 'currentColor',
                        className: en.disclosureIcon
                    });
                case p.u$.DISPLAYS_ADVERTISEMENTS:
                    return (0, r.jsx)(E.FLu, { className: en.disclosureIcon });
                default:
                    return (0, r.jsx)(E.d3s, { className: en.disclosureIcon });
            }
        }, [t]);
    },
    eu = (e, t) => {
        let n = et.intl.string(et.t.DT39Aw),
            i = et.intl.formatToPlainString(et.t.QWGvxM, { applicationName: e.name });
        return (
            (0, P.Z)(e) &&
                ((n = et.intl.formatToPlainString(et.t['paC+UV'], { applicationName: e.name })),
                (i = (0, r.jsxs)(r.Fragment, {
                    children: [
                        et.intl.formatToPlainString(et.t.inM1Ym, { applicationName: e.name }),
                        (0, r.jsx)(Q.Z, {
                            look: Q.z.WARNING,
                            className: en.infoBox,
                            children: et.intl.string(et.t.LY35Z2)
                        })
                    ]
                }))),
            (0, X.Z)(e.id) &&
                (i = (0, r.jsxs)(r.Fragment, {
                    children: [
                        i,
                        (0, r.jsx)(Q.Z, {
                            className: en.infoBox,
                            children: et.intl.format(et.t.KRnERk, { applicationName: e.name })
                        })
                    ]
                })),
            (0, E.h7j)((e) =>
                (0, r.jsx)(
                    T.default,
                    eo(
                        {
                            title: n,
                            body: i,
                            confirmText: et.intl.string(et.t.xUqheH),
                            confirmColor: g.Tt.RED,
                            cancelText: et.intl.string(et.t['ETE/oK']),
                            onConfirm: t
                        },
                        e
                    )
                )
            )
        );
    },
    ed = (e) => {
        let { application: t, isVisible: n } = e,
            i = () => {
                null != t.terms_of_service_url &&
                    (0, Z.q)({
                        href: t.terms_of_service_url,
                        shouldConfirm: !0
                    });
            },
            a = () => {
                null != t.privacy_policy_url &&
                    (0, Z.q)({
                        href: t.privacy_policy_url,
                        shouldConfirm: !0
                    });
            };
        return null != t.terms_of_service_url || null != t.privacy_policy_url
            ? (0, r.jsxs)('div', {
                  className: en.tosPrivacy,
                  children: [
                      null != t.terms_of_service_url
                          ? (0, r.jsxs)(m.P, {
                                tag: 'a',
                                onClick: i,
                                className: en.tos,
                                tabIndex: n ? 0 : -1,
                                children: [
                                    (0, r.jsx)(E.R94, {
                                        className: en.link,
                                        children: et.intl.string(et.t['lx+GeX'])
                                    }),
                                    (0, r.jsx)(E.Gr1, {
                                        className: en.externalLinkIcon,
                                        color: 'var(--text-link)'
                                    })
                                ]
                            })
                          : null,
                      null != t.privacy_policy_url
                          ? (0, r.jsxs)('div', {
                                className: en.privacy,
                                children: [
                                    null != t.terms_of_service_url ? (0, r.jsx)('div', { className: en.divider }) : null,
                                    (0, r.jsxs)(m.P, {
                                        tag: 'a',
                                        onClick: a,
                                        className: en.privacy,
                                        tabIndex: n ? 0 : -1,
                                        children: [
                                            (0, r.jsx)(E.R94, {
                                                className: en.link,
                                                children: et.intl.string(et.t.okSwq6)
                                            }),
                                            (0, r.jsx)(E.Gr1, {
                                                className: en.externalLinkIcon,
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
    e_ = (e) => {
        let { scopes: t, application: a, selectedChannelId: s, selectedGuildId: l, onDelete: c, disclosures: d, locale: p, id: g } = e,
            b = a.id,
            I = i.useMemo(() => M.ZP.createFromServer(a), [a]),
            T = (0, F.yE)(I.flags, $.udG.EMBEDDED),
            S = (0, f.e7)(
                [q.Z],
                () => {
                    var e, t, n, r;
                    return null == (r = q.Z.settings.applications) || null == (n = r.appSettings) || null == (t = n[b]) || null == (e = t.appDmSettings) ? void 0 : e.allowMobilePush;
                },
                [b]
            ),
            A = C.w.useExperiment({ location: 'oauth2_authorize' }),
            P = a.bot,
            k = (0, f.e7)([j.Z], () => j.Z.getDMFromUserId(null == P ? void 0 : P.id)),
            { appDMChannelMuteConfig: U, dmChannelMuted: G } = (0, f.cj)([B.ZP], () =>
                null == k
                    ? {
                          appDMChannelMuteConfig: null,
                          dmChannelMuted: !1
                      }
                    : {
                          appDMChannelMuteConfig: B.ZP.getChannelMuteConfig(null, k),
                          dmChannelMuted: B.ZP.isChannelMuted(null, k)
                      }
            ),
            [Z, W] = i.useState(!1),
            [K, Q] = i.useState(!1),
            ea = () => {
                let e = [];
                for (let n of t) (e.push(...(0, x.CI)(n, t)), n === _.x.APPLICATIONS_COMMANDS && e.push(et.intl.string(et.t.Ls2XRk)));
                if (e.length > 0 || (null != d && d.length > 0))
                    return (0, r.jsx)(E.zF9, {
                        className: en.appDetailsSection,
                        isExpanded: K,
                        collapsibleContent: (0, r.jsxs)('ul', {
                            className: en.appDetailsContent,
                            children: [
                                e.map((e, t) =>
                                    (0, r.jsxs)(
                                        'li',
                                        {
                                            className: en.permission,
                                            children: [(0, r.jsx)('i', { className: en.permissionCheckmark }), (0, r.jsx)(E.R94, { children: e })]
                                        },
                                        t
                                    )
                                ),
                                null == d
                                    ? void 0
                                    : d.map((t, n) => {
                                          let i = (0, R.PM)(t);
                                          return null != i
                                              ? (0, r.jsxs)(
                                                    'li',
                                                    {
                                                        className: en.permission,
                                                        children: [(0, r.jsx)(ec, { disclosure: t }), (0, r.jsx)(E.R94, { children: i })]
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
                                        className: en.appDetailsSectionHeader,
                                        onClick: (e) => {
                                            (Q(!K), n(e));
                                        },
                                        children: [
                                            (0, r.jsx)(E.X6q, {
                                                variant: 'heading-sm/medium',
                                                color: 'header-primary',
                                                children: et.intl.string(et.t.xrmhRU)
                                            }),
                                            K
                                                ? (0, r.jsx)(E.CJ0, {
                                                      size: 'md',
                                                      color: E.TVs.colors.INTERACTIVE_NORMAL
                                                  })
                                                : (0, r.jsx)(E.Fbu, {
                                                      size: 'md',
                                                      color: E.TVs.colors.INTERACTIVE_NORMAL
                                                  })
                                        ]
                                    }),
                                    !K &&
                                        (0, r.jsx)(E.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-secondary',
                                            className: o()(en.appDetailsContent, en.permissionsDescription),
                                            children: et.intl.format(et.t.nZOS8v, { numPermissions: e.length })
                                        })
                                ]
                            });
                        }
                    });
            },
            es = i.useMemo(() => {
                if (null != a.description && '' !== a.description)
                    return (0, r.jsx)(E.Text, {
                        className: er.markup,
                        variant: 'text-sm/normal',
                        color: 'text-default',
                        children: (0, L.parseBioReact)(a.description)
                    });
            }, [a.description]),
            e_ = () => {
                let e = null != a.description && '' !== a.description,
                    t = null != a.terms_of_service_url || null != a.privacy_policy_url;
                return e || t
                    ? (0, r.jsx)(E.zF9, {
                          className: en.appDetailsSection,
                          isExpanded: Z,
                          collapsibleContent: (0, r.jsxs)('div', {
                              className: en.appDetailsContent,
                              children: [
                                  e && es,
                                  t &&
                                      (0, r.jsx)(ed, {
                                          application: a,
                                          isVisible: Z
                                      })
                              ]
                          }),
                          children: (e) => {
                              let { onClick: t } = e;
                              return (0, r.jsxs)(m.P, {
                                  className: en.appDetailsSectionHeader,
                                  onClick: (e) => {
                                      (W(!Z), t(e));
                                  },
                                  children: [
                                      (0, r.jsx)(E.X6q, {
                                          variant: 'heading-sm/medium',
                                          color: 'header-primary',
                                          children: et.intl.string(et.t.fcYgiY)
                                      }),
                                      Z
                                          ? (0, r.jsx)(E.CJ0, {
                                                size: 'md',
                                                color: E.TVs.colors.INTERACTIVE_NORMAL
                                            })
                                          : (0, r.jsx)(E.Fbu, {
                                                size: 'md',
                                                color: E.TVs.colors.INTERACTIVE_NORMAL
                                            })
                                  ]
                              });
                          }
                      })
                    : null;
            },
            ef = () => {
                let e = V.ZP.getApplicationIconURL({
                        id: a.id,
                        icon: a.icon
                    }),
                    t =
                        null != e
                            ? (0, r.jsx)(D.Z.Child, {
                                  className: en.appAvatarV2,
                                  grow: 0,
                                  children: (0, r.jsx)('img', {
                                      src: e,
                                      alt: ''
                                  })
                              })
                            : null,
                    n = new Date(Y.default.extractTimestamp(g)).toLocaleDateString(p);
                return (0, r.jsxs)('div', {
                    className: en.headerV2,
                    children: [
                        t,
                        (0, r.jsxs)('div', {
                            className: en.headerTextContainerV2,
                            children: [
                                (0, r.jsx)(E.X6q, {
                                    variant: 'heading-md/semibold',
                                    className: o()(en.headerText, ei.marginBottom4),
                                    children: a.name
                                }),
                                (0, r.jsx)(E.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-default',
                                    children: et.intl.format(et.t.yOApCA, { date: n })
                                })
                            ]
                        }),
                        (0, r.jsx)(J.Z, {
                            appRecord: I,
                            selectedGuildId: l,
                            selectedChannelId: s
                        })
                    ]
                });
            },
            ep = (e) => {
                (z.hW.updateAsync(
                    'applications',
                    (t) => {
                        b in t.appSettings ? (null == t.appSettings[b].appDmSettings ? (t.appSettings[b].appDmSettings = h.c$.create({ allowMobilePush: e })) : (t.appSettings[b].appDmSettings.allowMobilePush = e)) : (t.appSettings[b] = h.dp.create({ appDmSettings: h.c$.create({ allowMobilePush: e }) }));
                    },
                    z.fy.INFREQUENT_USER_ACTION
                ),
                    N.ZP.trackWithMetadata($.rMx.NOTIFICATION_SETTINGS_UPDATED, {
                        update_type: ee.I.AUTHORIZED_APP_DM_PUSH_NOTIFICATION,
                        application_id: a.id,
                        label: e ? H.ZB.Unmuted : H.ZB.Muted
                    }));
            },
            eh = i.useCallback(async () => {
                u()(null != P, 'dm channel mute setting requires having a bot user');
                let e = k;
                (null == e && (e = await y.Z.ensurePrivateChannel(P.id)),
                    G
                        ? O.Z.updateAppDMOverrideSettings(null, e, a.id, { muted: !1 }, H.ZB.Unmuted)
                        : (0, E.ZDy)(async () => {
                              let { default: t } = await n.e('8246').then(n.bind(n, 540679));
                              return (n) =>
                                  (0, r.jsx)(
                                      t,
                                      eo(
                                          {
                                              channelId: e,
                                              applicationId: a.id
                                          },
                                          n
                                      )
                                  );
                          }));
            }, [k, P, G, a.id]),
            em = () =>
                A.enabled
                    ? (0, r.jsxs)('div', {
                          className: en.directMessagesSection,
                          children: [
                              (0, r.jsx)(E.X6q, {
                                  variant: 'heading-sm/medium',
                                  color: 'header-primary',
                                  className: en.dmSettingsHeader,
                                  children: et.intl.string(et.t.NaZyYG)
                              }),
                              null != P
                                  ? (0, r.jsx)(E.j7V, {
                                        hideBorder: !0,
                                        onChange: eh,
                                        className: en.dmSettingsSwitch,
                                        note:
                                            (null == U ? void 0 : U.end_time) != null
                                                ? et.intl.format(et.t.j7h4AA, {
                                                      endTime: new Date(U.end_time).toLocaleString(et.intl.currentLocale, {
                                                          month: 'numeric',
                                                          day: 'numeric',
                                                          hour: 'numeric',
                                                          minute: '2-digit'
                                                      })
                                                  })
                                                : void 0,
                                        value: G,
                                        children: (0, r.jsx)(E.Text, {
                                            variant: 'text-sm/medium',
                                            children: et.intl.string(et.t.NkwaBg)
                                        })
                                    })
                                  : null,
                              T && A.enabled
                                  ? (0, r.jsx)(E.j7V, {
                                        hideBorder: !0,
                                        onChange: ep,
                                        className: en.dmSettingsSwitch,
                                        note: et.intl.string(et.t.hw1nKS),
                                        value: S,
                                        disabled: G,
                                        children: (0, r.jsx)(E.Text, {
                                            variant: 'text-sm/medium',
                                            children: et.intl.string(et.t['Pkw//v'])
                                        })
                                    })
                                  : null
                          ]
                      })
                    : null,
            eg = (0, X.O)(a.id),
            eE = (0, w.Z)(a),
            eb = () =>
                (0, r.jsxs)('div', {
                    className: en.footer,
                    children: [
                        eE
                            ? (0, r.jsx)(el, {
                                  className: en.warningContainer,
                                  text: et.intl.format(et.t.j4B7ER, { applicationName: a.name })
                              })
                            : eg
                              ? (0, r.jsx)(el, {
                                    className: en.warningContainer,
                                    text: et.intl.format(et.t.jUhnwc, {
                                        applicationName: a.name,
                                        onConnectionPress: () => v.Z.setSection($.jXE.SETTINGS_CONNECTIONS)
                                    })
                                })
                              : null,
                        (0, r.jsx)('div', {
                            className: en.deauthorizeButton,
                            children: (0, r.jsx)(E.zxk, {
                                variant: 'critical-secondary',
                                size: 'sm',
                                text: et.intl.string(et.t.xUqheH),
                                onClick: () => eu(a, c)
                            })
                        })
                    ]
                });
        return (0, r.jsx)('div', {
            className: en.authedAppV2,
            children: (0, r.jsx)(E.y5t, {
                component: ef(),
                children: (0, r.jsxs)('div', {
                    className: en.appDetailsContainer,
                    children: [e_(), ea(), em(), eb()]
                })
            })
        });
    },
    ef = (0, d.U)(() => ({ searchQuery: '' })),
    ep = () => {
        let e = (0, f.e7)([G.Z], () => G.Z.hidePersonalInformation),
            { fetchState: t, appAuthTokens: n } = (0, f.cj)([k.Z], () => ({
                fetchState: k.Z.getFetchState(),
                appAuthTokens: k.Z.getNewestTokensForNonChildrenApplications()
            })),
            a = (0, f.e7)([W.default], () => W.default.locale),
            o = (0, f.e7)([S.ZP], () => S.ZP.getSelfEmbeddedActivities()),
            s = (0, f.e7)([j.Z, U.Z], () => j.Z.getChannel(U.Z.getChannelId())),
            c = null == s ? void 0 : s.getGuildId();
        (i.useEffect(() => {
            b.Z.fetch();
        }, []),
            i.useEffect(
                () => () => {
                    ef.setState({ searchQuery: '' });
                },
                []
            ));
        let u = (e) => {
                let { id: t, application: n } = e;
                b.Z.delete(t);
                let r = o.get(n.id);
                null != r &&
                    A.Z.leaveActivity({
                        location: r.location,
                        applicationId: n.id,
                        showFeedback: !1
                    });
            },
            d = ef((e) => e.searchQuery),
            _ = (e) => ef.setState({ searchQuery: e }),
            p = (e) => {
                _(e);
            },
            h = () => {
                _('');
            },
            m = () =>
                (0, r.jsx)('div', {
                    className: en.searchContainer,
                    children: (0, r.jsx)(E.E1j, {
                        query: d,
                        onChange: p,
                        onClear: h,
                        placeholder: et.intl.string(et.t['5prvKS']),
                        'aria-label': et.intl.string(et.t['5prvKS'])
                    })
                }),
            g = (e, t) =>
                (0, r.jsx)(es, {
                    className: en.__invalid_marginTop20,
                    children: (0, r.jsx)(E.OZU, {
                        note: e,
                        children: t
                    })
                }),
            y = i.useMemo(() => {
                let e = d.trim().toLowerCase();
                return '' === e || null == n ? n : n.length < 100 ? n.filter((t) => l()(e, t.application.name.toLowerCase())) : n.filter((t) => t.application.name.toLowerCase().includes(e));
            }, [n, d]),
            O = () =>
                null == n || null == y || t !== k.M.FETCHED
                    ? (0, r.jsx)(E.$jN, {
                          className: ei.marginTop20,
                          type: E.$jN.Type.SPINNING_CIRCLE
                      })
                    : 0 === n.length
                      ? g(et.intl.string(et.t.CpPv5u), et.intl.string(et.t['E+SM6e']))
                      : 0 === y.length
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [m(), g(null, et.intl.string(et.t.EVWFNj))]
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  m(),
                                  y
                                      .sort((e, t) => Number(t.id) - Number(e.id))
                                      .map((e) =>
                                          (0, r.jsx)(
                                              e_,
                                              eo(
                                                  {
                                                      locale: a,
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
                          });
        return e
            ? (0, r.jsx)(I.Z, {})
            : (0, r.jsx)(E.hjN, {
                  tag: E.RB0.H1,
                  title: et.intl.string(et.t['f6kk+v']),
                  children: (0, r.jsx)(E.y5t, {
                      component: (0, r.jsx)(E.ToO, {
                          className: ei.marginBottom40,
                          type: E.sje.PRIMARY,
                          title: et.intl.string(et.t.HU3RFx),
                          body: et.intl.string(et.t.Nu5Yi4)
                      }),
                      children: O()
                  })
              });
    };
