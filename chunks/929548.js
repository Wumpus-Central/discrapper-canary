i.d(e, { L: () => c });
var n = i(627968),
    l = i(64700),
    s = i(574381),
    r = i(158954),
    u = i(311907),
    a = i(77729),
    o = i(839214),
    T = i(419954),
    A = i(430452),
    S = i(780964),
    E = i(991793),
    d = i(731854),
    _ = i(985018);
let I = (0, o.D)(() => ({
    isUploading: !1,
    isDisabled: !1,
}));
async function g() {
    await (0, E.q5)({
        onUploadStart: () => I.setState({ isUploading: !0 }),
        onUploadFinish: () =>
            I.setState({
                isUploading: !1,
                isDisabled: !0,
            }),
    });
}
let c = (0, T.E2)(S.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [_.intl.string(_.t["726JHL"]), _.intl.string(_.t.EbwFfR), _.intl.string(_.t.nuPtYi)],
    usePredicate: function () {
        let t = (0, u.bG)([A.A], () => A.A.supports(d.O5.DEBUG_LOGGING));
        return s.Av && t && null != a.A.fileManager.readLogFiles;
    },
    Component: function () {
        let t = (0, u.bG)([A.A], () => A.A.getDebugLogging()),
            e = I.useField("isUploading"),
            i = I.useField("isDisabled"),
            s = l.useId();
        return (0, n.jsxs)("fieldset", {
            children: [
                (0, n.jsx)(r.AC4, {
                    tag: "legend",
                    id: s,
                    children: _.intl.string(_.t["FjN+et"]),
                }),
                (0, n.jsxs)(r.BJc, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, n.jsx)(r.dOG, {
                            label: _.intl.string(_.t["726JHL"]),
                            description: _.intl.string(_.t["/7ak9Q"]),
                            checked: t,
                            onChange: E.p9,
                        }),
                        (0, n.jsx)("div", {
                            role: "group",
                            "aria-labelledby": s,
                            children: (0, n.jsxs)(r.e2v, {
                                children: [
                                    (0, n.jsx)(r.$nd, {
                                        variant: "secondary",
                                        text: _.intl.string(_.t.EbwFfR),
                                        onClick: g,
                                        loading: e,
                                        disabled: i,
                                        "aria-label": _.intl.string(_.t.aY1OH2),
                                    }),
                                    (0, n.jsx)(r.$nd, {
                                        variant: "secondary",
                                        text: _.intl.string(_.t.nuPtYi),
                                        onClick: E.G0,
                                        "aria-label": _.intl.string(_.t["L/hFOe"]),
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
