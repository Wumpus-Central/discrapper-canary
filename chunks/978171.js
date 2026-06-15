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
    h = n(834730),
    f = n(821609),
    p = n(92446),
    E = n(628284),
    m = n(95635),
    g = n(993077),
    A = n(194261),
    I = n(661531),
    T = n(233545),
    S = n(77138),
    y = n(229659),
    N = n(885386),
    v = n(136491),
    C = n(174459),
    R = n(975571),
    O = n(917592),
    b = n(652215),
    D = n(731854),
    L = n(375708),
    w = n(394952),
    M = n(291614);
let P = function (e) {
    let [t, n] = (0, r.useState)("idle");
    (0, r.useEffect)(() => {
        C.default.track(b.HAw.OPEN_POPOUT, { type: "RTC Connection" });
    }, []);
    let s = (0, r.useCallback)(() => {
            let { closePopout: t } = e;
            null != t && t(), T.ho();
        }, [e]),
        a = (0, r.useCallback)(() => {
            "idle" === t &&
                (n("uploading"),
                (0, S.a)(b.Umv.RTC),
                C.default.track(b.HAw.DEBUG_LOG_UPLOADED, {
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
                ? L.intl.format(L.t["3pFz1P"], { badPing: 250, badLossRate: 10, url: o })
                : L.intl.format(L.t.vggaMt, { badPing: 250, url: o }),
        c = (0, r.useCallback)(() => {
            let { hostname: t, averagePing: n, lastPing: s, outboundLossRate: a } = e,
                o = N.Q_.getSetting();
            return (0, i.jsxs)(r.Fragment, {
                children: [
                    o &&
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)("div", {
                                    className: w.o0,
                                    children: (0, i.jsx)(y.A, { dataPoints: e.pings, width: 258, height: 80 }),
                                }),
                                (0, i.jsx)(h.E, {
                                    variant: "text-sm/bold",
                                    color: "text-default",
                                    className: w.VU,
                                    children: O.A.getShortHostname(t),
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
                                    children: L.intl.format(L.t["X58/lN"], { averagePing: n.toFixed(0) }),
                                }),
                                null != s
                                    ? (0, i.jsx)(h.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          className: w.VU,
                                          children: L.intl.format(L.t["6iv2TF"], { lastPing: s.toFixed(0) }),
                                      })
                                    : null,
                                null != a
                                    ? (0, i.jsx)(h.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          className: w.VU,
                                          children: L.intl.format(L.t["VIBJM+"], { outboundLossRate: a.toFixed(1) }),
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
        P = N.Q_.getSetting(),
        x = {
            [b.S7L.AWAITING_ENDPOINT]: L.intl.format(L.t.Eu2vUR, { url: b.qF7.STATUS }),
            [b.S7L.CONNECTING]: L.intl.string(L.t["y+E8aD"]),
            [b.S7L.AUTHENTICATING]: L.intl.string(L.t["5lGIZH"]),
            [b.S7L.DISCONNECTED]: L.intl.string(L.t.fOX25I),
            [b.S7L.RTC_CONNECTING]: L.intl.string(L.t.b5Ubd5),
            [b.S7L.ICE_CHECKING]: L.intl.format(L.t.SyoYUb, { url: R.A.getArticleURL(b.MVz.VOICE_CONNECTION_ERRORS) }),
            [b.S7L.DTLS_CONNECTING]: L.intl.format(L.t.SyoYUb, {
                url: R.A.getArticleURL(b.MVz.VOICE_CONNECTION_ERRORS),
            }),
            [b.S7L.RTC_CONNECTED]: c,
            [b.S7L.NO_ROUTE]: L.intl.format(L.t["2tgQnk"], { url: R.A.getArticleURL(b.MVz.VOICE_CONNECTION_ERRORS) }),
            [b.S7L.RTC_DISCONNECTED]: L.intl.string(L.t.fOX25I),
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
                        (0, i.jsx)("hr", { className: M.me }),
                        (0, i.jsxs)("div", {
                            className: w.Uo,
                            children: [
                                P &&
                                    v.Ay.supports(D.O5.DIAGNOSTICS) &&
                                    (0, i.jsx)(f.$, {
                                        icon: p.Q,
                                        text: L.intl.string(L.t.KBoWg9),
                                        variant: "secondary",
                                        size: "sm",
                                        fullWidth: !0,
                                        onClick: s,
                                    }),
                                (0, i.jsx)(f.$, {
                                    icon: "success" === t ? E.y : m.J,
                                    text: "success" === t ? L.intl.string(L.t.i4jeWR) : L.intl.string(L.t.EbwFfR),
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
                className: M.g4,
                children: [
                    (0, i.jsx)(A.X, { size: "xxs", color: I.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                    (0, i.jsx)(h.E, { variant: "text-xs/medium", color: "text-feedback-positive", children: _ }),
                ],
            }),
        ],
    });
};
var x = n(534514),
    k = n(939249),
    U = n(624479),
    G = n(957565),
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
                (0, G.C)(d, () => {
                    u(!0), (0, c.k0)({ channelId: t }), setTimeout(() => u(!1), 2e3);
                });
        }, [t, d]);
    return (0, i.jsxs)("div", {
        className: j.kL,
        children: [
            (0, i.jsx)(x.D, { variant: "text-sm/bold", color: "text-strong", children: L.intl.string(L.t.cTQI5t) }),
            (0, i.jsx)(h.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: L.intl.format(L.t.wKxADe, { helpArticle: (0, F.aW)() }),
            }),
            (0, i.jsx)("div", {
                className: j.on,
                children: (0, i.jsx)(B.j, { chunks: a, columns: 3, className: j.lu }),
            }),
            null != a &&
                (0, i.jsxs)(k.D, {
                    className: M.n2,
                    onClick: _,
                    children: [
                        (0, i.jsx)("div", {
                            className: o ? M.Dx : M.t6,
                            children: (0, i.jsx)(f.$, {
                                icon: U.T,
                                text: L.intl.string(L.t.OpuAlK),
                                variant: "secondary",
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: o ? M.t6 : M.Dx,
                            children: (0, i.jsx)(f.$, {
                                icon: E.y,
                                text: L.intl.string(L.t.t5VZ88),
                                variant: "secondary",
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            (0, i.jsx)("hr", { className: M.me }),
            (0, i.jsx)(h.E, { variant: "text-xs/normal", color: "text-subtle", children: L.intl.string(L.t.B9JNsl) }),
            (0, i.jsxs)(g.Z, {
                type: g.Z.Types.SUCCESS,
                className: M.g4,
                children: [
                    (0, i.jsx)(A.X, { size: "xxs", color: I.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                    (0, i.jsx)(h.E, {
                        variant: "text-xs/medium",
                        color: "text-feedback-positive",
                        children: L.intl.string(L.t["3BogKe"]),
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
    return (0, i.jsx)(P, { ...a, closePopout: r, connectionTypeText: n });
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
    return (0, i.jsx)(P, { ...r, closePopout: t, connectionTypeText: n });
}
function z(e) {
    let { channelId: t, isOverlay: n, lobbyId: r, closePopout: s } = e,
        a = (0, _.k)({ channelId: t }) ? L.intl.string(L.t["3BogKe"]) : L.intl.string(L.t.ETIVvg);
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
                            children: L.intl.string(L.t.MBY1Pm),
                        }),
                        l
                            ? null
                            : (0, i.jsx)(a.V.Item, {
                                  id: H.Rj.RTC_SECURE_FRAMES,
                                  className: W.YU,
                                  children: L.intl.string(L.t.zC6o3s),
                              }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: W.SZ,
                    children: [
                        (0, i.jsx)(a.V.Panel, {
                            id: H.Rj.RTC_DEBUG_PANEL,
                            "aria-labelledby": s,
                            className: t !== H.Rj.RTC_DEBUG_PANEL ? W._t : void 0,
                            children: (0, i.jsx)(z, { ...e }),
                        }),
                        (0, i.jsx)(a.V.Panel, {
                            id: H.Rj.RTC_SECURE_FRAMES,
                            "aria-labelledby": s,
                            className: t !== H.Rj.RTC_SECURE_FRAMES ? W._t : void 0,
                            children: (0, i.jsx)(Y, { channelId: e.channelId }),
                        }),
                    ],
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
