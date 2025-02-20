n.d(t, { Z: () => a });
var i = n(192379),
    l = n(442837),
    r = n(110924),
    o = n(317381);
function a(e) {
    let { applicationId: t, context: n, launchingComponentId: a, onSubmissionComplete: s } = e,
        c = 'channel' === n.type ? n.channel.id : void 0,
        u = (0, l.e7)([o.ZP], () => o.ZP.getLaunchState(t, c)),
        d = null != u && u.isLaunching && u.componentId === a,
        m = (0, r.Z)(d);
    return (
        i.useEffect(() => {
            !d && m && (null == s || s());
        }, [d, m, s]),
        {
            submitting: d,
            wasSubmitting: m
        }
    );
}
