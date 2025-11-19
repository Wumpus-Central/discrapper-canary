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
        _ = (0, i.e7)([o.ZP], () => o.ZP.getLaunchState(t, "channel" === n.type ? n.channel.id : void 0)),
        p = (0, i.e7)([l.Z], () => l.Z.isLaunchingFrame(t)),
        h = null != f && (0, c.g)(f) ? p : null != _ && _.isLaunching && _.componentId === u,
        m = (0, a.Z)(h);
    return (
        r.useEffect(() => {
            !h && m && (null == d || d());
        }, [h, m, d]),
        {
            submitting: h,
            wasSubmitting: null != m ? m : null,
        }
    );
}
