t.d(e, { Z: () => c });
var o = t(192379),
    a = t(442837),
    r = t(110924),
    i = t(317381);
function c(n) {
    let { applicationId: e, context: t, launchingComponentId: c, onSubmissionComplete: _ } = n,
        d = 'channel' === t.type ? t.channel.id : void 0,
        l = (0, a.e7)([i.ZP], () => i.ZP.getLaunchState(e, d)),
        s = null != l && l.isLaunching && l.componentId === c,
        p = (0, r.Z)(s);
    return (
        o.useEffect(() => {
            !s && p && (null == _ || _());
        }, [s, p, _]),
        {
            submitting: s,
            wasSubmitting: p
        }
    );
}
