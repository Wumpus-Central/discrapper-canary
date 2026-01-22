i.d(e, {
    k: () => T,
});
var n = i(311907),
    l = i(274372),
    s = i(399925),
    r = i(419954),
    u = i(780964),
    a = i(753070),
    o = i(985018);
let T = (0, r.Hn)(u.X.CLIPS_FRAME_RATE, {
    useTitle: () => o.intl.string(o.t["2wScL1"]),
    useSubtitle: () => o.intl.string(o.t["Rf9+fy"]),
    useValue: () => (0, n.bG)([l.A], () => l.A.getSettings().clipsQuality.frameRate),
    setValue: (t) => {
        let { clipsQuality: e } = l.A.getSettings();
        s.GS({
            resolution: e.resolution,
            frameRate: t,
        });
    },
    useOptions: () => [
        {
            id: "15",
            value: a.kn.FPS_15,
            label: o.intl.formatToPlainString(o.t.Qb44XH, {
                fps: a.kn.FPS_15,
            }),
        },
        {
            id: "30",
            value: a.kn.FPS_30,
            label: o.intl.formatToPlainString(o.t.Qb44XH, {
                fps: a.kn.FPS_30,
            }),
        },
        {
            id: "60",
            value: a.kn.FPS_60,
            label: o.intl.formatToPlainString(o.t.Qb44XH, {
                fps: a.kn.FPS_60,
            }),
        },
    ],
});
