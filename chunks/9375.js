n.d(t, { j: () => u });
var i = n(311907),
    s = n(274372),
    l = n(399925),
    a = n(419954),
    r = n(780964),
    o = n(753070),
    d = n(985018);
let u = (0, a.Hn)(r.X.CLIPS_RESOLUTION, {
    useTitle: () => d.intl.string(d.t.aFudZJ),
    useSubtitle: () => d.intl.string(d.t.nIrkW5),
    useValue: () => (0, i.bG)([s.A], () => s.A.getSettings().clipsQuality.resolution),
    setValue: (e) => {
        let { clipsQuality: t } = s.A.getSettings();
        l.GS({ resolution: e, frameRate: t.frameRate });
    },
    useOptions: () => [
        {
            id: "480p",
            value: o.on.RESOLUTION_480,
            label: d.intl.formatToPlainString(d.t.TEOC0I, { resolution: o.on.RESOLUTION_480 }),
        },
        {
            id: "720p",
            value: o.on.RESOLUTION_720,
            label: d.intl.formatToPlainString(d.t.TEOC0I, { resolution: o.on.RESOLUTION_720 }),
        },
        {
            id: "1080p",
            value: o.on.RESOLUTION_1080,
            label: d.intl.formatToPlainString(d.t.TEOC0I, { resolution: o.on.RESOLUTION_1080 }),
        },
        {
            id: "1440p",
            value: o.on.RESOLUTION_1440,
            label: d.intl.formatToPlainString(d.t.TEOC0I, { resolution: o.on.RESOLUTION_1440 }),
        },
        { id: "source", value: o.on.RESOLUTION_SOURCE, label: d.intl.string(d.t.XjXqzh) },
    ],
});
