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
    let { applicationId: t, context: n, launchingComponentId: s, onSubmissionComplete: o } = e,
        c = 'channel' === n.type ? n.channel.id : void 0,
        u = (0, l.e7)([a.ZP], () => a.ZP.getLaunchState(t, c)),
        d = null != u && u.isLaunching && u.componentId === s,
        m = (0, r.Z)(d);
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
