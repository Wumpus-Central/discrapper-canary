n.d(t, { Z: () => c });
var r = n(73800),
    i = n(442837),
    o = n(110924),
    a = n(317381),
    s = n(835473),
    l = n(813370);
function c(e) {
    let { applicationId: t, context: n, launchingComponentId: c, onSubmissionComplete: u } = e,
        d = (0, s.q)(t),
        f = (0, i.e7)([a.ZP], () => a.ZP.getLaunchState(t, "channel" === n.type ? n.channel.id : void 0)),
        _ = !(null != d && (0, l.g)(d)) && null != f && f.isLaunching && f.componentId === c,
        p = (0, o.Z)(_);
    return (
        r.useEffect(() => {
            !_ && p && (null == u || u());
        }, [_, p, u]),
        {
            submitting: _,
            wasSubmitting: null != p ? p : null,
        }
    );
}
