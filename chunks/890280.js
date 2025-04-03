n.d(t, { Z: () => o });
var i = n(192379),
    r = n(442837),
    l = n(110924),
    a = n(317381);
function o(e) {
    let { applicationId: t, context: n, launchingComponentId: o, onSubmissionComplete: c } = e,
        s = (0, r.e7)([a.ZP], () => a.ZP.getLaunchState(t, 'channel' === n.type ? n.channel.id : void 0)),
        u = null != s && s.isLaunching && s.componentId === o,
        d = (0, l.Z)(u);
    return (
        i.useEffect(() => {
            !u && d && (null == c || c());
        }, [u, d, c]),
        {
            submitting: u,
            wasSubmitting: d
        }
    );
}
