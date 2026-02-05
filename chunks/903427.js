i.d(e, { K: () => N, P: () => I });
var n = i(627968),
    l = i(64700),
    s = i(574381),
    r = i(311907),
    a = i(192308),
    u = i(827343),
    o = i(793574),
    d = i(419954),
    T = i(430452),
    A = i(780964),
    S = i(825468),
    E = i(509381),
    g = i(731854),
    _ = i(985018);
let c = !s.Av;
function I() {
    return (0, r.bG)([T.A], () => T.A.getMode() === g.TB.PUSH_TO_TALK);
}
let N = (0, d.zD)(A.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return s.Av ? _.intl.string(_.t.tG4Np5) : _.intl.string(_.t.JMyQin);
    },
    useSubtitle: function () {
        let t = (0, r.bG)([T.A], () => T.A.getMode());
        return l.useMemo(() => {
            if (!s.Av && t === g.TB.PUSH_TO_TALK)
                return _.intl.format(_.t["VHI4+Y"], { onDownloadClick: () => (0, S._)("Help Text PTT") });
        }, [t]);
    },
    usePredicate: function () {
        return (0, r.bG)([T.A], () => T.A.getActiveInputProfile() !== E.my.STUDIO);
    },
    useValue: function () {
        return (0, r.bG)([T.A], () => T.A.getMode() === g.TB.PUSH_TO_TALK);
    },
    setValue: function (t) {
        var e, l;
        (e = t ? g.TB.PUSH_TO_TALK : g.TB.VOICE_ACTIVITY),
            (l = [o.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            e === g.TB.PUSH_TO_TALK &&
                c &&
                (0, a.openModalLazy)(async () => {
                    let { default: t } = await i.e("10919").then(i.bind(i, 556506));
                    return (e) =>
                        (0, n.jsx)(t, {
                            title: _.intl.string(_.t.Kdt0Gb),
                            confirmText: _.intl.string(_.t["1WjMbC"]),
                            cancelText: _.intl.string(_.t.BddRzS),
                            onConfirm: () => (0, S._)("PTT Limited Modal"),
                            body: _.intl.string(_.t.NIozvt),
                            ...e,
                        });
                }),
            u.A.setMode(e, void 0, void 0, { analyticsLocations: l });
    },
    useSearchTerms: () => [_.intl.string(_.t["pS+K2L"]), _.intl.string(_.t.nuFtHH)],
});
