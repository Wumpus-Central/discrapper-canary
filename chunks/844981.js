n.d(t, { Ay: () => h, L3: () => d, Xt: () => c });
var i,
    l = n(582128),
    r = n(17928),
    s = n(738566),
    a = n(192820),
    o = n(833473),
    u = n(731854),
    d =
        (((i = {}).HIDDEN = "HIDDEN"),
        (i.AVAILABLE = "AVAILABLE"),
        (i.BLOCKED_MONO_OUTPUT = "BLOCKED_MONO_OUTPUT"),
        (i.BLOCKED_INIT_FAILED = "BLOCKED_INIT_FAILED"),
        (i.BLOCKED_HRTF_FAILED = "BLOCKED_HRTF_FAILED"),
        i);
function c(e) {
    return !["HIDDEN", "AVAILABLE"].includes(e);
}
function h(e) {
    let { enabled: t } = s.A.useConfig({ location: e }),
        { supported: n, status: i } = (0, r.cf)([a.Ay, o.A], () => ({
            supported: a.Ay.supports(u.O5.SPATIAL_AUDIO),
            status: o.A.getSpatialAudioStatus(),
        }));
    return l.useMemo(
        () =>
            (function (e, t) {
                if (!e) return "HIDDEN";
                switch (t) {
                    case u.D1.MONO_OUTPUT:
                        return "BLOCKED_MONO_OUTPUT";
                    case u.D1.INIT_FAILED:
                        return "BLOCKED_INIT_FAILED";
                    case u.D1.HRTF_FAILED:
                        return "BLOCKED_HRTF_FAILED";
                    default:
                        return "AVAILABLE";
                }
            })(t && n, i),
        [t, n, i],
    );
}
