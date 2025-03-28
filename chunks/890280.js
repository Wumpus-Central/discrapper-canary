n.d(t, { Z: () => a });
var i = n(192379),
    l = n(442837),
    r = n(110924),
    o = n(317381);
function a(e) {
    let { applicationId: t, context: n, launchingComponentId: a, onSubmissionComplete: s } = e,
        c = (0, l.e7)([o.ZP], () => o.ZP.getLaunchState(t, 'channel' === n.type ? n.channel.id : void 0)),
        u = null != c && c.isLaunching && c.componentId === a,
        d = (0, r.Z)(u);
    return (
        i.useEffect(() => {
            !u && d && (null == s || s());
        }, [u, d, s]),
        {
            submitting: u,
            wasSubmitting: d
        }
    );
}
