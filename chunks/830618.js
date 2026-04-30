n.d(t, { A: () => e_ });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(761508),
    c = n(534514),
    d = n(915089),
    u = n(763827),
    h = n(977997),
    g = n(572487),
    p = n(798286),
    m = n(83942),
    x = n(259374),
    N = n(205693),
    f = n(691540),
    C = n(857250),
    A = n(97483),
    E = n(194261),
    v = n(661531),
    _ = n(349288),
    I = n(811893),
    T = n(624479),
    S = n(233545),
    R = n(229659),
    j = n(253932),
    y = n(51760),
    D = n(954571),
    O = n(957565),
    P = n(975571),
    b = n(917592),
    M = n(652215),
    w = n(731854),
    L = n(985018),
    U = n(666153);
let k = () => {
    y.Ay.getMediaEngine().once(N.bg.ConnectionStats, (e) => {
        let t = JSON.stringify(
            Object.values(w.x)
                .map((t) => {
                    let n = e
                        .filter((e) => {
                            let { connection: n } = e;
                            return n.context === t;
                        })
                        .map((e, n) => {
                            let l = e.stats;
                            return (l.context = t), (l.index = n), l;
                        });
                    for (let e of n) e?.transport?.localAddress != null && (e.transport.localAddress = "(redacted)");
                    return n;
                })
                .filter((e) => e.length > 0),
            null,
            2,
        );
        (0, O.C)(t, () => (0, f.P0)((0, C.o)(L.intl.string(L.t.t5VZ88), A.Ck.SUCCESS)));
    });
};
function G(e) {
    (0, i.useEffect)(() => {
        D.default.track(M.HAw.OPEN_POPOUT, { type: "RTC Connection" });
    }, []);
    let t = (0, i.useCallback)(() => {
            let { closePopout: t } = e;
            null != t && t(), S.ho();
        }, [e]),
        n = (0, i.useCallback)(() => {
            let { hostname: t, averagePing: n, lastPing: s, outboundLossRate: a } = e,
                o = j.Q_.getSetting();
            return (0, l.jsxs)(i.Fragment, {
                children: [
                    o &&
                        (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)("div", {
                                    className: U.o0,
                                    children: (0, l.jsx)(R.A, { dataPoints: e.pings, width: 258, height: 80 }),
                                }),
                                (0, l.jsx)("div", {
                                    className: U.xB,
                                    children: (0, l.jsx)("strong", { children: b.A.getShortHostname(t) }),
                                }),
                            ],
                        }),
                    (0, l.jsx)("div", {
                        className: U.xB,
                        children: L.intl.format(L.t["X58/lN"], { averagePing: n.toFixed(0) }),
                    }),
                    null != s
                        ? (0, l.jsx)("div", {
                              className: U.xB,
                              children: L.intl.format(L.t["6iv2TF"], { lastPing: s.toFixed(0) }),
                          })
                        : null,
                    null != a
                        ? (0, l.jsx)("div", {
                              className: U.xB,
                              children: L.intl.format(L.t["VIBJM+"], { outboundLossRate: a.toFixed(1) }),
                          })
                        : null,
                    (0, l.jsxs)("div", {
                        className: r()(U.xB, U.xJ),
                        children: [
                            null == a ? L.intl.formatToPlainString(L.t.vggaMt, { badPing: 250 }) : null,
                            null != a
                                ? L.intl.formatToPlainString(L.t["3pFz1P"], { badPing: 250, badLossRate: 10 })
                                : null,
                        ],
                    }),
                ],
            });
        }, [e]),
        { connectionState: s, connectionTypeText: a } = e,
        o = j.Q_.getSetting(),
        c = {
            [M.S7L.AWAITING_ENDPOINT]: L.intl.format(L.t.Eu2vUR, { url: M.qF7.STATUS }),
            [M.S7L.CONNECTING]: L.intl.string(L.t["y+E8aD"]),
            [M.S7L.AUTHENTICATING]: L.intl.string(L.t["5lGIZH"]),
            [M.S7L.DISCONNECTED]: L.intl.string(L.t.fOX25I),
            [M.S7L.RTC_CONNECTING]: L.intl.string(L.t.b5Ubd5),
            [M.S7L.ICE_CHECKING]: L.intl.format(L.t.SyoYUb, { url: P.A.getArticleURL(M.MVz.VOICE_CONNECTION_ERRORS) }),
            [M.S7L.DTLS_CONNECTING]: L.intl.format(L.t.SyoYUb, {
                url: P.A.getArticleURL(M.MVz.VOICE_CONNECTION_ERRORS),
            }),
            [M.S7L.RTC_CONNECTED]: n,
            [M.S7L.NO_ROUTE]: L.intl.format(L.t["2tgQnk"], { url: P.A.getArticleURL(M.MVz.VOICE_CONNECTION_ERRORS) }),
            [M.S7L.RTC_DISCONNECTED]: L.intl.string(L.t.fOX25I),
        }[s];
    return (0, l.jsxs)(l.Fragment, {
        children: [
            "function" == typeof c ? c() : (0, l.jsx)("p", { className: r()(U.xB, U.xJ), children: c }),
            (0, l.jsx)("hr", { className: U.me }),
            (0, l.jsxs)("div", {
                className: U.Vf,
                children: [
                    (0, l.jsxs)("span", {
                        className: r()(U.uO, U.ro),
                        children: [
                            (0, l.jsx)(E.X, {
                                size: "xxs",
                                color: v.A.colors.TEXT_FEEDBACK_POSITIVE.css,
                                className: U.__invalid_icon,
                            }),
                            a,
                        ],
                    }),
                    o &&
                        y.Ay.supports(w.O5.DIAGNOSTICS) &&
                        !__OVERLAY__ &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)(_.Anchor, {
                                    className: r()(U.Ce, U.ro),
                                    onClick: t,
                                    children: [
                                        L.intl.string(L.t.KBoWg9),
                                        (0, l.jsx)(I.t, {
                                            size: "xxs",
                                            color: "currentColor",
                                            className: U.__invalid_icon,
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)(_.Anchor, {
                                    className: r()(U.d3, U.ro),
                                    onClick: k,
                                    title: "Copy to clipboard",
                                    children: [
                                        L.intl.string(L.t["XEb+Sj"]),
                                        (0, l.jsx)(T.T, {
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
                        (0, l.jsx)(_.Anchor, {
                            className: U.Ce,
                            href: P.A.getArticleURL(M.MVz.VOICE_VIDEO_TROUBLESHOOTING),
                            children: L.intl.string(L.t.hvVgAZ),
                        }),
                ],
            }),
        ],
    });
}
var F = n(834730),
    B = n(814278),
    V = n(998759),
    H = n(289873),
    z = n(277639);
function Z(e) {
    let { chunks: t, columns: n, className: s } = e,
        a = i.useMemo(() => ({ "--secure-frames-columns": n }), [n]);
    return null == t
        ? (0, l.jsx)("div", { className: z.Lq, children: (0, l.jsx)(H.y, {}) })
        : (0, l.jsx)("div", {
              style: a,
              className: r()(z.aY, s),
              children: t.map((e, t) =>
                  (0, l.jsx)(
                      "div",
                      {
                          className: r()(z.iv, { [z.yF]: t > n - 1 }),
                          children: (0, l.jsx)(F.E, {
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
function Y(e) {
    let { channelId: t } = e,
        n = (0, a.bG)([u.A], () => u.A.getSecureFramesState()?.epochAuthenticator),
        s = (0, V.z)({ fingerprintBase64: n, chunkSize: 5, desiredLength: 30 }),
        r = i.useCallback(() => {
            (0, p.k0)({ channelId: t });
        }, [t]);
    return (0, l.jsxs)("div", {
        className: X.kL,
        children: [
            (0, l.jsxs)("div", {
                className: X.Tc,
                children: [
                    (0, l.jsx)(E.X, { size: "xxs", color: v.A.colors.TEXT_FEEDBACK_POSITIVE }),
                    (0, l.jsx)(F.E, {
                        variant: "text-xs/medium",
                        color: "text-feedback-positive",
                        children: L.intl.string(L.t["3BogKe"]),
                    }),
                ],
            }),
            (0, l.jsx)(F.E, { variant: "text-xs/normal", color: "text-subtle", children: L.intl.string(L.t.B9JNsl) }),
            (0, l.jsxs)("div", {
                className: X.wx,
                children: [
                    (0, l.jsx)(c.D, {
                        variant: "text-sm/bold",
                        color: "text-strong",
                        children: L.intl.string(L.t.cTQI5t),
                    }),
                    null != s &&
                        (0, l.jsx)(K.c, { chunks: s, color: v.A.colors.INTERACTIVE_TEXT_DEFAULT.css, onCopy: r }),
                ],
            }),
            (0, l.jsx)(Z, { className: X.aY, chunks: s, columns: 3 }),
            (0, l.jsx)(F.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: L.intl.format(L.t.wKxADe, { helpArticle: (0, B.aW)() }),
            }),
        ],
    });
}
var J = n(821609),
    q = n(92446),
    $ = n(939249),
    Q = n(628284),
    ee = n(359778),
    et = n(394952),
    en = n(291614);
let el = function (e) {
    let [t, n] = (0, i.useState)(!1);
    (0, i.useEffect)(() => {
        D.default.track(M.HAw.OPEN_POPOUT, { type: "RTC Connection" });
    }, []);
    let s = (0, i.useCallback)(() => {
            let { closePopout: t } = e;
            null != t && t(), S.ho();
        }, [e]),
        r = (0, i.useCallback)(() => {
            var e;
            (e = () => {
                n(!0), setTimeout(() => n(!1), 2e3);
            }),
                y.Ay.getMediaEngine().once(N.bg.ConnectionStats, (t) => {
                    let n = JSON.stringify(
                        Object.values(w.x)
                            .map((e) => {
                                let n = t
                                    .filter((t) => {
                                        let { connection: n } = t;
                                        return n.context === e;
                                    })
                                    .map((t, n) => {
                                        let l = t.stats;
                                        return (l.context = e), (l.index = n), l;
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
                ? L.intl.formatToPlainString(L.t["3pFz1P"], { badPing: 250, badLossRate: 10 })
                : L.intl.formatToPlainString(L.t.vggaMt, { badPing: 250 }),
        o = (0, i.useCallback)(() => {
            let { hostname: t, averagePing: n, lastPing: s, outboundLossRate: r } = e,
                o = j.Q_.getSetting();
            return (0, l.jsxs)(i.Fragment, {
                children: [
                    o &&
                        (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)("div", {
                                    className: et.o0,
                                    children: (0, l.jsx)(R.A, { dataPoints: e.pings, width: 258, height: 80 }),
                                }),
                                (0, l.jsx)(F.E, {
                                    variant: "text-sm/bold",
                                    color: "text-default",
                                    className: et.VU,
                                    children: b.A.getShortHostname(t),
                                }),
                            ],
                        }),
                    (0, l.jsx)("div", {
                        className: et.ew,
                        children: (0, l.jsxs)("div", {
                            className: et.zS,
                            children: [
                                (0, l.jsx)(F.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: et.VU,
                                    children: L.intl.format(L.t["X58/lN"], { averagePing: n.toFixed(0) }),
                                }),
                                null != s
                                    ? (0, l.jsx)(F.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          className: et.VU,
                                          children: L.intl.format(L.t["6iv2TF"], { lastPing: s.toFixed(0) }),
                                      })
                                    : null,
                                null != r
                                    ? (0, l.jsx)(F.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          className: et.VU,
                                          children: L.intl.format(L.t["VIBJM+"], { outboundLossRate: r.toFixed(1) }),
                                      })
                                    : null,
                            ],
                        }),
                    }),
                    (0, l.jsx)(F.E, { variant: "text-xs/normal", color: "text-muted", children: a }),
                ],
            });
        }, [e, a]),
        { connectionState: c, connectionTypeText: d } = e,
        u = j.Q_.getSetting(),
        h = {
            [M.S7L.AWAITING_ENDPOINT]: L.intl.format(L.t.Eu2vUR, { url: M.qF7.STATUS }),
            [M.S7L.CONNECTING]: L.intl.string(L.t["y+E8aD"]),
            [M.S7L.AUTHENTICATING]: L.intl.string(L.t["5lGIZH"]),
            [M.S7L.DISCONNECTED]: L.intl.string(L.t.fOX25I),
            [M.S7L.RTC_CONNECTING]: L.intl.string(L.t.b5Ubd5),
            [M.S7L.ICE_CHECKING]: L.intl.format(L.t.SyoYUb, { url: P.A.getArticleURL(M.MVz.VOICE_CONNECTION_ERRORS) }),
            [M.S7L.DTLS_CONNECTING]: L.intl.format(L.t.SyoYUb, {
                url: P.A.getArticleURL(M.MVz.VOICE_CONNECTION_ERRORS),
            }),
            [M.S7L.RTC_CONNECTED]: o,
            [M.S7L.NO_ROUTE]: L.intl.format(L.t["2tgQnk"], { url: P.A.getArticleURL(M.MVz.VOICE_CONNECTION_ERRORS) }),
            [M.S7L.RTC_DISCONNECTED]: L.intl.string(L.t.fOX25I),
        }[c];
    return (0, l.jsxs)("div", {
        className: et.kL,
        children: [
            "function" == typeof h
                ? h()
                : (0, l.jsx)(F.E, { tag: "p", variant: "text-sm/normal", color: "text-muted", children: h }),
            u &&
                y.Ay.supports(w.O5.DIAGNOSTICS) &&
                !__OVERLAY__ &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)("hr", { className: en.me }),
                        (0, l.jsxs)("div", {
                            className: et.pw,
                            children: [
                                (0, l.jsx)(J.$, {
                                    icon: q.Q,
                                    text: L.intl.string(L.t.KBoWg9),
                                    variant: "secondary",
                                    size: "sm",
                                    fullWidth: !0,
                                    onClick: s,
                                }),
                                (0, l.jsxs)($.D, {
                                    className: `${en.n2} ${et.n2}`,
                                    onClick: r,
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: t ? en.Dx : en.t6,
                                            children: (0, l.jsx)(J.$, {
                                                icon: T.T,
                                                text: L.intl.string(L.t["XEb+Sj"]),
                                                variant: "secondary",
                                                size: "sm",
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, l.jsx)("div", {
                                            className: t ? en.t6 : en.Dx,
                                            children: (0, l.jsx)(J.$, {
                                                icon: Q.y,
                                                text: L.intl.string(L.t.t5VZ88),
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
            (0, l.jsxs)(ee.Z, {
                type: ee.Z.Types.SUCCESS,
                className: en.g4,
                children: [
                    (0, l.jsx)(E.X, { size: "xxs", color: v.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                    (0, l.jsx)(F.E, { variant: "text-xs/medium", color: "text-feedback-positive", children: d }),
                ],
            }),
            !u &&
                !__OVERLAY__ &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)("hr", { className: en.me }),
                        (0, l.jsx)(_.Anchor, {
                            className: et.CU,
                            href: P.A.getArticleURL(M.MVz.VOICE_VIDEO_TROUBLESHOOTING),
                            children: L.intl.string(L.t.hvVgAZ),
                        }),
                    ],
                }),
        ],
    });
};
var ei = n(75811),
    es = n(209426);
function er(e) {
    let { channelId: t } = e,
        n = (0, a.bG)([u.A], () => u.A.getSecureFramesState()?.epochAuthenticator),
        s = (0, V.z)({ fingerprintBase64: n, chunkSize: 5, desiredLength: 30 }),
        [r, o] = i.useState(!1),
        d = i.useMemo(() => s?.join(" "), [s]),
        h = i.useCallback(() => {
            null != d &&
                (0, O.C)(d, () => {
                    o(!0), (0, p.k0)({ channelId: t }), setTimeout(() => o(!1), 2e3);
                });
        }, [t, d]);
    return (0, l.jsxs)("div", {
        className: es.kL,
        children: [
            (0, l.jsx)(c.D, { variant: "text-sm/bold", color: "text-strong", children: L.intl.string(L.t.cTQI5t) }),
            (0, l.jsx)(F.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: L.intl.format(L.t.wKxADe, { helpArticle: (0, B.aW)() }),
            }),
            (0, l.jsx)("div", {
                className: es.on,
                children: (0, l.jsx)(ei.j, { chunks: s, columns: 3, className: es.lu }),
            }),
            null != s &&
                (0, l.jsxs)($.D, {
                    className: en.n2,
                    onClick: h,
                    children: [
                        (0, l.jsx)("div", {
                            className: r ? en.Dx : en.t6,
                            children: (0, l.jsx)(J.$, {
                                icon: T.T,
                                text: L.intl.string(L.t.OpuAlK),
                                variant: "secondary",
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                        (0, l.jsx)("div", {
                            className: r ? en.t6 : en.Dx,
                            children: (0, l.jsx)(J.$, {
                                icon: Q.y,
                                text: L.intl.string(L.t.t5VZ88),
                                variant: "secondary",
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            (0, l.jsx)("hr", { className: en.me }),
            (0, l.jsx)(F.E, { variant: "text-xs/normal", color: "text-subtle", children: L.intl.string(L.t.B9JNsl) }),
            (0, l.jsxs)(ee.Z, {
                type: ee.Z.Types.SUCCESS,
                className: en.g4,
                children: [
                    (0, l.jsx)(E.X, { size: "xxs", color: v.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                    (0, l.jsx)(F.E, {
                        variant: "text-xs/medium",
                        color: "text-feedback-positive",
                        children: L.intl.string(L.t["3BogKe"]),
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
function eu() {
    return (0, a.cf)([u.A], () => ({
        connectionState: u.A.getState(),
        hostname: u.A.getHostname(),
        averagePing: u.A.getAveragePing(),
        lastPing: u.A.getLastPing(),
        outboundLossRate: u.A.getOutboundLossRate(),
        pings: u.A.getPings(),
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
    let { lobbyId: t, connectionTypeText: n, closePopout: i } = e,
        s = eh(t);
    return (0, l.jsx)(el, { ...s, closePopout: i, connectionTypeText: n });
}
function ep(e) {
    let { lobbyId: t, connectionTypeText: n, closePopout: i } = e,
        s = eh(t);
    return (0, l.jsx)(G, { ...s, closePopout: i, connectionTypeText: n });
}
function em(e) {
    let { closePopout: t, connectionTypeText: n } = e,
        i = eu();
    return (0, l.jsx)(el, { ...i, closePopout: t, connectionTypeText: n });
}
function ex(e) {
    let { closePopout: t, connectionTypeText: n } = e,
        i = eu();
    return (0, l.jsx)(G, { ...i, closePopout: t, connectionTypeText: n });
}
function eN(e) {
    let { channelId: t, isOverlay: n, lobbyId: i, closePopout: s } = e,
        r = (0, x.k)({ channelId: t }) ? L.intl.string(L.t["3BogKe"]) : L.intl.string(L.t.ETIVvg);
    return n
        ? (0, l.jsx)(eg, { lobbyId: i, closePopout: s, connectionTypeText: r })
        : (0, l.jsx)(em, { closePopout: s, connectionTypeText: r });
}
function ef(e) {
    let { channelId: t, isOverlay: n, lobbyId: i, closePopout: s } = e,
        r = (0, x.k)({ channelId: t }) ? L.intl.string(L.t["3BogKe"]) : L.intl.string(L.t.ETIVvg);
    return n
        ? (0, l.jsx)(ep, { lobbyId: i, closePopout: s, connectionTypeText: r })
        : (0, l.jsx)(ex, { closePopout: s, connectionTypeText: r });
}
function eC(e) {
    let [t, n] = i.useState(W.Rj.RTC_DEBUG_PANEL),
        s = (0, d.GV)(),
        a = [
            { id: W.Rj.RTC_DEBUG_PANEL, content: (0, l.jsx)(eN, { ...e }) },
            { id: W.Rj.RTC_SECURE_FRAMES, content: (0, l.jsx)(er, { channelId: e.channelId }) },
        ];
    i.useEffect(() => {
        (0, p.Hg)({ channelId: e.channelId, selectedTab: t });
    }, [e.channelId, t]);
    let c = (0, m.c)();
    return (
        i.useEffect(() => {
            c && n(W.Rj.RTC_DEBUG_PANEL);
        }, [c]),
        (0, l.jsxs)("div", {
            className: r()(ed.popover, ec.kL),
            children: [
                (0, l.jsxs)(o.V, {
                    className: ec.vR,
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    children: [
                        (0, l.jsx)(o.V.Item, {
                            id: W.Rj.RTC_DEBUG_PANEL,
                            className: ec.YU,
                            children: L.intl.string(L.t.MBY1Pm),
                        }),
                        c
                            ? null
                            : (0, l.jsx)(o.V.Item, {
                                  id: W.Rj.RTC_SECURE_FRAMES,
                                  className: ec.YU,
                                  children: L.intl.string(L.t.zC6o3s),
                              }),
                    ],
                }),
                (0, l.jsx)("div", {
                    className: ec.SZ,
                    children: a.map((e) => {
                        let { id: n, content: i } = e;
                        return (0, l.jsx)(
                            o.V.Panel,
                            { id: n, "aria-labelledby": s, className: n !== t ? ec._t : void 0, children: i },
                            n,
                        );
                    }),
                }),
            ],
        })
    );
}
function eA(e) {
    let t = (0, a.bG)([h.A], () => h.A.hasVideo(e.channelId)),
        [n, s] = i.useState(W.Rj.RTC_DEBUG_PANEL),
        r = (0, d.GV)(),
        u = i.useMemo(() => {
            switch (n) {
                case W.Rj.RTC_DEBUG_PANEL:
                    return (0, l.jsx)(ef, { ...e });
                case W.Rj.RTC_SECURE_FRAMES:
                    return (0, l.jsx)(Y, { channelId: e.channelId });
            }
        }, [e, n]);
    i.useEffect(() => {
        (0, p.Hg)({ channelId: e.channelId, selectedTab: n });
    }, [e.channelId, n]);
    let g = (0, m.c)();
    return (
        i.useEffect(() => {
            g && s(W.Rj.RTC_DEBUG_PANEL);
        }, [g]),
        (0, l.jsxs)("div", {
            className: eo.kL,
            children: [
                (0, l.jsx)(c.D, {
                    className: eo.DD,
                    variant: "heading-lg/bold",
                    color: "text-strong",
                    children: t ? L.intl.string(L.t.IlHdW8) : L.intl.string(L.t.WsOisp),
                }),
                (0, l.jsxs)(o.V, {
                    className: eo.vR,
                    selectedItem: n,
                    type: "top",
                    look: "brand",
                    onItemSelect: s,
                    children: [
                        (0, l.jsx)(o.V.Item, {
                            id: W.Rj.RTC_DEBUG_PANEL,
                            className: eo.YU,
                            children: L.intl.string(L.t.MBY1Pm),
                        }),
                        g
                            ? null
                            : (0, l.jsx)(o.V.Item, {
                                  id: W.Rj.RTC_SECURE_FRAMES,
                                  className: eo.YU,
                                  children: L.intl.string(L.t.zC6o3s),
                              }),
                    ],
                }),
                (0, l.jsx)(o.V.Panel, { id: n, "aria-labelledby": r, children: u }),
            ],
        })
    );
}
function eE(e) {
    return (0, x.k)({ channelId: e.channelId })
        ? (0, l.jsx)(eA, { ...e })
        : (0, l.jsx)("div", {
              className: eo.L3,
              children: (0, l.jsx)("section", { className: eo.J8, children: (0, l.jsx)(ef, { ...e }) }),
          });
}
function ev(e) {
    return (0, x.k)({ channelId: e.channelId })
        ? (0, l.jsx)(eC, { ...e })
        : (0, l.jsx)("div", { className: r()(ed.popover, ec.L3), children: (0, l.jsx)(eN, { ...e }) });
}
function e_(e) {
    return ea.useConfig({ location: "RTCConnectionPopout" }).enabled
        ? (0, l.jsx)(ev, { ...e })
        : (0, l.jsx)(eE, { ...e });
}
