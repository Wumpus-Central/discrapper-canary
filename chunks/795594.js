n.d(t, {
    J: () => ep,
    Z: () => eh
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
    _ = n(243814),
    f = n(442837),
    p = n(921072),
    h = n(524437),
    m = n(1561),
    g = n(844168),
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
    L = n(726721),
    x = n(240991),
    M = n(713938),
    k = n(973616),
    j = n(881998),
    U = n(592125),
    G = n(944486),
    B = n(246946),
    V = n(9156),
    F = n(768581),
    Z = n(630388),
    H = n(49012),
    Y = n(621600),
    W = n(709054),
    K = n(706454),
    z = n(210887),
    q = n(675478),
    X = n(581883),
    Q = n(436267),
    J = n(494620),
    $ = n(869743),
    ee = n(981631),
    et = n(468788),
    en = n(388032),
    er = n(989604),
    ei = n(73433),
    ea = n(20493);
function eo(e, t, n) {
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
function es(e) {
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
                eo(e, t, n[t]);
            });
    }
    return e;
}
let el = f.ZP.connectStores([z.Z], () => ({ theme: z.Z.theme }))(E.ubH);
function ec(e) {
    let { className: t, text: n } = e;
    return (0, r.jsxs)('div', {
        className: o()(er.warningOuterContainer, t),
        children: [
            (0, r.jsx)(E.d3s, {
                size: 'md',
                color: 'currentColor',
                className: er.warningIcon
            }),
            (0, r.jsx)(E.Text, {
                color: 'text-normal',
                variant: 'text-sm/medium',
                children: n
            })
        ]
    });
}
let eu = (e) => {
        let { disclosure: t } = e;
        return i.useMemo(() => {
            switch (t) {
                case p.u$.IP_LOCATION:
                    return (0, r.jsx)(E.enf, {
                        size: 'md',
                        color: 'currentColor',
                        className: er.disclosureIcon
                    });
                case p.u$.DISPLAYS_ADVERTISEMENTS:
                    return (0, r.jsx)(E.FLu, { className: er.disclosureIcon });
                default:
                    return (0, r.jsx)(E.d3s, { className: er.disclosureIcon });
            }
        }, [t]);
    },
    ed = (e, t) => {
        let n = en.intl.string(en.t.DT39Aw),
            i = en.intl.formatToPlainString(en.t.QWGvxM, { applicationName: e.name });
        return (
            (0, P.Z)(e) &&
                ((n = en.intl.formatToPlainString(en.t['paC+UV'], { applicationName: e.name })),
                (i = (0, r.jsxs)(r.Fragment, {
                    children: [
                        en.intl.formatToPlainString(en.t.inM1Ym, { applicationName: e.name }),
                        (0, r.jsx)(J.Z, {
                            look: J.z.WARNING,
                            className: er.infoBox,
                            children: en.intl.string(en.t.LY35Z2)
                        })
                    ]
                }))),
            (0, Q.Z)(e.id) &&
                (i = (0, r.jsxs)(r.Fragment, {
                    children: [
                        i,
                        (0, r.jsx)(J.Z, {
                            className: er.infoBox,
                            children: en.intl.format(en.t.KRnERk, { applicationName: e.name })
                        })
                    ]
                })),
            (0, E.h7j)((e) =>
                (0, r.jsx)(
                    T.default,
                    es(
                        {
                            title: n,
                            body: i,
                            confirmText: en.intl.string(en.t.xUqheH),
                            confirmColor: E.Ttl.RED,
                            cancelText: en.intl.string(en.t['ETE/oK']),
                            onConfirm: t
                        },
                        e
                    )
                )
            )
        );
    },
    e_ = (e) => {
        let { application: t, isVisible: n } = e,
            i = () => {
                null != t.terms_of_service_url &&
                    (0, H.q)({
                        href: t.terms_of_service_url,
                        shouldConfirm: !0
                    });
            },
            a = () => {
                null != t.privacy_policy_url &&
                    (0, H.q)({
                        href: t.privacy_policy_url,
                        shouldConfirm: !0
                    });
            };
        return null != t.terms_of_service_url || null != t.privacy_policy_url
            ? (0, r.jsxs)('div', {
                  className: er.tosPrivacy,
                  children: [
                      null != t.terms_of_service_url
                          ? (0, r.jsxs)(m.P, {
                                tag: 'a',
                                onClick: i,
                                className: er.tos,
                                tabIndex: n ? 0 : -1,
                                children: [
                                    (0, r.jsx)(E.R94, {
                                        className: er.link,
                                        children: en.intl.string(en.t['lx+GeX'])
                                    }),
                                    (0, r.jsx)(E.Gr1, {
                                        className: er.externalLinkIcon,
                                        color: 'var(--text-link)'
                                    })
                                ]
                            })
                          : null,
                      null != t.privacy_policy_url
                          ? (0, r.jsxs)('div', {
                                className: er.privacy,
                                children: [
                                    null != t.terms_of_service_url ? (0, r.jsx)('div', { className: er.divider }) : null,
                                    (0, r.jsxs)(m.P, {
                                        tag: 'a',
                                        onClick: a,
                                        className: er.privacy,
                                        tabIndex: n ? 0 : -1,
                                        children: [
                                            (0, r.jsx)(E.R94, {
                                                className: er.link,
                                                children: en.intl.string(en.t.okSwq6)
                                            }),
                                            (0, r.jsx)(E.Gr1, {
                                                className: er.externalLinkIcon,
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
    ef = (e) => {
        let { scopes: t, application: a, selectedChannelId: s, selectedGuildId: l, onDelete: c, disclosures: d, locale: p, id: g } = e,
            b = a.id,
            I = i.useMemo(() => k.ZP.createFromServer(a), [a]),
            T = (0, Z.yE)(I.flags, ee.udG.EMBEDDED),
            S = (0, f.e7)(
                [X.Z],
                () => {
                    var e, t, n, r;
                    return null == (r = X.Z.settings.applications) || null == (n = r.appSettings) || null == (t = n[b]) || null == (e = t.appDmSettings) ? void 0 : e.allowMobilePush;
                },
                [b]
            ),
            A = C.w.useExperiment({ location: 'oauth2_authorize' }),
            P = a.bot,
            j = (0, f.e7)([U.Z], () => U.Z.getDMFromUserId(null == P ? void 0 : P.id)),
            { appDMChannelMuteConfig: G, dmChannelMuted: B } = (0, f.cj)([V.ZP], () =>
                null == j
                    ? {
                          appDMChannelMuteConfig: null,
                          dmChannelMuted: !1
                      }
                    : {
                          appDMChannelMuteConfig: V.ZP.getChannelMuteConfig(null, j),
                          dmChannelMuted: V.ZP.isChannelMuted(null, j)
                      }
            ),
            [H, K] = i.useState(!1),
            [z, J] = i.useState(!1),
            eo = L.Z.useExperiment({ location: 'Authorized Applications' }, { autoTrackExposure: !0 }).enabled,
            el = () => {
                let e = [];
                for (let n of t) e.push(...(0, M.CI)(n, t)), n === _.x.APPLICATIONS_COMMANDS && e.push(en.intl.string(en.t.Ls2XRk));
                if (e.length > 0 || (null != d && d.length > 0))
                    return (0, r.jsx)(E.zF9, {
                        className: er.appDetailsSection,
                        isExpanded: z,
                        collapsibleContent: (0, r.jsxs)('ul', {
                            className: er.appDetailsContent,
                            children: [
                                e.map((e, t) =>
                                    (0, r.jsxs)(
                                        'li',
                                        {
                                            className: er.permission,
                                            children: [(0, r.jsx)('i', { className: er.permissionCheckmark }), (0, r.jsx)(E.R94, { children: e })]
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
                                                        className: er.permission,
                                                        children: [(0, r.jsx)(eu, { disclosure: t }), (0, r.jsx)(E.R94, { children: i })]
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
                                        className: er.appDetailsSectionHeader,
                                        onClick: (e) => {
                                            J(!z), n(e);
                                        },
                                        children: [
                                            (0, r.jsx)(E.X6q, {
                                                variant: 'heading-sm/medium',
                                                color: 'header-primary',
                                                children: en.intl.string(en.t.xrmhRU)
                                            }),
                                            z
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
                                    !z &&
                                        (0, r.jsx)(E.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-secondary',
                                            className: o()(er.appDetailsContent, er.permissionsDescription),
                                            children: en.intl.format(en.t.nZOS8v, { numPermissions: e.length })
                                        })
                                ]
                            });
                        }
                    });
            },
            ef = i.useMemo(() => {
                if (null != a.description && '' !== a.description)
                    return (0, r.jsx)(E.Text, {
                        className: ei.markup,
                        variant: 'text-sm/normal',
                        color: 'text-normal',
                        children: (0, x.parseBioReact)(a.description)
                    });
            }, [a.description]),
            ep = () => {
                let e = null != a.description && '' !== a.description,
                    t = null != a.terms_of_service_url || null != a.privacy_policy_url;
                return e || t
                    ? (0, r.jsx)(E.zF9, {
                          className: er.appDetailsSection,
                          isExpanded: H,
                          collapsibleContent: (0, r.jsxs)('div', {
                              className: er.appDetailsContent,
                              children: [
                                  e && ef,
                                  t &&
                                      (0, r.jsx)(e_, {
                                          application: a,
                                          isVisible: H
                                      })
                              ]
                          }),
                          children: (e) => {
                              let { onClick: t } = e;
                              return (0, r.jsxs)(m.P, {
                                  className: er.appDetailsSectionHeader,
                                  onClick: (e) => {
                                      K(!H), t(e);
                                  },
                                  children: [
                                      (0, r.jsx)(E.X6q, {
                                          variant: 'heading-sm/medium',
                                          color: 'header-primary',
                                          children: en.intl.string(en.t.fcYgiY)
                                      }),
                                      H
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
            eh = () => {
                let e = F.ZP.getApplicationIconURL({
                        id: a.id,
                        icon: a.icon
                    }),
                    t =
                        null != e
                            ? (0, r.jsx)(D.Z.Child, {
                                  className: er.appAvatarV2,
                                  grow: 0,
                                  children: (0, r.jsx)('img', {
                                      src: e,
                                      alt: ''
                                  })
                              })
                            : null,
                    n = new Date(W.default.extractTimestamp(g)).toLocaleDateString(p);
                return (0, r.jsxs)('div', {
                    className: er.headerV2,
                    children: [
                        t,
                        (0, r.jsxs)('div', {
                            className: er.headerTextContainerV2,
                            children: [
                                (0, r.jsx)(E.X6q, {
                                    variant: 'heading-md/semibold',
                                    className: o()(er.headerText, ea.marginBottom4),
                                    children: a.name
                                }),
                                (0, r.jsx)(E.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-normal',
                                    children: en.intl.format(en.t.yOApCA, { date: n })
                                })
                            ]
                        }),
                        (0, r.jsx)($.Z, {
                            appRecord: I,
                            showAppReportingOption: eo,
                            selectedGuildId: l,
                            selectedChannelId: s
                        })
                    ]
                });
            },
            em = (e) => {
                q.hW.updateAsync(
                    'applications',
                    (t) => {
                        b in t.appSettings ? (null == t.appSettings[b].appDmSettings ? (t.appSettings[b].appDmSettings = h.c$.create({ allowMobilePush: e })) : (t.appSettings[b].appDmSettings.allowMobilePush = e)) : (t.appSettings[b] = h.dp.create({ appDmSettings: h.c$.create({ allowMobilePush: e }) }));
                    },
                    q.fy.INFREQUENT_USER_ACTION
                ),
                    N.ZP.trackWithMetadata(ee.rMx.NOTIFICATION_SETTINGS_UPDATED, {
                        update_type: et.I.AUTHORIZED_APP_DM_PUSH_NOTIFICATION,
                        application_id: a.id,
                        label: e ? Y.ZB.Unmuted : Y.ZB.Muted
                    });
            },
            eg = i.useCallback(async () => {
                u()(null != P, 'dm channel mute setting requires having a bot user');
                let e = j;
                null == e && (e = await y.Z.ensurePrivateChannel(P.id)),
                    B
                        ? O.Z.updateAppDMOverrideSettings(null, e, a.id, { muted: !1 }, Y.ZB.Unmuted)
                        : (0, E.ZDy)(async () => {
                              let { default: t } = await n.e('8246').then(n.bind(n, 540679));
                              return (n) =>
                                  (0, r.jsx)(
                                      t,
                                      es(
                                          {
                                              channelId: e,
                                              applicationId: a.id
                                          },
                                          n
                                      )
                                  );
                          });
            }, [j, P, B, a.id]),
            eE = () =>
                A.enabled
                    ? (0, r.jsxs)('div', {
                          className: er.directMessagesSection,
                          children: [
                              (0, r.jsx)(E.X6q, {
                                  variant: 'heading-sm/medium',
                                  color: 'header-primary',
                                  className: er.dmSettingsHeader,
                                  children: en.intl.string(en.t.NaZyYG)
                              }),
                              null != P
                                  ? (0, r.jsx)(E.j7V, {
                                        hideBorder: !0,
                                        onChange: eg,
                                        className: er.dmSettingsSwitch,
                                        note:
                                            (null == G ? void 0 : G.end_time) != null
                                                ? en.intl.format(en.t.j7h4AA, {
                                                      endTime: new Date(G.end_time).toLocaleString(en.intl.currentLocale, {
                                                          month: 'numeric',
                                                          day: 'numeric',
                                                          hour: 'numeric',
                                                          minute: '2-digit'
                                                      })
                                                  })
                                                : void 0,
                                        value: B,
                                        children: (0, r.jsx)(E.Text, {
                                            variant: 'text-sm/medium',
                                            children: en.intl.string(en.t.NkwaBg)
                                        })
                                    })
                                  : null,
                              T && A.enabled
                                  ? (0, r.jsx)(E.j7V, {
                                        hideBorder: !0,
                                        onChange: em,
                                        className: er.dmSettingsSwitch,
                                        note: en.intl.string(en.t.hw1nKS),
                                        value: S,
                                        disabled: B,
                                        children: (0, r.jsx)(E.Text, {
                                            variant: 'text-sm/medium',
                                            children: en.intl.string(en.t['Pkw//v'])
                                        })
                                    })
                                  : null
                          ]
                      })
                    : null,
            eb = (0, Q.O)(a.id),
            ey = (0, w.Z)(a),
            eO = () =>
                (0, r.jsxs)('div', {
                    className: er.footer,
                    children: [
                        ey
                            ? (0, r.jsx)(ec, {
                                  className: er.warningContainer,
                                  text: en.intl.format(en.t.j4B7ER, { applicationName: a.name })
                              })
                            : eb
                              ? (0, r.jsx)(ec, {
                                    className: er.warningContainer,
                                    text: en.intl.format(en.t.jUhnwc, {
                                        applicationName: a.name,
                                        onConnectionPress: () => v.Z.setSection(ee.jXE.SETTINGS_CONNECTIONS)
                                    })
                                })
                              : null,
                        (0, r.jsx)('div', {
                            className: er.deauthorizeButton,
                            children: (0, r.jsx)(E.zxk, {
                                color: E.Ttl.RED,
                                look: E.iLD.OUTLINED,
                                size: E.PhG.SMALL,
                                onClick: () => ed(a, c),
                                children: en.intl.string(en.t.xUqheH)
                            })
                        })
                    ]
                });
        return (0, r.jsx)('div', {
            className: er.authedAppV2,
            children: (0, r.jsx)(E.y5t, {
                component: eh(),
                children: (0, r.jsxs)('div', {
                    className: er.appDetailsContainer,
                    children: [ep(), el(), eE(), eO()]
                })
            })
        });
    },
    ep = (0, d.U)(() => ({ searchQuery: '' })),
    eh = () => {
        let e = (0, f.e7)([B.Z], () => B.Z.hidePersonalInformation),
            t = (0, f.e7)([j.Z], () => j.Z.getNonChildrenApps()),
            a = (0, f.e7)([K.default], () => K.default.locale),
            o = (0, f.e7)([S.ZP], () => S.ZP.getSelfEmbeddedActivities()),
            s = (0, f.e7)([U.Z, G.Z], () => U.Z.getChannel(G.Z.getChannelId())),
            c = null == s ? void 0 : s.getGuildId(),
            u = (0, g.C)('user-settings-authed-apps');
        i.useEffect(() => {
            b.Z.fetch();
        }, []),
            i.useEffect(
                () => () => {
                    ep.setState({ searchQuery: '' });
                },
                []
            );
        let d = (e) => {
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
            _ = ep((e) => e.searchQuery),
            p = (e) => ep.setState({ searchQuery: e }),
            h = (e) => {
                p(e);
            },
            m = () => {
                p('');
            },
            y = () =>
                (0, r.jsx)('div', {
                    className: er.searchContainer,
                    children: (0, r.jsx)(E.E1j, {
                        size: E.E1j.Sizes.MEDIUM,
                        query: _,
                        onChange: h,
                        onClear: m,
                        placeholder: en.intl.string(en.t['5prvKS']),
                        'aria-label': en.intl.string(en.t['5prvKS'])
                    })
                }),
            O = (e, t) =>
                (0, r.jsxs)(el, {
                    className: er.__invalid_marginTop20,
                    children: [
                        !u &&
                            (0, r.jsx)(E.oxh, {
                                darkSrc: n(701972),
                                lightSrc: n(818658),
                                width: 380,
                                height: 282
                            }),
                        (0, r.jsx)(E.OZU, {
                            note: e,
                            children: t
                        })
                    ]
                }),
            v = i.useMemo(() => {
                let e = _.trim().toLowerCase();
                return '' === e || null == t ? t : t.length < 100 ? t.filter((t) => l()(e, t.application.name.toLowerCase())) : t.filter((t) => t.application.name.toLowerCase().includes(e));
            }, [t, _]),
            T = () =>
                null == t || null == v
                    ? (0, r.jsx)(E.$jN, {
                          className: ea.marginTop20,
                          type: E.$jN.Type.SPINNING_CIRCLE
                      })
                    : 0 === t.length
                      ? O(en.intl.string(en.t.CpPv5u), en.intl.string(en.t['E+SM6e']))
                      : 0 === v.length
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [y(), O(null, en.intl.string(en.t.EVWFNj))]
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  y(),
                                  v
                                      .sort((e, t) => Number(t.id) - Number(e.id))
                                      .map((e) =>
                                          (0, r.jsx)(
                                              ef,
                                              es(
                                                  {
                                                      locale: a,
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
            ? (0, r.jsx)(I.Z, {})
            : (0, r.jsx)(E.hjN, {
                  tag: E.RB0.H1,
                  title: en.intl.string(en.t['f6kk+v']),
                  children: (0, r.jsx)(E.y5t, {
                      component: (0, r.jsx)(E.ToO, {
                          className: ea.marginBottom40,
                          type: E.sje.PRIMARY,
                          title: en.intl.string(en.t.HU3RFx),
                          body: en.intl.string(en.t.Nu5Yi4)
                      }),
                      children: T()
                  })
              });
    };
