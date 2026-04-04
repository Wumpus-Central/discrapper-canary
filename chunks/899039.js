n.d(t, { Z: () => c });
var i = n(311907),
    s = n(684013),
    l = n(419954),
    a = n(256415),
    r = n(780964),
    o = n(652215),
    d = n(985018);
let c = (0, l.Hn)(r.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
    useTitle: () => d.intl.string(d.t.dnvZSg),
    useValue: () => (0, i.bG)([a.default], () => a.default.getAvatarSizeMode()),
    setValue: (e) => {
        s.A.setAvatarSizeMode(e);
    },
    useOptions: () => [
        { id: "large", label: d.intl.string(d.t.YcOxtr), value: o.OSZ.LARGE },
        { id: "small", label: d.intl.string(d.t.BKIKqx), value: o.OSZ.SMALL },
    ],
});
