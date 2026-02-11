"use strict";
n.d(t, { Ay: () => e_, _g: () => ed, iU: () => ec }), n(321073);
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
    h = n(311907),
    p = n(257474),
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
    O = n(20015),
    D = n(235986),
    L = n(713804),
    w = n(647053),
    x = n(611010),
    P = n(546183),
    M = n(734057),
    k = n(309010),
    U = n(543465),
    G = n(486020),
    F = n(307600),
    V = n(477427),
    B = n(661191),
    j = n(773669),
    H = n(544028),
    Y = n(780964),
    W = n(594061),
    K = n(617617),
    $ = n(904504),
    z = n(801264),
    q = n(790174),
    X = n(669253),
    Z = n(840065),
    Q = n(652215),
    J = n(406535),
    ee = n(985018),
    et = n(259878),
    en = n(206314),
    er = n(473169);
let ei = h.Ay.connectStores([H.A], () => ({ theme: H.A.theme }))(E.ppr);
function ea(e) {
    let { className: t, text: n } = e;
    return (0, r.jsxs)("div", {
        className: s()(et.GC, t),
        children: [
            (0, r.jsx)(E.mir, { size: "md", color: "currentColor", className: et.QW }),
            (0, r.jsx)(E.Text, { color: "text-default", variant: "text-sm/medium", children: n }),
        ],
    });
}
let es = (e) => {
        let { disclosure: t } = e;
        return i.useMemo(() => {
            switch (t) {
                case p.mo.IP_LOCATION:
                    return (0, r.jsx)(E.L_e, { size: "md", color: "currentColor", className: et.PR });
                case p.mo.DISPLAYS_ADVERTISEMENTS:
                    return (0, r.jsx)(E.JD7, { className: et.PR });
                default:
                    return (0, r.jsx)(E.mir, { className: et.PR });
            }
        }, [t]);
    },
    eo = (e, t) => {
        let n = ee.intl.string(ee.t["DT39A+"]),
            i = ee.intl.formatToPlainString(ee.t.QWGvxA, { applicationName: e.name }),
            a = null;
        return (
            (0, N.A)(e) &&
                ((n = ee.intl.formatToPlainString(ee.t["paC+US"], { applicationName: e.name })),
                (i = ee.intl.formatToPlainString(ee.t.inM1Yt, { applicationName: e.name })),
                (a = (0, r.jsx)(z.A, { look: z.k.WARNING, children: ee.intl.string(ee.t.LY35Zy) }))),
            (0, $.A)(e.id) &&
                (a = (0, r.jsxs)(r.Fragment, {
                    children: [
                        a,
                        (0, r.jsx)(z.A, { children: ee.intl.format(ee.t.KRnERi, { applicationName: e.name }) }),
                    ],
                })),
            (0, E.qfG)((e) =>
                (0, r.jsx)(f.Modal, {
                    title: n,
                    subtitle: i,
                    actions: [
                        { text: ee.intl.string(ee.t["ETE/oC"]), onClick: e.onClose, variant: "secondary" },
                        {
                            text: ee.intl.string(ee.t.xUqheM),
                            onClick: () => {
                                t(), e.onClose();
                            },
                            variant: "critical-primary",
                        },
                    ],
                    ...e,
                    children: (0, r.jsx)("div", { className: et.rO, children: a }),
                }),
            )
        );
    },
    el = (e) => {
        let { application: t, isVisible: n } = e,
            i = () => {
                null != t.terms_of_service_url && (0, F.h)({ href: t.terms_of_service_url, shouldConfirm: !0 });
            },
            a = () => {
                null != t.privacy_policy_url && (0, F.h)({ href: t.privacy_policy_url, shouldConfirm: !0 });
            };
        return null != t.terms_of_service_url || null != t.privacy_policy_url
            ? (0, r.jsxs)("div", {
                  className: et.vi,
                  children: [
                      null != t.terms_of_service_url
                          ? (0, r.jsxs)(E.MzZ, {
                                onClick: i,
                                tabIndex: n ? 0 : -1,
                                className: et.Dt,
                                children: [
                                    (0, r.jsx)(E.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-link",
                                        children: ee.intl.string(ee.t["lx+Gec"]),
                                    }),
                                    (0, r.jsx)(E.I9m, { size: "sm", className: et.X6, color: "var(--text-link)" }),
                                ],
                            })
                          : null,
                      null != t.privacy_policy_url
                          ? (0, r.jsxs)("div", {
                                className: et.Fb,
                                children: [
                                    null != t.terms_of_service_url ? (0, r.jsx)("div", { className: et.yF }) : null,
                                    (0, r.jsxs)(E.MzZ, {
                                        onClick: a,
                                        className: et.Fb,
                                        tabIndex: n ? 0 : -1,
                                        children: [
                                            (0, r.jsx)(E.Text, {
                                                variant: "text-sm/normal",
                                                color: "text-link",
                                                children: ee.intl.string(ee.t.okSwq9),
                                            }),
                                            (0, r.jsx)(E.I9m, {
                                                size: "sm",
                                                className: et.X6,
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
    eu = (e) => {
        let {
                scopes: t,
                application: a,
                selectedChannelId: o,
                selectedGuildId: l,
                onDelete: u,
                disclosures: d,
                locale: f,
                id: p,
            } = e,
            A = a.id,
            y = i.useMemo(() => x.Ay.createFromServer(a), [a]),
            S = (0, O.n)(y, Q.gfo.EMBEDDED),
            N = (0, h.bG)([K.A], () => K.A.settings.applications?.appSettings?.[A]?.appDmSettings?.allowMobilePush, [
                A,
            ]),
            P = C.v.useExperiment({ location: "oauth2_authorize" }),
            k = a.bot,
            F = (0, h.bG)([M.A], () => M.A.getDMFromUserId(k?.id)),
            { appDMChannelMuteConfig: j, dmChannelMuted: H } = (0, h.cf)([U.Ay], () =>
                null == F
                    ? { appDMChannelMuteConfig: null, dmChannelMuted: !1 }
                    : {
                          appDMChannelMuteConfig: U.Ay.getChannelMuteConfig(null, F),
                          dmChannelMuted: U.Ay.isChannelMuted(null, F),
                      },
            ),
            [z, q] = i.useState(!1),
            [ei, eu] = i.useState(!1),
            ec = () => {
                let e = [];
                for (let n of t)
                    e.push(...(0, w.rY)(n, t)), n === _.F.APPLICATIONS_COMMANDS && e.push(ee.intl.string(ee.t.Ls2XRq));
                if (e.length > 0 || (null != d && d.length > 0))
                    return (0, r.jsx)(E.Nt8, {
                        className: et.Nm,
                        isExpanded: ei,
                        collapsibleContent: (0, r.jsxs)("ul", {
                            className: et.vo,
                            children: [
                                e.map((e, t) =>
                                    (0, r.jsxs)(
                                        "li",
                                        {
                                            className: et.EK,
                                            children: [
                                                (0, r.jsx)("i", { className: et.dv }),
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
                                                  className: et.EK,
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
                                        className: et.gF,
                                        onClick: (e) => {
                                            eu(!ei), n(e);
                                        },
                                        children: [
                                            (0, r.jsx)(E.Heading, {
                                                variant: "heading-sm/medium",
                                                color: "text-strong",
                                                children: ee.intl.string(ee.t.xrmhRX),
                                            }),
                                            ei
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
                                    !ei &&
                                        (0, r.jsx)(E.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: s()(et.vo, et.k8),
                                            children: ee.intl.format(ee.t.nZOS8j, { numPermissions: e.length }),
                                        }),
                                ],
                            });
                        },
                    });
            },
            ed = i.useMemo(() => {
                if (null != a.description && "" !== a.description)
                    return (0, r.jsx)(E.Text, {
                        className: en.PT,
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: (0, L.parseBioReact)(a.description),
                    });
            }, [a.description]),
            e_ = () => {
                let e = null != a.description && "" !== a.description,
                    t = null != a.terms_of_service_url || null != a.privacy_policy_url;
                return e || t
                    ? (0, r.jsx)(E.Nt8, {
                          className: et.Nm,
                          isExpanded: z,
                          collapsibleContent: (0, r.jsxs)("div", {
                              className: et.vo,
                              children: [e && ed, t && (0, r.jsx)(el, { application: a, isVisible: z })],
                          }),
                          children: (e) => {
                              let { onClick: t } = e;
                              return (0, r.jsxs)(E.DUT, {
                                  className: et.gF,
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
            ef = () => {
                let e = G.Ay.getApplicationIconURL({ id: a.id, icon: a.icon }),
                    t =
                        null != e
                            ? (0, r.jsx)(D.A.Child, {
                                  className: et.zN,
                                  grow: 0,
                                  children: (0, r.jsx)("img", { src: e, alt: "" }),
                              })
                            : null,
                    n = new Date(B.default.extractTimestamp(p)).toLocaleDateString(f);
                return (0, r.jsxs)("div", {
                    className: et.ie,
                    children: [
                        t,
                        (0, r.jsxs)("div", {
                            className: et.gC,
                            children: [
                                (0, r.jsx)(E.Heading, {
                                    variant: "heading-md/semibold",
                                    className: s()(et.TK, er.Q5),
                                    children: a.name,
                                }),
                                (0, r.jsx)(E.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: ee.intl.format(ee.t.yOApCK, { date: n }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(X.A, { appRecord: y, selectedGuildId: l, selectedChannelId: o }),
                    ],
                });
            },
            eh = (e) => {
                W.wc.updateAsync(
                    "applications",
                    (t) => {
                        A in t.appSettings
                            ? null == t.appSettings[A].appDmSettings
                                ? (t.appSettings[A].appDmSettings = g.Po.create({ allowMobilePush: e }))
                                : (t.appSettings[A].appDmSettings.allowMobilePush = e)
                            : (t.appSettings[A] = g._o.create({ appDmSettings: g.Po.create({ allowMobilePush: e }) }));
                    },
                    W.Sb.INFREQUENT_USER_ACTION,
                ),
                    v.Ay.trackWithMetadata(Q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                        update_type: J.Y.AUTHORIZED_APP_DM_PUSH_NOTIFICATION,
                        application_id: a.id,
                        label: e ? V.fd.Unmuted : V.fd.Muted,
                    });
            },
            ep = i.useCallback(async () => {
                c()(null != k, "dm channel mute setting requires having a bot user");
                let e = F;
                null == e && (e = await I.A.ensurePrivateChannel(k.id)),
                    H
                        ? T.A.updateAppDMOverrideSettings(null, e, a.id, { muted: !1 }, V.fd.Unmuted)
                        : (0, E.mMO)(async () => {
                              let { default: t } = await n.e("78560").then(n.bind(n, 123939));
                              return (n) => (0, r.jsx)(t, { channelId: e, applicationId: a.id, ...n });
                          });
            }, [F, k, H, a.id]),
            em = () =>
                P.enabled
                    ? (0, r.jsxs)("div", {
                          className: et.LS,
                          children: [
                              (0, r.jsx)(E.Heading, {
                                  variant: "heading-sm/medium",
                                  color: "text-strong",
                                  className: et.WZ,
                                  children: ee.intl.string(ee.t.NaZyYC),
                              }),
                              (0, r.jsxs)(E.BJc, {
                                  gap: 20,
                                  children: [
                                      null != k
                                          ? (0, r.jsx)(E.dOG, {
                                                label: ee.intl.string(ee.t.NkwaBs),
                                                description:
                                                    j?.end_time != null
                                                        ? ee.intl.format(ee.t.j7h4AJ, {
                                                              endTime: new Date(j.end_time).toLocaleString(
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
                                                checked: H,
                                                onChange: ep,
                                            })
                                          : null,
                                      S && P.enabled
                                          ? (0, r.jsx)(E.dOG, {
                                                label: ee.intl.string(ee.t["Pkw//o"]),
                                                description: ee.intl.string(ee.t.hw1nKf),
                                                checked: N,
                                                disabled: H,
                                                onChange: eh,
                                            })
                                          : null,
                                  ],
                              }),
                          ],
                      })
                    : null,
            eg = (0, $.I)(a.id),
            eE = (0, R.A)(a),
            eA = () =>
                (0, r.jsxs)("div", {
                    className: et.qr,
                    children: [
                        eE
                            ? (0, r.jsx)(ea, {
                                  className: et.UW,
                                  text: ee.intl.format(ee.t.j4B7EW, { applicationName: a.name }),
                              })
                            : eg
                              ? (0, r.jsx)(ea, {
                                    className: et.UW,
                                    text: ee.intl.format(ee.t.jUhnwb, {
                                        applicationName: a.name,
                                        onConnectionPress: () =>
                                            (0, Z.openUserSettings)(Y.X.CONNECTIONS_PANEL, {
                                                section: Q.nc_.CONNECTIONS,
                                            }),
                                    }),
                                })
                              : null,
                        (0, r.jsx)("div", {
                            className: et.hU,
                            children: (0, r.jsx)(E.Button, {
                                variant: "critical-secondary",
                                size: "sm",
                                text: ee.intl.string(ee.t.xUqheM),
                                onClick: () => eo(a, u),
                            }),
                        }),
                    ],
                });
        return (0, r.jsx)("div", {
            className: et.Zy,
            children: (0, r.jsx)(E.Fmo, {
                component: ef(),
                children: (0, r.jsxs)("div", { className: et.TD, children: [e_(), ec(), em(), eA()] }),
            }),
        });
    },
    ec = (0, d.v)(() => ({ searchQuery: "" })),
    ed = () => {
        let { fetchState: e, appAuthTokens: t } = (0, h.cf)([P.default], () => ({
                fetchState: P.default.getFetchState(),
                appAuthTokens: P.default.getNewestTokensForNonChildrenApplications(),
            })),
            n = (0, h.bG)([j.default], () => j.default.locale),
            a = (0, h.bG)([y.Ay], () => y.Ay.getSelfEmbeddedActivities()),
            s = (0, h.bG)([M.A, k.A], () => M.A.getChannel(k.A.getChannelId())),
            o = s?.getGuildId(),
            u = (e) => {
                let { id: t, application: n } = e;
                A.A.delete(t);
                let r = a.get(n.id);
                null != r && S.A.leaveActivity({ location: r.location, applicationId: n.id, showFeedback: !1 });
            },
            c = ec((e) => e.searchQuery),
            d = (e) => ec.setState({ searchQuery: e }),
            _ = (e) => {
                d(e);
            },
            f = () => {
                d("");
            },
            p = () =>
                (0, r.jsx)("div", {
                    className: et.MT,
                    children: (0, r.jsx)(E.IWV, {
                        query: c,
                        onChange: _,
                        onClear: f,
                        placeholder: ee.intl.string(ee.t["5prvKe"]),
                        "aria-label": ee.intl.string(ee.t["5prvKe"]),
                    }),
                }),
            g = (e, t) =>
                (0, r.jsx)(ei, {
                    className: et.__invalid_marginTop20,
                    children: (0, r.jsx)(E.SGT, { note: e, children: t }),
                }),
            I = i.useMemo(() => {
                let e = c.trim().toLowerCase();
                return "" === e || null == t
                    ? t
                    : t.length < 100
                      ? t.filter((t) => l()(e, t.application.name.toLowerCase()))
                      : t.filter((t) => t.application.name.toLowerCase().includes(e));
            }, [t, c]),
            T = () =>
                null == t || null == I || e !== P.FetchState.FETCHED
                    ? (0, r.jsx)(E.y$y, { className: er.QX, type: E.y$y.Type.SPINNING_CIRCLE })
                    : 0 === t.length
                      ? g(ee.intl.string(ee.t.CpPv5l), ee.intl.string(ee.t["E+SM6T"]))
                      : 0 === I.length
                        ? (0, r.jsxs)(r.Fragment, { children: [p(), g(null, ee.intl.string(ee.t.EVWFNr))] })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  p(),
                                  I.sort((e, t) => Number(t.id) - Number(e.id)).map((e) =>
                                      (0, r.jsx)(
                                          eu,
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
                className: et.Rd,
                children: [
                    (0, r.jsx)(E.Heading, { variant: "heading-md/medium", children: ee.intl.string(ee.t.HU3RFw) }),
                    (0, r.jsx)(E.Text, { variant: "text-sm/normal", children: ee.intl.string(ee.t.Nu5Yi0) }),
                ],
            }),
            children: T(),
        });
    },
    e_ = () => (
        i.useEffect(() => {
            A.A.fetch();
        }, []),
        i.useEffect(
            () => () => {
                ec.setState({ searchQuery: "" });
            },
            [],
        ),
        (0, r.jsx)(q.A, { title: ee.intl.string(ee.t["f6kk+r"]), children: (0, r.jsx)(ed, {}) })
    );
