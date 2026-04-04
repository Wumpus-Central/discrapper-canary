n.d(t, { s: () => o });
var i = n(311907),
    s = n(926919),
    l = n(419954),
    a = n(111162),
    r = n(780964);
let o = (0, l.zD)(r.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
    useTitle: () => "Only Show Preview App Collections",
    useSubtitle: () =>
        "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
    useValue: () => (0, i.bG)([a.default], () => a.default.onlyShowPreviewAppCollections),
    setValue: (e) => (0, s.x)({ onlyShowPreviewAppCollections: e }),
});
