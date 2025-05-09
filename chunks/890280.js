n.d(t, { Z: () => a });
var i = n(73800),
    r = n(442837),
    l = n(110924),
    o = n(317381);
function a(e) {
    let { applicationId: t, context: n, launchingComponentId: a, onSubmissionComplete: c } = e,
        s = (0, r.e7)([o.ZP], () => o.ZP.getLaunchState(t, 'channel' === n.type ? n.channel.id : void 0)),
        u = null != s && s.isLaunching && s.componentId === a,
        d = (0, l.Z)(u);
    return (
        i.useEffect(() => {
            !u && d && (null == c || c());
        }, [u, d, c]),
        {
            submitting: u,
            wasSubmitting: null != d ? d : null
        }
    );
}
