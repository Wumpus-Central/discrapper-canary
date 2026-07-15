n.d(t, { g: () => c, j: () => h });
var i = n(17928),
    r = n(888916),
    l = n(915725),
    s = n(430795),
    a = n(419954),
    o = n(780964),
    u = n(753070),
    d = n(375708);
function c() {
    return [
        {
            id: "480p",
            value: u.on.RESOLUTION_480,
            label: d.intl.formatToPlainString(d.t.TEOC0I, { resolution: u.on.RESOLUTION_480 }),
        },
        {
            id: "720p",
            value: u.on.RESOLUTION_720,
            label: d.intl.formatToPlainString(d.t.TEOC0I, { resolution: u.on.RESOLUTION_720 }),
        },
        {
            id: "1080p",
            value: u.on.RESOLUTION_1080,
            label: d.intl.formatToPlainString(d.t.TEOC0I, { resolution: u.on.RESOLUTION_1080 }),
        },
        {
            id: "1440p",
            value: u.on.RESOLUTION_1440,
            label: d.intl.formatToPlainString(d.t.TEOC0I, { resolution: u.on.RESOLUTION_1440 }),
        },
        { id: "source", value: u.on.RESOLUTION_SOURCE, label: d.intl.string(d.t.XjXqzh) },
    ];
}
let h = (0, a.Hn)(o.X.CLIPS_RESOLUTION, {
    useTitle: () => d.intl.string(d.t.aFudZJ),
    useSubtitle: () => d.intl.string(d.t.nIrkW5),
    useValue: () => (0, i.bG)([l.Ay], () => l.Ay.getSettings().clipsQuality.resolution),
    setValue: (e) => {
        let { clipsQuality: t } = l.Ay.getSettings();
        s.GS({ resolution: e, frameRate: t.frameRate });
    },
    useOptions: c,
    useDisabled: r.Rt,
});
