n.d(t, { K: () => E, P: () => x });
var i = n(627968),
    s = n(64700),
    l = n(574381),
    a = n(311907),
    r = n(192308),
    o = n(827343),
    d = n(793574),
    u = n(419954),
    c = n(430452),
    g = n(780964),
    m = n(944993),
    _ = n(509381),
    A = n(731854),
    h = n(985018);
let p = !l.Av;
function x() {
    return (0, a.bG)([c.Ay], () => c.Ay.getMode() === A.TB.PUSH_TO_TALK);
}
let E = (0, u.zD)(g.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return l.Av ? h.intl.string(h.t.tG4Np5) : h.intl.string(h.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, a.bG)([c.Ay], () => c.Ay.getMode());
        return s.useMemo(() => {
            if (!l.Av && e === A.TB.PUSH_TO_TALK)
                return h.intl.format(h.t["VHI4+Y"], { onDownloadClick: () => (0, m._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, a.bG)([c.Ay], () => c.Ay.getActiveInputProfile() !== _.m.STUDIO);
    },
    useValue: function () {
        return (0, a.bG)([c.Ay], () => c.Ay.getMode() === A.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, s;
        (t = e ? A.TB.PUSH_TO_TALK : A.TB.VOICE_ACTIVITY),
            (s = [d.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === A.TB.PUSH_TO_TALK &&
                p &&
                (0, r.openModalLazy)(async () => {
                    let { default: e } = await n.e("10919").then(n.bind(n, 556506));
                    return (t) =>
                        (0, i.jsx)(e, {
                            title: h.intl.string(h.t.Kdt0Gb),
                            confirmText: h.intl.string(h.t["1WjMbC"]),
                            cancelText: h.intl.string(h.t.BddRzS),
                            onConfirm: () => (0, m._)("PTT Limited Modal"),
                            body: h.intl.string(h.t.NIozvt),
                            ...t,
                        });
                }),
            o.A.setMode(t, void 0, void 0, { analyticsLocations: s });
    },
    useSearchTerms: () => [h.intl.string(h.t["pS+K2L"]), h.intl.string(h.t.nuFtHH)],
});
