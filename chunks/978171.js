n.d(t, { A: () => K });
var i = n(477900),
    l = n(582128),
    r = n(17928),
    s = n(761508),
    a = n(915089),
    o = n(763827),
    u = n(572487),
    d = n(798286),
    c = n(83942),
    h = n(259374),
    f = n(834730),
    g = n(821609),
    C = n(92446),
    A = n(628284),
    p = n(95635),
    m = n(993077),
    E = n(194261),
    I = n(661531),
    S = n(233545),
    _ = n(144009),
    N = n(229659),
    T = n(885386),
    M = n(25578),
    v = n(174459),
    y = n(975571),
    L = n(917592),
    x = n(652215),
    R = n(731854),
    D = n(375708),
    O = n(300303),
    w = n(479137);
let U = function (e) {
    let [t, n] = (0, l.useState)("idle");
    (0, l.useEffect)(() => {
        v.default.track(x.HAw.OPEN_POPOUT, { type: "RTC Connection" });
    }, []);
    let r = (0, l.useCallback)(() => {
            let { closePopout: t } = e;
            (null != t && t(), S.ho());
        }, [e]),
        s = (0, l.useCallback)(() => {
            "idle" === t &&
                (n("uploading"),
                (0, _.a)(x.Umv.RTC),
                v.default.track(x.HAw.DEBUG_LOG_UPLOADED, {
                    media_session_id: o.A.getMediaSessionId() ?? null,
                    rtc_connection_id: o.A.getRTCConnectionId() ?? null,
                }),
                setTimeout(() => {
                    (n("success"), setTimeout(() => n("idle"), 2e3));
                }, 2e3));
        }, [t]),
        a = y.A.getArticleURL(x.MVz.VOICE_VIDEO_TROUBLESHOOTING),
        u =
            null != e.outboundLossRate
                ? D.intl.format(D.t["3pFz1P"], { badPing: 250, badLossRate: 10, url: a })
                : D.intl.format(D.t.vggaMt, { badPing: 250, url: a }),
        d = (0, l.useCallback)(() => {
            let { hostname: t, averagePing: n, lastPing: r, outboundLossRate: s } = e,
                a = T.Q_.getSetting();
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    a &&
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)("div", {
                                    className: O.o0,
                                    children: (0, i.jsx)(N.A, { dataPoints: e.pings, width: 258, height: 80 }),
                                }),
                                (0, i.jsx)(f.E, {
                                    variant: "text-sm/bold",
                                    color: "text-default",
                                    className: O.VU,
                                    children: L.A.getShortHostname(t),
                                }),
                            ],
                        }),
                    (0, i.jsx)("div", {
                        className: O.ew,
                        children: (0, i.jsxs)("div", {
                            className: O.zS,
                            children: [
                                (0, i.jsx)(f.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: O.VU,
                                    children: D.intl.format(D.t["X58/lN"], { averagePing: n.toFixed(0) }),
                                }),
                                null != r
                                    ? (0, i.jsx)(f.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          className: O.VU,
                                          children: D.intl.format(D.t["6iv2TF"], { lastPing: r.toFixed(0) }),
                                      })
                                    : null,
                                null != s
                                    ? (0, i.jsx)(f.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          className: O.VU,
                                          children: D.intl.format(D.t["VIBJM+"], { outboundLossRate: s.toFixed(1) }),
                                      })
                                    : null,
                            ],
                        }),
                    }),
                    (0, i.jsx)(f.E, { variant: "text-xs/normal", color: "text-muted", children: u }),
                ],
            });
        }, [e, u]),
        { connectionState: c, connectionTypeText: h } = e,
        U = T.Q_.getSetting(),
        P = {
            [x.S7L.AWAITING_ENDPOINT]: D.intl.format(D.t.Eu2vUR, { url: x.qF7.STATUS }),
            [x.S7L.CONNECTING]: D.intl.string(D.t["y+E8aD"]),
            [x.S7L.AUTHENTICATING]: D.intl.string(D.t["5lGIZH"]),
            [x.S7L.DISCONNECTED]: D.intl.string(D.t.fOX25I),
            [x.S7L.RTC_CONNECTING]: D.intl.string(D.t.b5Ubd5),
            [x.S7L.ICE_CHECKING]: D.intl.format(D.t.SyoYUb, { url: y.A.getArticleURL(x.MVz.VOICE_CONNECTION_ERRORS) }),
            [x.S7L.DTLS_CONNECTING]: D.intl.format(D.t.SyoYUb, {
                url: y.A.getArticleURL(x.MVz.VOICE_CONNECTION_ERRORS),
            }),
            [x.S7L.RTC_CONNECTED]: d,
            [x.S7L.NO_ROUTE]: D.intl.format(D.t["2tgQnk"], { url: y.A.getArticleURL(x.MVz.VOICE_CONNECTION_ERRORS) }),
            [x.S7L.RTC_DISCONNECTED]: D.intl.string(D.t.fOX25I),
        }[c];
    return (0, i.jsxs)("div", {
        className: O.kL,
        children: [
            "function" == typeof P
                ? P()
                : (0, i.jsx)(f.E, { tag: "p", variant: "text-sm/normal", color: "text-muted", children: P }),
            !__OVERLAY__ &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("hr", { className: w.me }),
                        (0, i.jsxs)("div", {
                            className: O.Uo,
                            children: [
                                U &&
                                    M.Ay.supports(R.O5.DIAGNOSTICS) &&
                                    (0, i.jsx)(g.$, {
                                        icon: C.BugIcon,
                                        text: D.intl.string(D.t.KBoWg9),
                                        variant: "secondary",
                                        size: "sm",
                                        fullWidth: !0,
                                        onClick: r,
                                    }),
                                (0, i.jsx)(g.$, {
                                    icon: "success" === t ? A.y : p.UploadIcon,
                                    text: "success" === t ? D.intl.string(D.t.i4jeWR) : D.intl.string(D.t.EbwFfR),
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
            (0, i.jsxs)(m.Z, {
                type: m.Z.Types.SUCCESS,
                className: w.g4,
                children: [
                    (0, i.jsx)(E.LockIcon, { size: "xxs", color: I.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                    (0, i.jsx)(f.E, { variant: "text-xs/medium", color: "text-feedback-positive", children: h }),
                ],
            }),
        ],
    });
};
var P = n(297264),
    b = n(939249),
    j = n(624479),
    V = n(957565),
    F = n(814278),
    G = n(998759),
    H = n(75811),
    k = n(603266),
    Z = n(68375);
function B(e) {
    let { channelId: t } = e,
        n = (0, r.bG)([o.A], () => o.A.getSecureFramesState()?.epochAuthenticator),
        s = (0, G.z)({ fingerprintBase64: n, chunkSize: 5, desiredLength: 30 }),
        [a, u] = l.useState(!1),
        c = l.useMemo(() => s?.join(" "), [s]),
        h = l.useCallback(() => {
            null != c &&
                (0, V.C)(c, () => {
                    (u(!0), (0, d.k0)({ channelId: t }), setTimeout(() => u(!1), 2e3));
                });
        }, [t, c]);
    return (0, i.jsxs)("div", {
        className: Z.kL,
        children: [
            (0, i.jsx)(P.D, { variant: "text-sm/bold", color: "text-strong", children: D.intl.string(D.t.cTQI5t) }),
            (0, i.jsx)(f.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: D.intl.format(D.t.wKxADe, { helpArticle: (0, F.aW)() }),
            }),
            (0, i.jsx)("div", {
                className: Z.on,
                children: (0, i.jsx)(H.j, { chunks: s, columns: 3, className: Z.lu }),
            }),
            null != s &&
                (0, i.jsxs)(b.D, {
                    className: w.n2,
                    onClick: h,
                    children: [
                        (0, i.jsx)("div", {
                            className: a ? w.Dx : w.t6,
                            children: (0, i.jsx)(g.$, {
                                icon: j.CopyIcon,
                                text: D.intl.string(D.t.OpuAlK),
                                variant: "secondary",
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: a ? w.t6 : w.Dx,
                            children: (0, i.jsx)(g.$, {
                                icon: A.y,
                                text: D.intl.string(D.t.t5VZ88),
                                variant: "secondary",
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            (0, i.jsx)("hr", { className: w.me }),
            (0, i.jsx)(f.E, { variant: "text-xs/normal", color: "text-subtle", children: D.intl.string(D.t.B9JNsl) }),
            (0, i.jsxs)(m.Z, {
                type: m.Z.Types.SUCCESS,
                className: w.g4,
                children: [
                    (0, i.jsx)(E.LockIcon, { size: "xxs", color: I.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                    (0, i.jsx)(f.E, {
                        variant: "text-xs/medium",
                        color: "text-feedback-positive",
                        children: D.intl.string(D.t["3BogKe"]),
                    }),
                ],
            }),
        ],
    });
}
var W = n(203077);
function Y(e) {
    let { lobbyId: t, connectionTypeText: n, closePopout: l } = e,
        s = (0, r.cf)([u.A], () => ({
            connectionState: u.A.getConnectionState(t),
            hostname: u.A.getHostname(t),
            averagePing: u.A.getAveragePing(t),
            lastPing: u.A.getLastPing(t),
            pings: u.A.getPings(),
            outboundLossRate: u.A.getOutboundLossRate(t),
        }));
    return (0, i.jsx)(U, { ...s, closePopout: l, connectionTypeText: n });
}
function z(e) {
    let { closePopout: t, connectionTypeText: n } = e,
        l = (0, r.cf)([o.A], () => ({
            connectionState: o.A.getState(),
            hostname: o.A.getHostname(),
            averagePing: o.A.getAveragePing(),
            lastPing: o.A.getLastPing(),
            outboundLossRate: o.A.getOutboundLossRate(),
            pings: o.A.getPings(),
        }));
    return (0, i.jsx)(U, { ...l, closePopout: t, connectionTypeText: n });
}
function J(e) {
    let { channelId: t, isOverlay: n, lobbyId: l, closePopout: r } = e,
        s = (0, h.k)({ channelId: t }) ? D.intl.string(D.t["3BogKe"]) : D.intl.string(D.t.ETIVvg);
    return n
        ? (0, i.jsx)(Y, { lobbyId: l, closePopout: r, connectionTypeText: s })
        : (0, i.jsx)(z, { closePopout: r, connectionTypeText: s });
}
function $(e) {
    let [t, n] = l.useState(k.Rj.RTC_DEBUG_PANEL),
        r = (0, a.GV)();
    l.useEffect(() => {
        (0, d.Hg)({ channelId: e.channelId, selectedTab: t });
    }, [e.channelId, t]);
    let o = (0, c.c)();
    return (
        l.useEffect(() => {
            o && n(k.Rj.RTC_DEBUG_PANEL);
        }, [o]),
        (0, i.jsxs)("div", {
            className: W.kL,
            children: [
                (0, i.jsxs)(s.V, {
                    className: W.vR,
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    children: [
                        (0, i.jsx)(s.V.Item, {
                            id: k.Rj.RTC_DEBUG_PANEL,
                            className: W.YU,
                            children: D.intl.string(D.t.MBY1Pm),
                        }),
                        o
                            ? null
                            : (0, i.jsx)(s.V.Item, {
                                  id: k.Rj.RTC_SECURE_FRAMES,
                                  className: W.YU,
                                  children: D.intl.string(D.t.zC6o3s),
                              }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: W.SZ,
                    children: [
                        (0, i.jsx)(s.V.Panel, {
                            id: k.Rj.RTC_DEBUG_PANEL,
                            "aria-labelledby": r,
                            className: t !== k.Rj.RTC_DEBUG_PANEL ? W._t : void 0,
                            children: (0, i.jsx)(J, { ...e }),
                        }),
                        (0, i.jsx)(s.V.Panel, {
                            id: k.Rj.RTC_SECURE_FRAMES,
                            "aria-labelledby": r,
                            className: t !== k.Rj.RTC_SECURE_FRAMES ? W._t : void 0,
                            children: (0, i.jsx)(B, { channelId: e.channelId }),
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
        : (0, i.jsx)("div", { className: W.L3, children: (0, i.jsx)(J, { ...e }) });
}
