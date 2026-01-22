n.d(t, {
    Ay: () => k,
    G0: () => D,
    p9: () => j,
    q5: () => M,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(139033),
    o = n(314116),
    l = n(421380),
    c = n(397927),
    u = n(827343),
    d = n(926919),
    f = n(233545),
    p = n(77729),
    _ = n(235986),
    h = n(98919),
    m = n(487329),
    g = n(195043),
    E = n(111162),
    b = n(430452),
    y = n(412780),
    O = n(353835),
    A = n(698723),
    v = n(531525),
    S = n(652215),
    I = n(731854),
    T = n(985018),
    C = n(473169);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                N(e, t, n[t]);
            });
    }
    return e;
}
function w(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function D() {
    let e = await p.A.fileManager.getLogPath();
    p.A.fileManager.showItemInFolder(e);
}
function x() {
    let e = T.intl.string(T.t["fKBB8+"]),
        t = T.intl.string(T.t.BvyxE7);
    (0, s.A)({
        title: e,
        subtitle: t,
    });
}
function L(e) {
    var t;
    let n = T.intl.string(T.t.QZg0J7),
        i = null != e ? e : T.intl.string(T.t.VzHcSm),
        a = null == (t = (0, m.B1)(m.iy.DEBUG_LOG_UPLOAD_FAILED)) ? void 0 : t.errorCode,
        s = T.intl.formatToPlainString(T.t.ejOT95, { errorCode: a });
    (0, c.qfG)((e) =>
        (0, r.jsx)(
            c.VoidConfirmModal,
            P(
                R(
                    {
                        header: n,
                        confirmButtonColor: l.$n.Colors.BRAND,
                        confirmText: T.intl.string(T.t.BddRzS),
                    },
                    e,
                ),
                {
                    children: (0, r.jsxs)("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                        },
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: "text-md/normal",
                                children: i,
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: "text-sm/semibold",
                                selectable: !0,
                                style: { marginTop: "auto" },
                                children: s,
                            }),
                        ],
                    }),
                },
            ),
        ),
    );
}
function j(e) {
    (0, o.A)({
        title: T.intl.string(T.t["7UXEF2"]),
        subtitle: T.intl.string(T.t.IYPrRl),
        confirmText: T.intl.string(T.t.BddRzS),
        onConfirm: () => u.A.setDebugLogging(e),
    });
}
async function M(e) {
    let { onUploadStart: t, onUploadFinish: n } = e;
    null == t || t();
    try {
        await b.A.getMediaEngine().writeAudioDebugState(),
            await O.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, h.a)(S.Umv.RTC),
            x();
    } catch (e) {
        L(e.displayMessage);
    } finally {
        null == n || n();
    }
}
function k() {
    let [e, t] = i.useState(!1),
        { debugLogging: n, aecDumpEnabled: s } = (0, a.cf)([b.A], () => ({
            aecDumpSupported: b.A.isAecDumpSupported(),
            debugLogging: b.A.getDebugLogging(),
            aecDumpEnabled: b.A.getAecDump(),
            supportsConnectionReplay: b.A.supports(I.O5.CONNECTION_REPLAY),
        })),
        o = (0, a.bG)([E.default], () => E.default.isStreamInfoOverlayEnabled),
        l = (0, a.bG)([y.Ay], () => y.Ay.shouldRecordNextConnection()),
        p = i.useCallback(async () => {
            await M({ onUploadStart: () => t(!0) });
        }, []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(g.x, {
                setting: v.H.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY,
                children: (0, r.jsx)(c.dOG, {
                    label: T.intl.string(T.t["0CEP6e"]),
                    description: T.intl.string(T.t["kBXuW+"]),
                    checked: o,
                    onChange: (e) => {
                        (0, A.A)("stream_info_overlay_enabled", e, o), (0, d.x)({ isStreamInfoOverlayEnabled: e });
                    },
                }),
            }),
            (0, r.jsx)(g.x, {
                setting: v.H.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP,
                children: (0, r.jsx)(c.dOG, {
                    label: T.intl.string(T.t["r6K+TL"]),
                    description: T.intl.string(T.t["xl9+I6"]),
                    checked: s,
                    onChange: (e) => u.A.setAecDump(e),
                }),
            }),
            (0, r.jsxs)(g.x, {
                setting: v.H.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY,
                children: [
                    (0, r.jsx)(c.dOG, {
                        label: T.intl.string(T.t.U4FgFK),
                        description: T.intl.string(T.t.Lm72RU),
                        checked: l,
                        onChange: (e) => f.Et(e),
                    }),
                    (0, r.jsx)(_.A, {
                        className: C.SX,
                        children: (0, r.jsx)(_.A.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, r.jsx)(c.Button, {
                                variant: "primary",
                                size: "sm",
                                text: T.intl.string(T.t.nJnOHO),
                                onClick: () => f.YW(),
                            }),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(g.x, {
                setting: v.H.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING,
                children: (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(c.dOG, {
                            label: T.intl.string(T.t["726JHL"]),
                            description: T.intl.string(T.t["/7ak9Q"]),
                            checked: n,
                            onChange: j,
                        }),
                        (0, r.jsxs)(c.ButtonGroup, {
                            size: "sm",
                            children: [
                                (0, r.jsx)(c.Button, {
                                    variant: "primary",
                                    text: T.intl.string(T.t["3UB9ad"]),
                                    disabled: e,
                                    onClick: p,
                                }),
                                (0, r.jsx)(c.Button, {
                                    variant: "secondary",
                                    text: T.intl.string(T.t.nuPtYi),
                                    onClick: D,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
