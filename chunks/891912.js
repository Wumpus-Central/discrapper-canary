n.d(t, {
    Ay: () => eh,
    _g: () => e_,
    iU: () => ep,
}),
    n(938796),
    n(896048),
    n(321073),
    n(228524),
    n(733351),
    n(638769);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(91871),
    l = n.n(o),
    c = n(284009),
    u = n.n(c),
    d = n(353640),
    f = n(179771),
    p = n(665260),
    _ = n(158954),
    h = n(311907),
    m = n(257474),
    g = n(873298),
    E = n(397927),
    b = n(824552),
    y = n(308528),
    O = n(832712),
    A = n(933958),
    v = n(869003),
    S = n(58149),
    I = n(537569),
    T = n(224750),
    C = n(875444),
    N = n(62447),
    R = n(235986),
    w = n(713804),
    P = n(647053),
    D = n(611010),
    x = n(546183),
    L = n(734057),
    j = n(309010),
    M = n(543465),
    k = n(486020),
    U = n(307600),
    G = n(477427),
    V = n(661191),
    F = n(773669),
    B = n(544028),
    H = n(780964),
    Y = n(594061),
    W = n(617617),
    K = n(904504),
    z = n(801264),
    q = n(790174),
    X = n(669253),
    Z = n(840065),
    Q = n(652215),
    $ = n(406535),
    J = n(985018),
    ee = n(259878),
    et = n(206314),
    en = n(473169);
function er(e, t, n) {
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
function ei(e) {
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
                er(e, t, n[t]);
            });
    }
    return e;
}
function ea(e, t) {
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
            : ea(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eo = h.Ay.connectStores([B.A], () => ({ theme: B.A.theme }))(E.ppr);
function el(e) {
    let { className: t, text: n } = e;
    return (0, r.jsxs)("div", {
        className: s()(ee.GC, t),
        children: [
            (0, r.jsx)(E.mir, {
                size: "md",
                color: "currentColor",
                className: ee.QW,
            }),
            (0, r.jsx)(E.Text, {
                color: "text-default",
                variant: "text-sm/medium",
                children: n,
            }),
        ],
    });
}
let ec = (e) => {
        let { disclosure: t } = e;
        return i.useMemo(() => {
            switch (t) {
                case m.mo.IP_LOCATION:
                    return (0, r.jsx)(E.L_e, {
                        size: "md",
                        color: "currentColor",
                        className: ee.PR,
                    });
                case m.mo.DISPLAYS_ADVERTISEMENTS:
                    return (0, r.jsx)(E.JD7, { className: ee.PR });
                default:
                    return (0, r.jsx)(E.mir, { className: ee.PR });
            }
        }, [t]);
    },
    eu = (e, t) => {
        let n = J.intl.string(J.t["DT39A+"]),
            i = J.intl.formatToPlainString(J.t.QWGvxA, { applicationName: e.name }),
            a = null;
        return (
            (0, C.A)(e) &&
                ((n = J.intl.formatToPlainString(J.t["paC+US"], { applicationName: e.name })),
                (i = J.intl.formatToPlainString(J.t.inM1Yt, { applicationName: e.name })),
                (a = (0, r.jsx)(z.A, {
                    look: z.k.WARNING,
                    children: J.intl.string(J.t.LY35Zy),
                }))),
            (0, K.A)(e.id) &&
                (a = (0, r.jsxs)(r.Fragment, {
                    children: [
                        a,
                        (0, r.jsx)(z.A, { children: J.intl.format(J.t.KRnERi, { applicationName: e.name }) }),
                    ],
                })),
            (0, E.qfG)((e) =>
                (0, r.jsx)(
                    _.Modal,
                    es(
                        ei(
                            {
                                title: n,
                                subtitle: i,
                                actions: [
                                    {
                                        text: J.intl.string(J.t["ETE/oC"]),
                                        onClick: e.onClose,
                                        variant: "secondary",
                                    },
                                    {
                                        text: J.intl.string(J.t.xUqheM),
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
                                className: ee.rO,
                                children: a,
                            }),
                        },
                    ),
                ),
            )
        );
    },
    ed = (e) => {
        let { application: t, isVisible: n } = e,
            i = () => {
                null != t.terms_of_service_url &&
                    (0, U.h)({
                        href: t.terms_of_service_url,
                        shouldConfirm: !0,
                    });
            },
            a = () => {
                null != t.privacy_policy_url &&
                    (0, U.h)({
                        href: t.privacy_policy_url,
                        shouldConfirm: !0,
                    });
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
                                    (0, r.jsx)(E.I9m, {
                                        size: "sm",
                                        className: ee.X6,
                                        color: "var(--text-link)",
                                    }),
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
    ef = (e) => {
        let {
                scopes: t,
                application: a,
                selectedChannelId: o,
                selectedGuildId: l,
                onDelete: c,
                disclosures: d,
                locale: _,
                id: m,
            } = e,
            b = a.id,
            A = i.useMemo(() => D.Ay.createFromServer(a), [a]),
            v = (0, p.Lt)(A.flags, Q.gfo.EMBEDDED),
            C = (0, h.bG)([W.A], () => {
                var e, t, n, r;
                return null == (r = W.A.settings.applications) ||
                    null == (n = r.appSettings) ||
                    null == (t = n[b]) ||
                    null == (e = t.appDmSettings)
                    ? void 0
                    : e.allowMobilePush;
            }, [b]),
            x = I.v.useExperiment({ location: "oauth2_authorize" }),
            j = a.bot,
            U = (0, h.bG)([L.A], () => L.A.getDMFromUserId(null == j ? void 0 : j.id)),
            { appDMChannelMuteConfig: F, dmChannelMuted: B } = (0, h.cf)([M.Ay], () =>
                null == U
                    ? {
                          appDMChannelMuteConfig: null,
                          dmChannelMuted: !1,
                      }
                    : {
                          appDMChannelMuteConfig: M.Ay.getChannelMuteConfig(null, U),
                          dmChannelMuted: M.Ay.isChannelMuted(null, U),
                      },
            ),
            [z, q] = i.useState(!1),
            [er, ea] = i.useState(!1),
            es = () => {
                let e = [];
                for (let n of t)
                    e.push(...(0, P.rY)(n, t)), n === f.F.APPLICATIONS_COMMANDS && e.push(J.intl.string(J.t.Ls2XRq));
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
                                          let i = (0, T.wI)(t);
                                          return null != i
                                              ? (0, r.jsxs)(
                                                    "li",
                                                    {
                                                        className: ee.EK,
                                                        children: [
                                                            (0, r.jsx)(ec, { disclosure: t }),
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
                                    (0, r.jsxs)(E.DUT, {
                                        className: ee.gF,
                                        onClick: (e) => {
                                            ea(!er), n(e);
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
            eo = i.useMemo(() => {
                if (null != a.description && "" !== a.description)
                    return (0, r.jsx)(E.Text, {
                        className: et.PT,
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: (0, w.parseBioReact)(a.description),
                    });
            }, [a.description]),
            ef = () => {
                let e = null != a.description && "" !== a.description,
                    t = null != a.terms_of_service_url || null != a.privacy_policy_url;
                return e || t
                    ? (0, r.jsx)(E.Nt8, {
                          className: ee.Nm,
                          isExpanded: z,
                          collapsibleContent: (0, r.jsxs)("div", {
                              className: ee.vo,
                              children: [
                                  e && eo,
                                  t &&
                                      (0, r.jsx)(ed, {
                                          application: a,
                                          isVisible: z,
                                      }),
                              ],
                          }),
                          children: (e) => {
                              let { onClick: t } = e;
                              return (0, r.jsxs)(E.DUT, {
                                  className: ee.gF,
                                  onClick: (e) => {
                                      q(!z), t(e);
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
            ep = () => {
                let e = k.Ay.getApplicationIconURL({
                        id: a.id,
                        icon: a.icon,
                    }),
                    t =
                        null != e
                            ? (0, r.jsx)(R.A.Child, {
                                  className: ee.zN,
                                  grow: 0,
                                  children: (0, r.jsx)("img", {
                                      src: e,
                                      alt: "",
                                  }),
                              })
                            : null,
                    n = new Date(V.default.extractTimestamp(m)).toLocaleDateString(_);
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
                        (0, r.jsx)(X.A, {
                            appRecord: A,
                            selectedGuildId: l,
                            selectedChannelId: o,
                        }),
                    ],
                });
            },
            e_ = (e) => {
                Y.wc.updateAsync(
                    "applications",
                    (t) => {
                        b in t.appSettings
                            ? null == t.appSettings[b].appDmSettings
                                ? (t.appSettings[b].appDmSettings = g.Po.create({ allowMobilePush: e }))
                                : (t.appSettings[b].appDmSettings.allowMobilePush = e)
                            : (t.appSettings[b] = g._o.create({ appDmSettings: g.Po.create({ allowMobilePush: e }) }));
                    },
                    Y.Sb.INFREQUENT_USER_ACTION,
                ),
                    S.Ay.trackWithMetadata(Q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                        update_type: $.Y.AUTHORIZED_APP_DM_PUSH_NOTIFICATION,
                        application_id: a.id,
                        label: e ? G.fd.Unmuted : G.fd.Muted,
                    });
            },
            eh = i.useCallback(async () => {
                u()(null != j, "dm channel mute setting requires having a bot user");
                let e = U;
                null == e && (e = await y.A.ensurePrivateChannel(j.id)),
                    B
                        ? O.A.updateAppDMOverrideSettings(null, e, a.id, { muted: !1 }, G.fd.Unmuted)
                        : (0, E.mMO)(async () => {
                              let { default: t } = await n.e("78560").then(n.bind(n, 123939));
                              return (n) =>
                                  (0, r.jsx)(
                                      t,
                                      ei(
                                          {
                                              channelId: e,
                                              applicationId: a.id,
                                          },
                                          n,
                                      ),
                                  );
                          });
            }, [U, j, B, a.id]),
            em = () =>
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
                                      null != j
                                          ? (0, r.jsx)(E.dOG, {
                                                label: J.intl.string(J.t.NkwaBs),
                                                description:
                                                    (null == F ? void 0 : F.end_time) != null
                                                        ? J.intl.format(J.t.j7h4AJ, {
                                                              endTime: new Date(F.end_time).toLocaleString(
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
                                                checked: B,
                                                onChange: eh,
                                            })
                                          : null,
                                      v && x.enabled
                                          ? (0, r.jsx)(E.dOG, {
                                                label: J.intl.string(J.t["Pkw//o"]),
                                                description: J.intl.string(J.t.hw1nKf),
                                                checked: C,
                                                disabled: B,
                                                onChange: e_,
                                            })
                                          : null,
                                  ],
                              }),
                          ],
                      })
                    : null,
            eg = (0, K.I)(a.id),
            eE = (0, N.A)(a),
            eb = () =>
                (0, r.jsxs)("div", {
                    className: ee.qr,
                    children: [
                        eE
                            ? (0, r.jsx)(el, {
                                  className: ee.UW,
                                  text: J.intl.format(J.t.j4B7EW, { applicationName: a.name }),
                              })
                            : eg
                              ? (0, r.jsx)(el, {
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
                                onClick: () => eu(a, c),
                            }),
                        }),
                    ],
                });
        return (0, r.jsx)("div", {
            className: ee.Zy,
            children: (0, r.jsx)(E.Fmo, {
                component: ep(),
                children: (0, r.jsxs)("div", {
                    className: ee.TD,
                    children: [ef(), es(), em(), eb()],
                }),
            }),
        });
    },
    ep = (0, d.v)(() => ({ searchQuery: "" })),
    e_ = () => {
        let { fetchState: e, appAuthTokens: t } = (0, h.cf)([x.default], () => ({
                fetchState: x.default.getFetchState(),
                appAuthTokens: x.default.getNewestTokensForNonChildrenApplications(),
            })),
            n = (0, h.bG)([F.default], () => F.default.locale),
            a = (0, h.bG)([A.Ay], () => A.Ay.getSelfEmbeddedActivities()),
            s = (0, h.bG)([L.A, j.A], () => L.A.getChannel(j.A.getChannelId())),
            o = null == s ? void 0 : s.getGuildId(),
            c = (e) => {
                let { id: t, application: n } = e;
                b.A.delete(t);
                let r = a.get(n.id);
                null != r &&
                    v.A.leaveActivity({
                        location: r.location,
                        applicationId: n.id,
                        showFeedback: !1,
                    });
            },
            u = ep((e) => e.searchQuery),
            d = (e) => ep.setState({ searchQuery: e }),
            f = (e) => {
                d(e);
            },
            p = () => {
                d("");
            },
            _ = () =>
                (0, r.jsx)("div", {
                    className: ee.MT,
                    children: (0, r.jsx)(E.IWV, {
                        query: u,
                        onChange: f,
                        onClear: p,
                        placeholder: J.intl.string(J.t["5prvKe"]),
                        "aria-label": J.intl.string(J.t["5prvKe"]),
                    }),
                }),
            m = (e, t) =>
                (0, r.jsx)(eo, {
                    className: ee.__invalid_marginTop20,
                    children: (0, r.jsx)(E.SGT, {
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
                    ? (0, r.jsx)(E.y$y, {
                          className: en.QX,
                          type: E.y$y.Type.SPINNING_CIRCLE,
                      })
                    : 0 === t.length
                      ? m(J.intl.string(J.t.CpPv5l), J.intl.string(J.t["E+SM6T"]))
                      : 0 === g.length
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [_(), m(null, J.intl.string(J.t.EVWFNr))],
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  _(),
                                  g
                                      .sort((e, t) => Number(t.id) - Number(e.id))
                                      .map((e) =>
                                          (0, r.jsx)(
                                              ef,
                                              ei(
                                                  {
                                                      locale: n,
                                                      onDelete: () => c(e),
                                                      selectedChannelId: null == s ? void 0 : s.id,
                                                      selectedGuildId: null != o ? o : void 0,
                                                  },
                                                  e,
                                              ),
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
                    (0, r.jsx)(E.Heading, {
                        variant: "heading-md/medium",
                        children: J.intl.string(J.t.HU3RFw),
                    }),
                    (0, r.jsx)(E.Text, {
                        variant: "text-sm/normal",
                        children: J.intl.string(J.t.Nu5Yi0),
                    }),
                ],
            }),
            children: y(),
        });
    },
    eh = () => (
        i.useEffect(() => {
            b.A.fetch();
        }, []),
        i.useEffect(
            () => () => {
                ep.setState({ searchQuery: "" });
            },
            [],
        ),
        (0, r.jsx)(q.A, {
            title: J.intl.string(J.t["f6kk+r"]),
            children: (0, r.jsx)(e_, {}),
        })
    );
