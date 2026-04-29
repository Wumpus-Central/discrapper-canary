n.d(t, { A: () => e_ });
var s = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(17928),
    o = n(761508),
    c = n(534514),
    d = n(915089),
    h = n(763827),
    u = n(977997),
    g = n(572487),
    p = n(798286),
    m = n(83942),
    x = n(259374),
    N = n(205693),
    C = n(691540),
    E = n(857250),
    A = n(97483),
    f = n(194261),
    v = n(661531),
    _ = n(349288),
    T = n(811893),
    I = n(624479),
    R = n(233545),
    S = n(229659),
    j = n(253932),
    y = n(51760),
    D = n(954571),
    O = n(957565),
    P = n(975571),
    b = n(917592),
    w = n(652215),
    L = n(731854),
    M = n(985018),
    U = n(666153);
let k = () => {
    y.Ay.getMediaEngine().once(N.bg.ConnectionStats, (e) => {
        let t = JSON.stringify(
            Object.values(L.x)
                .map((t) => {
                    let n = e
                        .filter((e) => {
                            let { connection: n } = e;
                            return n.context === t;
                        })
                        .map((e, n) => {
                            let s = e.stats;
                            return (s.context = t), (s.index = n), s;
                        });
                    for (let e of n) e?.transport?.localAddress != null && (e.transport.localAddress = "(redacted)");
                    return n;
                })
                .filter((e) => e.length > 0),
            null,
            2,
        );
        (0, O.C)(t, () => (0, C.P0)((0, E.o)(M.intl.string(M.t.t5VZ88), A.Ck.SUCCESS)));
    });
};
function F(e) {
    (0, i.useEffect)(() => {
        D.default.track(w.HAw.OPEN_POPOUT, { type: "RTC Connection" });
    }, []);
    let t = (0, i.useCallback)(() => {
            let { closePopout: t } = e;
            null != t && t(), R.ho();
        }, [e]),
        n = (0, i.useCallback)(() => {
            let { hostname: t, averagePing: n, lastPing: l, outboundLossRate: a } = e,
                o = j.Q_.getSetting();
            return (0, s.jsxs)(i.Fragment, {
                children: [
                    o &&
                        (0, s.jsxs)("div", {
                            children: [
                                (0, s.jsx)("div", {
                                    className: U.o0,
                                    children: (0, s.jsx)(S.A, { dataPoints: e.pings, width: 258, height: 80 }),
                                }),
                                (0, s.jsx)("div", {
                                    className: U.xB,
                                    children: (0, s.jsx)("strong", { children: b.A.getShortHostname(t) }),
                                }),
                            ],
                        }),
                    (0, s.jsx)("div", {
                        className: U.xB,
                        children: M.intl.format(M.t["X58/lN"], { averagePing: n.toFixed(0) }),
                    }),
                    null != l
                        ? (0, s.jsx)("div", {
                              className: U.xB,
                              children: M.intl.format(M.t["6iv2TF"], { lastPing: l.toFixed(0) }),
                          })
                        : null,
                    null != a
                        ? (0, s.jsx)("div", {
                              className: U.xB,
                              children: M.intl.format(M.t["VIBJM+"], { outboundLossRate: a.toFixed(1) }),
                          })
                        : null,
                    (0, s.jsxs)("div", {
                        className: r()(U.xB, U.xJ),
                        children: [
                            null == a ? M.intl.formatToPlainString(M.t.vggaMt, { badPing: 250 }) : null,
                            null != a
                                ? M.intl.formatToPlainString(M.t["3pFz1P"], { badPing: 250, badLossRate: 10 })
                                : null,
                        ],
                    }),
                ],
            });
        }, [e]),
        { connectionState: l, connectionTypeText: a } = e,
        o = j.Q_.getSetting(),
        c = {
            [w.S7L.AWAITING_ENDPOINT]: M.intl.format(M.t.Eu2vUR, { url: w.qF7.STATUS }),
            [w.S7L.CONNECTING]: M.intl.string(M.t["y+E8aD"]),
            [w.S7L.AUTHENTICATING]: M.intl.string(M.t["5lGIZH"]),
            [w.S7L.DISCONNECTED]: M.intl.string(M.t.fOX25I),
            [w.S7L.RTC_CONNECTING]: M.intl.string(M.t.b5Ubd5),
            [w.S7L.ICE_CHECKING]: M.intl.format(M.t.SyoYUb, { url: P.A.getArticleURL(w.MVz.VOICE_CONNECTION_ERRORS) }),
            [w.S7L.DTLS_CONNECTING]: M.intl.format(M.t.SyoYUb, {
                url: P.A.getArticleURL(w.MVz.VOICE_CONNECTION_ERRORS),
            }),
            [w.S7L.RTC_CONNECTED]: n,
            [w.S7L.NO_ROUTE]: M.intl.format(M.t["2tgQnk"], { url: P.A.getArticleURL(w.MVz.VOICE_CONNECTION_ERRORS) }),
            [w.S7L.RTC_DISCONNECTED]: M.intl.string(M.t.fOX25I),
        }[l];
    return (0, s.jsxs)(s.Fragment, {
        children: [
            "function" == typeof c ? c() : (0, s.jsx)("p", { className: r()(U.xB, U.xJ), children: c }),
            (0, s.jsx)("hr", { className: U.me }),
            (0, s.jsxs)("div", {
                className: U.Vf,
                children: [
                    (0, s.jsxs)("span", {
                        className: r()(U.uO, U.ro),
                        children: [
                            (0, s.jsx)(f.X, {
                                size: "xxs",
                                color: v.A.colors.TEXT_FEEDBACK_POSITIVE.css,
                                className: U.__invalid_icon,
                            }),
                            a,
                        ],
                    }),
                    o &&
                        y.Ay.supports(L.O5.DIAGNOSTICS) &&
                        !__OVERLAY__ &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsxs)(_.Anchor, {
                                    className: r()(U.Ce, U.ro),
                                    onClick: t,
                                    children: [
                                        M.intl.string(M.t.KBoWg9),
                                        (0, s.jsx)(T.t, {
                                            size: "xxs",
                                            color: "currentColor",
                                            className: U.__invalid_icon,
                                        }),
                                    ],
                                }),
                                (0, s.jsxs)(_.Anchor, {
                                    className: r()(U.d3, U.ro),
                                    onClick: k,
                                    title: "Copy to clipboard",
                                    children: [
                                        M.intl.string(M.t["XEb+Sj"]),
                                        (0, s.jsx)(I.T, {
                                            size: "xxs",
                                            color: "currentColor",
                                            className: U.__invalid_icon,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    !o &&
                        !__OVERLAY__ &&
                        (0, s.jsx)(_.Anchor, {
                            className: U.Ce,
                            href: P.A.getArticleURL(w.MVz.VOICE_VIDEO_TROUBLESHOOTING),
                            children: M.intl.string(M.t.hvVgAZ),
                        }),
                ],
            }),
        ],
    });
}
var G = n(834730),
    V = n(814278),
    B = n(998759),
    H = n(289873),
    z = n(277639);
function Z(e) {
    let { chunks: t, columns: n, className: l } = e,
        a = i.useMemo(() => ({ "--secure-frames-columns": n }), [n]);
    return null == t
        ? (0, s.jsx)("div", { className: z.Lq, children: (0, s.jsx)(H.y, {}) })
        : (0, s.jsx)("div", {
              style: a,
              className: r()(z.aY, l),
              children: t.map((e, t) =>
                  (0, s.jsx)(
                      "div",
                      {
                          className: r()(z.iv, { [z.yF]: t > n - 1 }),
                          children: (0, s.jsx)(G.E, {
                              className: z.ph,
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
    W = n(603266),
    X = n(555273);
function J(e) {
    let { channelId: t } = e,
        n = (0, a.bG)([h.A], () => h.A.getSecureFramesState()?.epochAuthenticator),
        l = (0, B.z)({ fingerprintBase64: n, chunkSize: 5, desiredLength: 30 }),
        r = i.useCallback(() => {
            (0, p.k0)({ channelId: t });
        }, [t]);
    return (0, s.jsxs)("div", {
        className: X.kL,
        children: [
            (0, s.jsxs)("div", {
                className: X.Tc,
                children: [
                    (0, s.jsx)(f.X, { size: "xxs", color: v.A.colors.TEXT_FEEDBACK_POSITIVE }),
                    (0, s.jsx)(G.E, {
                        variant: "text-xs/medium",
                        color: "text-feedback-positive",
                        children: M.intl.string(M.t["3BogKe"]),
                    }),
                ],
            }),
            (0, s.jsx)(G.E, { variant: "text-xs/normal", color: "text-subtle", children: M.intl.string(M.t.B9JNsl) }),
            (0, s.jsxs)("div", {
                className: X.wx,
                children: [
                    (0, s.jsx)(c.D, {
                        variant: "text-sm/bold",
                        color: "text-strong",
                        children: M.intl.string(M.t.cTQI5t),
                    }),
                    null != l &&
                        (0, s.jsx)(K.c, { chunks: l, color: v.A.colors.INTERACTIVE_TEXT_DEFAULT.css, onCopy: r }),
                ],
            }),
            (0, s.jsx)(Z, { className: X.aY, chunks: l, columns: 3 }),
            (0, s.jsx)(G.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: M.intl.format(M.t.wKxADe, { helpArticle: (0, V.aW)() }),
            }),
        ],
    });
}
var Y = n(821609),
    $ = n(92446),
    q = n(939249),
    Q = n(628284),
    ee = n(359778),
    et = n(394952),
    en = n(291614);
let es = function (e) {
    let [t, n] = (0, i.useState)(!1);
    (0, i.useEffect)(() => {
        D.default.track(w.HAw.OPEN_POPOUT, { type: "RTC Connection" });
    }, []);
    let l = (0, i.useCallback)(() => {
            let { closePopout: t } = e;
            null != t && t(), R.ho();
        }, [e]),
        r = (0, i.useCallback)(() => {
            var e;
            (e = () => {
                n(!0), setTimeout(() => n(!1), 2e3);
            }),
                y.Ay.getMediaEngine().once(N.bg.ConnectionStats, (t) => {
                    let n = JSON.stringify(
                        Object.values(L.x)
                            .map((e) => {
                                let n = t
                                    .filter((t) => {
                                        let { connection: n } = t;
                                        return n.context === e;
                                    })
                                    .map((t, n) => {
                                        let s = t.stats;
                                        return (s.context = e), (s.index = n), s;
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
                ? M.intl.formatToPlainString(M.t["3pFz1P"], { badPing: 250, badLossRate: 10 })
                : M.intl.formatToPlainString(M.t.vggaMt, { badPing: 250 }),
        o = (0, i.useCallback)(() => {
            let { hostname: t, averagePing: n, lastPing: l, outboundLossRate: r } = e,
                o = j.Q_.getSetting();
            return (0, s.jsxs)(i.Fragment, {
                children: [
                    o &&
                        (0, s.jsxs)("div", {
                            children: [
                                (0, s.jsx)("div", {
                                    className: et.o0,
                                    children: (0, s.jsx)(S.A, { dataPoints: e.pings, width: 258, height: 80 }),
                                }),
                                (0, s.jsx)(G.E, {
                                    variant: "text-sm/bold",
                                    color: "text-default",
                                    className: et.VU,
                                    children: b.A.getShortHostname(t),
                                }),
                            ],
                        }),
                    (0, s.jsx)("div", {
                        className: et.ew,
                        children: (0, s.jsxs)("div", {
                            className: et.zS,
                            children: [
                                (0, s.jsx)(G.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: et.VU,
                                    children: M.intl.format(M.t["X58/lN"], { averagePing: n.toFixed(0) }),
                                }),
                                null != l
                                    ? (0, s.jsx)(G.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          className: et.VU,
                                          children: M.intl.format(M.t["6iv2TF"], { lastPing: l.toFixed(0) }),
                                      })
                                    : null,
                                null != r
                                    ? (0, s.jsx)(G.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          className: et.VU,
                                          children: M.intl.format(M.t["VIBJM+"], { outboundLossRate: r.toFixed(1) }),
                                      })
                                    : null,
                            ],
                        }),
                    }),
                    (0, s.jsx)(G.E, { variant: "text-xs/normal", color: "text-muted", children: a }),
                ],
            });
        }, [e, a]),
        { connectionState: c, connectionTypeText: d } = e,
        h = j.Q_.getSetting(),
        u = {
            [w.S7L.AWAITING_ENDPOINT]: M.intl.format(M.t.Eu2vUR, { url: w.qF7.STATUS }),
            [w.S7L.CONNECTING]: M.intl.string(M.t["y+E8aD"]),
            [w.S7L.AUTHENTICATING]: M.intl.string(M.t["5lGIZH"]),
            [w.S7L.DISCONNECTED]: M.intl.string(M.t.fOX25I),
            [w.S7L.RTC_CONNECTING]: M.intl.string(M.t.b5Ubd5),
            [w.S7L.ICE_CHECKING]: M.intl.format(M.t.SyoYUb, { url: P.A.getArticleURL(w.MVz.VOICE_CONNECTION_ERRORS) }),
            [w.S7L.DTLS_CONNECTING]: M.intl.format(M.t.SyoYUb, {
                url: P.A.getArticleURL(w.MVz.VOICE_CONNECTION_ERRORS),
            }),
            [w.S7L.RTC_CONNECTED]: o,
            [w.S7L.NO_ROUTE]: M.intl.format(M.t["2tgQnk"], { url: P.A.getArticleURL(w.MVz.VOICE_CONNECTION_ERRORS) }),
            [w.S7L.RTC_DISCONNECTED]: M.intl.string(M.t.fOX25I),
        }[c];
    return (0, s.jsxs)("div", {
        className: et.kL,
        children: [
            "function" == typeof u
                ? u()
                : (0, s.jsx)(G.E, { tag: "p", variant: "text-sm/normal", color: "text-muted", children: u }),
            h &&
                y.Ay.supports(L.O5.DIAGNOSTICS) &&
                !__OVERLAY__ &&
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)("hr", { className: en.me }),
                        (0, s.jsxs)("div", {
                            className: et.pw,
                            children: [
                                (0, s.jsx)(Y.$, {
                                    icon: $.Q,
                                    text: M.intl.string(M.t.KBoWg9),
                                    variant: "secondary",
                                    size: "sm",
                                    fullWidth: !0,
                                    onClick: l,
                                }),
                                (0, s.jsxs)(q.D, {
                                    className: `${en.n2} ${et.n2}`,
                                    onClick: r,
                                    children: [
                                        (0, s.jsx)("div", {
                                            className: t ? en.Dx : en.t6,
                                            children: (0, s.jsx)(Y.$, {
                                                icon: I.T,
                                                text: M.intl.string(M.t["XEb+Sj"]),
                                                variant: "secondary",
                                                size: "sm",
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, s.jsx)("div", {
                                            className: t ? en.t6 : en.Dx,
                                            children: (0, s.jsx)(Y.$, {
                                                icon: Q.y,
                                                text: M.intl.string(M.t.t5VZ88),
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
            (0, s.jsxs)(ee.Z, {
                type: ee.Z.Types.SUCCESS,
                className: en.g4,
                children: [
                    (0, s.jsx)(f.X, { size: "xxs", color: v.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                    (0, s.jsx)(G.E, { variant: "text-xs/medium", color: "text-feedback-positive", children: d }),
                ],
            }),
            !h &&
                !__OVERLAY__ &&
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)("hr", { className: en.me }),
                        (0, s.jsx)(_.Anchor, {
                            className: et.CU,
                            href: P.A.getArticleURL(w.MVz.VOICE_VIDEO_TROUBLESHOOTING),
                            children: M.intl.string(M.t.hvVgAZ),
                        }),
                    ],
                }),
        ],
    });
};
var ei = n(75811),
    el = n(209426);
function er(e) {
    let { channelId: t } = e,
        n = (0, a.bG)([h.A], () => h.A.getSecureFramesState()?.epochAuthenticator),
        l = (0, B.z)({ fingerprintBase64: n, chunkSize: 5, desiredLength: 30 }),
        [r, o] = i.useState(!1),
        d = i.useMemo(() => l?.join(" "), [l]),
        u = i.useCallback(() => {
            null != d &&
                (0, O.C)(d, () => {
                    o(!0), (0, p.k0)({ channelId: t }), setTimeout(() => o(!1), 2e3);
                });
        }, [t, d]);
    return (0, s.jsxs)("div", {
        className: el.kL,
        children: [
            (0, s.jsx)(c.D, { variant: "text-sm/bold", color: "text-strong", children: M.intl.string(M.t.cTQI5t) }),
            (0, s.jsx)(G.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: M.intl.format(M.t.wKxADe, { helpArticle: (0, V.aW)() }),
            }),
            (0, s.jsx)("div", {
                className: el.on,
                children: (0, s.jsx)(ei.j, { chunks: l, columns: 3, className: el.lu }),
            }),
            null != l &&
                (0, s.jsxs)(q.D, {
                    className: en.n2,
                    onClick: u,
                    children: [
                        (0, s.jsx)("div", {
                            className: r ? en.Dx : en.t6,
                            children: (0, s.jsx)(Y.$, {
                                icon: I.T,
                                text: M.intl.string(M.t.OpuAlK),
                                variant: "secondary",
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                        (0, s.jsx)("div", {
                            className: r ? en.t6 : en.Dx,
                            children: (0, s.jsx)(Y.$, {
                                icon: Q.y,
                                text: M.intl.string(M.t.t5VZ88),
                                variant: "secondary",
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            (0, s.jsx)("hr", { className: en.me }),
            (0, s.jsx)(G.E, { variant: "text-xs/normal", color: "text-subtle", children: M.intl.string(M.t.B9JNsl) }),
            (0, s.jsxs)(ee.Z, {
                type: ee.Z.Types.SUCCESS,
                className: en.g4,
                children: [
                    (0, s.jsx)(f.X, { size: "xxs", color: v.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                    (0, s.jsx)(G.E, {
                        variant: "text-xs/medium",
                        color: "text-feedback-positive",
                        children: M.intl.string(M.t["3BogKe"]),
                    }),
                ],
            }),
        ],
    });
}
let ea = (0, n(250105).Ay)({
    name: "2026-04-rtc-voice-details-refresh",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var eo = n(172115),
    ec = n(9934),
    ed = n(824078);
function eh() {
    return (0, a.cf)([h.A], () => ({
        connectionState: h.A.getState(),
        hostname: h.A.getHostname(),
        averagePing: h.A.getAveragePing(),
        lastPing: h.A.getLastPing(),
        outboundLossRate: h.A.getOutboundLossRate(),
        pings: h.A.getPings(),
    }));
}
function eu(e) {
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
    let { lobbyId: t, connectionTypeText: n, closePopout: i } = e,
        l = eu(t);
    return (0, s.jsx)(es, { ...l, closePopout: i, connectionTypeText: n });
}
function ep(e) {
    let { lobbyId: t, connectionTypeText: n, closePopout: i } = e,
        l = eu(t);
    return (0, s.jsx)(F, { ...l, closePopout: i, connectionTypeText: n });
}
function em(e) {
    let { closePopout: t, connectionTypeText: n } = e,
        i = eh();
    return (0, s.jsx)(es, { ...i, closePopout: t, connectionTypeText: n });
}
function ex(e) {
    let { closePopout: t, connectionTypeText: n } = e,
        i = eh();
    return (0, s.jsx)(F, { ...i, closePopout: t, connectionTypeText: n });
}
function eN(e) {
    let { channelId: t, isOverlay: n, lobbyId: i, closePopout: l } = e,
        r = (0, x.k)({ channelId: t }) ? M.intl.string(M.t["3BogKe"]) : M.intl.string(M.t.ETIVvg);
    return n
        ? (0, s.jsx)(eg, { lobbyId: i, closePopout: l, connectionTypeText: r })
        : (0, s.jsx)(em, { closePopout: l, connectionTypeText: r });
}
function eC(e) {
    let { channelId: t, isOverlay: n, lobbyId: i, closePopout: l } = e,
        r = (0, x.k)({ channelId: t }) ? M.intl.string(M.t["3BogKe"]) : M.intl.string(M.t.ETIVvg);
    return n
        ? (0, s.jsx)(ep, { lobbyId: i, closePopout: l, connectionTypeText: r })
        : (0, s.jsx)(ex, { closePopout: l, connectionTypeText: r });
}
function eE(e) {
    let [t, n] = i.useState(W.Rj.RTC_DEBUG_PANEL),
        l = (0, d.GV)(),
        a = [
            { id: W.Rj.RTC_DEBUG_PANEL, content: (0, s.jsx)(eN, { ...e }) },
            { id: W.Rj.RTC_SECURE_FRAMES, content: (0, s.jsx)(er, { channelId: e.channelId }) },
        ];
    i.useEffect(() => {
        (0, p.Hg)({ channelId: e.channelId, selectedTab: t });
    }, [e.channelId, t]);
    let c = (0, m.c)();
    return (
        i.useEffect(() => {
            c && n(W.Rj.RTC_DEBUG_PANEL);
        }, [c]),
        (0, s.jsxs)("div", {
            className: r()(ed.popover, ec.kL),
            children: [
                (0, s.jsxs)(o.V, {
                    className: ec.vR,
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    children: [
                        (0, s.jsx)(o.V.Item, {
                            id: W.Rj.RTC_DEBUG_PANEL,
                            className: ec.YU,
                            children: M.intl.string(M.t.MBY1Pm),
                        }),
                        c
                            ? null
                            : (0, s.jsx)(o.V.Item, {
                                  id: W.Rj.RTC_SECURE_FRAMES,
                                  className: ec.YU,
                                  children: M.intl.string(M.t.zC6o3s),
                              }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: ec.SZ,
                    children: a.map((e) => {
                        let { id: n, content: i } = e;
                        return (0, s.jsx)(
                            o.V.Panel,
                            { id: n, "aria-labelledby": l, className: n !== t ? ec._t : void 0, children: i },
                            n,
                        );
                    }),
                }),
            ],
        })
    );
}
function eA(e) {
    let t = (0, a.bG)([u.A], () => u.A.hasVideo(e.channelId)),
        [n, l] = i.useState(W.Rj.RTC_DEBUG_PANEL),
        r = (0, d.GV)(),
        h = i.useMemo(() => {
            switch (n) {
                case W.Rj.RTC_DEBUG_PANEL:
                    return (0, s.jsx)(eC, { ...e });
                case W.Rj.RTC_SECURE_FRAMES:
                    return (0, s.jsx)(J, { channelId: e.channelId });
            }
        }, [e, n]);
    i.useEffect(() => {
        (0, p.Hg)({ channelId: e.channelId, selectedTab: n });
    }, [e.channelId, n]);
    let g = (0, m.c)();
    return (
        i.useEffect(() => {
            g && l(W.Rj.RTC_DEBUG_PANEL);
        }, [g]),
        (0, s.jsxs)("div", {
            className: eo.kL,
            children: [
                (0, s.jsx)(c.D, {
                    className: eo.DD,
                    variant: "heading-lg/bold",
                    color: "text-strong",
                    children: t ? M.intl.string(M.t.IlHdW8) : M.intl.string(M.t.WsOisp),
                }),
                (0, s.jsxs)(o.V, {
                    className: eo.vR,
                    selectedItem: n,
                    type: "top",
                    look: "brand",
                    onItemSelect: l,
                    children: [
                        (0, s.jsx)(o.V.Item, {
                            id: W.Rj.RTC_DEBUG_PANEL,
                            className: eo.YU,
                            children: M.intl.string(M.t.MBY1Pm),
                        }),
                        g
                            ? null
                            : (0, s.jsx)(o.V.Item, {
                                  id: W.Rj.RTC_SECURE_FRAMES,
                                  className: eo.YU,
                                  children: M.intl.string(M.t.zC6o3s),
                              }),
                    ],
                }),
                (0, s.jsx)(o.V.Panel, { id: n, "aria-labelledby": r, children: h }),
            ],
        })
    );
}
function ef(e) {
    return (0, x.k)({ channelId: e.channelId })
        ? (0, s.jsx)(eA, { ...e })
        : (0, s.jsx)("div", {
              className: eo.L3,
              children: (0, s.jsx)("section", { className: eo.J8, children: (0, s.jsx)(eC, { ...e }) }),
          });
}
function ev(e) {
    return (0, x.k)({ channelId: e.channelId })
        ? (0, s.jsx)(eE, { ...e })
        : (0, s.jsx)("div", { className: r()(ed.popover, ec.L3), children: (0, s.jsx)(eN, { ...e }) });
}
function e_(e) {
    return ea.useConfig({ location: "RTCConnectionPopout" }).enabled
        ? (0, s.jsx)(ev, { ...e })
        : (0, s.jsx)(ef, { ...e });
}
