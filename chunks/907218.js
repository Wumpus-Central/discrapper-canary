i.d(t, { k: () => d });
var n = i(311907),
    l = i(274372),
    s = i(399925),
    r = i(419954),
    a = i(780964),
    u = i(753070),
    o = i(985018);
let d = (0, r.Hn)(a.X.CLIPS_FRAME_RATE, {
    useTitle: () => o.intl.string(o.t["2wScL1"]),
    useSubtitle: () => o.intl.string(o.t["Rf9+fy"]),
    useValue: () => (0, n.bG)([l.A], () => l.A.getSettings().clipsQuality.frameRate),
    setValue: (e) => {
        let { clipsQuality: t } = l.A.getSettings();
        s.GS({ resolution: t.resolution, frameRate: e });
    },
    useOptions: () => [
        { id: "15", value: u.kn.FPS_15, label: o.intl.formatToPlainString(o.t.Qb44XH, { fps: u.kn.FPS_15 }) },
        { id: "30", value: u.kn.FPS_30, label: o.intl.formatToPlainString(o.t.Qb44XH, { fps: u.kn.FPS_30 }) },
        { id: "60", value: u.kn.FPS_60, label: o.intl.formatToPlainString(o.t.Qb44XH, { fps: u.kn.FPS_60 }) },
    ],
});
