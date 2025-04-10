n.d(t, { Z: () => o });
var i = n(192379),
    r = n(442837),
    l = n(110924),
    a = n(317381);
function o(e) {
    let { applicationId: t, context: n, launchingComponentId: o, onSubmissionComplete: s } = e,
        c = (0, r.e7)([a.ZP], () => a.ZP.getLaunchState(t, 'channel' === n.type ? n.channel.id : void 0)),
        u = null != c && c.isLaunching && c.componentId === o,
        d = (0, l.Z)(u);
    return (
        i.useEffect(() => {
            !u && d && (null == s || s());
        }, [u, d, s]),
        {
            submitting: u,
            wasSubmitting: null != d ? d : null
        }
    );
}
