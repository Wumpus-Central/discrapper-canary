n.d(t, { A: () => q });
var i = n(477900),
    r = n(582128),
    l = n(855986),
    s = n(761508),
    a = n(915089),
    o = n(495867),
    u = n(572487),
    d = n(798286),
    c = n(83942),
    h = n(259374),
    f = n(834730),
    g = n(821609),
    A = n(92446),
    p = n(628284),
    m = n(95635),
    I = n(993077),
    E = n(194261),
    S = n(646514),
    C = n(233545),
    _ = n(497029),
    N = n(229659),
    T = n(253932),
    y = n(754712),
    v = n(129230),
    M = n(975571),
    D = n(917592),
    R = n(652215),
    O = n(731854),
    x = n(792996),
    P = n(300303),
    L = n(479137);
let U = function (e) {
    let [t, n] = (0, r.useState)("idle");
    (0, r.useEffect)(() => {
        v.default.track(R.HAw.OPEN_POPOUT, { type: "RTC Connection" });
    }, []);
    let l = (0, r.useCallback)(() => {
            let { closePopout: t } = e;
            (null != t && t(), C.ho());
        }, [e]),
        s = (0, r.useCallback)(() => {
            "idle" === t &&
                (n("uploading"),
                (0, _.a)(R.Umv.RTC),
                v.default.track(R.HAw.DEBUG_LOG_UPLOADED, {
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
        d = (0, r.useCallback)(() => {
            let { hostname: t, averagePing: n, lastPing: l, outboundLossRate: s } = e,
                a = T.Q_.getSetting();
            return (0, i.jsxs)(r.Fragment, {
                children: [
                    a &&
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)("div", {
                                    className: P.o0,
                                    children: (0, i.jsx)(N.A, { dataPoints: e.pings, width: 258, height: 80 }),
                                }),
                                (0, i.jsx)(f.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-default",
                                    className: P.VU,
                                    children: D.A.getShortHostname(t),
                                }),
                            ],
                        }),
                    (0, i.jsx)("div", {
                        className: P.ew,
                        children: (0, i.jsxs)("div", {
                            className: P.zS,
                            children: [
                                (0, i.jsx)(f.E, {
                                    variant: "body-xs/normal",
                                    color: "text-default",
                                    className: P.VU,
                                    children: x.intl.format(x.t["X58/lN"], { averagePing: n.toFixed(0) }),
                                }),
                                null != l
                                    ? (0, i.jsx)(f.E, {
                                          variant: "body-xs/normal",
                                          color: "text-default",
                                          className: P.VU,
                                          children: x.intl.format(x.t["6iv2TF"], { lastPing: l.toFixed(0) }),
                                      })
                                    : null,
                                null != s
                                    ? (0, i.jsx)(f.E, {
                                          variant: "body-xs/normal",
                                          color: "text-default",
                                          className: P.VU,
                                          children: x.intl.format(x.t["VIBJM+"], { outboundLossRate: s.toFixed(1) }),
                                      })
                                    : null,
                            ],
                        }),
                    }),
                    (0, i.jsx)(f.E, { variant: "body-xs/normal", color: "text-muted", children: u }),
                ],
            });
        }, [e, u]),
        { connectionState: c, connectionTypeText: h } = e,
        U = T.Q_.getSetting(),
        w = {
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
        className: P.kL,
        children: [
            "function" == typeof w
                ? w()
                : (0, i.jsx)(f.E, { tag: "p", variant: "body-sm/normal", color: "text-muted", children: w }),
            !__OVERLAY__ &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("hr", { className: L.me }),
                        (0, i.jsxs)("div", {
                            className: P.Uo,
                            children: [
                                U &&
                                    y.Ay.supports(O.O5.DIAGNOSTICS) &&
                                    (0, i.jsx)(g.$, {
                                        icon: A.BugIcon,
                                        text: x.intl.string(x.t.KBoWg9),
                                        variant: "secondary",
                                        size: "sm",
                                        fullWidth: !0,
                                        onClick: l,
                                    }),
                                (0, i.jsx)(g.$, {
                                    icon: "success" === t ? p.CircleCheckIcon : m.UploadIcon,
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
            (0, i.jsxs)(I.Z, {
                type: I.Z.Types.SUCCESS,
                className: L.g4,
                children: [
                    (0, i.jsx)(E.LockIcon, { size: "xxs", color: S.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                    (0, i.jsx)(f.E, { variant: "body-xs/medium", color: "text-feedback-positive", children: h }),
                ],
            }),
        ],
    });
};
var w = n(534514),
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
        n = (0, l.bG)([o.A], () => o.A.getSecureFramesState()?.epochAuthenticator),
        s = (0, k.z)({ fingerprintBase64: n, chunkSize: 5, desiredLength: 30 }),
        [a, u] = r.useState(!1),
        c = r.useMemo(() => s?.join(" "), [s]),
        h = r.useCallback(() => {
            null != c &&
                (0, F.C)(c, () => {
                    (u(!0), (0, d.k0)({ channelId: t }), setTimeout(() => u(!1), 2e3));
                });
        }, [t, c]);
    return (0, i.jsxs)("div", {
        className: B.kL,
        children: [
            (0, i.jsx)(w.D, { variant: "body-sm/semibold", color: "text-strong", children: x.intl.string(x.t.cTQI5t) }),
            (0, i.jsx)(f.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                children: x.intl.format(x.t.wKxADe, { helpArticle: (0, j.aW)() }),
            }),
            (0, i.jsx)("div", {
                className: B.on,
                children: (0, i.jsx)(V.j, { chunks: s, columns: 3, className: B.lu }),
            }),
            null != s &&
                (0, i.jsxs)(b.D, {
                    className: L.n2,
                    onClick: h,
                    children: [
                        (0, i.jsx)("div", {
                            className: a ? L.Dx : L.t6,
                            children: (0, i.jsx)(g.$, {
                                icon: G.CopyIcon,
                                text: x.intl.string(x.t.OpuAlK),
                                variant: "secondary",
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: a ? L.t6 : L.Dx,
                            children: (0, i.jsx)(g.$, {
                                icon: p.CircleCheckIcon,
                                text: x.intl.string(x.t.t5VZ88),
                                variant: "secondary",
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            (0, i.jsx)("hr", { className: L.me }),
            (0, i.jsx)(f.E, { variant: "body-xs/normal", color: "text-subtle", children: x.intl.string(x.t.B9JNsl) }),
            (0, i.jsxs)(I.Z, {
                type: I.Z.Types.SUCCESS,
                className: L.g4,
                children: [
                    (0, i.jsx)(E.LockIcon, { size: "xxs", color: S.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                    (0, i.jsx)(f.E, {
                        variant: "body-xs/medium",
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
    let { lobbyId: t, connectionTypeText: n, closePopout: r } = e,
        s = (0, l.cf)([u.A], () => ({
            connectionState: u.A.getConnectionState(t),
            hostname: u.A.getHostname(t),
            averagePing: u.A.getAveragePing(t),
            lastPing: u.A.getLastPing(t),
            pings: u.A.getPings(),
            outboundLossRate: u.A.getOutboundLossRate(t),
        }));
    return (0, i.jsx)(U, { ...s, closePopout: r, connectionTypeText: n });
}
function J(e) {
    let { closePopout: t, connectionTypeText: n } = e,
        r = (0, l.cf)([o.A], () => ({
            connectionState: o.A.getState(),
            hostname: o.A.getHostname(),
            averagePing: o.A.getAveragePing(),
            lastPing: o.A.getLastPing(),
            outboundLossRate: o.A.getOutboundLossRate(),
            pings: o.A.getPings(),
        }));
    return (0, i.jsx)(U, { ...r, closePopout: t, connectionTypeText: n });
}
function $(e) {
    let { channelId: t, isOverlay: n, lobbyId: r, closePopout: l } = e,
        s = (0, h.k)({ channelId: t }) ? x.intl.string(x.t["3BogKe"]) : x.intl.string(x.t.ETIVvg);
    return n
        ? (0, i.jsx)(z, { lobbyId: r, closePopout: l, connectionTypeText: s })
        : (0, i.jsx)(J, { closePopout: l, connectionTypeText: s });
}
function K(e) {
    let [t, n] = r.useState(H.Rj.RTC_DEBUG_PANEL),
        l = (0, a.GV)();
    r.useEffect(() => {
        (0, d.Hg)({ channelId: e.channelId, selectedTab: t });
    }, [e.channelId, t]);
    let o = (0, c.c)();
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
                            "aria-labelledby": l,
                            className: t !== H.Rj.RTC_DEBUG_PANEL ? Y._t : void 0,
                            children: (0, i.jsx)($, { ...e }),
                        }),
                        (0, i.jsx)(s.V.Panel, {
                            id: H.Rj.RTC_SECURE_FRAMES,
                            "aria-labelledby": l,
                            className: t !== H.Rj.RTC_SECURE_FRAMES ? Y._t : void 0,
                            children: (0, i.jsx)(W, { channelId: e.channelId }),
                        }),
                    ],
                }),
            ],
        })
    );
}
function q(e) {
    return (0, h.k)({ channelId: e.channelId })
        ? (0, i.jsx)(K, { ...e })
        : (0, i.jsx)("div", { className: Y.L3, children: (0, i.jsx)($, { ...e }) });
}
