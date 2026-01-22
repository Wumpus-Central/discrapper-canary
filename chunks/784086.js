i.d(e, { L: () => o });
var n = i(311907),
    l = i(827343),
    s = i(419954),
    r = i(430452),
    u = i(780964),
    a = i(985018);
let o = (0, s.zD)(u.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
    useTitle: () => a.intl.string(a.t["4I0qzZ"]),
    useValue: function () {
        return (0, n.bG)([r.A], () => r.A.getExperimentalSoundshare());
    },
    setValue: l.A.setExperimentalSoundshare,
    usePredicate: function () {
        return (0, n.bG)([r.A], () => {
            let t = r.A.supportsExperimentalSoundshare(),
                e = r.A.supportsHookSoundshare();
            return t && e;
        });
    },
});
