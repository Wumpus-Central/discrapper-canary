t.d(n, { ZP: () => W }), t(388685), t(457542);
var a = t(54381),
    r = t(473749),
    i = t(120356),
    l = t.n(i),
    s = t(660815),
    o = t(442837),
    c = t(704215),
    d = t(681715),
    u = t(481060),
    m = t(100527),
    g = t(243778),
    f = t(690221),
    b = t(77498),
    x = t(823379),
    v = t(49012),
    j = t(639777),
    p = t(905551),
    h = t(578756),
    C = t(441494),
    y = t(775146),
    O = t(941762),
    _ = t(587065),
    I = t(162190),
    N = t(986841),
    S = t(47695),
    P = t(329871),
    E = t(110381),
    T = t(921944),
    w = t(914820),
    Z = t(388032),
    R = t(243115);
function k(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            a = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            a.forEach(function (n) {
                var a;
                (a = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = a);
            });
    }
    return e;
}
function G(e) {
    let { guildId: n, instance: t } = e,
        [i, l] = r.useState(!1),
        s = r.useCallback(() => {
            l(!0),
                (0, p.WX)(n, t.id).finally(() => {
                    l(!1);
                });
        }, [n, t.id]);
    return (0, a.jsx)(u.Button, {
        fullWidth: !0,
        text: Z.intl.string(w.default.TMzy7d),
        variant: "secondary",
        loading: i,
        onClick: s,
    });
}
function A(e) {
    return (0, a.jsx)(
        u.Button,
        k(
            {
                fullWidth: !0,
                text: Z.intl.string(w.default.tkbVdf),
                variant: "secondary",
                icon: u.Gr1,
                iconPosition: "end",
            },
            e,
        ),
    );
}
function D(e) {
    return (0, a.jsx)(
        u.Button,
        k(
            {
                fullWidth: !0,
                text: Z.intl.string(w.default["fQCcM/"]),
                variant: "primary",
            },
            e,
        ),
    );
}
function M(e) {
    return (0, a.jsx)(
        u.Button,
        k(
            {
                fullWidth: !0,
                text: Z.intl.string(w.default.gWMqnI),
                variant: "primary",
                icon: u.Gr1,
                iconPosition: "end",
            },
            e,
        ),
    );
}
function V(e) {
    let { guildId: n } = e,
        [t, i] = r.useState(!1),
        l = r.useCallback(() => {
            i(!0),
                (0, p.mF)(n).finally(() => {
                    i(!1);
                });
        }, [n]);
    return (0, a.jsx)(u.Button, {
        fullWidth: !0,
        text: Z.intl.string(w.default.BLEx3k),
        variant: "secondary",
        loading: t,
        onClick: l,
    });
}
function B(e) {
    let { instance: n } = e,
        t = (0, S.Z)(n.providerType, n.gameServerPanelUrl);
    return (0, a.jsx)(u.Button, {
        fullWidth: !0,
        text: Z.intl.string(w.default.bBkeMs),
        variant: "secondary",
        onClick: () => {
            null != t && (0, v.q)({ href: t });
        },
    });
}
function W(e) {
    let { guildId: n, instance: t } = e,
        i = (0, N.Z)(t),
        [p, k] = (0, g.US)([c.z.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        W = p !== c.z.GAME_SERVER_HOSTING_PORTKEY_TOS,
        L = (0, o.e7)([b.Z], () => b.Z.getDetectableGame(t.gameId)),
        U = (0, S.Z)(t.providerType, t.gameServerPanelUrl),
        z = r.useCallback(() => {
            var e;
            (0, h.wz)(n, t.gameId, null != (e = null == L ? void 0 : L.name) ? e : "", t.id),
                W || null == t.providerType
                    ? (0, P.Z)(n, t)
                    : (0, E.Z)({
                          provider: t.providerType,
                          onAccept: () => {
                              k(T.L.TAKE_ACTION), (0, P.Z)(n, t);
                          },
                      });
        }, [t, W, k, n, null == L ? void 0 : L.name]),
        { handleCopyServerIp: F, animateCopyIcon: K } = (0, _.Z)(n, t.id, m.Z.GAME_SERVER_GAME, null != i ? i : ""),
        X = (0, I.Z)(t.gameId, "cover"),
        q = (0, j.Z)(n),
        H = r.useCallback(() => {
            var e;
            (0, h.$M)(n, t.id), (0, v.q)({ href: null != (e = t.gameServerPanelUrl) ? e : "" });
        }, [t.gameServerPanelUrl, n, t.id]),
        Y = r.useMemo(() => {
            switch (t.status) {
                case s.V.SLEEPING:
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(G, {
                                guildId: n,
                                instance: t,
                            }),
                            q &&
                                (0, a.jsx)(A, {
                                    onClick: H,
                                    disabled: null == t.gameServerPanelUrl,
                                }),
                        ],
                    });
                case s.V.OFFLINE:
                case s.V.ONLINE:
                case s.V.STARTING:
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(D, { onClick: z }),
                            q &&
                                (0, a.jsx)(A, {
                                    onClick: H,
                                    disabled: null == t.gameServerPanelUrl,
                                }),
                        ],
                    });
                case s.V.STARTUP_FAILED:
                case s.V.MISSING_STOCK:
                    return q
                        ? (0, a.jsx)(M, { onClick: H })
                        : (0, a.jsx)(D, {
                              onClick: z,
                              disabled: !0,
                          });
                case s.V.DELETED:
                    return q
                        ? (0, a.jsx)(A, {
                              onClick: H,
                              disabled: null == t.gameServerPanelUrl,
                          })
                        : (0, a.jsx)(D, {
                              onClick: z,
                              disabled: !0,
                          });
                case s.V.PROVIDER_ERRORED:
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            q && null != U
                                ? (0, a.jsx)(B, {
                                      guildId: n,
                                      instance: t,
                                  })
                                : (0, a.jsx)(D, {
                                      onClick: z,
                                      disabled: !0,
                                  }),
                            (0, a.jsx)(V, {
                                guildId: n,
                                instance: t,
                            }),
                        ],
                    });
                default:
                    return null;
            }
        }, [t, z, q, H, n, U]),
        J = r.useMemo(() => {
            if (null == t.gameConfig) return null;
            let e = [t.gameConfig.type, t.gameConfig.version].filter(x.lm).join(" ");
            return "" === e ? null : e;
        }, [t.gameConfig]),
        $ = r.useMemo(() => {
            switch (t.status) {
                case s.V.STARTING:
                    if (null == t.gameServerPanelUrl) return Z.intl.string(w.default["1A3US2"]);
                    return null;
                case s.V.STARTUP_FAILED:
                    return Z.intl.string(q ? w.default.Mdoc98 : w.default.osZiRl);
                case s.V.MISSING_STOCK:
                    return Z.intl.string(q ? w.default.YCakvM : w.default.osZiRl);
                case s.V.PROVIDER_ERRORED:
                    return Z.intl.string(q ? w.default.NRyCeY : w.default.osZiRl);
                default:
                    return null;
            }
        }, [t.status, t.gameServerPanelUrl, q]);
    return (0, a.jsxs)(y.Z, {
        actions: Y,
        children: [
            (0, a.jsxs)("div", {
                className: R.serverDetailsContainer,
                children: [
                    (0, a.jsxs)("div", {
                        className: R.serverHeader,
                        children: [
                            (0, a.jsx)("img", {
                                src: null != X ? X : "",
                                alt: "",
                                className: R.gameImage,
                            }),
                            (0, a.jsxs)("div", {
                                className: R.serverInfo,
                                children: [
                                    (0, a.jsx)(u.Heading, {
                                        variant: "heading-md/medium",
                                        children: t.name,
                                    }),
                                    (0, a.jsx)(u.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: [null == L ? void 0 : L.name, J].filter(x.lm).join(" \u2022 "),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        children: (0, a.jsxs)("div", {
                            className: R.detailsGrid,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: R.detailItem,
                                    children: [
                                        (0, a.jsx)(u.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: Z.intl.string(w.default.bDdi7n),
                                        }),
                                        (0, a.jsx)(u.Text, {
                                            variant: "text-sm/medium",
                                            children: ""
                                                .concat(
                                                    null != t.onlineConnectionsCount && t.onlineConnectionsCount >= 0
                                                        ? t.onlineConnectionsCount
                                                        : "\u2014",
                                                    " / ",
                                                )
                                                .concat(
                                                    null != t.maxConnectionsCount && t.maxConnectionsCount >= 0
                                                        ? t.maxConnectionsCount
                                                        : "\u2014",
                                                ),
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className: R.detailItem,
                                    children: [
                                        (0, a.jsx)(u.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: Z.intl.string(w.default["7phwMG"]),
                                        }),
                                        (0, a.jsx)("div", {
                                            className: R.serverIpContainer,
                                            children:
                                                null == i
                                                    ? (0, a.jsx)(u.Text, {
                                                          variant: "text-sm/medium",
                                                          children: "\u2014",
                                                      })
                                                    : W
                                                      ? (0, a.jsxs)(a.Fragment, {
                                                            children: [
                                                                (0, a.jsx)(u.Text, {
                                                                    variant: "text-sm/medium",
                                                                    children: i,
                                                                }),
                                                                (0, a.jsx)(u.P3F, {
                                                                    className: R.copyButton,
                                                                    "aria-label": Z.intl.string(Z.t.OpuAlK),
                                                                    onClick: F,
                                                                    children: K
                                                                        ? (0, a.jsx)(u.dz2, { size: "sm" })
                                                                        : (0, a.jsx)(u.TIy, { size: "sm" }),
                                                                }),
                                                            ],
                                                        })
                                                      : null != t.providerType &&
                                                        (0, a.jsx)(f.Z, {
                                                            onClick: () => {
                                                                (0, E.Z)({
                                                                    provider: t.providerType,
                                                                    onAccept: () => {
                                                                        k(T.L.TAKE_ACTION), F();
                                                                    },
                                                                });
                                                            },
                                                            children: Z.intl.string(w.default["f+F7H3"]),
                                                        }),
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className: R.detailItem,
                                    children: [
                                        (0, a.jsx)(u.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: Z.intl.string(w.default["n+ZX7y"]),
                                        }),
                                        (0, a.jsxs)("div", {
                                            className: R.statusContainer,
                                            children: [
                                                t.status === s.V.STARTING
                                                    ? (0, a.jsx)(u.$jN, {
                                                          type: u.RAz.SPINNING_CIRCLE_SIMPLE,
                                                          className: R.statusLoading,
                                                      })
                                                    : (0, a.jsx)("span", {
                                                          className: l()(
                                                              R.statusIndicator,
                                                              null != t.status && R[t.status],
                                                          ),
                                                      }),
                                                (0, a.jsx)(u.Text, {
                                                    variant: "text-sm/medium",
                                                    children: (function (e) {
                                                        switch (e) {
                                                            case s.V.STARTING:
                                                                return Z.intl.string(w.default.SgjaXI);
                                                            case s.V.STARTUP_FAILED:
                                                                return Z.intl.string(w.default["7C9Z3s"]);
                                                            case s.V.OFFLINE:
                                                                return Z.intl.string(w.default["Ys/RrB"]);
                                                            case s.V.ONLINE:
                                                                return Z.intl.string(w.default["60kAzo"]);
                                                            case s.V.DELETED:
                                                                return Z.intl.string(w.default.Z1NZwX);
                                                            case s.V.MISSING_STOCK:
                                                                return Z.intl.string(w.default["+a5G2l"]);
                                                            case s.V.SLEEPING:
                                                                return Z.intl.string(w.default.y0z8ZO);
                                                            case s.V.PROVIDER_ERRORED:
                                                                return Z.intl.string(w.default["6g/oji"]);
                                                            default:
                                                                return "\u2014";
                                                        }
                                                    })(t.status),
                                                }),
                                                null != $ &&
                                                    (0, a.jsx)(d.u, {
                                                        position: "top",
                                                        text: $,
                                                        children: (0, a.jsx)(u.idN, {
                                                            className: R.statusTooltipIcon,
                                                            size: "xs",
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className: R.detailItem,
                                    children: [
                                        (0, a.jsx)(u.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: Z.intl.string(w.default.mJlz3T),
                                        }),
                                        (0, a.jsx)(u.Text, {
                                            variant: "text-sm/medium",
                                            children: null != t.regionName ? t.regionName : "\u2014",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                ],
            }),
            q &&
                (0, a.jsx)("div", {
                    className: R.overflowMenu,
                    children: (0, a.jsx)(O.Z, {
                        guildId: n,
                        instance: t,
                    }),
                }),
            (0, a.jsx)("div", {
                className: R.imageBackground,
                children: (0, a.jsx)(C.b, { imageUrl: null != X ? X : "" }),
            }),
        ],
    });
}
