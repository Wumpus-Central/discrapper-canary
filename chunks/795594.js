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
    m = n(755721),
    g = n(481060),
    E = n(384275),
    b = n(493683),
    y = n(87051),
    O = n(497321),
    v = n(468026),
    I = n(317381),
    T = n(513202),
    S = n(367907),
    A = n(162685),
    C = n(979200),
    N = n(870822),
    R = n(589414),
    P = n(600164),
    w = n(240991),
    D = n(713938),
    x = n(973616),
    L = n(881998),
    j = n(592125),
    M = n(944486),
    k = n(246946),
    U = n(9156),
    G = n(768581),
    B = n(630388),
    Z = n(49012),
    F = n(621600),
    V = n(709054),
    H = n(706454),
    Y = n(210887),
    W = n(313789),
    K = n(675478),
    z = n(581883),
    q = n(436267),
    X = n(494620),
    Q = n(273313),
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
let el = _.ZP.connectStores([Y.Z], () => ({ theme: Y.Z.theme }))(g.ubH);
function ec(e) {
    let { className: t, text: n } = e;
    return (0, r.jsxs)("div", {
        className: o()(er.warningOuterContainer, t),
        children: [
            (0, r.jsx)(g.d3s, {
                size: "md",
                color: "currentColor",
                className: er.warningIcon,
            }),
            (0, r.jsx)(g.Text, {
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
                    return (0, r.jsx)(g.enf, {
                        size: "md",
                        color: "currentColor",
                        className: er.disclosureIcon,
                    });
                case p.u$.DISPLAYS_ADVERTISEMENTS:
                    return (0, r.jsx)(g.FLu, { className: er.disclosureIcon });
                default:
                    return (0, r.jsx)(g.d3s, { className: er.disclosureIcon });
            }
        }, [t]);
    },
    ed = (e, t) => {
        let n = en.intl.string(en.t.DT39Aw),
            i = en.intl.formatToPlainString(en.t.QWGvxM, { applicationName: e.name });
        return (
            (0, N.Z)(e) &&
                ((n = en.intl.formatToPlainString(en.t["paC+UV"], { applicationName: e.name })),
                (i = (0, r.jsxs)(r.Fragment, {
                    children: [
                        en.intl.formatToPlainString(en.t.inM1Ym, { applicationName: e.name }),
                        (0, r.jsx)(X.Z, {
                            look: X.z.WARNING,
                            className: er.infoBox,
                            children: en.intl.string(en.t.LY35Z2),
                        }),
                    ],
                }))),
            (0, q.Z)(e.id) &&
                (i = (0, r.jsxs)(r.Fragment, {
                    children: [
                        i,
                        (0, r.jsx)(X.Z, {
                            className: er.infoBox,
                            children: en.intl.format(en.t.KRnERk, { applicationName: e.name }),
                        }),
                    ],
                })),
            (0, g.h7j)((e) =>
                (0, r.jsx)(
                    v.default,
                    es(
                        {
                            title: n,
                            body: i,
                            confirmText: en.intl.string(en.t.xUqheH),
                            confirmColor: m.Tt.RED,
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
                    (0, Z.q)({
                        href: t.terms_of_service_url,
                        shouldConfirm: !0,
                    });
            },
            a = () => {
                null != t.privacy_policy_url &&
                    (0, Z.q)({
                        href: t.privacy_policy_url,
                        shouldConfirm: !0,
                    });
            };
        return null != t.terms_of_service_url || null != t.privacy_policy_url
            ? (0, r.jsxs)("div", {
                  className: er.tosPrivacy,
                  children: [
                      null != t.terms_of_service_url
                          ? (0, r.jsxs)(g.P3F, {
                                tag: "a",
                                onClick: i,
                                className: er.tos,
                                tabIndex: n ? 0 : -1,
                                children: [
                                    (0, r.jsx)(g.R94, {
                                        className: er.link,
                                        children: en.intl.string(en.t["lx+GeX"]),
                                    }),
                                    (0, r.jsx)(g.Gr1, {
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
                                    (0, r.jsxs)(g.P3F, {
                                        tag: "a",
                                        onClick: a,
                                        className: er.privacy,
                                        tabIndex: n ? 0 : -1,
                                        children: [
                                            (0, r.jsx)(g.R94, {
                                                className: er.link,
                                                children: en.intl.string(en.t.okSwq6),
                                            }),
                                            (0, r.jsx)(g.Gr1, {
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
                id: m,
            } = e,
            E = a.id,
            O = i.useMemo(() => x.ZP.createFromServer(a), [a]),
            v = (0, B.yE)(O.flags, ee.udG.EMBEDDED),
            I = (0, _.e7)([z.Z], () => {
                var e, t, n, r;
                return null == (r = z.Z.settings.applications) ||
                    null == (n = r.appSettings) ||
                    null == (t = n[E]) ||
                    null == (e = t.appDmSettings)
                    ? void 0
                    : e.allowMobilePush;
            }, [E]),
            T = A.w.useExperiment({ location: "oauth2_authorize" }),
            N = a.bot,
            L = (0, _.e7)([j.Z], () => j.Z.getDMFromUserId(null == N ? void 0 : N.id)),
            { appDMChannelMuteConfig: M, dmChannelMuted: k } = (0, _.cj)([U.ZP], () =>
                null == L
                    ? {
                          appDMChannelMuteConfig: null,
                          dmChannelMuted: !1,
                      }
                    : {
                          appDMChannelMuteConfig: U.ZP.getChannelMuteConfig(null, L),
                          dmChannelMuted: U.ZP.isChannelMuted(null, L),
                      },
            ),
            [Z, H] = i.useState(!1),
            [Y, X] = i.useState(!1),
            Q = () => {
                let e = [];
                for (let n of t)
                    e.push(...(0, D.CI)(n, t)), n === f.x.APPLICATIONS_COMMANDS && e.push(en.intl.string(en.t.Ls2XRk));
                if (e.length > 0 || (null != d && d.length > 0))
                    return (0, r.jsx)(g.zF9, {
                        className: er.appDetailsSection,
                        isExpanded: Y,
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
                                                (0, r.jsx)(g.R94, { children: e }),
                                            ],
                                        },
                                        t,
                                    ),
                                ),
                                null == d
                                    ? void 0
                                    : d.map((t, n) => {
                                          let i = (0, C.PM)(t);
                                          return null != i
                                              ? (0, r.jsxs)(
                                                    "li",
                                                    {
                                                        className: er.permission,
                                                        children: [
                                                            (0, r.jsx)(eu, { disclosure: t }),
                                                            (0, r.jsx)(g.R94, { children: i }),
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
                                    (0, r.jsxs)(g.P3F, {
                                        className: er.appDetailsSectionHeader,
                                        onClick: (e) => {
                                            X(!Y), n(e);
                                        },
                                        children: [
                                            (0, r.jsx)(g.X6q, {
                                                variant: "heading-sm/medium",
                                                color: "header-primary",
                                                children: en.intl.string(en.t.xrmhRU),
                                            }),
                                            Y
                                                ? (0, r.jsx)(g.CJ0, {
                                                      size: "md",
                                                      color: g.TVs.colors.INTERACTIVE_NORMAL,
                                                  })
                                                : (0, r.jsx)(g.Fbu, {
                                                      size: "md",
                                                      color: g.TVs.colors.INTERACTIVE_NORMAL,
                                                  }),
                                        ],
                                    }),
                                    !Y &&
                                        (0, r.jsx)(g.Text, {
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
            eo = i.useMemo(() => {
                if (null != a.description && "" !== a.description)
                    return (0, r.jsx)(g.Text, {
                        className: ei.markup,
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: (0, w.parseBioReact)(a.description),
                    });
            }, [a.description]),
            el = () => {
                let e = null != a.description && "" !== a.description,
                    t = null != a.terms_of_service_url || null != a.privacy_policy_url;
                return e || t
                    ? (0, r.jsx)(g.zF9, {
                          className: er.appDetailsSection,
                          isExpanded: Z,
                          collapsibleContent: (0, r.jsxs)("div", {
                              className: er.appDetailsContent,
                              children: [
                                  e && eo,
                                  t &&
                                      (0, r.jsx)(ef, {
                                          application: a,
                                          isVisible: Z,
                                      }),
                              ],
                          }),
                          children: (e) => {
                              let { onClick: t } = e;
                              return (0, r.jsxs)(g.P3F, {
                                  className: er.appDetailsSectionHeader,
                                  onClick: (e) => {
                                      H(!Z), t(e);
                                  },
                                  children: [
                                      (0, r.jsx)(g.X6q, {
                                          variant: "heading-sm/medium",
                                          color: "header-primary",
                                          children: en.intl.string(en.t.fcYgiY),
                                      }),
                                      Z
                                          ? (0, r.jsx)(g.CJ0, {
                                                size: "md",
                                                color: g.TVs.colors.INTERACTIVE_NORMAL,
                                            })
                                          : (0, r.jsx)(g.Fbu, {
                                                size: "md",
                                                color: g.TVs.colors.INTERACTIVE_NORMAL,
                                            }),
                                  ],
                              });
                          },
                      })
                    : null;
            },
            e_ = () => {
                let e = G.ZP.getApplicationIconURL({
                        id: a.id,
                        icon: a.icon,
                    }),
                    t =
                        null != e
                            ? (0, r.jsx)(P.Z.Child, {
                                  className: er.appAvatarV2,
                                  grow: 0,
                                  children: (0, r.jsx)("img", {
                                      src: e,
                                      alt: "",
                                  }),
                              })
                            : null,
                    n = new Date(V.default.extractTimestamp(m)).toLocaleDateString(p);
                return (0, r.jsxs)("div", {
                    className: er.headerV2,
                    children: [
                        t,
                        (0, r.jsxs)("div", {
                            className: er.headerTextContainerV2,
                            children: [
                                (0, r.jsx)(g.X6q, {
                                    variant: "heading-md/semibold",
                                    className: o()(er.headerText, ea.marginBottom4),
                                    children: a.name,
                                }),
                                (0, r.jsx)(g.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: en.intl.format(en.t.yOApCA, { date: n }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(J.Z, {
                            appRecord: O,
                            selectedGuildId: l,
                            selectedChannelId: s,
                        }),
                    ],
                });
            },
            ep = (e) => {
                K.hW.updateAsync(
                    "applications",
                    (t) => {
                        E in t.appSettings
                            ? null == t.appSettings[E].appDmSettings
                                ? (t.appSettings[E].appDmSettings = h.c$.create({ allowMobilePush: e }))
                                : (t.appSettings[E].appDmSettings.allowMobilePush = e)
                            : (t.appSettings[E] = h.dp.create({ appDmSettings: h.c$.create({ allowMobilePush: e }) }));
                    },
                    K.fy.INFREQUENT_USER_ACTION,
                ),
                    S.ZP.trackWithMetadata(ee.rMx.NOTIFICATION_SETTINGS_UPDATED, {
                        update_type: et.I.AUTHORIZED_APP_DM_PUSH_NOTIFICATION,
                        application_id: a.id,
                        label: e ? F.ZB.Unmuted : F.ZB.Muted,
                    });
            },
            eh = i.useCallback(async () => {
                u()(null != N, "dm channel mute setting requires having a bot user");
                let e = L;
                null == e && (e = await b.Z.ensurePrivateChannel(N.id)),
                    k
                        ? y.Z.updateAppDMOverrideSettings(null, e, a.id, { muted: !1 }, F.ZB.Unmuted)
                        : (0, g.ZDy)(async () => {
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
            }, [L, N, k, a.id]),
            em = () =>
                T.enabled
                    ? (0, r.jsxs)("div", {
                          className: er.directMessagesSection,
                          children: [
                              (0, r.jsx)(g.X6q, {
                                  variant: "heading-sm/medium",
                                  color: "header-primary",
                                  className: er.dmSettingsHeader,
                                  children: en.intl.string(en.t.NaZyYG),
                              }),
                              null != N
                                  ? (0, r.jsx)(g.j7V, {
                                        hideBorder: !0,
                                        onChange: eh,
                                        className: er.dmSettingsSwitch,
                                        note:
                                            (null == M ? void 0 : M.end_time) != null
                                                ? en.intl.format(en.t.j7h4AA, {
                                                      endTime: new Date(M.end_time).toLocaleString(
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
                                        value: k,
                                        children: (0, r.jsx)(g.Text, {
                                            variant: "text-sm/medium",
                                            children: en.intl.string(en.t.NkwaBg),
                                        }),
                                    })
                                  : null,
                              v && T.enabled
                                  ? (0, r.jsx)(g.j7V, {
                                        hideBorder: !0,
                                        onChange: ep,
                                        className: er.dmSettingsSwitch,
                                        note: en.intl.string(en.t.hw1nKS),
                                        value: I,
                                        disabled: k,
                                        children: (0, r.jsx)(g.Text, {
                                            variant: "text-sm/medium",
                                            children: en.intl.string(en.t["Pkw//v"]),
                                        }),
                                    })
                                  : null,
                          ],
                      })
                    : null,
            eg = (0, q.O)(a.id),
            eE = (0, R.Z)(a),
            eb = (0, $.Z)(),
            ey = () =>
                (0, r.jsxs)("div", {
                    className: er.footer,
                    children: [
                        eE
                            ? (0, r.jsx)(ec, {
                                  className: er.warningContainer,
                                  text: en.intl.format(en.t.j4B7ER, { applicationName: a.name }),
                              })
                            : eg
                              ? (0, r.jsx)(ec, {
                                    className: er.warningContainer,
                                    text: en.intl.format(en.t.jUhnwc, {
                                        applicationName: a.name,
                                        onConnectionPress: () =>
                                            eb(W.n.CONNECTIONS_PANEL, { section: ee.oAB.CONNECTIONS }),
                                    }),
                                })
                              : null,
                        (0, r.jsx)("div", {
                            className: er.deauthorizeButton,
                            children: (0, r.jsx)(g.zxk, {
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
            children: (0, r.jsx)(g.y5t, {
                component: e_(),
                children: (0, r.jsxs)("div", {
                    className: er.appDetailsContainer,
                    children: [el(), Q(), em(), ey()],
                }),
            }),
        });
    },
    ep = (0, d.U)(() => ({ searchQuery: "" })),
    eh = () => {
        let e = (0, _.e7)([k.Z], () => k.Z.hidePersonalInformation),
            { fetchState: t, appAuthTokens: n } = (0, _.cj)([L.Z], () => ({
                fetchState: L.Z.getFetchState(),
                appAuthTokens: L.Z.getNewestTokensForNonChildrenApplications(),
            })),
            a = (0, _.e7)([H.default], () => H.default.locale),
            o = (0, _.e7)([I.ZP], () => I.ZP.getSelfEmbeddedActivities()),
            s = (0, _.e7)([j.Z, M.Z], () => j.Z.getChannel(M.Z.getChannelId())),
            c = null == s ? void 0 : s.getGuildId();
        i.useEffect(() => {
            E.Z.fetch();
        }, []),
            i.useEffect(
                () => () => {
                    ep.setState({ searchQuery: "" });
                },
                [],
            );
        let u = (e) => {
                let { id: t, application: n } = e;
                E.Z.delete(t);
                let r = o.get(n.id);
                null != r &&
                    T.Z.leaveActivity({
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
                    children: (0, r.jsx)(g.E1j, {
                        query: d,
                        onChange: p,
                        onClear: h,
                        placeholder: en.intl.string(en.t["5prvKS"]),
                        "aria-label": en.intl.string(en.t["5prvKS"]),
                    }),
                }),
            b = (e, t) =>
                (0, r.jsx)(el, {
                    className: er.__invalid_marginTop20,
                    children: (0, r.jsx)(g.OZU, {
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
            v = () =>
                null == n || null == y || t !== L.M.FETCHED
                    ? (0, r.jsx)(g.$jN, {
                          className: ea.marginTop20,
                          type: g.$jN.Type.SPINNING_CIRCLE,
                      })
                    : 0 === n.length
                      ? b(en.intl.string(en.t.CpPv5u), en.intl.string(en.t["E+SM6e"]))
                      : 0 === y.length
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [m(), b(null, en.intl.string(en.t.EVWFNj))],
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
            ? (0, r.jsx)(O.Z, {})
            : (0, r.jsx)(Q.Z, {
                  title: en.intl.string(en.t["f6kk+v"]),
                  children: (0, r.jsx)(g.y5t, {
                      component: (0, r.jsx)(g.ToO, {
                          className: ea.marginBottom40,
                          type: g.sje.PRIMARY,
                          title: en.intl.string(en.t.HU3RFx),
                          body: en.intl.string(en.t.Nu5Yi4),
                      }),
                      children: v(),
                  }),
              });
    };
