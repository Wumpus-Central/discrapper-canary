"use strict";
n.d(t, { Ay: () => ed, _g: () => ec, iU: () => eu }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
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
    E = n(397927),
    g = n(824552),
    A = n(308528),
    I = n(832712),
    T = n(933958),
    S = n(869003),
    y = n(58149),
    v = n(537569),
    N = n(224750),
    C = n(875444),
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
    H = n(544028),
    j = n(780964),
    Y = n(594061),
    W = n(617617),
    K = n(904504),
    z = n(801264),
    $ = n(790174),
    q = n(669253),
    Z = n(840065),
    X = n(652215),
    Q = n(406535),
    J = n(985018),
    ee = n(259878),
    et = n(206314),
    en = n(473169);
let er = p.Ay.connectStores([H.A], () => ({ theme: H.A.theme }))(E.ppr);
function ei(e) {
    let { className: t, text: n } = e;
    return (0, r.jsxs)("div", {
        className: a()(ee.GC, t),
        children: [
            (0, r.jsx)(E.mir, { size: "md", color: "currentColor", className: ee.QW }),
            (0, r.jsx)(E.Text, { color: "text-default", variant: "text-sm/medium", children: n }),
        ],
    });
}
let es = (e) => {
        let { disclosure: t } = e;
        return i.useMemo(() => {
            switch (t) {
                case h.mo.IP_LOCATION:
                    return (0, r.jsx)(E.L_e, { size: "md", color: "currentColor", className: ee.PR });
                case h.mo.DISPLAYS_ADVERTISEMENTS:
                    return (0, r.jsx)(E.JD7, { className: ee.PR });
                default:
                    return (0, r.jsx)(E.mir, { className: ee.PR });
            }
        }, [t]);
    },
    ea = (e, t) => {
        let n = J.intl.string(J.t["DT39A+"]),
            i = J.intl.formatToPlainString(J.t.QWGvxA, { applicationName: e.name }),
            s = null;
        return (
            (0, C.A)(e) &&
                ((n = J.intl.formatToPlainString(J.t["paC+US"], { applicationName: e.name })),
                (i = J.intl.formatToPlainString(J.t.inM1Yt, { applicationName: e.name })),
                (s = (0, r.jsx)(z.A, { look: z.k.WARNING, children: J.intl.string(J.t.LY35Zy) }))),
            (0, K.A)(e.id) &&
                (s = (0, r.jsxs)(r.Fragment, {
                    children: [
                        s,
                        (0, r.jsx)(z.A, { children: J.intl.format(J.t.KRnERi, { applicationName: e.name }) }),
                    ],
                })),
            (0, E.qfG)((e) =>
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
                    children: (0, r.jsx)("div", { className: ee.rO, children: s }),
                }),
            )
        );
    },
    eo = (e) => {
        let { application: t, isVisible: n } = e,
            i = () => {
                null != t.terms_of_service_url && (0, G.h)({ href: t.terms_of_service_url, shouldConfirm: !0 });
            },
            s = () => {
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
                                        onClick: s,
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
                application: s,
                selectedChannelId: o,
                selectedGuildId: l,
                onDelete: u,
                disclosures: d,
                locale: f,
                id: h,
            } = e,
            g = s.id,
            T = i.useMemo(() => w.Ay.createFromServer(s), [s]),
            S = (0, R.n)(T, X.gfo.EMBEDDED),
            C = (0, p.bG)([W.A], () => W.A.settings.applications?.appSettings?.[g]?.appDmSettings?.allowMobilePush, [
                g,
            ]),
            x = v.v.useExperiment({ location: "oauth2_authorize" }),
            P = s.bot,
            G = (0, p.bG)([M.A], () => M.A.getDMFromUserId(P?.id)),
            { appDMChannelMuteConfig: B, dmChannelMuted: H } = (0, p.cf)([k.Ay], () =>
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
                                    let i = (0, N.wI)(t);
                                    return null != i
                                        ? (0, r.jsxs)(
                                              "li",
                                              {
                                                  className: ee.EK,
                                                  children: [
                                                      (0, r.jsx)(es, { disclosure: t }),
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
                                            className: a()(ee.vo, ee.k8),
                                            children: J.intl.format(J.t.nZOS8j, { numPermissions: e.length }),
                                        }),
                                ],
                            });
                        },
                    });
            },
            ec = i.useMemo(() => {
                if (null != s.description && "" !== s.description)
                    return (0, r.jsx)(E.Text, {
                        className: et.PT,
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: (0, D.parseBioReact)(s.description),
                    });
            }, [s.description]),
            ed = () => {
                let e = null != s.description && "" !== s.description,
                    t = null != s.terms_of_service_url || null != s.privacy_policy_url;
                return e || t
                    ? (0, r.jsx)(E.Nt8, {
                          className: ee.Nm,
                          isExpanded: z,
                          collapsibleContent: (0, r.jsxs)("div", {
                              className: ee.vo,
                              children: [e && ec, t && (0, r.jsx)(eo, { application: s, isVisible: z })],
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
                let e = U.Ay.getApplicationIconURL({ id: s.id, icon: s.icon }),
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
                                (0, r.jsx)(E.Heading, {
                                    variant: "heading-md/semibold",
                                    className: a()(ee.TK, en.Q5),
                                    children: s.name,
                                }),
                                (0, r.jsx)(E.Text, {
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
                        g in t.appSettings
                            ? null == t.appSettings[g].appDmSettings
                                ? (t.appSettings[g].appDmSettings = m.Po.create({ allowMobilePush: e }))
                                : (t.appSettings[g].appDmSettings.allowMobilePush = e)
                            : (t.appSettings[g] = m._o.create({ appDmSettings: m.Po.create({ allowMobilePush: e }) }));
                    },
                    Y.Sb.INFREQUENT_USER_ACTION,
                ),
                    y.Ay.trackWithMetadata(X.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                        update_type: Q.Y.AUTHORIZED_APP_DM_PUSH_NOTIFICATION,
                        application_id: s.id,
                        label: e ? F.fd.Unmuted : F.fd.Muted,
                    });
            },
            ep = i.useCallback(async () => {
                c()(null != P, "dm channel mute setting requires having a bot user");
                let e = G;
                null == e && (e = await A.A.ensurePrivateChannel(P.id)),
                    H
                        ? I.A.updateAppDMOverrideSettings(null, e, s.id, { muted: !1 }, F.fd.Unmuted)
                        : (0, E.mMO)(async () => {
                              let { default: t } = await n.e("78560").then(n.bind(n, 123939));
                              return (n) => (0, r.jsx)(t, { channelId: e, applicationId: s.id, ...n });
                          });
            }, [G, P, H, s.id]),
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
                                      null != P
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
                                                checked: H,
                                                onChange: ep,
                                            })
                                          : null,
                                      S && x.enabled
                                          ? (0, r.jsx)(E.dOG, {
                                                label: J.intl.string(J.t["Pkw//o"]),
                                                description: J.intl.string(J.t.hw1nKf),
                                                checked: C,
                                                disabled: H,
                                                onChange: ef,
                                            })
                                          : null,
                                  ],
                              }),
                          ],
                      })
                    : null,
            em = (0, K.I)(s.id),
            eE = (0, b.A)(s),
            eg = () =>
                (0, r.jsxs)("div", {
                    className: ee.qr,
                    children: [
                        eE
                            ? (0, r.jsx)(ei, {
                                  className: ee.UW,
                                  text: J.intl.format(J.t.j4B7EW, { applicationName: s.name }),
                              })
                            : em
                              ? (0, r.jsx)(ei, {
                                    className: ee.UW,
                                    text: J.intl.format(J.t.jUhnwb, {
                                        applicationName: s.name,
                                        onConnectionPress: () =>
                                            (0, Z.openUserSettings)(j.X.CONNECTIONS_PANEL, {
                                                section: X.nc_.CONNECTIONS,
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
                                onClick: () => ea(s, u),
                            }),
                        }),
                    ],
                });
        return (0, r.jsx)("div", {
            className: ee.Zy,
            children: (0, r.jsx)(E.Fmo, {
                component: e_(),
                children: (0, r.jsxs)("div", { className: ee.TD, children: [ed(), eu(), eh(), eg()] }),
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
            s = (0, p.bG)([T.Ay], () => T.Ay.getSelfEmbeddedActivities()),
            a = (0, p.bG)([M.A, P.A], () => M.A.getChannel(P.A.getChannelId())),
            o = a?.getGuildId(),
            u = (e) => {
                let { id: t, application: n } = e;
                g.A.delete(t);
                let r = s.get(n.id);
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
                    ? (0, r.jsx)(E.y$y, { className: en.QX, type: E.y$y.Type.SPINNING_CIRCLE })
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
                                              selectedChannelId: a?.id,
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
            g.A.fetch();
        }, []),
        i.useEffect(
            () => () => {
                eu.setState({ searchQuery: "" });
            },
            [],
        ),
        (0, r.jsx)($.A, { title: J.intl.string(J.t["f6kk+r"]), children: (0, r.jsx)(ec, {}) })
    );
