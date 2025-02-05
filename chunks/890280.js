n.d(t, { Z: () => s });
var i = n(192379),
    l = n(442837),
    a = n(110924),
    o = n(317381);
function s(e) {
    let { applicationId: t, context: n, launchingComponentId: s, onSubmissionComplete: r } = e,
        c = 'channel' === n.type ? n.channel.id : void 0,
        d = (0, l.e7)([o.ZP], () => o.ZP.getLaunchState(t, c)),
        u = null != d && d.isLaunching && d.componentId === s,
        m = (0, a.Z)(u);
    return (
        i.useEffect(() => {
            !u && m && (null == r || r());
        }, [u, m, r]),
        {
            submitting: u,
            wasSubmitting: m
        }
    );
}
