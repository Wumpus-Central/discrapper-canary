e.d(t, {
    Z: function () {
        return a;
    }
});
var o = e(192379),
    s = e(442837),
    l = e(110924),
    u = e(317381);
function a(n) {
    let { applicationId: t, channelId: e, launchingComponentId: a, onSubmissionComplete: c } = n,
        i = (0, s.e7)([u.ZP], () => u.ZP.getLaunchState(t, e)),
        r = null != i && i.isLaunching && i.componentId === a,
        d = (0, l.Z)(r);
    return (
        o.useEffect(() => {
            !r && d && (null == c || c());
        }, [r, d, c]),
        {
            submitting: r,
            wasSubmitting: d
        }
    );
}
