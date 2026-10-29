n.d(t, { A: () => Z });
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
    A = n(92446),
    p = n(628284),
    m = n(95635),
    E = n(993077),
    I = n(194261),
    S = n(661531),
    C = n(233545),
    _ = n(108088),
    N = n(229659),
    T = n(253932),
    v = n(360906),
    y = n(174459),
    M = n(975571),
    D = n(917592),
    R = n(652215),
    O = n(731854),
    x = n(105292),
    L = n(300303),
    w = n(479137);
let U = function (e) {
    let [t, n] = (0, l.useState)("idle");
    (0, l.useEffect)(() => {
        y.default.track(R.HAw.OPEN_POPOUT, { type: "RTC Connection" });
    }, []);
    let r = (0, l.useCallback)(() => {
            let { closePopout: t } = e;
            (null != t && t(), C.ho());
        }, [e]),
        s = (0, l.useCallback)(() => {
            "idle" === t &&
                (n("uploading"),
                (0, _.a)(R.Umv.RTC),
                y.default.track(R.HAw.DEBUG_LOG_UPLOADED, {
                    media_session_id: o.A.getMediaSessionId() ?? null,
                    rtc_connection_id: o.A.getRTCConnectionId() ?? null,
                }),
                setTimeout(() => {
                    (n("success"), setTimeout(() => n("idle"), 2e3));
                }, 2e3));
        }, [t]),
        a = M.A.getArticleURL(R.MVz.VOICE_VIDEO_TROUBLESHOOTING),
        u =
            null != e.outboundLossRate
                ? x.intl.format(x.t["3pFz1P"], { badPing: 250, badLossRate: 10, url: a })
                : x.intl.format(x.t.vggaMt, { badPing: 250, url: a }),
        d = (0, l.useCallback)(() => {
            let { hostname: t, averagePing: n, lastPing: r, outboundLossRate: s } = e,
                a = T.Q_.getSetting();
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    a &&
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)("div", {
                                    className: L.o0,
                                    children: (0, i.jsx)(N.A, { dataPoints: e.pings, width: 258, height: 80 }),
                                }),
                                (0, i.jsx)(f.E, {
                                    variant: "text-sm/bold",
                                    color: "text-default",
                                    className: L.VU,
                                    children: D.A.getShortHostname(t),
                                }),
                            ],
                        }),
                    (0, i.jsx)("div", {
                        className: L.ew,
                        children: (0, i.jsxs)("div", {
                            className: L.zS,
                            children: [
                                (0, i.jsx)(f.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: L.VU,
                                    children: x.intl.format(x.t["X58/lN"], { averagePing: n.toFixed(0) }),
                                }),
                                null != r
                                    ? (0, i.jsx)(f.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          className: L.VU,
                                          children: x.intl.format(x.t["6iv2TF"], { lastPing: r.toFixed(0) }),
                                      })
                                    : null,
                                null != s
                                    ? (0, i.jsx)(f.E, {
                                          variant: "text-xs/normal",
                                          color: "text-default",
                                          className: L.VU,
                                          children: x.intl.format(x.t["VIBJM+"], { outboundLossRate: s.toFixed(1) }),
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
            [R.S7L.AWAITING_ENDPOINT]: x.intl.format(x.t.Eu2vUR, { url: R.qF7.STATUS }),
            [R.S7L.CONNECTING]: x.intl.string(x.t["y+E8aD"]),
            [R.S7L.AUTHENTICATING]: x.intl.string(x.t["5lGIZH"]),
            [R.S7L.DISCONNECTED]: x.intl.string(x.t.fOX25I),
            [R.S7L.RTC_CONNECTING]: x.intl.string(x.t.b5Ubd5),
            [R.S7L.ICE_CHECKING]: x.intl.format(x.t.SyoYUb, { url: M.A.getArticleURL(R.MVz.VOICE_CONNECTION_ERRORS) }),
            [R.S7L.DTLS_CONNECTING]: x.intl.format(x.t.SyoYUb, {
                url: M.A.getArticleURL(R.MVz.VOICE_CONNECTION_ERRORS),
            }),
            [R.S7L.RTC_CONNECTED]: d,
            [R.S7L.NO_ROUTE]: x.intl.format(x.t["2tgQnk"], { url: M.A.getArticleURL(R.MVz.VOICE_CONNECTION_ERRORS) }),
            [R.S7L.RTC_DISCONNECTED]: x.intl.string(x.t.fOX25I),
        }[c];
    return (0, i.jsxs)("div", {
        className: L.kL,
        children: [
            "function" == typeof P
                ? P()
                : (0, i.jsx)(f.E, { tag: "p", variant: "text-sm/normal", color: "text-muted", children: P }),
            !__OVERLAY__ &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("hr", { className: w.me }),
                        (0, i.jsxs)("div", {
                            className: L.Uo,
                            children: [
                                U &&
                                    v.Ay.supports(O.O5.DIAGNOSTICS) &&
                                    (0, i.jsx)(g.$, {
                                        icon: A.BugIcon,
                                        text: x.intl.string(x.t.KBoWg9),
                                        variant: "secondary",
                                        size: "sm",
                                        fullWidth: !0,
                                        onClick: r,
                                    }),
                                (0, i.jsx)(g.$, {
                                    icon: "success" === t ? p.y : m.UploadIcon,
                                    text: "success" === t ? x.intl.string(x.t.i4jeWR) : x.intl.string(x.t.EbwFfR),
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
            (0, i.jsxs)(E.Z, {
                type: E.Z.Types.SUCCESS,
                className: w.g4,
                children: [
                    (0, i.jsx)(I.LockIcon, { size: "xxs", color: S.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                    (0, i.jsx)(f.E, { variant: "text-xs/medium", color: "text-feedback-positive", children: h }),
                ],
            }),
        ],
    });
};
var P = n(297264),
    b = n(939249),
    G = n(624479),
    F = n(957565),
    j = n(814278),
    k = n(998759),
    V = n(75811),
    H = n(603266),
    B = n(68375);
function W(e) {
    let { channelId: t } = e,
        n = (0, r.bG)([o.A], () => o.A.getSecureFramesState()?.epochAuthenticator),
        s = (0, k.z)({ fingerprintBase64: n, chunkSize: 5, desiredLength: 30 }),
        [a, u] = l.useState(!1),
        c = l.useMemo(() => s?.join(" "), [s]),
        h = l.useCallback(() => {
            null != c &&
                (0, F.C)(c, () => {
                    (u(!0), (0, d.k0)({ channelId: t }), setTimeout(() => u(!1), 2e3));
                });
        }, [t, c]);
    return (0, i.jsxs)("div", {
        className: B.kL,
        children: [
            (0, i.jsx)(P.D, { variant: "text-sm/bold", color: "text-strong", children: x.intl.string(x.t.cTQI5t) }),
            (0, i.jsx)(f.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: x.intl.format(x.t.wKxADe, { helpArticle: (0, j.aW)() }),
            }),
            (0, i.jsx)("div", {
                className: B.on,
                children: (0, i.jsx)(V.j, { chunks: s, columns: 3, className: B.lu }),
            }),
            null != s &&
                (0, i.jsxs)(b.D, {
                    className: w.n2,
                    onClick: h,
                    children: [
                        (0, i.jsx)("div", {
                            className: a ? w.Dx : w.t6,
                            children: (0, i.jsx)(g.$, {
                                icon: G.CopyIcon,
                                text: x.intl.string(x.t.OpuAlK),
                                variant: "secondary",
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: a ? w.t6 : w.Dx,
                            children: (0, i.jsx)(g.$, {
                                icon: p.y,
                                text: x.intl.string(x.t.t5VZ88),
                                variant: "secondary",
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            (0, i.jsx)("hr", { className: w.me }),
            (0, i.jsx)(f.E, { variant: "text-xs/normal", color: "text-subtle", children: x.intl.string(x.t.B9JNsl) }),
            (0, i.jsxs)(E.Z, {
                type: E.Z.Types.SUCCESS,
                className: w.g4,
                children: [
                    (0, i.jsx)(I.LockIcon, { size: "xxs", color: S.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                    (0, i.jsx)(f.E, {
                        variant: "text-xs/medium",
                        color: "text-feedback-positive",
                        children: x.intl.string(x.t["3BogKe"]),
                    }),
                ],
            }),
        ],
    });
}
var Y = n(203077);
function z(e) {
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
function J(e) {
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
function K(e) {
    let { channelId: t, isOverlay: n, lobbyId: l, closePopout: r } = e,
        s = (0, h.k)({ channelId: t }) ? x.intl.string(x.t["3BogKe"]) : x.intl.string(x.t.ETIVvg);
    return n
        ? (0, i.jsx)(z, { lobbyId: l, closePopout: r, connectionTypeText: s })
        : (0, i.jsx)(J, { closePopout: r, connectionTypeText: s });
}
function $(e) {
    let [t, n] = l.useState(H.Rj.RTC_DEBUG_PANEL),
        r = (0, a.GV)();
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
                            children: x.intl.string(x.t.MBY1Pm),
                        }),
                        o
                            ? null
                            : (0, i.jsx)(s.V.Item, {
                                  id: H.Rj.RTC_SECURE_FRAMES,
                                  className: Y.YU,
                                  children: x.intl.string(x.t.zC6o3s),
                              }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: Y.SZ,
                    children: [
                        (0, i.jsx)(s.V.Panel, {
                            id: H.Rj.RTC_DEBUG_PANEL,
                            "aria-labelledby": r,
                            className: t !== H.Rj.RTC_DEBUG_PANEL ? Y._t : void 0,
                            children: (0, i.jsx)(K, { ...e }),
                        }),
                        (0, i.jsx)(s.V.Panel, {
                            id: H.Rj.RTC_SECURE_FRAMES,
                            "aria-labelledby": r,
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
    return (0, h.k)({ channelId: e.channelId })
        ? (0, i.jsx)($, { ...e })
        : (0, i.jsx)("div", { className: Y.L3, children: (0, i.jsx)(K, { ...e }) });
}
