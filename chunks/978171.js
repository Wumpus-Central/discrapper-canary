"use strict";
n.d(t, { A: () => Z });
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
    h = n(834730),
    f = n(821609),
    E = n(92446),
    p = n(628284),
    m = n(95635),
    g = n(993077),
    A = n(194261),
    I = n(661531),
    T = n(233545),
    S = n(77138),
    N = n(229659),
    C = n(885386),
    y = n(451409),
    O = n(174459),
    R = n(975571),
    v = n(917592),
    b = n(652215),
    L = n(731854),
    D = n(375708),
    w = n(394952),
    P = n(291614);
let M = function (e) {
    let [t, n] = (0, r.useState)("idle");
    (0, r.useEffect)(() => {
        O.default.track(b.HAw.OPEN_POPOUT, { type: "RTC Connection" });
    }, []);
    let s = (0, r.useCallback)(() => {
            let { closePopout: t } = e;
            null != t && t(), T.ho();
        }, [e]),
        a = (0, r.useCallback)(() => {
            "idle" === t &&
                (n("uploading"),
                (0, S.a)(b.Umv.RTC),
                O.default.track(b.HAw.DEBUG_LOG_UPLOADED, {
                    media_session_id: l.A.getMediaSessionId() ?? null,
                    rtc_connection_id: l.A.getRTCConnectionId() ?? null,
                }),
                setTimeout(() => {
                    n("success"), setTimeout(() => n("idle"), 2e3);
                }, 2e3));
        }, [t]),
        o = R.A.getArticleURL(b.MVz.VOICE_VIDEO_TROUBLESHOOTING),
        u =
            null != e.outboundLossRate
                ? D.intl.format(D.t["3pFz1P"], { badPing: 250, badLossRate: 10, url: o })
                : D.intl.format(D.t.vggaMt, { badPing: 250, url: o }),
        c = (0, r.useCallback)(() => {
            let { hostname: t, averagePing: n, lastPing: s, outboundLossRate: a } = e,
                o = C.Q_.getSetting();
            return (0, i.jsxs)(r.Fragment, {
                children: [
                    o &&
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)("div", {
                                    className: w.o0,
                                    children: (0, i.jsx)(N.A, { dataPoints: e.pings, width: 258, height: 80 }),
                                }),
                                (0, i.jsx)(h.E, {
                                    variant: "text-sm/bold",
                                    color: "text-default",
                                    className: w.VU,
                                    children: v.A.getShortHostname(t),
                                }),
                            ],
                        }),
                    (0, i.jsx)("div", {
                        className: w.ew,
                        children: (0, i.jsxs)("div", {
                            className: w.zS,
                            children: [
                                (0, i.jsx)(h.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: w.VU,
                                    children: D.intl.format(D.t["X58/lN"], { averagePing: n.toFixed(0) }),
                                }),
                                null != s
                                    ? (0, i.jsx)(h.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          className: w.VU,
                                          children: D.intl.format(D.t["6iv2TF"], { lastPing: s.toFixed(0) }),
                                      })
                                    : null,
                                null != a
                                    ? (0, i.jsx)(h.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          className: w.VU,
                                          children: D.intl.format(D.t["VIBJM+"], { outboundLossRate: a.toFixed(1) }),
                                      })
                                    : null,
                            ],
                        }),
                    }),
                    (0, i.jsx)(h.E, { variant: "text-xs/normal", color: "text-muted", children: u }),
                ],
            });
        }, [e, u]),
        { connectionState: d, connectionTypeText: _ } = e,
        M = C.Q_.getSetting(),
        x = {
            [b.S7L.AWAITING_ENDPOINT]: D.intl.format(D.t.Eu2vUR, { url: b.qF7.STATUS }),
            [b.S7L.CONNECTING]: D.intl.string(D.t["y+E8aD"]),
            [b.S7L.AUTHENTICATING]: D.intl.string(D.t["5lGIZH"]),
            [b.S7L.DISCONNECTED]: D.intl.string(D.t.fOX25I),
            [b.S7L.RTC_CONNECTING]: D.intl.string(D.t.b5Ubd5),
            [b.S7L.ICE_CHECKING]: D.intl.format(D.t.SyoYUb, { url: R.A.getArticleURL(b.MVz.VOICE_CONNECTION_ERRORS) }),
            [b.S7L.DTLS_CONNECTING]: D.intl.format(D.t.SyoYUb, {
                url: R.A.getArticleURL(b.MVz.VOICE_CONNECTION_ERRORS),
            }),
            [b.S7L.RTC_CONNECTED]: c,
            [b.S7L.NO_ROUTE]: D.intl.format(D.t["2tgQnk"], { url: R.A.getArticleURL(b.MVz.VOICE_CONNECTION_ERRORS) }),
            [b.S7L.RTC_DISCONNECTED]: D.intl.string(D.t.fOX25I),
        }[d];
    return (0, i.jsxs)("div", {
        className: w.kL,
        children: [
            "function" == typeof x
                ? x()
                : (0, i.jsx)(h.E, { tag: "p", variant: "text-sm/normal", color: "text-muted", children: x }),
            !__OVERLAY__ &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("hr", { className: P.me }),
                        (0, i.jsxs)("div", {
                            className: w.Uo,
                            children: [
                                M &&
                                    y.Ay.supports(L.O5.DIAGNOSTICS) &&
                                    (0, i.jsx)(f.$, {
                                        icon: E.Q,
                                        text: D.intl.string(D.t.KBoWg9),
                                        variant: "secondary",
                                        size: "sm",
                                        fullWidth: !0,
                                        onClick: s,
                                    }),
                                (0, i.jsx)(f.$, {
                                    icon: "success" === t ? p.y : m.J,
                                    text: "success" === t ? D.intl.string(D.t.i4jeWR) : D.intl.string(D.t.EbwFfR),
                                    variant: "secondary",
                                    size: "sm",
                                    fullWidth: !0,
                                    loading: "uploading" === t,
                                    disabled: "idle" !== t,
                                    onClick: a,
                                }),
                            ],
                        }),
                    ],
                }),
            (0, i.jsxs)(g.Z, {
                type: g.Z.Types.SUCCESS,
                className: P.g4,
                children: [
                    (0, i.jsx)(A.X, { size: "xxs", color: I.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                    (0, i.jsx)(h.E, { variant: "text-xs/medium", color: "text-feedback-positive", children: _ }),
                ],
            }),
        ],
    });
};
var x = n(534514),
    U = n(939249),
    k = n(624479),
    G = n(957565),
    V = n(814278),
    F = n(998759),
    B = n(75811),
    H = n(603266),
    j = n(209426);
function W(e) {
    let { channelId: t } = e,
        n = (0, s.bG)([l.A], () => l.A.getSecureFramesState()?.epochAuthenticator),
        a = (0, F.z)({ fingerprintBase64: n, chunkSize: 5, desiredLength: 30 }),
        [o, u] = r.useState(!1),
        d = r.useMemo(() => a?.join(" "), [a]),
        _ = r.useCallback(() => {
            null != d &&
                (0, G.C)(d, () => {
                    u(!0), (0, c.k0)({ channelId: t }), setTimeout(() => u(!1), 2e3);
                });
        }, [t, d]);
    return (0, i.jsxs)("div", {
        className: j.kL,
        children: [
            (0, i.jsx)(x.D, { variant: "text-sm/bold", color: "text-strong", children: D.intl.string(D.t.cTQI5t) }),
            (0, i.jsx)(h.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: D.intl.format(D.t.wKxADe, { helpArticle: (0, V.aW)() }),
            }),
            (0, i.jsx)("div", {
                className: j.on,
                children: (0, i.jsx)(B.j, { chunks: a, columns: 3, className: j.lu }),
            }),
            null != a &&
                (0, i.jsxs)(U.D, {
                    className: P.n2,
                    onClick: _,
                    children: [
                        (0, i.jsx)("div", {
                            className: o ? P.Dx : P.t6,
                            children: (0, i.jsx)(f.$, {
                                icon: k.T,
                                text: D.intl.string(D.t.OpuAlK),
                                variant: "secondary",
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: o ? P.t6 : P.Dx,
                            children: (0, i.jsx)(f.$, {
                                icon: p.y,
                                text: D.intl.string(D.t.t5VZ88),
                                variant: "secondary",
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            (0, i.jsx)("hr", { className: P.me }),
            (0, i.jsx)(h.E, { variant: "text-xs/normal", color: "text-subtle", children: D.intl.string(D.t.B9JNsl) }),
            (0, i.jsxs)(g.Z, {
                type: g.Z.Types.SUCCESS,
                className: P.g4,
                children: [
                    (0, i.jsx)(A.X, { size: "xxs", color: I.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                    (0, i.jsx)(h.E, {
                        variant: "text-xs/medium",
                        color: "text-feedback-positive",
                        children: D.intl.string(D.t["3BogKe"]),
                    }),
                ],
            }),
        ],
    });
}
var Y = n(9934);
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
    return (0, i.jsx)(M, { ...a, closePopout: r, connectionTypeText: n });
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
    return (0, i.jsx)(M, { ...r, closePopout: t, connectionTypeText: n });
}
function z(e) {
    let { channelId: t, isOverlay: n, lobbyId: r, closePopout: s } = e,
        a = (0, _.k)({ channelId: t }) ? D.intl.string(D.t["3BogKe"]) : D.intl.string(D.t.ETIVvg);
    return n
        ? (0, i.jsx)(K, { lobbyId: r, closePopout: s, connectionTypeText: a })
        : (0, i.jsx)($, { closePopout: s, connectionTypeText: a });
}
function q(e) {
    let [t, n] = r.useState(H.Rj.RTC_DEBUG_PANEL),
        s = (0, o.GV)();
    r.useEffect(() => {
        (0, c.Hg)({ channelId: e.channelId, selectedTab: t });
    }, [e.channelId, t]);
    let l = (0, d.c)();
    return (
        r.useEffect(() => {
            l && n(H.Rj.RTC_DEBUG_PANEL);
        }, [l]),
        (0, i.jsxs)("div", {
            className: Y.kL,
            children: [
                (0, i.jsxs)(a.V, {
                    className: Y.vR,
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    children: [
                        (0, i.jsx)(a.V.Item, {
                            id: H.Rj.RTC_DEBUG_PANEL,
                            className: Y.YU,
                            children: D.intl.string(D.t.MBY1Pm),
                        }),
                        l
                            ? null
                            : (0, i.jsx)(a.V.Item, {
                                  id: H.Rj.RTC_SECURE_FRAMES,
                                  className: Y.YU,
                                  children: D.intl.string(D.t.zC6o3s),
                              }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: Y.SZ,
                    children: [
                        (0, i.jsx)(a.V.Panel, {
                            id: H.Rj.RTC_DEBUG_PANEL,
                            "aria-labelledby": s,
                            className: t !== H.Rj.RTC_DEBUG_PANEL ? Y._t : void 0,
                            children: (0, i.jsx)(z, { ...e }),
                        }),
                        (0, i.jsx)(a.V.Panel, {
                            id: H.Rj.RTC_SECURE_FRAMES,
                            "aria-labelledby": s,
                            className: t !== H.Rj.RTC_SECURE_FRAMES ? Y._t : void 0,
                            children: (0, i.jsx)(W, { channelId: e.channelId }),
                        }),
                    ],
                }),
            ],
        })
    );
}
function Z(e) {
    return (0, _.k)({ channelId: e.channelId })
        ? (0, i.jsx)(q, { ...e })
        : (0, i.jsx)("div", { className: Y.L3, children: (0, i.jsx)(z, { ...e }) });
}
