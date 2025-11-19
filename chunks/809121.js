t.d(n, { ZP: () => W }), t(388685), t(457542);
var r = t(54381),
    a = t(473749),
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
    C = t(775146),
    y = t(941762),
    O = t(587065),
    I = t(162190),
    S = t(986841),
    N = t(47695),
    P = t(329871),
    E = t(110381),
    T = t(921944),
    w = t(719662),
    Z = t(388032),
    R = t(395161);
function k(e) {
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
        text: Z.intl.string(w.default.TMzy7d),
        variant: "secondary",
        loading: i,
        onClick: s,
    });
}
function A(e) {
    return (0, r.jsx)(
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
    return (0, r.jsx)(
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
    return (0, r.jsx)(
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
function B(e) {
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
        text: Z.intl.string(w.default.BLEx3k),
        variant: "secondary",
        loading: t,
        onClick: l,
    });
}
function V(e) {
    let { instance: n } = e,
        t = (0, N.Z)(n.providerType, n.gameServerPanelUrl);
    return (0, r.jsx)(u.Button, {
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
        i = (0, S.Z)(t),
        [p, k] = (0, g.US)([c.z.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        W = p !== c.z.GAME_SERVER_HOSTING_PORTKEY_TOS,
        L = (0, o.e7)([x.Z], () => x.Z.getDetectableGame(t.gameId)),
        U = (0, N.Z)(t.providerType, t.gameServerPanelUrl),
        z = a.useCallback(() => {
            var e;
            (0, j.wz)(n, t.gameId, null != (e = null == L ? void 0 : L.name) ? e : "", t.id),
                W || null == t.providerType
                    ? (0, P.Z)(n, t)
                    : (0, E.Z)({
                          provider: t.providerType,
                          onAccept: () => {
                              k(T.L.TAKE_ACTION), (0, P.Z)(n, t);
                          },
                      });
        }, [t, W, k, n, null == L ? void 0 : L.name]),
        { handleCopyServerIp: F, animateCopyIcon: K } = (0, O.Z)(n, t.id, m.Z.GAME_SERVER_GAME, null != i ? i : ""),
        q = (0, I.Z)(t.gameId, "cover"),
        H = (0, b.Z)(n),
        X = a.useCallback(() => {
            var e;
            (0, j.$M)(n, t.id), (0, v.q)({ href: null != (e = t.gameServerPanelUrl) ? e : "" });
        }, [t.gameServerPanelUrl, n, t.id]),
        Y = a.useMemo(() => {
            switch (t.status) {
                case s.V.SLEEPING:
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(G, {
                                guildId: n,
                                instance: t,
                            }),
                            H &&
                                (0, r.jsx)(A, {
                                    onClick: X,
                                    disabled: null == t.gameServerPanelUrl,
                                }),
                        ],
                    });
                case s.V.OFFLINE:
                case s.V.ONLINE:
                case s.V.STARTING:
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(D, { onClick: z }),
                            H &&
                                (0, r.jsx)(A, {
                                    onClick: X,
                                    disabled: null == t.gameServerPanelUrl,
                                }),
                        ],
                    });
                case s.V.STARTUP_FAILED:
                case s.V.MISSING_STOCK:
                    return H
                        ? (0, r.jsx)(M, { onClick: X })
                        : (0, r.jsx)(D, {
                              onClick: z,
                              disabled: !0,
                          });
                case s.V.DELETED:
                    return H
                        ? (0, r.jsx)(A, {
                              onClick: X,
                              disabled: null == t.gameServerPanelUrl,
                          })
                        : (0, r.jsx)(D, {
                              onClick: z,
                              disabled: !0,
                          });
                case s.V.PROVIDER_ERRORED:
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            H && null != U
                                ? (0, r.jsx)(V, {
                                      guildId: n,
                                      instance: t,
                                  })
                                : (0, r.jsx)(D, {
                                      onClick: z,
                                      disabled: !0,
                                  }),
                            (0, r.jsx)(B, {
                                guildId: n,
                                instance: t,
                            }),
                        ],
                    });
                default:
                    return null;
            }
        }, [t, z, H, X, n, U]),
        J = a.useMemo(() => {
            if (null == t.gameConfig) return null;
            let e = [t.gameConfig.type, t.gameConfig.version].filter(_.lm).join(" ");
            return "" === e ? null : e;
        }, [t.gameConfig]),
        Q = a.useMemo(() => {
            switch (t.status) {
                case s.V.STARTING:
                    if (null == t.gameServerPanelUrl) return Z.intl.string(w.default["1A3US2"]);
                    return null;
                case s.V.STARTUP_FAILED:
                    return Z.intl.string(H ? w.default.Mdoc98 : w.default.osZiRl);
                case s.V.MISSING_STOCK:
                    return Z.intl.string(H ? w.default.YCakvM : w.default.osZiRl);
                case s.V.PROVIDER_ERRORED:
                    return Z.intl.string(H ? w.default.NRyCeY : w.default.osZiRl);
                default:
                    return null;
            }
        }, [t.status, t.gameServerPanelUrl, H]);
    return (0, r.jsxs)(C.Z, {
        actions: Y,
        children: [
            (0, r.jsxs)("div", {
                className: R.serverDetailsContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: R.serverHeader,
                        children: [
                            (0, r.jsx)("img", {
                                src: null != q ? q : "",
                                alt: "",
                                className: R.gameImage,
                            }),
                            (0, r.jsxs)("div", {
                                className: R.serverInfo,
                                children: [
                                    (0, r.jsx)(u.Heading, {
                                        variant: "heading-md/medium",
                                        children: t.name,
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-tertiary",
                                        children: [null == L ? void 0 : L.name, J].filter(_.lm).join(" \u2022 "),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        children: (0, r.jsxs)("div", {
                            className: R.detailsGrid,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: R.detailItem,
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: Z.intl.string(w.default.bDdi7n),
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
                                    className: R.detailItem,
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: Z.intl.string(w.default["7phwMG"]),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: R.serverIpContainer,
                                            children:
                                                null == i
                                                    ? (0, r.jsx)(u.Text, {
                                                          variant: "text-sm/medium",
                                                          children: "\u2014",
                                                      })
                                                    : W
                                                      ? (0, r.jsxs)(r.Fragment, {
                                                            children: [
                                                                (0, r.jsx)(u.Text, {
                                                                    variant: "text-sm/medium",
                                                                    children: i,
                                                                }),
                                                                (0, r.jsx)(u.P3F, {
                                                                    className: R.copyButton,
                                                                    "aria-label": Z.intl.string(Z.t.OpuAlK),
                                                                    onClick: F,
                                                                    children: K
                                                                        ? (0, r.jsx)(u.dz2, { size: "sm" })
                                                                        : (0, r.jsx)(u.TIy, { size: "sm" }),
                                                                }),
                                                            ],
                                                        })
                                                      : null != t.providerType &&
                                                        (0, r.jsx)(f.Z, {
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
                                (0, r.jsxs)("div", {
                                    className: R.detailItem,
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: Z.intl.string(w.default["n+ZX7y"]),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: R.statusContainer,
                                            children: [
                                                t.status === s.V.STARTING
                                                    ? (0, r.jsx)(u.$jN, {
                                                          type: u.RAz.SPINNING_CIRCLE_SIMPLE,
                                                          className: R.statusLoading,
                                                      })
                                                    : (0, r.jsx)("span", {
                                                          className: l()(
                                                              R.statusIndicator,
                                                              null != t.status && R[t.status],
                                                          ),
                                                      }),
                                                (0, r.jsx)(u.Text, {
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
                                                null != Q &&
                                                    (0, r.jsx)(d.u, {
                                                        position: "top",
                                                        text: Q,
                                                        children: (0, r.jsx)(u.idN, {
                                                            className: R.statusTooltipIcon,
                                                            size: "xs",
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: R.detailItem,
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: Z.intl.string(w.default.mJlz3T),
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
            H &&
                (0, r.jsx)("div", {
                    className: R.overflowMenu,
                    children: (0, r.jsx)(y.Z, {
                        guildId: n,
                        instance: t,
                    }),
                }),
            (0, r.jsx)("div", {
                className: R.imageBackground,
                children: (0, r.jsx)(h.b, { imageUrl: null != q ? q : "" }),
            }),
        ],
    });
}
