"use strict";
n.d(t, { Ay: () => ed, _g: () => ec, iU: () => eu }), n(321073);
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
    f = n(158954),
    p = n(311907),
    h = n(257474),
    m = n(873298),
    g = n(397927),
    E = n(824552),
    A = n(308528),
    I = n(832712),
    T = n(933958),
    S = n(869003),
    y = n(58149),
    v = n(537569),
    C = n(224750),
    N = n(875444),
    b = n(62447),
    R = n(20015),
    O = n(235986),
    D = n(713804),
    L = n(647053),
    w = n(611010),
    x = n(546183),
    M = n(734057),
    P = n(309010),
    k = n(543465),
    U = n(486020),
    G = n(307600),
    F = n(477427),
    V = n(661191),
    B = n(773669),
    j = n(544028),
    H = n(780964),
    Y = n(594061),
    W = n(617617),
    K = n(904504),
    $ = n(801264),
    z = n(790174),
    q = n(669253),
    Z = n(840065),
    X = n(652215),
    Q = n(406535),
    J = n(985018),
    ee = n(259878),
    et = n(206314),
    en = n(473169);
let er = p.Ay.connectStores([j.A], () => ({ theme: j.A.theme }))(g.ppr);
function ei(e) {
    let { className: t, text: n } = e;
    return (0, r.jsxs)("div", {
        className: s()(ee.GC, t),
        children: [
            (0, r.jsx)(g.mir, { size: "md", color: "currentColor", className: ee.QW }),
            (0, r.jsx)(g.Text, { color: "text-default", variant: "text-sm/medium", children: n }),
        ],
    });
}
let ea = (e) => {
        let { disclosure: t } = e;
        return i.useMemo(() => {
            switch (t) {
                case h.mo.IP_LOCATION:
                    return (0, r.jsx)(g.L_e, { size: "md", color: "currentColor", className: ee.PR });
                case h.mo.DISPLAYS_ADVERTISEMENTS:
                    return (0, r.jsx)(g.JD7, { className: ee.PR });
                default:
                    return (0, r.jsx)(g.mir, { className: ee.PR });
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
                (a = (0, r.jsx)($.A, { look: $.k.WARNING, children: J.intl.string(J.t.LY35Zy) }))),
            (0, K.A)(e.id) &&
                (a = (0, r.jsxs)(r.Fragment, {
                    children: [
                        a,
                        (0, r.jsx)($.A, { children: J.intl.format(J.t.KRnERi, { applicationName: e.name }) }),
                    ],
                })),
            (0, g.qfG)((e) =>
                (0, r.jsx)(f.Modal, {
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
                          ? (0, r.jsxs)(g.MzZ, {
                                onClick: i,
                                tabIndex: n ? 0 : -1,
                                className: ee.Dt,
                                children: [
                                    (0, r.jsx)(g.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-link",
                                        children: J.intl.string(J.t["lx+Gec"]),
                                    }),
                                    (0, r.jsx)(g.I9m, { size: "sm", className: ee.X6, color: "var(--text-link)" }),
                                ],
                            })
                          : null,
                      null != t.privacy_policy_url
                          ? (0, r.jsxs)("div", {
                                className: ee.Fb,
                                children: [
                                    null != t.terms_of_service_url ? (0, r.jsx)("div", { className: ee.yF }) : null,
                                    (0, r.jsxs)(g.MzZ, {
                                        onClick: a,
                                        className: ee.Fb,
                                        tabIndex: n ? 0 : -1,
                                        children: [
                                            (0, r.jsx)(g.Text, {
                                                variant: "text-sm/normal",
                                                color: "text-link",
                                                children: J.intl.string(J.t.okSwq9),
                                            }),
                                            (0, r.jsx)(g.I9m, {
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
                locale: f,
                id: h,
            } = e,
            E = a.id,
            T = i.useMemo(() => w.Ay.createFromServer(a), [a]),
            S = (0, R.n)(T, X.gfo.EMBEDDED),
            N = (0, p.bG)([W.A], () => W.A.settings.applications?.appSettings?.[E]?.appDmSettings?.allowMobilePush, [
                E,
            ]),
            x = v.v.useExperiment({ location: "oauth2_authorize" }),
            P = a.bot,
            G = (0, p.bG)([M.A], () => M.A.getDMFromUserId(P?.id)),
            { appDMChannelMuteConfig: B, dmChannelMuted: j } = (0, p.cf)([k.Ay], () =>
                null == G
                    ? { appDMChannelMuteConfig: null, dmChannelMuted: !1 }
                    : {
                          appDMChannelMuteConfig: k.Ay.getChannelMuteConfig(null, G),
                          dmChannelMuted: k.Ay.isChannelMuted(null, G),
                      },
            ),
            [$, z] = i.useState(!1),
            [er, el] = i.useState(!1),
            eu = () => {
                let e = [];
                for (let n of t)
                    e.push(...(0, L.rY)(n, t)), n === _.F.APPLICATIONS_COMMANDS && e.push(J.intl.string(J.t.Ls2XRq));
                if (e.length > 0 || (null != d && d.length > 0))
                    return (0, r.jsx)(g.Nt8, {
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
                                                (0, r.jsx)(g.Text, { variant: "text-sm/normal", children: e }),
                                            ],
                                        },
                                        t,
                                    ),
                                ),
                                d?.map((t, n) => {
                                    let i = (0, C.wI)(t);
                                    return null != i
                                        ? (0, r.jsxs)(
                                              "li",
                                              {
                                                  className: ee.EK,
                                                  children: [
                                                      (0, r.jsx)(ea, { disclosure: t }),
                                                      (0, r.jsx)(g.Text, { variant: "text-sm/normal", children: i }),
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
                                    (0, r.jsxs)(g.DUT, {
                                        className: ee.gF,
                                        onClick: (e) => {
                                            el(!er), n(e);
                                        },
                                        children: [
                                            (0, r.jsx)(g.Heading, {
                                                variant: "heading-sm/medium",
                                                color: "text-strong",
                                                children: J.intl.string(J.t.xrmhRX),
                                            }),
                                            er
                                                ? (0, r.jsx)(g.abt, {
                                                      size: "md",
                                                      color: g.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                                  })
                                                : (0, r.jsx)(g._BQ, {
                                                      size: "md",
                                                      color: g.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                                  }),
                                        ],
                                    }),
                                    !er &&
                                        (0, r.jsx)(g.Text, {
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
                    return (0, r.jsx)(g.Text, {
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
                    ? (0, r.jsx)(g.Nt8, {
                          className: ee.Nm,
                          isExpanded: $,
                          collapsibleContent: (0, r.jsxs)("div", {
                              className: ee.vo,
                              children: [e && ec, t && (0, r.jsx)(eo, { application: a, isVisible: $ })],
                          }),
                          children: (e) => {
                              let { onClick: t } = e;
                              return (0, r.jsxs)(g.DUT, {
                                  className: ee.gF,
                                  onClick: (e) => {
                                      z(!$), t(e);
                                  },
                                  children: [
                                      (0, r.jsx)(g.Heading, {
                                          variant: "heading-sm/medium",
                                          color: "text-strong",
                                          children: J.intl.string(J.t.fcYgiY),
                                      }),
                                      $
                                          ? (0, r.jsx)(g.abt, {
                                                size: "md",
                                                color: g.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                            })
                                          : (0, r.jsx)(g._BQ, {
                                                size: "md",
                                                color: g.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
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
                    n = new Date(V.default.extractTimestamp(h)).toLocaleDateString(f);
                return (0, r.jsxs)("div", {
                    className: ee.ie,
                    children: [
                        t,
                        (0, r.jsxs)("div", {
                            className: ee.gC,
                            children: [
                                (0, r.jsx)(g.Heading, {
                                    variant: "heading-md/semibold",
                                    className: s()(ee.TK, en.Q5),
                                    children: a.name,
                                }),
                                (0, r.jsx)(g.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: J.intl.format(J.t.yOApCK, { date: n }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(q.A, { appRecord: T, selectedGuildId: l, selectedChannelId: o }),
                    ],
                });
            },
            ef = (e) => {
                Y.wc.updateAsync(
                    "applications",
                    (t) => {
                        E in t.appSettings
                            ? null == t.appSettings[E].appDmSettings
                                ? (t.appSettings[E].appDmSettings = m.Po.create({ allowMobilePush: e }))
                                : (t.appSettings[E].appDmSettings.allowMobilePush = e)
                            : (t.appSettings[E] = m._o.create({ appDmSettings: m.Po.create({ allowMobilePush: e }) }));
                    },
                    Y.Sb.INFREQUENT_USER_ACTION,
                ),
                    y.Ay.trackWithMetadata(X.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                        update_type: Q.Y.AUTHORIZED_APP_DM_PUSH_NOTIFICATION,
                        application_id: a.id,
                        label: e ? F.fd.Unmuted : F.fd.Muted,
                    });
            },
            ep = i.useCallback(async () => {
                c()(null != P, "dm channel mute setting requires having a bot user");
                let e = G;
                null == e && (e = await A.A.ensurePrivateChannel(P.id)),
                    j
                        ? I.A.updateAppDMOverrideSettings(null, e, a.id, { muted: !1 }, F.fd.Unmuted)
                        : (0, g.mMO)(async () => {
                              let { default: t } = await n.e("78560").then(n.bind(n, 123939));
                              return (n) => (0, r.jsx)(t, { channelId: e, applicationId: a.id, ...n });
                          });
            }, [G, P, j, a.id]),
            eh = () =>
                x.enabled
                    ? (0, r.jsxs)("div", {
                          className: ee.LS,
                          children: [
                              (0, r.jsx)(g.Heading, {
                                  variant: "heading-sm/medium",
                                  color: "text-strong",
                                  className: ee.WZ,
                                  children: J.intl.string(J.t.NaZyYC),
                              }),
                              (0, r.jsxs)(g.BJc, {
                                  gap: 20,
                                  children: [
                                      null != P
                                          ? (0, r.jsx)(g.dOG, {
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
                                          ? (0, r.jsx)(g.dOG, {
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
            eg = (0, b.A)(a),
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
                                                section: X.nc_.CONNECTIONS,
                                            }),
                                    }),
                                })
                              : null,
                        (0, r.jsx)("div", {
                            className: ee.hU,
                            children: (0, r.jsx)(g.Button, {
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
            children: (0, r.jsx)(g.Fmo, {
                component: e_(),
                children: (0, r.jsxs)("div", { className: ee.TD, children: [ed(), eu(), eh(), eE()] }),
            }),
        });
    },
    eu = (0, d.v)(() => ({ searchQuery: "" })),
    ec = () => {
        let { fetchState: e, appAuthTokens: t } = (0, p.cf)([x.default], () => ({
                fetchState: x.default.getFetchState(),
                appAuthTokens: x.default.getNewestTokensForNonChildrenApplications(),
            })),
            n = (0, p.bG)([B.default], () => B.default.locale),
            a = (0, p.bG)([T.Ay], () => T.Ay.getSelfEmbeddedActivities()),
            s = (0, p.bG)([M.A, P.A], () => M.A.getChannel(P.A.getChannelId())),
            o = s?.getGuildId(),
            u = (e) => {
                let { id: t, application: n } = e;
                E.A.delete(t);
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
            h = () =>
                (0, r.jsx)("div", {
                    className: ee.MT,
                    children: (0, r.jsx)(g.IWV, {
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
                    children: (0, r.jsx)(g.SGT, { note: e, children: t }),
                }),
            A = i.useMemo(() => {
                let e = c.trim().toLowerCase();
                return "" === e || null == t
                    ? t
                    : t.length < 100
                      ? t.filter((t) => l()(e, t.application.name.toLowerCase()))
                      : t.filter((t) => t.application.name.toLowerCase().includes(e));
            }, [t, c]),
            I = () =>
                null == t || null == A || e !== x.FetchState.FETCHED
                    ? (0, r.jsx)(g.y$y, { className: en.QX, type: g.y$y.Type.SPINNING_CIRCLE })
                    : 0 === t.length
                      ? m(J.intl.string(J.t.CpPv5l), J.intl.string(J.t["E+SM6T"]))
                      : 0 === A.length
                        ? (0, r.jsxs)(r.Fragment, { children: [h(), m(null, J.intl.string(J.t.EVWFNr))] })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  h(),
                                  A.sort((e, t) => Number(t.id) - Number(e.id)).map((e) =>
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
        return (0, r.jsx)(g.Fmo, {
            component: (0, r.jsxs)(g.ZpM, {
                type: g.ZpM.Types.PRIMARY,
                className: ee.Rd,
                children: [
                    (0, r.jsx)(g.Heading, { variant: "heading-md/medium", children: J.intl.string(J.t.HU3RFw) }),
                    (0, r.jsx)(g.Text, { variant: "text-sm/normal", children: J.intl.string(J.t.Nu5Yi0) }),
                ],
            }),
            children: I(),
        });
    },
    ed = () => (
        i.useEffect(() => {
            E.A.fetch();
        }, []),
        i.useEffect(
            () => () => {
                eu.setState({ searchQuery: "" });
            },
            [],
        ),
        (0, r.jsx)(z.A, { title: J.intl.string(J.t["f6kk+r"]), children: (0, r.jsx)(ec, {}) })
    );
