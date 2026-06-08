"use strict";
n.d(t, { A: () => X });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(761508),
    o = n(915089),
    l = n(763827),
    u = n(572487),
    c = n(798286),
    d = n(83942),
    _ = n(259374),
    h = n(459838),
    f = n(834730),
    p = n(821609),
    E = n(92446),
    m = n(939249),
    g = n(624479),
    A = n(628284),
    I = n(359778),
    T = n(194261),
    S = n(661531),
    y = n(349288),
    N = n(233545),
    v = n(229659),
    C = n(885386),
    R = n(555975),
    O = n(174459),
    b = n(957565),
    D = n(975571),
    L = n(917592),
    w = n(652215),
    M = n(731854),
    P = n(375708),
    x = n(394952),
    k = n(291614);
let U = function (e) {
    let [t, n] = (0, r.useState)(!1);
    (0, r.useEffect)(() => {
        O.default.track(w.HAw.OPEN_POPOUT, { type: "RTC Connection" });
    }, []);
    let s = (0, r.useCallback)(() => {
            let { closePopout: t } = e;
            null != t && t(), N.ho();
        }, [e]),
        a = (0, r.useCallback)(() => {
            var e;
            (e = () => {
                n(!0), setTimeout(() => n(!1), 2e3);
            }),
                R.Ay.getMediaEngine().once(h.bg.ConnectionStats, (t) => {
                    let n = JSON.stringify(
                        Object.values(M.x)
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
                    (0, b.C)(n, e);
                });
        }, []),
        o =
            null != e.outboundLossRate
                ? P.intl.formatToPlainString(P.t["3pFz1P"], { badPing: 250, badLossRate: 10 })
                : P.intl.formatToPlainString(P.t.vggaMt, { badPing: 250 }),
        l = (0, r.useCallback)(() => {
            let { hostname: t, averagePing: n, lastPing: s, outboundLossRate: a } = e,
                l = C.Q_.getSetting();
            return (0, i.jsxs)(r.Fragment, {
                children: [
                    l &&
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)("div", {
                                    className: x.o0,
                                    children: (0, i.jsx)(v.A, { dataPoints: e.pings, width: 258, height: 80 }),
                                }),
                                (0, i.jsx)(f.E, {
                                    variant: "text-sm/bold",
                                    color: "text-default",
                                    className: x.VU,
                                    children: L.A.getShortHostname(t),
                                }),
                            ],
                        }),
                    (0, i.jsx)("div", {
                        className: x.ew,
                        children: (0, i.jsxs)("div", {
                            className: x.zS,
                            children: [
                                (0, i.jsx)(f.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: x.VU,
                                    children: P.intl.format(P.t["X58/lN"], { averagePing: n.toFixed(0) }),
                                }),
                                null != s
                                    ? (0, i.jsx)(f.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          className: x.VU,
                                          children: P.intl.format(P.t["6iv2TF"], { lastPing: s.toFixed(0) }),
                                      })
                                    : null,
                                null != a
                                    ? (0, i.jsx)(f.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          className: x.VU,
                                          children: P.intl.format(P.t["VIBJM+"], { outboundLossRate: a.toFixed(1) }),
                                      })
                                    : null,
                            ],
                        }),
                    }),
                    (0, i.jsx)(f.E, { variant: "text-xs/normal", color: "text-muted", children: o }),
                ],
            });
        }, [e, o]),
        { connectionState: u, connectionTypeText: c } = e,
        d = C.Q_.getSetting(),
        _ = {
            [w.S7L.AWAITING_ENDPOINT]: P.intl.format(P.t.Eu2vUR, { url: w.qF7.STATUS }),
            [w.S7L.CONNECTING]: P.intl.string(P.t["y+E8aD"]),
            [w.S7L.AUTHENTICATING]: P.intl.string(P.t["5lGIZH"]),
            [w.S7L.DISCONNECTED]: P.intl.string(P.t.fOX25I),
            [w.S7L.RTC_CONNECTING]: P.intl.string(P.t.b5Ubd5),
            [w.S7L.ICE_CHECKING]: P.intl.format(P.t.SyoYUb, { url: D.A.getArticleURL(w.MVz.VOICE_CONNECTION_ERRORS) }),
            [w.S7L.DTLS_CONNECTING]: P.intl.format(P.t.SyoYUb, {
                url: D.A.getArticleURL(w.MVz.VOICE_CONNECTION_ERRORS),
            }),
            [w.S7L.RTC_CONNECTED]: l,
            [w.S7L.NO_ROUTE]: P.intl.format(P.t["2tgQnk"], { url: D.A.getArticleURL(w.MVz.VOICE_CONNECTION_ERRORS) }),
            [w.S7L.RTC_DISCONNECTED]: P.intl.string(P.t.fOX25I),
        }[u];
    return (0, i.jsxs)("div", {
        className: x.kL,
        children: [
            "function" == typeof _
                ? _()
                : (0, i.jsx)(f.E, { tag: "p", variant: "text-sm/normal", color: "text-muted", children: _ }),
            d &&
                R.Ay.supports(M.O5.DIAGNOSTICS) &&
                !__OVERLAY__ &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("hr", { className: k.me }),
                        (0, i.jsxs)("div", {
                            className: x.pw,
                            children: [
                                (0, i.jsx)(p.$, {
                                    icon: E.Q,
                                    text: P.intl.string(P.t.KBoWg9),
                                    variant: "secondary",
                                    size: "sm",
                                    fullWidth: !0,
                                    onClick: s,
                                }),
                                (0, i.jsxs)(m.D, {
                                    className: `${k.n2} ${x.n2}`,
                                    onClick: a,
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: t ? k.Dx : k.t6,
                                            children: (0, i.jsx)(p.$, {
                                                icon: g.T,
                                                text: P.intl.string(P.t["XEb+Sj"]),
                                                variant: "secondary",
                                                size: "sm",
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, i.jsx)("div", {
                                            className: t ? k.t6 : k.Dx,
                                            children: (0, i.jsx)(p.$, {
                                                icon: A.y,
                                                text: P.intl.string(P.t.t5VZ88),
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
            (0, i.jsxs)(I.Z, {
                type: I.Z.Types.SUCCESS,
                className: k.g4,
                children: [
                    (0, i.jsx)(T.X, { size: "xxs", color: S.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                    (0, i.jsx)(f.E, { variant: "text-xs/medium", color: "text-feedback-positive", children: c }),
                ],
            }),
            !d &&
                !__OVERLAY__ &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("hr", { className: k.me }),
                        (0, i.jsx)(y.Anchor, {
                            className: x.CU,
                            href: D.A.getArticleURL(w.MVz.VOICE_VIDEO_TROUBLESHOOTING),
                            children: P.intl.string(P.t.hvVgAZ),
                        }),
                    ],
                }),
        ],
    });
};
var G = n(534514),
    F = n(814278),
    V = n(998759),
    B = n(75811),
    H = n(603266),
    j = n(209426);
function Y(e) {
    let { channelId: t } = e,
        n = (0, s.bG)([l.A], () => l.A.getSecureFramesState()?.epochAuthenticator),
        a = (0, V.z)({ fingerprintBase64: n, chunkSize: 5, desiredLength: 30 }),
        [o, u] = r.useState(!1),
        d = r.useMemo(() => a?.join(" "), [a]),
        _ = r.useCallback(() => {
            null != d &&
                (0, b.C)(d, () => {
                    u(!0), (0, c.k0)({ channelId: t }), setTimeout(() => u(!1), 2e3);
                });
        }, [t, d]);
    return (0, i.jsxs)("div", {
        className: j.kL,
        children: [
            (0, i.jsx)(G.D, { variant: "text-sm/bold", color: "text-strong", children: P.intl.string(P.t.cTQI5t) }),
            (0, i.jsx)(f.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: P.intl.format(P.t.wKxADe, { helpArticle: (0, F.aW)() }),
            }),
            (0, i.jsx)("div", {
                className: j.on,
                children: (0, i.jsx)(B.j, { chunks: a, columns: 3, className: j.lu }),
            }),
            null != a &&
                (0, i.jsxs)(m.D, {
                    className: k.n2,
                    onClick: _,
                    children: [
                        (0, i.jsx)("div", {
                            className: o ? k.Dx : k.t6,
                            children: (0, i.jsx)(p.$, {
                                icon: g.T,
                                text: P.intl.string(P.t.OpuAlK),
                                variant: "secondary",
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: o ? k.t6 : k.Dx,
                            children: (0, i.jsx)(p.$, {
                                icon: A.y,
                                text: P.intl.string(P.t.t5VZ88),
                                variant: "secondary",
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            (0, i.jsx)("hr", { className: k.me }),
            (0, i.jsx)(f.E, { variant: "text-xs/normal", color: "text-subtle", children: P.intl.string(P.t.B9JNsl) }),
            (0, i.jsxs)(I.Z, {
                type: I.Z.Types.SUCCESS,
                className: k.g4,
                children: [
                    (0, i.jsx)(T.X, { size: "xxs", color: S.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                    (0, i.jsx)(f.E, {
                        variant: "text-xs/medium",
                        color: "text-feedback-positive",
                        children: P.intl.string(P.t["3BogKe"]),
                    }),
                ],
            }),
        ],
    });
}
var W = n(9934);
function K(e) {
    let { lobbyId: t, connectionTypeText: n, closePopout: r } = e,
        a = (0, s.cf)([u.A], () => ({
            connectionState: u.A.getConnectionState(t),
            hostname: u.A.getHostname(t),
            averagePing: u.A.getAveragePing(t),
            lastPing: u.A.getLastPing(t),
            pings: u.A.getPings(),
            outboundLossRate: u.A.getOutboundLossRate(t),
        }));
    return (0, i.jsx)(U, { ...a, closePopout: r, connectionTypeText: n });
}
function $(e) {
    let { closePopout: t, connectionTypeText: n } = e,
        r = (0, s.cf)([l.A], () => ({
            connectionState: l.A.getState(),
            hostname: l.A.getHostname(),
            averagePing: l.A.getAveragePing(),
            lastPing: l.A.getLastPing(),
            outboundLossRate: l.A.getOutboundLossRate(),
            pings: l.A.getPings(),
        }));
    return (0, i.jsx)(U, { ...r, closePopout: t, connectionTypeText: n });
}
function z(e) {
    let { channelId: t, isOverlay: n, lobbyId: r, closePopout: s } = e,
        a = (0, _.k)({ channelId: t }) ? P.intl.string(P.t["3BogKe"]) : P.intl.string(P.t.ETIVvg);
    return n
        ? (0, i.jsx)(K, { lobbyId: r, closePopout: s, connectionTypeText: a })
        : (0, i.jsx)($, { closePopout: s, connectionTypeText: a });
}
function q(e) {
    let [t, n] = r.useState(H.Rj.RTC_DEBUG_PANEL),
        s = (0, o.GV)(),
        l = [
            { id: H.Rj.RTC_DEBUG_PANEL, content: (0, i.jsx)(z, { ...e }) },
            { id: H.Rj.RTC_SECURE_FRAMES, content: (0, i.jsx)(Y, { channelId: e.channelId }) },
        ];
    r.useEffect(() => {
        (0, c.Hg)({ channelId: e.channelId, selectedTab: t });
    }, [e.channelId, t]);
    let u = (0, d.c)();
    return (
        r.useEffect(() => {
            u && n(H.Rj.RTC_DEBUG_PANEL);
        }, [u]),
        (0, i.jsxs)("div", {
            className: W.kL,
            children: [
                (0, i.jsxs)(a.V, {
                    className: W.vR,
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    children: [
                        (0, i.jsx)(a.V.Item, {
                            id: H.Rj.RTC_DEBUG_PANEL,
                            className: W.YU,
                            children: P.intl.string(P.t.MBY1Pm),
                        }),
                        u
                            ? null
                            : (0, i.jsx)(a.V.Item, {
                                  id: H.Rj.RTC_SECURE_FRAMES,
                                  className: W.YU,
                                  children: P.intl.string(P.t.zC6o3s),
                              }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: W.SZ,
                    children: l.map((e) => {
                        let { id: n, content: r } = e;
                        return (0, i.jsx)(
                            a.V.Panel,
                            { id: n, "aria-labelledby": s, className: n !== t ? W._t : void 0, children: r },
                            n,
                        );
                    }),
                }),
            ],
        })
    );
}
function X(e) {
    return (0, _.k)({ channelId: e.channelId })
        ? (0, i.jsx)(q, { ...e })
        : (0, i.jsx)("div", { className: W.L3, children: (0, i.jsx)(z, { ...e }) });
}
