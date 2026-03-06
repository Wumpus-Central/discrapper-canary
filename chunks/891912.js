"use strict";
n.d(t, { Ay: () => Q, _g: () => X, iU: () => Z }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(91871),
    l = n.n(o),
    u = n(353640),
    c = n(179771),
    d = n(158954),
    _ = n(311907),
    f = n(257474),
    p = n(397927),
    h = n(824552),
    m = n(933958),
    E = n(869003),
    g = n(224750),
    A = n(875444),
    I = n(62447),
    T = n(235986),
    S = n(713804),
    y = n(647053),
    v = n(611010),
    N = n(546183),
    C = n(734057),
    R = n(309010),
    O = n(486020),
    b = n(307600),
    D = n(661191),
    L = n(773669),
    w = n(544028),
    M = n(780964),
    x = n(904504),
    P = n(801264),
    k = n(790174),
    U = n(669253),
    G = n(840065),
    F = n(652215),
    V = n(985018),
    B = n(127964),
    H = n(830412),
    j = n(522759);
let Y = _.Ay.connectStores([w.A], () => ({ theme: w.A.theme }))(p.ppr);
function W(e) {
    let { className: t, text: n } = e;
    return (0, r.jsxs)("div", {
        className: a()(B.GC, t),
        children: [
            (0, r.jsx)(p.mir, { size: "md", color: "currentColor", className: B.QW }),
            (0, r.jsx)(p.Text, { color: "text-default", variant: "text-sm/medium", children: n }),
        ],
    });
}
let K = (e) => {
        let { disclosure: t } = e;
        return i.useMemo(() => {
            switch (t) {
                case f.mo.IP_LOCATION:
                    return (0, r.jsx)(p.L_e, { size: "md", color: "currentColor", className: B.PR });
                case f.mo.DISPLAYS_ADVERTISEMENTS:
                    return (0, r.jsx)(p.JD7, { className: B.PR });
                default:
                    return (0, r.jsx)(p.mir, { className: B.PR });
            }
        }, [t]);
    },
    $ = (e, t) => {
        let n = V.intl.string(V.t["DT39A+"]),
            i = V.intl.formatToPlainString(V.t.QWGvxA, { applicationName: e.name }),
            s = null;
        return (
            (0, A.A)(e) &&
                ((n = V.intl.formatToPlainString(V.t["paC+US"], { applicationName: e.name })),
                (i = V.intl.formatToPlainString(V.t.inM1Yt, { applicationName: e.name })),
                (s = (0, r.jsx)(P.A, { look: P.k.WARNING, children: V.intl.string(V.t.LY35Zy) }))),
            (0, x.A)(e.id) &&
                (s = (0, r.jsxs)(r.Fragment, {
                    children: [
                        s,
                        (0, r.jsx)(P.A, { children: V.intl.format(V.t.KRnERi, { applicationName: e.name }) }),
                    ],
                })),
            (0, p.qfG)((e) =>
                (0, r.jsx)(d.Modal, {
                    title: n,
                    subtitle: i,
                    actions: [
                        { text: V.intl.string(V.t["ETE/oC"]), onClick: e.onClose, variant: "secondary" },
                        {
                            text: V.intl.string(V.t.xUqheM),
                            onClick: () => {
                                t(), e.onClose();
                            },
                            variant: "critical-primary",
                        },
                    ],
                    ...e,
                    children: (0, r.jsx)("div", { className: B.rO, children: s }),
                }),
            )
        );
    },
    z = (e) => {
        let { application: t, isVisible: n } = e,
            i = () => {
                null != t.terms_of_service_url && (0, b.h)({ href: t.terms_of_service_url, shouldConfirm: !0 });
            },
            s = () => {
                null != t.privacy_policy_url && (0, b.h)({ href: t.privacy_policy_url, shouldConfirm: !0 });
            };
        return null != t.terms_of_service_url || null != t.privacy_policy_url
            ? (0, r.jsxs)("div", {
                  className: B.vi,
                  children: [
                      null != t.terms_of_service_url
                          ? (0, r.jsxs)(p.MzZ, {
                                onClick: i,
                                tabIndex: n ? 0 : -1,
                                className: B.Dt,
                                children: [
                                    (0, r.jsx)(p.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-link",
                                        children: V.intl.string(V.t["lx+Gec"]),
                                    }),
                                    (0, r.jsx)(p.I9m, { size: "sm", className: B.X6, color: "var(--text-link)" }),
                                ],
                            })
                          : null,
                      null != t.privacy_policy_url
                          ? (0, r.jsxs)("div", {
                                className: B.Fb,
                                children: [
                                    null != t.terms_of_service_url ? (0, r.jsx)("div", { className: B.yF }) : null,
                                    (0, r.jsxs)(p.MzZ, {
                                        onClick: s,
                                        className: B.Fb,
                                        tabIndex: n ? 0 : -1,
                                        children: [
                                            (0, r.jsx)(p.Text, {
                                                variant: "text-sm/normal",
                                                color: "text-link",
                                                children: V.intl.string(V.t.okSwq9),
                                            }),
                                            (0, r.jsx)(p.I9m, {
                                                size: "sm",
                                                className: B.X6,
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
    q = (e) => {
        let {
                scopes: t,
                application: n,
                selectedChannelId: s,
                selectedGuildId: o,
                onDelete: l,
                disclosures: u,
                locale: d,
                id: _,
            } = e,
            f = i.useMemo(() => v.Ay.createFromServer(n), [n]),
            [h, m] = i.useState(!1),
            [E, A] = i.useState(!1),
            N = () => {
                let e = [];
                for (let n of t)
                    e.push(...(0, y.rY)(n, t)), n === c.F.APPLICATIONS_COMMANDS && e.push(V.intl.string(V.t.Ls2XRq));
                if (e.length > 0 || (null != u && u.length > 0))
                    return (0, r.jsx)(p.Nt8, {
                        className: B.Nm,
                        isExpanded: E,
                        collapsibleContent: (0, r.jsxs)("ul", {
                            className: B.vo,
                            children: [
                                e.map((e, t) =>
                                    (0, r.jsxs)(
                                        "li",
                                        {
                                            className: B.EK,
                                            children: [
                                                (0, r.jsx)("i", { className: B.dv }),
                                                (0, r.jsx)(p.Text, { variant: "text-sm/normal", children: e }),
                                            ],
                                        },
                                        t,
                                    ),
                                ),
                                u?.map((t, n) => {
                                    let i = (0, g.wI)(t);
                                    return null != i
                                        ? (0, r.jsxs)(
                                              "li",
                                              {
                                                  className: B.EK,
                                                  children: [
                                                      (0, r.jsx)(K, { disclosure: t }),
                                                      (0, r.jsx)(p.Text, { variant: "text-sm/normal", children: i }),
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
                                    (0, r.jsxs)(p.DUT, {
                                        className: B.gF,
                                        onClick: (e) => {
                                            A(!E), n(e);
                                        },
                                        children: [
                                            (0, r.jsx)(p.Heading, {
                                                variant: "heading-sm/medium",
                                                color: "text-strong",
                                                children: V.intl.string(V.t.xrmhRX),
                                            }),
                                            E
                                                ? (0, r.jsx)(p.abt, {
                                                      size: "md",
                                                      color: p.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                                  })
                                                : (0, r.jsx)(p._BQ, {
                                                      size: "md",
                                                      color: p.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                                  }),
                                        ],
                                    }),
                                    !E &&
                                        (0, r.jsx)(p.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: a()(B.vo, B.k8),
                                            children: V.intl.format(V.t.nZOS8j, { numPermissions: e.length }),
                                        }),
                                ],
                            });
                        },
                    });
            },
            C = i.useMemo(() => {
                if (null != n.description && "" !== n.description)
                    return (0, r.jsx)(p.Text, {
                        className: H.PT,
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: (0, S.parseBioReact)(n.description),
                    });
            }, [n.description]),
            R = () => {
                let e = null != n.description && "" !== n.description,
                    t = null != n.terms_of_service_url || null != n.privacy_policy_url;
                return e || t
                    ? (0, r.jsx)(p.Nt8, {
                          className: B.Nm,
                          isExpanded: h,
                          collapsibleContent: (0, r.jsxs)("div", {
                              className: B.vo,
                              children: [e && C, t && (0, r.jsx)(z, { application: n, isVisible: h })],
                          }),
                          children: (e) => {
                              let { onClick: t } = e;
                              return (0, r.jsxs)(p.DUT, {
                                  className: B.gF,
                                  onClick: (e) => {
                                      m(!h), t(e);
                                  },
                                  children: [
                                      (0, r.jsx)(p.Heading, {
                                          variant: "heading-sm/medium",
                                          color: "text-strong",
                                          children: V.intl.string(V.t.fcYgiY),
                                      }),
                                      h
                                          ? (0, r.jsx)(p.abt, {
                                                size: "md",
                                                color: p.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                            })
                                          : (0, r.jsx)(p._BQ, {
                                                size: "md",
                                                color: p.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                            }),
                                  ],
                              });
                          },
                      })
                    : null;
            },
            b = () => {
                let e = O.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
                    t =
                        null != e
                            ? (0, r.jsx)(T.A.Child, {
                                  className: B.zN,
                                  grow: 0,
                                  children: (0, r.jsx)("img", { src: e, alt: "" }),
                              })
                            : null,
                    i = new Date(D.default.extractTimestamp(_)).toLocaleDateString(d);
                return (0, r.jsxs)("div", {
                    className: B.ie,
                    children: [
                        t,
                        (0, r.jsxs)("div", {
                            className: B.gC,
                            children: [
                                (0, r.jsx)(p.Heading, {
                                    variant: "heading-md/semibold",
                                    className: a()(B.TK, j.Q5),
                                    children: n.name,
                                }),
                                (0, r.jsx)(p.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: V.intl.format(V.t.yOApCK, { date: i }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(U.A, { appRecord: f, selectedGuildId: o, selectedChannelId: s }),
                    ],
                });
            },
            L = (0, x.I)(n.id),
            w = (0, I.A)(n),
            P = () =>
                (0, r.jsxs)("div", {
                    className: B.qr,
                    children: [
                        w
                            ? (0, r.jsx)(W, {
                                  className: B.UW,
                                  text: V.intl.format(V.t.j4B7EW, { applicationName: n.name }),
                              })
                            : L
                              ? (0, r.jsx)(W, {
                                    className: B.UW,
                                    text: V.intl.format(V.t.jUhnwb, {
                                        applicationName: n.name,
                                        onConnectionPress: () =>
                                            (0, G.openUserSettings)(M.X.CONNECTIONS_PANEL, {
                                                section: F.nc_.CONNECTIONS,
                                            }),
                                    }),
                                })
                              : null,
                        (0, r.jsx)("div", {
                            className: B.hU,
                            children: (0, r.jsx)(p.Button, {
                                variant: "critical-secondary",
                                size: "sm",
                                text: V.intl.string(V.t.xUqheM),
                                onClick: () => $(n, l),
                            }),
                        }),
                    ],
                });
        return (0, r.jsx)("div", {
            className: B.Zy,
            children: (0, r.jsx)(p.Fmo, {
                component: b(),
                children: (0, r.jsxs)("div", { className: B.TD, children: [R(), N(), P()] }),
            }),
        });
    },
    Z = (0, u.v)(() => ({ searchQuery: "" })),
    X = () => {
        let { fetchState: e, appAuthTokens: t } = (0, _.cf)([N.default], () => ({
                fetchState: N.default.getFetchState(),
                appAuthTokens: N.default.getNewestTokensForNonChildrenApplications(),
            })),
            n = (0, _.bG)([L.default], () => L.default.locale),
            s = (0, _.bG)([m.Ay], () => m.Ay.getSelfEmbeddedActivities()),
            a = (0, _.bG)([C.A, R.A], () => C.A.getChannel(R.A.getChannelId())),
            o = a?.getGuildId(),
            u = (e) => {
                let { id: t, application: n } = e;
                h.A.delete(t);
                let r = s.get(n.id);
                null != r && E.A.leaveActivity({ location: r.location, applicationId: n.id, showFeedback: !1 });
            },
            c = Z((e) => e.searchQuery),
            d = (e) => Z.setState({ searchQuery: e }),
            f = (e) => {
                d(e);
            },
            g = () => {
                d("");
            },
            A = () =>
                (0, r.jsx)("div", {
                    className: B.MT,
                    children: (0, r.jsx)(p.IWV, {
                        query: c,
                        onChange: f,
                        onClear: g,
                        placeholder: V.intl.string(V.t["5prvKe"]),
                        "aria-label": V.intl.string(V.t["5prvKe"]),
                    }),
                }),
            I = (e, t) =>
                (0, r.jsx)(Y, {
                    className: B.__invalid_marginTop20,
                    children: (0, r.jsx)(p.SGT, { note: e, children: t }),
                }),
            T = i.useMemo(() => {
                let e = c.trim().toLowerCase();
                return "" === e || null == t
                    ? t
                    : t.length < 100
                      ? t.filter((t) => l()(e, t.application.name.toLowerCase()))
                      : t.filter((t) => t.application.name.toLowerCase().includes(e));
            }, [t, c]),
            S = () =>
                null == t || null == T || e !== N.FetchState.FETCHED
                    ? (0, r.jsx)(p.y$y, { className: j.QX, type: p.y$y.Type.SPINNING_CIRCLE })
                    : 0 === t.length
                      ? I(V.intl.string(V.t.CpPv5l), V.intl.string(V.t["E+SM6T"]))
                      : 0 === T.length
                        ? (0, r.jsxs)(r.Fragment, { children: [A(), I(null, V.intl.string(V.t.EVWFNr))] })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  A(),
                                  T.sort((e, t) => Number(t.id) - Number(e.id)).map((e) =>
                                      (0, r.jsx)(
                                          q,
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
        return (0, r.jsx)(p.Fmo, {
            component: (0, r.jsxs)(p.ZpM, {
                type: p.ZpM.Types.PRIMARY,
                className: B.Rd,
                children: [
                    (0, r.jsx)(p.Heading, { variant: "heading-md/medium", children: V.intl.string(V.t.HU3RFw) }),
                    (0, r.jsx)(p.Text, { variant: "text-sm/normal", children: V.intl.string(V.t.Nu5Yi0) }),
                ],
            }),
            children: S(),
        });
    },
    Q = () => (
        i.useEffect(() => {
            h.A.fetch();
        }, []),
        i.useEffect(
            () => () => {
                Z.setState({ searchQuery: "" });
            },
            [],
        ),
        (0, r.jsx)(k.A, { title: V.intl.string(V.t["f6kk+r"]), children: (0, r.jsx)(X, {}) })
    );
