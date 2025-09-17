n.d(t, {
    J: () => ep,
    Z: () => eh,
}),
    n(997841),
    n(388685),
    n(539854),
    n(953529),
    n(781311),
    n(642613);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(658722),
    l = n.n(s),
    c = n(512722),
    u = n.n(c),
    d = n(879690),
    f = n(243814),
    _ = n(442837),
    p = n(921072),
    h = n(524437),
    m = n(1561),
    g = n(755721),
    E = n(481060),
    b = n(384275),
    y = n(493683),
    O = n(87051),
    v = n(497321),
    I = n(468026),
    T = n(317381),
    S = n(513202),
    A = n(367907),
    C = n(162685),
    N = n(979200),
    R = n(870822),
    P = n(589414),
    w = n(600164),
    D = n(240991),
    x = n(713938),
    L = n(973616),
    j = n(881998),
    M = n(592125),
    k = n(944486),
    U = n(246946),
    G = n(9156),
    B = n(768581),
    Z = n(630388),
    F = n(49012),
    V = n(621600),
    H = n(709054),
    Y = n(706454),
    W = n(210887),
    K = n(313789),
    z = n(675478),
    q = n(581883),
    X = n(436267),
    Q = n(494620),
    J = n(869743),
    $ = n(947889),
    ee = n(981631),
    et = n(468788),
    en = n(388032),
    er = n(392082),
    ei = n(430864),
    ea = n(197571);
function eo(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function es(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                eo(e, t, n[t]);
            });
    }
    return e;
}
let el = _.ZP.connectStores([W.Z], () => ({ theme: W.Z.theme }))(E.ubH);
function ec(e) {
    let { className: t, text: n } = e;
    return (0, r.jsxs)("div", {
        className: o()(er.warningOuterContainer, t),
        children: [
            (0, r.jsx)(E.d3s, {
                size: "md",
                color: "currentColor",
                className: er.warningIcon,
            }),
            (0, r.jsx)(E.Text, {
                color: "text-default",
                variant: "text-sm/medium",
                children: n,
            }),
        ],
    });
}
let eu = (e) => {
        let { disclosure: t } = e;
        return i.useMemo(() => {
            switch (t) {
                case p.u$.IP_LOCATION:
                    return (0, r.jsx)(E.enf, {
                        size: "md",
                        color: "currentColor",
                        className: er.disclosureIcon,
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
            (0, R.Z)(e) &&
                ((n = en.intl.formatToPlainString(en.t["paC+UV"], { applicationName: e.name })),
                (i = (0, r.jsxs)(r.Fragment, {
                    children: [
                        en.intl.formatToPlainString(en.t.inM1Ym, { applicationName: e.name }),
                        (0, r.jsx)(Q.Z, {
                            look: Q.z.WARNING,
                            className: er.infoBox,
                            children: en.intl.string(en.t.LY35Z2),
                        }),
                    ],
                }))),
            (0, X.Z)(e.id) &&
                (i = (0, r.jsxs)(r.Fragment, {
                    children: [
                        i,
                        (0, r.jsx)(Q.Z, {
                            className: er.infoBox,
                            children: en.intl.format(en.t.KRnERk, { applicationName: e.name }),
                        }),
                    ],
                })),
            (0, E.h7j)((e) =>
                (0, r.jsx)(
                    I.default,
                    es(
                        {
                            title: n,
                            body: i,
                            confirmText: en.intl.string(en.t.xUqheH),
                            confirmColor: g.Tt.RED,
                            cancelText: en.intl.string(en.t["ETE/oK"]),
                            onConfirm: t,
                        },
                        e,
                    ),
                ),
            )
        );
    },
    ef = (e) => {
        let { application: t, isVisible: n } = e,
            i = () => {
                null != t.terms_of_service_url &&
                    (0, F.q)({
                        href: t.terms_of_service_url,
                        shouldConfirm: !0,
                    });
            },
            a = () => {
                null != t.privacy_policy_url &&
                    (0, F.q)({
                        href: t.privacy_policy_url,
                        shouldConfirm: !0,
                    });
            };
        return null != t.terms_of_service_url || null != t.privacy_policy_url
            ? (0, r.jsxs)("div", {
                  className: er.tosPrivacy,
                  children: [
                      null != t.terms_of_service_url
                          ? (0, r.jsxs)(m.P, {
                                tag: "a",
                                onClick: i,
                                className: er.tos,
                                tabIndex: n ? 0 : -1,
                                children: [
                                    (0, r.jsx)(E.R94, {
                                        className: er.link,
                                        children: en.intl.string(en.t["lx+GeX"]),
                                    }),
                                    (0, r.jsx)(E.Gr1, {
                                        className: er.externalLinkIcon,
                                        color: "var(--text-link)",
                                    }),
                                ],
                            })
                          : null,
                      null != t.privacy_policy_url
                          ? (0, r.jsxs)("div", {
                                className: er.privacy,
                                children: [
                                    null != t.terms_of_service_url
                                        ? (0, r.jsx)("div", { className: er.divider })
                                        : null,
                                    (0, r.jsxs)(m.P, {
                                        tag: "a",
                                        onClick: a,
                                        className: er.privacy,
                                        tabIndex: n ? 0 : -1,
                                        children: [
                                            (0, r.jsx)(E.R94, {
                                                className: er.link,
                                                children: en.intl.string(en.t.okSwq6),
                                            }),
                                            (0, r.jsx)(E.Gr1, {
                                                className: er.externalLinkIcon,
                                                color: "var(--text-link)",
                                            }),
                                        ],
                                    }),
                                ],
                            })
                          : null,
                  ],
              })
            : null;
    },
    e_ = (e) => {
        let {
                scopes: t,
                application: a,
                selectedChannelId: s,
                selectedGuildId: l,
                onDelete: c,
                disclosures: d,
                locale: p,
                id: g,
            } = e,
            b = a.id,
            v = i.useMemo(() => L.ZP.createFromServer(a), [a]),
            I = (0, Z.yE)(v.flags, ee.udG.EMBEDDED),
            T = (0, _.e7)([q.Z], () => {
                var e, t, n, r;
                return null == (r = q.Z.settings.applications) ||
                    null == (n = r.appSettings) ||
                    null == (t = n[b]) ||
                    null == (e = t.appDmSettings)
                    ? void 0
                    : e.allowMobilePush;
            }, [b]),
            S = C.w.useExperiment({ location: "oauth2_authorize" }),
            R = a.bot,
            j = (0, _.e7)([M.Z], () => M.Z.getDMFromUserId(null == R ? void 0 : R.id)),
            { appDMChannelMuteConfig: k, dmChannelMuted: U } = (0, _.cj)([G.ZP], () =>
                null == j
                    ? {
                          appDMChannelMuteConfig: null,
                          dmChannelMuted: !1,
                      }
                    : {
                          appDMChannelMuteConfig: G.ZP.getChannelMuteConfig(null, j),
                          dmChannelMuted: G.ZP.isChannelMuted(null, j),
                      },
            ),
            [F, Y] = i.useState(!1),
            [W, Q] = i.useState(!1),
            eo = () => {
                let e = [];
                for (let n of t)
                    e.push(...(0, x.CI)(n, t)), n === f.x.APPLICATIONS_COMMANDS && e.push(en.intl.string(en.t.Ls2XRk));
                if (e.length > 0 || (null != d && d.length > 0))
                    return (0, r.jsx)(E.zF9, {
                        className: er.appDetailsSection,
                        isExpanded: W,
                        collapsibleContent: (0, r.jsxs)("ul", {
                            className: er.appDetailsContent,
                            children: [
                                e.map((e, t) =>
                                    (0, r.jsxs)(
                                        "li",
                                        {
                                            className: er.permission,
                                            children: [
                                                (0, r.jsx)("i", { className: er.permissionCheckmark }),
                                                (0, r.jsx)(E.R94, { children: e }),
                                            ],
                                        },
                                        t,
                                    ),
                                ),
                                null == d
                                    ? void 0
                                    : d.map((t, n) => {
                                          let i = (0, N.PM)(t);
                                          return null != i
                                              ? (0, r.jsxs)(
                                                    "li",
                                                    {
                                                        className: er.permission,
                                                        children: [
                                                            (0, r.jsx)(eu, { disclosure: t }),
                                                            (0, r.jsx)(E.R94, { children: i }),
                                                        ],
                                                    },
                                                    n + e.length,
                                                )
                                              : null;
                                      }),
                            ],
                        }),
                        children: (t) => {
                            let { onClick: n } = t;
                            return (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsxs)(m.P, {
                                        className: er.appDetailsSectionHeader,
                                        onClick: (e) => {
                                            Q(!W), n(e);
                                        },
                                        children: [
                                            (0, r.jsx)(E.X6q, {
                                                variant: "heading-sm/medium",
                                                color: "header-primary",
                                                children: en.intl.string(en.t.xrmhRU),
                                            }),
                                            W
                                                ? (0, r.jsx)(E.CJ0, {
                                                      size: "md",
                                                      color: E.TVs.colors.INTERACTIVE_NORMAL,
                                                  })
                                                : (0, r.jsx)(E.Fbu, {
                                                      size: "md",
                                                      color: E.TVs.colors.INTERACTIVE_NORMAL,
                                                  }),
                                        ],
                                    }),
                                    !W &&
                                        (0, r.jsx)(E.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-secondary",
                                            className: o()(er.appDetailsContent, er.permissionsDescription),
                                            children: en.intl.format(en.t.nZOS8v, { numPermissions: e.length }),
                                        }),
                                ],
                            });
                        },
                    });
            },
            el = i.useMemo(() => {
                if (null != a.description && "" !== a.description)
                    return (0, r.jsx)(E.Text, {
                        className: ei.markup,
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: (0, D.parseBioReact)(a.description),
                    });
            }, [a.description]),
            e_ = () => {
                let e = null != a.description && "" !== a.description,
                    t = null != a.terms_of_service_url || null != a.privacy_policy_url;
                return e || t
                    ? (0, r.jsx)(E.zF9, {
                          className: er.appDetailsSection,
                          isExpanded: F,
                          collapsibleContent: (0, r.jsxs)("div", {
                              className: er.appDetailsContent,
                              children: [
                                  e && el,
                                  t &&
                                      (0, r.jsx)(ef, {
                                          application: a,
                                          isVisible: F,
                                      }),
                              ],
                          }),
                          children: (e) => {
                              let { onClick: t } = e;
                              return (0, r.jsxs)(m.P, {
                                  className: er.appDetailsSectionHeader,
                                  onClick: (e) => {
                                      Y(!F), t(e);
                                  },
                                  children: [
                                      (0, r.jsx)(E.X6q, {
                                          variant: "heading-sm/medium",
                                          color: "header-primary",
                                          children: en.intl.string(en.t.fcYgiY),
                                      }),
                                      F
                                          ? (0, r.jsx)(E.CJ0, {
                                                size: "md",
                                                color: E.TVs.colors.INTERACTIVE_NORMAL,
                                            })
                                          : (0, r.jsx)(E.Fbu, {
                                                size: "md",
                                                color: E.TVs.colors.INTERACTIVE_NORMAL,
                                            }),
                                  ],
                              });
                          },
                      })
                    : null;
            },
            ep = () => {
                let e = B.ZP.getApplicationIconURL({
                        id: a.id,
                        icon: a.icon,
                    }),
                    t =
                        null != e
                            ? (0, r.jsx)(w.Z.Child, {
                                  className: er.appAvatarV2,
                                  grow: 0,
                                  children: (0, r.jsx)("img", {
                                      src: e,
                                      alt: "",
                                  }),
                              })
                            : null,
                    n = new Date(H.default.extractTimestamp(g)).toLocaleDateString(p);
                return (0, r.jsxs)("div", {
                    className: er.headerV2,
                    children: [
                        t,
                        (0, r.jsxs)("div", {
                            className: er.headerTextContainerV2,
                            children: [
                                (0, r.jsx)(E.X6q, {
                                    variant: "heading-md/semibold",
                                    className: o()(er.headerText, ea.marginBottom4),
                                    children: a.name,
                                }),
                                (0, r.jsx)(E.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: en.intl.format(en.t.yOApCA, { date: n }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(J.Z, {
                            appRecord: v,
                            selectedGuildId: l,
                            selectedChannelId: s,
                        }),
                    ],
                });
            },
            eh = (e) => {
                z.hW.updateAsync(
                    "applications",
                    (t) => {
                        b in t.appSettings
                            ? null == t.appSettings[b].appDmSettings
                                ? (t.appSettings[b].appDmSettings = h.c$.create({ allowMobilePush: e }))
                                : (t.appSettings[b].appDmSettings.allowMobilePush = e)
                            : (t.appSettings[b] = h.dp.create({ appDmSettings: h.c$.create({ allowMobilePush: e }) }));
                    },
                    z.fy.INFREQUENT_USER_ACTION,
                ),
                    A.ZP.trackWithMetadata(ee.rMx.NOTIFICATION_SETTINGS_UPDATED, {
                        update_type: et.I.AUTHORIZED_APP_DM_PUSH_NOTIFICATION,
                        application_id: a.id,
                        label: e ? V.ZB.Unmuted : V.ZB.Muted,
                    });
            },
            em = i.useCallback(async () => {
                u()(null != R, "dm channel mute setting requires having a bot user");
                let e = j;
                null == e && (e = await y.Z.ensurePrivateChannel(R.id)),
                    U
                        ? O.Z.updateAppDMOverrideSettings(null, e, a.id, { muted: !1 }, V.ZB.Unmuted)
                        : (0, E.ZDy)(async () => {
                              let { default: t } = await n.e("8246").then(n.bind(n, 540679));
                              return (n) =>
                                  (0, r.jsx)(
                                      t,
                                      es(
                                          {
                                              channelId: e,
                                              applicationId: a.id,
                                          },
                                          n,
                                      ),
                                  );
                          });
            }, [j, R, U, a.id]),
            eg = () =>
                S.enabled
                    ? (0, r.jsxs)("div", {
                          className: er.directMessagesSection,
                          children: [
                              (0, r.jsx)(E.X6q, {
                                  variant: "heading-sm/medium",
                                  color: "header-primary",
                                  className: er.dmSettingsHeader,
                                  children: en.intl.string(en.t.NaZyYG),
                              }),
                              null != R
                                  ? (0, r.jsx)(E.j7V, {
                                        hideBorder: !0,
                                        onChange: em,
                                        className: er.dmSettingsSwitch,
                                        note:
                                            (null == k ? void 0 : k.end_time) != null
                                                ? en.intl.format(en.t.j7h4AA, {
                                                      endTime: new Date(k.end_time).toLocaleString(
                                                          en.intl.currentLocale,
                                                          {
                                                              month: "numeric",
                                                              day: "numeric",
                                                              hour: "numeric",
                                                              minute: "2-digit",
                                                          },
                                                      ),
                                                  })
                                                : void 0,
                                        value: U,
                                        children: (0, r.jsx)(E.Text, {
                                            variant: "text-sm/medium",
                                            children: en.intl.string(en.t.NkwaBg),
                                        }),
                                    })
                                  : null,
                              I && S.enabled
                                  ? (0, r.jsx)(E.j7V, {
                                        hideBorder: !0,
                                        onChange: eh,
                                        className: er.dmSettingsSwitch,
                                        note: en.intl.string(en.t.hw1nKS),
                                        value: T,
                                        disabled: U,
                                        children: (0, r.jsx)(E.Text, {
                                            variant: "text-sm/medium",
                                            children: en.intl.string(en.t["Pkw//v"]),
                                        }),
                                    })
                                  : null,
                          ],
                      })
                    : null,
            eE = (0, X.O)(a.id),
            eb = (0, P.Z)(a),
            ey = (0, $.Z)(),
            eO = () =>
                (0, r.jsxs)("div", {
                    className: er.footer,
                    children: [
                        eb
                            ? (0, r.jsx)(ec, {
                                  className: er.warningContainer,
                                  text: en.intl.format(en.t.j4B7ER, { applicationName: a.name }),
                              })
                            : eE
                              ? (0, r.jsx)(ec, {
                                    className: er.warningContainer,
                                    text: en.intl.format(en.t.jUhnwc, {
                                        applicationName: a.name,
                                        onConnectionPress: () =>
                                            ey(K.n.CONNECTIONS_PANEL, { section: ee.oAB.CONNECTIONS }),
                                    }),
                                })
                              : null,
                        (0, r.jsx)("div", {
                            className: er.deauthorizeButton,
                            children: (0, r.jsx)(E.zxk, {
                                variant: "critical-secondary",
                                size: "sm",
                                text: en.intl.string(en.t.xUqheH),
                                onClick: () => ed(a, c),
                            }),
                        }),
                    ],
                });
        return (0, r.jsx)("div", {
            className: er.authedAppV2,
            children: (0, r.jsx)(E.y5t, {
                component: ep(),
                children: (0, r.jsxs)("div", {
                    className: er.appDetailsContainer,
                    children: [e_(), eo(), eg(), eO()],
                }),
            }),
        });
    },
    ep = (0, d.U)(() => ({ searchQuery: "" })),
    eh = () => {
        let e = (0, _.e7)([U.Z], () => U.Z.hidePersonalInformation),
            { fetchState: t, appAuthTokens: n } = (0, _.cj)([j.Z], () => ({
                fetchState: j.Z.getFetchState(),
                appAuthTokens: j.Z.getNewestTokensForNonChildrenApplications(),
            })),
            a = (0, _.e7)([Y.default], () => Y.default.locale),
            o = (0, _.e7)([T.ZP], () => T.ZP.getSelfEmbeddedActivities()),
            s = (0, _.e7)([M.Z, k.Z], () => M.Z.getChannel(k.Z.getChannelId())),
            c = null == s ? void 0 : s.getGuildId();
        i.useEffect(() => {
            b.Z.fetch();
        }, []),
            i.useEffect(
                () => () => {
                    ep.setState({ searchQuery: "" });
                },
                [],
            );
        let u = (e) => {
                let { id: t, application: n } = e;
                b.Z.delete(t);
                let r = o.get(n.id);
                null != r &&
                    S.Z.leaveActivity({
                        location: r.location,
                        applicationId: n.id,
                        showFeedback: !1,
                    });
            },
            d = ep((e) => e.searchQuery),
            f = (e) => ep.setState({ searchQuery: e }),
            p = (e) => {
                f(e);
            },
            h = () => {
                f("");
            },
            m = () =>
                (0, r.jsx)("div", {
                    className: er.searchContainer,
                    children: (0, r.jsx)(E.E1j, {
                        query: d,
                        onChange: p,
                        onClear: h,
                        placeholder: en.intl.string(en.t["5prvKS"]),
                        "aria-label": en.intl.string(en.t["5prvKS"]),
                    }),
                }),
            g = (e, t) =>
                (0, r.jsx)(el, {
                    className: er.__invalid_marginTop20,
                    children: (0, r.jsx)(E.OZU, {
                        note: e,
                        children: t,
                    }),
                }),
            y = i.useMemo(() => {
                let e = d.trim().toLowerCase();
                return "" === e || null == n
                    ? n
                    : n.length < 100
                      ? n.filter((t) => l()(e, t.application.name.toLowerCase()))
                      : n.filter((t) => t.application.name.toLowerCase().includes(e));
            }, [n, d]),
            O = () =>
                null == n || null == y || t !== j.M.FETCHED
                    ? (0, r.jsx)(E.$jN, {
                          className: ea.marginTop20,
                          type: E.$jN.Type.SPINNING_CIRCLE,
                      })
                    : 0 === n.length
                      ? g(en.intl.string(en.t.CpPv5u), en.intl.string(en.t["E+SM6e"]))
                      : 0 === y.length
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [m(), g(null, en.intl.string(en.t.EVWFNj))],
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  m(),
                                  y
                                      .sort((e, t) => Number(t.id) - Number(e.id))
                                      .map((e) =>
                                          (0, r.jsx)(
                                              e_,
                                              es(
                                                  {
                                                      locale: a,
                                                      onDelete: () => u(e),
                                                      selectedChannelId: null == s ? void 0 : s.id,
                                                      selectedGuildId: null != c ? c : void 0,
                                                  },
                                                  e,
                                              ),
                                              e.id,
                                          ),
                                      ),
                              ],
                          });
        return e
            ? (0, r.jsx)(v.Z, {})
            : (0, r.jsx)(E.hjN, {
                  tag: E.RB0.H1,
                  title: en.intl.string(en.t["f6kk+v"]),
                  children: (0, r.jsx)(E.y5t, {
                      component: (0, r.jsx)(E.ToO, {
                          className: ea.marginBottom40,
                          type: E.sje.PRIMARY,
                          title: en.intl.string(en.t.HU3RFx),
                          body: en.intl.string(en.t.Nu5Yi4),
                      }),
                      children: O(),
                  }),
              });
    };
