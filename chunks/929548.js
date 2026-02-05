i.d(e, { L: () => P });
var n = i(627968),
    l = i(64700),
    s = i(574381),
    r = i(311907),
    a = i(139033),
    u = i(314116),
    o = i(421380),
    d = i(397927),
    T = i(827343),
    A = i(77729),
    S = i(839214),
    E = i(98919),
    g = i(709710),
    _ = i(419954),
    c = i(430452),
    I = i(353835),
    N = i(780964),
    C = i(652215),
    O = i(731854),
    L = i(985018);
let R = (0, S.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function b() {
    let t = await A.A.fileManager.getLogPath();
    A.A.fileManager.showItemInFolder(t);
}
function D(t) {
    (0, u.A)({
        title: L.intl.string(L.t["7UXEF2"]),
        subtitle: L.intl.string(L.t.IYPrRl),
        confirmText: L.intl.string(L.t.BddRzS),
        onConfirm: () => T.A.setDebugLogging(t),
    });
}
async function m(t) {
    let { onUploadStart: e, onUploadFinish: i } = t;
    e?.();
    try {
        let t, e;
        await c.A.getMediaEngine().writeAudioDebugState(),
            await I.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, E.a)(C.Umv.RTC),
            (t = L.intl.string(L.t["fKBB8+"])),
            (e = L.intl.string(L.t.BvyxE7)),
            (0, a.A)({ title: t, subtitle: e });
    } catch (r) {
        var l;
        let t, e, i, s;
        (l = r.displayMessage),
            (t = L.intl.string(L.t.QZg0J7)),
            (e = l ?? L.intl.string(L.t.VzHcSm)),
            (i = (0, g.B1)(g.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (s = L.intl.formatToPlainString(L.t.ejOT95, { errorCode: i })),
            (0, d.qfG)((i) =>
                (0, n.jsx)(d.VoidConfirmModal, {
                    header: t,
                    confirmButtonColor: o.$n.Colors.BRAND,
                    confirmText: L.intl.string(L.t.BddRzS),
                    ...i,
                    children: (0, n.jsxs)("div", {
                        style: { display: "flex", flexDirection: "column", height: "100%" },
                        children: [
                            (0, n.jsx)(d.Text, { variant: "text-md/normal", children: e }),
                            (0, n.jsx)(d.Text, {
                                variant: "text-sm/semibold",
                                selectable: !0,
                                style: { marginTop: "auto" },
                                children: s,
                            }),
                        ],
                    }),
                }),
            );
    } finally {
        i?.();
    }
}
async function p() {
    await m({
        onUploadStart: () => R.setState({ isUploading: !0 }),
        onUploadFinish: () => R.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let P = (0, _.E2)(N.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [L.intl.string(L.t["726JHL"]), L.intl.string(L.t.EbwFfR), L.intl.string(L.t.nuPtYi)],
    usePredicate: function () {
        let t = (0, r.bG)([c.A], () => c.A.supports(O.O5.DEBUG_LOGGING));
        return s.Av && t && null != A.A.fileManager.readLogFiles;
    },
    Component: function () {
        let t = (0, r.bG)([c.A], () => c.A.getDebugLogging()),
            e = R.useField("isUploading"),
            i = R.useField("isDisabled"),
            s = l.useId();
        return (0, n.jsxs)("fieldset", {
            children: [
                (0, n.jsx)(d.AC4, { tag: "legend", id: s, children: L.intl.string(L.t["FjN+et"]) }),
                (0, n.jsxs)(d.BJc, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, n.jsx)(d.dOG, {
                            label: L.intl.string(L.t["726JHL"]),
                            description: L.intl.string(L.t["/7ak9Q"]),
                            checked: t,
                            onChange: D,
                        }),
                        (0, n.jsx)("div", {
                            role: "group",
                            "aria-labelledby": s,
                            children: (0, n.jsxs)(d.ButtonGroup, {
                                children: [
                                    (0, n.jsx)(d.Button, {
                                        variant: "secondary",
                                        text: L.intl.string(L.t.EbwFfR),
                                        onClick: p,
                                        loading: e,
                                        disabled: i,
                                        "aria-label": L.intl.string(L.t.aY1OH2),
                                    }),
                                    (0, n.jsx)(d.Button, {
                                        variant: "secondary",
                                        text: L.intl.string(L.t.nuPtYi),
                                        onClick: b,
                                        "aria-label": L.intl.string(L.t["L/hFOe"]),
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
