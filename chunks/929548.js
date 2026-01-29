i.d(t, {
    L: () => R,
});
var n = i(627968),
    l = i(64700),
    s = i(574381),
    r = i(311907),
    a = i(139033),
    u = i(314116),
    o = i(421380),
    d = i(397927),
    T = i(827343),
    c = i(77729),
    A = i(839214),
    S = i(98919),
    _ = i(709710),
    E = i(419954),
    g = i(430452),
    I = i(353835),
    O = i(780964),
    C = i(652215),
    N = i(731854),
    b = i(985018);
let p = (0, A.D)(() => ({
    isUploading: !1,
    isDisabled: !1,
}));
async function m() {
    let e = await c.A.fileManager.getLogPath();
    c.A.fileManager.showItemInFolder(e);
}

function f(e) {
    (0, u.A)({
        title: b.intl.string(b.t["7UXEF2"]),
        subtitle: b.intl.string(b.t.IYPrRl),
        confirmText: b.intl.string(b.t.BddRzS),
        onConfirm: () => T.A.setDebugLogging(e),
    });
}
async function L(e) {
    let { onUploadStart: t, onUploadFinish: i } = e;
    null == t || t();
    try {
        let e, t;
        await g.A.getMediaEngine().writeAudioDebugState(),
            await I.A.submitLiveCrashReport({
                message: {
                    message: "User Live Dump",
                },
            }),
            await (0, S.a)(C.Umv.RTC),
            (e = b.intl.string(b.t["fKBB8+"])),
            (t = b.intl.string(b.t.BvyxE7)),
            (0, a.A)({
                title: e,
                subtitle: t,
            });
    } catch (a) {
        var l, s;
        let e, t, i, r;
        (l = a.displayMessage),
            (e = b.intl.string(b.t.QZg0J7)),
            (t = null != l ? l : b.intl.string(b.t.VzHcSm)),
            (i = null == (s = (0, _.B1)(_.iy.DEBUG_LOG_UPLOAD_FAILED)) ? void 0 : s.errorCode),
            (r = b.intl.formatToPlainString(b.t.ejOT95, {
                errorCode: i,
            })),
            (0, d.qfG)((i) => {
                var l, s;
                return (0, n.jsx)(
                    d.VoidConfirmModal,
                    ((l = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var i = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(i);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(i).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(i, e).enumerable;
                                    }),
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    (n = i[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = n);
                                });
                        }
                        return e;
                    })(
                        {
                            header: e,
                            confirmButtonColor: o.$n.Colors.BRAND,
                            confirmText: b.intl.string(b.t.BddRzS),
                        },
                        i,
                    )),
                    (s = s =
                        {
                            children: (0, n.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%",
                                },
                                children: [
                                    (0, n.jsx)(d.Text, {
                                        variant: "text-md/normal",
                                        children: t,
                                    }),
                                    (0, n.jsx)(d.Text, {
                                        variant: "text-sm/semibold",
                                        selectable: !0,
                                        style: {
                                            marginTop: "auto",
                                        },
                                        children: r,
                                    }),
                                ],
                            }),
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s))
                        : (function (e, t) {
                              var i = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  i.push.apply(i, n);
                              }
                              return i;
                          })(Object(s)).forEach(function (e) {
                              Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e));
                          }),
                    l),
                );
            });
    } finally {
        null == i || i();
    }
}
async function D() {
    await L({
        onUploadStart: () =>
            p.setState({
                isUploading: !0,
            }),
        onUploadFinish: () =>
            p.setState({
                isUploading: !1,
                isDisabled: !0,
            }),
    });
}
let R = (0, E.E2)(O.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [b.intl.string(b.t["726JHL"]), b.intl.string(b.t.EbwFfR), b.intl.string(b.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, r.bG)([g.A], () => g.A.supports(N.O5.DEBUG_LOGGING));
        return s.Av && e && null != c.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, r.bG)([g.A], () => g.A.getDebugLogging()),
            t = p.useField("isUploading"),
            i = p.useField("isDisabled"),
            s = l.useId();
        return (0, n.jsxs)("fieldset", {
            children: [
                (0, n.jsx)(d.AC4, {
                    tag: "legend",
                    id: s,
                    children: b.intl.string(b.t["FjN+et"]),
                }),
                (0, n.jsxs)(d.BJc, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, n.jsx)(d.dOG, {
                            label: b.intl.string(b.t["726JHL"]),
                            description: b.intl.string(b.t["/7ak9Q"]),
                            checked: e,
                            onChange: f,
                        }),
                        (0, n.jsx)("div", {
                            role: "group",
                            "aria-labelledby": s,
                            children: (0, n.jsxs)(d.ButtonGroup, {
                                children: [
                                    (0, n.jsx)(d.Button, {
                                        variant: "secondary",
                                        text: b.intl.string(b.t.EbwFfR),
                                        onClick: D,
                                        loading: t,
                                        disabled: i,
                                        "aria-label": b.intl.string(b.t.aY1OH2),
                                    }),
                                    (0, n.jsx)(d.Button, {
                                        variant: "secondary",
                                        text: b.intl.string(b.t.nuPtYi),
                                        onClick: m,
                                        "aria-label": b.intl.string(b.t["L/hFOe"]),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            ],
        });
    },
});
