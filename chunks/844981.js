n.d(t, { Ay: () => _, L3: () => d, Q2: () => u, Xt: () => c });
var i,
    r = n(582128),
    a = n(17928),
    s = n(738566),
    l = n(916546),
    o = n(731854),
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
function u(e) {
    let { enabled: t } = s.A.getConfig({ location: e });
    return t && l.Ay.supports(o.O5.SPATIAL_AUDIO);
}
function _(e) {
    let { enabled: t } = s.A.useConfig({ location: e }),
        { supported: n, status: i } = (0, a.cf)([l.Ay], () => ({
            supported: l.Ay.supports(o.O5.SPATIAL_AUDIO),
            status: l.Ay.getSpatialAudioStatus(),
        }));
    return r.useMemo(
        () =>
            (function (e, t) {
                if (!e) return "HIDDEN";
                switch (t) {
                    case o.D1.MONO_OUTPUT:
                        return "BLOCKED_MONO_OUTPUT";
                    case o.D1.INIT_FAILED:
                        return "BLOCKED_INIT_FAILED";
                    case o.D1.HRTF_FAILED:
                        return "BLOCKED_HRTF_FAILED";
                    default:
                        return "AVAILABLE";
                }
            })(t && n, i),
        [t, n, i],
    );
}
