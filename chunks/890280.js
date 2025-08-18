n.d(t, { Z: () => u });
var l = n(647438),
    i = n(442837),
    r = n(110924),
    a = n(317381),
    o = n(835473),
    s = n(591472),
    c = n(813370);
function u(e) {
    let { applicationId: t, context: n, launchingComponentId: u, onSubmissionComplete: d } = e,
        p = (0, o.q)(t),
        m = (0, i.e7)([a.ZP], () => a.ZP.getLaunchState(t, "channel" === n.type ? n.channel.id : void 0)),
        f = (0, i.e7)([s.Z], () => s.Z.isLaunchingFrame(t)),
        h = null != p && (0, c.g)(p) ? f : null != m && m.isLaunching && m.componentId === u,
        v = (0, r.Z)(h);
    return (
        l.useEffect(() => {
            !h && v && (null == d || d());
        }, [h, v, d]),
        {
            submitting: h,
            wasSubmitting: null != v ? v : null,
        }
    );
}
