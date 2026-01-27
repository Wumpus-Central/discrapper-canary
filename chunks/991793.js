n.d(t, {
    Ay: () => P,
    G0: () => v,
    p9: () => N,
    q5: () => y,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(139033),
    a = n(314116),
    o = n(421380),
    c = n(397927),
    d = n(827343),
    u = n(926919),
    _ = n(233545),
    p = n(77729),
    m = n(235986),
    g = n(98919),
    A = n(487329),
    f = n(195043),
    h = n(111162),
    b = n(430452),
    E = n(412780),
    x = n(353835),
    O = n(698723),
    C = n(531525),
    I = n(652215),
    T = n(731854),
    S = n(985018),
    j = n(473169);
async function v() {
    let e = await p.A.fileManager.getLogPath();
    p.A.fileManager.showItemInFolder(e);
}

function N(e) {
    (0, a.A)({
        title: S.intl.string(S.t["7UXEF2"]),
        subtitle: S.intl.string(S.t.IYPrRl),
        confirmText: S.intl.string(S.t.BddRzS),
        onConfirm: () => d.A.setDebugLogging(e),
    });
}
async function y(e) {
    let { onUploadStart: t, onUploadFinish: n } = e;
    null == t || t();
    try {
        let e, t;
        await b.A.getMediaEngine().writeAudioDebugState(),
            await x.A.submitLiveCrashReport({
                message: {
                    message: "User Live Dump",
                },
            }),
            await (0, g.a)(I.Umv.RTC),
            (e = S.intl.string(S.t["fKBB8+"])),
            (t = S.intl.string(S.t.BvyxE7)),
            (0, s.A)({
                title: e,
                subtitle: t,
            });
    } catch (a) {
        var i, l;
        let e, t, n, s;
        (i = a.displayMessage),
            (e = S.intl.string(S.t.QZg0J7)),
            (t = null != i ? i : S.intl.string(S.t.VzHcSm)),
            (n = null == (l = (0, A.B1)(A.iy.DEBUG_LOG_UPLOAD_FAILED)) ? void 0 : l.errorCode),
            (s = S.intl.formatToPlainString(S.t.ejOT95, {
                errorCode: n,
            })),
            (0, c.qfG)((n) => {
                var i, l;
                return (0, r.jsx)(
                    c.VoidConfirmModal,
                    ((i = (function (e) {
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
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })(
                        {
                            header: e,
                            confirmButtonColor: o.$n.Colors.BRAND,
                            confirmText: S.intl.string(S.t.BddRzS),
                        },
                        n,
                    )),
                    (l = l =
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
                                        children: t,
                                    }),
                                    (0, r.jsx)(c.Text, {
                                        variant: "text-sm/semibold",
                                        selectable: !0,
                                        style: {
                                            marginTop: "auto",
                                        },
                                        children: s,
                                    }),
                                ],
                            }),
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(l)).forEach(function (e) {
                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                          }),
                    i),
                );
            });
    } finally {
        null == n || n();
    }
}

function P() {
    let [e, t] = i.useState(!1),
        { debugLogging: n, aecDumpEnabled: s } = (0, l.cf)([b.A], () => ({
            aecDumpSupported: b.A.isAecDumpSupported(),
            debugLogging: b.A.getDebugLogging(),
            aecDumpEnabled: b.A.getAecDump(),
            supportsConnectionReplay: b.A.supports(T.O5.CONNECTION_REPLAY),
        })),
        a = (0, l.bG)([h.default], () => h.default.isStreamInfoOverlayEnabled),
        o = (0, l.bG)([E.Ay], () => E.Ay.shouldRecordNextConnection()),
        p = i.useCallback(async () => {
            await y({
                onUploadStart: () => t(!0),
            });
        }, []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(f.x, {
                setting: C.H.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY,
                children: (0, r.jsx)(c.dOG, {
                    label: S.intl.string(S.t["0CEP6e"]),
                    description: S.intl.string(S.t["kBXuW+"]),
                    checked: a,
                    onChange: (e) => {
                        (0, O.A)("stream_info_overlay_enabled", e, a),
                            (0, u.x)({
                                isStreamInfoOverlayEnabled: e,
                            });
                    },
                }),
            }),
            (0, r.jsx)(f.x, {
                setting: C.H.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP,
                children: (0, r.jsx)(c.dOG, {
                    label: S.intl.string(S.t["r6K+TL"]),
                    description: S.intl.string(S.t["xl9+I6"]),
                    checked: s,
                    onChange: (e) => d.A.setAecDump(e),
                }),
            }),
            (0, r.jsxs)(f.x, {
                setting: C.H.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY,
                children: [
                    (0, r.jsx)(c.dOG, {
                        label: S.intl.string(S.t.U4FgFK),
                        description: S.intl.string(S.t.Lm72RU),
                        checked: o,
                        onChange: (e) => _.Et(e),
                    }),
                    (0, r.jsx)(m.A, {
                        className: j.SX,
                        children: (0, r.jsx)(m.A.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, r.jsx)(c.Button, {
                                variant: "primary",
                                size: "sm",
                                text: S.intl.string(S.t.nJnOHO),
                                onClick: () => _.YW(),
                            }),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(f.x, {
                setting: C.H.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING,
                children: (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(c.dOG, {
                            label: S.intl.string(S.t["726JHL"]),
                            description: S.intl.string(S.t["/7ak9Q"]),
                            checked: n,
                            onChange: N,
                        }),
                        (0, r.jsxs)(c.ButtonGroup, {
                            size: "sm",
                            children: [
                                (0, r.jsx)(c.Button, {
                                    variant: "primary",
                                    text: S.intl.string(S.t["3UB9ad"]),
                                    disabled: e,
                                    onClick: p,
                                }),
                                (0, r.jsx)(c.Button, {
                                    variant: "secondary",
                                    text: S.intl.string(S.t.nuPtYi),
                                    onClick: v,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
