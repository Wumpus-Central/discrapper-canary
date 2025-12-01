n.d(t, { Z: () => u });
var r = n(473749),
    i = n(442837),
    a = n(110924),
    o = n(317381),
    s = n(835473),
    l = n(591472),
    c = n(813370);
function u(e) {
    let { applicationId: t, context: n, launchingComponentId: u, onSubmissionComplete: d } = e,
        f = (0, s.q)(t),
        p = (0, i.e7)([o.ZP], () => o.ZP.getLaunchState(t, "channel" === n.type ? n.channel.id : void 0)),
        _ = (0, i.e7)([l.Z], () => l.Z.isLaunchingFrame(t)),
        m = null != f && (0, c.g)(f) ? _ : null != p && p.isLaunching && p.componentId === u,
        h = (0, a.Z)(m);
    return (
        r.useEffect(() => {
            !m && h && (null == d || d());
        }, [m, h, d]),
        {
            submitting: m,
            wasSubmitting: null != h ? h : null,
        }
    );
}
