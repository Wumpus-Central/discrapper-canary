"use strict";
n.d(t, { Ay: () => ed, _g: () => ec, iU: () => eu }), n(938796), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(91871),
    l = n.n(o),
    u = n(284009),
    c = n.n(u),
    d = n(353640),
    _ = n(179771),
    f = n(665260),
    p = n(158954),
    h = n(311907),
    m = n(257474),
    g = n(873298),
    E = n(397927),
    A = n(824552),
    I = n(308528),
    T = n(832712),
    y = n(933958),
    S = n(869003),
    v = n(58149),
    C = n(537569),
    b = n(224750),
    N = n(875444),
    R = n(62447),
    O = n(235986),
    D = n(713804),
    L = n(647053),
    w = n(611010),
    x = n(546183),
    P = n(734057),
    M = n(309010),
    k = n(543465),
    U = n(486020),
    G = n(307600),
    V = n(477427),
    F = n(661191),
    B = n(773669),
    j = n(544028),
    H = n(780964),
    Y = n(594061),
    W = n(617617),
    K = n(904504),
    z = n(801264),
    $ = n(790174),
    q = n(669253),
    Z = n(840065),
    Q = n(652215),
    X = n(406535),
    J = n(985018),
    ee = n(259878),
    et = n(206314),
    en = n(473169);
let er = h.Ay.connectStores([j.A], () => ({ theme: j.A.theme }))(E.ppr);
function ei(e) {
    let { className: t, text: n } = e;
    return (0, r.jsxs)("div", {
        className: s()(ee.GC, t),
        children: [
            (0, r.jsx)(E.mir, { size: "md", color: "currentColor", className: ee.QW }),
            (0, r.jsx)(E.Text, { color: "text-default", variant: "text-sm/medium", children: n }),
        ],
    });
}
let ea = (e) => {
        let { disclosure: t } = e;
        return i.useMemo(() => {
            switch (t) {
                case m.mo.IP_LOCATION:
                    return (0, r.jsx)(E.L_e, { size: "md", color: "currentColor", className: ee.PR });
                case m.mo.DISPLAYS_ADVERTISEMENTS:
                    return (0, r.jsx)(E.JD7, { className: ee.PR });
                default:
                    return (0, r.jsx)(E.mir, { className: ee.PR });
            }
        }, [t]);
    },
    es = (e, t) => {
        let n = J.intl.string(J.t["DT39A+"]),
            i = J.intl.formatToPlainString(J.t.QWGvxA, { applicationName: e.name }),
            a = null;
        return (
            (0, N.A)(e) &&
                ((n = J.intl.formatToPlainString(J.t["paC+US"], { applicationName: e.name })),
                (i = J.intl.formatToPlainString(J.t.inM1Yt, { applicationName: e.name })),
                (a = (0, r.jsx)(z.A, { look: z.k.WARNING, children: J.intl.string(J.t.LY35Zy) }))),
            (0, K.A)(e.id) &&
                (a = (0, r.jsxs)(r.Fragment, {
                    children: [
                        a,
                        (0, r.jsx)(z.A, { children: J.intl.format(J.t.KRnERi, { applicationName: e.name }) }),
                    ],
                })),
            (0, E.qfG)((e) =>
                (0, r.jsx)(p.Modal, {
                    title: n,
                    subtitle: i,
                    actions: [
                        { text: J.intl.string(J.t["ETE/oC"]), onClick: e.onClose, variant: "secondary" },
                        {
                            text: J.intl.string(J.t.xUqheM),
                            onClick: () => {
                                t(), e.onClose();
                            },
                            variant: "critical-primary",
                        },
                    ],
                    ...e,
                    children: (0, r.jsx)("div", { className: ee.rO, children: a }),
                }),
            )
        );
    },
    eo = (e) => {
        let { application: t, isVisible: n } = e,
            i = () => {
                null != t.terms_of_service_url && (0, G.h)({ href: t.terms_of_service_url, shouldConfirm: !0 });
            },
            a = () => {
                null != t.privacy_policy_url && (0, G.h)({ href: t.privacy_policy_url, shouldConfirm: !0 });
            };
        return null != t.terms_of_service_url || null != t.privacy_policy_url
            ? (0, r.jsxs)("div", {
                  className: ee.vi,
                  children: [
                      null != t.terms_of_service_url
                          ? (0, r.jsxs)(E.MzZ, {
                                onClick: i,
                                tabIndex: n ? 0 : -1,
                                className: ee.Dt,
                                children: [
                                    (0, r.jsx)(E.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-link",
                                        children: J.intl.string(J.t["lx+Gec"]),
                                    }),
                                    (0, r.jsx)(E.I9m, { size: "sm", className: ee.X6, color: "var(--text-link)" }),
                                ],
                            })
                          : null,
                      null != t.privacy_policy_url
                          ? (0, r.jsxs)("div", {
                                className: ee.Fb,
                                children: [
                                    null != t.terms_of_service_url ? (0, r.jsx)("div", { className: ee.yF }) : null,
                                    (0, r.jsxs)(E.MzZ, {
                                        onClick: a,
                                        className: ee.Fb,
                                        tabIndex: n ? 0 : -1,
                                        children: [
                                            (0, r.jsx)(E.Text, {
                                                variant: "text-sm/normal",
                                                color: "text-link",
                                                children: J.intl.string(J.t.okSwq9),
                                            }),
                                            (0, r.jsx)(E.I9m, {
                                                size: "sm",
                                                className: ee.X6,
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
    el = (e) => {
        let {
                scopes: t,
                application: a,
                selectedChannelId: o,
                selectedGuildId: l,
                onDelete: u,
                disclosures: d,
                locale: p,
                id: m,
            } = e,
            A = a.id,
            y = i.useMemo(() => w.Ay.createFromServer(a), [a]),
            S = (0, f.Lt)(y.flags, Q.gfo.EMBEDDED),
            N = (0, h.bG)([W.A], () => W.A.settings.applications?.appSettings?.[A]?.appDmSettings?.allowMobilePush, [
                A,
            ]),
            x = C.v.useExperiment({ location: "oauth2_authorize" }),
            M = a.bot,
            G = (0, h.bG)([P.A], () => P.A.getDMFromUserId(M?.id)),
            { appDMChannelMuteConfig: B, dmChannelMuted: j } = (0, h.cf)([k.Ay], () =>
                null == G
                    ? { appDMChannelMuteConfig: null, dmChannelMuted: !1 }
                    : {
                          appDMChannelMuteConfig: k.Ay.getChannelMuteConfig(null, G),
                          dmChannelMuted: k.Ay.isChannelMuted(null, G),
                      },
            ),
            [z, $] = i.useState(!1),
            [er, el] = i.useState(!1),
            eu = () => {
                let e = [];
                for (let n of t)
                    e.push(...(0, L.rY)(n, t)), n === _.F.APPLICATIONS_COMMANDS && e.push(J.intl.string(J.t.Ls2XRq));
                if (e.length > 0 || (null != d && d.length > 0))
                    return (0, r.jsx)(E.Nt8, {
                        className: ee.Nm,
                        isExpanded: er,
                        collapsibleContent: (0, r.jsxs)("ul", {
                            className: ee.vo,
                            children: [
                                e.map((e, t) =>
                                    (0, r.jsxs)(
                                        "li",
                                        {
                                            className: ee.EK,
                                            children: [
                                                (0, r.jsx)("i", { className: ee.dv }),
                                                (0, r.jsx)(E.Text, { variant: "text-sm/normal", children: e }),
                                            ],
                                        },
                                        t,
                                    ),
                                ),
                                d?.map((t, n) => {
                                    let i = (0, b.wI)(t);
                                    return null != i
                                        ? (0, r.jsxs)(
                                              "li",
                                              {
                                                  className: ee.EK,
                                                  children: [
                                                      (0, r.jsx)(ea, { disclosure: t }),
                                                      (0, r.jsx)(E.Text, { variant: "text-sm/normal", children: i }),
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
                                    (0, r.jsxs)(E.DUT, {
                                        className: ee.gF,
                                        onClick: (e) => {
                                            el(!er), n(e);
                                        },
                                        children: [
                                            (0, r.jsx)(E.Heading, {
                                                variant: "heading-sm/medium",
                                                color: "text-strong",
                                                children: J.intl.string(J.t.xrmhRX),
                                            }),
                                            er
                                                ? (0, r.jsx)(E.abt, {
                                                      size: "md",
                                                      color: E.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                                  })
                                                : (0, r.jsx)(E._BQ, {
                                                      size: "md",
                                                      color: E.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                                  }),
                                        ],
                                    }),
                                    !er &&
                                        (0, r.jsx)(E.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: s()(ee.vo, ee.k8),
                                            children: J.intl.format(J.t.nZOS8j, { numPermissions: e.length }),
                                        }),
                                ],
                            });
                        },
                    });
            },
            ec = i.useMemo(() => {
                if (null != a.description && "" !== a.description)
                    return (0, r.jsx)(E.Text, {
                        className: et.PT,
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: (0, D.parseBioReact)(a.description),
                    });
            }, [a.description]),
            ed = () => {
                let e = null != a.description && "" !== a.description,
                    t = null != a.terms_of_service_url || null != a.privacy_policy_url;
                return e || t
                    ? (0, r.jsx)(E.Nt8, {
                          className: ee.Nm,
                          isExpanded: z,
                          collapsibleContent: (0, r.jsxs)("div", {
                              className: ee.vo,
                              children: [e && ec, t && (0, r.jsx)(eo, { application: a, isVisible: z })],
                          }),
                          children: (e) => {
                              let { onClick: t } = e;
                              return (0, r.jsxs)(E.DUT, {
                                  className: ee.gF,
                                  onClick: (e) => {
                                      $(!z), t(e);
                                  },
                                  children: [
                                      (0, r.jsx)(E.Heading, {
                                          variant: "heading-sm/medium",
                                          color: "text-strong",
                                          children: J.intl.string(J.t.fcYgiY),
                                      }),
                                      z
                                          ? (0, r.jsx)(E.abt, {
                                                size: "md",
                                                color: E.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                            })
                                          : (0, r.jsx)(E._BQ, {
                                                size: "md",
                                                color: E.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                            }),
                                  ],
                              });
                          },
                      })
                    : null;
            },
            e_ = () => {
                let e = U.Ay.getApplicationIconURL({ id: a.id, icon: a.icon }),
                    t =
                        null != e
                            ? (0, r.jsx)(O.A.Child, {
                                  className: ee.zN,
                                  grow: 0,
                                  children: (0, r.jsx)("img", { src: e, alt: "" }),
                              })
                            : null,
                    n = new Date(F.default.extractTimestamp(m)).toLocaleDateString(p);
                return (0, r.jsxs)("div", {
                    className: ee.ie,
                    children: [
                        t,
                        (0, r.jsxs)("div", {
                            className: ee.gC,
                            children: [
                                (0, r.jsx)(E.Heading, {
                                    variant: "heading-md/semibold",
                                    className: s()(ee.TK, en.Q5),
                                    children: a.name,
                                }),
                                (0, r.jsx)(E.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: J.intl.format(J.t.yOApCK, { date: n }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(q.A, { appRecord: y, selectedGuildId: l, selectedChannelId: o }),
                    ],
                });
            },
            ef = (e) => {
                Y.wc.updateAsync(
                    "applications",
                    (t) => {
                        A in t.appSettings
                            ? null == t.appSettings[A].appDmSettings
                                ? (t.appSettings[A].appDmSettings = g.Po.create({ allowMobilePush: e }))
                                : (t.appSettings[A].appDmSettings.allowMobilePush = e)
                            : (t.appSettings[A] = g._o.create({ appDmSettings: g.Po.create({ allowMobilePush: e }) }));
                    },
                    Y.Sb.INFREQUENT_USER_ACTION,
                ),
                    v.Ay.trackWithMetadata(Q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                        update_type: X.Y.AUTHORIZED_APP_DM_PUSH_NOTIFICATION,
                        application_id: a.id,
                        label: e ? V.fd.Unmuted : V.fd.Muted,
                    });
            },
            ep = i.useCallback(async () => {
                c()(null != M, "dm channel mute setting requires having a bot user");
                let e = G;
                null == e && (e = await I.A.ensurePrivateChannel(M.id)),
                    j
                        ? T.A.updateAppDMOverrideSettings(null, e, a.id, { muted: !1 }, V.fd.Unmuted)
                        : (0, E.mMO)(async () => {
                              let { default: t } = await n.e("78560").then(n.bind(n, 123939));
                              return (n) => (0, r.jsx)(t, { channelId: e, applicationId: a.id, ...n });
                          });
            }, [G, M, j, a.id]),
            eh = () =>
                x.enabled
                    ? (0, r.jsxs)("div", {
                          className: ee.LS,
                          children: [
                              (0, r.jsx)(E.Heading, {
                                  variant: "heading-sm/medium",
                                  color: "text-strong",
                                  className: ee.WZ,
                                  children: J.intl.string(J.t.NaZyYC),
                              }),
                              (0, r.jsxs)(E.BJc, {
                                  gap: 20,
                                  children: [
                                      null != M
                                          ? (0, r.jsx)(E.dOG, {
                                                label: J.intl.string(J.t.NkwaBs),
                                                description:
                                                    B?.end_time != null
                                                        ? J.intl.format(J.t.j7h4AJ, {
                                                              endTime: new Date(B.end_time).toLocaleString(
                                                                  J.intl.currentLocale,
                                                                  {
                                                                      month: "numeric",
                                                                      day: "numeric",
                                                                      hour: "numeric",
                                                                      minute: "2-digit",
                                                                  },
                                                              ),
                                                          })
                                                        : void 0,
                                                checked: j,
                                                onChange: ep,
                                            })
                                          : null,
                                      S && x.enabled
                                          ? (0, r.jsx)(E.dOG, {
                                                label: J.intl.string(J.t["Pkw//o"]),
                                                description: J.intl.string(J.t.hw1nKf),
                                                checked: N,
                                                disabled: j,
                                                onChange: ef,
                                            })
                                          : null,
                                  ],
                              }),
                          ],
                      })
                    : null,
            em = (0, K.I)(a.id),
            eg = (0, R.A)(a),
            eE = () =>
                (0, r.jsxs)("div", {
                    className: ee.qr,
                    children: [
                        eg
                            ? (0, r.jsx)(ei, {
                                  className: ee.UW,
                                  text: J.intl.format(J.t.j4B7EW, { applicationName: a.name }),
                              })
                            : em
                              ? (0, r.jsx)(ei, {
                                    className: ee.UW,
                                    text: J.intl.format(J.t.jUhnwb, {
                                        applicationName: a.name,
                                        onConnectionPress: () =>
                                            (0, Z.openUserSettings)(H.X.CONNECTIONS_PANEL, {
                                                section: Q.nc_.CONNECTIONS,
                                            }),
                                    }),
                                })
                              : null,
                        (0, r.jsx)("div", {
                            className: ee.hU,
                            children: (0, r.jsx)(E.Button, {
                                variant: "critical-secondary",
                                size: "sm",
                                text: J.intl.string(J.t.xUqheM),
                                onClick: () => es(a, u),
                            }),
                        }),
                    ],
                });
        return (0, r.jsx)("div", {
            className: ee.Zy,
            children: (0, r.jsx)(E.Fmo, {
                component: e_(),
                children: (0, r.jsxs)("div", { className: ee.TD, children: [ed(), eu(), eh(), eE()] }),
            }),
        });
    },
    eu = (0, d.v)(() => ({ searchQuery: "" })),
    ec = () => {
        let { fetchState: e, appAuthTokens: t } = (0, h.cf)([x.default], () => ({
                fetchState: x.default.getFetchState(),
                appAuthTokens: x.default.getNewestTokensForNonChildrenApplications(),
            })),
            n = (0, h.bG)([B.default], () => B.default.locale),
            a = (0, h.bG)([y.Ay], () => y.Ay.getSelfEmbeddedActivities()),
            s = (0, h.bG)([P.A, M.A], () => P.A.getChannel(M.A.getChannelId())),
            o = s?.getGuildId(),
            u = (e) => {
                let { id: t, application: n } = e;
                A.A.delete(t);
                let r = a.get(n.id);
                null != r && S.A.leaveActivity({ location: r.location, applicationId: n.id, showFeedback: !1 });
            },
            c = eu((e) => e.searchQuery),
            d = (e) => eu.setState({ searchQuery: e }),
            _ = (e) => {
                d(e);
            },
            f = () => {
                d("");
            },
            p = () =>
                (0, r.jsx)("div", {
                    className: ee.MT,
                    children: (0, r.jsx)(E.IWV, {
                        query: c,
                        onChange: _,
                        onClear: f,
                        placeholder: J.intl.string(J.t["5prvKe"]),
                        "aria-label": J.intl.string(J.t["5prvKe"]),
                    }),
                }),
            m = (e, t) =>
                (0, r.jsx)(er, {
                    className: ee.__invalid_marginTop20,
                    children: (0, r.jsx)(E.SGT, { note: e, children: t }),
                }),
            g = i.useMemo(() => {
                let e = c.trim().toLowerCase();
                return "" === e || null == t
                    ? t
                    : t.length < 100
                      ? t.filter((t) => l()(e, t.application.name.toLowerCase()))
                      : t.filter((t) => t.application.name.toLowerCase().includes(e));
            }, [t, c]),
            I = () =>
                null == t || null == g || e !== x.FetchState.FETCHED
                    ? (0, r.jsx)(E.y$y, { className: en.QX, type: E.y$y.Type.SPINNING_CIRCLE })
                    : 0 === t.length
                      ? m(J.intl.string(J.t.CpPv5l), J.intl.string(J.t["E+SM6T"]))
                      : 0 === g.length
                        ? (0, r.jsxs)(r.Fragment, { children: [p(), m(null, J.intl.string(J.t.EVWFNr))] })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  p(),
                                  g
                                      .sort((e, t) => Number(t.id) - Number(e.id))
                                      .map((e) =>
                                          (0, r.jsx)(
                                              el,
                                              {
                                                  locale: n,
                                                  onDelete: () => u(e),
                                                  selectedChannelId: s?.id,
                                                  selectedGuildId: o ?? void 0,
                                                  ...e,
                                              },
                                              e.id,
                                          ),
                                      ),
                              ],
                          });
        return (0, r.jsx)(E.Fmo, {
            component: (0, r.jsxs)(E.ZpM, {
                type: E.ZpM.Types.PRIMARY,
                className: ee.Rd,
                children: [
                    (0, r.jsx)(E.Heading, { variant: "heading-md/medium", children: J.intl.string(J.t.HU3RFw) }),
                    (0, r.jsx)(E.Text, { variant: "text-sm/normal", children: J.intl.string(J.t.Nu5Yi0) }),
                ],
            }),
            children: I(),
        });
    },
    ed = () => (
        i.useEffect(() => {
            A.A.fetch();
        }, []),
        i.useEffect(
            () => () => {
                eu.setState({ searchQuery: "" });
            },
            [],
        ),
        (0, r.jsx)($.A, { title: J.intl.string(J.t["f6kk+r"]), children: (0, r.jsx)(ec, {}) })
    );
