"use strict";
n.d(t, { A: () => Z });
var i = n(627968),
    r = n(64700),
    a = n(17928),
    s = n(761508),
    l = n(915089),
    o = n(763827),
    d = n(572487),
    c = n(798286),
    u = n(83942),
    _ = n(259374),
    E = n(834730),
    A = n(821609),
    h = n(92446),
    I = n(628284),
    f = n(95635),
    p = n(993077),
    T = n(194261),
    m = n(661531),
    g = n(233545),
    S = n(77138),
    N = n(229659),
    C = n(885386),
    R = n(186295),
    O = n(174459),
    L = n(975571),
    y = n(917592),
    D = n(652215),
    v = n(731854),
    b = n(375708),
    M = n(394952),
    P = n(291614);
let U = function (e) {
    let [t, n] = (0, r.useState)("idle");
    (0, r.useEffect)(() => {
        O.default.track(D.HAw.OPEN_POPOUT, { type: "RTC Connection" });
    }, []);
    let a = (0, r.useCallback)(() => {
            let { closePopout: t } = e;
            null != t && t(), g.ho();
        }, [e]),
        s = (0, r.useCallback)(() => {
            "idle" === t &&
                (n("uploading"),
                (0, S.a)(D.Umv.RTC),
                O.default.track(D.HAw.DEBUG_LOG_UPLOADED, {
                    media_session_id: o.A.getMediaSessionId() ?? null,
                    rtc_connection_id: o.A.getRTCConnectionId() ?? null,
                }),
                setTimeout(() => {
                    n("success"), setTimeout(() => n("idle"), 2e3);
                }, 2e3));
        }, [t]),
        l = L.A.getArticleURL(D.MVz.VOICE_VIDEO_TROUBLESHOOTING),
        d =
            null != e.outboundLossRate
                ? b.intl.format(b.t["3pFz1P"], { badPing: 250, badLossRate: 10, url: l })
                : b.intl.format(b.t.vggaMt, { badPing: 250, url: l }),
        c = (0, r.useCallback)(() => {
            let { hostname: t, averagePing: n, lastPing: a, outboundLossRate: s } = e,
                l = C.Q_.getSetting();
            return (0, i.jsxs)(r.Fragment, {
                children: [
                    l &&
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)("div", {
                                    className: M.o0,
                                    children: (0, i.jsx)(N.A, { dataPoints: e.pings, width: 258, height: 80 }),
                                }),
                                (0, i.jsx)(E.E, {
                                    variant: "text-sm/bold",
                                    color: "text-default",
                                    className: M.VU,
                                    children: y.A.getShortHostname(t),
                                }),
                            ],
                        }),
                    (0, i.jsx)("div", {
                        className: M.ew,
                        children: (0, i.jsxs)("div", {
                            className: M.zS,
                            children: [
                                (0, i.jsx)(E.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: M.VU,
                                    children: b.intl.format(b.t["X58/lN"], { averagePing: n.toFixed(0) }),
                                }),
                                null != a
                                    ? (0, i.jsx)(E.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          className: M.VU,
                                          children: b.intl.format(b.t["6iv2TF"], { lastPing: a.toFixed(0) }),
                                      })
                                    : null,
                                null != s
                                    ? (0, i.jsx)(E.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          className: M.VU,
                                          children: b.intl.format(b.t["VIBJM+"], { outboundLossRate: s.toFixed(1) }),
                                      })
                                    : null,
                            ],
                        }),
                    }),
                    (0, i.jsx)(E.E, { variant: "text-xs/normal", color: "text-muted", children: d }),
                ],
            });
        }, [e, d]),
        { connectionState: u, connectionTypeText: _ } = e,
        U = C.Q_.getSetting(),
        w = {
            [D.S7L.AWAITING_ENDPOINT]: b.intl.format(b.t.Eu2vUR, { url: D.qF7.STATUS }),
            [D.S7L.CONNECTING]: b.intl.string(b.t["y+E8aD"]),
            [D.S7L.AUTHENTICATING]: b.intl.string(b.t["5lGIZH"]),
            [D.S7L.DISCONNECTED]: b.intl.string(b.t.fOX25I),
            [D.S7L.RTC_CONNECTING]: b.intl.string(b.t.b5Ubd5),
            [D.S7L.ICE_CHECKING]: b.intl.format(b.t.SyoYUb, { url: L.A.getArticleURL(D.MVz.VOICE_CONNECTION_ERRORS) }),
            [D.S7L.DTLS_CONNECTING]: b.intl.format(b.t.SyoYUb, {
                url: L.A.getArticleURL(D.MVz.VOICE_CONNECTION_ERRORS),
            }),
            [D.S7L.RTC_CONNECTED]: c,
            [D.S7L.NO_ROUTE]: b.intl.format(b.t["2tgQnk"], { url: L.A.getArticleURL(D.MVz.VOICE_CONNECTION_ERRORS) }),
            [D.S7L.RTC_DISCONNECTED]: b.intl.string(b.t.fOX25I),
        }[u];
    return (0, i.jsxs)("div", {
        className: M.kL,
        children: [
            "function" == typeof w
                ? w()
                : (0, i.jsx)(E.E, { tag: "p", variant: "text-sm/normal", color: "text-muted", children: w }),
            !__OVERLAY__ &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("hr", { className: P.me }),
                        (0, i.jsxs)("div", {
                            className: M.Uo,
                            children: [
                                U &&
                                    R.Ay.supports(v.O5.DIAGNOSTICS) &&
                                    (0, i.jsx)(A.$, {
                                        icon: h.Q,
                                        text: b.intl.string(b.t.KBoWg9),
                                        variant: "secondary",
                                        size: "sm",
                                        fullWidth: !0,
                                        onClick: a,
                                    }),
                                (0, i.jsx)(A.$, {
                                    icon: "success" === t ? I.y : f.J,
                                    text: "success" === t ? b.intl.string(b.t.i4jeWR) : b.intl.string(b.t.EbwFfR),
                                    variant: "secondary",
                                    size: "sm",
                                    fullWidth: !0,
                                    loading: "uploading" === t,
                                    disabled: "idle" !== t,
                                    onClick: s,
                                }),
                            ],
                        }),
                    ],
                }),
            (0, i.jsxs)(p.Z, {
                type: p.Z.Types.SUCCESS,
                className: P.g4,
                children: [
                    (0, i.jsx)(T.X, { size: "xxs", color: m.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                    (0, i.jsx)(E.E, { variant: "text-xs/medium", color: "text-feedback-positive", children: _ }),
                ],
            }),
        ],
    });
};
var w = n(297264),
    G = n(939249),
    x = n(624479),
    k = n(957565),
    F = n(814278),
    V = n(998759),
    B = n(75811),
    H = n(603266),
    j = n(209426);
function W(e) {
    let { channelId: t } = e,
        n = (0, a.bG)([o.A], () => o.A.getSecureFramesState()?.epochAuthenticator),
        s = (0, V.z)({ fingerprintBase64: n, chunkSize: 5, desiredLength: 30 }),
        [l, d] = r.useState(!1),
        u = r.useMemo(() => s?.join(" "), [s]),
        _ = r.useCallback(() => {
            null != u &&
                (0, k.C)(u, () => {
                    d(!0), (0, c.k0)({ channelId: t }), setTimeout(() => d(!1), 2e3);
                });
        }, [t, u]);
    return (0, i.jsxs)("div", {
        className: j.kL,
        children: [
            (0, i.jsx)(w.D, { variant: "text-sm/bold", color: "text-strong", children: b.intl.string(b.t.cTQI5t) }),
            (0, i.jsx)(E.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: b.intl.format(b.t.wKxADe, { helpArticle: (0, F.aW)() }),
            }),
            (0, i.jsx)("div", {
                className: j.on,
                children: (0, i.jsx)(B.j, { chunks: s, columns: 3, className: j.lu }),
            }),
            null != s &&
                (0, i.jsxs)(G.D, {
                    className: P.n2,
                    onClick: _,
                    children: [
                        (0, i.jsx)("div", {
                            className: l ? P.Dx : P.t6,
                            children: (0, i.jsx)(A.$, {
                                icon: x.T,
                                text: b.intl.string(b.t.OpuAlK),
                                variant: "secondary",
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: l ? P.t6 : P.Dx,
                            children: (0, i.jsx)(A.$, {
                                icon: I.y,
                                text: b.intl.string(b.t.t5VZ88),
                                variant: "secondary",
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            (0, i.jsx)("hr", { className: P.me }),
            (0, i.jsx)(E.E, { variant: "text-xs/normal", color: "text-subtle", children: b.intl.string(b.t.B9JNsl) }),
            (0, i.jsxs)(p.Z, {
                type: p.Z.Types.SUCCESS,
                className: P.g4,
                children: [
                    (0, i.jsx)(T.X, { size: "xxs", color: m.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                    (0, i.jsx)(E.E, {
                        variant: "text-xs/medium",
                        color: "text-feedback-positive",
                        children: b.intl.string(b.t["3BogKe"]),
                    }),
                ],
            }),
        ],
    });
}
var Y = n(9934);
function K(e) {
    let { lobbyId: t, connectionTypeText: n, closePopout: r } = e,
        s = (0, a.cf)([d.A], () => ({
            connectionState: d.A.getConnectionState(t),
            hostname: d.A.getHostname(t),
            averagePing: d.A.getAveragePing(t),
            lastPing: d.A.getLastPing(t),
            pings: d.A.getPings(),
            outboundLossRate: d.A.getOutboundLossRate(t),
        }));
    return (0, i.jsx)(U, { ...s, closePopout: r, connectionTypeText: n });
}
function $(e) {
    let { closePopout: t, connectionTypeText: n } = e,
        r = (0, a.cf)([o.A], () => ({
            connectionState: o.A.getState(),
            hostname: o.A.getHostname(),
            averagePing: o.A.getAveragePing(),
            lastPing: o.A.getLastPing(),
            outboundLossRate: o.A.getOutboundLossRate(),
            pings: o.A.getPings(),
        }));
    return (0, i.jsx)(U, { ...r, closePopout: t, connectionTypeText: n });
}
function z(e) {
    let { channelId: t, isOverlay: n, lobbyId: r, closePopout: a } = e,
        s = (0, _.k)({ channelId: t }) ? b.intl.string(b.t["3BogKe"]) : b.intl.string(b.t.ETIVvg);
    return n
        ? (0, i.jsx)(K, { lobbyId: r, closePopout: a, connectionTypeText: s })
        : (0, i.jsx)($, { closePopout: a, connectionTypeText: s });
}
function q(e) {
    let [t, n] = r.useState(H.Rj.RTC_DEBUG_PANEL),
        a = (0, l.GV)();
    r.useEffect(() => {
        (0, c.Hg)({ channelId: e.channelId, selectedTab: t });
    }, [e.channelId, t]);
    let o = (0, u.c)();
    return (
        r.useEffect(() => {
            o && n(H.Rj.RTC_DEBUG_PANEL);
        }, [o]),
        (0, i.jsxs)("div", {
            className: Y.kL,
            children: [
                (0, i.jsxs)(s.V, {
                    className: Y.vR,
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    children: [
                        (0, i.jsx)(s.V.Item, {
                            id: H.Rj.RTC_DEBUG_PANEL,
                            className: Y.YU,
                            children: b.intl.string(b.t.MBY1Pm),
                        }),
                        o
                            ? null
                            : (0, i.jsx)(s.V.Item, {
                                  id: H.Rj.RTC_SECURE_FRAMES,
                                  className: Y.YU,
                                  children: b.intl.string(b.t.zC6o3s),
                              }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: Y.SZ,
                    children: [
                        (0, i.jsx)(s.V.Panel, {
                            id: H.Rj.RTC_DEBUG_PANEL,
                            "aria-labelledby": a,
                            className: t !== H.Rj.RTC_DEBUG_PANEL ? Y._t : void 0,
                            children: (0, i.jsx)(z, { ...e }),
                        }),
                        (0, i.jsx)(s.V.Panel, {
                            id: H.Rj.RTC_SECURE_FRAMES,
                            "aria-labelledby": a,
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
