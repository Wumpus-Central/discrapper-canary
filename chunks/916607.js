n.d(t, { K: () => T, P: () => p });
var i = n(627968),
    s = n(64700),
    l = n(574381),
    a = n(311907),
    r = n(192308),
    o = n(827343),
    d = n(793574),
    c = n(419954),
    u = n(430452),
    m = n(780964),
    g = n(944993),
    _ = n(509381),
    x = n(731854),
    A = n(985018);
let h = !l.Av;
function p() {
    return (0, a.bG)([u.Ay], () => u.Ay.getMode() === x.TB.PUSH_TO_TALK);
}
let T = (0, c.zD)(m.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return l.Av ? A.intl.string(A.t.tG4Np5) : A.intl.string(A.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, a.bG)([u.Ay], () => u.Ay.getMode());
        return s.useMemo(() => {
            if (!l.Av && e === x.TB.PUSH_TO_TALK)
                return A.intl.format(A.t["VHI4+Y"], { onDownloadClick: () => (0, g._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, a.bG)([u.Ay], () => u.Ay.getActiveInputProfile() !== _.m.STUDIO);
    },
    useValue: function () {
        return (0, a.bG)([u.Ay], () => u.Ay.getMode() === x.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, s;
        (t = e ? x.TB.PUSH_TO_TALK : x.TB.VOICE_ACTIVITY),
            (s = [d.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === x.TB.PUSH_TO_TALK &&
                h &&
                (0, r.openModalLazy)(async () => {
                    let { default: e } = await n.e("10919").then(n.bind(n, 556506));
                    return (t) =>
                        (0, i.jsx)(e, {
                            title: A.intl.string(A.t.Kdt0Gb),
                            confirmText: A.intl.string(A.t["1WjMbC"]),
                            cancelText: A.intl.string(A.t.BddRzS),
                            onConfirm: () => (0, g._)("PTT Limited Modal"),
                            body: A.intl.string(A.t.NIozvt),
                            ...t,
                        });
                }),
            o.A.setMode(t, void 0, void 0, { analyticsLocations: s });
    },
    useSearchTerms: () => [A.intl.string(A.t["pS+K2L"]), A.intl.string(A.t.nuFtHH)],
});
