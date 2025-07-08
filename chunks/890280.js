n.d(t, { Z: () => c });
var l = n(73800),
    i = n(442837),
    r = n(110924),
    a = n(317381),
    o = n(835473),
    s = n(813370);
function c(e) {
    let { applicationId: t, context: n, launchingComponentId: c, onSubmissionComplete: u } = e,
        d = (0, o.q)(t),
        p = (0, i.e7)([a.ZP], () => a.ZP.getLaunchState(t, 'channel' === n.type ? n.channel.id : void 0)),
        m = !(null != d && (0, s.g)(d)) && null != p && p.isLaunching && p.componentId === c,
        f = (0, r.Z)(m);
    return (
        l.useEffect(() => {
            !m && f && (null == u || u());
        }, [m, f, u]),
        {
            submitting: m,
            wasSubmitting: null != f ? f : null
        }
    );
}
