i.d(t, { L: () => y });
var n = i(627968),
    l = i(64700),
    s = i(574381),
    r = i(311907),
    a = i(139033),
    u = i(314116),
    o = i(421380),
    d = i(397927),
    _ = i(827343),
    T = i(77729),
    A = i(839214),
    S = i(98919),
    E = i(709710),
    c = i(419954),
    g = i(430452),
    I = i(353835),
    C = i(780964),
    N = i(652215),
    O = i(731854),
    b = i(985018);
let m = (0, A.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function L() {
    let e = await T.A.fileManager.getLogPath();
    T.A.fileManager.showItemInFolder(e);
}
function p(e) {
    (0, u.A)({
        title: b.intl.string(b.t["7UXEF2"]),
        subtitle: b.intl.string(b.t.IYPrRl),
        confirmText: b.intl.string(b.t.BddRzS),
        onConfirm: () => _.A.setDebugLogging(e),
    });
}
async function R(e) {
    let { onUploadStart: t, onUploadFinish: i } = e;
    t?.();
    try {
        let e, t;
        await g.Ay.getMediaEngine().writeAudioDebugState(),
            await I.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, S.a)(N.Umv.RTC),
            (e = b.intl.string(b.t["fKBB8+"])),
            (t = b.intl.string(b.t.BvyxE7)),
            (0, a.A)({ title: e, subtitle: t });
    } catch (r) {
        var l;
        let e, t, i, s;
        (l = r.displayMessage),
            (e = b.intl.string(b.t.QZg0J7)),
            (t = l ?? b.intl.string(b.t.VzHcSm)),
            (i = (0, E.B1)(E.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (s = b.intl.formatToPlainString(b.t.ejOT95, { errorCode: i })),
            (0, d.qfG)((i) =>
                (0, n.jsx)(d.VoidConfirmModal, {
                    header: e,
                    confirmButtonColor: o.$n.Colors.BRAND,
                    confirmText: b.intl.string(b.t.BddRzS),
                    ...i,
                    children: (0, n.jsxs)("div", {
                        style: { display: "flex", flexDirection: "column", height: "100%" },
                        children: [
                            (0, n.jsx)(d.Text, { variant: "text-md/normal", children: t }),
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
async function D() {
    await R({
        onUploadStart: () => m.setState({ isUploading: !0 }),
        onUploadFinish: () => m.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let y = (0, c.E2)(C.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [b.intl.string(b.t["726JHL"]), b.intl.string(b.t.EbwFfR), b.intl.string(b.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, r.bG)([g.Ay], () => g.Ay.supports(O.O5.DEBUG_LOGGING));
        return s.Av && e && null != T.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, r.bG)([g.Ay], () => g.Ay.getDebugLogging()),
            t = m.useField("isUploading"),
            i = m.useField("isDisabled"),
            s = l.useId();
        return (0, n.jsxs)("fieldset", {
            children: [
                (0, n.jsx)(d.AC4, { tag: "legend", id: s, children: b.intl.string(b.t["FjN+et"]) }),
                (0, n.jsxs)(d.BJc, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, n.jsx)(d.dOG, {
                            label: b.intl.string(b.t["726JHL"]),
                            description: b.intl.string(b.t["/7ak9Q"]),
                            checked: e,
                            onChange: p,
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
                                        onClick: L,
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
