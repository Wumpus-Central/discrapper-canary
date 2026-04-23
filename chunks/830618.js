n.d(t, { A: () => eT });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(17928),
    o = n(761508),
    c = n(534514),
    d = n(915089),
    u = n(763827),
    h = n(977997),
    g = n(572487),
    m = n(798286),
    A = n(83942),
    p = n(259374),
    C = n(205693),
    E = n(691540),
    x = n(857250),
    N = n(97483),
    f = n(194261),
    _ = n(661531),
    T = n(349288),
    v = n(811893),
    I = n(624479),
    S = n(233545),
    j = n(229659),
    y = n(253932),
    R = n(969341),
    P = n(954571),
    O = n(957565),
    D = n(975571),
    b = n(917592),
    M = n(652215),
    L = n(731854),
    w = n(985018),
    U = n(666153);
let G = () => {
    R.Ay.getMediaEngine().once(C.bg.ConnectionStats, (e) => {
        let t = JSON.stringify(
            Object.values(L.x)
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
        (0, O.C)(t, () => (0, E.P0)((0, x.o)(w.intl.string(w.t.t5VZ88), N.Ck.SUCCESS)));
    });
};
function k(e) {
    (0, i.useEffect)(() => {
        P.default.track(M.HAw.OPEN_POPOUT, { type: "RTC Connection" });
    }, []);
    let t = (0, i.useCallback)(() => {
            let { closePopout: t } = e;
            null != t && t(), S.ho();
        }, [e]),
        n = (0, i.useCallback)(() => {
            let { hostname: t, averagePing: n, lastPing: s, outboundLossRate: r } = e,
                o = y.Q_.getSetting();
            return (0, l.jsxs)(i.Fragment, {
                children: [
                    o &&
                        (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)("div", {
                                    className: U.o0,
                                    children: (0, l.jsx)(j.A, { dataPoints: e.pings, width: 258, height: 80 }),
                                }),
                                (0, l.jsx)("div", {
                                    className: U.xB,
                                    children: (0, l.jsx)("strong", { children: b.A.getShortHostname(t) }),
                                }),
                            ],
                        }),
                    (0, l.jsx)("div", {
                        className: U.xB,
                        children: w.intl.format(w.t["X58/lN"], { averagePing: n.toFixed(0) }),
                    }),
                    null != s
                        ? (0, l.jsx)("div", {
                              className: U.xB,
                              children: w.intl.format(w.t["6iv2TF"], { lastPing: s.toFixed(0) }),
                          })
                        : null,
                    null != r
                        ? (0, l.jsx)("div", {
                              className: U.xB,
                              children: w.intl.format(w.t["VIBJM+"], { outboundLossRate: r.toFixed(1) }),
                          })
                        : null,
                    (0, l.jsxs)("div", {
                        className: a()(U.xB, U.xJ),
                        children: [
                            null == r ? w.intl.formatToPlainString(w.t.vggaMt, { badPing: 250 }) : null,
                            null != r
                                ? w.intl.formatToPlainString(w.t["3pFz1P"], { badPing: 250, badLossRate: 10 })
                                : null,
                        ],
                    }),
                ],
            });
        }, [e]),
        { connectionState: s, connectionTypeText: r } = e,
        o = y.Q_.getSetting(),
        c = {
            [M.S7L.AWAITING_ENDPOINT]: w.intl.format(w.t.Eu2vUR, { url: M.qF7.STATUS }),
            [M.S7L.CONNECTING]: w.intl.string(w.t["y+E8aD"]),
            [M.S7L.AUTHENTICATING]: w.intl.string(w.t["5lGIZH"]),
            [M.S7L.DISCONNECTED]: w.intl.string(w.t.fOX25I),
            [M.S7L.RTC_CONNECTING]: w.intl.string(w.t.b5Ubd5),
            [M.S7L.ICE_CHECKING]: w.intl.format(w.t.SyoYUb, { url: D.A.getArticleURL(M.MVz.VOICE_CONNECTION_ERRORS) }),
            [M.S7L.DTLS_CONNECTING]: w.intl.format(w.t.SyoYUb, {
                url: D.A.getArticleURL(M.MVz.VOICE_CONNECTION_ERRORS),
            }),
            [M.S7L.RTC_CONNECTED]: n,
            [M.S7L.NO_ROUTE]: w.intl.format(w.t["2tgQnk"], { url: D.A.getArticleURL(M.MVz.VOICE_CONNECTION_ERRORS) }),
            [M.S7L.RTC_DISCONNECTED]: w.intl.string(w.t.fOX25I),
        }[s];
    return (0, l.jsxs)(l.Fragment, {
        children: [
            "function" == typeof c ? c() : (0, l.jsx)("p", { className: a()(U.xB, U.xJ), children: c }),
            (0, l.jsx)("hr", { className: U.me }),
            (0, l.jsxs)("div", {
                className: U.Vf,
                children: [
                    (0, l.jsxs)("span", {
                        className: a()(U.uO, U.ro),
                        children: [
                            (0, l.jsx)(f.X, {
                                size: "xxs",
                                color: _.A.colors.TEXT_FEEDBACK_POSITIVE.css,
                                className: U.__invalid_icon,
                            }),
                            r,
                        ],
                    }),
                    o &&
                        R.Ay.supports(L.O5.DIAGNOSTICS) &&
                        !__OVERLAY__ &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)(T.Anchor, {
                                    className: a()(U.Ce, U.ro),
                                    onClick: t,
                                    children: [
                                        w.intl.string(w.t.KBoWg9),
                                        (0, l.jsx)(v.t, {
                                            size: "xxs",
                                            color: "currentColor",
                                            className: U.__invalid_icon,
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)(T.Anchor, {
                                    className: a()(U.d3, U.ro),
                                    onClick: G,
                                    title: "Copy to clipboard",
                                    children: [
                                        w.intl.string(w.t["XEb+Sj"]),
                                        (0, l.jsx)(I.T, {
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
                        (0, l.jsx)(T.Anchor, {
                            className: U.Ce,
                            href: D.A.getArticleURL(M.MVz.VOICE_VIDEO_TROUBLESHOOTING),
                            children: w.intl.string(w.t.hvVgAZ),
                        }),
                ],
            }),
        ],
    });
}
var F = n(834730),
    V = n(814278),
    H = n(998759),
    B = n(289873),
    z = n(277639);
function W(e) {
    let { chunks: t, columns: n, className: s } = e,
        r = i.useMemo(() => ({ "--secure-frames-columns": n }), [n]);
    return null == t
        ? (0, l.jsx)("div", { className: z.Lq, children: (0, l.jsx)(B.y, {}) })
        : (0, l.jsx)("div", {
              style: r,
              className: a()(z.aY, s),
              children: t.map((e, t) =>
                  (0, l.jsx)(
                      "div",
                      {
                          className: a()(z.iv, { [z.yF]: t > n - 1 }),
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
    J = n(603266),
    Z = n(555273);
function X(e) {
    let { channelId: t } = e,
        n = (0, r.bG)([u.A], () => u.A.getSecureFramesState()?.epochAuthenticator),
        s = (0, H.z)({ fingerprintBase64: n, chunkSize: 5, desiredLength: 30 }),
        a = i.useCallback(() => {
            (0, m.k0)({ channelId: t });
        }, [t]);
    return (0, l.jsxs)("div", {
        className: Z.kL,
        children: [
            (0, l.jsxs)("div", {
                className: Z.Tc,
                children: [
                    (0, l.jsx)(f.X, { size: "xxs", color: _.A.colors.TEXT_FEEDBACK_POSITIVE }),
                    (0, l.jsx)(F.E, {
                        variant: "text-xs/medium",
                        color: "text-feedback-positive",
                        children: w.intl.string(w.t["3BogKe"]),
                    }),
                ],
            }),
            (0, l.jsx)(F.E, { variant: "text-xs/normal", color: "text-subtle", children: w.intl.string(w.t.B9JNsl) }),
            (0, l.jsxs)("div", {
                className: Z.wx,
                children: [
                    (0, l.jsx)(c.D, {
                        variant: "text-sm/bold",
                        color: "text-strong",
                        children: w.intl.string(w.t.cTQI5t),
                    }),
                    null != s &&
                        (0, l.jsx)(K.c, { chunks: s, color: _.A.colors.INTERACTIVE_TEXT_DEFAULT.css, onCopy: a }),
                ],
            }),
            (0, l.jsx)(W, { className: Z.aY, chunks: s, columns: 3 }),
            (0, l.jsx)(F.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: w.intl.format(w.t.wKxADe, { helpArticle: (0, V.aW)() }),
            }),
        ],
    });
}
var Y = n(821609),
    q = n(92446),
    $ = n(939249),
    Q = n(628284),
    ee = n(359778),
    et = n(394952),
    en = n(291614);
let el = function (e) {
    let [t, n] = (0, i.useState)(!1);
    (0, i.useEffect)(() => {
        P.default.track(M.HAw.OPEN_POPOUT, { type: "RTC Connection" });
    }, []);
    let s = (0, i.useCallback)(() => {
            let { closePopout: t } = e;
            null != t && t(), S.ho();
        }, [e]),
        a = (0, i.useCallback)(() => {
            var e;
            (e = () => {
                n(!0), setTimeout(() => n(!1), 2e3);
            }),
                R.Ay.getMediaEngine().once(C.bg.ConnectionStats, (t) => {
                    let n = JSON.stringify(
                        Object.values(L.x)
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
        r =
            null != e.outboundLossRate
                ? w.intl.formatToPlainString(w.t["3pFz1P"], { badPing: 250, badLossRate: 10 })
                : w.intl.formatToPlainString(w.t.vggaMt, { badPing: 250 }),
        o = (0, i.useCallback)(() => {
            let { hostname: t, averagePing: n, lastPing: s, outboundLossRate: a } = e,
                o = y.Q_.getSetting();
            return (0, l.jsxs)(i.Fragment, {
                children: [
                    o &&
                        (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)("div", {
                                    className: et.o0,
                                    children: (0, l.jsx)(j.A, { dataPoints: e.pings, width: 258, height: 80 }),
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
                                    children: w.intl.format(w.t["X58/lN"], { averagePing: n.toFixed(0) }),
                                }),
                                null != s
                                    ? (0, l.jsx)(F.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          className: et.VU,
                                          children: w.intl.format(w.t["6iv2TF"], { lastPing: s.toFixed(0) }),
                                      })
                                    : null,
                                null != a
                                    ? (0, l.jsx)(F.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          className: et.VU,
                                          children: w.intl.format(w.t["VIBJM+"], { outboundLossRate: a.toFixed(1) }),
                                      })
                                    : null,
                            ],
                        }),
                    }),
                    (0, l.jsx)(F.E, { variant: "text-xs/normal", color: "text-muted", children: r }),
                ],
            });
        }, [e, r]),
        { connectionState: c, connectionTypeText: d } = e,
        u = y.Q_.getSetting(),
        h = {
            [M.S7L.AWAITING_ENDPOINT]: w.intl.format(w.t.Eu2vUR, { url: M.qF7.STATUS }),
            [M.S7L.CONNECTING]: w.intl.string(w.t["y+E8aD"]),
            [M.S7L.AUTHENTICATING]: w.intl.string(w.t["5lGIZH"]),
            [M.S7L.DISCONNECTED]: w.intl.string(w.t.fOX25I),
            [M.S7L.RTC_CONNECTING]: w.intl.string(w.t.b5Ubd5),
            [M.S7L.ICE_CHECKING]: w.intl.format(w.t.SyoYUb, { url: D.A.getArticleURL(M.MVz.VOICE_CONNECTION_ERRORS) }),
            [M.S7L.DTLS_CONNECTING]: w.intl.format(w.t.SyoYUb, {
                url: D.A.getArticleURL(M.MVz.VOICE_CONNECTION_ERRORS),
            }),
            [M.S7L.RTC_CONNECTED]: o,
            [M.S7L.NO_ROUTE]: w.intl.format(w.t["2tgQnk"], { url: D.A.getArticleURL(M.MVz.VOICE_CONNECTION_ERRORS) }),
            [M.S7L.RTC_DISCONNECTED]: w.intl.string(w.t.fOX25I),
        }[c];
    return (0, l.jsxs)("div", {
        className: et.kL,
        children: [
            "function" == typeof h
                ? h()
                : (0, l.jsx)(F.E, { tag: "p", variant: "text-sm/normal", color: "text-muted", children: h }),
            u &&
                R.Ay.supports(L.O5.DIAGNOSTICS) &&
                !__OVERLAY__ &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)("hr", { className: en.me }),
                        (0, l.jsxs)("div", {
                            className: et.pw,
                            children: [
                                (0, l.jsx)(Y.$, {
                                    icon: q.Q,
                                    text: w.intl.string(w.t.KBoWg9),
                                    variant: "secondary",
                                    size: "sm",
                                    fullWidth: !0,
                                    onClick: s,
                                }),
                                (0, l.jsxs)($.D, {
                                    className: `${en.n2} ${et.n2}`,
                                    onClick: a,
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: t ? en.Dx : en.t6,
                                            children: (0, l.jsx)(Y.$, {
                                                icon: I.T,
                                                text: w.intl.string(w.t["XEb+Sj"]),
                                                variant: "secondary",
                                                size: "sm",
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, l.jsx)("div", {
                                            className: t ? en.t6 : en.Dx,
                                            children: (0, l.jsx)(Y.$, {
                                                icon: Q.y,
                                                text: w.intl.string(w.t.t5VZ88),
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
                    (0, l.jsx)(f.X, { size: "xxs", color: _.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                    (0, l.jsx)(F.E, { variant: "text-xs/medium", color: "text-feedback-positive", children: d }),
                ],
            }),
            !u &&
                !__OVERLAY__ &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)("hr", { className: en.me }),
                        (0, l.jsx)(T.Anchor, {
                            className: et.CU,
                            href: D.A.getArticleURL(M.MVz.VOICE_VIDEO_TROUBLESHOOTING),
                            children: w.intl.string(w.t.hvVgAZ),
                        }),
                    ],
                }),
        ],
    });
};
var ei = n(75811),
    es = n(209426);
function ea(e) {
    let { channelId: t } = e,
        n = (0, r.bG)([u.A], () => u.A.getSecureFramesState()?.epochAuthenticator),
        s = (0, H.z)({ fingerprintBase64: n, chunkSize: 5, desiredLength: 30 }),
        [a, o] = i.useState(!1),
        d = i.useMemo(() => s?.join(" "), [s]),
        h = i.useCallback(() => {
            null != d &&
                (0, O.C)(d, () => {
                    o(!0), (0, m.k0)({ channelId: t }), setTimeout(() => o(!1), 2e3);
                });
        }, [t, d]);
    return (0, l.jsxs)("div", {
        className: es.kL,
        children: [
            (0, l.jsx)(c.D, { variant: "text-sm/bold", color: "text-strong", children: w.intl.string(w.t.cTQI5t) }),
            (0, l.jsx)(F.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: w.intl.format(w.t.wKxADe, { helpArticle: (0, V.aW)() }),
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
                            className: a ? en.Dx : en.t6,
                            children: (0, l.jsx)(Y.$, {
                                icon: I.T,
                                text: w.intl.string(w.t.OpuAlK),
                                variant: "secondary",
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                        (0, l.jsx)("div", {
                            className: a ? en.t6 : en.Dx,
                            children: (0, l.jsx)(Y.$, {
                                icon: Q.y,
                                text: w.intl.string(w.t.t5VZ88),
                                variant: "secondary",
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            (0, l.jsx)("hr", { className: en.me }),
            (0, l.jsx)(F.E, { variant: "text-xs/normal", color: "text-subtle", children: w.intl.string(w.t.B9JNsl) }),
            (0, l.jsxs)(ee.Z, {
                type: ee.Z.Types.SUCCESS,
                className: en.g4,
                children: [
                    (0, l.jsx)(f.X, { size: "xxs", color: _.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                    (0, l.jsx)(F.E, {
                        variant: "text-xs/medium",
                        color: "text-feedback-positive",
                        children: w.intl.string(w.t["3BogKe"]),
                    }),
                ],
            }),
        ],
    });
}
let er = (0, n(250105).Ay)({
    name: "2026-04-rtc-voice-details-refresh",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var eo = n(172115),
    ec = n(9934),
    ed = n(824078);
function eu() {
    return (0, r.cf)([u.A], () => ({
        connectionState: u.A.getState(),
        hostname: u.A.getHostname(),
        averagePing: u.A.getAveragePing(),
        lastPing: u.A.getLastPing(),
        outboundLossRate: u.A.getOutboundLossRate(),
        pings: u.A.getPings(),
    }));
}
function eh(e) {
    return (0, r.cf)([g.A], () => ({
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
function em(e) {
    let { lobbyId: t, connectionTypeText: n, closePopout: i } = e,
        s = eh(t);
    return (0, l.jsx)(k, { ...s, closePopout: i, connectionTypeText: n });
}
function eA(e) {
    let { closePopout: t, connectionTypeText: n } = e,
        i = eu();
    return (0, l.jsx)(el, { ...i, closePopout: t, connectionTypeText: n });
}
function ep(e) {
    let { closePopout: t, connectionTypeText: n } = e,
        i = eu();
    return (0, l.jsx)(k, { ...i, closePopout: t, connectionTypeText: n });
}
function eC(e) {
    let { channelId: t, isOverlay: n, lobbyId: i, closePopout: s } = e,
        a = (0, p.k)({ channelId: t }) ? w.intl.string(w.t["3BogKe"]) : w.intl.string(w.t.ETIVvg);
    return n
        ? (0, l.jsx)(eg, { lobbyId: i, closePopout: s, connectionTypeText: a })
        : (0, l.jsx)(eA, { closePopout: s, connectionTypeText: a });
}
function eE(e) {
    let { channelId: t, isOverlay: n, lobbyId: i, closePopout: s } = e,
        a = (0, p.k)({ channelId: t }) ? w.intl.string(w.t["3BogKe"]) : w.intl.string(w.t.ETIVvg);
    return n
        ? (0, l.jsx)(em, { lobbyId: i, closePopout: s, connectionTypeText: a })
        : (0, l.jsx)(ep, { closePopout: s, connectionTypeText: a });
}
function ex(e) {
    let [t, n] = i.useState(J.Rj.RTC_DEBUG_PANEL),
        s = (0, d.GV)(),
        r = [
            { id: J.Rj.RTC_DEBUG_PANEL, content: (0, l.jsx)(eC, { ...e }) },
            { id: J.Rj.RTC_SECURE_FRAMES, content: (0, l.jsx)(ea, { channelId: e.channelId }) },
        ];
    i.useEffect(() => {
        (0, m.Hg)({ channelId: e.channelId, selectedTab: t });
    }, [e.channelId, t]);
    let c = (0, A.c)();
    return (
        i.useEffect(() => {
            c && n(J.Rj.RTC_DEBUG_PANEL);
        }, [c]),
        (0, l.jsxs)("div", {
            className: a()(ed.popover, ec.kL),
            children: [
                (0, l.jsxs)(o.V, {
                    className: ec.vR,
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    children: [
                        (0, l.jsx)(o.V.Item, {
                            id: J.Rj.RTC_DEBUG_PANEL,
                            className: ec.YU,
                            children: w.intl.string(w.t.MBY1Pm),
                        }),
                        c
                            ? null
                            : (0, l.jsx)(o.V.Item, {
                                  id: J.Rj.RTC_SECURE_FRAMES,
                                  className: ec.YU,
                                  children: w.intl.string(w.t.zC6o3s),
                              }),
                    ],
                }),
                (0, l.jsx)("div", {
                    className: ec.SZ,
                    children: r.map((e) => {
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
function eN(e) {
    let t = (0, r.bG)([h.A], () => h.A.hasVideo(e.channelId)),
        [n, s] = i.useState(J.Rj.RTC_DEBUG_PANEL),
        a = (0, d.GV)(),
        u = i.useMemo(() => {
            switch (n) {
                case J.Rj.RTC_DEBUG_PANEL:
                    return (0, l.jsx)(eE, { ...e });
                case J.Rj.RTC_SECURE_FRAMES:
                    return (0, l.jsx)(X, { channelId: e.channelId });
            }
        }, [e, n]);
    i.useEffect(() => {
        (0, m.Hg)({ channelId: e.channelId, selectedTab: n });
    }, [e.channelId, n]);
    let g = (0, A.c)();
    return (
        i.useEffect(() => {
            g && s(J.Rj.RTC_DEBUG_PANEL);
        }, [g]),
        (0, l.jsxs)("div", {
            className: eo.kL,
            children: [
                (0, l.jsx)(c.D, {
                    className: eo.DD,
                    variant: "heading-lg/bold",
                    color: "text-strong",
                    children: t ? w.intl.string(w.t.IlHdW8) : w.intl.string(w.t.WsOisp),
                }),
                (0, l.jsxs)(o.V, {
                    className: eo.vR,
                    selectedItem: n,
                    type: "top",
                    look: "brand",
                    onItemSelect: s,
                    children: [
                        (0, l.jsx)(o.V.Item, {
                            id: J.Rj.RTC_DEBUG_PANEL,
                            className: eo.YU,
                            children: w.intl.string(w.t.MBY1Pm),
                        }),
                        g
                            ? null
                            : (0, l.jsx)(o.V.Item, {
                                  id: J.Rj.RTC_SECURE_FRAMES,
                                  className: eo.YU,
                                  children: w.intl.string(w.t.zC6o3s),
                              }),
                    ],
                }),
                (0, l.jsx)(o.V.Panel, { id: n, "aria-labelledby": a, children: u }),
            ],
        })
    );
}
function ef(e) {
    return (0, p.k)({ channelId: e.channelId })
        ? (0, l.jsx)(eN, { ...e })
        : (0, l.jsx)("div", {
              className: eo.L3,
              children: (0, l.jsx)("section", { className: eo.J8, children: (0, l.jsx)(eE, { ...e }) }),
          });
}
function e_(e) {
    return (0, p.k)({ channelId: e.channelId })
        ? (0, l.jsx)(ex, { ...e })
        : (0, l.jsx)("div", { className: a()(ed.popover, ec.L3), children: (0, l.jsx)(eC, { ...e }) });
}
function eT(e) {
    return er.useConfig({ location: "RTCConnectionPopout" }).enabled
        ? (0, l.jsx)(e_, { ...e })
        : (0, l.jsx)(ef, { ...e });
}
