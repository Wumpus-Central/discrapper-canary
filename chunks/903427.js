i.d(e, {
    K: () => I,
    P: () => _,
});
var n = i(64700),
    l = i(574381),
    s = i(311907),
    r = i(793574),
    u = i(419954),
    a = i(430452),
    o = i(780964),
    T = i(330688),
    A = i(825468),
    S = i(509381),
    E = i(731854),
    d = i(985018);

function _() {
    return (0, s.bG)([a.A], () => a.A.getMode() === E.TB.PUSH_TO_TALK);
}
let I = (0, u.zD)(o.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return l.Av ? d.intl.string(d.t.tG4Np5) : d.intl.string(d.t.JMyQin);
    },
    useSubtitle: function () {
        let t = (0, s.bG)([a.A], () => a.A.getMode());
        return n.useMemo(() => {
            if (!l.Av && t === E.TB.PUSH_TO_TALK)
                return d.intl.format(d.t["VHI4+Y"], {
                    onDownloadClick: () => (0, A._)("Help Text PTT"),
                });
        }, [t]);
    },
    usePredicate: function () {
        return (0, s.bG)([a.A], () => a.A.getActiveInputProfile() !== S.my.STUDIO);
    },
    useValue: function () {
        return (0, s.bG)([a.A], () => a.A.getMode() === E.TB.PUSH_TO_TALK);
    },
    setValue: function (t) {
        (0, T.TU)(t ? E.TB.PUSH_TO_TALK : E.TB.VOICE_ACTIVITY, [r.A.USER_SETTINGS_VOICE_AND_VIDEO]);
    },
    useSearchTerms: () => [d.intl.string(d.t["pS+K2L"]), d.intl.string(d.t.nuFtHH)],
});
