t.d(n, { ZP: () => B }), t(388685), t(457542);
var r = t(951288),
    a = t(647438),
    i = t(120356),
    l = t.n(i),
    s = t(660815),
    o = t(442837),
    c = t(704215),
    d = t(681715),
    u = t(481060),
    m = t(243778),
    g = t(690221),
    f = t(77498),
    x = t(823379),
    _ = t(49012),
    v = t(639777),
    b = t(905551),
    j = t(441494),
    p = t(775146),
    h = t(941762),
    y = t(587065),
    C = t(162190),
    O = t(986841),
    I = t(329871),
    N = t(110381),
    S = t(619733),
    P = t(921944),
    T = t(45765),
    E = t(388032),
    w = t(395161);
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
function R(e) {
    let { guildId: n, instance: t } = e,
        [i, l] = a.useState(!1),
        s = a.useCallback(() => {
            l(!0),
                (0, b.WX)(n, t.id).finally(() => {
                    l(!1);
                });
        }, [n, t.id]);
    return (0, r.jsx)(u.Button, {
        fullWidth: !0,
        text: E.intl.string(T.default.TMzy7e),
        variant: "secondary",
        loading: i,
        onClick: s,
    });
}
function Z(e) {
    return (0, r.jsx)(
        u.Button,
        k(
            {
                fullWidth: !0,
                text: E.intl.string(T.default.tkbVdX),
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
        k(
            {
                fullWidth: !0,
                text: E.intl.string(T.default.fQCcMz),
                variant: "primary",
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
                text: E.intl.string(T.default.gWMqnJ),
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
                (0, b.mF)(n).finally(() => {
                    i(!1);
                });
        }, [n]);
    return (0, r.jsx)(u.Button, {
        fullWidth: !0,
        text: E.intl.string(T.default.BLEx3t),
        variant: "secondary",
        loading: t,
        onClick: l,
    });
}
function A(e) {
    let { instance: n } = e;
    return (0, r.jsx)(u.Button, {
        fullWidth: !0,
        text: E.intl.string(T.default.bBkeMj),
        variant: "secondary",
        onClick: () => {
            (0, _.q)({ href: S.uz[n.providerType] });
        },
    });
}
function B(e) {
    let { guildId: n, instance: t } = e,
        i = (0, O.Z)(t),
        [b, S] = (0, m.US)([c.z.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        k = b !== c.z.GAME_SERVER_HOSTING_PORTKEY_TOS,
        B = (0, o.e7)([f.Z], () => f.Z.getDetectableGame(t.gameId)),
        M = a.useCallback(() => {
            k || null == t.providerType
                ? (0, I.Z)(n, t)
                : (0, N.Z)({
                      provider: t.providerType,
                      onAccept: () => {
                          S(P.L.TAKE_ACTION), (0, I.Z)(n, t);
                      },
                  });
        }, [t, k, S, n]),
        { handleCopyServerIp: W, animateCopyIcon: L } = (0, y.Z)(null != i ? i : ""),
        z = (0, C.Z)(t.gameId, "cover"),
        U = (0, v.Z)(n),
        F = a.useCallback(() => {
            var e;
            (0, _.q)({ href: null != (e = t.gameServerPanelUrl) ? e : "" });
        }, [t.gameServerPanelUrl]),
        K = a.useMemo(() => {
            switch (t.status) {
                case s.V.SLEEPING:
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(R, {
                                guildId: n,
                                instance: t,
                            }),
                            U &&
                                (0, r.jsx)(Z, {
                                    onClick: F,
                                    disabled: null == t.gameServerPanelUrl,
                                }),
                        ],
                    });
                case s.V.OFFLINE:
                case s.V.ONLINE:
                case s.V.STARTING:
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(G, { onClick: M }),
                            U &&
                                (0, r.jsx)(Z, {
                                    onClick: F,
                                    disabled: null == t.gameServerPanelUrl,
                                }),
                        ],
                    });
                case s.V.STARTUP_FAILED:
                case s.V.MISSING_STOCK:
                    return U
                        ? (0, r.jsx)(D, { onClick: F })
                        : (0, r.jsx)(G, {
                              onClick: M,
                              disabled: !0,
                          });
                case s.V.DELETED:
                    return U
                        ? (0, r.jsx)(Z, {
                              onClick: F,
                              disabled: null == t.gameServerPanelUrl,
                          })
                        : (0, r.jsx)(G, {
                              onClick: M,
                              disabled: !0,
                          });
                case s.V.PROVIDER_ERRORED:
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            U
                                ? (0, r.jsx)(A, {
                                      guildId: n,
                                      instance: t,
                                  })
                                : (0, r.jsx)(G, {
                                      onClick: M,
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
        }, [t, M, U, F, n]),
        q = a.useMemo(() => {
            if (null == t.gameConfig) return null;
            let e = [t.gameConfig.type, t.gameConfig.version].filter(x.lm).join(" ");
            return "" === e ? null : e;
        }, [t.gameConfig]),
        H = a.useMemo(() => {
            switch (t.status) {
                case s.V.STARTING:
                    if (null == t.gameServerPanelUrl) return E.intl.string(T.default["1A3US0"]);
                    return null;
                case s.V.STARTUP_FAILED:
                    return E.intl.string(U ? T.default["Mdoc9/"] : T.default.osZiRk);
                case s.V.MISSING_STOCK:
                    return E.intl.string(U ? T.default.YCakvL : T.default.osZiRk);
                case s.V.PROVIDER_ERRORED:
                    return E.intl.string(U ? T.default.NRyCeX : T.default.osZiRk);
                default:
                    return null;
            }
        }, [t.status, t.gameServerPanelUrl, U]);
    return (0, r.jsxs)(p.Z, {
        actions: K,
        children: [
            (0, r.jsxs)("div", {
                className: w.serverDetailsContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: w.serverHeader,
                        children: [
                            (0, r.jsx)("img", {
                                src: null != z ? z : "",
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
                                        children: [null == B ? void 0 : B.name, q].filter(x.lm).join(" \u2022 "),
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
                                            children: E.intl.string(T.default.bDdi7u),
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
                                            children: E.intl.string(T.default["7phwMD"]),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: w.serverIpContainer,
                                            children:
                                                null == i
                                                    ? (0, r.jsx)(u.Text, {
                                                          variant: "text-sm/medium",
                                                          children: "\u2014",
                                                      })
                                                    : k
                                                      ? (0, r.jsxs)(r.Fragment, {
                                                            children: [
                                                                (0, r.jsx)(u.Text, {
                                                                    variant: "text-sm/medium",
                                                                    children: i,
                                                                }),
                                                                (0, r.jsx)(u.P3F, {
                                                                    className: w.copyButton,
                                                                    "aria-label": E.intl.string(E.t.OpuAlJ),
                                                                    onClick: W,
                                                                    children: L
                                                                        ? (0, r.jsx)(u.dz2, { size: "sm" })
                                                                        : (0, r.jsx)(u.TIy, { size: "sm" }),
                                                                }),
                                                            ],
                                                        })
                                                      : null != t.providerType &&
                                                        (0, r.jsx)(g.Z, {
                                                            onClick: () => {
                                                                (0, N.Z)({
                                                                    provider: t.providerType,
                                                                    onAccept: () => {
                                                                        S(P.L.TAKE_ACTION), W();
                                                                    },
                                                                });
                                                            },
                                                            children: E.intl.string(T.default["f+F7Hx"]),
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
                                            children: E.intl.string(T.default["n+ZX7+"]),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: w.statusContainer,
                                            children: [
                                                t.status === s.V.STARTING
                                                    ? (0, r.jsx)(u.$jN, {
                                                          type: u.RAz.SPINNING_CIRCLE_SIMPLE,
                                                          className: w.statusLoading,
                                                      })
                                                    : (0, r.jsx)("span", {
                                                          className: l()(
                                                              w.statusIndicator,
                                                              null != t.status && w[t.status],
                                                          ),
                                                      }),
                                                (0, r.jsx)(u.Text, {
                                                    variant: "text-sm/medium",
                                                    children: (function (e) {
                                                        switch (e) {
                                                            case s.V.STARTING:
                                                                return E.intl.string(T.default.SgjaXF);
                                                            case s.V.STARTUP_FAILED:
                                                                return E.intl.string(T.default["7C9Z3t"]);
                                                            case s.V.OFFLINE:
                                                                return E.intl.string(T.default["Ys/RrK"]);
                                                            case s.V.ONLINE:
                                                                return E.intl.string(T.default["60kAzs"]);
                                                            case s.V.DELETED:
                                                                return E.intl.string(T.default.Z1NZwc);
                                                            case s.V.MISSING_STOCK:
                                                                return E.intl.string(T.default["+a5G2t"]);
                                                            case s.V.SLEEPING:
                                                                return E.intl.string(T.default.y0z8ZG);
                                                            case s.V.PROVIDER_ERRORED:
                                                                return E.intl.string(T.default["6g/ojo"]);
                                                            default:
                                                                return "\u2014";
                                                        }
                                                    })(t.status),
                                                }),
                                                null != H &&
                                                    (0, r.jsx)(d.u, {
                                                        position: "top",
                                                        text: H,
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
                                            children: E.intl.string(T.default.mJlz3d),
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
            U &&
                (0, r.jsx)("div", {
                    className: w.overflowMenu,
                    children: (0, r.jsx)(h.Z, {
                        guildId: n,
                        instance: t,
                    }),
                }),
            (0, r.jsx)("div", {
                className: w.imageBackground,
                children: (0, r.jsx)(j.b, { imageUrl: null != z ? z : "" }),
            }),
        ],
    });
}
