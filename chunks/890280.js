n.d(t, { Z: () => s });
var i = n(192379),
    l = n(442837),
    a = n(110924),
    r = n(317381);
function s(e) {
    let { applicationId: t, context: n, launchingComponentId: s, onSubmissionComplete: o } = e,
        c = 'channel' === n.type ? n.channel.id : void 0,
        u = (0, l.e7)([r.ZP], () => r.ZP.getLaunchState(t, c)),
        d = null != u && u.isLaunching && u.componentId === s,
        m = (0, a.Z)(d);
    return (
        i.useEffect(() => {
            !d && m && (null == o || o());
        }, [d, m, o]),
        {
            submitting: d,
            wasSubmitting: m
        }
    );
}
