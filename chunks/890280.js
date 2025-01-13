n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(192379),
    l = n(442837),
    r = n(110924),
    a = n(317381);
function s(e) {
    let { applicationId: t, channelId: n, launchingComponentId: s, onSubmissionComplete: o } = e,
        c = (0, l.e7)([a.ZP], () => a.ZP.getLaunchState(t, n)),
        u = null != c && c.isLaunching && c.componentId === s,
        d = (0, r.Z)(u);
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
