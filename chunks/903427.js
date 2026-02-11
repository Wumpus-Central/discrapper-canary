i.d(t, { K: () => C, P: () => I });
var n = i(627968),
    l = i(64700),
    s = i(574381),
    r = i(311907),
    a = i(192308),
    u = i(827343),
    o = i(793574),
    d = i(419954),
    _ = i(430452),
    T = i(780964),
    A = i(825468),
    S = i(509381),
    E = i(731854),
    c = i(985018);
let g = !s.Av;
function I() {
    return (0, r.bG)([_.Ay], () => _.Ay.getMode() === E.TB.PUSH_TO_TALK);
}
let C = (0, d.zD)(T.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return s.Av ? c.intl.string(c.t.tG4Np5) : c.intl.string(c.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, r.bG)([_.Ay], () => _.Ay.getMode());
        return l.useMemo(() => {
            if (!s.Av && e === E.TB.PUSH_TO_TALK)
                return c.intl.format(c.t["VHI4+Y"], { onDownloadClick: () => (0, A._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, r.bG)([_.Ay], () => _.Ay.getActiveInputProfile() !== S.my.STUDIO);
    },
    useValue: function () {
        return (0, r.bG)([_.Ay], () => _.Ay.getMode() === E.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, l;
        (t = e ? E.TB.PUSH_TO_TALK : E.TB.VOICE_ACTIVITY),
            (l = [o.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === E.TB.PUSH_TO_TALK &&
                g &&
                (0, a.openModalLazy)(async () => {
                    let { default: e } = await i.e("10919").then(i.bind(i, 556506));
                    return (t) =>
                        (0, n.jsx)(e, {
                            title: c.intl.string(c.t.Kdt0Gb),
                            confirmText: c.intl.string(c.t["1WjMbC"]),
                            cancelText: c.intl.string(c.t.BddRzS),
                            onConfirm: () => (0, A._)("PTT Limited Modal"),
                            body: c.intl.string(c.t.NIozvt),
                            ...t,
                        });
                }),
            u.A.setMode(t, void 0, void 0, { analyticsLocations: l });
    },
    useSearchTerms: () => [c.intl.string(c.t["pS+K2L"]), c.intl.string(c.t.nuFtHH)],
});
