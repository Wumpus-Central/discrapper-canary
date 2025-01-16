n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(192379),
    l = n(442837),
    a = n(110924),
    r = n(317381);
function s(e) {
    let { applicationId: t, channelId: n, launchingComponentId: s, onSubmissionComplete: o } = e,
        c = (0, l.e7)([r.ZP], () => r.ZP.getLaunchState(t, n)),
        u = null != c && c.isLaunching && c.componentId === s,
        d = (0, a.Z)(u);
    return (
        i.useEffect(() => {
            !u && d && (null == o || o());
        }, [u, d, o]),
        {
            submitting: u,
            wasSubmitting: d
        }
    );
}
