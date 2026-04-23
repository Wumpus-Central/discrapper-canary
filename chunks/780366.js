n.d(t, { C: () => d });
var i = n(311907),
    s = n(274372),
    l = n(399925),
    a = n(419954),
    r = n(780964),
    o = n(985018);
let d = (0, a.zD)(r.X.CLIPS_ENABLE_PHRASE_SIGNALS, {
    useTitle: () => o.intl.string(o.t.nHsilt),
    useSubtitle: () => o.intl.string(o.t["s6wq+m"]),
    useValue: () => (0, i.bG)([s.A], () => s.A.getSettings().clipSignals.enablePhraseSignals),
    setValue: (e) => {
        let t = s.A.getSettings().clipSignals;
        l.PW({ ...t, enablePhraseSignals: e });
    },
});
