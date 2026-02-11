i.d(t, { L: () => o });
var n = i(311907),
    l = i(827343),
    s = i(419954),
    r = i(430452),
    a = i(780964),
    u = i(985018);
let o = (0, s.zD)(a.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
    useTitle: () => u.intl.string(u.t["4I0qzZ"]),
    useValue: function () {
        return (0, n.bG)([r.Ay], () => r.Ay.getExperimentalSoundshare());
    },
    setValue: l.A.setExperimentalSoundshare,
    usePredicate: function () {
        return (0, n.bG)([r.Ay], () => {
            let e = r.Ay.supportsExperimentalSoundshare(),
                t = r.Ay.supportsHookSoundshare();
            return e && t;
        });
    },
});
