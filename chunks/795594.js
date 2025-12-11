n.d(t, {
    JJ: () => e_,
    Wg: () => em,
    ZP: () => eh,
}),
    n(997841),
    n(388685),
    n(539854),
    n(953529),
    n(781311),
    n(642613);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(658722),
    l = n.n(s),
    c = n(512722),
    u = n.n(c),
    d = n(663042),
    f = n(243814),
    p = n(95015),
    _ = n(793030),
    m = n(442837),
    h = n(921072),
    g = n(524437),
    E = n(481060),
    b = n(384275),
    y = n(493683),
    O = n(87051),
    v = n(317381),
    S = n(513202),
    I = n(367907),
    T = n(162685),
    C = n(979200),
    A = n(870822),
    N = n(589414),
    P = n(600164),
    R = n(240991),
    w = n(713938),
    D = n(973616),
    x = n(881998),
    L = n(592125),
    j = n(944486),
    M = n(9156),
    k = n(768581),
    U = n(49012),
    G = n(621600),
    Z = n(709054),
    F = n(706454),
    B = n(210887),
    V = n(313789),
    H = n(675478),
    Y = n(581883),
    W = n(526665),
    K = n(436267),
    z = n(494620),
    q = n(273313),
    Q = n(869743),
    X = n(518596),
    J = n(981631),
    $ = n(468788),
    ee = n(388032),
    et = n(380735),
    en = n(960324),
    er = n(478411);
function ei(e, t, n) {
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
function ea(e) {
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
                ei(e, t, n[t]);
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
function es(e, t) {
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
let el = m.ZP.connectStores([B.Z], () => ({ theme: B.Z.theme }))(E.ubH);
function ec(e) {
    let { className: t, text: n } = e;
    return (0, r.jsxs)("div", {
        className: o()(et.warningOuterContainer, t),
        children: [
            (0, r.jsx)(E.d3s, {
                size: "md",
                color: "currentColor",
                className: et.warningIcon,
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
                case h.u$.IP_LOCATION:
                    return (0, r.jsx)(E.enf, {
                        size: "md",
                        color: "currentColor",
                        className: et.disclosureIcon,
                    });
                case h.u$.DISPLAYS_ADVERTISEMENTS:
                    return (0, r.jsx)(E.FLu, { className: et.disclosureIcon });
                default:
                    return (0, r.jsx)(E.d3s, { className: et.disclosureIcon });
            }
        }, [t]);
    },
    ed = (e, t) => {
        let n = ee.intl.string(ee.t["DT39A+"]),
            i = ee.intl.formatToPlainString(ee.t.QWGvxA, { applicationName: e.name }),
            a = null;
        return (
            (0, A.Z)(e) &&
                ((n = ee.intl.formatToPlainString(ee.t["paC+US"], { applicationName: e.name })),
                (i = ee.intl.formatToPlainString(ee.t.inM1Yt, { applicationName: e.name })),
                (a = (0, r.jsx)(z.Z, {
                    look: z.z.WARNING,
                    children: ee.intl.string(ee.t.LY35Zy),
                }))),
            (0, K.Z)(e.id) &&
                (a = (0, r.jsxs)(r.Fragment, {
                    children: [
                        a,
                        (0, r.jsx)(z.Z, { children: ee.intl.format(ee.t.KRnERi, { applicationName: e.name }) }),
                    ],
                })),
            (0, E.h7j)((e) =>
                (0, r.jsx)(
                    _.Modal,
                    es(
                        ea(
                            {
                                title: n,
                                subtitle: i,
                                actions: [
                                    {
                                        text: ee.intl.string(ee.t["ETE/oC"]),
                                        onClick: e.onClose,
                                        variant: "secondary",
                                    },
                                    {
                                        text: ee.intl.string(ee.t.xUqheM),
                                        onClick: () => {
                                            t(), e.onClose();
                                        },
                                        variant: "critical-primary",
                                    },
                                ],
                            },
                            e,
                        ),
                        {
                            children: (0, r.jsx)("div", {
                                className: et.deleteModalBody,
                                children: a,
                            }),
                        },
                    ),
                ),
            )
        );
    },
    ef = (e) => {
        let { application: t, isVisible: n } = e,
            i = () => {
                null != t.terms_of_service_url &&
                    (0, U.q)({
                        href: t.terms_of_service_url,
                        shouldConfirm: !0,
                    });
            },
            a = () => {
                null != t.privacy_policy_url &&
                    (0, U.q)({
                        href: t.privacy_policy_url,
                        shouldConfirm: !0,
                    });
            };
        return null != t.terms_of_service_url || null != t.privacy_policy_url
            ? (0, r.jsxs)("div", {
                  className: et.tosPrivacy,
                  children: [
                      null != t.terms_of_service_url
                          ? (0, r.jsxs)(E.Anchor, {
                                onClick: i,
                                tabIndex: n ? 0 : -1,
                                className: et.tos,
                                children: [
                                    (0, r.jsx)(E.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-link",
                                        children: ee.intl.string(ee.t["lx+Gec"]),
                                    }),
                                    (0, r.jsx)(E.Gr1, {
                                        size: "sm",
                                        className: et.externalLinkIcon,
                                        color: "var(--text-link)",
                                    }),
                                ],
                            })
                          : null,
                      null != t.privacy_policy_url
                          ? (0, r.jsxs)("div", {
                                className: et.privacy,
                                children: [
                                    null != t.terms_of_service_url
                                        ? (0, r.jsx)("div", { className: et.divider })
                                        : null,
                                    (0, r.jsxs)(E.Anchor, {
                                        onClick: a,
                                        className: et.privacy,
                                        tabIndex: n ? 0 : -1,
                                        children: [
                                            (0, r.jsx)(E.Text, {
                                                variant: "text-sm/normal",
                                                color: "text-link",
                                                children: ee.intl.string(ee.t.okSwq9),
                                            }),
                                            (0, r.jsx)(E.Gr1, {
                                                size: "sm",
                                                className: et.externalLinkIcon,
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
    ep = (e) => {
        let {
                scopes: t,
                application: a,
                selectedChannelId: s,
                selectedGuildId: l,
                onDelete: c,
                disclosures: d,
                locale: _,
                id: h,
            } = e,
            b = a.id,
            v = i.useMemo(() => D.ZP.createFromServer(a), [a]),
            S = (0, p.yE)(v.flags, J.udG.EMBEDDED),
            A = (0, m.e7)([Y.Z], () => {
                var e, t, n, r;
                return null == (r = Y.Z.settings.applications) ||
                    null == (n = r.appSettings) ||
                    null == (t = n[b]) ||
                    null == (e = t.appDmSettings)
                    ? void 0
                    : e.allowMobilePush;
            }, [b]),
            x = T.w.useExperiment({ location: "oauth2_authorize" }),
            j = a.bot,
            U = (0, m.e7)([L.Z], () => L.Z.getDMFromUserId(null == j ? void 0 : j.id)),
            { appDMChannelMuteConfig: F, dmChannelMuted: B } = (0, m.cj)([M.ZP], () =>
                null == U
                    ? {
                          appDMChannelMuteConfig: null,
                          dmChannelMuted: !1,
                      }
                    : {
                          appDMChannelMuteConfig: M.ZP.getChannelMuteConfig(null, U),
                          dmChannelMuted: M.ZP.isChannelMuted(null, U),
                      },
            ),
            [z, q] = i.useState(!1),
            [ei, eo] = i.useState(!1),
            es = () => {
                let e = [];
                for (let n of t)
                    e.push(...(0, w.CI)(n, t)), n === f.x.APPLICATIONS_COMMANDS && e.push(ee.intl.string(ee.t.Ls2XRq));
                if (e.length > 0 || (null != d && d.length > 0))
                    return (0, r.jsx)(E.zF9, {
                        className: et.appDetailsSection,
                        isExpanded: ei,
                        collapsibleContent: (0, r.jsxs)("ul", {
                            className: et.appDetailsContent,
                            children: [
                                e.map((e, t) =>
                                    (0, r.jsxs)(
                                        "li",
                                        {
                                            className: et.permission,
                                            children: [
                                                (0, r.jsx)("i", { className: et.permissionCheckmark }),
                                                (0, r.jsx)(E.Text, {
                                                    variant: "text-sm/normal",
                                                    children: e,
                                                }),
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
                                                        className: et.permission,
                                                        children: [
                                                            (0, r.jsx)(eu, { disclosure: t }),
                                                            (0, r.jsx)(E.Text, {
                                                                variant: "text-sm/normal",
                                                                children: i,
                                                            }),
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
                                    (0, r.jsxs)(E.P3F, {
                                        className: et.appDetailsSectionHeader,
                                        onClick: (e) => {
                                            eo(!ei), n(e);
                                        },
                                        children: [
                                            (0, r.jsx)(E.Heading, {
                                                variant: "heading-sm/medium",
                                                color: "text-strong",
                                                children: ee.intl.string(ee.t.xrmhRX),
                                            }),
                                            ei
                                                ? (0, r.jsx)(E.CJ0, {
                                                      size: "md",
                                                      color: E.TVs.colors.INTERACTIVE_TEXT_DEFAULT,
                                                  })
                                                : (0, r.jsx)(E.Fbu, {
                                                      size: "md",
                                                      color: E.TVs.colors.INTERACTIVE_TEXT_DEFAULT,
                                                  }),
                                        ],
                                    }),
                                    !ei &&
                                        (0, r.jsx)(E.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: o()(et.appDetailsContent, et.permissionsDescription),
                                            children: ee.intl.format(ee.t.nZOS8j, { numPermissions: e.length }),
                                        }),
                                ],
                            });
                        },
                    });
            },
            el = i.useMemo(() => {
                if (null != a.description && "" !== a.description)
                    return (0, r.jsx)(E.Text, {
                        className: en.markup,
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: (0, R.parseBioReact)(a.description),
                    });
            }, [a.description]),
            ep = () => {
                let e = null != a.description && "" !== a.description,
                    t = null != a.terms_of_service_url || null != a.privacy_policy_url;
                return e || t
                    ? (0, r.jsx)(E.zF9, {
                          className: et.appDetailsSection,
                          isExpanded: z,
                          collapsibleContent: (0, r.jsxs)("div", {
                              className: et.appDetailsContent,
                              children: [
                                  e && el,
                                  t &&
                                      (0, r.jsx)(ef, {
                                          application: a,
                                          isVisible: z,
                                      }),
                              ],
                          }),
                          children: (e) => {
                              let { onClick: t } = e;
                              return (0, r.jsxs)(E.P3F, {
                                  className: et.appDetailsSectionHeader,
                                  onClick: (e) => {
                                      q(!z), t(e);
                                  },
                                  children: [
                                      (0, r.jsx)(E.Heading, {
                                          variant: "heading-sm/medium",
                                          color: "text-strong",
                                          children: ee.intl.string(ee.t.fcYgiY),
                                      }),
                                      z
                                          ? (0, r.jsx)(E.CJ0, {
                                                size: "md",
                                                color: E.TVs.colors.INTERACTIVE_TEXT_DEFAULT,
                                            })
                                          : (0, r.jsx)(E.Fbu, {
                                                size: "md",
                                                color: E.TVs.colors.INTERACTIVE_TEXT_DEFAULT,
                                            }),
                                  ],
                              });
                          },
                      })
                    : null;
            },
            e_ = () => {
                let e = k.ZP.getApplicationIconURL({
                        id: a.id,
                        icon: a.icon,
                    }),
                    t =
                        null != e
                            ? (0, r.jsx)(P.Z.Child, {
                                  className: et.appAvatarV2,
                                  grow: 0,
                                  children: (0, r.jsx)("img", {
                                      src: e,
                                      alt: "",
                                  }),
                              })
                            : null,
                    n = new Date(Z.default.extractTimestamp(h)).toLocaleDateString(_);
                return (0, r.jsxs)("div", {
                    className: et.headerV2,
                    children: [
                        t,
                        (0, r.jsxs)("div", {
                            className: et.headerTextContainerV2,
                            children: [
                                (0, r.jsx)(E.Heading, {
                                    variant: "heading-md/semibold",
                                    className: o()(et.headerText, er.marginBottom4),
                                    children: a.name,
                                }),
                                (0, r.jsx)(E.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: ee.intl.format(ee.t.yOApCK, { date: n }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(Q.Z, {
                            appRecord: v,
                            selectedGuildId: l,
                            selectedChannelId: s,
                        }),
                    ],
                });
            },
            em = (e) => {
                H.hW.updateAsync(
                    "applications",
                    (t) => {
                        b in t.appSettings
                            ? null == t.appSettings[b].appDmSettings
                                ? (t.appSettings[b].appDmSettings = g.c$.create({ allowMobilePush: e }))
                                : (t.appSettings[b].appDmSettings.allowMobilePush = e)
                            : (t.appSettings[b] = g.dp.create({ appDmSettings: g.c$.create({ allowMobilePush: e }) }));
                    },
                    H.fy.INFREQUENT_USER_ACTION,
                ),
                    I.ZP.trackWithMetadata(J.rMx.NOTIFICATION_SETTINGS_UPDATED, {
                        update_type: $.I.AUTHORIZED_APP_DM_PUSH_NOTIFICATION,
                        application_id: a.id,
                        label: e ? G.ZB.Unmuted : G.ZB.Muted,
                    });
            },
            eh = i.useCallback(async () => {
                u()(null != j, "dm channel mute setting requires having a bot user");
                let e = U;
                null == e && (e = await y.Z.ensurePrivateChannel(j.id)),
                    B
                        ? O.Z.updateAppDMOverrideSettings(null, e, a.id, { muted: !1 }, G.ZB.Unmuted)
                        : (0, E.ZDy)(async () => {
                              let { default: t } = await n.e("8246").then(n.bind(n, 540679));
                              return (n) =>
                                  (0, r.jsx)(
                                      t,
                                      ea(
                                          {
                                              channelId: e,
                                              applicationId: a.id,
                                          },
                                          n,
                                      ),
                                  );
                          });
            }, [U, j, B, a.id]),
            eg = () =>
                x.enabled
                    ? (0, r.jsxs)("div", {
                          className: et.directMessagesSection,
                          children: [
                              (0, r.jsx)(E.Heading, {
                                  variant: "heading-sm/medium",
                                  color: "text-strong",
                                  className: et.dmSettingsHeader,
                                  children: ee.intl.string(ee.t.NaZyYC),
                              }),
                              (0, r.jsxs)(E.Kqy, {
                                  gap: 20,
                                  children: [
                                      null != j
                                          ? (0, r.jsx)(E.rsf, {
                                                label: ee.intl.string(ee.t.NkwaBs),
                                                description:
                                                    (null == F ? void 0 : F.end_time) != null
                                                        ? ee.intl.format(ee.t.j7h4AJ, {
                                                              endTime: new Date(F.end_time).toLocaleString(
                                                                  ee.intl.currentLocale,
                                                                  {
                                                                      month: "numeric",
                                                                      day: "numeric",
                                                                      hour: "numeric",
                                                                      minute: "2-digit",
                                                                  },
                                                              ),
                                                          })
                                                        : void 0,
                                                checked: B,
                                                onChange: eh,
                                            })
                                          : null,
                                      S && x.enabled
                                          ? (0, r.jsx)(E.rsf, {
                                                label: ee.intl.string(ee.t["Pkw//o"]),
                                                description: ee.intl.string(ee.t.hw1nKf),
                                                checked: A,
                                                disabled: B,
                                                onChange: em,
                                            })
                                          : null,
                                  ],
                              }),
                          ],
                      })
                    : null,
            eE = (0, K.O)(a.id),
            eb = (0, N.Z)(a),
            ey = () =>
                (0, r.jsxs)("div", {
                    className: et.footer,
                    children: [
                        eb
                            ? (0, r.jsx)(ec, {
                                  className: et.warningContainer,
                                  text: ee.intl.format(ee.t.j4B7EW, { applicationName: a.name }),
                              })
                            : eE
                              ? (0, r.jsx)(ec, {
                                    className: et.warningContainer,
                                    text: ee.intl.format(ee.t.jUhnwb, {
                                        applicationName: a.name,
                                        onConnectionPress: () =>
                                            (0, X.openUserSettings)(V.n.CONNECTIONS_PANEL, {
                                                section: J.oAB.CONNECTIONS,
                                            }),
                                    }),
                                })
                              : null,
                        (0, r.jsx)("div", {
                            className: et.deauthorizeButton,
                            children: (0, r.jsx)(E.Button, {
                                variant: "critical-secondary",
                                size: "sm",
                                text: ee.intl.string(ee.t.xUqheM),
                                onClick: () => ed(a, c),
                            }),
                        }),
                    ],
                }),
            eO = (0, W.wy)("AuthorizedApps");
        return (0, r.jsx)("div", {
            className: o()(et.authedAppV2, { [et.authedAppV2UserSettingsRedesign]: eO }),
            children: (0, r.jsx)(E.y5t, {
                component: e_(),
                children: (0, r.jsxs)("div", {
                    className: et.appDetailsContainer,
                    children: [ep(), es(), eg(), ey()],
                }),
            }),
        });
    },
    e_ = (0, d.U)(() => ({ searchQuery: "" })),
    em = () => {
        let { fetchState: e, appAuthTokens: t } = (0, m.cj)([x.default], () => ({
                fetchState: x.default.getFetchState(),
                appAuthTokens: x.default.getNewestTokensForNonChildrenApplications(),
            })),
            n = (0, m.e7)([F.default], () => F.default.locale),
            a = (0, m.e7)([v.ZP], () => v.ZP.getSelfEmbeddedActivities()),
            o = (0, m.e7)([L.Z, j.Z], () => L.Z.getChannel(j.Z.getChannelId())),
            s = null == o ? void 0 : o.getGuildId(),
            c = (e) => {
                let { id: t, application: n } = e;
                b.Z.delete(t);
                let r = a.get(n.id);
                null != r &&
                    S.Z.leaveActivity({
                        location: r.location,
                        applicationId: n.id,
                        showFeedback: !1,
                    });
            },
            u = e_((e) => e.searchQuery),
            d = (e) => e_.setState({ searchQuery: e }),
            f = (e) => {
                d(e);
            },
            p = () => {
                d("");
            },
            _ = () =>
                (0, r.jsx)("div", {
                    className: et.searchContainer,
                    children: (0, r.jsx)(E.E1j, {
                        query: u,
                        onChange: f,
                        onClear: p,
                        placeholder: ee.intl.string(ee.t["5prvKe"]),
                        "aria-label": ee.intl.string(ee.t["5prvKe"]),
                    }),
                }),
            h = (e, t) =>
                (0, r.jsx)(el, {
                    className: et.__invalid_marginTop20,
                    children: (0, r.jsx)(E.OZU, {
                        note: e,
                        children: t,
                    }),
                }),
            g = i.useMemo(() => {
                let e = u.trim().toLowerCase();
                return "" === e || null == t
                    ? t
                    : t.length < 100
                      ? t.filter((t) => l()(e, t.application.name.toLowerCase()))
                      : t.filter((t) => t.application.name.toLowerCase().includes(e));
            }, [t, u]),
            y = () =>
                null == t || null == g || e !== x.FetchState.FETCHED
                    ? (0, r.jsx)(E.$jN, {
                          className: er.marginTop20,
                          type: E.$jN.Type.SPINNING_CIRCLE,
                      })
                    : 0 === t.length
                      ? h(ee.intl.string(ee.t.CpPv5l), ee.intl.string(ee.t["E+SM6T"]))
                      : 0 === g.length
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [_(), h(null, ee.intl.string(ee.t.EVWFNr))],
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  _(),
                                  g
                                      .sort((e, t) => Number(t.id) - Number(e.id))
                                      .map((e) =>
                                          (0, r.jsx)(
                                              ep,
                                              ea(
                                                  {
                                                      locale: n,
                                                      onDelete: () => c(e),
                                                      selectedChannelId: null == o ? void 0 : o.id,
                                                      selectedGuildId: null != s ? s : void 0,
                                                  },
                                                  e,
                                              ),
                                              e.id,
                                          ),
                                      ),
                              ],
                          });
        return (0, r.jsx)(E.y5t, {
            component: (0, r.jsxs)(E.Zbd, {
                type: E.Zbd.Types.PRIMARY,
                className: et.headingCard,
                children: [
                    (0, r.jsx)(E.Heading, {
                        variant: "heading-md/medium",
                        children: ee.intl.string(ee.t.HU3RFw),
                    }),
                    (0, r.jsx)(E.Text, {
                        variant: "text-sm/normal",
                        children: ee.intl.string(ee.t.Nu5Yi0),
                    }),
                ],
            }),
            children: y(),
        });
    },
    eh = () => (
        i.useEffect(() => {
            b.Z.fetch();
        }, []),
        i.useEffect(
            () => () => {
                e_.setState({ searchQuery: "" });
            },
            [],
        ),
        (0, r.jsx)(q.Z, {
            title: ee.intl.string(ee.t["f6kk+r"]),
            children: (0, r.jsx)(em, {}),
        })
    );
