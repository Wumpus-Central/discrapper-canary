"use strict";
n.d(t, { A: () => eN });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(761508),
    u = n(534514),
    c = n(915089),
    d = n(763827),
    _ = n(977997),
    f = n(572487),
    h = n(798286),
    p = n(83942),
    E = n(259374),
    m = n(459838),
    g = n(691540),
    A = n(857250),
    I = n(97483),
    T = n(194261),
    S = n(661531),
    N = n(349288),
    y = n(811893),
    C = n(624479),
    v = n(233545),
    O = n(229659),
    R = n(885386),
    b = n(235058),
    D = n(174459),
    L = n(957565),
    w = n(975571),
    M = n(917592),
    P = n(652215),
    x = n(731854),
    U = n(375708),
    k = n(666153);
let G = () => {
    b.Ay.getMediaEngine().once(m.bg.ConnectionStats, (e) => {
        let t = JSON.stringify(
            Object.values(x.x)
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
        (0, L.C)(t, () => (0, g.P0)((0, A.o)(U.intl.string(U.t.t5VZ88), I.Ck.SUCCESS)));
    });
};
function F(e) {
    (0, r.useEffect)(() => {
        D.default.track(P.HAw.OPEN_POPOUT, { type: "RTC Connection" });
    }, []);
    let t = (0, r.useCallback)(() => {
            let { closePopout: t } = e;
            null != t && t(), v.ho();
        }, [e]),
        n = (0, r.useCallback)(() => {
            let { hostname: t, averagePing: n, lastPing: s, outboundLossRate: o } = e,
                l = R.Q_.getSetting();
            return (0, i.jsxs)(r.Fragment, {
                children: [
                    l &&
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)("div", {
                                    className: k.o0,
                                    children: (0, i.jsx)(O.A, { dataPoints: e.pings, width: 258, height: 80 }),
                                }),
                                (0, i.jsx)("div", {
                                    className: k.xB,
                                    children: (0, i.jsx)("strong", { children: M.A.getShortHostname(t) }),
                                }),
                            ],
                        }),
                    (0, i.jsx)("div", {
                        className: k.xB,
                        children: U.intl.format(U.t["X58/lN"], { averagePing: n.toFixed(0) }),
                    }),
                    null != s
                        ? (0, i.jsx)("div", {
                              className: k.xB,
                              children: U.intl.format(U.t["6iv2TF"], { lastPing: s.toFixed(0) }),
                          })
                        : null,
                    null != o
                        ? (0, i.jsx)("div", {
                              className: k.xB,
                              children: U.intl.format(U.t["VIBJM+"], { outboundLossRate: o.toFixed(1) }),
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: a()(k.xB, k.xJ),
                        children: [
                            null == o ? U.intl.formatToPlainString(U.t.vggaMt, { badPing: 250 }) : null,
                            null != o
                                ? U.intl.formatToPlainString(U.t["3pFz1P"], { badPing: 250, badLossRate: 10 })
                                : null,
                        ],
                    }),
                ],
            });
        }, [e]),
        { connectionState: s, connectionTypeText: o } = e,
        l = R.Q_.getSetting(),
        u = {
            [P.S7L.AWAITING_ENDPOINT]: U.intl.format(U.t.Eu2vUR, { url: P.qF7.STATUS }),
            [P.S7L.CONNECTING]: U.intl.string(U.t["y+E8aD"]),
            [P.S7L.AUTHENTICATING]: U.intl.string(U.t["5lGIZH"]),
            [P.S7L.DISCONNECTED]: U.intl.string(U.t.fOX25I),
            [P.S7L.RTC_CONNECTING]: U.intl.string(U.t.b5Ubd5),
            [P.S7L.ICE_CHECKING]: U.intl.format(U.t.SyoYUb, { url: w.A.getArticleURL(P.MVz.VOICE_CONNECTION_ERRORS) }),
            [P.S7L.DTLS_CONNECTING]: U.intl.format(U.t.SyoYUb, {
                url: w.A.getArticleURL(P.MVz.VOICE_CONNECTION_ERRORS),
            }),
            [P.S7L.RTC_CONNECTED]: n,
            [P.S7L.NO_ROUTE]: U.intl.format(U.t["2tgQnk"], { url: w.A.getArticleURL(P.MVz.VOICE_CONNECTION_ERRORS) }),
            [P.S7L.RTC_DISCONNECTED]: U.intl.string(U.t.fOX25I),
        }[s];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            "function" == typeof u ? u() : (0, i.jsx)("p", { className: a()(k.xB, k.xJ), children: u }),
            (0, i.jsx)("hr", { className: k.me }),
            (0, i.jsxs)("div", {
                className: k.Vf,
                children: [
                    (0, i.jsxs)("span", {
                        className: a()(k.uO, k.ro),
                        children: [
                            (0, i.jsx)(T.X, {
                                size: "xxs",
                                color: S.A.colors.TEXT_FEEDBACK_POSITIVE.css,
                                className: k.__invalid_icon,
                            }),
                            o,
                        ],
                    }),
                    l &&
                        b.Ay.supports(x.O5.DIAGNOSTICS) &&
                        !__OVERLAY__ &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(N.Anchor, {
                                    className: a()(k.Ce, k.ro),
                                    onClick: t,
                                    children: [
                                        U.intl.string(U.t.KBoWg9),
                                        (0, i.jsx)(y.t, {
                                            size: "xxs",
                                            color: "currentColor",
                                            className: k.__invalid_icon,
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)(N.Anchor, {
                                    className: a()(k.d3, k.ro),
                                    onClick: G,
                                    title: "Copy to clipboard",
                                    children: [
                                        U.intl.string(U.t["XEb+Sj"]),
                                        (0, i.jsx)(C.T, {
                                            size: "xxs",
                                            color: "currentColor",
                                            className: k.__invalid_icon,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    !l &&
                        !__OVERLAY__ &&
                        (0, i.jsx)(N.Anchor, {
                            className: k.Ce,
                            href: w.A.getArticleURL(P.MVz.VOICE_VIDEO_TROUBLESHOOTING),
                            children: U.intl.string(U.t.hvVgAZ),
                        }),
                ],
            }),
        ],
    });
}
var V = n(834730),
    B = n(814278),
    H = n(998759),
    j = n(289873),
    Y = n(500020);
function W(e) {
    let { chunks: t, columns: n, className: s } = e,
        o = r.useMemo(() => ({ "--secure-frames-columns": n }), [n]);
    return null == t
        ? (0, i.jsx)("div", { className: Y.Lq, children: (0, i.jsx)(j.y, {}) })
        : (0, i.jsx)("div", {
              style: o,
              className: a()(Y.aY, s),
              children: t.map((e, t) =>
                  (0, i.jsx)(
                      "div",
                      {
                          className: a()(Y.iv, { [Y.yF]: t > n - 1 }),
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
var K = n(930840),
    z = n(603266),
    $ = n(555273);
function q(e) {
    let { channelId: t } = e,
        n = (0, o.bG)([d.A], () => d.A.getSecureFramesState()?.epochAuthenticator),
        s = (0, H.z)({ fingerprintBase64: n, chunkSize: 5, desiredLength: 30 }),
        a = r.useCallback(() => {
            (0, h.k0)({ channelId: t });
        }, [t]);
    return (0, i.jsxs)("div", {
        className: $.kL,
        children: [
            (0, i.jsxs)("div", {
                className: $.Tc,
                children: [
                    (0, i.jsx)(T.X, { size: "xxs", color: S.A.colors.TEXT_FEEDBACK_POSITIVE }),
                    (0, i.jsx)(V.E, {
                        variant: "text-xs/medium",
                        color: "text-feedback-positive",
                        children: U.intl.string(U.t["3BogKe"]),
                    }),
                ],
            }),
            (0, i.jsx)(V.E, { variant: "text-xs/normal", color: "text-subtle", children: U.intl.string(U.t.B9JNsl) }),
            (0, i.jsxs)("div", {
                className: $.wx,
                children: [
                    (0, i.jsx)(u.D, {
                        variant: "text-sm/bold",
                        color: "text-strong",
                        children: U.intl.string(U.t.cTQI5t),
                    }),
                    null != s &&
                        (0, i.jsx)(K.c, { chunks: s, color: S.A.colors.INTERACTIVE_TEXT_DEFAULT.css, onCopy: a }),
                ],
            }),
            (0, i.jsx)(W, { className: $.aY, chunks: s, columns: 3 }),
            (0, i.jsx)(V.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: U.intl.format(U.t.wKxADe, { helpArticle: (0, B.aW)() }),
            }),
        ],
    });
}
var Z = n(821609),
    X = n(92446),
    Q = n(939249),
    J = n(628284),
    ee = n(359778),
    et = n(394952),
    en = n(291614);
let ei = function (e) {
    let [t, n] = (0, r.useState)(!1);
    (0, r.useEffect)(() => {
        D.default.track(P.HAw.OPEN_POPOUT, { type: "RTC Connection" });
    }, []);
    let s = (0, r.useCallback)(() => {
            let { closePopout: t } = e;
            null != t && t(), v.ho();
        }, [e]),
        a = (0, r.useCallback)(() => {
            var e;
            (e = () => {
                n(!0), setTimeout(() => n(!1), 2e3);
            }),
                b.Ay.getMediaEngine().once(m.bg.ConnectionStats, (t) => {
                    let n = JSON.stringify(
                        Object.values(x.x)
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
                    (0, L.C)(n, e);
                });
        }, []),
        o =
            null != e.outboundLossRate
                ? U.intl.formatToPlainString(U.t["3pFz1P"], { badPing: 250, badLossRate: 10 })
                : U.intl.formatToPlainString(U.t.vggaMt, { badPing: 250 }),
        l = (0, r.useCallback)(() => {
            let { hostname: t, averagePing: n, lastPing: s, outboundLossRate: a } = e,
                l = R.Q_.getSetting();
            return (0, i.jsxs)(r.Fragment, {
                children: [
                    l &&
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)("div", {
                                    className: et.o0,
                                    children: (0, i.jsx)(O.A, { dataPoints: e.pings, width: 258, height: 80 }),
                                }),
                                (0, i.jsx)(V.E, {
                                    variant: "text-sm/bold",
                                    color: "text-default",
                                    className: et.VU,
                                    children: M.A.getShortHostname(t),
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
                                    children: U.intl.format(U.t["X58/lN"], { averagePing: n.toFixed(0) }),
                                }),
                                null != s
                                    ? (0, i.jsx)(V.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          className: et.VU,
                                          children: U.intl.format(U.t["6iv2TF"], { lastPing: s.toFixed(0) }),
                                      })
                                    : null,
                                null != a
                                    ? (0, i.jsx)(V.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          className: et.VU,
                                          children: U.intl.format(U.t["VIBJM+"], { outboundLossRate: a.toFixed(1) }),
                                      })
                                    : null,
                            ],
                        }),
                    }),
                    (0, i.jsx)(V.E, { variant: "text-xs/normal", color: "text-muted", children: o }),
                ],
            });
        }, [e, o]),
        { connectionState: u, connectionTypeText: c } = e,
        d = R.Q_.getSetting(),
        _ = {
            [P.S7L.AWAITING_ENDPOINT]: U.intl.format(U.t.Eu2vUR, { url: P.qF7.STATUS }),
            [P.S7L.CONNECTING]: U.intl.string(U.t["y+E8aD"]),
            [P.S7L.AUTHENTICATING]: U.intl.string(U.t["5lGIZH"]),
            [P.S7L.DISCONNECTED]: U.intl.string(U.t.fOX25I),
            [P.S7L.RTC_CONNECTING]: U.intl.string(U.t.b5Ubd5),
            [P.S7L.ICE_CHECKING]: U.intl.format(U.t.SyoYUb, { url: w.A.getArticleURL(P.MVz.VOICE_CONNECTION_ERRORS) }),
            [P.S7L.DTLS_CONNECTING]: U.intl.format(U.t.SyoYUb, {
                url: w.A.getArticleURL(P.MVz.VOICE_CONNECTION_ERRORS),
            }),
            [P.S7L.RTC_CONNECTED]: l,
            [P.S7L.NO_ROUTE]: U.intl.format(U.t["2tgQnk"], { url: w.A.getArticleURL(P.MVz.VOICE_CONNECTION_ERRORS) }),
            [P.S7L.RTC_DISCONNECTED]: U.intl.string(U.t.fOX25I),
        }[u];
    return (0, i.jsxs)("div", {
        className: et.kL,
        children: [
            "function" == typeof _
                ? _()
                : (0, i.jsx)(V.E, { tag: "p", variant: "text-sm/normal", color: "text-muted", children: _ }),
            d &&
                b.Ay.supports(x.O5.DIAGNOSTICS) &&
                !__OVERLAY__ &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("hr", { className: en.me }),
                        (0, i.jsxs)("div", {
                            className: et.pw,
                            children: [
                                (0, i.jsx)(Z.$, {
                                    icon: X.Q,
                                    text: U.intl.string(U.t.KBoWg9),
                                    variant: "secondary",
                                    size: "sm",
                                    fullWidth: !0,
                                    onClick: s,
                                }),
                                (0, i.jsxs)(Q.D, {
                                    className: `${en.n2} ${et.n2}`,
                                    onClick: a,
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: t ? en.Dx : en.t6,
                                            children: (0, i.jsx)(Z.$, {
                                                icon: C.T,
                                                text: U.intl.string(U.t["XEb+Sj"]),
                                                variant: "secondary",
                                                size: "sm",
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, i.jsx)("div", {
                                            className: t ? en.t6 : en.Dx,
                                            children: (0, i.jsx)(Z.$, {
                                                icon: J.y,
                                                text: U.intl.string(U.t.t5VZ88),
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
                    (0, i.jsx)(T.X, { size: "xxs", color: S.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                    (0, i.jsx)(V.E, { variant: "text-xs/medium", color: "text-feedback-positive", children: c }),
                ],
            }),
            !d &&
                !__OVERLAY__ &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("hr", { className: en.me }),
                        (0, i.jsx)(N.Anchor, {
                            className: et.CU,
                            href: w.A.getArticleURL(P.MVz.VOICE_VIDEO_TROUBLESHOOTING),
                            children: U.intl.string(U.t.hvVgAZ),
                        }),
                    ],
                }),
        ],
    });
};
var er = n(75811),
    es = n(209426);
function ea(e) {
    let { channelId: t } = e,
        n = (0, o.bG)([d.A], () => d.A.getSecureFramesState()?.epochAuthenticator),
        s = (0, H.z)({ fingerprintBase64: n, chunkSize: 5, desiredLength: 30 }),
        [a, l] = r.useState(!1),
        c = r.useMemo(() => s?.join(" "), [s]),
        _ = r.useCallback(() => {
            null != c &&
                (0, L.C)(c, () => {
                    l(!0), (0, h.k0)({ channelId: t }), setTimeout(() => l(!1), 2e3);
                });
        }, [t, c]);
    return (0, i.jsxs)("div", {
        className: es.kL,
        children: [
            (0, i.jsx)(u.D, { variant: "text-sm/bold", color: "text-strong", children: U.intl.string(U.t.cTQI5t) }),
            (0, i.jsx)(V.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: U.intl.format(U.t.wKxADe, { helpArticle: (0, B.aW)() }),
            }),
            (0, i.jsx)("div", {
                className: es.on,
                children: (0, i.jsx)(er.j, { chunks: s, columns: 3, className: es.lu }),
            }),
            null != s &&
                (0, i.jsxs)(Q.D, {
                    className: en.n2,
                    onClick: _,
                    children: [
                        (0, i.jsx)("div", {
                            className: a ? en.Dx : en.t6,
                            children: (0, i.jsx)(Z.$, {
                                icon: C.T,
                                text: U.intl.string(U.t.OpuAlK),
                                variant: "secondary",
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: a ? en.t6 : en.Dx,
                            children: (0, i.jsx)(Z.$, {
                                icon: J.y,
                                text: U.intl.string(U.t.t5VZ88),
                                variant: "secondary",
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            (0, i.jsx)("hr", { className: en.me }),
            (0, i.jsx)(V.E, { variant: "text-xs/normal", color: "text-subtle", children: U.intl.string(U.t.B9JNsl) }),
            (0, i.jsxs)(ee.Z, {
                type: ee.Z.Types.SUCCESS,
                className: en.g4,
                children: [
                    (0, i.jsx)(T.X, { size: "xxs", color: S.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                    (0, i.jsx)(V.E, {
                        variant: "text-xs/medium",
                        color: "text-feedback-positive",
                        children: U.intl.string(U.t["3BogKe"]),
                    }),
                ],
            }),
        ],
    });
}
let eo = (0, n(240921).Ay)({
    name: "2026-04-rtc-voice-details-refresh",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var el = n(172115),
    eu = n(9934),
    ec = n(824078);
function ed() {
    return (0, o.cf)([d.A], () => ({
        connectionState: d.A.getState(),
        hostname: d.A.getHostname(),
        averagePing: d.A.getAveragePing(),
        lastPing: d.A.getLastPing(),
        outboundLossRate: d.A.getOutboundLossRate(),
        pings: d.A.getPings(),
    }));
}
function e_(e) {
    return (0, o.cf)([f.A], () => ({
        connectionState: f.A.getConnectionState(e),
        hostname: f.A.getHostname(e),
        averagePing: f.A.getAveragePing(e),
        lastPing: f.A.getLastPing(e),
        pings: f.A.getPings(),
        outboundLossRate: f.A.getOutboundLossRate(e),
    }));
}
function ef(e) {
    let { lobbyId: t, connectionTypeText: n, closePopout: r } = e,
        s = e_(t);
    return (0, i.jsx)(ei, { ...s, closePopout: r, connectionTypeText: n });
}
function eh(e) {
    let { lobbyId: t, connectionTypeText: n, closePopout: r } = e,
        s = e_(t);
    return (0, i.jsx)(F, { ...s, closePopout: r, connectionTypeText: n });
}
function ep(e) {
    let { closePopout: t, connectionTypeText: n } = e,
        r = ed();
    return (0, i.jsx)(ei, { ...r, closePopout: t, connectionTypeText: n });
}
function eE(e) {
    let { closePopout: t, connectionTypeText: n } = e,
        r = ed();
    return (0, i.jsx)(F, { ...r, closePopout: t, connectionTypeText: n });
}
function em(e) {
    let { channelId: t, isOverlay: n, lobbyId: r, closePopout: s } = e,
        a = (0, E.k)({ channelId: t }) ? U.intl.string(U.t["3BogKe"]) : U.intl.string(U.t.ETIVvg);
    return n
        ? (0, i.jsx)(ef, { lobbyId: r, closePopout: s, connectionTypeText: a })
        : (0, i.jsx)(ep, { closePopout: s, connectionTypeText: a });
}
function eg(e) {
    let { channelId: t, isOverlay: n, lobbyId: r, closePopout: s } = e,
        a = (0, E.k)({ channelId: t }) ? U.intl.string(U.t["3BogKe"]) : U.intl.string(U.t.ETIVvg);
    return n
        ? (0, i.jsx)(eh, { lobbyId: r, closePopout: s, connectionTypeText: a })
        : (0, i.jsx)(eE, { closePopout: s, connectionTypeText: a });
}
function eA(e) {
    let [t, n] = r.useState(z.Rj.RTC_DEBUG_PANEL),
        s = (0, c.GV)(),
        o = [
            { id: z.Rj.RTC_DEBUG_PANEL, content: (0, i.jsx)(em, { ...e }) },
            { id: z.Rj.RTC_SECURE_FRAMES, content: (0, i.jsx)(ea, { channelId: e.channelId }) },
        ];
    r.useEffect(() => {
        (0, h.Hg)({ channelId: e.channelId, selectedTab: t });
    }, [e.channelId, t]);
    let u = (0, p.c)();
    return (
        r.useEffect(() => {
            u && n(z.Rj.RTC_DEBUG_PANEL);
        }, [u]),
        (0, i.jsxs)("div", {
            className: a()(ec.popover, eu.kL),
            children: [
                (0, i.jsxs)(l.V, {
                    className: eu.vR,
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    children: [
                        (0, i.jsx)(l.V.Item, {
                            id: z.Rj.RTC_DEBUG_PANEL,
                            className: eu.YU,
                            children: U.intl.string(U.t.MBY1Pm),
                        }),
                        u
                            ? null
                            : (0, i.jsx)(l.V.Item, {
                                  id: z.Rj.RTC_SECURE_FRAMES,
                                  className: eu.YU,
                                  children: U.intl.string(U.t.zC6o3s),
                              }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: eu.SZ,
                    children: o.map((e) => {
                        let { id: n, content: r } = e;
                        return (0, i.jsx)(
                            l.V.Panel,
                            { id: n, "aria-labelledby": s, className: n !== t ? eu._t : void 0, children: r },
                            n,
                        );
                    }),
                }),
            ],
        })
    );
}
function eI(e) {
    let t = (0, o.bG)([_.A], () => _.A.hasVideo(e.channelId)),
        [n, s] = r.useState(z.Rj.RTC_DEBUG_PANEL),
        a = (0, c.GV)(),
        d = r.useMemo(() => {
            switch (n) {
                case z.Rj.RTC_DEBUG_PANEL:
                    return (0, i.jsx)(eg, { ...e });
                case z.Rj.RTC_SECURE_FRAMES:
                    return (0, i.jsx)(q, { channelId: e.channelId });
            }
        }, [e, n]);
    r.useEffect(() => {
        (0, h.Hg)({ channelId: e.channelId, selectedTab: n });
    }, [e.channelId, n]);
    let f = (0, p.c)();
    return (
        r.useEffect(() => {
            f && s(z.Rj.RTC_DEBUG_PANEL);
        }, [f]),
        (0, i.jsxs)("div", {
            className: el.kL,
            children: [
                (0, i.jsx)(u.D, {
                    className: el.DD,
                    variant: "heading-lg/bold",
                    color: "text-strong",
                    children: t ? U.intl.string(U.t.IlHdW8) : U.intl.string(U.t.WsOisp),
                }),
                (0, i.jsxs)(l.V, {
                    className: el.vR,
                    selectedItem: n,
                    type: "top",
                    look: "brand",
                    onItemSelect: s,
                    children: [
                        (0, i.jsx)(l.V.Item, {
                            id: z.Rj.RTC_DEBUG_PANEL,
                            className: el.YU,
                            children: U.intl.string(U.t.MBY1Pm),
                        }),
                        f
                            ? null
                            : (0, i.jsx)(l.V.Item, {
                                  id: z.Rj.RTC_SECURE_FRAMES,
                                  className: el.YU,
                                  children: U.intl.string(U.t.zC6o3s),
                              }),
                    ],
                }),
                (0, i.jsx)(l.V.Panel, { id: n, "aria-labelledby": a, children: d }),
            ],
        })
    );
}
function eT(e) {
    return (0, E.k)({ channelId: e.channelId })
        ? (0, i.jsx)(eI, { ...e })
        : (0, i.jsx)("div", {
              className: el.L3,
              children: (0, i.jsx)("section", { className: el.J8, children: (0, i.jsx)(eg, { ...e }) }),
          });
}
function eS(e) {
    return (0, E.k)({ channelId: e.channelId })
        ? (0, i.jsx)(eA, { ...e })
        : (0, i.jsx)("div", { className: a()(ec.popover, eu.L3), children: (0, i.jsx)(em, { ...e }) });
}
function eN(e) {
    return eo.useConfig({ location: "RTCConnectionPopout" }).enabled
        ? (0, i.jsx)(eS, { ...e })
        : (0, i.jsx)(eT, { ...e });
}
