n.d(t, { A: () => K });
var i = n(627968),
    l = n(64700),
    s = n(17928),
    r = n(761508),
    a = n(915089),
    o = n(763827),
    u = n(572487),
    d = n(798286),
    c = n(83942),
    h = n(259374),
    g = n(834730),
    f = n(821609),
    A = n(92446),
    E = n(628284),
    I = n(95635),
    p = n(993077),
    S = n(194261),
    m = n(661531),
    _ = n(233545),
    C = n(77138),
    N = n(229659),
    T = n(885386),
    v = n(451409),
    M = n(174459),
    y = n(975571),
    D = n(917592),
    R = n(652215),
    x = n(731854),
    O = n(375708),
    U = n(394952),
    w = n(291614);
let L = function (e) {
    let [t, n] = (0, l.useState)("idle");
    (0, l.useEffect)(() => {
        M.default.track(R.HAw.OPEN_POPOUT, { type: "RTC Connection" });
    }, []);
    let s = (0, l.useCallback)(() => {
            let { closePopout: t } = e;
            null != t && t(), _.ho();
        }, [e]),
        r = (0, l.useCallback)(() => {
            "idle" === t &&
                (n("uploading"),
                (0, C.a)(R.Umv.RTC),
                M.default.track(R.HAw.DEBUG_LOG_UPLOADED, {
                    media_session_id: o.A.getMediaSessionId() ?? null,
                    rtc_connection_id: o.A.getRTCConnectionId() ?? null,
                }),
                setTimeout(() => {
                    n("success"), setTimeout(() => n("idle"), 2e3);
                }, 2e3));
        }, [t]),
        a = y.A.getArticleURL(R.MVz.VOICE_VIDEO_TROUBLESHOOTING),
        u =
            null != e.outboundLossRate
                ? O.intl.format(O.t["3pFz1P"], { badPing: 250, badLossRate: 10, url: a })
                : O.intl.format(O.t.vggaMt, { badPing: 250, url: a }),
        d = (0, l.useCallback)(() => {
            let { hostname: t, averagePing: n, lastPing: s, outboundLossRate: r } = e,
                a = T.Q_.getSetting();
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    a &&
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)("div", {
                                    className: U.o0,
                                    children: (0, i.jsx)(N.A, { dataPoints: e.pings, width: 258, height: 80 }),
                                }),
                                (0, i.jsx)(g.E, {
                                    variant: "text-sm/bold",
                                    color: "text-default",
                                    className: U.VU,
                                    children: D.A.getShortHostname(t),
                                }),
                            ],
                        }),
                    (0, i.jsx)("div", {
                        className: U.ew,
                        children: (0, i.jsxs)("div", {
                            className: U.zS,
                            children: [
                                (0, i.jsx)(g.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: U.VU,
                                    children: O.intl.format(O.t["X58/lN"], { averagePing: n.toFixed(0) }),
                                }),
                                null != s
                                    ? (0, i.jsx)(g.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          className: U.VU,
                                          children: O.intl.format(O.t["6iv2TF"], { lastPing: s.toFixed(0) }),
                                      })
                                    : null,
                                null != r
                                    ? (0, i.jsx)(g.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          className: U.VU,
                                          children: O.intl.format(O.t["VIBJM+"], { outboundLossRate: r.toFixed(1) }),
                                      })
                                    : null,
                            ],
                        }),
                    }),
                    (0, i.jsx)(g.E, { variant: "text-xs/normal", color: "text-muted", children: u }),
                ],
            });
        }, [e, u]),
        { connectionState: c, connectionTypeText: h } = e,
        L = T.Q_.getSetting(),
        P = {
            [R.S7L.AWAITING_ENDPOINT]: O.intl.format(O.t.Eu2vUR, { url: R.qF7.STATUS }),
            [R.S7L.CONNECTING]: O.intl.string(O.t["y+E8aD"]),
            [R.S7L.AUTHENTICATING]: O.intl.string(O.t["5lGIZH"]),
            [R.S7L.DISCONNECTED]: O.intl.string(O.t.fOX25I),
            [R.S7L.RTC_CONNECTING]: O.intl.string(O.t.b5Ubd5),
            [R.S7L.ICE_CHECKING]: O.intl.format(O.t.SyoYUb, { url: y.A.getArticleURL(R.MVz.VOICE_CONNECTION_ERRORS) }),
            [R.S7L.DTLS_CONNECTING]: O.intl.format(O.t.SyoYUb, {
                url: y.A.getArticleURL(R.MVz.VOICE_CONNECTION_ERRORS),
            }),
            [R.S7L.RTC_CONNECTED]: d,
            [R.S7L.NO_ROUTE]: O.intl.format(O.t["2tgQnk"], { url: y.A.getArticleURL(R.MVz.VOICE_CONNECTION_ERRORS) }),
            [R.S7L.RTC_DISCONNECTED]: O.intl.string(O.t.fOX25I),
        }[c];
    return (0, i.jsxs)("div", {
        className: U.kL,
        children: [
            "function" == typeof P
                ? P()
                : (0, i.jsx)(g.E, { tag: "p", variant: "text-sm/normal", color: "text-muted", children: P }),
            !__OVERLAY__ &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("hr", { className: w.me }),
                        (0, i.jsxs)("div", {
                            className: U.Uo,
                            children: [
                                L &&
                                    v.Ay.supports(x.O5.DIAGNOSTICS) &&
                                    (0, i.jsx)(f.$, {
                                        icon: A.Q,
                                        text: O.intl.string(O.t.KBoWg9),
                                        variant: "secondary",
                                        size: "sm",
                                        fullWidth: !0,
                                        onClick: s,
                                    }),
                                (0, i.jsx)(f.$, {
                                    icon: "success" === t ? E.y : I.J,
                                    text: "success" === t ? O.intl.string(O.t.i4jeWR) : O.intl.string(O.t.EbwFfR),
                                    variant: "secondary",
                                    size: "sm",
                                    fullWidth: !0,
                                    loading: "uploading" === t,
                                    disabled: "idle" !== t,
                                    onClick: r,
                                }),
                            ],
                        }),
                    ],
                }),
            (0, i.jsxs)(p.Z, {
                type: p.Z.Types.SUCCESS,
                className: w.g4,
                children: [
                    (0, i.jsx)(S.X, { size: "xxs", color: m.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                    (0, i.jsx)(g.E, { variant: "text-xs/medium", color: "text-feedback-positive", children: h }),
                ],
            }),
        ],
    });
};
var P = n(534514),
    G = n(939249),
    F = n(624479),
    b = n(957565),
    j = n(814278),
    V = n(998759),
    k = n(75811),
    H = n(603266),
    B = n(209426);
function W(e) {
    let { channelId: t } = e,
        n = (0, s.bG)([o.A], () => o.A.getSecureFramesState()?.epochAuthenticator),
        r = (0, V.z)({ fingerprintBase64: n, chunkSize: 5, desiredLength: 30 }),
        [a, u] = l.useState(!1),
        c = l.useMemo(() => r?.join(" "), [r]),
        h = l.useCallback(() => {
            null != c &&
                (0, b.C)(c, () => {
                    u(!0), (0, d.k0)({ channelId: t }), setTimeout(() => u(!1), 2e3);
                });
        }, [t, c]);
    return (0, i.jsxs)("div", {
        className: B.kL,
        children: [
            (0, i.jsx)(P.D, { variant: "text-sm/bold", color: "text-strong", children: O.intl.string(O.t.cTQI5t) }),
            (0, i.jsx)(g.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: O.intl.format(O.t.wKxADe, { helpArticle: (0, j.aW)() }),
            }),
            (0, i.jsx)("div", {
                className: B.on,
                children: (0, i.jsx)(k.j, { chunks: r, columns: 3, className: B.lu }),
            }),
            null != r &&
                (0, i.jsxs)(G.D, {
                    className: w.n2,
                    onClick: h,
                    children: [
                        (0, i.jsx)("div", {
                            className: a ? w.Dx : w.t6,
                            children: (0, i.jsx)(f.$, {
                                icon: F.T,
                                text: O.intl.string(O.t.OpuAlK),
                                variant: "secondary",
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: a ? w.t6 : w.Dx,
                            children: (0, i.jsx)(f.$, {
                                icon: E.y,
                                text: O.intl.string(O.t.t5VZ88),
                                variant: "secondary",
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            (0, i.jsx)("hr", { className: w.me }),
            (0, i.jsx)(g.E, { variant: "text-xs/normal", color: "text-subtle", children: O.intl.string(O.t.B9JNsl) }),
            (0, i.jsxs)(p.Z, {
                type: p.Z.Types.SUCCESS,
                className: w.g4,
                children: [
                    (0, i.jsx)(S.X, { size: "xxs", color: m.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                    (0, i.jsx)(g.E, {
                        variant: "text-xs/medium",
                        color: "text-feedback-positive",
                        children: O.intl.string(O.t["3BogKe"]),
                    }),
                ],
            }),
        ],
    });
}
var Y = n(9934);
function z(e) {
    let { lobbyId: t, connectionTypeText: n, closePopout: l } = e,
        r = (0, s.cf)([u.A], () => ({
            connectionState: u.A.getConnectionState(t),
            hostname: u.A.getHostname(t),
            averagePing: u.A.getAveragePing(t),
            lastPing: u.A.getLastPing(t),
            pings: u.A.getPings(),
            outboundLossRate: u.A.getOutboundLossRate(t),
        }));
    return (0, i.jsx)(L, { ...r, closePopout: l, connectionTypeText: n });
}
function J(e) {
    let { closePopout: t, connectionTypeText: n } = e,
        l = (0, s.cf)([o.A], () => ({
            connectionState: o.A.getState(),
            hostname: o.A.getHostname(),
            averagePing: o.A.getAveragePing(),
            lastPing: o.A.getLastPing(),
            outboundLossRate: o.A.getOutboundLossRate(),
            pings: o.A.getPings(),
        }));
    return (0, i.jsx)(L, { ...l, closePopout: t, connectionTypeText: n });
}
function Z(e) {
    let { channelId: t, isOverlay: n, lobbyId: l, closePopout: s } = e,
        r = (0, h.k)({ channelId: t }) ? O.intl.string(O.t["3BogKe"]) : O.intl.string(O.t.ETIVvg);
    return n
        ? (0, i.jsx)(z, { lobbyId: l, closePopout: s, connectionTypeText: r })
        : (0, i.jsx)(J, { closePopout: s, connectionTypeText: r });
}
function $(e) {
    let [t, n] = l.useState(H.Rj.RTC_DEBUG_PANEL),
        s = (0, a.GV)();
    l.useEffect(() => {
        (0, d.Hg)({ channelId: e.channelId, selectedTab: t });
    }, [e.channelId, t]);
    let o = (0, c.c)();
    return (
        l.useEffect(() => {
            o && n(H.Rj.RTC_DEBUG_PANEL);
        }, [o]),
        (0, i.jsxs)("div", {
            className: Y.kL,
            children: [
                (0, i.jsxs)(r.V, {
                    className: Y.vR,
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    children: [
                        (0, i.jsx)(r.V.Item, {
                            id: H.Rj.RTC_DEBUG_PANEL,
                            className: Y.YU,
                            children: O.intl.string(O.t.MBY1Pm),
                        }),
                        o
                            ? null
                            : (0, i.jsx)(r.V.Item, {
                                  id: H.Rj.RTC_SECURE_FRAMES,
                                  className: Y.YU,
                                  children: O.intl.string(O.t.zC6o3s),
                              }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: Y.SZ,
                    children: [
                        (0, i.jsx)(r.V.Panel, {
                            id: H.Rj.RTC_DEBUG_PANEL,
                            "aria-labelledby": s,
                            className: t !== H.Rj.RTC_DEBUG_PANEL ? Y._t : void 0,
                            children: (0, i.jsx)(Z, { ...e }),
                        }),
                        (0, i.jsx)(r.V.Panel, {
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
function K(e) {
    return (0, h.k)({ channelId: e.channelId })
        ? (0, i.jsx)($, { ...e })
        : (0, i.jsx)("div", { className: Y.L3, children: (0, i.jsx)(Z, { ...e }) });
}
