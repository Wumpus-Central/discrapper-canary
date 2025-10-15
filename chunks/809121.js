t.d(n, { ZP: () => A }), t(388685), t(457542);
var r = t(951288),
    a = t(647438),
    i = t(120356),
    s = t.n(i),
    o = t(660815),
    l = t(442837),
    c = t(704215),
    d = t(681715),
    u = t(481060),
    m = t(243778),
    g = t(690221),
    f = t(77498),
    x = t(572004),
    _ = t(823379),
    b = t(49012),
    v = t(639777),
    p = t(905551),
    j = t(441494),
    h = t(775146),
    y = t(941762),
    C = t(162190),
    O = t(986841),
    I = t(329871),
    N = t(110381),
    S = t(921944),
    P = t(948208),
    T = t(388032),
    w = t(500104);
function E(e) {
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
function k(e) {
    let { guildId: n, instance: t } = e,
        [i, s] = a.useState(!1),
        o = a.useCallback(() => {
            s(!0),
                (0, p.WX)(n, t.id).finally(() => {
                    s(!1);
                });
        }, [n, t.id]);
    return (0, r.jsx)(u.Button, {
        fullWidth: !0,
        text: T.intl.string(P.default.TMzy7e),
        variant: "secondary",
        loading: i,
        onClick: o,
    });
}
function Z(e) {
    return (0, r.jsx)(
        u.Button,
        E(
            {
                fullWidth: !0,
                text: T.intl.string(P.default.tkbVdX),
                variant: "secondary",
                icon: u.Gr1,
                iconPosition: "end",
            },
            e,
        ),
    );
}
function G(e) {
    return (0, r.jsx)(
        u.Button,
        E(
            {
                fullWidth: !0,
                text: T.intl.string(P.default.fQCcMz),
                variant: "primary",
            },
            e,
        ),
    );
}
function R(e) {
    return (0, r.jsx)(
        u.Button,
        E(
            {
                fullWidth: !0,
                text: T.intl.string(P.default.gWMqnJ),
                variant: "primary",
                icon: u.Gr1,
                iconPosition: "end",
            },
            e,
        ),
    );
}
function A(e) {
    let { guildId: n, instance: t } = e,
        i = (0, O.Z)(t),
        [p, E] = (0, m.US)([c.z.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        A = p !== c.z.GAME_SERVER_HOSTING_PORTKEY_TOS,
        D = (0, l.e7)([f.Z], () => f.Z.getDetectableGame(t.gameId)),
        V = a.useCallback(() => {
            A || null == t.providerType
                ? (0, I.Z)(n, t)
                : (0, N.Z)({
                      provider: t.providerType,
                      onAccept: () => {
                          E(S.L.TAKE_ACTION), (0, I.Z)(n, t);
                      },
                  });
        }, [t, A, E, n]),
        B = a.useCallback(() => {
            (0, x.JG)(null != i ? i : ""),
                (0, u.showToast)((0, u.createToast)(T.intl.string(T.t["+5kSoa"]), u.ToastType.SUCCESS));
        }, [i]),
        L = (0, C.Z)(t.gameId, "cover"),
        M = (0, v.Z)(n),
        W = a.useCallback(() => {
            var e;
            (0, b.q)({ href: null != (e = t.gameServerPanelUrl) ? e : "" });
        }, [t.gameServerPanelUrl]),
        z = a.useMemo(() => {
            switch (t.status) {
                case o.V.SLEEPING:
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(k, {
                                guildId: n,
                                instance: t,
                            }),
                            M &&
                                (0, r.jsx)(Z, {
                                    onClick: W,
                                    disabled: null == t.gameServerPanelUrl,
                                }),
                        ],
                    });
                case o.V.OFFLINE:
                case o.V.ONLINE:
                case o.V.STARTING:
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(G, { onClick: V }),
                            M &&
                                (0, r.jsx)(Z, {
                                    onClick: W,
                                    disabled: null == t.gameServerPanelUrl,
                                }),
                        ],
                    });
                case o.V.STARTUP_FAILED:
                case o.V.MISSING_STOCK:
                    return M
                        ? (0, r.jsx)(R, { onClick: W })
                        : (0, r.jsx)(G, {
                              onClick: V,
                              disabled: !0,
                          });
                case o.V.DELETED:
                    return M
                        ? (0, r.jsx)(Z, {
                              onClick: W,
                              disabled: null == t.gameServerPanelUrl,
                          })
                        : (0, r.jsx)(G, {
                              onClick: V,
                              disabled: !0,
                          });
                default:
                    return null;
            }
        }, [t, V, M, W, n]),
        U = a.useMemo(() => {
            if (null == t.gameConfig) return null;
            let e = [t.gameConfig.type, t.gameConfig.version].filter(_.lm).join(" ");
            return "" === e ? null : e;
        }, [t.gameConfig]),
        F = a.useMemo(() => {
            switch (t.status) {
                case o.V.STARTING:
                    if (null == t.gameServerPanelUrl) return T.intl.string(P.default["1A3US0"]);
                    return null;
                case o.V.STARTUP_FAILED:
                    return T.intl.string(M ? P.default["Mdoc9/"] : P.default.osZiRk);
                case o.V.MISSING_STOCK:
                    return T.intl.string(M ? P.default.YCakvL : P.default.osZiRk);
                default:
                    return null;
            }
        }, [t.status, t.gameServerPanelUrl, M]);
    return (0, r.jsxs)(h.Z, {
        actions: z,
        children: [
            (0, r.jsxs)("div", {
                className: w.serverDetailsContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: w.serverHeader,
                        children: [
                            (0, r.jsx)("img", {
                                src: null != L ? L : "",
                                alt: "",
                                className: w.gameImage,
                            }),
                            (0, r.jsxs)("div", {
                                className: w.serverInfo,
                                children: [
                                    (0, r.jsx)(u.Heading, {
                                        variant: "heading-md/medium",
                                        children: t.name,
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-tertiary",
                                        children: [null == D ? void 0 : D.name, U].filter(_.lm).join(" \u2022 "),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        children: (0, r.jsxs)("div", {
                            className: w.detailsGrid,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: w.detailItem,
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: T.intl.string(P.default.bDdi7u),
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
                                    className: w.detailItem,
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: T.intl.string(P.default["7phwMD"]),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: w.serverIpContainer,
                                            children:
                                                null == i
                                                    ? (0, r.jsx)(u.Text, {
                                                          variant: "text-sm/medium",
                                                          children: "\u2014",
                                                      })
                                                    : A
                                                      ? (0, r.jsxs)(r.Fragment, {
                                                            children: [
                                                                (0, r.jsx)(u.Text, {
                                                                    variant: "text-sm/medium",
                                                                    children: i,
                                                                }),
                                                                (0, r.jsx)(u.P3F, {
                                                                    className: w.copyButton,
                                                                    "aria-label": T.intl.string(T.t.OpuAlJ),
                                                                    onClick: B,
                                                                    children: (0, r.jsx)(u.TIy, { size: "sm" }),
                                                                }),
                                                            ],
                                                        })
                                                      : null != t.providerType &&
                                                        (0, r.jsx)(g.Z, {
                                                            onClick: () => {
                                                                (0, N.Z)({
                                                                    provider: t.providerType,
                                                                    onAccept: () => {
                                                                        E(S.L.TAKE_ACTION), B();
                                                                    },
                                                                });
                                                            },
                                                            children: T.intl.string(P.default["f+F7Hx"]),
                                                        }),
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: w.detailItem,
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: T.intl.string(P.default["n+ZX7+"]),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: w.statusContainer,
                                            children: [
                                                t.status === o.V.STARTING
                                                    ? (0, r.jsx)(u.$jN, {
                                                          type: u.RAz.SPINNING_CIRCLE_SIMPLE,
                                                          className: w.statusLoading,
                                                      })
                                                    : (0, r.jsx)("span", {
                                                          className: s()(
                                                              w.statusIndicator,
                                                              null != t.status && w[t.status],
                                                          ),
                                                      }),
                                                (0, r.jsx)(u.Text, {
                                                    variant: "text-sm/medium",
                                                    children: (function (e) {
                                                        switch (e) {
                                                            case o.V.STARTING:
                                                                return T.intl.string(P.default.SgjaXF);
                                                            case o.V.STARTUP_FAILED:
                                                                return T.intl.string(P.default["7C9Z3t"]);
                                                            case o.V.OFFLINE:
                                                                return T.intl.string(P.default["Ys/RrK"]);
                                                            case o.V.ONLINE:
                                                                return T.intl.string(P.default["60kAzs"]);
                                                            case o.V.DELETED:
                                                                return T.intl.string(P.default.Z1NZwc);
                                                            case o.V.MISSING_STOCK:
                                                                return T.intl.string(P.default["+a5G2t"]);
                                                            case o.V.SLEEPING:
                                                                return T.intl.string(P.default.y0z8ZG);
                                                            default:
                                                                return "\u2014";
                                                        }
                                                    })(t.status),
                                                }),
                                                null != F &&
                                                    (0, r.jsx)(d.u, {
                                                        position: "top",
                                                        text: F,
                                                        children: (0, r.jsx)(u.idN, {
                                                            className: w.statusTooltipIcon,
                                                            size: "xs",
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: w.detailItem,
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: T.intl.string(P.default.mJlz3d),
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
            M &&
                (0, r.jsx)("div", {
                    className: w.overflowMenu,
                    children: (0, r.jsx)(y.Z, {
                        guildId: n,
                        instance: t,
                    }),
                }),
            (0, r.jsx)("div", {
                className: w.imageBackground,
                children: (0, r.jsx)(j.b, { imageUrl: null != L ? L : "" }),
            }),
        ],
    });
}
