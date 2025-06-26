n.d(t, { Z: () => o });
var l = n(73800),
    i = n(442837),
    r = n(110924),
    a = n(317381);
function o(e) {
    let { applicationId: t, context: n, launchingComponentId: o, onSubmissionComplete: s } = e,
        c = (0, i.e7)([a.ZP], () => a.ZP.getLaunchState(t, 'channel' === n.type ? n.channel.id : void 0)),
        u = null != c && c.isLaunching && c.componentId === o,
        d = (0, r.Z)(u);
    return (
        l.useEffect(() => {
            !u && d && (null == s || s());
        }, [u, d, s]),
        {
            submitting: u,
            wasSubmitting: null != d ? d : null
        }
    );
}
