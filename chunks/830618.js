n.d(t, { A: () => eN });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(761508),
    u = n(534514),
    d = n(915089),
    c = n(763827),
    h = n(977997),
    g = n(572487),
    f = n(798286),
    A = n(83942),
    E = n(259374),
    I = n(459838),
    p = n(691540),
    S = n(857250),
    m = n(97483),
    C = n(194261),
    _ = n(661531),
    N = n(349288),
    T = n(811893),
    v = n(624479),
    M = n(233545),
    y = n(229659),
    D = n(885386),
    R = n(761853),
    x = n(174459),
    O = n(957565),
    U = n(975571),
    L = n(917592),
    w = n(652215),
    P = n(731854),
    G = n(375708),
    F = n(666153);
let b = () => {
    R.Ay.getMediaEngine().once(I.bg.ConnectionStats, (e) => {
        let t = JSON.stringify(
            Object.values(P.x)
                .map((t) => {
                    let n = e
                        .filter((e) => {
                            let { connection: n } = e;
                            return n.context === t;
                        })
                        .map((e, n) => {
                            let i = e.stats;
                            return (i.context = t), (i.index = n), i;
                        });
                    for (let e of n) e?.transport?.localAddress != null && (e.transport.localAddress = "(redacted)");
                    return n;
                })
                .filter((e) => e.length > 0),
            null,
            2,
        );
        (0, O.C)(t, () => (0, p.P0)((0, S.o)(G.intl.string(G.t.t5VZ88), m.Ck.SUCCESS)));
    });
};
function j(e) {
    (0, l.useEffect)(() => {
        x.default.track(w.HAw.OPEN_POPOUT, { type: "RTC Connection" });
    }, []);
    let t = (0, l.useCallback)(() => {
            let { closePopout: t } = e;
            null != t && t(), M.ho();
        }, [e]),
        n = (0, l.useCallback)(() => {
            let { hostname: t, averagePing: n, lastPing: s, outboundLossRate: a } = e,
                o = D.Q_.getSetting();
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    o &&
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)("div", {
                                    className: F.o0,
                                    children: (0, i.jsx)(y.A, { dataPoints: e.pings, width: 258, height: 80 }),
                                }),
                                (0, i.jsx)("div", {
                                    className: F.xB,
                                    children: (0, i.jsx)("strong", { children: L.A.getShortHostname(t) }),
                                }),
                            ],
                        }),
                    (0, i.jsx)("div", {
                        className: F.xB,
                        children: G.intl.format(G.t["X58/lN"], { averagePing: n.toFixed(0) }),
                    }),
                    null != s
                        ? (0, i.jsx)("div", {
                              className: F.xB,
                              children: G.intl.format(G.t["6iv2TF"], { lastPing: s.toFixed(0) }),
                          })
                        : null,
                    null != a
                        ? (0, i.jsx)("div", {
                              className: F.xB,
                              children: G.intl.format(G.t["VIBJM+"], { outboundLossRate: a.toFixed(1) }),
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: r()(F.xB, F.xJ),
                        children: [
                            null == a ? G.intl.formatToPlainString(G.t.vggaMt, { badPing: 250 }) : null,
                            null != a
                                ? G.intl.formatToPlainString(G.t["3pFz1P"], { badPing: 250, badLossRate: 10 })
                                : null,
                        ],
                    }),
                ],
            });
        }, [e]),
        { connectionState: s, connectionTypeText: a } = e,
        o = D.Q_.getSetting(),
        u = {
            [w.S7L.AWAITING_ENDPOINT]: G.intl.format(G.t.Eu2vUR, { url: w.qF7.STATUS }),
            [w.S7L.CONNECTING]: G.intl.string(G.t["y+E8aD"]),
            [w.S7L.AUTHENTICATING]: G.intl.string(G.t["5lGIZH"]),
            [w.S7L.DISCONNECTED]: G.intl.string(G.t.fOX25I),
            [w.S7L.RTC_CONNECTING]: G.intl.string(G.t.b5Ubd5),
            [w.S7L.ICE_CHECKING]: G.intl.format(G.t.SyoYUb, { url: U.A.getArticleURL(w.MVz.VOICE_CONNECTION_ERRORS) }),
            [w.S7L.DTLS_CONNECTING]: G.intl.format(G.t.SyoYUb, {
                url: U.A.getArticleURL(w.MVz.VOICE_CONNECTION_ERRORS),
            }),
            [w.S7L.RTC_CONNECTED]: n,
            [w.S7L.NO_ROUTE]: G.intl.format(G.t["2tgQnk"], { url: U.A.getArticleURL(w.MVz.VOICE_CONNECTION_ERRORS) }),
            [w.S7L.RTC_DISCONNECTED]: G.intl.string(G.t.fOX25I),
        }[s];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            "function" == typeof u ? u() : (0, i.jsx)("p", { className: r()(F.xB, F.xJ), children: u }),
            (0, i.jsx)("hr", { className: F.me }),
            (0, i.jsxs)("div", {
                className: F.Vf,
                children: [
                    (0, i.jsxs)("span", {
                        className: r()(F.uO, F.ro),
                        children: [
                            (0, i.jsx)(C.X, {
                                size: "xxs",
                                color: _.A.colors.TEXT_FEEDBACK_POSITIVE.css,
                                className: F.__invalid_icon,
                            }),
                            a,
                        ],
                    }),
                    o &&
                        R.Ay.supports(P.O5.DIAGNOSTICS) &&
                        !__OVERLAY__ &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(N.Anchor, {
                                    className: r()(F.Ce, F.ro),
                                    onClick: t,
                                    children: [
                                        G.intl.string(G.t.KBoWg9),
                                        (0, i.jsx)(T.t, {
                                            size: "xxs",
                                            color: "currentColor",
                                            className: F.__invalid_icon,
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)(N.Anchor, {
                                    className: r()(F.d3, F.ro),
                                    onClick: b,
                                    title: "Copy to clipboard",
                                    children: [
                                        G.intl.string(G.t["XEb+Sj"]),
                                        (0, i.jsx)(v.T, {
                                            size: "xxs",
                                            color: "currentColor",
                                            className: F.__invalid_icon,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    !o &&
                        !__OVERLAY__ &&
                        (0, i.jsx)(N.Anchor, {
                            className: F.Ce,
                            href: U.A.getArticleURL(w.MVz.VOICE_VIDEO_TROUBLESHOOTING),
                            children: G.intl.string(G.t.hvVgAZ),
                        }),
                ],
            }),
        ],
    });
}
var V = n(834730),
    k = n(814278),
    H = n(998759),
    B = n(289873),
    Y = n(500020);
function W(e) {
    let { chunks: t, columns: n, className: s } = e,
        a = l.useMemo(() => ({ "--secure-frames-columns": n }), [n]);
    return null == t
        ? (0, i.jsx)("div", { className: Y.Lq, children: (0, i.jsx)(B.y, {}) })
        : (0, i.jsx)("div", {
              style: a,
              className: r()(Y.aY, s),
              children: t.map((e, t) =>
                  (0, i.jsx)(
                      "div",
                      {
                          className: r()(Y.iv, { [Y.yF]: t > n - 1 }),
                          children: (0, i.jsx)(V.E, {
                              className: Y.ph,
                              variant: "code",
                              color: "text-default",
                              children: e,
                          }),
                      },
                      `${e}-${t}`,
                  ),
              ),
          });
}
var z = n(930840),
    Z = n(603266),
    J = n(555273);
function $(e) {
    let { channelId: t } = e,
        n = (0, a.bG)([c.A], () => c.A.getSecureFramesState()?.epochAuthenticator),
        s = (0, H.z)({ fingerprintBase64: n, chunkSize: 5, desiredLength: 30 }),
        r = l.useCallback(() => {
            (0, f.k0)({ channelId: t });
        }, [t]);
    return (0, i.jsxs)("div", {
        className: J.kL,
        children: [
            (0, i.jsxs)("div", {
                className: J.Tc,
                children: [
                    (0, i.jsx)(C.X, { size: "xxs", color: _.A.colors.TEXT_FEEDBACK_POSITIVE }),
                    (0, i.jsx)(V.E, {
                        variant: "text-xs/medium",
                        color: "text-feedback-positive",
                        children: G.intl.string(G.t["3BogKe"]),
                    }),
                ],
            }),
            (0, i.jsx)(V.E, { variant: "text-xs/normal", color: "text-subtle", children: G.intl.string(G.t.B9JNsl) }),
            (0, i.jsxs)("div", {
                className: J.wx,
                children: [
                    (0, i.jsx)(u.D, {
                        variant: "text-sm/bold",
                        color: "text-strong",
                        children: G.intl.string(G.t.cTQI5t),
                    }),
                    null != s &&
                        (0, i.jsx)(z.c, { chunks: s, color: _.A.colors.INTERACTIVE_TEXT_DEFAULT.css, onCopy: r }),
                ],
            }),
            (0, i.jsx)(W, { className: J.aY, chunks: s, columns: 3 }),
            (0, i.jsx)(V.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: G.intl.format(G.t.wKxADe, { helpArticle: (0, k.aW)() }),
            }),
        ],
    });
}
var K = n(821609),
    X = n(92446),
    Q = n(939249),
    q = n(628284),
    ee = n(359778),
    et = n(394952),
    en = n(291614);
let ei = function (e) {
    let [t, n] = (0, l.useState)(!1);
    (0, l.useEffect)(() => {
        x.default.track(w.HAw.OPEN_POPOUT, { type: "RTC Connection" });
    }, []);
    let s = (0, l.useCallback)(() => {
            let { closePopout: t } = e;
            null != t && t(), M.ho();
        }, [e]),
        r = (0, l.useCallback)(() => {
            var e;
            (e = () => {
                n(!0), setTimeout(() => n(!1), 2e3);
            }),
                R.Ay.getMediaEngine().once(I.bg.ConnectionStats, (t) => {
                    let n = JSON.stringify(
                        Object.values(P.x)
                            .map((e) => {
                                let n = t
                                    .filter((t) => {
                                        let { connection: n } = t;
                                        return n.context === e;
                                    })
                                    .map((t, n) => {
                                        let i = t.stats;
                                        return (i.context = e), (i.index = n), i;
                                    });
                                for (let e of n)
                                    e?.transport?.localAddress != null && (e.transport.localAddress = "(redacted)");
                                return n;
                            })
                            .filter((e) => e.length > 0),
                        null,
                        2,
                    );
                    (0, O.C)(n, e);
                });
        }, []),
        a =
            null != e.outboundLossRate
                ? G.intl.formatToPlainString(G.t["3pFz1P"], { badPing: 250, badLossRate: 10 })
                : G.intl.formatToPlainString(G.t.vggaMt, { badPing: 250 }),
        o = (0, l.useCallback)(() => {
            let { hostname: t, averagePing: n, lastPing: s, outboundLossRate: r } = e,
                o = D.Q_.getSetting();
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    o &&
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)("div", {
                                    className: et.o0,
                                    children: (0, i.jsx)(y.A, { dataPoints: e.pings, width: 258, height: 80 }),
                                }),
                                (0, i.jsx)(V.E, {
                                    variant: "text-sm/bold",
                                    color: "text-default",
                                    className: et.VU,
                                    children: L.A.getShortHostname(t),
                                }),
                            ],
                        }),
                    (0, i.jsx)("div", {
                        className: et.ew,
                        children: (0, i.jsxs)("div", {
                            className: et.zS,
                            children: [
                                (0, i.jsx)(V.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: et.VU,
                                    children: G.intl.format(G.t["X58/lN"], { averagePing: n.toFixed(0) }),
                                }),
                                null != s
                                    ? (0, i.jsx)(V.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          className: et.VU,
                                          children: G.intl.format(G.t["6iv2TF"], { lastPing: s.toFixed(0) }),
                                      })
                                    : null,
                                null != r
                                    ? (0, i.jsx)(V.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          className: et.VU,
                                          children: G.intl.format(G.t["VIBJM+"], { outboundLossRate: r.toFixed(1) }),
                                      })
                                    : null,
                            ],
                        }),
                    }),
                    (0, i.jsx)(V.E, { variant: "text-xs/normal", color: "text-muted", children: a }),
                ],
            });
        }, [e, a]),
        { connectionState: u, connectionTypeText: d } = e,
        c = D.Q_.getSetting(),
        h = {
            [w.S7L.AWAITING_ENDPOINT]: G.intl.format(G.t.Eu2vUR, { url: w.qF7.STATUS }),
            [w.S7L.CONNECTING]: G.intl.string(G.t["y+E8aD"]),
            [w.S7L.AUTHENTICATING]: G.intl.string(G.t["5lGIZH"]),
            [w.S7L.DISCONNECTED]: G.intl.string(G.t.fOX25I),
            [w.S7L.RTC_CONNECTING]: G.intl.string(G.t.b5Ubd5),
            [w.S7L.ICE_CHECKING]: G.intl.format(G.t.SyoYUb, { url: U.A.getArticleURL(w.MVz.VOICE_CONNECTION_ERRORS) }),
            [w.S7L.DTLS_CONNECTING]: G.intl.format(G.t.SyoYUb, {
                url: U.A.getArticleURL(w.MVz.VOICE_CONNECTION_ERRORS),
            }),
            [w.S7L.RTC_CONNECTED]: o,
            [w.S7L.NO_ROUTE]: G.intl.format(G.t["2tgQnk"], { url: U.A.getArticleURL(w.MVz.VOICE_CONNECTION_ERRORS) }),
            [w.S7L.RTC_DISCONNECTED]: G.intl.string(G.t.fOX25I),
        }[u];
    return (0, i.jsxs)("div", {
        className: et.kL,
        children: [
            "function" == typeof h
                ? h()
                : (0, i.jsx)(V.E, { tag: "p", variant: "text-sm/normal", color: "text-muted", children: h }),
            c &&
                R.Ay.supports(P.O5.DIAGNOSTICS) &&
                !__OVERLAY__ &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("hr", { className: en.me }),
                        (0, i.jsxs)("div", {
                            className: et.pw,
                            children: [
                                (0, i.jsx)(K.$, {
                                    icon: X.Q,
                                    text: G.intl.string(G.t.KBoWg9),
                                    variant: "secondary",
                                    size: "sm",
                                    fullWidth: !0,
                                    onClick: s,
                                }),
                                (0, i.jsxs)(Q.D, {
                                    className: `${en.n2} ${et.n2}`,
                                    onClick: r,
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: t ? en.Dx : en.t6,
                                            children: (0, i.jsx)(K.$, {
                                                icon: v.T,
                                                text: G.intl.string(G.t["XEb+Sj"]),
                                                variant: "secondary",
                                                size: "sm",
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, i.jsx)("div", {
                                            className: t ? en.t6 : en.Dx,
                                            children: (0, i.jsx)(K.$, {
                                                icon: q.y,
                                                text: G.intl.string(G.t.t5VZ88),
                                                variant: "secondary",
                                                size: "sm",
                                                fullWidth: !0,
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            (0, i.jsxs)(ee.Z, {
                type: ee.Z.Types.SUCCESS,
                className: en.g4,
                children: [
                    (0, i.jsx)(C.X, { size: "xxs", color: _.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                    (0, i.jsx)(V.E, { variant: "text-xs/medium", color: "text-feedback-positive", children: d }),
                ],
            }),
            !c &&
                !__OVERLAY__ &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("hr", { className: en.me }),
                        (0, i.jsx)(N.Anchor, {
                            className: et.CU,
                            href: U.A.getArticleURL(w.MVz.VOICE_VIDEO_TROUBLESHOOTING),
                            children: G.intl.string(G.t.hvVgAZ),
                        }),
                    ],
                }),
        ],
    });
};
var el = n(75811),
    es = n(209426);
function er(e) {
    let { channelId: t } = e,
        n = (0, a.bG)([c.A], () => c.A.getSecureFramesState()?.epochAuthenticator),
        s = (0, H.z)({ fingerprintBase64: n, chunkSize: 5, desiredLength: 30 }),
        [r, o] = l.useState(!1),
        d = l.useMemo(() => s?.join(" "), [s]),
        h = l.useCallback(() => {
            null != d &&
                (0, O.C)(d, () => {
                    o(!0), (0, f.k0)({ channelId: t }), setTimeout(() => o(!1), 2e3);
                });
        }, [t, d]);
    return (0, i.jsxs)("div", {
        className: es.kL,
        children: [
            (0, i.jsx)(u.D, { variant: "text-sm/bold", color: "text-strong", children: G.intl.string(G.t.cTQI5t) }),
            (0, i.jsx)(V.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: G.intl.format(G.t.wKxADe, { helpArticle: (0, k.aW)() }),
            }),
            (0, i.jsx)("div", {
                className: es.on,
                children: (0, i.jsx)(el.j, { chunks: s, columns: 3, className: es.lu }),
            }),
            null != s &&
                (0, i.jsxs)(Q.D, {
                    className: en.n2,
                    onClick: h,
                    children: [
                        (0, i.jsx)("div", {
                            className: r ? en.Dx : en.t6,
                            children: (0, i.jsx)(K.$, {
                                icon: v.T,
                                text: G.intl.string(G.t.OpuAlK),
                                variant: "secondary",
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: r ? en.t6 : en.Dx,
                            children: (0, i.jsx)(K.$, {
                                icon: q.y,
                                text: G.intl.string(G.t.t5VZ88),
                                variant: "secondary",
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            (0, i.jsx)("hr", { className: en.me }),
            (0, i.jsx)(V.E, { variant: "text-xs/normal", color: "text-subtle", children: G.intl.string(G.t.B9JNsl) }),
            (0, i.jsxs)(ee.Z, {
                type: ee.Z.Types.SUCCESS,
                className: en.g4,
                children: [
                    (0, i.jsx)(C.X, { size: "xxs", color: _.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                    (0, i.jsx)(V.E, {
                        variant: "text-xs/medium",
                        color: "text-feedback-positive",
                        children: G.intl.string(G.t["3BogKe"]),
                    }),
                ],
            }),
        ],
    });
}
let ea = (0, n(240921).Ay)({
    name: "2026-04-rtc-voice-details-refresh",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var eo = n(172115),
    eu = n(9934),
    ed = n(824078);
function ec() {
    return (0, a.cf)([c.A], () => ({
        connectionState: c.A.getState(),
        hostname: c.A.getHostname(),
        averagePing: c.A.getAveragePing(),
        lastPing: c.A.getLastPing(),
        outboundLossRate: c.A.getOutboundLossRate(),
        pings: c.A.getPings(),
    }));
}
function eh(e) {
    return (0, a.cf)([g.A], () => ({
        connectionState: g.A.getConnectionState(e),
        hostname: g.A.getHostname(e),
        averagePing: g.A.getAveragePing(e),
        lastPing: g.A.getLastPing(e),
        pings: g.A.getPings(),
        outboundLossRate: g.A.getOutboundLossRate(e),
    }));
}
function eg(e) {
    let { lobbyId: t, connectionTypeText: n, closePopout: l } = e,
        s = eh(t);
    return (0, i.jsx)(ei, { ...s, closePopout: l, connectionTypeText: n });
}
function ef(e) {
    let { lobbyId: t, connectionTypeText: n, closePopout: l } = e,
        s = eh(t);
    return (0, i.jsx)(j, { ...s, closePopout: l, connectionTypeText: n });
}
function eA(e) {
    let { closePopout: t, connectionTypeText: n } = e,
        l = ec();
    return (0, i.jsx)(ei, { ...l, closePopout: t, connectionTypeText: n });
}
function eE(e) {
    let { closePopout: t, connectionTypeText: n } = e,
        l = ec();
    return (0, i.jsx)(j, { ...l, closePopout: t, connectionTypeText: n });
}
function eI(e) {
    let { channelId: t, isOverlay: n, lobbyId: l, closePopout: s } = e,
        r = (0, E.k)({ channelId: t }) ? G.intl.string(G.t["3BogKe"]) : G.intl.string(G.t.ETIVvg);
    return n
        ? (0, i.jsx)(eg, { lobbyId: l, closePopout: s, connectionTypeText: r })
        : (0, i.jsx)(eA, { closePopout: s, connectionTypeText: r });
}
function ep(e) {
    let { channelId: t, isOverlay: n, lobbyId: l, closePopout: s } = e,
        r = (0, E.k)({ channelId: t }) ? G.intl.string(G.t["3BogKe"]) : G.intl.string(G.t.ETIVvg);
    return n
        ? (0, i.jsx)(ef, { lobbyId: l, closePopout: s, connectionTypeText: r })
        : (0, i.jsx)(eE, { closePopout: s, connectionTypeText: r });
}
function eS(e) {
    let [t, n] = l.useState(Z.Rj.RTC_DEBUG_PANEL),
        s = (0, d.GV)(),
        a = [
            { id: Z.Rj.RTC_DEBUG_PANEL, content: (0, i.jsx)(eI, { ...e }) },
            { id: Z.Rj.RTC_SECURE_FRAMES, content: (0, i.jsx)(er, { channelId: e.channelId }) },
        ];
    l.useEffect(() => {
        (0, f.Hg)({ channelId: e.channelId, selectedTab: t });
    }, [e.channelId, t]);
    let u = (0, A.c)();
    return (
        l.useEffect(() => {
            u && n(Z.Rj.RTC_DEBUG_PANEL);
        }, [u]),
        (0, i.jsxs)("div", {
            className: r()(ed.popover, eu.kL),
            children: [
                (0, i.jsxs)(o.V, {
                    className: eu.vR,
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    children: [
                        (0, i.jsx)(o.V.Item, {
                            id: Z.Rj.RTC_DEBUG_PANEL,
                            className: eu.YU,
                            children: G.intl.string(G.t.MBY1Pm),
                        }),
                        u
                            ? null
                            : (0, i.jsx)(o.V.Item, {
                                  id: Z.Rj.RTC_SECURE_FRAMES,
                                  className: eu.YU,
                                  children: G.intl.string(G.t.zC6o3s),
                              }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: eu.SZ,
                    children: a.map((e) => {
                        let { id: n, content: l } = e;
                        return (0, i.jsx)(
                            o.V.Panel,
                            { id: n, "aria-labelledby": s, className: n !== t ? eu._t : void 0, children: l },
                            n,
                        );
                    }),
                }),
            ],
        })
    );
}
function em(e) {
    let t = (0, a.bG)([h.A], () => h.A.hasVideo(e.channelId)),
        [n, s] = l.useState(Z.Rj.RTC_DEBUG_PANEL),
        r = (0, d.GV)(),
        c = l.useMemo(() => {
            switch (n) {
                case Z.Rj.RTC_DEBUG_PANEL:
                    return (0, i.jsx)(ep, { ...e });
                case Z.Rj.RTC_SECURE_FRAMES:
                    return (0, i.jsx)($, { channelId: e.channelId });
            }
        }, [e, n]);
    l.useEffect(() => {
        (0, f.Hg)({ channelId: e.channelId, selectedTab: n });
    }, [e.channelId, n]);
    let g = (0, A.c)();
    return (
        l.useEffect(() => {
            g && s(Z.Rj.RTC_DEBUG_PANEL);
        }, [g]),
        (0, i.jsxs)("div", {
            className: eo.kL,
            children: [
                (0, i.jsx)(u.D, {
                    className: eo.DD,
                    variant: "heading-lg/bold",
                    color: "text-strong",
                    children: t ? G.intl.string(G.t.IlHdW8) : G.intl.string(G.t.WsOisp),
                }),
                (0, i.jsxs)(o.V, {
                    className: eo.vR,
                    selectedItem: n,
                    type: "top",
                    look: "brand",
                    onItemSelect: s,
                    children: [
                        (0, i.jsx)(o.V.Item, {
                            id: Z.Rj.RTC_DEBUG_PANEL,
                            className: eo.YU,
                            children: G.intl.string(G.t.MBY1Pm),
                        }),
                        g
                            ? null
                            : (0, i.jsx)(o.V.Item, {
                                  id: Z.Rj.RTC_SECURE_FRAMES,
                                  className: eo.YU,
                                  children: G.intl.string(G.t.zC6o3s),
                              }),
                    ],
                }),
                (0, i.jsx)(o.V.Panel, { id: n, "aria-labelledby": r, children: c }),
            ],
        })
    );
}
function eC(e) {
    return (0, E.k)({ channelId: e.channelId })
        ? (0, i.jsx)(em, { ...e })
        : (0, i.jsx)("div", {
              className: eo.L3,
              children: (0, i.jsx)("section", { className: eo.J8, children: (0, i.jsx)(ep, { ...e }) }),
          });
}
function e_(e) {
    return (0, E.k)({ channelId: e.channelId })
        ? (0, i.jsx)(eS, { ...e })
        : (0, i.jsx)("div", { className: r()(ed.popover, eu.L3), children: (0, i.jsx)(eI, { ...e }) });
}
function eN(e) {
    return ea.useConfig({ location: "RTCConnectionPopout" }).enabled
        ? (0, i.jsx)(e_, { ...e })
        : (0, i.jsx)(eC, { ...e });
}
