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
    p = n(92446),
    E = n(628284),
    m = n(95635),
    g = n(993077),
    A = n(194261),
    I = n(661531),
    T = n(349288),
    S = n(233545),
    y = n(77138),
    N = n(229659),
    v = n(885386),
    C = n(555975),
    R = n(174459),
    O = n(975571),
    b = n(917592),
    D = n(652215),
    L = n(731854),
    w = n(375708),
    M = n(394952),
    P = n(291614);
let x = function (e) {
    let [t, n] = (0, r.useState)("idle");
    (0, r.useEffect)(() => {
        R.default.track(D.HAw.OPEN_POPOUT, { type: "RTC Connection" });
    }, []);
    let s = (0, r.useCallback)(() => {
            let { closePopout: t } = e;
            null != t && t(), S.ho();
        }, [e]),
        a = (0, r.useCallback)(() => {
            "idle" === t &&
                (n("uploading"),
                (0, y.a)(D.Umv.RTC),
                R.default.track(D.HAw.DEBUG_LOG_UPLOADED, {
                    media_session_id: l.A.getMediaSessionId() ?? null,
                    rtc_connection_id: l.A.getRTCConnectionId() ?? null,
                }),
                setTimeout(() => {
                    n("success"), setTimeout(() => n("idle"), 2e3);
                }, 2e3));
        }, [t]),
        o =
            null != e.outboundLossRate
                ? w.intl.formatToPlainString(w.t["3pFz1P"], { badPing: 250, badLossRate: 10 })
                : w.intl.formatToPlainString(w.t.vggaMt, { badPing: 250 }),
        u = (0, r.useCallback)(() => {
            let { hostname: t, averagePing: n, lastPing: s, outboundLossRate: a } = e,
                l = v.Q_.getSetting();
            return (0, i.jsxs)(r.Fragment, {
                children: [
                    l &&
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)("div", {
                                    className: M.o0,
                                    children: (0, i.jsx)(N.A, { dataPoints: e.pings, width: 258, height: 80 }),
                                }),
                                (0, i.jsx)(h.E, {
                                    variant: "text-sm/bold",
                                    color: "text-default",
                                    className: M.VU,
                                    children: b.A.getShortHostname(t),
                                }),
                            ],
                        }),
                    (0, i.jsx)("div", {
                        className: M.ew,
                        children: (0, i.jsxs)("div", {
                            className: M.zS,
                            children: [
                                (0, i.jsx)(h.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: M.VU,
                                    children: w.intl.format(w.t["X58/lN"], { averagePing: n.toFixed(0) }),
                                }),
                                null != s
                                    ? (0, i.jsx)(h.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          className: M.VU,
                                          children: w.intl.format(w.t["6iv2TF"], { lastPing: s.toFixed(0) }),
                                      })
                                    : null,
                                null != a
                                    ? (0, i.jsx)(h.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          className: M.VU,
                                          children: w.intl.format(w.t["VIBJM+"], { outboundLossRate: a.toFixed(1) }),
                                      })
                                    : null,
                            ],
                        }),
                    }),
                    (0, i.jsx)(h.E, { variant: "text-xs/normal", color: "text-muted", children: o }),
                ],
            });
        }, [e, o]),
        { connectionState: c, connectionTypeText: d } = e,
        _ = v.Q_.getSetting(),
        x = {
            [D.S7L.AWAITING_ENDPOINT]: w.intl.format(w.t.Eu2vUR, { url: D.qF7.STATUS }),
            [D.S7L.CONNECTING]: w.intl.string(w.t["y+E8aD"]),
            [D.S7L.AUTHENTICATING]: w.intl.string(w.t["5lGIZH"]),
            [D.S7L.DISCONNECTED]: w.intl.string(w.t.fOX25I),
            [D.S7L.RTC_CONNECTING]: w.intl.string(w.t.b5Ubd5),
            [D.S7L.ICE_CHECKING]: w.intl.format(w.t.SyoYUb, { url: O.A.getArticleURL(D.MVz.VOICE_CONNECTION_ERRORS) }),
            [D.S7L.DTLS_CONNECTING]: w.intl.format(w.t.SyoYUb, {
                url: O.A.getArticleURL(D.MVz.VOICE_CONNECTION_ERRORS),
            }),
            [D.S7L.RTC_CONNECTED]: u,
            [D.S7L.NO_ROUTE]: w.intl.format(w.t["2tgQnk"], { url: O.A.getArticleURL(D.MVz.VOICE_CONNECTION_ERRORS) }),
            [D.S7L.RTC_DISCONNECTED]: w.intl.string(w.t.fOX25I),
        }[c];
    return (0, i.jsxs)("div", {
        className: M.kL,
        children: [
            "function" == typeof x
                ? x()
                : (0, i.jsx)(h.E, { tag: "p", variant: "text-sm/normal", color: "text-muted", children: x }),
            _ &&
                C.Ay.supports(L.O5.DIAGNOSTICS) &&
                !__OVERLAY__ &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("hr", { className: P.me }),
                        (0, i.jsxs)("div", {
                            className: M.pw,
                            children: [
                                (0, i.jsx)(f.$, {
                                    icon: p.Q,
                                    text: w.intl.string(w.t.KBoWg9),
                                    variant: "secondary",
                                    size: "sm",
                                    fullWidth: !0,
                                    onClick: s,
                                }),
                                (0, i.jsx)(f.$, {
                                    icon: "success" === t ? E.y : m.J,
                                    text: "success" === t ? w.intl.string(w.t.i4jeWR) : w.intl.string(w.t.EbwFfR),
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
                    (0, i.jsx)(h.E, { variant: "text-xs/medium", color: "text-feedback-positive", children: d }),
                ],
            }),
            !_ &&
                !__OVERLAY__ &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("hr", { className: P.me }),
                        (0, i.jsx)(T.Anchor, {
                            className: M.CU,
                            href: O.A.getArticleURL(D.MVz.VOICE_VIDEO_TROUBLESHOOTING),
                            children: w.intl.string(w.t.hvVgAZ),
                        }),
                    ],
                }),
        ],
    });
};
var k = n(534514),
    U = n(939249),
    G = n(624479),
    F = n(957565),
    V = n(814278),
    B = n(998759),
    H = n(75811),
    j = n(603266),
    Y = n(209426);
function W(e) {
    let { channelId: t } = e,
        n = (0, s.bG)([l.A], () => l.A.getSecureFramesState()?.epochAuthenticator),
        a = (0, B.z)({ fingerprintBase64: n, chunkSize: 5, desiredLength: 30 }),
        [o, u] = r.useState(!1),
        d = r.useMemo(() => a?.join(" "), [a]),
        _ = r.useCallback(() => {
            null != d &&
                (0, F.C)(d, () => {
                    u(!0), (0, c.k0)({ channelId: t }), setTimeout(() => u(!1), 2e3);
                });
        }, [t, d]);
    return (0, i.jsxs)("div", {
        className: Y.kL,
        children: [
            (0, i.jsx)(k.D, { variant: "text-sm/bold", color: "text-strong", children: w.intl.string(w.t.cTQI5t) }),
            (0, i.jsx)(h.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: w.intl.format(w.t.wKxADe, { helpArticle: (0, V.aW)() }),
            }),
            (0, i.jsx)("div", {
                className: Y.on,
                children: (0, i.jsx)(H.j, { chunks: a, columns: 3, className: Y.lu }),
            }),
            null != a &&
                (0, i.jsxs)(U.D, {
                    className: P.n2,
                    onClick: _,
                    children: [
                        (0, i.jsx)("div", {
                            className: o ? P.Dx : P.t6,
                            children: (0, i.jsx)(f.$, {
                                icon: G.T,
                                text: w.intl.string(w.t.OpuAlK),
                                variant: "secondary",
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: o ? P.t6 : P.Dx,
                            children: (0, i.jsx)(f.$, {
                                icon: E.y,
                                text: w.intl.string(w.t.t5VZ88),
                                variant: "secondary",
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            (0, i.jsx)("hr", { className: P.me }),
            (0, i.jsx)(h.E, { variant: "text-xs/normal", color: "text-subtle", children: w.intl.string(w.t.B9JNsl) }),
            (0, i.jsxs)(g.Z, {
                type: g.Z.Types.SUCCESS,
                className: P.g4,
                children: [
                    (0, i.jsx)(A.X, { size: "xxs", color: I.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                    (0, i.jsx)(h.E, {
                        variant: "text-xs/medium",
                        color: "text-feedback-positive",
                        children: w.intl.string(w.t["3BogKe"]),
                    }),
                ],
            }),
        ],
    });
}
var K = n(9934);
function $(e) {
    let { lobbyId: t, connectionTypeText: n, closePopout: r } = e,
        a = (0, s.cf)([u.A], () => ({
            connectionState: u.A.getConnectionState(t),
            hostname: u.A.getHostname(t),
            averagePing: u.A.getAveragePing(t),
            lastPing: u.A.getLastPing(t),
            pings: u.A.getPings(),
            outboundLossRate: u.A.getOutboundLossRate(t),
        }));
    return (0, i.jsx)(x, { ...a, closePopout: r, connectionTypeText: n });
}
function z(e) {
    let { closePopout: t, connectionTypeText: n } = e,
        r = (0, s.cf)([l.A], () => ({
            connectionState: l.A.getState(),
            hostname: l.A.getHostname(),
            averagePing: l.A.getAveragePing(),
            lastPing: l.A.getLastPing(),
            outboundLossRate: l.A.getOutboundLossRate(),
            pings: l.A.getPings(),
        }));
    return (0, i.jsx)(x, { ...r, closePopout: t, connectionTypeText: n });
}
function q(e) {
    let { channelId: t, isOverlay: n, lobbyId: r, closePopout: s } = e,
        a = (0, _.k)({ channelId: t }) ? w.intl.string(w.t["3BogKe"]) : w.intl.string(w.t.ETIVvg);
    return n
        ? (0, i.jsx)($, { lobbyId: r, closePopout: s, connectionTypeText: a })
        : (0, i.jsx)(z, { closePopout: s, connectionTypeText: a });
}
function X(e) {
    let [t, n] = r.useState(j.Rj.RTC_DEBUG_PANEL),
        s = (0, o.GV)(),
        l = [
            { id: j.Rj.RTC_DEBUG_PANEL, content: (0, i.jsx)(q, { ...e }) },
            { id: j.Rj.RTC_SECURE_FRAMES, content: (0, i.jsx)(W, { channelId: e.channelId }) },
        ];
    r.useEffect(() => {
        (0, c.Hg)({ channelId: e.channelId, selectedTab: t });
    }, [e.channelId, t]);
    let u = (0, d.c)();
    return (
        r.useEffect(() => {
            u && n(j.Rj.RTC_DEBUG_PANEL);
        }, [u]),
        (0, i.jsxs)("div", {
            className: K.kL,
            children: [
                (0, i.jsxs)(a.V, {
                    className: K.vR,
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    children: [
                        (0, i.jsx)(a.V.Item, {
                            id: j.Rj.RTC_DEBUG_PANEL,
                            className: K.YU,
                            children: w.intl.string(w.t.MBY1Pm),
                        }),
                        u
                            ? null
                            : (0, i.jsx)(a.V.Item, {
                                  id: j.Rj.RTC_SECURE_FRAMES,
                                  className: K.YU,
                                  children: w.intl.string(w.t.zC6o3s),
                              }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: K.SZ,
                    children: l.map((e) => {
                        let { id: n, content: r } = e;
                        return (0, i.jsx)(
                            a.V.Panel,
                            { id: n, "aria-labelledby": s, className: n !== t ? K._t : void 0, children: r },
                            n,
                        );
                    }),
                }),
            ],
        })
    );
}
function Z(e) {
    return (0, _.k)({ channelId: e.channelId })
        ? (0, i.jsx)(X, { ...e })
        : (0, i.jsx)("div", { className: K.L3, children: (0, i.jsx)(q, { ...e }) });
}
