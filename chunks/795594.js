n.d(t, {
    J: () => em,
    Z: () => eg,
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
    _ = n(95015),
    p = n(793030),
    h = n(442837),
    m = n(921072),
    g = n(524437),
    E = n(481060),
    b = n(384275),
    y = n(493683),
    O = n(87051),
    v = n(497321),
    I = n(317381),
    T = n(513202),
    S = n(367907),
    A = n(162685),
    C = n(979200),
    N = n(870822),
    R = n(589414),
    P = n(600164),
    D = n(240991),
    w = n(713938),
    L = n(973616),
    x = n(881998),
    M = n(592125),
    k = n(944486),
    j = n(246946),
    U = n(9156),
    G = n(768581),
    B = n(49012),
    Z = n(621600),
    F = n(709054),
    V = n(706454),
    H = n(210887),
    Y = n(313789),
    W = n(675478),
    K = n(581883),
    z = n(526665),
    q = n(436267),
    X = n(494620),
    Q = n(273313),
    J = n(869743),
    $ = n(518596),
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
function el(e, t) {
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
function ec(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : el(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eu = h.ZP.connectStores([H.Z], () => ({ theme: H.Z.theme }))(E.ubH);
function ed(e) {
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
let ef = (e) => {
        let { disclosure: t } = e;
        return i.useMemo(() => {
            switch (t) {
                case m.u$.IP_LOCATION:
                    return (0, r.jsx)(E.enf, {
                        size: "md",
                        color: "currentColor",
                        className: er.disclosureIcon,
                    });
                case m.u$.DISPLAYS_ADVERTISEMENTS:
                    return (0, r.jsx)(E.FLu, { className: er.disclosureIcon });
                default:
                    return (0, r.jsx)(E.d3s, { className: er.disclosureIcon });
            }
        }, [t]);
    },
    e_ = (e, t) => {
        let n = en.intl.string(en.t["DT39A+"]),
            i = en.intl.formatToPlainString(en.t.QWGvxA, { applicationName: e.name }),
            a = null;
        return (
            (0, N.Z)(e) &&
                ((n = en.intl.formatToPlainString(en.t["paC+US"], { applicationName: e.name })),
                (i = en.intl.formatToPlainString(en.t.inM1Yt, { applicationName: e.name })),
                (a = (0, r.jsx)(X.Z, {
                    look: X.z.WARNING,
                    children: en.intl.string(en.t.LY35Zy),
                }))),
            (0, q.Z)(e.id) &&
                (a = (0, r.jsxs)(r.Fragment, {
                    children: [
                        a,
                        (0, r.jsx)(X.Z, { children: en.intl.format(en.t.KRnERi, { applicationName: e.name }) }),
                    ],
                })),
            (0, E.h7j)((e) =>
                (0, r.jsx)(
                    p.Modal,
                    ec(
                        es(
                            {
                                title: n,
                                subtitle: i,
                                actions: [
                                    {
                                        text: en.intl.string(en.t["ETE/oC"]),
                                        onClick: e.onClose,
                                        variant: "secondary",
                                    },
                                    {
                                        text: en.intl.string(en.t.xUqheM),
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
                                className: er.deleteModalBody,
                                children: a,
                            }),
                        },
                    ),
                ),
            )
        );
    },
    ep = (e) => {
        let { application: t, isVisible: n } = e,
            i = () => {
                null != t.terms_of_service_url &&
                    (0, B.q)({
                        href: t.terms_of_service_url,
                        shouldConfirm: !0,
                    });
            },
            a = () => {
                null != t.privacy_policy_url &&
                    (0, B.q)({
                        href: t.privacy_policy_url,
                        shouldConfirm: !0,
                    });
            };
        return null != t.terms_of_service_url || null != t.privacy_policy_url
            ? (0, r.jsxs)("div", {
                  className: er.tosPrivacy,
                  children: [
                      null != t.terms_of_service_url
                          ? (0, r.jsxs)(E.Anchor, {
                                onClick: i,
                                tabIndex: n ? 0 : -1,
                                className: er.tos,
                                children: [
                                    (0, r.jsx)(E.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-link",
                                        children: en.intl.string(en.t["lx+Gec"]),
                                    }),
                                    (0, r.jsx)(E.Gr1, {
                                        size: "sm",
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
                                    (0, r.jsxs)(E.Anchor, {
                                        onClick: a,
                                        className: er.privacy,
                                        tabIndex: n ? 0 : -1,
                                        children: [
                                            (0, r.jsx)(E.Text, {
                                                variant: "text-sm/normal",
                                                color: "text-link",
                                                children: en.intl.string(en.t.okSwq9),
                                            }),
                                            (0, r.jsx)(E.Gr1, {
                                                size: "sm",
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
    eh = (e) => {
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
            b = a.id,
            v = i.useMemo(() => L.ZP.createFromServer(a), [a]),
            I = (0, _.yE)(v.flags, ee.udG.EMBEDDED),
            T = (0, h.e7)([K.Z], () => {
                var e, t, n, r;
                return null == (r = K.Z.settings.applications) ||
                    null == (n = r.appSettings) ||
                    null == (t = n[b]) ||
                    null == (e = t.appDmSettings)
                    ? void 0
                    : e.allowMobilePush;
            }, [b]),
            N = A.w.useExperiment({ location: "oauth2_authorize" }),
            x = a.bot,
            k = (0, h.e7)([M.Z], () => M.Z.getDMFromUserId(null == x ? void 0 : x.id)),
            { appDMChannelMuteConfig: j, dmChannelMuted: B } = (0, h.cj)([U.ZP], () =>
                null == k
                    ? {
                          appDMChannelMuteConfig: null,
                          dmChannelMuted: !1,
                      }
                    : {
                          appDMChannelMuteConfig: U.ZP.getChannelMuteConfig(null, k),
                          dmChannelMuted: U.ZP.isChannelMuted(null, k),
                      },
            ),
            [V, H] = i.useState(!1),
            [X, Q] = i.useState(!1),
            eo = () => {
                let e = [];
                for (let n of t)
                    e.push(...(0, w.CI)(n, t)), n === f.x.APPLICATIONS_COMMANDS && e.push(en.intl.string(en.t.Ls2XRq));
                if (e.length > 0 || (null != d && d.length > 0))
                    return (0, r.jsx)(E.zF9, {
                        className: er.appDetailsSection,
                        isExpanded: X,
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
                                                        className: er.permission,
                                                        children: [
                                                            (0, r.jsx)(ef, { disclosure: t }),
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
                                        className: er.appDetailsSectionHeader,
                                        onClick: (e) => {
                                            Q(!X), n(e);
                                        },
                                        children: [
                                            (0, r.jsx)(E.Heading, {
                                                variant: "heading-sm/medium",
                                                color: "header-primary",
                                                children: en.intl.string(en.t.xrmhRX),
                                            }),
                                            X
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
                                    !X &&
                                        (0, r.jsx)(E.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-secondary",
                                            className: o()(er.appDetailsContent, er.permissionsDescription),
                                            children: en.intl.format(en.t.nZOS8j, { numPermissions: e.length }),
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
            ec = () => {
                let e = null != a.description && "" !== a.description,
                    t = null != a.terms_of_service_url || null != a.privacy_policy_url;
                return e || t
                    ? (0, r.jsx)(E.zF9, {
                          className: er.appDetailsSection,
                          isExpanded: V,
                          collapsibleContent: (0, r.jsxs)("div", {
                              className: er.appDetailsContent,
                              children: [
                                  e && el,
                                  t &&
                                      (0, r.jsx)(ep, {
                                          application: a,
                                          isVisible: V,
                                      }),
                              ],
                          }),
                          children: (e) => {
                              let { onClick: t } = e;
                              return (0, r.jsxs)(E.P3F, {
                                  className: er.appDetailsSectionHeader,
                                  onClick: (e) => {
                                      H(!V), t(e);
                                  },
                                  children: [
                                      (0, r.jsx)(E.Heading, {
                                          variant: "heading-sm/medium",
                                          color: "header-primary",
                                          children: en.intl.string(en.t.fcYgiY),
                                      }),
                                      V
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
            eu = () => {
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
                    n = new Date(F.default.extractTimestamp(m)).toLocaleDateString(p);
                return (0, r.jsxs)("div", {
                    className: er.headerV2,
                    children: [
                        t,
                        (0, r.jsxs)("div", {
                            className: er.headerTextContainerV2,
                            children: [
                                (0, r.jsx)(E.Heading, {
                                    variant: "heading-md/semibold",
                                    className: o()(er.headerText, ea.marginBottom4),
                                    children: a.name,
                                }),
                                (0, r.jsx)(E.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: en.intl.format(en.t.yOApCK, { date: n }),
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
                W.hW.updateAsync(
                    "applications",
                    (t) => {
                        b in t.appSettings
                            ? null == t.appSettings[b].appDmSettings
                                ? (t.appSettings[b].appDmSettings = g.c$.create({ allowMobilePush: e }))
                                : (t.appSettings[b].appDmSettings.allowMobilePush = e)
                            : (t.appSettings[b] = g.dp.create({ appDmSettings: g.c$.create({ allowMobilePush: e }) }));
                    },
                    W.fy.INFREQUENT_USER_ACTION,
                ),
                    S.ZP.trackWithMetadata(ee.rMx.NOTIFICATION_SETTINGS_UPDATED, {
                        update_type: et.I.AUTHORIZED_APP_DM_PUSH_NOTIFICATION,
                        application_id: a.id,
                        label: e ? Z.ZB.Unmuted : Z.ZB.Muted,
                    });
            },
            em = i.useCallback(async () => {
                u()(null != x, "dm channel mute setting requires having a bot user");
                let e = k;
                null == e && (e = await y.Z.ensurePrivateChannel(x.id)),
                    B
                        ? O.Z.updateAppDMOverrideSettings(null, e, a.id, { muted: !1 }, Z.ZB.Unmuted)
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
            }, [k, x, B, a.id]),
            eg = () =>
                N.enabled
                    ? (0, r.jsxs)("div", {
                          className: er.directMessagesSection,
                          children: [
                              (0, r.jsx)(E.Heading, {
                                  variant: "heading-sm/medium",
                                  color: "header-primary",
                                  className: er.dmSettingsHeader,
                                  children: en.intl.string(en.t.NaZyYC),
                              }),
                              (0, r.jsxs)(E.Kqy, {
                                  gap: 20,
                                  children: [
                                      null != x
                                          ? (0, r.jsx)(E.rsf, {
                                                label: en.intl.string(en.t.NkwaBs),
                                                description:
                                                    (null == j ? void 0 : j.end_time) != null
                                                        ? en.intl.format(en.t.j7h4AJ, {
                                                              endTime: new Date(j.end_time).toLocaleString(
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
                                                checked: B,
                                                onChange: em,
                                            })
                                          : null,
                                      I && N.enabled
                                          ? (0, r.jsx)(E.rsf, {
                                                label: en.intl.string(en.t["Pkw//o"]),
                                                description: en.intl.string(en.t.hw1nKf),
                                                checked: T,
                                                disabled: B,
                                                onChange: eh,
                                            })
                                          : null,
                                  ],
                              }),
                          ],
                      })
                    : null,
            eE = (0, q.O)(a.id),
            eb = (0, R.Z)(a),
            ey = () =>
                (0, r.jsxs)("div", {
                    className: er.footer,
                    children: [
                        eb
                            ? (0, r.jsx)(ed, {
                                  className: er.warningContainer,
                                  text: en.intl.format(en.t.j4B7EW, { applicationName: a.name }),
                              })
                            : eE
                              ? (0, r.jsx)(ed, {
                                    className: er.warningContainer,
                                    text: en.intl.format(en.t.jUhnwb, {
                                        applicationName: a.name,
                                        onConnectionPress: () =>
                                            (0, $.openUserSettings)(Y.n.CONNECTIONS_PANEL, {
                                                section: ee.oAB.CONNECTIONS,
                                            }),
                                    }),
                                })
                              : null,
                        (0, r.jsx)("div", {
                            className: er.deauthorizeButton,
                            children: (0, r.jsx)(E.Button, {
                                variant: "critical-secondary",
                                size: "sm",
                                text: en.intl.string(en.t.xUqheM),
                                onClick: () => e_(a, c),
                            }),
                        }),
                    ],
                }),
            eO = (0, z.wy)("AuthorizedApps");
        return (0, r.jsx)("div", {
            className: o()(er.authedAppV2, { [er.authedAppV2UserSettingsRedesign]: eO }),
            children: (0, r.jsx)(E.y5t, {
                component: eu(),
                children: (0, r.jsxs)("div", {
                    className: er.appDetailsContainer,
                    children: [ec(), eo(), eg(), ey()],
                }),
            }),
        });
    },
    em = (0, d.U)(() => ({ searchQuery: "" })),
    eg = () => {
        let e = (0, h.e7)([j.Z], () => j.Z.hidePersonalInformation),
            { fetchState: t, appAuthTokens: n } = (0, h.cj)([x.default], () => ({
                fetchState: x.default.getFetchState(),
                appAuthTokens: x.default.getNewestTokensForNonChildrenApplications(),
            })),
            a = (0, h.e7)([V.default], () => V.default.locale),
            o = (0, h.e7)([I.ZP], () => I.ZP.getSelfEmbeddedActivities()),
            s = (0, h.e7)([M.Z, k.Z], () => M.Z.getChannel(k.Z.getChannelId())),
            c = null == s ? void 0 : s.getGuildId();
        i.useEffect(() => {
            b.Z.fetch();
        }, []),
            i.useEffect(
                () => () => {
                    em.setState({ searchQuery: "" });
                },
                [],
            );
        let u = (e) => {
                let { id: t, application: n } = e;
                b.Z.delete(t);
                let r = o.get(n.id);
                null != r &&
                    T.Z.leaveActivity({
                        location: r.location,
                        applicationId: n.id,
                        showFeedback: !1,
                    });
            },
            d = em((e) => e.searchQuery),
            f = (e) => em.setState({ searchQuery: e }),
            _ = (e) => {
                f(e);
            },
            p = () => {
                f("");
            },
            m = () =>
                (0, r.jsx)("div", {
                    className: er.searchContainer,
                    children: (0, r.jsx)(E.E1j, {
                        query: d,
                        onChange: _,
                        onClear: p,
                        placeholder: en.intl.string(en.t["5prvKe"]),
                        "aria-label": en.intl.string(en.t["5prvKe"]),
                    }),
                }),
            g = (e, t) =>
                (0, r.jsx)(eu, {
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
                null == n || null == y || t !== x.FetchState.FETCHED
                    ? (0, r.jsx)(E.$jN, {
                          className: ea.marginTop20,
                          type: E.$jN.Type.SPINNING_CIRCLE,
                      })
                    : 0 === n.length
                      ? g(en.intl.string(en.t.CpPv5l), en.intl.string(en.t["E+SM6T"]))
                      : 0 === y.length
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [m(), g(null, en.intl.string(en.t.EVWFNr))],
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  m(),
                                  y
                                      .sort((e, t) => Number(t.id) - Number(e.id))
                                      .map((e) =>
                                          (0, r.jsx)(
                                              eh,
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
            : (0, r.jsx)(Q.Z, {
                  title: en.intl.string(en.t["f6kk+r"]),
                  children: (0, r.jsx)(E.y5t, {
                      component: (0, r.jsxs)(E.Zbd, {
                          type: E.Zbd.Types.PRIMARY,
                          className: er.headingCard,
                          children: [
                              (0, r.jsx)(E.Heading, {
                                  variant: "heading-md/medium",
                                  children: en.intl.string(en.t.HU3RFw),
                              }),
                              (0, r.jsx)(E.Text, {
                                  variant: "text-sm/normal",
                                  children: en.intl.string(en.t.Nu5Yi0),
                              }),
                          ],
                      }),
                      children: O(),
                  }),
              });
    };
