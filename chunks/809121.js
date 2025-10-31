t.d(n, { ZP: () => W }), t(388685), t(457542);
var r = t(951288),
    a = t(647438),
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
    x = t(77498),
    _ = t(823379),
    v = t(49012),
    b = t(639777),
    p = t(905551),
    j = t(578756),
    h = t(441494),
    y = t(775146),
    C = t(941762),
    O = t(587065),
    I = t(162190),
    N = t(986841),
    S = t(329871),
    P = t(110381),
    E = t(619733),
    T = t(921944),
    w = t(269794),
    R = t(388032),
    k = t(500104);
function Z(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
function G(e) {
    let { guildId: n, instance: t } = e,
        [i, l] = a.useState(!1),
        s = a.useCallback(() => {
            l(!0),
                (0, p.WX)(n, t.id).finally(() => {
                    l(!1);
                });
        }, [n, t.id]);
    return (0, r.jsx)(u.Button, {
        fullWidth: !0,
        text: R.intl.string(w.default.TMzy7d),
        variant: "secondary",
        loading: i,
        onClick: s,
    });
}
function A(e) {
    return (0, r.jsx)(
        u.Button,
        Z(
            {
                fullWidth: !0,
                text: R.intl.string(w.default.tkbVdf),
                variant: "secondary",
                icon: u.Gr1,
                iconPosition: "end",
            },
            e,
        ),
    );
}
function D(e) {
    return (0, r.jsx)(
        u.Button,
        Z(
            {
                fullWidth: !0,
                text: R.intl.string(w.default["fQCcM/"]),
                variant: "primary",
            },
            e,
        ),
    );
}
function B(e) {
    return (0, r.jsx)(
        u.Button,
        Z(
            {
                fullWidth: !0,
                text: R.intl.string(w.default.gWMqnI),
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
        [t, i] = a.useState(!1),
        l = a.useCallback(() => {
            i(!0),
                (0, p.mF)(n).finally(() => {
                    i(!1);
                });
        }, [n]);
    return (0, r.jsx)(u.Button, {
        fullWidth: !0,
        text: R.intl.string(w.default.BLEx3k),
        variant: "secondary",
        loading: t,
        onClick: l,
    });
}
function M(e) {
    let { instance: n } = e;
    return (0, r.jsx)(u.Button, {
        fullWidth: !0,
        text: R.intl.string(w.default.bBkeMs),
        variant: "secondary",
        onClick: () => {
            (0, v.q)({ href: E.uz[n.providerType] });
        },
    });
}
function W(e) {
    let { guildId: n, instance: t } = e,
        i = (0, N.Z)(t),
        [p, E] = (0, g.US)([c.z.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        Z = p !== c.z.GAME_SERVER_HOSTING_PORTKEY_TOS,
        W = (0, o.e7)([x.Z], () => x.Z.getDetectableGame(t.gameId)),
        L = a.useCallback(() => {
            var e;
            (0, j.wz)(n, t.gameId, null != (e = null == W ? void 0 : W.name) ? e : "", t.id),
                Z || null == t.providerType
                    ? (0, S.Z)(n, t)
                    : (0, P.Z)({
                          provider: t.providerType,
                          onAccept: () => {
                              E(T.L.TAKE_ACTION), (0, S.Z)(n, t);
                          },
                      });
        }, [t, Z, E, n, null == W ? void 0 : W.name]),
        { handleCopyServerIp: z, animateCopyIcon: U } = (0, O.Z)(n, t.id, m.Z.GAME_SERVER_GAME, null != i ? i : ""),
        F = (0, I.Z)(t.gameId, "cover"),
        K = (0, b.Z)(n),
        q = a.useCallback(() => {
            var e;
            (0, j.$M)(n, t.id), (0, v.q)({ href: null != (e = t.gameServerPanelUrl) ? e : "" });
        }, [t.gameServerPanelUrl, n, t.id]),
        H = a.useMemo(() => {
            switch (t.status) {
                case s.V.SLEEPING:
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(G, {
                                guildId: n,
                                instance: t,
                            }),
                            K &&
                                (0, r.jsx)(A, {
                                    onClick: q,
                                    disabled: null == t.gameServerPanelUrl,
                                }),
                        ],
                    });
                case s.V.OFFLINE:
                case s.V.ONLINE:
                case s.V.STARTING:
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(D, { onClick: L }),
                            K &&
                                (0, r.jsx)(A, {
                                    onClick: q,
                                    disabled: null == t.gameServerPanelUrl,
                                }),
                        ],
                    });
                case s.V.STARTUP_FAILED:
                case s.V.MISSING_STOCK:
                    return K
                        ? (0, r.jsx)(B, { onClick: q })
                        : (0, r.jsx)(D, {
                              onClick: L,
                              disabled: !0,
                          });
                case s.V.DELETED:
                    return K
                        ? (0, r.jsx)(A, {
                              onClick: q,
                              disabled: null == t.gameServerPanelUrl,
                          })
                        : (0, r.jsx)(D, {
                              onClick: L,
                              disabled: !0,
                          });
                case s.V.PROVIDER_ERRORED:
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            K
                                ? (0, r.jsx)(M, {
                                      guildId: n,
                                      instance: t,
                                  })
                                : (0, r.jsx)(D, {
                                      onClick: L,
                                      disabled: !0,
                                  }),
                            (0, r.jsx)(V, {
                                guildId: n,
                                instance: t,
                            }),
                        ],
                    });
                default:
                    return null;
            }
        }, [t, L, K, q, n]),
        X = a.useMemo(() => {
            if (null == t.gameConfig) return null;
            let e = [t.gameConfig.type, t.gameConfig.version].filter(_.lm).join(" ");
            return "" === e ? null : e;
        }, [t.gameConfig]),
        Y = a.useMemo(() => {
            switch (t.status) {
                case s.V.STARTING:
                    if (null == t.gameServerPanelUrl) return R.intl.string(w.default["1A3US2"]);
                    return null;
                case s.V.STARTUP_FAILED:
                    return R.intl.string(K ? w.default.Mdoc98 : w.default.osZiRl);
                case s.V.MISSING_STOCK:
                    return R.intl.string(K ? w.default.YCakvM : w.default.osZiRl);
                case s.V.PROVIDER_ERRORED:
                    return R.intl.string(K ? w.default.NRyCeY : w.default.osZiRl);
                default:
                    return null;
            }
        }, [t.status, t.gameServerPanelUrl, K]);
    return (0, r.jsxs)(y.Z, {
        actions: H,
        children: [
            (0, r.jsxs)("div", {
                className: k.serverDetailsContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: k.serverHeader,
                        children: [
                            (0, r.jsx)("img", {
                                src: null != F ? F : "",
                                alt: "",
                                className: k.gameImage,
                            }),
                            (0, r.jsxs)("div", {
                                className: k.serverInfo,
                                children: [
                                    (0, r.jsx)(u.Heading, {
                                        variant: "heading-md/medium",
                                        children: t.name,
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-tertiary",
                                        children: [null == W ? void 0 : W.name, X].filter(_.lm).join(" \u2022 "),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        children: (0, r.jsxs)("div", {
                            className: k.detailsGrid,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: k.detailItem,
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: R.intl.string(w.default.bDdi7n),
                                        }),
                                        (0, r.jsx)(u.Text, {
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
                                (0, r.jsxs)("div", {
                                    className: k.detailItem,
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: R.intl.string(w.default["7phwMG"]),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: k.serverIpContainer,
                                            children:
                                                null == i
                                                    ? (0, r.jsx)(u.Text, {
                                                          variant: "text-sm/medium",
                                                          children: "\u2014",
                                                      })
                                                    : Z
                                                      ? (0, r.jsxs)(r.Fragment, {
                                                            children: [
                                                                (0, r.jsx)(u.Text, {
                                                                    variant: "text-sm/medium",
                                                                    children: i,
                                                                }),
                                                                (0, r.jsx)(u.P3F, {
                                                                    className: k.copyButton,
                                                                    "aria-label": R.intl.string(R.t.OpuAlK),
                                                                    onClick: z,
                                                                    children: U
                                                                        ? (0, r.jsx)(u.dz2, { size: "sm" })
                                                                        : (0, r.jsx)(u.TIy, { size: "sm" }),
                                                                }),
                                                            ],
                                                        })
                                                      : null != t.providerType &&
                                                        (0, r.jsx)(f.Z, {
                                                            onClick: () => {
                                                                (0, P.Z)({
                                                                    provider: t.providerType,
                                                                    onAccept: () => {
                                                                        E(T.L.TAKE_ACTION), z();
                                                                    },
                                                                });
                                                            },
                                                            children: R.intl.string(w.default["f+F7H3"]),
                                                        }),
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: k.detailItem,
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: R.intl.string(w.default["n+ZX7y"]),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: k.statusContainer,
                                            children: [
                                                t.status === s.V.STARTING
                                                    ? (0, r.jsx)(u.$jN, {
                                                          type: u.RAz.SPINNING_CIRCLE_SIMPLE,
                                                          className: k.statusLoading,
                                                      })
                                                    : (0, r.jsx)("span", {
                                                          className: l()(
                                                              k.statusIndicator,
                                                              null != t.status && k[t.status],
                                                          ),
                                                      }),
                                                (0, r.jsx)(u.Text, {
                                                    variant: "text-sm/medium",
                                                    children: (function (e) {
                                                        switch (e) {
                                                            case s.V.STARTING:
                                                                return R.intl.string(w.default.SgjaXI);
                                                            case s.V.STARTUP_FAILED:
                                                                return R.intl.string(w.default["7C9Z3s"]);
                                                            case s.V.OFFLINE:
                                                                return R.intl.string(w.default["Ys/RrB"]);
                                                            case s.V.ONLINE:
                                                                return R.intl.string(w.default["60kAzo"]);
                                                            case s.V.DELETED:
                                                                return R.intl.string(w.default.Z1NZwX);
                                                            case s.V.MISSING_STOCK:
                                                                return R.intl.string(w.default["+a5G2l"]);
                                                            case s.V.SLEEPING:
                                                                return R.intl.string(w.default.y0z8ZO);
                                                            case s.V.PROVIDER_ERRORED:
                                                                return R.intl.string(w.default["6g/oji"]);
                                                            default:
                                                                return "\u2014";
                                                        }
                                                    })(t.status),
                                                }),
                                                null != Y &&
                                                    (0, r.jsx)(d.u, {
                                                        position: "top",
                                                        text: Y,
                                                        children: (0, r.jsx)(u.idN, {
                                                            className: k.statusTooltipIcon,
                                                            size: "xs",
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: k.detailItem,
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: R.intl.string(w.default.mJlz3T),
                                        }),
                                        (0, r.jsx)(u.Text, {
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
            K &&
                (0, r.jsx)("div", {
                    className: k.overflowMenu,
                    children: (0, r.jsx)(C.Z, {
                        guildId: n,
                        instance: t,
                    }),
                }),
            (0, r.jsx)("div", {
                className: k.imageBackground,
                children: (0, r.jsx)(h.b, { imageUrl: null != F ? F : "" }),
            }),
        ],
    });
}
